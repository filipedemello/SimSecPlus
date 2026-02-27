$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

# Read all source files
$css = [System.IO.File]::ReadAllText((Join-Path $root "styles.css"), [System.Text.Encoding]::UTF8)
$appJs = [System.IO.File]::ReadAllText((Join-Path $root "app.js"), [System.Text.Encoding]::UTF8)

# Read all question blocks in order
$questionsJs = ""
Get-ChildItem (Join-Path $root "questions\block*.js") | Sort-Object Name | ForEach-Object {
    $text = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $text = $text.Replace("$([char]0xFEFF)", "")
    $questionsJs += $text + "`n"
}

# Also ensure app.js is stripped of BOM
$appJs = $appJs.Replace("$([char]0xFEFF)", "")

# Read the HTML and inline everything
$html = [System.IO.File]::ReadAllText((Join-Path $root "index.html"), [System.Text.Encoding]::UTF8)

# Replace the external CSS link with inline style
$html = $html -replace '<link\s+rel="stylesheet"\s+href="styles\.css"\s*>', "<style>`n$css`n</style>"

# Remove all the question block script tags and the app.js tag, replace with inline scripts
$scriptPattern = '(?s)\s*<script src="questions/block\d+\.js"></script>'
$html = [regex]::Replace($html, $scriptPattern, '')
$html = $html.Replace('<script src="app.js"></script>', "<script>`n$questionsJs`n$appJs`n</script>")

# Also remove the Google Fonts link (for true offline) and add a fallback
$html = $html -replace '<link\s+href="https://fonts\.googleapis\.com[^"]*"\s*\n?\s*rel="stylesheet"\s*>', ''

# Write the bundled file
$outPath = Join-Path $root "SecurityPlus_Simulator.html"
[System.IO.File]::WriteAllText($outPath, $html, [System.Text.Encoding]::UTF8)

$size = [math]::Round((Get-Item $outPath).Length / 1KB)
Write-Host "Created: SecurityPlus_Simulator.html ($size KB)"
Write-Host "Just double-click to open!"
