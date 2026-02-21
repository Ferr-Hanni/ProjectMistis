// ============================================================
// GENERATE PLACEHOLDER PHOTO (SVG as Data URL) — defined first
// ============================================================
function generatePlaceholder(seed, label) {
  const colors = [
    ['#1a0f0f', '#3a1a1a', '#2a1010'],
    ['#0a0f0a', '#1a2a1a', '#102010'],
    ['#0a0a1a', '#1a1a3a', '#101020'],
    ['#1a1a0a', '#2a2a1a', '#201a10'],
    ['#1a0a1a', '#2a1a2a', '#201020'],
  ];
  const c = colors[seed % colors.length];
  const shapes = seed % 3;
  
  let shapeSvg = '';
  if (shapes === 0) {
    shapeSvg = `<circle cx="${60 + seed*7}" cy="${50 + seed*5}" r="${30 + seed*3}" fill="${c[1]}" opacity="0.6"/>`;
  } else if (shapes === 1) {
    shapeSvg = `<rect x="${20 + seed*5}" y="${30 + seed*4}" width="100" height="70" fill="${c[1]}" opacity="0.5" transform="rotate(${seed*3} 80 60)"/>`;
  } else {
    shapeSvg = `<polygon points="${seed*5+10},${seed*4+80} ${seed*3+90},${seed*2+20} ${seed*6+150},${seed*4+80}" fill="${c[1]}" opacity="0.5"/>`;
  }

  const safeLabelAttr = label ? label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180" viewBox="0 0 240 180">
    <rect width="240" height="180" fill="${c[0]}"/>
    ${shapeSvg}
    <line x1="${seed*8%60}" y1="0" x2="${seed*12%200}" y2="180" stroke="${c[2]}" stroke-width="1" opacity="0.4"/>
    <line x1="${seed*13%240}" y1="${seed*7%30}" x2="${seed*3%100}" y2="180" stroke="${c[2]}" stroke-width="0.5" opacity="0.3"/>
    ${safeLabelAttr ? `<text x="120" y="${90 + seed%10}" text-anchor="middle" fill="#4a3a2a" font-family="serif" font-size="${safeLabelAttr.length > 10 ? 9 : 12}" opacity="0.7">${safeLabelAttr}</text>` : ''}
    <rect width="240" height="180" fill="rgba(0,0,0,0.3)"/>
  </svg>`;
  
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

// ============================================================
// DIARY DATA — 10 hari, makin rusak makin ke akhir
// Level 1-2: Normal | 3-4: Mulai aneh | 5-6: Sepenuhnya rusak
// ============================================================

const diaryData = [
  {
    day: 1,
    date: "Senin, 06 Januari 2025",
    title: "Hari Pertama di RPL",
    level: 1,
    corruptDots: 0,
    text: [
      "Hari ini hari pertama masuk jurusan RPL. Gak nyangka bisa masuk sini, tapi ya sudah lah. Katanya nanti belajar coding, desain web, sama hal-hal yang berhubungan sama komputer.",
      "Teman sebangkuku namanya Danu. Dia kelihatan nerd tapi orangnya asik. Kita ngobrol banyak waktu istirahat tentang game dan aplikasi yang pengen dibuat.",
      "Gurunya namanya Pak Hendra, kelihatannya galak tapi ternyata lucu juga. Tugasnya belum ada, cuma disuruh kenalan sama Linux. Aku belum tau itu apaan.",
      "Pulang jam 3, capek tapi excited. Besok katanya langsung praktek."
    ],
    photos: [
      { src: "assets/img/unknown.jpg", caption: "Kelas pertama", corrupt: 1 },
      { src: generatePlaceholder(2, "Teman baru"), caption: "Danu & teman-teman", corrupt: 1 },
      { src: generatePlaceholder(3, "Lab komputer"), caption: "Lab komputer baru", corrupt: 1 },
    ]
  },
  {
    day: 2,
    date: "Selasa, 07 Januari 2025",
    title: "Belajar HTML untuk Pertama Kali",
    level: 1,
    corruptDots: 1,
    text: [
      "Ternyata HTML itu gampang banget. Kita bikin halaman sederhana pake notepad. Pak Hendra bilang ini dasar dari semua website yang ada di internet.",
      "Tugasnya bikin profil diri sendiri pake HTML. Aku bikin punya aku sama foto kucing yang aku download dari Google. Nilainya dapat 90, lumayan.",
      "Danu bilang dia udah bisa CSS juga. Aku agak iri tapi dia mau ngajarin aku nanti. Katanya kalau udah bisa keduanya bisa bikin website sendiri.",
      "Malamnya aku nonton tutorial di YouTube sampe jam 11. Mataku panas tapi gak mau berhenti."
    ],
    photos: [
      { src: generatePlaceholder(4, "Tugas HTML"), caption: "Tugas HTML pertama", corrupt: 1 },
      { src: generatePlaceholder(5, "Nilai tugas"), caption: "Nilai 90 hehe", corrupt: 1 },
    ]
  },
  {
    day: 3,
    date: "Kamis, 16 Januari 2025",
    title: "Capek tapi Senang",
    level: 2,
    corruptDots: 2,
    text: [
      "Seminggu ini banyak banget tugas. CSS, JavaScript, sama ada praktek jaringan yang aku gak ngerti sama sekali. Tapi entah kenapa aku suka.",
      "Ada kejadian aneh waktu kita lagi praktek. Komputerku tiba-tiba nampilkan layar hitam padahal teman-teman yang lain gak kenapa-kenapa. Pak Hendra bilang mungkin RAM-nya masalah.",
      "Danu bilang dia mimpi kode. Aku ketawa. Tapi malamnya aku juga mimpi hal yang sama — deretan angka dan huruf yang aku gak ngerti artinya.",
      "Besok ada ulangan mendadak. Belum belajar. Harusnya tidur tapi nulis ini dulu."
    ],
    photos: [
      { src: generatePlaceholder(6, "Layar hitam"), caption: "Layar aneh waktu praktek", corrupt: 1 },
      { src: generatePlaceholder(7, "Catatan belajar"), caption: "Catatan CSS", corrupt: 1 },
      { src: generatePlaceholder(8, "Selfie malam"), caption: "Begadang lagi", corrupt: 1 },
    ]
  },
  {
    day: 4,
    date: "Rabu, 22 Januari 2025",
    title: "Ada yang Tidak Beres",
    level: 3,
    corruptDots: 3,
    text: [
      "Aku gak bisa jelasin ini dengan baik tapi ada yang aneh. Waktu aku lagi nulis kode tadi, jari-jariku bergerak sendiri ke tombol yang aku gak rencanain. Hasilnya malah benar.",
      "Danu gak masuk hari ini. Katanya sakit. <span class='crossed'>Tapi kemarin dia kelihatan baik-baik aja</span>. Aku coba chat dia tapi gak dibales.",
      "Pak Hendra ngasih tugas baru — bikin database. Waktu aku buka file-nya ada satu baris kode yang aku gak pernah tulis: <span class='ink-smear'>████████████████</span>",
      "Aku hapus baris itu. Besok masih ada lagi."
    ],
    photos: [
      { src: generatePlaceholder(9, "Kode aneh"), caption: "kode yang aku gak tulis", corrupt: 2 },
      { src: generatePlaceholder(10, "Kursi kosong"), caption: "kursi Danu kosong", corrupt: 2 },
    ]
  },
  {
    day: 5,
    date: "Jumat, 31 Januari 2025",
    title: "Danu Belum Kembali",
    level: 3,
    corruptDots: 4,
    text: [
      "Sudah seminggu lebih Danu gak masuk. Katanya demam. Tapi aku ke rumahnya kemarin, ibunya bilang Danu ada di kamar dan gak mau keluar sejak dia mulai mimpi kode itu.",
      "Aku juga mulai mimpi hal yang sama sekarang. Bukan kode biasa — lebih seperti... sesuatu yang menggunakan kode sebagai bahasa.",
      "<span class='crossed'>Jangan cerita ke siapapun tentang ini.</span> <span class='crossed'>Jangan buka file itu lagi.</span>",
      "Pak Hendra tanya kenapa muka aku pucat. Aku bilang kurang tidur. Dia percaya. Tapi aku tau dia melihat sesuatu di layar komputerku yang bukan milikku."
    ],
    photos: [
      { src: generatePlaceholder(11, "Mimpi kode"), caption: "seperti ini mimpiku", corrupt: 2 },
      { src: generatePlaceholder(12, "Rumah Danu"), caption: "depan rumah Danu", corrupt: 3 },
    ]
  },
  {
    day: 6,
    date: "??, ?? Februari 2025",
    title: "s̷e̷s̷u̷a̷t̷u̷ ̷m̷u̷n̷c̷u̷l̷",
    level: 4,
    corruptDots: 5,
    text: [
      "aku gak tau hari apa ini. layar terus menampilkan hal yang sama berkali-kali tapi isinya berbeda tiap aku baca ulang.",
      "tadi aku ngetik tugas dan tanganku menulis kata-kata yang bukan bahasa apapun yang aku kenal. aku tunjukkan ke pak hendra. dia tidak melihat apapun aneh.",
      "hanya aku yang bisa melihatnya. <span class='crossed'>atau mungkin hanya aku yang memang ditunjuk untuk melihat.</span>",
      "d̸̢̰̈́ȧ̷̘̌n̵͔͐̀u̵̹̐ ̷͈̔k̷͖̅i̸̩̅r̴̜̚i̷̢̒m̸̝̄ ̶̝̏p̸̱̅e̷͔̊s̸̜͐a̴͚̅ǹ̴̮ ̴̝͂b̷̖̈á̵͕r̷̠͑u̵̫̓ ̵̢͊j̴̲̅a̸̡͗m̷̻͒ ̸̜̅3̶̰͋ ̸̮̇ṕ̵̲a̴̠͑ǵ̵̘i̵͔͊.̵̥͑ ̶̝͋h̸͉͊a̷̧̽n̶̢͒ÿ̷͍́á̴̛͉ ̷͓̀s̵̙͌a̷̤͌t̴̲̏u̵̺͑ ̶͚̐k̸̘̒a̸̰̤̐̍t̸̞͛a̷̻͑:̸͉̏ ̸̙͗t̸̺̚ȅ̷̙m̵̝̽ȗ̶̱ǩ̷̝à̷͎n̸̗̿",
    ],
    photos: [
      { src: generatePlaceholder(13, "Layar aneh 2"), caption: "s̷c̷r̷e̷e̷n̷s̷h̷o̷t̷", corrupt: 3 },
    ]
  },
  {
    day: 7,
    date: "ΔΔ / ΩΩ / ΩΩΩΩ",
    title: "⟨⟨ ᴉᴉɐɥ ɐʎuɐq ⟩⟩",
    level: 5,
    corruptDots: 6,
    text: [
      "Ȃ̷̢̘̰̳̙̈ͅk̶̡̛̳̮̒ͅu̷͕͓̖̓͒̒ ̸̙͇͕̃̄ṁ̶̨̠̗̎a̸͖͚̐̽͝s̵̤̬͈̃͝͝i̶͖̳̎͝ͅh̷̠̻̬̓̈ ̷̠̜͓̆d̴̤͈̣̒ͅi̸̘̩̓͒͜s̶͉͚͂̓͜i̵͙̼͝͝ǹ̷̨͕i̶̢̜̟̒̊̚.",
      "M̵̬͆͜e̸̙̝͐r̸̰͒̔ȅ̷̙k̴̝͑a̸̙͐ ̷͓̀b̵̙͌e̸̛̙r̷̰͑b̵̙̈i̵͙͑c̵̙͝a̸̙͝r̷̠͑a̴͚̅ ̸͉̕d̴̢̈́ě̷̡n̴͔͝g̷͔̊a̴͉͑n̵̢͒ ̸̙͗k̸̘̒ǘ̵͓ ̵̙̚s̵͙͒a̸̙̿a̷͉͑t̴̲̏ ̵̙̚m̷̝̄a̸̡͗l̷̝̽a̸̺͌m̷̻͒.",
      "ꂵꄲꈤꌩꍏ ꃳꀤꂡꈤꌩꍏ ꂵꈤꈤꌦ ꀤꈤꀤ ꋊꍏꂵꍏꀤꌦꍏ ꋊꍏꎭꍏꌦꍏ ꋊꍏꍏꂵ ꀤꋊꀤ ꋊꍏꀤ ꀤꋊꀤ ꋊꍏꍏꂵꍏꋊ ꀤꋊꀤ",
      "ᴉɥ ᴉpɐ ɐʎuɐq ʎɐɹ ᴉpɐ ɐʎuɐq ʇɐs ɐsɐɹɯᴉ ʞnɐ",
    ],
    photos: [
      { src: generatePlaceholder(14, ""), caption: "▓▓▓▓", corrupt: 3 },
      { src: generatePlaceholder(15, ""), caption: "░░░░░░░░", corrupt: 3 },
    ]
  },
  {
    day: 8,
    date: "̴̘̀2̷͎̍8̷̹̊ ̶̱͌F̷̢̑e̵͉͌b̷͉̊r̶̤͌ȗ̵͔ā̶͖r̸͔̍i̶͓͝",
    title: "◈◈◈◈◈◈◈◈",
    level: 5,
    corruptDots: 7,
    text: [
      "꧁ꦿ꧂ ꧁ꦿ꧂ ꧁ꦿ꧂ ꧁ꦿ꧂ ꧁ꦿ꧂ ꧁ꦿ꧂ ꧁ꦿ꧂",
      "ᚷᚨᚲᚢ ᛏᚨᚢ ᚨᛈᚨ ᛁᚾᛁ ᛞᚨᚾ ᚨᛈᚨ ᛁᚾᛁ ᛞᚨᚾ ᚨᛈᚨ ᛁᚾᛁ",
      "̷̢̰̈́͋͌̄̄̿̿̋ ̷̘̌͑͐̆̈́̍̉̕ ̵͔͐̀̒͊̈̒͠ ̵̹̐͗̋̉̿̌̑ ̷͈̔̑̋͂̆̊̕ ̷͖̅̓̋̏̌͘͝ ̸̩̅̒̇͒͊̕͠",
      "D̸̢̰̈́ȧ̷̘̌n̵͔͐̀u̵̹̐ ̷͈̔k̷͖̅i̸̩̅r̴̜̚i̷̢̒m̸̝̄ ̶̝̏p̸̱̅e̷͔̊s̸̜͐a̴͚̅ǹ̴̮ ̴̝͂l̸̰̂a̸̡͗g̷͔̊i̵͔͊ ̸̜̅ — ̶̝̏ĥ̸͓a̸̡͗l̷̝̽a̸̺͌m̷̻͒a̴̠͑n̶̢͒ ̵̢͊i̸̘̓n̵̡͒i̵͔͊ ̵̢͊s̴͉̒u̵̺͑d̴̢̈́a̷̧̽h̴̛͉ ̷͓̀t̷̺̚e̷̙̮͐r̵̮̋l̸̲̈́a̴͚͊l̷̘͋u̷̬͐ ̶̻̓j̴̲̅a̸̡͗u̵̹̐h̴̛͉"
    ],
    photos: [
      { src: generatePlaceholder(16, ""), caption: "⸸⸸⸸", corrupt: 3 },
    ]
  },
  {
    day: 9,
    date: "̷̢͊͋̓̍̄̿͝ ̶͉͌̑͋͂̆̊͘ ̷̢͗̒͐͊̒͠ ̸͑̐̇͒͊̕͠",
    title: "̷̧͔̲̰̓͋͒̿̒͝Ĥ̷͙̗̰̯͌̃̑̄̚a̴͙̮̩͒̈́̑͊͝r̶̙̖̯̋̓̆̇͝i̴̟͚͙̓̉͒̆͘ ̸̹̹͓͌̉̓̿͝k̴͎̙̥͑̅̈̆͠ę̸͍͒̋͊̑̚͝s̷͓̙̣̒̄̆̕͠e̵͈͚̘͒͂͗̿͝m̶͖̙̝͑̂͑̍̕b̸͚͙͔̈́̈̄̆͝i̵͕̙̙̒̔͒͊̕l̸̙͖̩̄̋̈́̾͝a̷̗͙̫̓͌̿͋͝n̶̙͇͎̿͂̄̀͝",
    level: 6,
    corruptDots: 8,
    text: [
      "ꌗꄲꂵꍏ꓅ꁝꀤꈤꀁ꓅ꁝ꓅ꄲꀤꈤꀁ꓅ꁝꄲꅏꁝꈤꁝꎭꄲꈤꅏꁝꄲꅏꁝꈤꅏꎭꁝꄲꈤ",
      "̵̢̛̮͕͙̱̩͎͕̰̯̰̭̙͎̣̰͙͙͙͓͚̖̣͈͙͔̽͐͒͊̄̈́̿̋̑̍̇̿̋̿͐̄̂̓̅̽͊̿͐̑̇̿̿̊̏͂̚͘͘͝͝ ̶̘̃̈́͋͌͆̌͋̈́̍̉̔̕͘͝",
      "⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸ ꩜ ⸸",
      "Ȃ̷̢̘̰̳̙k̶̡̛̳̮̒ͅu̷͕͓͒ ̸͇̃m̶̠̎a̸͖̐s̵̤̃i̶͖̎h̷̠̓ ̷̜̆d̴̤͒i̸̘̒s̶͉͂i̵͙̝̒n̷̡i̶̢̊. ̶͈̏K̴̝͑a̸̙͐m̷͈̀u̵͙͑ ̷͓̀j̵͙̒u̸͙͝g̷͔̊a̴͚̅ ̸͉͗s̶͖̒u̵̺͑d̴̢̈́a̷̧̽h̴̛͉ ̷͓̀d̸͚̓i̷̡̅s̵͙͌i̵͔͊n̷̙̑i̸͔͌ ̸̜̅s̵͙͒e̷̙͐j̴͔̒a̸̻̿k̷͖̅ ̸̰̂k̷̦̿a̸̰̤̐m̷̻͒u̵̹̐ ̸͕̕m̵̝̽e̷͔̊m̵͓̑b̷͉̊u̷̘̐k̷͖̅a̴̠͑ ̸̜̕h̴̛͉a̷̧̽l̷̘͋a̸̺͌m̷̻͒a̴̠͑n̶̢͒ ̵̢͊p̸̱̅e̷͔̊r̷̠͑t̴̲̏a̸̡͗m̷̻͒a̴̠͑."
    ],
    photos: [
      { src: generatePlaceholder(17, ""), caption: "⸸", corrupt: 3 },
      { src: generatePlaceholder(18, ""), caption: "꩜꩜꩜", corrupt: 3 },
    ]
  },
  {
    day: 10,
    date: "",
    title: "",
    level: 6,
    corruptDots: 10,
    isFinal: true,
    text: [
      "̵̢̛͈͕͖̺͚̩͎͕̖̯̣̭͕͔͙̩͚͎̱̰͎̟͚͔͎̣͎͚͚͓͚͖̻̖̙͈͔̿͒̏̓͊̄̈́̑̍̿̋̊͐̄̂̓̽͊̿̑̇̿̚͘͘͝",
      ".",
      ".",
      "."
    ],
    photos: []
  }
];



// ============================================================
// DESTRUCTION EFFECTS
// ============================================================
const destroyEffects = ['shattering', 'melting', 'static-destroy', 'pixelate'];

function destroyPhoto(wrapper) {
  if (wrapper.classList.contains('destroyed') || wrapper.classList.contains('shattering') ||
      wrapper.classList.contains('melting') || wrapper.classList.contains('static-destroy') ||
      wrapper.classList.contains('pixelate')) return;

  const effect = destroyEffects[Math.floor(Math.random() * destroyEffects.length)];
  wrapper.classList.add(effect);

  const duration = effect === 'melting' ? 800 : effect === 'static-destroy' ? 500 : 700;

  // Glitch flash
  wrapper.style.filter = 'brightness(3) contrast(5)';
  setTimeout(() => { wrapper.style.filter = ''; }, 80);

  setTimeout(() => {
    wrapper.classList.remove(effect);
    wrapper.classList.add('destroyed');
    spawnGhostText(wrapper);
  }, duration);
}

// ============================================================
// GHOST TEXT SPAWNER
// ============================================================
const ghostPhrases = [
  "ini bukan milikmu",
  "kamu tidak seharusnya di sini",
  "kenangan tidak bisa dikembalikan",
  "jangan lanjutkan",
  "dia juga menontonmu",
  "kamu sudah terlalu jauh",
  "ingatan hilang selamanya",
  "████████",
  "⸸⸸⸸",
  "temukan aku",
];

function spawnGhostText(nearEl) {
  const ghost = document.createElement('div');
  ghost.className = 'ghost-text';
  ghost.textContent = ghostPhrases[Math.floor(Math.random() * ghostPhrases.length)];
  
  const rect = nearEl.getBoundingClientRect();
  ghost.style.left = (rect.left + Math.random() * 100 - 30) + 'px';
  ghost.style.top  = (rect.top + window.scrollY + Math.random() * 60 - 20) + 'px';

  document.body.appendChild(ghost);
  setTimeout(() => ghost.remove(), 1200);
}

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (8 + Math.random() * 15) + 's';
    p.style.animationDelay = (-Math.random() * 20) + 's';
    p.style.width  = (Math.random() > 0.7 ? 3 : 1.5) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}

// ============================================================
// BUILD DAY NAVIGATION
// ============================================================
function buildNav() {
  const container = document.getElementById('dayButtons');
  diaryData.forEach((entry, idx) => {
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (entry.level >= 4 ? ' corrupt' : '');
    
    if (entry.isFinal) {
      btn.textContent = '???';
    } else {
      btn.textContent = `Hari ${entry.day}`;
    }

    btn.addEventListener('click', () => showPage(idx));
    container.appendChild(btn);
  });
}

// ============================================================
// SHOW PAGE
// ============================================================
function showPage(idx) {
  const allPages = document.querySelectorAll('.diary-page');
  const allBtns  = document.querySelectorAll('.day-btn');

  allPages.forEach(p => p.classList.remove('visible'));
  allBtns.forEach(b => b.classList.remove('active'));

  const target = document.getElementById(`page-${idx}`);
  if (target) {
    target.classList.add('visible');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (allBtns[idx]) allBtns[idx].classList.add('active');
  updateFooter(idx);
}

// ============================================================
// BUILD PAGES
// ============================================================
function buildPages() {
  const container = document.getElementById('pageContainer');

  diaryData.forEach((entry, idx) => {
    const page = document.createElement('div');
    page.className = 'diary-page';
    page.id = `page-${idx}`;
    page.setAttribute('data-level', entry.level);
    if (idx === 0) page.classList.add('visible');

    // -- Page header --
    const header = document.createElement('div');
    header.className = 'page-header';

    // Corruption dots
    const corruptBar = document.createElement('div');
    corruptBar.className = 'corruption-bar';
    const maxDots = 10;
    for (let d = 0; d < Math.min(entry.corruptDots, maxDots); d++) {
      const dot = document.createElement('div');
      dot.className = 'corrupt-dot filled';
      corruptBar.appendChild(dot);
    }
    header.appendChild(corruptBar);

    if (!entry.isFinal) {
      const dateEl = document.createElement('div');
      dateEl.className = 'page-date';
      dateEl.innerHTML = entry.date;

      const titleEl = document.createElement('h2');
      titleEl.className = 'page-day-title';
      titleEl.innerHTML = entry.title;

      header.appendChild(dateEl);
      header.appendChild(titleEl);
    }

    page.appendChild(header);

    // -- Final page special --
    if (entry.isFinal) {
      const finalWrap = document.createElement('div');
      finalWrap.className = 'final-page-overlay';

      const warningText = document.createElement('div');
      warningText.style.fontFamily = 'var(--font-corrupt)';
      warningText.style.fontSize = '1.3rem';
      warningText.style.color = 'var(--red-blood)';
      warningText.style.lineHeight = '2';
      warningText.style.letterSpacing = '0.1em';
      warningText.style.textShadow = '0 0 20px var(--glow-red)';
      warningText.innerHTML = entry.text.join('<br>');

      finalWrap.appendChild(warningText);
      page.appendChild(finalWrap);
      container.appendChild(page);
      return;
    }

    // -- Diary text --
    const textBlock = document.createElement('div');
    textBlock.className = 'diary-text';
    entry.text.forEach(para => {
      const p = document.createElement('p');
      p.innerHTML = para;
      textBlock.appendChild(p);
    });
    page.appendChild(textBlock);

    // -- Divider --
    if (entry.photos && entry.photos.length > 0) {
      const divider = document.createElement('div');
      divider.className = 'creepy-divider';
      divider.textContent = '— foto —';
      page.appendChild(divider);

      // -- Photos --
      const grid = document.createElement('div');
      grid.className = 'photo-grid';

      entry.photos.forEach(photo => {
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-wrapper';
        wrapper.setAttribute('data-corrupt', photo.corrupt);

        const img = document.createElement('img');
        img.className = 'photo-img';
        img.src = photo.src;
        img.alt = photo.caption;
        img.draggable = false;

        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.innerHTML = photo.caption;

        wrapper.appendChild(img);
        wrapper.appendChild(caption);

        wrapper.addEventListener('click', () => destroyPhoto(wrapper));
        grid.appendChild(wrapper);
      });

      page.appendChild(grid);
    }

    container.appendChild(page);
  });
}

// ============================================================
// FOOTER MESSAGES
// ============================================================
const footerMessages = [
  "halaman ini bukan untukmu.",
  "kamu sudah terlalu dalam.",
  "buku ini sudah selesai. kamu belum.",
  "ẗ̴̡̄͝ú̴̠͝t̴̖̾ȗ̵̢͝p̴͚̒͠ ̸͇̃s̸̻̊ȩ̸͠k̵͝ͅa̸̪̓r̸͔̀a̵͍͆n̸̛͜g̵͚̅",
  "⸸ ⸸ ⸸",
  "kamu masih di sini?",
  "░░░░░░░░░░░░░░░░",
];

function updateFooter(idx) {
  const el = document.getElementById('footerText');
  const msgIdx = Math.min(idx, footerMessages.length - 1);
  el.innerHTML = footerMessages[msgIdx];
}

// ============================================================
// RANDOM AMBIENT CREEP
// ============================================================
function randomCursorJitter() {
  // Occasionally shift text on screen slightly
  const pages = document.querySelectorAll('.diary-page.visible .diary-text p');
  if (pages.length === 0) return;
  
  const target = pages[Math.floor(Math.random() * pages.length)];
  const currentLevel = parseInt(target.closest('.diary-page').getAttribute('data-level'));
  
  if (currentLevel >= 5) {
    target.style.transform = `translateX(${(Math.random()-0.5)*4}px) translateY(${(Math.random()-0.5)*2}px)`;
    setTimeout(() => { target.style.transform = ''; }, 200);
  }
}

// Occasional random ghost text from nothing
function randomAmbientGhost() {
  const visiblePage = document.querySelector('.diary-page.visible');
  if (!visiblePage) return;
  const level = parseInt(visiblePage.getAttribute('data-level'));
  if (level < 4) return;

  const ghost = document.createElement('div');
  ghost.className = 'ghost-text';
  ghost.textContent = ghostPhrases[Math.floor(Math.random() * ghostPhrases.length)];
  ghost.style.left = (20 + Math.random() * 60) + 'vw';
  ghost.style.top  = (window.scrollY + 100 + Math.random() * 300) + 'px';
  ghost.style.fontSize = (0.6 + Math.random() * 0.5) + 'rem';
  ghost.style.opacity = '0';
  ghost.style.animationDuration = '2s';

  document.body.appendChild(ghost);
  setTimeout(() => ghost.remove(), 2000);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  buildNav();
  buildPages();

  // Activate first nav button
  const firstBtn = document.querySelector('.day-btn');
  if (firstBtn) firstBtn.classList.add('active');

  // Ambient intervals
  setInterval(randomCursorJitter, 3000);
  setInterval(randomAmbientGhost, 6000);
});