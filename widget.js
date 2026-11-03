/* Wix Legends — Google Reviews Widget (carousel + bottom-left badge)
   Hosted once; each client site sets window.GR_CONFIG = { profileUrl: "..." } before loading this file. */
var GR_CSS = "/* ================= WIDGET STYLES (scoped with .gr-) ================= */\n  :root{\n    --gr-accent:#1a73e8; --gr-star:#fbbc04;\n    --gr-bg:#ffffff; --gr-text:#1f2328; --gr-muted:#5f6b76; --gr-line:#e6e8eb;\n    --gr-shadow:0 10px 30px rgba(16,24,40,.12), 0 2px 6px rgba(16,24,40,.06);\n    --gr-radius:16px;\n  }\n  .gr-root, .gr-root *{ box-sizing:border-box; }\n  .gr-root{ font-family:var(--gr-font,Inter),system-ui,-apple-system,\"Segoe UI\",sans-serif; color:var(--gr-text); }\n\n  .gr-stars{ display:inline-flex; gap:2px; vertical-align:middle; }\n  .gr-stars svg{ width:var(--s,16px); height:var(--s,16px); }\n  .gr-google{ font-weight:600; letter-spacing:-.01em; }\n  .gr-google b{ font-weight:700; }\n\n  /* ---------- Carousel ---------- */\n  .gr-carousel{ position:relative; }\n  .gr-head{ display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px; margin-bottom:22px; }\n  .gr-summary{ display:flex; align-items:center; gap:14px; }\n  .gr-score{ font-size:44px; font-weight:700; color:var(--gr-heading,var(--gr-text)); line-height:1; letter-spacing:-.03em; }\n  .gr-summary small{ display:block; color:var(--gr-muted); font-size:14px; margin-top:4px; }\n  .gr-btn{ display:inline-flex; align-items:center; gap:8px; background:var(--gr-accent); color:#fff; text-decoration:none;\n           font-weight:600; font-size:14px; padding:11px 20px; border-radius:var(--gr-btn-radius,999px); border:0; cursor:pointer; transition:filter .2s; }\n  .gr-btn:hover{ filter:brightness(1.08); }\n  .gr-btn.ghost{ background:transparent; color:var(--gr-accent); border:1.5px solid var(--gr-line); }\n\n  .gr-viewport{ overflow:hidden; margin:0 -8px; }\n  .gr-track{ display:flex; transition:transform .55s cubic-bezier(.22,.8,.24,1); will-change:transform; }\n  .gr-slide{ flex:0 0 33.3333%; padding:8px; }\n  @media (max-width:960px){ .gr-slide{ flex-basis:50%; } }\n  @media (max-width:620px){ .gr-slide{ flex-basis:100%; } }\n\n  .gr-card{ background:var(--gr-bg); border:1px solid var(--gr-line); border-radius:var(--gr-radius); padding:22px;\n            height:100%; display:flex; flex-direction:column; gap:14px; box-shadow:0 1px 2px rgba(16,24,40,.04);\n            transition:box-shadow .25s, transform .25s; }\n  .gr-card:hover{ box-shadow:var(--gr-shadow); transform:translateY(-2px); }\n  .gr-author{ display:flex; align-items:center; gap:12px; }\n  .gr-avatar{ width:42px; height:42px; border-radius:50%; object-fit:cover; flex:none; background:#e8eaed;\n              display:grid; place-items:center; font-weight:600; color:#fff; font-size:17px; }\n  .gr-author a, .gr-author span.name{ color:var(--gr-text); text-decoration:none; font-weight:600; font-size:15px; }\n  .gr-author a:hover{ text-decoration:underline; }\n  .gr-time{ color:var(--gr-muted); font-size:13px; }\n  .gr-text{ font-size:15px; line-height:1.6; color:#33393f; margin:0; display:-webkit-box; -webkit-line-clamp:5; -webkit-box-orient:vertical; overflow:hidden; }\n  .gr-text.open{ -webkit-line-clamp:unset; }\n  .gr-more{ background:none; border:0; padding:0; color:var(--gr-accent); font:600 14px var(--gr-font,Inter),sans-serif; cursor:pointer; align-self:flex-start; }\n  .gr-card-foot{ margin-top:auto; display:flex; align-items:center; justify-content:space-between; color:var(--gr-muted); font-size:12px; }\n\n  .gr-nav{ display:flex; align-items:center; justify-content:center; gap:14px; margin-top:22px; }\n  .gr-arrow{ width:42px; height:42px; border-radius:50%; border:1px solid var(--gr-line); background:var(--gr-bg); cursor:pointer;\n             display:grid; place-items:center; transition:background .2s, border-color .2s; }\n  .gr-arrow:hover{ border-color:var(--gr-accent); }\n  .gr-arrow svg{ width:18px; height:18px; stroke:var(--gr-text); }\n  .gr-dots{ display:flex; gap:8px; }\n  .gr-dot{ width:8px; height:8px; border-radius:99px; background:#cfd4da; border:0; padding:0; cursor:pointer; transition:width .3s, background .3s; }\n  .gr-dot.on{ width:24px; background:var(--gr-accent); }\n\n  /* ---------- Floating badge (bottom-left) ---------- */\n  .gr-badge{ position:fixed; left:20px; bottom:20px; z-index:2147483000; background:var(--gr-bg); border-radius:14px;\n             box-shadow:var(--gr-shadow); padding:12px 16px 12px 14px; display:flex; align-items:center; gap:12px; cursor:pointer;\n             border-top:3px solid var(--gr-accent); transform:translateY(140%); opacity:0;\n             transition:transform .5s cubic-bezier(.22,.8,.24,1), opacity .4s; }\n  .gr-badge.in{ transform:none; opacity:1; }\n  .gr-badge:hover{ box-shadow:0 14px 36px rgba(16,24,40,.18); }\n  .gr-badge .lbl{ font-size:12px; color:var(--gr-muted); font-weight:500; }\n  .gr-badge .row{ display:flex; align-items:center; gap:8px; margin-top:2px; }\n  .gr-badge .num{ font-size:22px; font-weight:700; letter-spacing:-.02em; color:var(--gr-heading,#e37400); }\n  .gr-badge .cnt{ font-size:12px; color:var(--gr-muted); margin-top:2px; }\n  .gr-badge-x{ position:absolute; top:-9px; right:-9px; width:22px; height:22px; border-radius:50%; border:0; background:#3c4043;\n               color:#fff; font-size:13px; line-height:22px; cursor:pointer; opacity:0; transition:opacity .2s; }\n  .gr-badge:hover .gr-badge-x{ opacity:1; }\n  @media (hover:none){ .gr-badge-x{ opacity:1; } }\n\n  .gr-panel{ position:fixed; left:20px; bottom:20px; z-index:2147483001; width:380px; max-width:calc(100vw - 32px);\n             max-height:min(620px, calc(100vh - 40px)); background:var(--gr-bg); border-radius:18px; box-shadow:0 24px 60px rgba(16,24,40,.25);\n             display:flex; flex-direction:column; overflow:hidden; transform:translateY(16px) scale(.98); opacity:0; pointer-events:none;\n             transform-origin:bottom left; transition:transform .3s cubic-bezier(.22,.8,.24,1), opacity .25s; }\n  .gr-panel.open{ transform:none; opacity:1; pointer-events:auto; }\n  .gr-panel-head{ padding:18px 18px 14px; border-bottom:1px solid var(--gr-line); position:relative; }\n  .gr-panel-head h3{ margin:0 32px 6px 0; font-size:16px; font-weight:700; }\n  .gr-panel-head .row{ display:flex; align-items:center; gap:8px; font-size:14px; color:var(--gr-muted); }\n  .gr-panel-head .row strong{ color:var(--gr-text); font-size:18px; }\n  .gr-panel-head .gr-btn{ margin-top:12px; padding:9px 16px; font-size:13px; }\n  .gr-close{ position:absolute; top:14px; right:14px; width:30px; height:30px; border-radius:50%; border:0; background:#f1f3f4;\n             cursor:pointer; font-size:16px; color:#3c4043; }\n  .gr-close:hover{ background:#e8eaed; }\n  .gr-list{ overflow-y:auto; padding:6px 18px 10px; }\n  .gr-item{ padding:14px 0; border-bottom:1px solid var(--gr-line); display:flex; flex-direction:column; gap:8px; }\n  .gr-item:last-child{ border-bottom:0; }\n  .gr-item .gr-text{ font-size:14px; -webkit-line-clamp:4; }\n  .gr-panel-foot{ padding:10px 18px; border-top:1px solid var(--gr-line); font-size:12px; color:var(--gr-muted);\n                  display:flex; justify-content:space-between; align-items:center; }\n  .gr-panel-foot a{ color:var(--gr-accent); text-decoration:none; font-weight:600; }\n  @media (max-width:520px){\n    .gr-panel{ left:0; right:0; bottom:0; width:100%; max-width:100%; border-radius:18px 18px 0 0; max-height:80vh; }\n    .gr-badge{ left:12px; bottom:12px; }\n  }\n\n  .gr-demo-flag{ display:inline-block; font-size:12px; font-weight:600; background:#fff4e5; color:#8a4b00; border:1px solid #ffd8a8;\n                 padding:4px 10px; border-radius:99px; margin-bottom:18px; }\n  .gr-error{ padding:16px; border-radius:12px; background:#fdecea; color:#8c1d18; font-size:14px; }\n\n  @media (prefers-reduced-motion:reduce){ .gr-track, .gr-badge, .gr-panel, .gr-card{ transition:none !important; } }" + "\n/* ---------- v2 polish ---------- */\n.gr-carousel{ --gr-soft:rgba(19,25,70,.06); }\n.gr-intro{ text-align:center; margin:0 auto 30px; max-width:640px; }\n.gr-eyebrow{ display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--gr-accent); background:var(--gr-soft); padding:6px 14px; border-radius:99px; }\n.gr-title{ margin:14px 0 0; font-size:clamp(28px,4vw,42px); line-height:1.15; font-weight:700; letter-spacing:-.02em; color:var(--gr-heading,var(--gr-text)); }\n.gr-head{ background:#fff; border:1px solid var(--gr-soft); border-radius:var(--gr-radius); padding:18px 22px; box-shadow:0 8px 28px rgba(19,25,70,.06); margin:0 8px 26px; }\n.gr-summary{ gap:16px; }\n.gr-glogo{ width:44px; height:44px; flex:none; }\n.gr-score{ font-size:40px; }\n.gr-sumtext{ display:flex; flex-direction:column; gap:4px; }\n.gr-sumtop{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; }\n.gr-label{ font-weight:700; font-size:17px; color:var(--gr-heading,var(--gr-text)); }\n.gr-summary small{ margin-top:0; }\n.gr-btn.ghost{ color:var(--gr-heading,var(--gr-accent)); border-color:rgba(19,25,70,.15); background:#fff; }\n.gr-btn.ghost:hover{ border-color:var(--gr-accent); filter:none; }\n.gr-viewport{ padding:10px 0 18px; margin:0; }\n.gr-carousel{ padding-bottom:14px; overflow:hidden; }\n.gr-slide{ padding:8px; }\n.gr-card{ position:relative; border:1px solid var(--gr-soft); padding:26px 24px 22px; gap:16px;\n  box-shadow:0 1px 2px rgba(16,24,40,.04), 0 10px 30px rgba(19,25,70,.07); min-height:300px; }\n.gr-card:hover{ box-shadow:0 2px 4px rgba(16,24,40,.05), 0 18px 40px rgba(19,25,70,.13); transform:translateY(-4px); }\n.gr-card-top{ display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }\n.gr-card .gr-g{ width:22px; height:22px; flex:none; margin-top:2px; }\n.gr-quote{ position:absolute; right:22px; bottom:14px; width:54px; height:54px; opacity:.07; fill:var(--gr-accent); pointer-events:none; }\n.gr-avatar{ width:46px; height:46px; box-shadow:0 0 0 3px #fff, 0 0 0 4px var(--gr-soft); }\n.gr-author a, .gr-author span.name{ font-size:16px; font-weight:700; color:var(--gr-heading,var(--gr-text)); }\n.gr-text{ color:#3b4152; line-height:1.7; font-size:15.5px; }\n.gr-more{ color:var(--gr-accent); text-decoration:underline; text-underline-offset:3px; }\n.gr-card-foot{ display:none; }\n.gr-mini{ display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; margin:0 8px 14px; color:var(--gr-muted); font-size:15px; }\n.gr-mini-g{ width:22px; height:22px; }\n.gr-mini-score{ font-size:20px; font-weight:700; color:var(--gr-heading,var(--gr-text)); }\n.gr-mini-count{ font-weight:500; }\n.gr-simple .gr-arrow{ background:#fff; border-color:rgba(19,25,70,.15); box-shadow:none; }\n.gr-simple .gr-arrow svg{ stroke:var(--gr-heading,var(--gr-accent)); }\n.gr-simple .gr-arrow:hover{ border-color:var(--gr-accent); filter:none; }\n.gr-arrow{ width:46px; height:46px; background:var(--gr-accent); border-color:var(--gr-accent); box-shadow:0 6px 16px rgba(19,25,70,.18); transition:transform .2s, filter .2s; }\n.gr-arrow:hover{ transform:scale(1.06); filter:brightness(1.15); }\n.gr-arrow svg{ stroke:#fff; }\n.gr-nav{ margin-top:8px; gap:18px; }\n.gr-dot{ background:rgba(19,25,70,.18); }\n@media (max-width:620px){\n  .gr-head{ flex-direction:column; align-items:flex-start; padding:18px; }\n  .gr-head > div:last-child{ width:100%; }\n  .gr-head .gr-btn{ flex:1; justify-content:center; }\n  .gr-card{ min-height:0; }\n}\n@media (max-width:380px){ .gr-head .gr-btn{ padding:10px 10px; font-size:13px; white-space:nowrap; } .gr-glogo{ width:34px; height:34px; } .gr-score{ font-size:32px; } .gr-summary{ gap:10px; } }";
(function(){
  const AGENCY_DEFAULTS = {
    apiKey: "AIzaSyBNUbwX0cg0Wub558JhHhQonX6w3Z4nOEU",   // Wix Legends Reviews key (referrer + API restricted)
    minRating: 4, carousel: true, badge: true, badgeDelayMs: 1500,
    autoplayMs: 6000, cacheHours: 12, debug: false, accent: "#1a73e8", starColor: "#fbbc04",
    font: "", fontHref: "", title: "", eyebrow: "", buttons: false, layout: "spotlight", textColor: "", headingColor: "", radius: "", buttonRadius: ""
  };
  const C = Object.assign({}, AGENCY_DEFAULTS, window.GR_CONFIG || {});
  if (C.apiKey === "PASTE_YOUR_GOOGLE_API_KEY_HERE") C.apiKey = "";
  if (!document.getElementById("gr-styles")) {
    const st = document.createElement("style"); st.id = "gr-styles";
    st.textContent = GR_CSS; document.head.appendChild(st);
  }
  const fontHref = C.fontHref || (C.font ? "" : "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  if (fontHref && !document.querySelector(`link[href="${fontHref}"]`)) {
    const f = document.createElement("link"); f.rel = "stylesheet"; f.href = fontHref;
    document.head.appendChild(f);
  }
  const rootStyle = document.documentElement.style;
  if (C.font) rootStyle.setProperty("--gr-font", C.font);
  if (C.textColor) rootStyle.setProperty("--gr-text", C.textColor);
  if (C.headingColor) rootStyle.setProperty("--gr-heading", C.headingColor);
  if (C.radius) rootStyle.setProperty("--gr-radius", C.radius);
  if (C.buttonRadius) rootStyle.setProperty("--gr-btn-radius", C.buttonRadius);
  document.documentElement.style.setProperty("--gr-accent", C.accent || "#1a73e8");
  document.documentElement.style.setProperty("--gr-star", C.starColor || "#fbbc04");

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const starPath = "M12 2.5l2.94 6.08 6.56.95-4.75 4.63 1.12 6.54L12 17.6l-5.87 3.1 1.12-6.54L2.5 9.53l6.56-.95z";
  function stars(rating, size){
    let h = `<span class="gr-stars" style="--s:${size||16}px" aria-label="${rating} out of 5 stars">`;
    for (let i=1;i<=5;i++){
      const fill = Math.max(0, Math.min(1, rating - (i-1)));
      const id = "g"+Math.random().toString(36).slice(2,8);
      h += `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="${id}"><stop offset="${fill*100}%" stop-color="var(--gr-star)"/><stop offset="${fill*100}%" stop-color="#dadce0"/></linearGradient></defs><path d="${starPath}" fill="url(#${id})"/></svg>`;
    }
    return h + "</span>";
  }
  const palette = ["#1a73e8","#d93025","#188038","#e37400","#9334e6","#12858a","#c5221f"];
  function avatar(r){
    if (r.photo) return `<img class="gr-avatar" src="${esc(r.photo)}" alt="" referrerpolicy="no-referrer" loading="lazy">`;
    const ch = (r.author||"?").trim().charAt(0).toUpperCase();
    const bg = palette[ch.charCodeAt(0) % palette.length];
    return `<span class="gr-avatar" style="background:${bg}">${esc(ch)}</span>`;
  }
  function authorName(r){
    return r.authorUrl ? `<a href="${esc(r.authorUrl)}" target="_blank" rel="noopener">${esc(r.author)}</a>` : `<span class="name">${esc(r.author)}</span>`;
  }
  const googleMark = `<span class="gr-google">Google</span>`;
  const gLogo = cls => `<svg class="${cls}" viewBox="0 0 48 48" aria-label="Google"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>`;
  const quoteSvg = `<svg class="gr-quote" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.6 6C6.2 7.4 4 10.3 4 14v4h6v-6H7.2c.2-2.2 1.6-3.9 3.6-4.7L9.6 6zm10 0c-3.4 1.4-5.6 4.3-5.6 8v4h6v-6h-2.8c.2-2.2 1.6-3.9 3.6-4.7L19.6 6z"/></svg>`;
  const ratingLabel = r => r >= 4.5 ? "Excellent" : r >= 4 ? "Great" : r >= 3.5 ? "Good" : "";

  /* ---------- data: demo ---------- */
  const DEMO = {
    demo:true, name:"Your Business Name", rating:4.9, count:87, mapsUrl:"#", writeUrl:"#",
    reviews:[
      {author:"Sample Reviewer A", rating:5, time:"2 weeks ago", text:"This is placeholder review text so you can see how the card layout looks with a typical, medium-length Google review. Add your API key and profile link to load real reviews."},
      {author:"Sample Reviewer B", rating:5, time:"a month ago", text:"Short and sweet placeholder."},
      {author:"Sample Reviewer C", rating:4, time:"2 months ago", text:"A longer placeholder review to test the read-more behavior. Longer reviews get clamped to five lines in the carousel and four lines in the popup panel, and visitors can expand them with the Read more link. This keeps all cards a consistent height while still letting people read the full text if they want to."},
      {author:"Sample Reviewer D", rating:5, time:"3 months ago", text:"Another placeholder so the carousel has enough slides to page through on desktop."},
      {author:"Sample Reviewer E", rating:5, time:"5 months ago", text:"Final placeholder review. Real reviews include the reviewer's Google profile photo and a link to their profile."}
    ]
  };

  /* ---------- data: Google Places API (New) via Maps JS ---------- */
  function loadMaps(key){
    if (window.google?.maps?.importLibrary) return Promise.resolve();
    return new Promise((res, rej) => {
      const cb = "__grMapsReady" + Date.now();
      window[cb] = () => { res(); delete window[cb]; };
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async&callback=${cb}`;
      s.async = true; s.onerror = () => rej(new Error("Could not load Google Maps JS"));
      document.head.appendChild(s);
    });
  }
  /* Turn whatever link/text was pasted into a search query (+ optional location bias) or a direct place id */
  function parseProfile(input){
    const raw = String(input || "").trim();
    const out = { placeId:"", query:"", bias:null };
    if (!raw) return out;
    let url = null;
    try { url = new URL(raw.startsWith("http") ? raw : "https://" + raw); if (!/\./.test(url.hostname)) url = null; } catch(e){}
    if (!url || !/google\.|goo\.gl|g\.page|share\.google/i.test(url.hostname)) { out.query = raw; return out; }

    if (/goo\.gl$|^g\.page$|share\.google/i.test(url.hostname))
      throw new Error("Short share links can't be read directly. Open the link in a browser and paste the full URL from the address bar.");

    const decoded = decodeURIComponent(url.href);
    const pid = decoded.match(/place_?id[=:]([A-Za-z0-9_-]{20,})/i) || decoded.match(/!1s(ChIJ[A-Za-z0-9_-]+)/);
    if (pid) { out.placeId = pid[1]; return out; }

    // Prefer the pinned business coordinates (!3d/!4d); only trust the map-center "@" when zoomed in close
    const pin = decoded.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
    const view = decoded.match(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+(?:\.\d+)?)z/);
    if (pin) out.bias = { lat:+pin[1], lng:+pin[2] };
    else if (view && +view[3] >= 14) out.bias = { lat:+view[1], lng:+view[2] };

    const placeName = url.pathname.match(/\/maps\/place\/([^/]+)/);
    if (placeName) out.query = decodeURIComponent(placeName[1]).replace(/\+/g," ");
    else out.query = url.searchParams.get("q") || url.searchParams.get("query") || "";
    if (!out.query) throw new Error("Couldn't find a business name in that link. Try pasting the business name and city instead.");
    return out;
  }

  async function resolvePlaceId(Place){
    if (C.placeId) return C.placeId;
    const key = "gr_pid_" + C.profileUrl;
    try { const v = localStorage.getItem(key); if (v) return v; } catch(e){}
    const p = parseProfile(C.profileUrl);
    let id = p.placeId;
    if (!id) {
      const req = { textQuery: p.query, fields:["id"], maxResultCount:1 };
      if (p.bias) req.locationBias = { center:p.bias, radius:2000 };
      const { places } = await Place.searchByText(req);
      id = places?.[0]?.id;
      // Service-area businesses (no public address) are only returned by the REST endpoint with a flag
      if (!id) {
        const body = { textQuery: p.query, maxResultCount: 1, includePureServiceAreaBusinesses: true };
        if (p.bias) body.locationBias = { circle: { center: { latitude: p.bias.lat, longitude: p.bias.lng }, radius: 2000 } };
        const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Goog-Api-Key": C.apiKey, "X-Goog-FieldMask": "places.id" },
          body: JSON.stringify(body)
        });
        const j = await r.json().catch(() => ({}));
        id = j.places?.[0]?.id;
      }
      if (!id) throw new Error(`No Google business found for "${p.query}".`);
      console.info("[Google Reviews] Matched Place ID:", id, "— set placeId in GR_CONFIG to skip this lookup.");
    }
    try { localStorage.setItem(key, id); } catch(e){}
    return id;
  }

  async function fetchGoogle(){
    const cacheKey = "gr_cache_" + (C.placeId || C.profileUrl);
    let hit = null;
    try {
      hit = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (hit && Date.now() - hit.t < C.cacheHours*3600e3) return hit.d;
    } catch(e){}
    try { return await fetchFresh(cacheKey); }
    catch(err){ if (hit && hit.d) { console.warn("[Google Reviews] Using saved reviews:", err.message); return hit.d; } throw err; }
  }

  async function fetchFresh(cacheKey){
    await loadMaps(C.apiKey);
    const { Place } = await google.maps.importLibrary("places");
    const placeId = await resolvePlaceId(Place);
    const place = new Place({ id: placeId });
    await place.fetchFields({ fields:["displayName","rating","userRatingCount","reviews","googleMapsURI"] });
    const d = {
      name: place.displayName, rating: place.rating || 0, count: place.userRatingCount || 0,
      mapsUrl: place.googleMapsURI,
      writeUrl: `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`,
      reviews: (place.reviews || []).map(r => ({
        author: r.authorAttribution?.displayName || "Google user",
        authorUrl: r.authorAttribution?.uri || "",
        photo: r.authorAttribution?.photoURI || "",
        rating: r.rating || 0,
        time: r.relativePublishTimeDescription || "",
        text: r.text || ""
      }))
    };
    try { localStorage.setItem(cacheKey, JSON.stringify({t:Date.now(), d})); } catch(e){}
    return d;
  }

  /* ---------- render: carousel ---------- */
  function renderCarousel(mount, d, reviews){
    let idx = 0, timer = null;
    mount.classList.add("gr-root","gr-carousel");
    if (C.buttons === false) mount.classList.add("gr-simple");
    mount.innerHTML = `
      ${d.demo ? `<span class="gr-demo-flag">Demo data - add your API key &amp; profile link</span>` : ""}
      ${(C.eyebrow || C.title) ? `<div class="gr-intro">${C.eyebrow ? `<span class="gr-eyebrow">${esc(C.eyebrow)}</span>` : ""}${C.title ? `<h2 class="gr-title">${esc(C.title)}</h2>` : ""}</div>` : ""}
      ${C.buttons === false ? `
      <div class="gr-mini">
        ${gLogo("gr-mini-g")}<span class="gr-mini-score">${d.rating.toFixed(1)}</span>${stars(d.rating,18)}<span class="gr-mini-count">${d.count} Google reviews</span>
      </div>` : `
      <div class="gr-head">
        <div class="gr-summary">
          ${gLogo("gr-glogo")}
          <div class="gr-score">${d.rating.toFixed(1)}</div>
          <div class="gr-sumtext">
            <div class="gr-sumtop">${ratingLabel(d.rating) ? `<span class="gr-label">${ratingLabel(d.rating)}</span>` : ""}${stars(d.rating,20)}</div>
            <small>Based on ${d.count} reviews on ${googleMark}</small>
          </div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a class="gr-btn ghost" href="${esc(d.mapsUrl)}" target="_blank" rel="noopener">See all reviews</a>
          <a class="gr-btn" href="${esc(d.writeUrl)}" target="_blank" rel="noopener">Write a review</a>
        </div>
      </div>`}
      <div class="gr-viewport"><div class="gr-track">
        ${reviews.map(r => `
          <div class="gr-slide"><article class="gr-card">
            <div class="gr-card-top">
              <div class="gr-author">${avatar(r)}<div>${authorName(r)}<div class="gr-time">${esc(r.time)}</div></div></div>
              ${gLogo("gr-g")}
            </div>
            ${stars(r.rating,18)}
            <p class="gr-text">${esc(r.text)}</p>
            <button class="gr-more" hidden>Read more</button>
            ${quoteSvg}
          </article></div>`).join("")}
      </div></div>
      <div class="gr-nav">
        <button class="gr-arrow" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg></button>
        <div class="gr-dots"></div>
        <button class="gr-arrow" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg></button>
      </div>`;

    const track = mount.querySelector(".gr-track"), dots = mount.querySelector(".gr-dots");
    const perView = () => innerWidth <= 620 ? 1 : innerWidth <= 960 ? 2 : 3;
    const pages = () => Math.max(1, reviews.length - perView() + 1);

    function go(i){
      idx = (i + pages()) % pages();
      track.style.transform = `translateX(-${idx * (100/perView())}%)`;
      [...dots.children].forEach((b,n) => b.classList.toggle("on", n===idx));
    }
    function buildDots(){
      dots.innerHTML = Array.from({length:pages()}, (_,n)=>`<button class="gr-dot" aria-label="Go to slide ${n+1}"></button>`).join("");
      [...dots.children].forEach((b,n)=> b.onclick = ()=>{ go(n); restart(); });
      mount.querySelector(".gr-nav").style.display = pages() > 1 ? "" : "none";
      go(Math.min(idx, pages()-1));
    }
    function restart(){ clearInterval(timer); if (C.autoplayMs && pages()>1) timer = setInterval(()=>go(idx+1), C.autoplayMs); }

    mount.querySelectorAll(".gr-arrow").forEach(b => b.onclick = () => { go(idx + +b.dataset.dir); restart(); });
    mount.addEventListener("mouseenter", ()=>clearInterval(timer));
    mount.addEventListener("mouseleave", restart);

    // swipe
    let x0 = null;
    track.addEventListener("touchstart", e => x0 = e.touches[0].clientX, {passive:true});
    track.addEventListener("touchend", e => { if (x0===null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx)>40){ go(idx + (dx<0?1:-1)); restart(); } x0=null; });

    // read-more toggles only where text is actually clamped
    requestAnimationFrame(()=> mount.querySelectorAll(".gr-card").forEach(card=>{
      const t = card.querySelector(".gr-text"), m = card.querySelector(".gr-more");
      if (t.scrollHeight > t.clientHeight + 2){ m.hidden = false; m.onclick = ()=>{ t.classList.toggle("open"); m.textContent = t.classList.contains("open") ? "Show less" : "Read more"; }; }
    }));

    let rt; addEventListener("resize", ()=>{ clearTimeout(rt); rt = setTimeout(buildDots, 150); });
    buildDots(); restart();
  }

  /* ---------- render: spotlight carousel (default) ---------- */
  const SPOT_CSS = `
  .gs{ position:relative; padding:4px 0 2px; outline:none; }
  .gs-top{ display:flex; align-items:center; justify-content:center; gap:14px; margin:0 0 14px; }
  .gs-score{ font-size:52px; font-weight:800; line-height:1; letter-spacing:-.03em; color:var(--gr-heading,var(--gr-text)); }
  .gs-sub{ display:flex; align-items:center; gap:6px; margin-top:6px; font-size:14px; font-weight:500; color:var(--gr-muted); }
  .gs-sub svg{ width:16px; height:16px; }
  .gs-stage{ position:relative; height:var(--gs-h,372px); overflow:hidden;
    -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 14%,#000 86%,transparent 100%);
            mask-image:linear-gradient(90deg,transparent 0,#000 14%,#000 86%,transparent 100%); touch-action:pan-y; }
  .gs-card{ position:absolute; top:14px; left:50%; width:min(560px,74%); height:calc(100% - 46px); box-sizing:border-box;
    padding:28px 32px 24px; border-radius:var(--gr-radius,18px); background:#fff; color:var(--gr-text);
    border:1px solid rgba(19,25,70,.07); box-shadow:none;
    display:flex; flex-direction:column; gap:12px; cursor:pointer; overflow:hidden;
    transition:transform .7s cubic-bezier(.22,.8,.24,1), opacity .6s, background-color .5s, box-shadow .5s, color .5s; will-change:transform; }
  .gs-card.is-active{ background:var(--gr-accent); color:#fff; border-color:transparent; cursor:default; z-index:3;
    box-shadow:0 16px 34px rgba(19,25,70,.26), 0 4px 10px rgba(19,25,70,.14); }
  .gs-card .gr-author a, .gs-card .gr-author span.name{ font-size:16px; font-weight:700; color:inherit; }
  .gs-card .gr-time{ color:inherit; opacity:.6; }
  .gs-card .gr-avatar{ width:48px; height:48px; box-shadow:0 0 0 3px rgba(255,255,255,.9); }
  .gs-head{ display:flex; align-items:center; justify-content:space-between; gap:12px; }
  .gs-g{ width:22px; height:22px; flex:none; background:#fff; border-radius:50%; padding:4px; box-sizing:content-box; }
  .gs-text{ margin:0; font-size:17px; line-height:1.65; display:-webkit-box; -webkit-line-clamp:5; -webkit-box-orient:vertical; overflow:hidden; }
  .gs-card.is-active .gs-text{ color:rgba(255,255,255,.94); }
  .gs-q{ position:absolute; right:26px; bottom:-40px; font:700 150px/1 Georgia,serif; color:var(--gr-star); opacity:.12; pointer-events:none; transition:opacity .5s; }
  .gs-card.is-active .gs-q{ opacity:.85; }
  .gs-more{ margin-top:auto; align-self:flex-start; font-size:14px; font-weight:600; color:var(--gr-star); text-decoration:none; opacity:0; transition:opacity .4s; }
  .gs-card.is-active .gs-more{ opacity:1; }
  .gs-more:hover{ text-decoration:underline; text-underline-offset:3px; }
  .gs-nav{ display:flex; align-items:center; justify-content:center; gap:16px; margin-top:6px; }
  .gs-arrow{ width:44px; height:44px; border-radius:50%; border:1px solid rgba(19,25,70,.15); background:#fff; cursor:pointer; display:grid; place-items:center; transition:border-color .2s, transform .2s; }
  .gs-arrow:hover{ border-color:var(--gr-accent); transform:scale(1.06); }
  .gs-arrow svg{ width:18px; height:18px; stroke:var(--gr-heading,var(--gr-accent)); }
  .gs-dots{ display:flex; gap:8px; align-items:center; }
  .gs-dot{ position:relative; width:8px; height:8px; padding:0; border:0; border-radius:99px; background:rgba(19,25,70,.18); cursor:pointer; overflow:hidden; transition:width .35s; }
  .gs-dot.on{ width:38px; }
  .gs-dot.on::after{ content:""; position:absolute; inset:0; border-radius:inherit; background:var(--gr-accent); transform-origin:left; animation:gsfill var(--gs-t,6s) linear forwards; }
  .gs.paused .gs-dot.on::after{ animation-play-state:paused; }
  .gs.static .gs-dot.on::after{ animation:none; transform:none; }
  @keyframes gsfill{ from{ transform:scaleX(0); } to{ transform:scaleX(1); } }
  @media (max-width:620px){
    .gs-stage{ --gs-h:400px; -webkit-mask-image:none; mask-image:none; }
    .gs-q{ font-size:110px; right:16px; bottom:-30px; }
    .gs-card.is-active .gs-q{ opacity:.45; }
    .gs-card{ width:84%; padding:22px 22px 20px; }
    .gs-text{ font-size:15.5px; -webkit-line-clamp:7; }
    .gs-score{ font-size:42px; }
  }
  @media (prefers-reduced-motion:reduce){ .gs-card{ transition:none; } .gs-dot.on::after{ animation:none; } }`;

  function renderSpotlight(mount, d, reviews){
    if (!document.getElementById("gs-styles")) { const st = document.createElement("style"); st.id = "gs-styles"; st.textContent = SPOT_CSS; document.head.appendChild(st); }
    const n = reviews.length; let idx = 0, timer = null;
    mount.classList.add("gr-root","gs");
    if (C.autoplayMs) mount.style.setProperty("--gs-t", C.autoplayMs + "ms"); else mount.classList.add("static");
    mount.innerHTML = `
      ${d.demo ? `<span class="gr-demo-flag">Demo data - add your API key &amp; profile link</span>` : ""}
      ${(C.eyebrow || C.title) ? `<div class="gr-intro">${C.eyebrow ? `<span class="gr-eyebrow">${esc(C.eyebrow)}</span>` : ""}${C.title ? `<h2 class="gr-title">${esc(C.title)}</h2>` : ""}</div>` : ""}
      <div class="gs-top">
        <div class="gs-score">${d.rating.toFixed(1)}</div>
        <div>${stars(d.rating,24)}<div class="gs-sub">${gLogo("")} Based on ${d.count} Google reviews</div></div>
      </div>
      <div class="gs-stage">
        ${reviews.map((r,i) => `
          <article class="gs-card" data-i="${i}">
            <div class="gs-head"><div class="gr-author">${avatar(r)}<div>${authorName(r)}<div class="gr-time">${esc(r.time)}</div></div></div>${gLogo("gs-g")}</div>
            ${stars(r.rating,18)}
            <p class="gs-text">${esc(r.text)}</p>
            <a class="gs-more" href="${esc(d.mapsUrl)}" target="_blank" rel="noopener" hidden>Read full review &rarr;</a>
            <span class="gs-q" aria-hidden="true">&rdquo;</span>
          </article>`).join("")}
      </div>
      ${n > 1 ? `<div class="gs-nav">
        <button class="gs-arrow" data-dir="-1" aria-label="Previous review"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg></button>
        <div class="gs-dots">${reviews.map((_,i) => `<button class="gs-dot" aria-label="Review ${i+1}"></button>`).join("")}</div>
        <button class="gs-arrow" data-dir="1" aria-label="Next review"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg></button>
      </div>` : ""}`;

    const cards = [...mount.querySelectorAll(".gs-card")], dots = [...mount.querySelectorAll(".gs-dot")];
    function place(){
      const mobile = innerWidth <= 620;
      const step = mobile ? 92 : 78, sc = mobile ? .9 : .86;
      cards.forEach((c,i) => {
        let off = i - idx; if (off > n/2) off -= n; if (off < -n/2) off += n;
        const a = Math.abs(off);
        c.classList.toggle("is-active", off === 0);
        c.style.transform = `translateX(calc(-50% + ${off*step}%)) scale(${off === 0 ? 1 : a === 1 ? sc : .78})`;
        c.style.opacity = off === 0 ? 1 : a === 1 ? (mobile ? .35 : .55) : 0;
        c.style.zIndex = String(3 - a);
        c.setAttribute("aria-hidden", off === 0 ? "false" : "true");
      });
      dots.forEach((b,i) => { b.classList.remove("on"); if (i === idx) { void b.offsetWidth; b.classList.add("on"); } });
    }
    function restart(){ clearInterval(timer); if (C.autoplayMs && n > 1 && !mount.classList.contains("paused")) timer = setInterval(() => { idx = (idx + 1) % n; place(); }, C.autoplayMs); }
    function go(i){ idx = (i + n) % n; place(); restart(); }

    cards.forEach((c,i) => c.addEventListener("click", e => { if (i !== idx) { e.preventDefault(); go(i); } }));
    dots.forEach((b,i) => b.onclick = () => go(i));
    mount.querySelectorAll(".gs-arrow").forEach(b => b.onclick = () => go(idx + +b.dataset.dir));
    mount.addEventListener("mouseenter", () => { clearInterval(timer); mount.classList.add("paused"); });
    mount.addEventListener("mouseleave", () => { mount.classList.remove("paused"); place(); restart(); });
    const stage = mount.querySelector(".gs-stage"); let x0 = null;
    stage.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, {passive:true});
    stage.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1)); x0 = null; });
    mount.setAttribute("tabindex","0");
    mount.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(idx + 1); if (e.key === "ArrowLeft") go(idx - 1); });
    requestAnimationFrame(() => cards.forEach(c => { const t = c.querySelector(".gs-text"); if (t.scrollHeight > t.clientHeight + 2) c.querySelector(".gs-more").hidden = false; }));
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(place, 150); });
    place(); restart();
  }

  /* ---------- render: floating badge + panel ---------- */
  function renderBadge(d, reviews){
    try { if (sessionStorage.getItem("gr_badge_closed")) return; } catch(e){}
    const wrap = document.createElement("div");
    wrap.className = "gr-root";
    wrap.innerHTML = `
      <div class="gr-badge" role="button" tabindex="0" aria-label="Open Google reviews">
        <button class="gr-badge-x" aria-label="Dismiss">×</button>
        <div>
          <div class="lbl">${googleMark} Rating</div>
          <div class="row"><span class="num">${d.rating.toFixed(1)}</span>${stars(d.rating,16)}</div>
          <div class="cnt">Based on ${d.count} reviews</div>
        </div>
      </div>
      <aside class="gr-panel" role="dialog" aria-label="Google reviews">
        <div class="gr-panel-head">
          <h3>${esc(d.name)}</h3>
          <div class="row"><strong>${d.rating.toFixed(1)}</strong>${stars(d.rating,16)}<span>${d.count} reviews</span></div>
          <a class="gr-btn" href="${esc(d.writeUrl)}" target="_blank" rel="noopener">Review us on Google</a>
          <button class="gr-close" aria-label="Close">×</button>
        </div>
        <div class="gr-list">
          ${reviews.map(r=>`
            <div class="gr-item">
              <div class="gr-author">${avatar(r)}<div>${authorName(r)}<div class="gr-time">${esc(r.time)}</div></div></div>
              ${stars(r.rating,15)}
              <p class="gr-text">${esc(r.text)}</p>
            </div>`).join("")}
        </div>
        <div class="gr-panel-foot"><span>Reviews from ${googleMark}</span><a href="${esc(d.mapsUrl)}" target="_blank" rel="noopener">See all →</a></div>
      </aside>`;
    document.body.appendChild(wrap);

    const badge = wrap.querySelector(".gr-badge"), panel = wrap.querySelector(".gr-panel");
    const open = ()=>{ panel.classList.add("open"); badge.classList.remove("in"); };
    const close = ()=>{ panel.classList.remove("open"); badge.classList.add("in"); };
    badge.addEventListener("click", open);
    badge.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); open(); }});
    wrap.querySelector(".gr-close").onclick = close;
    wrap.querySelector(".gr-badge-x").onclick = e=>{ e.stopPropagation(); badge.remove(); try{ sessionStorage.setItem("gr_badge_closed","1"); }catch(_){} };
    document.addEventListener("keydown", e=>{ if(e.key==="Escape" && panel.classList.contains("open")) close(); });
    setTimeout(()=>badge.classList.add("in"), C.badgeDelayMs);
  }

  /* ---------- boot ---------- */
  async function boot(){
    const mount = document.getElementById("gr-carousel");
    let d;
    try {
      d = (C.apiKey && (C.placeId || C.profileUrl)) ? await fetchGoogle() : DEMO;
    } catch(err){
      console.error("[Google Reviews]", err);
      if (mount && C.debug) mount.innerHTML = `<div class="gr-root gr-error">Couldn't load Google reviews: ${esc(err.message)}<br><small>Also check the API key, its referrer restrictions, and that "Places API (New)" is enabled.</small></div>`;
      else if (mount) mount.style.display = "none";
      return;
    }
    const reviews = d.reviews.filter(r => r.rating >= (C.minRating||0) && r.text);
    if (C.carousel && mount && reviews.length) (C.layout === "grid" ? renderCarousel : renderSpotlight)(mount, d, reviews);
    if (C.badge) renderBadge(d, reviews);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
