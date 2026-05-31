// ── app.js — loads data from data/devotions.json ──

let week = [];
let devotions = [];
let archive = [];
let CURRENT_WEEK_LABEL = '';
let viewMode = 'current';

async function loadData() {
  const res = await fetch('data/devotions.json?v=' + Date.now());
  const data = await res.json();
  week = data.currentWeek.week;
  devotions = data.currentWeek.devotions;
  archive = data.archive;
  CURRENT_WEEK_LABEL = data.currentWeek.label;
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();

  buildWeekView('current-main', week, devotions);
  buildArchiveView();
  buildCurrentNav();

  // Update week label
  const labelEl = document.querySelector('.week-label');
  if (labelEl) labelEl.textContent = `Linggo ng ${CURRENT_WEEK_LABEL}, 2025`;

  const today = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  const defaultIdx = dayMap[today];
  showDay(defaultIdx, 'current');

  document.getElementById('btn-current').addEventListener('click', () => switchMode('current'));
  document.getElementById('btn-archive').addEventListener('click', () => switchMode('archive'));
});

function switchMode(mode) {
  viewMode = mode;
  document.getElementById('btn-current').classList.toggle('active', mode === 'current');
  document.getElementById('btn-archive').classList.toggle('active', mode === 'archive');
  document.getElementById('current-view').style.display = mode === 'current' ? 'block' : 'none';
  document.getElementById('archive-view').style.display = mode === 'archive' ? 'block' : 'none';
}

function buildCurrentNav() {
  const nav = document.getElementById('date-nav');
  nav.innerHTML = '';
  week.forEach((w, i) => {
    const btn = document.createElement('button');
    btn.className = 'date-btn';
    btn.setAttribute('data-index', i);
    btn.setAttribute('data-mode', 'current');
    btn.textContent = `${w.day.slice(0,3)} ${w.date}`;
    btn.addEventListener('click', () => showDay(i, 'current'));
    nav.appendChild(btn);
  });
}

function buildWeekView(containerId, weekData, devotionData) {
  const main = document.getElementById(containerId);
  main.innerHTML = '';
  weekData.forEach((w, i) => {
    const section = document.createElement('section');
    section.className = 'day-section';
    section.id = `${containerId}-day-${i}`;

    const header = `<div class="day-header"><span class="day-name">${w.day}</span><span class="day-date">${w.date}, 2025</span></div>`;
    const dayDevotions = devotionData[i] || [];
    let content = '';

    if (dayDevotions.length === 0) {
      content = `<div class="empty-day">Walang debosyon para sa araw na ito.</div>`;
    } else {
      dayDevotions.forEach(d => {
        content += `<div class="devotion"><p class="verse-ref">${d.ref}</p><p class="verse-text">${d.verse}</p><p class="reflection">${d.reflection}</p></div>`;
      });
    }

    section.innerHTML = header + content;
    main.appendChild(section);
  });
}

function buildArchiveView() {
  const container = document.getElementById('archive-contents');
  container.innerHTML = '';

  if (archive.length === 0) {
    const empty = document.createElement('p');
    empty.style.cssText = "text-align:center; color:var(--text-muted); font-family:'EB Garamond',serif; font-style:italic; padding:3rem 0;";
    empty.textContent = "Walang naka-archive na linggo pa.";
    container.appendChild(empty);
    return;
  }

  const label = document.createElement('div');
  label.className = 'archive-label';
  label.textContent = 'Mga Nakaraang Linggo';
  container.appendChild(label);

  const tabsNav = document.createElement('div');
  tabsNav.className = 'date-nav archive-tabs';
  archive.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = `date-btn archive-tab ${i === 0 ? 'active' : ''}`;
    btn.dataset.archive = i;
    btn.textContent = `📅 ${a.label}`;
    tabsNav.appendChild(btn);
  });
  container.appendChild(tabsNav);

  const weekViews = document.createElement('div');
  container.appendChild(weekViews);

  archive.forEach((a, i) => {
    const div = document.createElement('div');
    div.id = `archive-week-${i}`;
    div.style.display = i === 0 ? 'block' : 'none';

    const miniNav = document.createElement('div');
    miniNav.className = 'date-nav';
    a.week.forEach((w, j) => {
      const btn = document.createElement('button');
      btn.className = `date-btn ${j === 0 ? 'active' : ''}`;
      btn.dataset.archiveWeek = i;
      btn.dataset.day = j;
      btn.textContent = `${w.day.slice(0,3)} ${w.date}`;
      btn.addEventListener('click', () => showArchiveDay(i, j));
      miniNav.appendChild(btn);
    });
    div.appendChild(miniNav);

    const sectionsDiv = document.createElement('div');
    sectionsDiv.id = `archive-main-${i}`;
    a.week.forEach((w, j) => {
      const section = document.createElement('section');
      section.className = `day-section ${j === 0 ? 'visible' : ''}`;
      const header = `<div class="day-header"><span class="day-name">${w.day}</span><span class="day-date">${w.date}, 2025</span></div>`;
      const dayDevotions = a.devotions[j] || [];
      let content = '';
      if (dayDevotions.length === 0) {
        content = `<div class="empty-day">Walang debosyon para sa araw na ito.</div>`;
      } else {
        dayDevotions.forEach(d => {
          content += `<div class="devotion"><p class="verse-ref">${d.ref}</p><p class="verse-text">${d.verse}</p><p class="reflection">${d.reflection}</p></div>`;
        });
      }
      section.innerHTML = header + content;
      sectionsDiv.appendChild(section);
    });
    div.appendChild(sectionsDiv);
    weekViews.appendChild(div);
  });

  tabsNav.addEventListener('click', e => {
    const btn = e.target.closest('.archive-tab');
    if (!btn) return;
    const idx = parseInt(btn.dataset.archive);
    tabsNav.querySelectorAll('.archive-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    archive.forEach((_, i) => {
      document.getElementById(`archive-week-${i}`).style.display = i === idx ? 'block' : 'none';
    });
    showArchiveDay(idx, 0);
  });
}

function showDay(index, mode) {
  document.querySelectorAll(`[data-mode="current"].date-btn`).forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  document.querySelectorAll(`#current-main .day-section`).forEach((sec, i) => {
    sec.classList.toggle('visible', i === index);
  });
}

function showArchiveDay(weekIdx, dayIdx) {
  document.querySelectorAll(`[data-archive-week="${weekIdx}"]`).forEach((btn, i) => {
    btn.classList.toggle('active', i === dayIdx);
  });
  document.querySelectorAll(`#archive-main-${weekIdx} .day-section`).forEach((sec, i) => {
    sec.classList.toggle('visible', i === dayIdx);
  });
}