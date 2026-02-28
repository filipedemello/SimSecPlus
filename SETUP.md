# SimSecPlus — Setup & Technical Guide

> **CompTIA Security+ SY0-701 Exam Simulator**
> PWA offline-first · Vanilla JS · Zero external dependencies at runtime

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Architecture Overview](#architecture-overview)
3. [File Structure](#file-structure)
4. [Modules Reference](#modules-reference)
5. [Question Bank](#question-bank)
6. [User System & Persistence](#user-system--persistence)
7. [Quiz Modes](#quiz-modes)
8. [Reinforcement System](#reinforcement-system)
9. [Analytics Dashboard](#analytics-dashboard)
10. [PWA & Offline](#pwa--offline)
11. [Testing](#testing)
12. [Build & Deploy](#build--deploy)
13. [Development Tips](#development-tips)

---

## Quick Start

### Prerequisites

- **Node.js** v18+ (only for dev tools — not needed at runtime)
- Any modern browser (Chrome, Firefox, Safari, Edge)
- A local HTTP server (not `file://` — required for Service Worker)

### Run Locally

```bash
# Option 1: Python (simplest)
python -m http.server 8766

# Option 2: Node.js http-server
npx http-server . -p 8766

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Open `http://localhost:8766` in your browser.

### Run Tests

```bash
node tests/test-runner.js
# Expected: 48 passed, 0 failed
```

### Generate Question Blocks

```bash
node generate.js
# Reads the inline question bank and outputs questions/block01.js–block30.js
```

### Validate Questions

```bash
node scripts/validate.js
# Checks structure, duplicates, required fields
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    index.html (SPA)                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │ User │ │Welcome│ │Domain│ │Count │ │ Quiz │ │Result│ │
│  │Screen│ │Screen │ │Select│ │Select│ │Screen│ │Screen│ │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ │
│     └────────┴────────┴────────┴────────┴────────┘      │
│                         app.js (IIFE)                    │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ storage.js │ testGenerator.js │ reinforcement.js    │ │
│  │ analytics.js │ dashboardView.js │ acronyms.js       │ │
│  │ domains.js  │ subdomains.js                         │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────┐ │
│  │        questions/block01.js – block30.js            │ │
│  │           (window.QUESTIONS array)                  │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                         │
│  sw.js ─── Cache-first Service Worker (offline PWA)     │
│  manifest.json ─── PWA manifest                         │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **UI** | HTML5 + CSS3 (vanilla, no framework) |
| **Logic** | Vanilla JavaScript ES6+ (IIFE modules) |
| **Persistence** | IndexedDB via `storage.js` wrapper |
| **Session state** | `localStorage` (current user only) |
| **Offline** | Service Worker (cache-first strategy) |
| **Build** | Node.js (only for `generate.js` and tests) |
| **Desktop** | Electron (optional packaging) |
| **Deployment** | GitHub Pages / any static host |

### Design Principles

- **Zero runtime dependencies** — no React, no Vue, no jQuery
- **100% client-side** — no backend, no API calls
- **Offline-first** — works without internet after first load
- **Mobile-first** — responsive design, iOS/Android optimized
- **Progressive enhancement** — core quiz works without user login

---

## File Structure

```
SimSecPlus/
├── index.html              # SPA entry point (6 screens)
├── styles.css              # Complete design system (~1500 lines)
├── app.js                  # Main application logic (IIFE)
│
├── # ── Core Modules ──────────────────────────────────
├── storage.js              # IndexedDB wrapper (users, sessions, attempts)
├── testGenerator.js        # Smart question selection (80/20, cooldown, modes)
├── reinforcement.js        # In-quiz re-insertion of wrong answers
├── analytics.js            # Data aggregation from IndexedDB
├── dashboardView.js        # Dashboard rendering (SVG charts, DOM API)
│
├── # ── Data Modules ──────────────────────────────────
├── domains.js              # 5 Security+ domains with exam weights
├── subdomains.js           # ~28 subdomains with IDs and names
├── acronyms.js             # ~100 IT security acronyms for expansion
│
├── # ── Question Bank ─────────────────────────────────
├── questions/
│   ├── block01.js          # Questions 1-30
│   ├── block02.js          # Questions 31-60
│   ├── ...
│   └── block30.js          # Questions 871-900
├── generate.js             # Node.js script to regenerate blocks
│
├── # ── PWA Assets ────────────────────────────────────
├── sw.js                   # Service Worker (cache v4)
├── manifest.json           # PWA manifest
├── icon-192.png            # App icon 192×192
├── icon-512.png            # App icon 512×512
│
├── # ── Tests ─────────────────────────────────────────
├── tests/
│   ├── test-runner.js      # Micro test framework (Node.js)
│   ├── selection.test.js   # 7 tests: question selection logic
│   ├── metrics.test.js     # 8 tests: stats calculation
│   ├── reinforcement.test.js # 9 tests: re-insertion logic
│   ├── generator.test.js   # 7 tests: 80/20 rule, cooldown
│   ├── acronyms.test.js    # 17 tests: acronym expansion
│   └── fixtures/
│       └── questions.fixture.js  # 30 mock questions
│
├── # ── Scripts ───────────────────────────────────────
├── scripts/
│   ├── validate.js         # Question bank validator
│   └── dedup.js            # Semantic deduplication tool
│
├── # ── Config ────────────────────────────────────────
├── package.json            # Node/Electron config
├── .gitignore
└── SETUP.md                # ← This file
```

---

## Modules Reference

### `app.js` — Main Application

The entire app is wrapped in an **IIFE** (Immediately Invoked Function Expression).

**Key state:**
```javascript
let state = {
    mode: 'general',          // general | custom | study | review | weakness | adaptive
    selectedDomains: [],       // [] = all, [1,3] = specific domains
    totalQuestions: 10,
    questions: [],             // current quiz question pool
    currentIndex: 0,
    answers: [],               // per-question answer state
    optionShuffles: [],        // randomized option order per question
    isStudyMode: false,        // no timer in study mode
    currentUser: null,         // from IndexedDB or null (anonymous)
    currentSessionId: null,    // active session UUID
    reinforcementMgr: null     // Reinforcement instance (per session)
};
```

**Key functions:**
| Function | Description |
|----------|------------|
| `initQuiz()` | Starts a quiz: selects questions, creates session |
| `handleAnswer(idx)` | Processes answer, logs to DB, triggers reinforcement |
| `renderQuiz()` | Renders current question with shuffled options |
| `renderDots()` | Renders navigation dots (correct/wrong/reinforced) |
| `showFeedback(q, ans)` | Shows correct/incorrect with explanations |
| `finishQuiz()` | Ends quiz, persists session, shows results |
| `bindEvents()` | Attaches all event listeners |

### `storage.js` — IndexedDB Wrapper

**Database:** `simSecPlusDB` (version 1)

**Object Stores:**

| Store | Key | Description |
|-------|-----|------------|
| `users` | `user_id` (UUID) | User profiles |
| `test_sessions` | `session_id` (UUID) | Quiz sessions with timestamps |
| `attempts` | auto-increment | Per-question answer logs |

**Key methods:**
```javascript
Storage.createUser(name)              // → { user_id, name, created_at }
Storage.getAllUsers()                  // → [User]
Storage.createTestSession(userId, opts) // → session_id
Storage.logAttempt(attempt)           // fire-and-forget
Storage.closeTestSession(id, results) // → marks session finished
Storage.getStats(userId, filters?)    // → full aggregated stats
```

### `testGenerator.js` — Smart Question Selection

Main entry: `TestGenerator.generateTestPool(userId, opts)`

**Modes:**
- **`general`/`custom`** — 80/20 rule: 80% never-seen, 20% previously wrong
- **`weakness`** — 60% wrong questions (sorted by subdomain weakness), 40% new from weak areas. Ignores cooldown
- **`adaptive`** — Domain weights adjusted by error rate (up to 3×). Prefers wrong > new > old per domain

**Features:**
- Cooldown: recently answered questions excluded (default 3 days)
- Domain balancing: proportional to exam weights
- Fallback: weighted selection when no user history exists

### `reinforcement.js` — In-Quiz Re-Insertion

Created per session via `Reinforcement.create()`.

| Event | Action |
|-------|--------|
| 1st wrong answer | Re-insert question at currentIndex + 5 |
| 2nd+ wrong answer | Re-insert at currentIndex + 3 |
| 1 correct | Wait for another correct |
| 2 consecutive correct | Graduate (remove from cycle) |

Visual: reinforced dots are **yellow/amber** with pulsating animation.

### `analytics.js` — Data Aggregation

`Analytics.getUserAnalytics(user)` returns:
```javascript
{
    overall: { total, correct, pct, sessions },
    by_domain: [{ domain_id, name, total, correct, pct }],
    by_subdomain: { id: { total, correct, pct, weakness_score } },
    top_weaknesses: [{ name, total, correct, pct, weakness_score }],
    time_series: [{ date, total, correct, pct }]
}
```

### `dashboardView.js` — Dashboard Rendering

Pure DOM API rendering (no template engine):
- **Overall Score** — SVG ring with animated stroke-dashoffset
- **Domain Chart** — Horizontal bars with color coding (green/amber/red)
- **Time Series** — SVG line chart with area fill
- **Top 3 Weaknesses** — Ranked cards by `weakness_score`
- **Quick Insights** — Strongest/weakest domain + study time + CTA

---

## Question Bank

### Structure

Each question object:
```javascript
{
    id: 1,                    // unique integer
    domain: 2,                // 1-5 (Security+ domain)
    subdomain_id: "2.1",      // subdomain reference
    question: "...",          // question text
    options: ["A", "B", "C", "D"],  // 4 options
    correctIndex: 2,          // 0-based index of correct answer
    explanation: {
        correct: "...",       // why correct answer is right
        incorrect: {          // why each wrong answer is wrong
            "A": "...",
            "B": "..."
        }
    },
    hint: "...",              // optional study hint
    status: "active"          // "active" or "archived"
}
```

### Domains (exam weights)

| Domain | Name | Weight |
|--------|------|--------|
| 1 | General Security Concepts | 12% |
| 2 | Threats, Vulnerabilities, and Mitigations | 22% |
| 3 | Security Architecture | 18% |
| 4 | Security Operations | 28% |
| 5 | Security Program Management and Oversight | 20% |

### Regenerating Blocks

```bash
node generate.js
```

This reads the inline question array in `generate.js` and outputs 30 block files (30 questions each) to `questions/`. The script:
- Applies deduplication (in-memory threshold)
- Marks duplicates as `status: "archived"`
- Validates required fields
- Outputs `questions/blockXX.js` files that append to `window.QUESTIONS`

---

## User System & Persistence

### Flow

```
[First Visit]
     ↓
[User Screen] → Create Profile / Select Existing
     ↓
[Welcome Screen] → Choose test mode
     ↓
[Quiz] → Answers logged to IndexedDB
     ↓
[Results] → Session closed in IndexedDB
     ↓
[Dashboard] → Stats from IndexedDB
```

### Anonymous Mode

Users can skip profile creation. In this case:
- No data is persisted
- Classic weighted selection is used
- Smart modes (weakness/adaptive) are hidden
- Dashboard is disabled

### Data Persistence

| Data | Storage | Scope |
|------|---------|-------|
| Current user ID | `localStorage` | persists across sessions |
| User profiles | IndexedDB | permanent |
| Test sessions | IndexedDB | permanent |
| Question attempts | IndexedDB | permanent |
| Quiz state | In-memory | current session only |

---

## Quiz Modes

| Mode | Description | User Required |
|------|-------------|:---:|
| **General Test** | All domains, weighted by exam percentages | No |
| **Custom Test** | Choose specific domains | No |
| **Study Mode** | No timer, all domains | No |
| **Focus on Weaknesses** | 60% wrong + 40% from weak subdomains | Yes |
| **Adaptive Test** | Domains weighted by user's error rate | Yes |
| **Review Mode** | Re-do wrong questions from last test | No |

---

## Reinforcement System

Active during all quiz modes except Study Mode.

```
User answers wrong
    → Question re-inserted +5 positions (1st error)
    → Question re-inserted +3 positions (2nd+ error)
    → Yellow dot appears in navigation bar

User answers correctly
    → 1st correct: no action (waiting for 2nd)
    → 2nd consecutive correct: question "graduates" (removed from cycle)
    → Yellow dot disappears

Feedback message: "🔄 This question will reappear later for review"
```

---

## Analytics Dashboard

Access: Welcome Screen → "📊 My Dashboard"

### Sections

1. **Overall Score** — SVG ring chart + total stats
2. **Performance by Domain** — 5 horizontal bars (green > amber > red)
3. **Score Evolution** — SVG line chart (requires 2+ days of data)
4. **Top 3 Weaknesses** — subdomain cards ranked by `weakness_score`
5. **Quick Insights** — strongest/weakest domain + study time estimate
6. **CTA** — "Focus on Weaknesses" button → starts weakness quiz

---

## PWA & Offline

### Service Worker (`sw.js`)

- **Strategy:** Cache-first with network fallback
- **Cache name:** `security-plus-v4`
- **Cached assets:** All HTML, CSS, JS, question blocks, icons, manifest

### Updating the Cache

When you modify files, **bump the cache version** in `sw.js`:

```javascript
const CACHE_NAME = 'security-plus-v5'; // was v4
```

Also add any new files to the `ASSETS` array.

### Installing as PWA

1. Open in Chrome/Safari on your phone
2. Tap "Add to Home Screen"
3. The app now works fully offline

### Troubleshooting Cache Issues

```javascript
// In browser console:
navigator.serviceWorker.getRegistrations().then(r => r.forEach(sw => sw.unregister()));
caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
location.reload();
```

---

## Testing

### Run All Tests

```bash
node tests/test-runner.js
```

### Test Suites

| Suite | File | Tests | What it covers |
|-------|------|:-----:|----------------|
| Selection | `selection.test.js` | 7 | No duplicates, domain filtering, distribution |
| Metrics | `metrics.test.js` | 8 | Stats calculation, domain/subdomain accuracy |
| Reinforcement | `reinforcement.test.js` | 9 | Re-insertion offsets, graduation, state independence |
| Generator | `generator.test.js` | 7 | 80/20 rule, cooldown, wrong bucket handling |
| Acronyms | `acronyms.test.js` | 17 | Expansion, case-sensitivity, dictionary integrity |

**Total: 48 tests**

### Adding Tests

Create a new file `tests/myfeature.test.js`:

```javascript
module.exports = function ({ test, describe, assert, assertEqual }) {
    describe('My Feature Tests', () => {
        test('should do something', ({ assert }) => {
            assert(true, 'This should pass');
        });

        test('should equal something', ({ assertEqual }) => {
            assertEqual(1 + 1, 2, '1+1 should be 2');
        });
    });
};
```

Then add it to `tests/test-runner.js`:

```javascript
const suites = [
    // ... existing suites
    require('./myfeature.test.js')
];
```

---

## Build & Deploy

### GitHub Pages

```bash
git add -A
git commit -m "Update"
git push origin main
```

Enable GitHub Pages in repository settings (source: `main` branch, root `/`).

### Electron Desktop App

```bash
npm install
npm run pack
# Output: dist/Security+ Simulator-win32-x64/
```

### Manual Deploy (Any Static Host)

Upload these files to any static HTTP server:
- `index.html`, `styles.css`, `app.js`
- `sw.js`, `manifest.json`
- `icon-192.png`, `icon-512.png`
- All `*.js` module files
- `questions/` folder (all 30 blocks)

---

## Development Tips

### Adding New Questions

1. Add questions to the array in `generate.js`
2. Run `node generate.js` to regenerate blocks
3. Run `node scripts/validate.js` to check for issues
4. Run `node tests/test-runner.js` to verify
5. Bump `CACHE_NAME` in `sw.js`

### Adding a New Module

1. Create `mymodule.js` with IIFE pattern:
   ```javascript
   const MyModule = (() => {
       'use strict';
       // ...
       return { publicMethod };
   })();
   if (typeof window !== 'undefined') window.MyModule = MyModule;
   if (typeof module !== 'undefined') module.exports = { MyModule };
   ```
2. Add `<script src="mymodule.js">` to `index.html` (before `app.js`)
3. Add `'./mymodule.js'` to `ASSETS` array in `sw.js`
4. Bump `CACHE_NAME` in `sw.js`

### CSS Design Tokens

All design tokens are in `:root` at the top of `styles.css`:
```css
--bg-primary: #0a0e17;
--accent: #38bdf8;
--success: #34d399;
--danger: #f87171;
--warning: #fbbf24;
--radius: 16px;
--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--font: 'Inter', -apple-system, sans-serif;
```

### Debugging IndexedDB

```javascript
// In browser console:
const stats = await Storage.getStats('user-id-here');
console.table(stats.by_domain);
console.table(stats.by_subdomain);
console.log(stats.latest_per_question);
```

### Clearing All Data

```javascript
indexedDB.deleteDatabase('simSecPlusDB');
localStorage.clear();
location.reload();
```
