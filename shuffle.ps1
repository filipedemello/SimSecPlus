$ErrorActionPreference = "Stop"
$questionsDir = Join-Path $PSScriptRoot "questions"

Get-ChildItem "$questionsDir\block*.js" | Sort-Object Name | ForEach-Object {
    $file = $_.FullName
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    
    # Parse each JSON question object and shuffle options
    # Strategy: find each question JSON, parse it, shuffle options, rewrite
    
    # Extract the array content between concat([ and ]);
    if ($content -match 'concat\(\[\s*([\s\S]+)\s*\]\);') {
        $arrayContent = $Matches[1]
    }
    else {
        Write-Host "SKIP: $($_.Name) - no concat found"
        return
    }
    
    # Split into individual JSON objects - split on },{ pattern at line boundaries
    # Add assembly for JSON parsing
    Add-Type -AssemblyName System.Web -ErrorAction SilentlyContinue
    
    # Use a simple approach: read the concat array as JSON
    $jsonArray = "[$arrayContent]"
    
    try {
        $questions = $jsonArray | ConvertFrom-Json
    }
    catch {
        Write-Host "ERROR parsing $($_.Name): $_"
        return
    }
    
    $rng = New-Object System.Random
    $shuffledQuestions = @()
    
    foreach ($q in $questions) {
        $opts = @($q.options)
        $correctOpt = $opts[$q.correctIndex]
        $numOpts = $opts.Count
        
        # Create index array and shuffle (Fisher-Yates)
        $indices = 0..($numOpts - 1)
        for ($i = $numOpts - 1; $i -gt 0; $i--) {
            $j = $rng.Next(0, $i + 1)
            $temp = $indices[$i]
            $indices[$i] = $indices[$j]
            $indices[$j] = $temp
        }
        
        # Build shuffled options
        $newOpts = @()
        $newCorrectIndex = -1
        for ($i = 0; $i -lt $numOpts; $i++) {
            $newOpts += $opts[$indices[$i]]
            if ($indices[$i] -eq $q.correctIndex) {
                $newCorrectIndex = $i
            }
        }
        
        # Also remap the incorrect explanation keys
        $oldIncorrect = $q.explanation.incorrect
        $newIncorrect = @{}
        
        if ($oldIncorrect) {
            # Build reverse mapping: old position -> new position
            $posMap = @{}
            for ($i = 0; $i -lt $numOpts; $i++) {
                $posMap[$indices[$i]] = $i
            }
            
            foreach ($prop in $oldIncorrect.PSObject.Properties) {
                $oldKey = [int]$prop.Name
                $newKey = $posMap[$oldKey]
                $newIncorrect["$newKey"] = $prop.Value
            }
        }
        
        $newQ = [PSCustomObject]@{
            id           = $q.id
            domain       = $q.domain
            domainName   = $q.domainName
            difficulty   = $q.difficulty
            question     = $q.question
            options      = $newOpts
            correctIndex = $newCorrectIndex
            hint         = $q.hint
            explanation  = [PSCustomObject]@{
                correct   = $q.explanation.correct
                incorrect = $newIncorrect
            }
        }
        
        $shuffledQuestions += $newQ
    }
    
    # Rebuild file content
    $header = ($content -split "`n" | Select-Object -First 2) -join "`n"
    $jsonOut = $shuffledQuestions | ForEach-Object { $_ | ConvertTo-Json -Compress -Depth 5 }
    
    $newContent = "$header`nwindow.QUESTIONS = (window.QUESTIONS || []).concat([`n"
    $newContent += ($jsonOut -join ",`n")
    $newContent += "`n]);`n"
    
    [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
    
    # Verify distribution
    $dist = @{0 = 0; 1 = 0; 2 = 0; 3 = 0 }
    foreach ($q in $shuffledQuestions) { $dist[$q.correctIndex]++ }
    Write-Host "$($_.Name): A=$($dist[0]) B=$($dist[1]) C=$($dist[2]) D=$($dist[3])"
}

# Final overall check
$allContent = ""
Get-ChildItem "$questionsDir\block*.js" | Sort-Object Name | ForEach-Object { $allContent += [System.IO.File]::ReadAllText($_.FullName) }
$ci0 = ([regex]::Matches($allContent, '"correctIndex":0')).Count
$ci1 = ([regex]::Matches($allContent, '"correctIndex":1')).Count
$ci2 = ([regex]::Matches($allContent, '"correctIndex":2')).Count
$ci3 = ([regex]::Matches($allContent, '"correctIndex":3')).Count
Write-Host "`n=== FINAL DISTRIBUTION ==="
Write-Host "A: $ci0 | B: $ci1 | C: $ci2 | D: $ci3 | Total: $($ci0+$ci1+$ci2+$ci3)"
