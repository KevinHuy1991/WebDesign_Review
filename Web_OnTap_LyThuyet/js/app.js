// ==========================================================================
// THIẾT KẾ WEB - FIT UTC2
// Nền tảng Ôn Tập Lý Thuyết & Bài Tập Điền Vào Chỗ Trống
// Application Core Controller
// ==========================================================================

(function() {
  'use strict';

  // -------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------
  const state = {
    currentTab: 'theory',
    currentChapter: 4,
    theme: localStorage.getItem('webdesign_theme') || 'dark',
    soundEnabled: localStorage.getItem('webdesign_sound') !== 'false',
    score: parseInt(localStorage.getItem('webdesign_score') || '0', 10),
    streak: parseInt(localStorage.getItem('webdesign_streak') || '0', 10),
    bestStreak: parseInt(localStorage.getItem('webdesign_best_streak') || '0', 10),

    // Fill In Blank State
    fb: {
      filteredQuestions: [],
      currentIndex: 0,
      userAnswers: JSON.parse(localStorage.getItem('webdesign_fb_answers') || '{}'),
      filterChapter: 'all',
      filterDifficulty: 'all',
      filterStatus: 'all'
    },

    // Flashcards State
    fc: {
      filteredCards: [],
      currentIndex: 0,
      isFlipped: false,
      filterChapter: 'all',
      mastered: JSON.parse(localStorage.getItem('webdesign_fc_mastered') || '[]'),
      needReview: JSON.parse(localStorage.getItem('webdesign_fc_review') || '[]')
    },

    // Quiz State
    quiz: {
      currentIndex: 0,
      score: 0,
      answered: false
    },

    // Playground Templates
    playgroundTemplates: {
      clock: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #0f172a;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .clock-card {
      background: rgba(30, 41, 59, 0.8);
      border: 2px solid #3b82f6;
      border-radius: 16px;
      padding: 30px 50px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }
    h2 { margin: 0 0 15px; color: #93c5fd; }
    #clockDisplay {
      font-family: monospace;
      font-size: 3.5rem;
      font-weight: bold;
      color: #38bdf8;
      letter-spacing: 4px;
    }
    .date-text { color: #94a3b8; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="clock-card">
    <h2>Đồng Hồ Điện Tử (DOM & setInterval)</h2>
    <div id="clockDisplay">00:00:00</div>
    <div class="date-text" id="dateDisplay">Đang lấy ngày...</div>
  </div>

  <script>
    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('clockDisplay').textContent = h + ':' + m + ':' + s;

      const d = now.getDate();
      const mo = now.getMonth() + 1;
      const y = now.getFullYear();
      document.getElementById('dateDisplay').textContent = 'Hôm nay: Ngày ' + d + ' tháng ' + mo + ' năm ' + y;
    }
    setInterval(updateClock, 1000);
    updateClock();
  <\/script>
</body>
</html>`,

      form: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f8fafc;
      padding: 30px;
      display: flex;
      justify-content: center;
    }
    .form-box {
      background: #fff;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      width: 360px;
    }
    .form-group { margin-bottom: 16px; }
    label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; }
    input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      box-sizing: border-box;
      outline: none;
    }
    input:focus { border-color: #6366f1; }
    .error-msg { color: #ef4444; font-size: 0.8rem; margin-top: 4px; display: none; }
    button {
      width: 100%;
      padding: 10px;
      background: #6366f1;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover { background: #4f46e5; }
  </style>
</head>
<body>
  <div class="form-box">
    <h3>Đăng Ký Tài Khoản FIT UTC2</h3>
    <form id="regForm">
      <div class="form-group">
        <label for="uname">Tên tài khoản:</label>
        <input type="text" id="uname" placeholder="Tối thiểu 5 ký tự" />
        <div class="error-msg" id="unameErr">Tên tài khoản phải từ 5 ký tự trở lên!</div>
      </div>
      <div class="form-group">
        <label for="uemail">Email:</label>
        <input type="email" id="uemail" placeholder="name@domain.com" />
        <div class="error-msg" id="uemailErr">Email không hợp lệ!</div>
      </div>
      <button type="submit">Gửi Thông Tin</button>
    </form>
  </div>

  <script>
    document.getElementById('regForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      const uname = document.getElementById('uname').value.trim();
      const uemail = document.getElementById('uemail').value.trim();

      if (uname.length < 5) {
        document.getElementById('unameErr').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('unameErr').style.display = 'none';
      }

      if (!uemail.includes('@')) {
        document.getElementById('uemailErr').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('uemailErr').style.display = 'none';
      }

      if (valid) {
        alert('Chúc mừng bạn ' + uname + ' đã đăng ký hợp lệ thành công!');
      }
    });
  <\/script>
</body>
</html>`,

      flex: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #111827;
      color: #fff;
      padding: 30px;
    }
    h2 { text-align: center; color: #a855f7; }
    .card-grid {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 30px;
    }
    .card {
      background: #1f2937;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 24px;
      width: 200px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 15px 30px rgba(168, 85, 247, 0.4);
      border-color: #a855f7;
    }
    .icon { font-size: 40px; margin-bottom: 12px; }
  </style>
</head>
<body>
  <h2>CSS3 Flexbox & Transition Card Effects</h2>
  <div class="card-grid">
    <div class="card">
      <div class="icon">🚀</div>
      <h3>HTML5</h3>
      <p>Cấu trúc ngữ nghĩa</p>
    </div>
    <div class="card">
      <div class="icon">🎨</div>
      <h3>CSS3</h3>
      <p>Hiệu ứng mượt mà</p>
    </div>
    <div class="card">
      <div class="icon">⚡</div>
      <h3>JavaScript</h3>
      <p>Tương tác động</p>
    </div>
  </div>
</body>
</html>`,

      canvas: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: #0b0f19;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      font-family: sans-serif;
    }
    canvas {
      border: 2px solid #6366f1;
      border-radius: 12px;
      background: #000;
    }
  </style>
</head>
<body>
  <h3>HTML5 Canvas 2D - Quả Bóng Chuyển Động</h3>
  <canvas id="canvas" width="400" height="250"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let x = 50, y = 50, dx = 3, dy = 2, radius = 18;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();

      if (x + dx > canvas.width - radius || x + dx < radius) dx = -dx;
      if (y + dy > canvas.height - radius || y + dy < radius) dy = -dy;

      x += dx;
      y += dy;
      requestAnimationFrame(draw);
    }
    draw();
  <\/script>
</body>
</html>`
    }
  };

  // -------------------------------------------------------------
  // AUDIO SYNTHESIZER (Web Audio API - No external mp3 required)
  // -------------------------------------------------------------
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSuccessChime() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.36);
      });
    } catch (e) {
      console.warn('Audio not allowed yet:', e);
    }
  }

  function playErrorBuzz() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.setValueAtTime(110, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.26);
    } catch (e) {}
  }

  function playTapSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.07);
    } catch (e) {}
  }

  // -------------------------------------------------------------
  // CELEBRATION CONFETTI ENGINE
  // -------------------------------------------------------------
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#38bdf8', '#ec4899', '#a855f7'];
    const particles = [];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let frame = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vr;
        p.opacity -= 0.015;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 75) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(render);
  }

  // -------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // -------------------------------------------------------------
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    if (!toast) return;

    toastMsg.textContent = message;
    toast.className = `toast-notification show ${type}`;

    if (type === 'success') {
      toastIcon.className = 'fa-solid fa-circle-check';
      toastIcon.style.color = 'var(--accent-emerald)';
    } else {
      toastIcon.className = 'fa-solid fa-circle-exclamation';
      toastIcon.style.color = 'var(--accent-rose)';
    }

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // -------------------------------------------------------------
  // THEME & SOUND CONTROLS
  // -------------------------------------------------------------
  function initThemeAndSound() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
      themeBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('webdesign_theme', state.theme);
        themeBtn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        showToast(`Đã chuyển sang giao diện ${state.theme === 'dark' ? 'Tối' : 'Sáng'}`);
        playTapSound();
      });
    }

    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.innerHTML = state.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      soundBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('webdesign_sound', String(state.soundEnabled));
        soundBtn.innerHTML = state.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
        showToast(state.soundEnabled ? 'Đã bật âm thanh hiệu ứng' : 'Đã tắt âm thanh');
        if (state.soundEnabled) playSuccessChime();
      });
    }

    updateHeaderStats();
  }

  function updateHeaderStats() {
    const streakEl = document.getElementById('headerStreak');
    const scoreEl = document.getElementById('headerScore');
    if (streakEl) streakEl.textContent = state.streak;
    if (scoreEl) scoreEl.textContent = state.score;
  }

  function addScoreAndStreak(isFirstAttempt = true) {
    const points = isFirstAttempt ? 15 : 10;
    state.score += points;
    state.streak += 1;
    if (state.streak > state.bestStreak) {
      state.bestStreak = state.streak;
      localStorage.setItem('webdesign_best_streak', String(state.bestStreak));
    }
    localStorage.setItem('webdesign_score', String(state.score));
    localStorage.setItem('webdesign_streak', String(state.streak));
    updateHeaderStats();

    if (state.streak % 5 === 0) {
      showToast(`🔥 Xuất sắc! Bạn đang có chuỗi đúng ${state.streak} câu liên tiếp!`);
      launchConfetti();
    }
  }

  function resetStreak() {
    state.streak = 0;
    localStorage.setItem('webdesign_streak', '0');
    updateHeaderStats();
  }

  // -------------------------------------------------------------
  // TAB NAVIGATION
  // -------------------------------------------------------------
  function initNavigation() {
    const navTabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    function switchTab(tabId) {
      state.currentTab = tabId;
      navTabs.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
      });
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabId}`);
      });
      window.location.hash = tabId;
      playTapSound();
    }

    navTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Check initial hash in URL
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`panel-${hash}`)) {
      switchTab(hash);
    }
  }

  // -------------------------------------------------------------
  // TAB 1: THEORY HUB
  // -------------------------------------------------------------
  function initTheoryHub() {
    const pillsBar = document.getElementById('chapterPillsBar');
    const contentContainer = document.getElementById('chapterContentContainer');
    const searchInput = document.getElementById('theorySearchInput');
    const expandBtn = document.getElementById('expandAllTheoryBtn');

    if (!pillsBar || !contentContainer || typeof THEORY_DATA === 'undefined') return;

    // Render Chapter Pills
    pillsBar.innerHTML = '';
    THEORY_DATA.forEach((ch, idx) => {
      const pill = document.createElement('button');
      pill.className = `chapter-pill ${ch.chapterNum === state.currentChapter ? 'active' : ''}`;
      pill.innerHTML = `<i class="${ch.icon}"></i> ${ch.title.split(':')[0]}`;
      pill.addEventListener('click', () => {
        state.currentChapter = ch.chapterNum;
        pillsBar.querySelectorAll('.chapter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderChapterContent(ch);
        playTapSound();
      });
      pillsBar.appendChild(pill);
    });

    function renderChapterContent(chapter) {
      contentContainer.innerHTML = `
        <div class="chapter-header-card">
          <div class="chapter-header-info">
            <h3>
              <i class="${chapter.icon}" style="color: ${chapter.color}"></i>
              ${chapter.title}
              <span class="chapter-badge-tag" style="background: rgba(99, 102, 241, 0.15); color: ${chapter.color};">
                ${chapter.badge}
              </span>
            </h3>
            <p>${chapter.subtitle}</p>
            <p style="margin-top: 6px; font-weight: 500; color: var(--text-primary);">${chapter.summary}</p>
          </div>
          <button class="btn-practice-now" id="btnGoPracticeChapter">
            <i class="fa-solid fa-pen-to-square"></i> Luyện Điền Chỗ Trống Chương Này
          </button>
        </div>

        <div class="accordion-list" id="accordionList">
          ${chapter.sections.map((sec, sIdx) => `
            <div class="accordion-item ${sIdx === 0 ? 'open' : ''}" data-sec-index="${sIdx}">
              <div class="accordion-header">
                <div class="accordion-title">
                  <i class="fa-solid fa-circle-chevron-right" style="color: ${chapter.color}; font-size: 0.95rem;"></i>
                  ${sec.title}
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon"></i>
              </div>
              <div class="accordion-body">
                ${sec.content}
                ${sec.code ? `
                  <div class="code-box-wrapper">
                    <div class="code-box-header">
                      <span><i class="fa-solid fa-code"></i> Mã nguồn ví dụ minh họa</span>
                      <button class="btn-copy-code" data-code="${encodeURIComponent(sec.code)}">
                        <i class="fa-regular fa-copy"></i> Sao chép
                      </button>
                    </div>
                    <pre><code>${sec.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      `;

      // Accordion Click Listener
      contentContainer.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.closest('.accordion-item');
          item.classList.toggle('open');
          playTapSound();
        });
      });

      // Copy Code Buttons
      contentContainer.querySelectorAll('.btn-copy-code').forEach(copyBtn => {
        copyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rawCode = decodeURIComponent(copyBtn.getAttribute('data-code'));
          navigator.clipboard.writeText(rawCode).then(() => {
            showToast('Đã sao chép đoạn mã vào clipboard!');
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Đã chép!';
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Sao chép';
            }, 2000);
          });
        });
      });

      // Go Practice Button Listener
      const goPracticeBtn = document.getElementById('btnGoPracticeChapter');
      if (goPracticeBtn) {
        goPracticeBtn.addEventListener('click', () => {
          // Switch to fill blank tab
          const tabBtn = document.querySelector('.tab-btn[data-tab="fill-blank"]');
          if (tabBtn) tabBtn.click();
          // Filter by this chapter
          const filterChapter = document.getElementById('fbFilterChapter');
          if (filterChapter) {
            filterChapter.value = String(chapter.chapterNum);
            filterChapter.dispatchEvent(new Event('change'));
          }
        });
      }
    }

    // Initial Render of Chapter 4
    const initChapter = THEORY_DATA.find(c => c.chapterNum === state.currentChapter) || THEORY_DATA[0];
    renderChapterContent(initChapter);

    // Expand / Collapse All
    let allExpanded = false;
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        allExpanded = !allExpanded;
        contentContainer.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.toggle('open', allExpanded);
        });
        expandBtn.innerHTML = allExpanded ? '<i class="fa-solid fa-angles-up"></i> Thu gọn tất cả' : '<i class="fa-solid fa-angles-down"></i> Mở tất cả';
      });
    }

    // Theory Search Filter
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = contentContainer.querySelectorAll('.accordion-item');
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.display = 'block';
            if (query.length > 2) item.classList.add('open');
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  }

  // -------------------------------------------------------------
  // TAB 2: FILL-IN-THE-BLANK ARENA (CORE FEATURE)
  // -------------------------------------------------------------
  function initFillInTheBlankArena() {
    if (typeof FILL_BLANK_QUESTIONS === 'undefined') return;

    // Elements
    const card = document.getElementById('fbQuestionCard');
    const promptText = document.getElementById('fbPromptText');
    const interactiveArea = document.getElementById('fbInteractiveArea');
    const chapterBadge = document.getElementById('fbCardChapterBadge');
    const diffBadge = document.getElementById('fbCardDiffBadge');
    const topicBadge = document.getElementById('fbCardTopicBadge');
    const indexBadge = document.getElementById('fbCardQuestionIndex');
    const bookmarkBtn = document.getElementById('fbBookmarkBtn');

    const checkBtn = document.getElementById('fbCheckAnswerBtn');
    const hintBtn = document.getElementById('fbShowHintBtn');
    const solutionBtn = document.getElementById('fbShowSolutionBtn');
    const retryBtn = document.getElementById('fbRetryBtn');
    const prevBtn = document.getElementById('fbPrevBtn');
    const nextBtn = document.getElementById('fbNextBtn');
    const shuffleBtn = document.getElementById('fbShuffleBtn');
    const resetProgressBtn = document.getElementById('fbResetProgressBtn');

    const hintBox = document.getElementById('fbHintBox');
    const hintText = document.getElementById('fbHintText');
    const explanationBox = document.getElementById('fbExplanationBox');
    const explanationText = document.getElementById('fbExplanationText');

    const filterChapter = document.getElementById('fbFilterChapter');
    const filterDiff = document.getElementById('fbFilterDifficulty');
    const filterStatus = document.getElementById('fbFilterStatus');
    const navGrid = document.getElementById('fbNavGrid');
    const filteredCount = document.getElementById('fbFilteredCount');

    // Stats Elements
    const statProgress = document.getElementById('fbStatProgress');
    const statCorrect = document.getElementById('fbStatCorrect');
    const statIncorrect = document.getElementById('fbStatIncorrect');
    const statAccuracy = document.getElementById('fbStatAccuracy');
    const statStreak = document.getElementById('fbStatStreak');
    const progressBarFill = document.getElementById('fbProgressBarFill');

    // Filter questions according to current selects
    function applyFilters() {
      state.fb.filterChapter = filterChapter.value;
      state.fb.filterDifficulty = filterDiff.value;
      state.fb.filterStatus = filterStatus.value;

      state.fb.filteredQuestions = FILL_BLANK_QUESTIONS.filter(q => {
        // Chapter filter
        if (state.fb.filterChapter !== 'all' && String(q.chapter) !== state.fb.filterChapter) {
          return false;
        }
        // Difficulty filter
        if (state.fb.filterDifficulty !== 'all' && q.difficulty !== state.fb.filterDifficulty) {
          return false;
        }
        // Status filter
        const rec = state.fb.userAnswers[q.id];
        if (state.fb.filterStatus === 'unattempted') {
          if (rec && rec.status) return false;
        } else if (state.fb.filterStatus === 'correct') {
          if (!rec || rec.status !== 'correct') return false;
        } else if (state.fb.filterStatus === 'incorrect') {
          if (!rec || rec.status !== 'incorrect') return false;
        } else if (state.fb.filterStatus === 'bookmarked') {
          if (!rec || !rec.bookmarked) return false;
        }
        return true;
      });

      state.fb.currentIndex = 0;
      renderCurrentQuestion();
      renderNavGrid();
      updateStats();
    }

    // Render current active question
    function renderCurrentQuestion() {
      const list = state.fb.filteredQuestions;
      if (!list || list.length === 0) {
        promptText.textContent = 'Không tìm thấy câu hỏi phù hợp với bộ lọc hiện tại. Vui lòng chọn lại bộ lọc!';
        interactiveArea.innerHTML = '';
        chapterBadge.textContent = 'N/A';
        diffBadge.textContent = 'N/A';
        topicBadge.textContent = 'Trống';
        indexBadge.textContent = '0 / 0';
        hintBox.classList.remove('show');
        explanationBox.classList.remove('show');
        return;
      }

      if (state.fb.currentIndex >= list.length) {
        state.fb.currentIndex = 0;
      }

      const q = list[state.fb.currentIndex];
      const rec = state.fb.userAnswers[q.id] || { status: 'unattempted', entered: '', bookmarked: false, attempts: 0 };

      // Header Badges
      chapterBadge.textContent = `Chương ${q.chapter}`;
      topicBadge.textContent = q.topic;
      diffBadge.textContent = q.difficulty;
      diffBadge.className = `fb-chip ${q.difficulty === 'Cơ bản' ? 'diff-easy' : q.difficulty === 'Trung bình' ? 'diff-med' : 'diff-hard'}`;
      indexBadge.textContent = `Câu ${state.fb.currentIndex + 1} / ${list.length}`;

      // Bookmark icon
      bookmarkBtn.classList.toggle('bookmarked', Boolean(rec.bookmarked));
      bookmarkBtn.innerHTML = rec.bookmarked ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';

      // Prompt
      promptText.innerHTML = q.prompt.replace(/{{BLANK}}/g, '<span style="color: var(--accent-amber); font-weight: bold;">[ ... ]</span>');

      // Reset Card status
      card.classList.remove('status-correct', 'status-incorrect');
      hintBox.classList.remove('show');
      explanationBox.classList.remove('show');

      // Render Interactive Box
      if (q.codeSnippet) {
        // Code snippet with blank
        const rawCode = q.codeSnippet;
        const parts = rawCode.split('{{BLANK}}');
        let codeHtml = '';
        for (let i = 0; i < parts.length; i++) {
          codeHtml += escapeHtml(parts[i]);
          if (i < parts.length - 1) {
            const b = q.blanks[i] || q.blanks[0];
            const val = rec.entered || '';
            codeHtml += `<input type="text" class="fb-blank-input" data-blank-index="${i}" placeholder="${b.placeholder}" value="${escapeHtml(val)}" autocomplete="off" spellcheck="false" />`;
          }
        }
        interactiveArea.innerHTML = `<div class="fb-code-container"><pre><code>${codeHtml}</code></pre></div>`;
      } else {
        // Theory sentence with blank
        const parts = q.prompt.split('{{BLANK}}');
        let sentenceHtml = '';
        for (let i = 0; i < parts.length; i++) {
          sentenceHtml += parts[i];
          if (i < parts.length - 1) {
            const b = q.blanks[i] || q.blanks[0];
            const val = rec.entered || '';
            sentenceHtml += `<input type="text" class="fb-blank-input" data-blank-index="${i}" placeholder="${b.placeholder}" value="${escapeHtml(val)}" autocomplete="off" spellcheck="false" />`;
          }
        }
        interactiveArea.innerHTML = `<div class="fb-sentence-container">${sentenceHtml}</div>`;
      }

      // Restore feedback if already attempted
      const inputs = interactiveArea.querySelectorAll('.fb-blank-input');
      if (rec.status === 'correct') {
        card.classList.add('status-correct');
        inputs.forEach(inp => inp.classList.add('correct'));
        showExplanation(q.explanation);
      } else if (rec.status === 'incorrect') {
        card.classList.add('status-incorrect');
        inputs.forEach(inp => inp.classList.add('incorrect'));
        showHint(q.blanks[0].hint);
      }

      // Enter key listener on inputs
      inputs.forEach(inp => {
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            checkCurrentAnswer();
          }
        });
      });

      // Auto-focus first blank
      if (inputs.length > 0) {
        setTimeout(() => inputs[0].focus(), 100);
      }

      renderNavGrid();
    }

    // Render 1..N Question Navigator Grid
    function renderNavGrid() {
      navGrid.innerHTML = '';
      const list = state.fb.filteredQuestions;
      filteredCount.textContent = `${list.length} câu`;

      list.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'fb-grid-btn';
        btn.textContent = idx + 1;

        if (idx === state.fb.currentIndex) {
          btn.classList.add('current');
        }

        const rec = state.fb.userAnswers[q.id];
        if (rec) {
          if (rec.status === 'correct') btn.classList.add('correct');
          else if (rec.status === 'incorrect') btn.classList.add('incorrect');
          if (rec.bookmarked) btn.classList.add('bookmarked');
        }

        btn.addEventListener('click', () => {
          state.fb.currentIndex = idx;
          renderCurrentQuestion();
          playTapSound();
        });

        navGrid.appendChild(btn);
      });
    }

    // Check Answer Logic
    function checkCurrentAnswer() {
      const list = state.fb.filteredQuestions;
      if (!list || list.length === 0) return;
      const q = list[state.fb.currentIndex];
      const inputs = interactiveArea.querySelectorAll('.fb-blank-input');
      if (inputs.length === 0) return;

      let allCorrect = true;
      let enteredValues = [];

      inputs.forEach((inp, i) => {
        const blank = q.blanks[i] || q.blanks[0];
        const val = inp.value.trim();
        enteredValues.push(val);

        if (!val) {
          allCorrect = false;
          inp.classList.remove('correct');
          inp.classList.add('incorrect');
          return;
        }

        // Fuzzy match: check if lowercased matches any accepted answers
        const isMatch = blank.answers.some(ans => {
          const normAns = normalizeAnswer(ans);
          const normVal = normalizeAnswer(val);
          return normAns === normVal;
        });

        if (isMatch) {
          inp.classList.remove('incorrect');
          inp.classList.add('correct');
        } else {
          inp.classList.remove('correct');
          inp.classList.add('incorrect');
          allCorrect = false;
        }
      });

      // Update State
      if (!state.fb.userAnswers[q.id]) {
        state.fb.userAnswers[q.id] = { attempts: 0, bookmarked: false };
      }
      const rec = state.fb.userAnswers[q.id];
      rec.attempts = (rec.attempts || 0) + 1;
      rec.entered = enteredValues.join(', ');

      if (allCorrect) {
        rec.status = 'correct';
        card.classList.remove('status-incorrect');
        card.classList.add('status-correct');
        showToast('Chính xác! Bạn đã điền đúng đáp án! 🎉', 'success');
        playSuccessChime();
        launchConfetti();
        showExplanation(q.explanation);
        hintBox.classList.remove('show');
        addScoreAndStreak(rec.attempts === 1);
      } else {
        rec.status = 'incorrect';
        card.classList.remove('status-correct');
        card.classList.add('status-incorrect');
        showToast('Chưa chính xác! Hãy đọc lại gợi ý và thử lại nhé.', 'error');
        playErrorBuzz();
        resetStreak();
        showHint(q.blanks[0].hint);
      }

      localStorage.setItem('webdesign_fb_answers', JSON.stringify(state.fb.userAnswers));
      renderNavGrid();
      updateStats();
    }

    function normalizeAnswer(str) {
      return str.toLowerCase().replace(/['"`;\s\(\)]/g, '');
    }

    function showHint(hintMsg) {
      hintText.textContent = hintMsg || 'Hãy quan sát kỹ cú pháp và tên thuộc tính/phương thức.';
      hintBox.classList.add('show');
      playTapSound();
    }

    function showExplanation(expHtml) {
      explanationText.innerHTML = expHtml;
      explanationBox.classList.add('show');
    }

    // Solution Reveal
    function showSolution() {
      const list = state.fb.filteredQuestions;
      if (!list || list.length === 0) return;
      const q = list[state.fb.currentIndex];
      const inputs = interactiveArea.querySelectorAll('.fb-blank-input');

      inputs.forEach((inp, i) => {
        const blank = q.blanks[i] || q.blanks[0];
        inp.value = blank.answers[0];
        inp.classList.remove('incorrect');
        inp.classList.add('correct');
      });

      if (!state.fb.userAnswers[q.id]) state.fb.userAnswers[q.id] = { attempts: 0 };
      state.fb.userAnswers[q.id].entered = q.blanks[0].answers[0];
      state.fb.userAnswers[q.id].status = 'correct';
      localStorage.setItem('webdesign_fb_answers', JSON.stringify(state.fb.userAnswers));

      card.classList.add('status-correct');
      showExplanation(q.explanation);
      hintBox.classList.remove('show');
      renderNavGrid();
      updateStats();
      showToast('Đã hiển thị đáp án mẫu!');
      playTapSound();
    }

    // Reset current question input
    function retryCurrent() {
      const inputs = interactiveArea.querySelectorAll('.fb-blank-input');
      inputs.forEach(inp => {
        inp.value = '';
        inp.classList.remove('correct', 'incorrect');
      });
      card.classList.remove('status-correct', 'status-incorrect');
      hintBox.classList.remove('show');
      explanationBox.classList.remove('show');
      if (inputs.length > 0) inputs[0].focus();
      playTapSound();
    }

    // Bookmark Toggle
    function toggleBookmark() {
      const list = state.fb.filteredQuestions;
      if (!list || list.length === 0) return;
      const q = list[state.fb.currentIndex];
      if (!state.fb.userAnswers[q.id]) {
        state.fb.userAnswers[q.id] = { attempts: 0 };
      }
      state.fb.userAnswers[q.id].bookmarked = !state.fb.userAnswers[q.id].bookmarked;
      localStorage.setItem('webdesign_fb_answers', JSON.stringify(state.fb.userAnswers));

      bookmarkBtn.classList.toggle('bookmarked', state.fb.userAnswers[q.id].bookmarked);
      bookmarkBtn.innerHTML = state.fb.userAnswers[q.id].bookmarked ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
      renderNavGrid();
      showToast(state.fb.userAnswers[q.id].bookmarked ? 'Đã đánh dấu câu hỏi ⭐' : 'Đã bỏ đánh dấu câu hỏi');
      playTapSound();
    }

    // Update Statistics
    function updateStats() {
      const total = FILL_BLANK_QUESTIONS.length;
      let correct = 0;
      let incorrect = 0;

      Object.values(state.fb.userAnswers).forEach(rec => {
        if (rec.status === 'correct') correct++;
        else if (rec.status === 'incorrect') incorrect++;
      });

      const completed = correct + incorrect;
      const accuracy = completed > 0 ? Math.round((correct / completed) * 100) : 0;
      const pct = Math.round((correct / total) * 100);

      statProgress.textContent = `${completed} / ${total}`;
      statCorrect.textContent = correct;
      statIncorrect.textContent = incorrect;
      statAccuracy.textContent = `${accuracy}%`;
      statStreak.textContent = `${state.streak} 🔥`;
      progressBarFill.style.width = `${pct}%`;
    }

    // Event Listeners
    checkBtn.addEventListener('click', checkCurrentAnswer);
    hintBtn.addEventListener('click', () => {
      const q = state.fb.filteredQuestions[state.fb.currentIndex];
      if (q) showHint(q.blanks[0].hint);
    });
    solutionBtn.addEventListener('click', showSolution);
    retryBtn.addEventListener('click', retryCurrent);
    bookmarkBtn.addEventListener('click', toggleBookmark);

    prevBtn.addEventListener('click', () => {
      if (state.fb.currentIndex > 0) {
        state.fb.currentIndex--;
        renderCurrentQuestion();
        playTapSound();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (state.fb.currentIndex < state.fb.filteredQuestions.length - 1) {
        state.fb.currentIndex++;
        renderCurrentQuestion();
        playTapSound();
      } else {
        showToast('Bạn đã đi đến câu hỏi cuối cùng của danh sách!');
      }
    });

    shuffleBtn.addEventListener('click', () => {
      // Fisher-Yates shuffle
      for (let i = state.fb.filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.fb.filteredQuestions[i], state.fb.filteredQuestions[j]] = [state.fb.filteredQuestions[j], state.fb.filteredQuestions[i]];
      }
      state.fb.currentIndex = 0;
      renderCurrentQuestion();
      renderNavGrid();
      showToast('Đã xáo trộn ngẫu nhiên thứ tự các câu hỏi!');
      playTapSound();
    });

    resetProgressBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm bài để ôn tập lại từ đầu không?')) {
        state.fb.userAnswers = {};
        localStorage.removeItem('webdesign_fb_answers');
        state.streak = 0;
        localStorage.setItem('webdesign_streak', '0');
        updateHeaderStats();
        applyFilters();
        showToast('Đã đặt lại tiến độ bài tập thành công!');
        playTapSound();
      }
    });

    filterChapter.addEventListener('change', applyFilters);
    filterDiff.addEventListener('change', applyFilters);
    filterStatus.addEventListener('change', applyFilters);

    // Initial setup
    applyFilters();
  }

  // -------------------------------------------------------------
  // TAB 3: FLASHCARDS
  // -------------------------------------------------------------
  function initFlashcards() {
    if (typeof FLASHCARDS_DATA === 'undefined') return;

    const cardInner = document.getElementById('flashcardInner');
    const frontTag = document.getElementById('fcFrontTag');
    const frontText = document.getElementById('fcFrontText');
    const backTag = document.getElementById('fcBackTag');
    const backText = document.getElementById('fcBackText');
    const progressIndex = document.getElementById('fcProgressIndex');
    const filterChapter = document.getElementById('fcFilterChapter');

    const prevBtn = document.getElementById('fcPrevBtn');
    const nextBtn = document.getElementById('fcNextBtn');
    const masteredBtn = document.getElementById('fcMasteredBtn');
    const reviewBtn = document.getElementById('fcNeedReviewBtn');

    function applyFilter() {
      const ch = filterChapter.value;
      state.fc.filteredCards = FLASHCARDS_DATA.filter(c => ch === 'all' || String(c.chapter) === ch);
      state.fc.currentIndex = 0;
      state.fc.isFlipped = false;
      cardInner.classList.remove('flipped');
      renderCard();
    }

    function renderCard() {
      const list = state.fc.filteredCards;
      if (!list || list.length === 0) return;
      const c = list[state.fc.currentIndex];

      frontTag.textContent = `Chương ${c.chapter} • ${c.tag}`;
      frontText.textContent = c.front;
      backTag.textContent = `Chương ${c.chapter} • Đáp án & Ghi nhớ`;
      backText.textContent = c.back;
      progressIndex.textContent = `${state.fc.currentIndex + 1} / ${list.length}`;
      cardInner.classList.toggle('flipped', state.fc.isFlipped);
    }

    cardInner.parentElement.addEventListener('click', () => {
      state.fc.isFlipped = !state.fc.isFlipped;
      cardInner.classList.toggle('flipped', state.fc.isFlipped);
      playTapSound();
    });

    prevBtn.addEventListener('click', () => {
      if (state.fc.currentIndex > 0) {
        state.fc.currentIndex--;
        state.fc.isFlipped = false;
        renderCard();
        playTapSound();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (state.fc.currentIndex < state.fc.filteredCards.length - 1) {
        state.fc.currentIndex++;
        state.fc.isFlipped = false;
        renderCard();
        playTapSound();
      }
    });

    masteredBtn.addEventListener('click', () => {
      const c = state.fc.filteredCards[state.fc.currentIndex];
      if (!state.fc.mastered.includes(c.id)) {
        state.fc.mastered.push(c.id);
        localStorage.setItem('webdesign_fc_mastered', JSON.stringify(state.fc.mastered));
      }
      showToast('Đã lưu: Đã thuộc thẻ này! 👍', 'success');
      playSuccessChime();
      if (state.fc.currentIndex < state.fc.filteredCards.length - 1) {
        state.fc.currentIndex++;
        state.fc.isFlipped = false;
        renderCard();
      }
    });

    reviewBtn.addEventListener('click', () => {
      const c = state.fc.filteredCards[state.fc.currentIndex];
      if (!state.fc.needReview.includes(c.id)) {
        state.fc.needReview.push(c.id);
        localStorage.setItem('webdesign_fc_review', JSON.stringify(state.fc.needReview));
      }
      showToast('Đã đánh dấu cần ôn lại thẻ này!', 'error');
      playTapSound();
      if (state.fc.currentIndex < state.fc.filteredCards.length - 1) {
        state.fc.currentIndex++;
        state.fc.isFlipped = false;
        renderCard();
      }
    });

    filterChapter.addEventListener('change', applyFilter);
    applyFilter();
  }

  // -------------------------------------------------------------
  // TAB 4: MOCK QUIZ
  // -------------------------------------------------------------
  function initMockQuiz() {
    if (typeof QUIZ_DATA === 'undefined') return;

    const chapterBadge = document.getElementById('quizChapterBadge');
    const indexBadge = document.getElementById('quizQuestionIndex');
    const scorePill = document.getElementById('quizCurrentScore');
    const titleEl = document.getElementById('quizQuestionTitle');
    const optionsList = document.getElementById('quizOptionsList');
    const expBox = document.getElementById('quizExplanationBox');
    const expText = document.getElementById('quizExplanationText');
    const nextBtn = document.getElementById('quizNextBtn');
    const restartBtn = document.getElementById('quizRestartBtn');

    function renderQuestion() {
      if (state.quiz.currentIndex >= QUIZ_DATA.length) {
        // Completed
        const pct = Math.round((state.quiz.score / QUIZ_DATA.length) * 100);
        titleEl.textContent = `🎉 Hoàn thành bài thi thử! Bạn đạt ${state.quiz.score} / ${QUIZ_DATA.length} điểm (${pct}%).`;
        optionsList.innerHTML = `
          <div style="text-align: center; padding: 30px;">
            <p style="font-size: 1.1rem; color: var(--text-secondary);">
              ${pct >= 80 ? '🌟 Xuất sắc! Bạn đã nắm rất chắc toàn bộ lý thuyết Thiết Kế Web!' : '💡 Bạn nên tiếp tục ôn lại các câu chưa thuộc ở mục Điền Chỗ Trống nhé!'}
            </p>
          </div>
        `;
        expBox.classList.remove('show');
        nextBtn.style.display = 'none';
        if (pct >= 80) launchConfetti();
        return;
      }

      const q = QUIZ_DATA[state.quiz.currentIndex];
      state.quiz.answered = false;
      chapterBadge.textContent = `Chương ${q.chapter}`;
      indexBadge.textContent = `Câu ${state.quiz.currentIndex + 1} / ${QUIZ_DATA.length}`;
      scorePill.textContent = state.quiz.score;
      titleEl.textContent = q.question;
      expBox.classList.remove('show');
      nextBtn.style.display = 'none';

      optionsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span class="quiz-opt-circle">${letters[idx]}</span> <span>${escapeHtml(opt)}</span>`;
        btn.addEventListener('click', () => {
          if (state.quiz.answered) return;
          state.quiz.answered = true;

          const allBtns = optionsList.querySelectorAll('.quiz-opt-btn');
          allBtns.forEach((b, i) => {
            b.disabled = true;
            if (i === q.answer) {
              b.classList.add('correct');
            }
          });

          if (idx === q.answer) {
            btn.classList.add('correct');
            state.quiz.score++;
            scorePill.textContent = state.quiz.score;
            playSuccessChime();
            showToast('Chính xác! +10 điểm', 'success');
          } else {
            btn.classList.add('incorrect');
            playErrorBuzz();
            showToast('Chưa chính xác!', 'error');
          }

          expText.textContent = q.explanation;
          expBox.classList.add('show');
          nextBtn.style.display = 'inline-flex';
        });
        optionsList.appendChild(btn);
      });
    }

    nextBtn.addEventListener('click', () => {
      state.quiz.currentIndex++;
      renderQuestion();
      playTapSound();
    });

    restartBtn.addEventListener('click', () => {
      state.quiz.currentIndex = 0;
      state.quiz.score = 0;
      state.quiz.answered = false;
      renderQuestion();
      showToast('Đã bắt đầu lại bài thi trắc nghiệm!');
      playTapSound();
    });

    renderQuestion();
  }

  // -------------------------------------------------------------
  // TAB 5: CODE PLAYGROUND
  // -------------------------------------------------------------
  function initCodePlayground() {
    const templateSelect = document.getElementById('playgroundTemplateSelect');
    const textarea = document.getElementById('playgroundTextarea');
    const iframe = document.getElementById('playgroundIframe');
    const runBtn = document.getElementById('playgroundRunBtn');
    const copyBtn = document.getElementById('playgroundCopyBtn');

    if (!templateSelect || !textarea || !iframe) return;

    function runCode() {
      const code = textarea.value;
      iframe.srcdoc = code;
      showToast('Đã chạy mã trên khung Preview!');
      playTapSound();
    }

    function loadTemplate(key) {
      const code = state.playgroundTemplates[key] || state.playgroundTemplates.clock;
      textarea.value = code;
      runCode();
    }

    templateSelect.addEventListener('change', (e) => {
      loadTemplate(e.target.value);
    });

    runBtn.addEventListener('click', runCode);

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showToast('Đã sao chép mã nguồn playground!');
      });
    });

    // Initial run
    loadTemplate('clock');
  }

  // -------------------------------------------------------------
  // TAB 6: CHEAT SHEET
  // -------------------------------------------------------------
  function initCheatsheet() {
    if (typeof CHEATSHEET_DATA === 'undefined') return;
    const tableBody = document.getElementById('cheatsheetTableBody');
    const searchInput = document.getElementById('cheatsheetSearchInput');
    const catFilter = document.getElementById('cheatsheetCategoryFilter');

    function renderTable() {
      const q = searchInput.value.toLowerCase().trim();
      const cat = catFilter.value;

      const filtered = CHEATSHEET_DATA.filter(item => {
        if (cat !== 'all' && item.category !== cat) return false;
        if (q) {
          return item.name.toLowerCase().includes(q) ||
                 item.syntax.toLowerCase().includes(q) ||
                 item.desc.toLowerCase().includes(q);
        }
        return true;
      });

      tableBody.innerHTML = filtered.map(item => `
        <tr>
          <td><span class="fb-chip chapter">${item.category}</span></td>
          <td><strong><code>${escapeHtml(item.name)}</code></strong></td>
          <td><code style="color: #38bdf8;">${escapeHtml(item.syntax)}</code></td>
          <td>${item.desc}</td>
        </tr>
      `).join('');
    }

    searchInput.addEventListener('input', renderTable);
    catFilter.addEventListener('change', renderTable);
    renderTable();
  }

  // -------------------------------------------------------------
  // HELPER UTILITIES
  // -------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // -------------------------------------------------------------
  // INITIALIZE APP
  // -------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initThemeAndSound();
    initNavigation();
    initTheoryHub();
    initFillInTheBlankArena();
    initFlashcards();
    initMockQuiz();
    initCodePlayground();
    initCheatsheet();
    console.log('WebDesign Master FIT UTC2 loaded successfully!');
  });

})();
