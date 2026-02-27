/* ============================
   Security+ SY0-701 Simulator – App Engine
   ============================ */
(function () {
    'use strict';

    // ---------- DOMAIN CONFIG ----------
    const DOMAINS = {
        1: { name: 'General Security Concepts', weight: 12 },
        2: { name: 'Threats, Vulnerabilities, and Mitigations', weight: 22 },
        3: { name: 'Security Architecture', weight: 18 },
        4: { name: 'Security Operations', weight: 28 },
        5: { name: 'Security Program Management and Oversight', weight: 20 }
    };
    const TIMER_WARNING_SECS = 180; // 3 minutes warning

    // ---------- STATE ----------
    let state = {
        mode: 'general',       // general | custom | study | review
        selectedDomains: [],
        totalQuestions: 10,
        questions: [],
        currentIndex: 0,
        answers: [],           // { selected, correct, answered, timedOut }
        optionShuffles: [],    // per-question shuffle maps: [{ shuffled, correctIdx, reverseMap }]
        timerTotal: 0,
        timerRemaining: 0,
        timerInterval: null,
        paused: false,
        isStudyMode: false,
        wrongQuestions: []      // for review mode
    };

    // ---------- DOM REFS ----------
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const screens = {
        welcome: $('#screen-welcome'),
        domains: $('#screen-domains'),
        count: $('#screen-count'),
        quiz: $('#screen-quiz'),
        results: $('#screen-results')
    };

    // ---------- SCREEN MANAGEMENT ----------
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
        window.scrollTo(0, 0);
    }

    // ---------- QUESTION SELECTION ----------
    function selectQuestions(domains, count) {
        const pool = {};
        const activeDomains = domains.length ? domains : Object.keys(DOMAINS).map(Number);

        activeDomains.forEach(d => { pool[d] = []; });
        window.QUESTIONS.forEach(q => {
            if (activeDomains.includes(q.domain)) {
                pool[q.domain].push(q);
            }
        });

        // Shuffle each pool
        Object.values(pool).forEach(arr => shuffleArray(arr));

        // Calculate proportional distribution
        const totalWeight = activeDomains.reduce((s, d) => s + DOMAINS[d].weight, 0);
        let selected = [];
        let remaining = count;

        activeDomains.forEach((d, i) => {
            const proportion = DOMAINS[d].weight / totalWeight;
            const qty = (i === activeDomains.length - 1) ? remaining : Math.round(count * proportion);
            const take = Math.min(qty, pool[d].length, remaining);
            selected = selected.concat(pool[d].slice(0, take));
            remaining -= take;
        });

        // Fill if we're short
        if (selected.length < count) {
            const usedIds = new Set(selected.map(q => q.id));
            const extras = window.QUESTIONS.filter(q => !usedIds.has(q.id) && activeDomains.includes(q.domain));
            shuffleArray(extras);
            selected = selected.concat(extras.slice(0, count - selected.length));
        }

        shuffleArray(selected);
        return selected.slice(0, count);
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ---------- INIT QUIZ ----------
    function initQuiz() {
        const qs = state.mode === 'review'
            ? [...state.wrongQuestions]
            : selectQuestions(state.selectedDomains, state.totalQuestions);

        state.questions = qs;
        state.currentIndex = 0;
        state.answers = qs.map(() => ({ selected: -1, correct: false, answered: false, timedOut: false }));

        // Create a shuffled option order for each question (runtime shuffle)
        state.optionShuffles = qs.map(q => {
            const indices = q.options.map((_, i) => i);
            shuffleArray(indices);
            return {
                order: indices,                          // shuffled index order
                correctIdx: indices.indexOf(q.correctIndex) // where correct answer ended up
            };
        });

        // Timer: 60 seconds per question (global)
        state.timerTotal = state.isStudyMode ? 0 : qs.length * 60;
        state.timerRemaining = state.timerTotal;
        state.paused = false;

        renderQuiz();
        showScreen('quiz');

        if (!state.isStudyMode) startTimer();
        else updateTimerDisplay();
    }

    // ---------- TIMER ----------
    function startTimer() {
        clearInterval(state.timerInterval);
        updateTimerDisplay();

        state.timerInterval = setInterval(() => {
            if (state.paused) return;
            state.timerRemaining--;

            if (state.timerRemaining <= 0) {
                state.timerRemaining = 0;
                clearInterval(state.timerInterval);
                // Mark unanswered as timed-out
                state.answers.forEach((a, i) => {
                    if (!a.answered) {
                        a.timedOut = true;
                        a.answered = true;
                        a.correct = false;
                    }
                });
                finishQuiz();
                return;
            }
            updateTimerDisplay();
        }, 1000);
    }

    function updateTimerDisplay() {
        const display = $('#timer-display');
        const container = $('.quiz-timer');

        if (state.isStudyMode) {
            display.textContent = '∞ Study';
            container.classList.remove('warning');
            return;
        }

        const mins = Math.floor(state.timerRemaining / 60);
        const secs = state.timerRemaining % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (state.timerRemaining <= TIMER_WARNING_SECS && state.timerRemaining > 0) {
            container.classList.add('warning');
        } else {
            container.classList.remove('warning');
        }
    }

    function togglePause() {
        state.paused = !state.paused;
        const overlay = $('#pause-overlay');
        const btn = $('#btn-pause');

        if (state.paused) {
            overlay.classList.remove('hidden');
            btn.textContent = '▶️';
        } else {
            overlay.classList.add('hidden');
            btn.textContent = '⏸️';
        }
    }

    // ---------- RENDER QUIZ ----------
    function renderQuiz() {
        const q = state.questions[state.currentIndex];
        const ans = state.answers[state.currentIndex];
        const idx = state.currentIndex;

        // Header
        $('#quiz-current').textContent = idx + 1;
        $('#quiz-total').textContent = state.questions.length;
        $('#progress-fill').style.width = `${((idx + 1) / state.questions.length) * 100}%`;
        $('#quiz-domain-badge').textContent = `Domain ${q.domain}`;

        // Question
        $('#question-number').textContent = `Question ${idx + 1} of ${state.questions.length}`;
        $('#question-text').textContent = q.question;

        // Options (shuffled at runtime)
        const optionsEl = $('#options-list');
        optionsEl.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const shuffle = state.optionShuffles[idx];

        shuffle.order.forEach((origIdx, displayIdx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.index = displayIdx;

            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = letters[displayIdx];

            const textSpan = document.createElement('span');
            textSpan.textContent = q.options[origIdx];

            btn.appendChild(letterSpan);
            btn.appendChild(textSpan);

            if (ans.answered) {
                btn.classList.add('disabled');
                if (displayIdx === shuffle.correctIdx) btn.classList.add('correct');
                if (displayIdx === ans.selected && !ans.correct) btn.classList.add('incorrect');
            } else {
                btn.addEventListener('click', () => handleAnswer(displayIdx));
            }

            optionsEl.appendChild(btn);
        });

        // Hint
        const hintBtn = $('#btn-hint');
        const hintBox = $('#hint-box');
        hintBox.classList.add('hidden');
        if (q.hint) {
            hintBtn.classList.remove('hidden');
            hintBtn.onclick = () => {
                hintBox.textContent = '💡 ' + q.hint;
                hintBox.classList.remove('hidden');
                hintBtn.classList.add('hidden');
            };
        } else {
            hintBtn.classList.add('hidden');
        }

        // Feedback
        const fbBox = $('#feedback-box');
        if (ans.answered && !ans.timedOut) {
            showFeedback(q, ans);
        } else {
            fbBox.classList.add('hidden');
            fbBox.className = 'feedback-box hidden';
        }

        // Navigation
        $('#btn-prev').disabled = idx === 0;
        updateNavButtons();
        renderDots();

        // Timer visibility
        if (state.isStudyMode) {
            $('#btn-pause').classList.add('hidden');
        } else {
            $('#btn-pause').classList.remove('hidden');
        }
    }

    function updateNavButtons() {
        const isLast = state.currentIndex === state.questions.length - 1;
        const allAnswered = state.answers.every(a => a.answered);

        if (isLast || allAnswered) {
            $('#btn-next').classList.add('hidden');
            $('#btn-finish').classList.remove('hidden');
        } else {
            $('#btn-next').classList.remove('hidden');
            $('#btn-finish').classList.add('hidden');
        }
    }

    function renderDots() {
        const container = $('#question-dots');
        container.innerHTML = '';
        state.questions.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'q-dot';
            if (i === state.currentIndex) dot.classList.add('current');
            const a = state.answers[i];
            if (a.answered) {
                dot.classList.add(a.correct ? 'correct-dot' : 'incorrect-dot');
            } else if (a.selected >= 0) {
                dot.classList.add('answered');
            }
            dot.addEventListener('click', () => { state.currentIndex = i; renderQuiz(); });
            container.appendChild(dot);
        });
    }

    // ---------- HANDLE ANSWER ----------
    function handleAnswer(displayIndex) {
        const ans = state.answers[state.currentIndex];
        const shuffle = state.optionShuffles[state.currentIndex];

        ans.selected = displayIndex;
        ans.correct = displayIndex === shuffle.correctIdx;
        ans.answered = true;

        renderQuiz();
    }

    function showFeedback(q, ans) {
        const fbBox = $('#feedback-box');
        fbBox.classList.remove('hidden', 'correct-feedback', 'incorrect-feedback');
        fbBox.classList.add(ans.correct ? 'correct-feedback' : 'incorrect-feedback');

        let html = ans.correct
            ? '<h4>✅ Correct!</h4>'
            : '<h4>❌ Incorrect</h4>';

        if (q.explanation) {
            html += `<p class="fb-correct"><strong>Correct answer:</strong> ${q.explanation.correct}</p>`;
            if (q.explanation.incorrect) {
                // Show explanations for all incorrect options
                Object.values(q.explanation.incorrect).forEach(text => {
                    html += `<p class="fb-incorrect">→ ${text}</p>`;
                });
            }
        }

        fbBox.innerHTML = html;
    }

    // ---------- FINISH QUIZ ----------
    function finishQuiz() {
        clearInterval(state.timerInterval);
        // Mark remaining unanswered
        state.answers.forEach(a => {
            if (!a.answered) {
                a.answered = true;
                a.timedOut = true;
                a.correct = false;
            }
        });
        renderResults();
        showScreen('results');
    }

    // ---------- RESULTS ----------
    function renderResults() {
        const total = state.questions.length;
        const correctCount = state.answers.filter(a => a.correct).length;
        const pct = Math.round((correctCount / total) * 100);

        // Score circle
        const circumference = 2 * Math.PI * 54; // r=54
        const offset = circumference - (pct / 100) * circumference;
        const arc = $('#score-arc');
        arc.style.stroke = pct >= 75 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
        setTimeout(() => { arc.style.strokeDashoffset = offset; }, 100);

        $('#score-value').textContent = `${pct}%`;
        $('#score-label').textContent = pct >= 75 ? '🎉 Excellent!' : pct >= 50 ? '📈 Good progress' : '📚 Keep studying';
        $('#score-detail').textContent = `${correctCount} of ${total} correct`;

        // Per-domain results
        const domainStats = {};
        state.questions.forEach((q, i) => {
            if (!domainStats[q.domain]) {
                domainStats[q.domain] = { total: 0, correct: 0, name: q.domainName || DOMAINS[q.domain].name };
            }
            domainStats[q.domain].total++;
            if (state.answers[i].correct) domainStats[q.domain].correct++;
        });

        const domainContainer = $('#domain-results');
        domainContainer.innerHTML = '';
        Object.keys(domainStats).sort((a, b) => a - b).forEach(d => {
            const s = domainStats[d];
            const dpct = Math.round((s.correct / s.total) * 100);
            const cls = dpct >= 75 ? 'high' : dpct >= 50 ? 'mid' : 'low';

            domainContainer.innerHTML += `
                <div class="domain-result-row">
                    <span class="dr-label" title="${s.name}">D${d} – ${s.name}</span>
                    <div class="dr-bar"><div class="dr-fill ${cls}" style="width:0%"></div></div>
                    <span class="dr-value">${dpct}%</span>
                </div>`;
        });

        // Animate bars
        setTimeout(() => {
            domainContainer.querySelectorAll('.dr-fill').forEach(el => {
                const row = el.closest('.domain-result-row');
                const val = parseInt(row.querySelector('.dr-value').textContent);
                el.style.width = `${val}%`;
            });
        }, 200);

        // Diagnostic
        renderDiagnostic(domainStats, pct);

        // Store wrong questions for review
        state.wrongQuestions = state.questions.filter((_, i) => !state.answers[i].correct);

        // Review button
        const reviewBtn = $('#btn-review');
        // Update review button text
        if (state.wrongQuestions.length === 0) {
            reviewBtn.disabled = true;
            reviewBtn.textContent = '✅ No mistakes to review!';
        } else {
            reviewBtn.disabled = false;
            reviewBtn.textContent = `🔄 Review Mode (${state.wrongQuestions.length} wrong)`;
        }
    }

    function renderDiagnostic(domainStats, overallPct) {
        const container = $('#diagnostic-content');
        let html = '';

        // Sort domains by performance
        const sorted = Object.entries(domainStats)
            .map(([d, s]) => ({ domain: d, pct: Math.round((s.correct / s.total) * 100), name: s.name }))
            .sort((a, b) => a.pct - b.pct);

        // Strong areas
        const strong = sorted.filter(d => d.pct >= 75);
        strong.forEach(d => {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">💪</span>
                <span><strong class="diag-strong">${d.name}</strong> – ${d.pct}% correct. Excellent mastery!</span>
            </div>`;
        });

        // Weak areas
        const weak = sorted.filter(d => d.pct < 50);
        weak.forEach(d => {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">⚠️</span>
                <span><strong class="diag-weak">${d.name}</strong> – ${d.pct}% correct. Needs special attention.</span>
            </div>`;
        });

        // Medium areas
        const medium = sorted.filter(d => d.pct >= 50 && d.pct < 75);
        medium.forEach(d => {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">📊</span>
                <span><strong class="diag-tip">${d.name}</strong> – ${d.pct}% correct. Good, but can improve.</span>
            </div>`;
        });

        // Focus recommendation
        if (weak.length > 0) {
            const focusList = weak.map(d => `Domain ${d.domain}`).join(', ');
            html += `<div class="diagnostic-item">
                <span class="diag-icon">🎯</span>
                <span>Recommendation: Focus your studies on <strong class="diag-weak">${focusList}</strong> to improve your performance.</span>
            </div>`;
        }

        // Overall verdict
        if (overallPct >= 75) {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">🏆</span>
                <span>You are on track to pass! Keep practicing to solidify your knowledge.</span>
            </div>`;
        } else if (overallPct >= 50) {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">📈</span>
                <span>Good progress! Review weak areas and retake focused tests on them.</span>
            </div>`;
        } else {
            html += `<div class="diagnostic-item">
                <span class="diag-icon">📚</span>
                <span>We recommend reviewing study material before retaking the test. Use Study Mode without a timer.</span>
            </div>`;
        }

        container.innerHTML = html;
    }

    // ---------- EVENT LISTENERS ----------
    function bindEvents() {
        // Welcome screen
        $('#btn-general').addEventListener('click', () => {
            state.mode = 'general';
            state.isStudyMode = false;
            state.selectedDomains = [];
            showScreen('count');
        });

        $('#btn-custom').addEventListener('click', () => {
            state.mode = 'custom';
            state.isStudyMode = false;
            state.selectedDomains = [];
            $$('#domain-list input').forEach(cb => { cb.checked = false; });
            $('#btn-domains-next').disabled = true;
            showScreen('domains');
        });

        $('#btn-study-mode').addEventListener('click', () => {
            state.mode = 'general';
            state.isStudyMode = true;
            state.selectedDomains = [];
            showScreen('count');
        });

        // Domain selection
        $$('#domain-list input').forEach(cb => {
            cb.addEventListener('change', () => {
                state.selectedDomains = [...$$('#domain-list input:checked')].map(c => parseInt(c.value));
                $('#btn-domains-next').disabled = state.selectedDomains.length === 0;
            });
        });

        $('#btn-domains-next').addEventListener('click', () => showScreen('count'));

        // Back buttons
        $('#btn-back-domains').addEventListener('click', () => showScreen('welcome'));
        $('#btn-back-count').addEventListener('click', () => {
            showScreen(state.mode === 'custom' ? 'domains' : 'welcome');
        });

        // Question count
        $$('.count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.totalQuestions = parseInt(btn.dataset.count);
                initQuiz();
            });
        });

        $('#btn-custom-count').addEventListener('click', () => {
            const val = parseInt($('#custom-count-input').value);
            if (val > 0 && val <= 900) {
                state.totalQuestions = val;
                initQuiz();
            }
        });

        // Quiz navigation
        $('#btn-next').addEventListener('click', () => {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex++;
                renderQuiz();
            }
        });

        $('#btn-prev').addEventListener('click', () => {
            if (state.currentIndex > 0) {
                state.currentIndex--;
                renderQuiz();
            }
        });

        $('#btn-finish').addEventListener('click', () => {
            const unanswered = state.answers.filter(a => !a.answered).length;
            if (unanswered > 0) {
                if (!confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to finish?`)) return;
            }
            finishQuiz();
        });

        // Timer controls
        $('#btn-pause').addEventListener('click', togglePause);
        $('#btn-resume').addEventListener('click', togglePause);

        // Results actions
        $('#btn-review').addEventListener('click', () => {
            if (state.wrongQuestions.length === 0) return;
            state.mode = 'review';
            state.isStudyMode = true;
            state.totalQuestions = state.wrongQuestions.length;
            initQuiz();
        });

        $('#btn-study-again').addEventListener('click', () => {
            state.isStudyMode = true;
            state.mode = 'general';
            state.selectedDomains = [];
            showScreen('count');
        });

        $('#btn-new-test').addEventListener('click', () => {
            clearInterval(state.timerInterval);
            showScreen('welcome');
        });
    }

    // ---------- INIT ----------
    function init() {
        bindEvents();
        showScreen('welcome');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
