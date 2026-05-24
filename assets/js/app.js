// ── ARCHIVE: Previous weeks ──
// Add past weeks here to keep them accessible.
// Format: { label: "May 12–18", week: [...], devotions: [...] }

const archive = [
  {
    label: "May 12–18",
    week: [
      { day: "Monday",    date: "May 12" },
      { day: "Tuesday",   date: "May 13" },
      { day: "Wednesday", date: "May 14" },
      { day: "Thursday",  date: "May 15" },
      { day: "Friday",    date: "May 16" },
      { day: "Saturday",  date: "May 17" },
      { day: "Sunday",    date: "May 18" }
    ],
    devotions: [
      [{ ref: "Ezekiel 18:32", verse: "For I have no pleasure in the death of him that dieth, saith the Lord GOD: wherefore turn yourselves, and live ye.", reflection: "Ang Diyos ay hindi nagagalak sa pagkawala ng sinuman. Ang Kanyang hinihingi ay simple  bumalik ka sa Kanya at mamuhay. Huwag hayaang lumipas pa ang isang araw nang hindi mo inialay ang iyong puso sa Panginoon." }],
      [{ ref: "Deuteronomy 6:5", verse: "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.", reflection: "Ang pagmamahal sa Diyos ay hindi basta salita lamang. Ibinibigay natin ang ating buong puso, kaluluwa, at lakas sa Kanya  hindi ang natitira pagkatapos ng lahat ng iba." }],
      [{ ref: "John 14:15", verse: "If ye love me, keep my commandments.", reflection: "Ang tunay na pagmamahal ay nasusukat sa gawa, hindi sa damdamin. Kung sinasabi nating mahal natin ang Diyos, sumusunod tayo sa Kanyang mga utos  kahit mahirap, kahit hindi tayo naiintindihan ng mundo." }],
      [{ ref: "Proverbs 3:5–6", verse: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", reflection: "Madalas, ang pinakamalaking hadlang sa pagtulong ng Diyos sa atin ay ang ating sariling karunungan. Iwanan ang pag-aalala at ibigay sa Kanya ang lahat ng iyong mga desisyon ngayon." }],
      [{ ref: "1 Corinthians 6:19–20", verse: "What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body.", reflection: "Ang ating katawan ay hindi sa atin  ito ay templo ng Espiritu Santo. Anumang bisyo  alak, sigarilyo, o anumang nagpapahina sa ating katawan  ay isang pag-aalipusta sa Diyos na nagtubos sa atin. Piliin ang kalinisan ngayon." }],
      [],
      []
    ]
  }
  // ── Paste next week's object here when updating ──
];

// ── CURRENT WEEK DEVOTION DATA ──
// Monday=0, Tuesday=1, Wednesday=2, Thursday=3, Friday=4, Saturday=5, Sunday=6
// Each day: array of { ref, verse, reflection }. Empty [] = no devotion.

const devotions = [
  // Monday - May 19
  [
    {
      ref: "Psalm 51:10",
      verse: "Create in me a clean heart, O God; and renew a right spirit within me.",
      reflection: "Sa simula ng bagong linggo, hilingin natin sa Diyos ang malinis na puso. Ang bawat umaga ay pagkakataon para magsimulang muli  walang kasalanang hindi kayang patawarin ng Kanyang habag."
    }
  ],
  // Tuesday - May 20
  [
    {
      ref: "Romans 8:28",
      verse: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      reflection: "Kahit anong mangyari ngayon, nasa kamay ng Diyos ang lahat. Ang mga pagsubok ay hindi kaparusahan  ginagamit Niya ang bawat isa para sa ating kabutihan at kaluwalhatian Niya."
    }
  ],
  // Wednesday - May 21
  [
    {
      ref: "Matthew 6:33",
      verse: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      reflection: "Huwag hayaang ang mga pang-araw-araw na pag-aalala ang manguna sa ating buhay. Kapag inuna natin ang Diyos, ang lahat ng ating pangangailangan ay Kanyang ibibigay sa tamang panahon."
    }
  ],
  // Thursday - May 22
  [
    {
      ref: "James 1:14–15",
      verse: "But every man is tempted, when he is drawn away of his own lust, and enticed. Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.",
      reflection: "Ang tukso ay nagsisimula sa isang maliit na pagnanasa na pinahihintulutan nating lumago. Kilalanin ang mga mapanganib na ugali bago pa man maging bisyo  ang maagang paglayo ang pinakamatalinong hakbang."
    }
  ],
  // Friday - May 23
  [
    {
      ref: "Galatians 5:1",
      verse: "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.",
      reflection: "Pinalaya tayo ni Cristo  huwag nating ibalik ang ating sarili sa dating pagkaalipin ng bisyo, galit, o kasalanan. Ang kalayaan ay isang araw-araw na pagpili."
    }
  ],
  // Saturday - May 24
  [
    {
      ref: "Isaiah 40:31",
      verse: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      reflection: "Sa katapusan ng linggo, pahintulutan nating mapanibago ang ating lakas sa Panginoon. Ang paghihintay sa Kanya ay hindi kahinaan  ito ay pinakamatibay na anyo ng pananampalataya."
    }
  ],
  // Sunday - May 25
  [
    {
      ref: "Hebrews 10:25",
      verse: "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.",
      reflection: "Ang Linggo ay para sa pagsamba at pagtitipon. Huwag nating kalimutan ang halaga ng makiisa sa kapwa mananampalataya  sa sama-sama, mas lumalago ang ating pananampalataya."
    }
  ]
];

// ── WEEK CONFIG ──
const week = [
  { day: "Monday",    date: "May 19" },
  { day: "Tuesday",   date: "May 20" },
  { day: "Wednesday", date: "May 21" },
  { day: "Thursday",  date: "May 22" },
  { day: "Friday",    date: "May 23" },
  { day: "Saturday",  date: "May 24" },
  { day: "Sunday",    date: "May 25" }
];

const CURRENT_WEEK_LABEL = "May 19–25";

// ── STATE ──
let viewMode = 'current'; // 'current' | 'archive'
let activeArchiveIdx = 0;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildWeekView('current-main', week, devotions);
  buildArchiveView();
  buildCurrentNav();

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

  // Label
  const label = document.createElement('div');
  label.className = 'archive-label';
  label.textContent = 'Mga Nakaraang Linggo';
  container.appendChild(label);

  // Week selector tabs
  const tabsNav = document.createElement('div');
  tabsNav.className = 'date-nav archive-tabs';
  archive.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = `date-btn archive-tab ${i === 0 ? 'active' : ''}`;
    btn.dataset.archive = i;
    btn.textContent = `\uD83D\uDCC5 ${a.label}`;
    tabsNav.appendChild(btn);
  });
  container.appendChild(tabsNav);

  // Week views
  const weekViews = document.createElement('div');
  container.appendChild(weekViews);

  archive.forEach((a, i) => {
    const div = document.createElement('div');
    div.id = `archive-week-${i}`;
    div.style.display = i === 0 ? 'block' : 'none';

    // Mini day nav
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

    // Day sections
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

  // Tab switching
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
  const prefix = mode === 'current' ? 'current-main' : null;
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
