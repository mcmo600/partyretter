/**
 * Partyretter – DSGVO Cookie-Banner
 * Einfach als <script src="cookie-banner.js"></script> in jede Seite einbinden.
 * Speichert die Entscheidung in localStorage.
 * Exposes window.MPR_CONSENT = { level, functional, analytics, marketing }
 */
(function () {
  const KEY = 'mpr_cookie_consent';

  // ── Expose consent state to other scripts (e.g. analytics loader) ──
  function publishConsent(data) {
    window.MPR_CONSENT = data;
    try { document.dispatchEvent(new CustomEvent('mpr:consent', { detail: data })); } catch(e) {}
  }

  // ── Already decided: expose consent + show re-open button ──
  const stored = localStorage.getItem(KEY);
  if (stored) {
    try { publishConsent(JSON.parse(stored)); } catch(e) {}
    injectReopenButton();
    return;
  }

  // ── Styles ──────────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #mpr-cookie-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 99999;
      background: #1A1208;
      color: #F5F0E8;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 14px;
      border-top: 2px solid #C8922A;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.35);
      animation: mpr-slide-up 0.4s ease;
    }
    @keyframes mpr-slide-up {
      from { transform: translateY(100%); opacity: 0; }
      to   { transform: translateY(0);   opacity: 1; }
    }
    #mpr-cookie-banner .cb-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 18px 24px;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    #mpr-cookie-banner .cb-icon { font-size: 28px; flex-shrink: 0; }
    #mpr-cookie-banner .cb-text { flex: 1; min-width: 260px; line-height: 1.55; color: rgba(245,240,232,0.85); }
    #mpr-cookie-banner .cb-text strong { color: #F5F0E8; font-weight: 700; }
    #mpr-cookie-banner .cb-text a { color: #C8922A; text-decoration: underline; }
    #mpr-cookie-banner .cb-text a:hover { color: #e0a830; }
    #mpr-cookie-banner .cb-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
    #mpr-cookie-banner .cb-btn {
      padding: 10px 20px; border-radius: 8px; font-size: 13px;
      font-weight: 700; cursor: pointer; border: 2px solid transparent;
      font-family: inherit; white-space: nowrap; transition: all 0.18s;
    }
    #mpr-cookie-banner .cb-btn-accept {
      background: #C8922A; color: #1A1208; border-color: #C8922A;
    }
    #mpr-cookie-banner .cb-btn-accept:hover { background: #e0a830; border-color: #e0a830; }
    #mpr-cookie-banner .cb-btn-essential {
      background: transparent; color: rgba(245,240,232,0.8);
      border-color: rgba(245,240,232,0.25);
    }
    #mpr-cookie-banner .cb-btn-essential:hover {
      border-color: rgba(245,240,232,0.6); color: #F5F0E8;
    }
    #mpr-cookie-banner .cb-btn-settings {
      background: transparent; color: rgba(245,240,232,0.5);
      border-color: transparent; text-decoration: underline; font-weight: 500;
    }
    #mpr-cookie-banner .cb-btn-settings:hover { color: #C8922A; }

    /* Settings drawer */
    #mpr-cookie-settings {
      display: none;
      background: #2d1f0e;
      border-top: 1px solid rgba(200,146,42,0.3);
      padding: 20px 24px;
    }
    #mpr-cookie-settings .cs-inner { max-width: 1100px; margin: 0 auto; }
    #mpr-cookie-settings h4 {
      font-family: 'Fraunces', serif; font-size: 15px; color: #F5F0E8;
      margin-bottom: 14px; font-weight: 700;
    }
    #mpr-cookie-settings .cs-row {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07);
    }
    #mpr-cookie-settings .cs-row:last-of-type { border-bottom: none; }
    #mpr-cookie-settings .cs-label { flex: 1; }
    #mpr-cookie-settings .cs-label strong { display: block; color: #F5F0E8; font-size: 13px; margin-bottom: 2px; }
    #mpr-cookie-settings .cs-label span { color: rgba(245,240,232,0.5); font-size: 12px; line-height: 1.5; }
    #mpr-cookie-settings .cs-toggle {
      position: relative; width: 44px; height: 24px; flex-shrink: 0; margin-top: 2px;
    }
    #mpr-cookie-settings .cs-toggle input { opacity: 0; width: 0; height: 0; }
    #mpr-cookie-settings .cs-slider {
      position: absolute; cursor: pointer; inset: 0;
      background: rgba(255,255,255,0.15); border-radius: 24px; transition: 0.25s;
    }
    #mpr-cookie-settings .cs-slider:before {
      content: ''; position: absolute; height: 18px; width: 18px;
      left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.25s;
    }
    #mpr-cookie-settings input:checked + .cs-slider { background: #C8922A; }
    #mpr-cookie-settings input:checked + .cs-slider:before { transform: translateX(20px); }
    #mpr-cookie-settings input:disabled + .cs-slider { opacity: 0.5; cursor: not-allowed; }
    #mpr-cookie-settings .cs-save {
      margin-top: 16px; background: #C8922A; color: #1A1208; border: none;
      padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 13px;
      cursor: pointer; font-family: inherit;
    }
    #mpr-cookie-settings .cs-save:hover { background: #e0a830; }
  `;
  document.head.appendChild(style);

  // ── HTML ────────────────────────────────────────────────────────────────────
  const banner = document.createElement('div');
  banner.id = 'mpr-cookie-banner';
  banner.innerHTML = `
    <div id="mpr-cookie-settings">
      <div class="cs-inner">
        <h4>🔧 Cookie-Einstellungen</h4>
        <div class="cs-row">
          <div class="cs-label">
            <strong>Notwendige Cookies</strong>
            <span>Login, Session, Sicherheit. Diese können nicht deaktiviert werden.</span>
          </div>
          <label class="cs-toggle">
            <input type="checkbox" checked disabled>
            <span class="cs-slider"></span>
          </label>
        </div>
        <div class="cs-row">
          <div class="cs-label">
            <strong>Funktionale Cookies</strong>
            <span>Spracheinstellungen, gespeicherte Filter, Suchanfragen.</span>
          </div>
          <label class="cs-toggle">
            <input type="checkbox" id="cb-func" checked>
            <span class="cs-slider"></span>
          </label>
        </div>
        <div class="cs-row">
          <div class="cs-label">
            <strong>Analyse-Cookies</strong>
            <span>Anonyme Nutzungsstatistiken zur Verbesserung der Plattform (z.B. Plausible Analytics).</span>
          </div>
          <label class="cs-toggle">
            <input type="checkbox" id="cb-analytics">
            <span class="cs-slider"></span>
          </label>
        </div>
        <div class="cs-row">
          <div class="cs-label">
            <strong>Marketing-Cookies</strong>
            <span>Personalisierte Werbung und Retargeting. Partyretter zeigt selbst keine Werbung.</span>
          </div>
          <label class="cs-toggle">
            <input type="checkbox" id="cb-marketing">
            <span class="cs-slider"></span>
          </label>
        </div>
        <button class="cs-save" onclick="mprSaveSettings()">Auswahl speichern</button>
      </div>
    </div>

    <div class="cb-inner">
      <div class="cb-icon">🍪</div>
      <div class="cb-text">
        <strong>Deine Privatsphäre ist uns wichtig.</strong>
        Wir nutzen Cookies für einen reibungslosen Betrieb, Buchungen und anonyme Nutzungsanalyse.
        Mehr dazu in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.
      </div>
      <div class="cb-btns">
        <button class="cb-btn cb-btn-settings" onclick="mprToggleSettings()">⚙️ Einstellungen</button>
        <button class="cb-btn cb-btn-essential" onclick="mprConsent('essential')">Nur notwendige</button>
        <button class="cb-btn cb-btn-accept" onclick="mprConsent('all')">Alle akzeptieren</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  // ── Functions ────────────────────────────────────────────────────────────────
  window.mprConsent = function (level) {
    const data = {
      level: level,
      ts: Date.now(),
      functional: level === 'all',
      analytics: level === 'all',
      marketing: level === 'all'   // BUG FIX: was always false
    };
    localStorage.setItem(KEY, JSON.stringify(data));
    publishConsent(data);
    banner.style.animation = 'mpr-slide-up 0.3s ease reverse';
    setTimeout(() => { banner.remove(); injectReopenButton(); }, 300);
  };

  window.mprSaveSettings = function () {
    const func = document.getElementById('cb-func').checked;
    const analytics = document.getElementById('cb-analytics').checked;
    const marketing = document.getElementById('cb-marketing').checked;
    const data = {
      level: 'custom', ts: Date.now(),
      functional: func, analytics: analytics, marketing: marketing
    };
    localStorage.setItem(KEY, JSON.stringify(data));
    publishConsent(data);
    banner.style.animation = 'mpr-slide-up 0.3s ease reverse';
    setTimeout(() => { banner.remove(); injectReopenButton(); }, 300);
  };

  window.mprToggleSettings = function () {
    const s = document.getElementById('mpr-cookie-settings');
    s.style.display = s.style.display === 'block' ? 'none' : 'block';
  };

  // Cookie-Einstellungen zurücksetzen (für Datenschutzseite oder Re-Open-Button)
  window.mprResetConsent = function () {
    localStorage.removeItem(KEY);
    location.reload();
  };

  // ── Re-open button (DSGVO: Widerruf muss jederzeit möglich sein) ──────────
  function injectReopenButton() {
    if (document.getElementById('mpr-reopen-btn')) return;
    const style = document.createElement('style');
    style.textContent = `
      #mpr-reopen-btn {
        position: fixed; bottom: 16px; left: 16px; z-index: 9990;
        background: #1A1208; color: rgba(245,240,232,0.65);
        border: 1px solid rgba(245,240,232,0.18); border-radius: 99px;
        padding: 5px 13px; font-size: 11px; font-weight: 600;
        cursor: pointer; font-family: inherit;
        opacity: 0.75; transition: opacity 0.2s;
      }
      #mpr-reopen-btn:hover { opacity: 1; color: #C8922A; border-color: #C8922A; }
    `;
    document.head.appendChild(style);
    const btn = document.createElement('button');
    btn.id = 'mpr-reopen-btn';
    btn.textContent = '🍪 Cookie-Einstellungen';
    btn.onclick = window.mprResetConsent;
    document.body.appendChild(btn);
  }
})();
