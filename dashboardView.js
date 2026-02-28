/**
 * SimSecPlus \u2014 Dashboard View Module
 * Renders the analytics dashboard as HTML/SVG in #screen-dashboard,
 * with no external dependencies. Mobile-first.
 */

const DashboardView = (() => {
    'use strict';

    function el(tag, attrs = {}, ...children) {
        const e = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => {
            if (k === 'class') e.className = v;
            else if (k === 'style') e.style.cssText = v;
            else e.setAttribute(k, v);
        });
        children.forEach(c => {
            if (typeof c === 'string') e.appendChild(document.createTextNode(c));
            else if (c) e.appendChild(c);
        });
        return e;
    }

    function svgEl(tag, attrs = {}) {
        const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
        Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
        return e;
    }

    // \u2500\u2500\u2500 Bar chart (SVG) for domain breakdown \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    function renderDomainChart(domainData, container) {
        const chartWrap = el('div', { class: 'db-chart-wrap' });
        const title = el('h3', {}, '\uD83D\uDCCA Performance by Domain');
        chartWrap.appendChild(title);

        domainData.forEach(d => {
            const pct = d.pct || 0;
            const cls = pct >= 75 ? 'high' : pct >= 50 ? 'mid' : 'low';
            const row = el('div', { class: 'domain-result-row' },
                el('span', { class: 'dr-label', title: d.name }, `D${d.domain_id} \u2013 ${d.name}`),
                el('div', { class: 'dr-bar' },
                    el('div', { class: `dr-fill ${cls}`, style: `width:0%`, 'data-pct': pct })
                ),
                el('span', { class: 'dr-value' }, `${pct}%`)
            );
            chartWrap.appendChild(row);
        });

        container.appendChild(chartWrap);

        // Animate bars after mount
        requestAnimationFrame(() => {
            chartWrap.querySelectorAll('.dr-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-pct') + '%';
            });
        });
    }

    // \u2500\u2500\u2500 Line chart (SVG) for time series \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    function renderTimeSeries(series, container) {
        if (!series || series.length < 2) {
            container.appendChild(el('p', { class: 'db-empty' }, '\uD83D\uDCC8 Complete more sessions to see your evolution.'));
            return;
        }

        const W = 320, H = 120, PAD = { top: 10, right: 16, bottom: 28, left: 36 };
        const innerW = W - PAD.left - PAD.right;
        const innerH = H - PAD.top - PAD.bottom;

        const values = series.map(p => p.pct);
        const minV = 0;
        const maxV = 100;

        const xScale = i => PAD.left + (i / (series.length - 1)) * innerW;
        const yScale = v => PAD.top + innerH - ((v - minV) / (maxV - minV)) * innerH;

        const points = series.map((p, i) => `${xScale(i).toFixed(1)},${yScale(p.pct).toFixed(1)}`).join(' ');
        const area = series.map((p, i) => `${xScale(i).toFixed(1)},${yScale(p.pct).toFixed(1)}`);
        const areaPath = `M${xScale(0)},${yScale(0)} L${area.join(' L')} L${xScale(series.length - 1)},${yScale(0)} Z`;

        const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'db-line-chart' });

        // Area fill
        const areaEl = svgEl('path', { d: areaPath, class: 'lc-area' });
        svg.appendChild(areaEl);

        // Line
        const polyline = svgEl('polyline', { points, class: 'lc-line' });
        svg.appendChild(polyline);

        // Data points
        series.forEach((p, i) => {
            const dot = svgEl('circle', { cx: xScale(i), cy: yScale(p.pct), r: 3, class: 'lc-dot' });
            dot.innerHTML = `<title>${p.date}: ${p.pct}% (${p.correct}/${p.total})</title>`;
            svg.appendChild(dot);
        });

        // Y-axis labels
        [0, 50, 100].forEach(v => {
            const label = svgEl('text', { x: PAD.left - 6, y: yScale(v) + 4, class: 'lc-axis-label', 'text-anchor': 'end' });
            label.textContent = v + '%';
            svg.appendChild(label);
        });

        // X-axis: show first and last date
        [[0, 'start'], [series.length - 1, 'end']].forEach(([i, anchor]) => {
            const label = svgEl('text', {
                x: xScale(i), y: H - 6, class: 'lc-axis-label', 'text-anchor': anchor === 'start' ? 'start' : 'end'
            });
            label.textContent = series[i].date.slice(5); // MM-DD
            svg.appendChild(label);
        });

        const wrap = el('div', { class: 'db-chart-wrap' },
            el('h3', {}, '\uD83D\uDCC8 Score Evolution'),
            svg
        );
        container.appendChild(wrap);
    }

    // \u2500\u2500\u2500 Top weaknesses \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    function renderWeaknesses(weaknesses, container) {
        const wrap = el('div', { class: 'db-chart-wrap' });
        wrap.appendChild(el('h3', {}, '\u26A0\uFE0F  Top 3 Weaknesses'));

        if (!weaknesses || weaknesses.length === 0) {
            wrap.appendChild(el('p', { class: 'db-empty' }, '\uD83C\uDF89 No major weaknesses yet! Keep studying.'));
        } else {
            weaknesses.forEach((w, i) => {
                const card = el('div', { class: 'weakness-card' },
                    el('div', { class: 'weakness-rank' }, `#${i + 1}`),
                    el('div', { class: 'weakness-info' },
                        el('div', { class: 'weakness-name' }, w.name),
                        el('div', { class: 'weakness-sub' }, `${w.correct}/${w.total} correct (${w.pct}%)`)
                    ),
                    el('div', { class: `weakness-pct ${w.pct < 50 ? 'low' : 'mid'}` }, `${w.pct}%`)
                );
                wrap.appendChild(card);
            });
        }
        container.appendChild(wrap);
    }

    // \u2500\u2500\u2500 Overall stats card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    function renderOverall(data, container) {
        const { overall } = data;
        const pct = overall.pct || 0;
        const color = pct >= 75 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (pct / 100) * circumference;

        const svg = svgEl('svg', { viewBox: '0 0 100 100', class: 'db-score-ring' });
        const bg = svgEl('circle', { cx: 50, cy: 50, r: 40, class: 'score-bg' });
        const fill = svgEl('circle', {
            cx: 50, cy: 50, r: 40, class: 'score-fill',
            style: `stroke:${color};stroke-dasharray:${circumference};stroke-dashoffset:${circumference}`
        });
        svg.appendChild(bg);
        svg.appendChild(fill);

        const scoreText = svgEl('text', { x: 50, y: 54, class: 'db-ring-text', 'text-anchor': 'middle' });
        scoreText.textContent = `${pct}%`;
        svg.appendChild(scoreText);

        // Animate after mount
        requestAnimationFrame(() => {
            setTimeout(() => { fill.style.strokeDashoffset = offset; }, 100);
        });

        const card = el('div', { class: 'card db-overall-card' },
            el('div', { class: 'db-overall-left' },
                svg,
                el('p', { class: 'db-overall-label' }, 'Overall Score')
            ),
            el('div', { class: 'db-overall-right' },
                el('div', { class: 'db-stat' }, el('strong', {}, String(overall.total)), el('span', {}, 'Questions Answered')),
                el('div', { class: 'db-stat' }, el('strong', {}, String(overall.correct)), el('span', {}, 'Correct')),
                el('div', { class: 'db-stat' }, el('strong', {}, String(overall.sessions)), el('span', {}, 'Sessions')),
            )
        );
        container.appendChild(card);
    }

    // \u2500\u2500\u2500 Main render \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    async function render(user) {
        const contentEl = document.getElementById('dashboard-content');
        if (!contentEl) return;
        contentEl.innerHTML = '<div class="dashboard-loading">\u23F3 Loading your stats...</div>';

        try {
            const data = await Analytics.getUserAnalytics(user);

            contentEl.innerHTML = '';

            if (data.overall.total === 0) {
                contentEl.innerHTML = `
                    <div class="card db-empty-state">
                        <h3>\uD83D\uDE80 No data yet for ${user.name}</h3>
                        <p>Complete at least one quiz to see your dashboard.</p>
                    </div>`;
                return;
            }

            renderOverall(data, contentEl);
            renderDomainChart(data.by_domain, contentEl);
            renderTimeSeries(data.time_series, contentEl);
            renderWeaknesses(data.top_weaknesses, contentEl);
            renderInsights(data, contentEl);

        } catch (e) {
            console.error('DashboardView render error:', e);
            contentEl.innerHTML = '<p class="db-empty">Could not load dashboard. Please try again.</p>';
        }
    }

    // \u2500\u2500\u2500 Insights + CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    function renderInsights(data, container) {
        const wrap = el('div', { class: 'db-chart-wrap db-insights' });
        wrap.appendChild(el('h3', {}, '\uD83D\uDCA1 Quick Insights'));

        // Strongest & weakest domain
        if (data.by_domain.length > 0) {
            const sorted = [...data.by_domain].sort((a, b) => b.pct - a.pct);
            const strongest = sorted[0];
            const weakest = sorted[sorted.length - 1];

            const insightHTML = el('div', { class: 'insight-grid' },
                el('div', { class: 'insight-item good' },
                    el('span', { class: 'insight-emoji' }, '\uD83C\uDFC6'),
                    el('div', {},
                        el('strong', {}, `${strongest.pct}%`),
                        el('span', {}, strongest.name)
                    )
                ),
                el('div', { class: 'insight-item bad' },
                    el('span', { class: 'insight-emoji' }, '\uD83D\uDEA8'),
                    el('div', {},
                        el('strong', {}, `${weakest.pct}%`),
                        el('span', {}, weakest.name)
                    )
                )
            );
            wrap.appendChild(insightHTML);
        }

        // Total study time estimate
        const totalQ = data.overall.total;
        const avgTimePerQ = 45; // seconds approx
        const totalMins = Math.round((totalQ * avgTimePerQ) / 60);
        wrap.appendChild(el('p', { class: 'insight-time' },
            `\u23F1\uFE0F Estimated study time: ~${totalMins} minutes across ${data.overall.sessions} sessions`
        ));

        // CTA: Start Weakness Test
        if (data.top_weaknesses && data.top_weaknesses.length > 0) {
            const ctaBtn = el('button', { class: 'btn btn-smart btn-lg db-cta', id: 'btn-dashboard-weakness' },
                el('span', { class: 'btn-icon' }, '\u26A0\uFE0F'),
                el('span', { class: 'btn-text' },
                    el('strong', {}, 'Focus on Weaknesses'),
                    el('small', {}, `Target your ${data.top_weaknesses.length} weak areas`)
                )
            );
            ctaBtn.addEventListener('click', () => {
                // Trigger weakness mode from dashboard
                const evt = new CustomEvent('dashboard-start-weakness');
                document.dispatchEvent(evt);
            });
            wrap.appendChild(ctaBtn);
        }

        container.appendChild(wrap);
    }

    return { render };
})();

if (typeof window !== 'undefined') window.DashboardView = DashboardView;
if (typeof module !== 'undefined') module.exports = { DashboardView };
