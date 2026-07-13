:root {
  --ink: #07161f;
  --ink-2: #0c2530;
  --paper: #fffdf7;
  --cream: #fff6d1;
  --cyan: #73e7e6;
  --cyan-deep: #19c8cf;
  --yellow: #ffe680;
  --pink: #ff6eb6;
  --pink-soft: #ffc0dc;
  --green: #0d8d65;
  --line: rgba(7, 22, 31, 0.13);
  --muted: #64737a;
  --shadow: 0 24px 80px rgba(4, 28, 38, 0.16);
  --shadow-soft: 0 14px 40px rgba(4, 28, 38, 0.10);
  --radius-xl: 34px;
  --radius-lg: 24px;
  --rail-width: 82px;
  --rail-open: 238px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Manrope", system-ui, sans-serif;
  color: var(--ink);
  background: var(--paper);
  min-height: 100vh;
  overflow-x: hidden;
}
button, input { font: inherit; }
a { color: inherit; text-decoration: none; }
button { color: inherit; }
::selection { background: var(--yellow); color: var(--ink); }

.noise {
  position: fixed; inset: 0; pointer-events: none; z-index: 100;
  opacity: .035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}
.ambient { position: fixed; width: 480px; height: 480px; border-radius: 50%; filter: blur(100px); opacity: .16; pointer-events: none; z-index: -1; }
.ambient-one { background: var(--cyan); top: -180px; left: 5%; }
.ambient-two { background: var(--pink); right: -200px; top: 35%; }

.side-rail {
  position: fixed; z-index: 80; left: 18px; top: 18px; bottom: 18px;
  width: var(--rail-width); padding: 11px;
  background: rgba(7, 22, 31, .94); color: white;
  border: 1px solid rgba(255,255,255,.12); border-radius: 26px;
  box-shadow: 0 24px 60px rgba(3, 19, 27, .28);
  display: flex; flex-direction: column; overflow: hidden;
  transition: width .38s cubic-bezier(.2,.8,.2,1);
  backdrop-filter: blur(20px);
}
.side-rail:hover, .side-rail:focus-within { width: var(--rail-open); }
.rail-brand { display: flex; align-items: center; gap: 13px; height: 62px; min-height: 62px; white-space: nowrap; overflow: hidden; }
.rail-brand img { width: 54px; height: 54px; border-radius: 18px; object-fit: cover; border: 2px solid rgba(255,255,255,.78); flex: 0 0 auto; }
.rail-brand span { font-weight: 800; letter-spacing: .12em; font-size: 12px; }
.rail-nav { display: grid; gap: 8px; margin-top: 34px; }
.rail-link { min-height: 54px; border: 0; background: transparent; border-radius: 17px; display: flex; align-items: center; gap: 17px; color: rgba(255,255,255,.68); cursor: pointer; width: 100%; padding: 0 17px; white-space: nowrap; overflow: hidden; transition: .25s ease; }
.rail-link:hover { color: white; background: rgba(255,255,255,.08); transform: translateX(2px); }
.rail-link.active { color: var(--ink); background: var(--yellow); }
.rail-link svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; flex: 0 0 auto; }
.rail-link:first-child svg, .rail-link:nth-child(2) svg { fill: currentColor; stroke: none; }
.rail-link span { font-size: 13px; font-weight: 700; letter-spacing: .02em; }
.rail-button { text-align: left; }
.rail-bottom { margin-top: auto; display: grid; gap: 8px; }

.page-shell { margin-left: 118px; width: calc(100% - 118px); }
.topbar { min-height: 88px; padding: 18px 4vw 12px; display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 20; }
.shipping-note { font-size: 12px; font-weight: 700; color: var(--muted); display: flex; align-items: center; gap: 9px; }
.shipping-note span { width: 7px; height: 7px; background: var(--green); border-radius: 50%; box-shadow: 0 0 0 5px rgba(13,141,101,.1); }
.top-actions { display: flex; align-items: center; gap: 10px; }
.search-shell { width: min(31vw, 380px); height: 50px; padding: 0 14px; background: white; border: 1px solid var(--line); border-radius: 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 28px rgba(10,45,58,.06); transition: .25s ease; }
.search-shell:focus-within { border-color: var(--cyan-deep); box-shadow: 0 0 0 4px rgba(25,200,207,.13), 0 12px 34px rgba(10,45,58,.1); }
.search-shell svg, .text-icon svg, .cart-button svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.search-shell input { width: 100%; border: 0; outline: 0; color: var(--ink); background: transparent; font-size: 13px; }
.search-shell input::placeholder { color: #94a1a6; }
kbd { font-family: inherit; background: #f3f5f3; border: 1px solid #e3e7e5; box-shadow: inset 0 -1px #d7dcda; border-radius: 7px; color: #8b999e; padding: 3px 7px; font-size: 11px; }
.icon-button { border: 1px solid var(--line); background: white; border-radius: 16px; width: 50px; height: 50px; display: grid; place-items: center; cursor: pointer; }
.icon-button:hover { transform: translateY(-2px); box-shadow: var(--shadow-soft); }
.cart-button { height: 50px; border: 0; border-radius: 16px; background: var(--ink); color: white; padding: 0 15px; display: flex; align-items: center; gap: 9px; cursor: pointer; }
.cart-button span { font-weight: 700; font-size: 12px; }
.cart-button b { width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; background: var(--pink); color: var(--ink); font-size: 11px; }

.hero { min-height: 695px; margin: 0 4vw; border-radius: 42px; overflow: hidden; position: relative; display: grid; grid-template-columns: 1.08fr .92fr; align-items: center; background: linear-gradient(130deg, #d9fbf5 0%, #f2ffd6 44%, #ffe3ef 100%); box-shadow: inset 0 0 0 1px rgba(255,255,255,.76), var(--shadow); }
.hero::before { content: ""; position: absolute; width: 600px; height: 600px; border: 1px solid rgba(7,22,31,.08); border-radius: 50%; top: -370px; left: -190px; box-shadow: 0 0 0 70px rgba(255,255,255,.12), 0 0 0 140px rgba(255,255,255,.08); }
.hero-pattern { position: absolute; inset: 0; opacity: .12; background-image: radial-gradient(circle at 15% 20%, var(--cyan-deep) 0 2px, transparent 2px), radial-gradient(circle at 84% 80%, var(--pink) 0 2px, transparent 2px); background-size: 34px 34px, 42px 42px; mask-image: linear-gradient(to right, black, transparent 42%, black); }
.hero-copy { position: relative; z-index: 2; padding: 70px clamp(35px, 5vw, 76px); }
.eyebrow { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #3a5961; }
.eyebrow span { background: var(--ink); color: white; padding: 7px 10px; border-radius: 999px; }
.hero h1, .section h2, .deal-stage h2, .newsletter h2, .drawer-head h2, .modal h2, .info-modal h2 { font-family: "DM Serif Display", Georgia, serif; font-weight: 400; letter-spacing: -.035em; margin: 0; }
.hero h1 { font-size: clamp(58px, 6.9vw, 108px); line-height: .88; margin-top: 28px; }
.hero h1 em { color: var(--pink); font-weight: 400; }
.hero-copy > p { max-width: 640px; color: #39535b; font-size: 16px; line-height: 1.75; margin: 28px 0 32px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.primary-button, .ghost-button { min-height: 54px; padding: 0 21px; border-radius: 17px; display: inline-flex; align-items: center; justify-content: center; gap: 18px; font-size: 13px; font-weight: 800; border: 0; cursor: pointer; transition: .25s ease; }
.primary-button { background: var(--ink); color: white; box-shadow: 0 13px 28px rgba(7,22,31,.2); }
.primary-button:hover { transform: translateY(-3px); box-shadow: 0 17px 34px rgba(7,22,31,.28); }
.primary-button span { font-size: 19px; }
.ghost-button { border: 1px solid rgba(7,22,31,.16); background: rgba(255,255,255,.34); backdrop-filter: blur(10px); }
.ghost-button:hover { background: white; transform: translateY(-2px); }
.hero-proof { margin-top: 48px; display: flex; gap: 31px; }
.hero-proof div { display: flex; flex-direction: column; }
.hero-proof strong { font-size: 17px; }
.hero-proof span { color: #62777d; font-size: 10px; margin-top: 4px; text-transform: uppercase; letter-spacing: .06em; }

.hero-art { position: relative; min-height: 100%; display: grid; place-items: center; }
.sun-disc { position: absolute; width: min(42vw, 570px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fffde8, var(--yellow) 47%, #ffc46e 100%); box-shadow: 0 0 0 20px rgba(255,255,255,.28), 0 35px 80px rgba(204,139,44,.24); }
.logo-medallion { width: min(36vw, 475px); aspect-ratio: 1; border-radius: 50%; overflow: hidden; position: relative; z-index: 3; box-shadow: 0 28px 80px rgba(24,57,65,.28); border: 10px solid rgba(255,255,255,.78); transform: rotate(2deg); }
.logo-medallion img { width: 100%; height: 100%; object-fit: cover; }
.palm { position: absolute; z-index: 1; width: 310px; height: 510px; opacity: .5; filter: drop-shadow(0 18px 30px rgba(5,76,60,.18)); }
.palm::before, .palm::after { content: ""; position: absolute; background: var(--green); border-radius: 100% 0 100% 0; transform-origin: bottom right; }
.palm::before { width: 82px; height: 330px; left: 120px; top: 65px; transform: rotate(-24deg); box-shadow: -65px 25px 0 -12px var(--green), -122px 82px 0 -20px var(--green), 54px 46px 0 -18px var(--green), 102px 105px 0 -24px var(--green); }
.palm::after { width: 12px; height: 420px; border-radius: 99px; left: 140px; top: 135px; transform: rotate(16deg); }
.palm-left { left: -8px; bottom: -170px; transform: rotate(-16deg); }
.palm-right { right: -80px; top: -170px; transform: rotate(130deg) scale(.88); }
.floating-card { position: absolute; z-index: 5; background: rgba(255,255,255,.82); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,.75); box-shadow: var(--shadow-soft); border-radius: 18px; padding: 14px 17px; display: flex; flex-direction: column; }
.floating-card small { font-size: 9px; letter-spacing: .1em; font-weight: 800; color: #6d7f84; }
.floating-card strong { margin-top: 4px; font-size: 13px; }
.floating-card-top { top: 20%; right: 8%; transform: rotate(3deg); }
.floating-card-bottom { left: 3%; bottom: 16%; flex-direction: row; align-items: center; gap: 10px; transform: rotate(-2deg); }
.pulse-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--pink); box-shadow: 0 0 0 7px rgba(255,110,182,.16); }
.floating-card-bottom div { display: flex; flex-direction: column; }

.marquee-section { margin: 22px 4vw 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); overflow: hidden; }
.marquee-track { width: max-content; display: flex; align-items: center; gap: 30px; padding: 17px 0; animation: marquee 28s linear infinite; }
.marquee-track span { font-size: 11px; font-weight: 800; letter-spacing: .16em; }
.marquee-track i { color: var(--pink); font-style: normal; }
@keyframes marquee { to { transform: translateX(-50%); } }

.section { margin: 0 4vw; padding: 118px 0; }
.section-head { display: flex; justify-content: space-between; align-items: end; gap: 32px; margin-bottom: 38px; }
.section-head h2 { font-size: clamp(44px, 5vw, 74px); line-height: .98; margin-top: 10px; }
.section-head > p { max-width: 380px; color: var(--muted); line-height: 1.7; font-size: 13px; }
.eyebrow-label { display: inline-block; font-size: 10px; letter-spacing: .18em; font-weight: 800; color: var(--green); }
.category-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
.category-card { position: relative; min-height: 370px; border-radius: var(--radius-lg); overflow: hidden; cursor: pointer; isolation: isolate; box-shadow: var(--shadow-soft); border: 1px solid rgba(255,255,255,.75); transition: transform .35s ease, box-shadow .35s ease; }
.category-card:hover { transform: translateY(-8px); box-shadow: var(--shadow); }
.category-card:nth-child(1), .category-card:nth-child(4) { grid-column: span 4; }
.category-card:nth-child(2), .category-card:nth-child(3) { grid-column: span 4; }
.category-card img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; transition: transform .65s ease; }
.category-card:hover img { transform: scale(1.06); }
.category-card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,22,31,.72), transparent 63%); z-index: 1; }
.category-content { position: absolute; left: 24px; right: 24px; bottom: 22px; z-index: 2; color: white; display: flex; justify-content: space-between; align-items: end; }
.category-content small { display: block; opacity: .72; text-transform: uppercase; letter-spacing: .11em; font-size: 9px; }
.category-content h3 { margin: 5px 0 0; font-family: "DM Serif Display", serif; font-size: 30px; font-weight: 400; }
.category-arrow { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 50%; background: rgba(255,255,255,.18); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.36); font-size: 20px; transition: .25s ease; }
.category-card:hover .category-arrow { background: var(--yellow); color: var(--ink); transform: rotate(45deg); }

.deal-stage { min-height: 680px; background: var(--yellow); border-radius: 40px; padding: clamp(38px, 6vw, 85px); display: grid; grid-template-columns: .9fr 1.1fr; gap: 55px; align-items: center; position: relative; overflow: hidden; box-shadow: var(--shadow); }
.deal-stage::after { content: ""; position: absolute; width: 440px; height: 440px; border-radius: 50%; border: 1px solid rgba(7,22,31,.11); right: -190px; bottom: -250px; box-shadow: 0 0 0 70px rgba(255,255,255,.16), 0 0 0 140px rgba(255,255,255,.11); }
.deal-stage h2 { font-size: clamp(48px, 5.5vw, 82px); line-height: .95; margin-top: 12px; }
.deal-copy > p { max-width: 510px; font-size: 14px; line-height: 1.75; color: #465a5f; }
.countdown { display: flex; align-items: center; gap: 15px; margin: 30px 0; }
.countdown div { width: 82px; height: 82px; border-radius: 20px; background: rgba(255,255,255,.55); border: 1px solid rgba(255,255,255,.8); display: grid; place-items: center; align-content: center; }
.countdown strong { font-family: "DM Serif Display", serif; font-size: 29px; font-weight: 400; line-height: 1; }
.countdown span { font-size: 8px; text-transform: uppercase; letter-spacing: .12em; color: #6c797c; margin-top: 5px; }
.countdown > b { font-size: 22px; }
.dark-button { background: var(--ink); }
.deal-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 17px; position: relative; z-index: 2; }
.editorial-card { min-height: 420px; border-radius: 28px; padding: 28px; position: relative; overflow: hidden; box-shadow: 0 24px 48px rgba(49,63,42,.16); }
.card-cyan { background: linear-gradient(145deg, #58e1e3, #d9ffff); transform: rotate(-2deg); }
.card-pink { background: linear-gradient(145deg, #ff72b7, #ffd0e6); transform: translateY(36px) rotate(2deg); }
.card-kicker { font-size: 9px; font-weight: 800; letter-spacing: .14em; }
.editorial-card h3 { font-family: "DM Serif Display", serif; font-size: 39px; font-weight: 400; line-height: 1; margin: 14px 0 11px; }
.editorial-card p { font-size: 11px; line-height: 1.6; max-width: 230px; }
.mini-product { position: absolute; left: 50%; bottom: 12%; transform: translateX(-50%); }
.speaker-shape { width: 150px; height: 180px; border-radius: 78px; background: var(--ink); box-shadow: inset 0 0 0 7px rgba(255,255,255,.12), 0 35px 40px rgba(4,32,39,.24); display: grid; place-items: center; }
.speaker-shape::before { content: ""; width: 94px; height: 94px; border-radius: 50%; border: 3px solid rgba(255,255,255,.55); box-shadow: inset 0 0 0 15px rgba(255,255,255,.06); }
.speaker-shape span:first-child { position: absolute; width: 7px; height: 7px; top: 26px; border-radius: 50%; background: var(--pink); }
.glasses-shape { width: 230px; height: 90px; display: flex; justify-content: center; gap: 9px; transform: translateX(-50%) rotate(-8deg); }
.glasses-shape span { width: 95px; height: 75px; border-radius: 17px 17px 46px 46px; background: var(--ink); border: 9px solid rgba(255,255,255,.22); box-shadow: 0 22px 28px rgba(42,17,32,.25); }
.glasses-shape::before { content: ""; position: absolute; width: 32px; height: 8px; background: var(--ink); left: 99px; top: 25px; }

.product-section { padding-bottom: 80px; }
.product-head { align-items: center; }
.filter-row { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
.filter-pill { border: 1px solid var(--line); background: white; border-radius: 999px; padding: 10px 15px; cursor: pointer; font-weight: 700; font-size: 11px; transition: .2s ease; }
.filter-pill:hover, .filter-pill.active { background: var(--ink); color: white; border-color: var(--ink); }
.results-line { display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 11px; margin-bottom: 17px; }
.results-line button { border: 0; background: transparent; cursor: pointer; color: var(--green); font-weight: 800; }
.product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.product-card { position: relative; }
.product-image { aspect-ratio: .88; border-radius: 24px; overflow: hidden; position: relative; background: #eef6f4; cursor: pointer; box-shadow: 0 10px 30px rgba(5,40,50,.08); border: 1px solid rgba(7,22,31,.06); }
.product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s cubic-bezier(.2,.8,.2,1); }
.product-card:hover .product-image img { transform: scale(1.055); }
.product-badge { position: absolute; top: 13px; left: 13px; z-index: 2; background: rgba(255,255,255,.88); backdrop-filter: blur(10px); border-radius: 999px; padding: 7px 10px; font-size: 8px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.favorite-button { position: absolute; top: 12px; right: 12px; z-index: 2; width: 38px; height: 38px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.6); background: rgba(255,255,255,.74); backdrop-filter: blur(10px); border-radius: 50%; cursor: pointer; font-size: 16px; }
.favorite-button.active { background: var(--pink); }
.quick-add { position: absolute; left: 12px; right: 12px; bottom: 12px; border: 0; border-radius: 14px; background: rgba(7,22,31,.92); color: white; min-height: 47px; font-weight: 800; font-size: 11px; cursor: pointer; transform: translateY(70px); opacity: 0; transition: .3s ease; }
.product-card:hover .quick-add { transform: translateY(0); opacity: 1; }
.product-info { padding: 15px 4px 6px; }
.product-meta { display: flex; justify-content: space-between; gap: 10px; align-items: flex-start; }
.product-meta h3 { margin: 0; font-size: 13px; font-weight: 800; letter-spacing: -.01em; }
.product-category { display: block; margin-top: 4px; color: var(--muted); font-size: 10px; }
.price { text-align: right; white-space: nowrap; font-weight: 800; font-size: 13px; }
.price s { color: #9ca8ab; font-weight: 500; font-size: 10px; margin-right: 5px; }
.rating { margin-top: 9px; color: #e0ad18; font-size: 10px; letter-spacing: .08em; }
.rating span { color: var(--muted); letter-spacing: 0; margin-left: 5px; }
.no-results { grid-column: 1 / -1; text-align: center; padding: 80px 20px; border: 1px dashed var(--line); border-radius: 24px; }
.no-results h3 { font-family: "DM Serif Display", serif; font-size: 36px; margin: 0 0 10px; font-weight: 400; }
.no-results p { color: var(--muted); }

.newsletter { border-radius: 38px; background: linear-gradient(125deg, var(--cyan) 0%, #c6fff2 42%, var(--pink-soft) 100%); padding: clamp(40px, 6vw, 80px); display: grid; grid-template-columns: .9fr 1.1fr; gap: 50px; align-items: center; box-shadow: var(--shadow); overflow: hidden; position: relative; }
.newsletter::before { content: "UNCLE MONEY"; position: absolute; right: -55px; bottom: -30px; font-family: "DM Serif Display", serif; font-size: 120px; color: rgba(255,255,255,.2); white-space: nowrap; }
.newsletter h2 { font-size: clamp(45px, 5vw, 76px); line-height: .98; margin-top: 10px; }
.newsletter form { position: relative; z-index: 2; }
.newsletter label { display: block; font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 9px; }
.email-row { display: flex; background: rgba(255,255,255,.78); border: 1px solid rgba(255,255,255,.8); border-radius: 18px; padding: 6px; box-shadow: var(--shadow-soft); }
.email-row input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; padding: 0 14px; }
.email-row button { border: 0; background: var(--ink); color: white; border-radius: 13px; padding: 16px 18px; font-size: 11px; font-weight: 800; cursor: pointer; }
.newsletter form small { display: block; color: #597077; margin-top: 11px; font-size: 9px; line-height: 1.5; }

.footer { margin: 70px 4vw 0; padding: 60px 0 32px; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1fr auto; gap: 45px; }
.footer-brand { display: flex; align-items: center; gap: 14px; }
.footer-brand img { width: 54px; height: 54px; border-radius: 18px; object-fit: cover; }
.footer-brand div { display: flex; flex-direction: column; }
.footer-brand strong { font-size: 13px; letter-spacing: .14em; }
.footer-brand span { color: var(--muted); font-size: 11px; margin-top: 4px; }
.footer-links { display: flex; gap: 24px; align-items: center; font-size: 11px; font-weight: 700; }
.footer-links button { border: 0; background: transparent; cursor: pointer; }
.footer-bottom { grid-column: 1 / -1; border-top: 1px solid var(--line); padding-top: 24px; display: flex; justify-content: space-between; color: var(--muted); font-size: 10px; }

.backdrop { position: fixed; inset: 0; z-index: 88; background: rgba(1,12,17,.54); backdrop-filter: blur(4px); opacity: 0; visibility: hidden; transition: .3s ease; }
.backdrop.show { opacity: 1; visibility: visible; }
.cart-drawer { position: fixed; top: 0; right: 0; bottom: 0; width: min(470px, 100%); background: var(--paper); z-index: 90; transform: translateX(105%); transition: transform .38s cubic-bezier(.2,.8,.2,1); padding: 30px; display: flex; flex-direction: column; box-shadow: -20px 0 70px rgba(0,0,0,.22); }
.cart-drawer.open { transform: translateX(0); }
.drawer-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--line); padding-bottom: 23px; }
.drawer-head h2 { font-size: 46px; margin-top: 6px; }
.close-button { width: 42px; height: 42px; border-radius: 50%; border: 1px solid var(--line); background: white; cursor: pointer; font-size: 25px; line-height: 1; }
.cart-items { overflow: auto; flex: 1; padding: 19px 3px; }
.cart-item { display: grid; grid-template-columns: 82px 1fr auto; gap: 13px; padding: 12px 0; border-bottom: 1px solid var(--line); align-items: center; }
.cart-item img { width: 82px; height: 95px; object-fit: cover; border-radius: 15px; }
.cart-item h4 { margin: 0; font-size: 12px; }
.cart-item p { margin: 5px 0 12px; color: var(--muted); font-size: 9px; }
.qty-controls { display: inline-flex; align-items: center; border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
.qty-controls button { border: 0; background: white; width: 28px; height: 28px; cursor: pointer; }
.qty-controls span { min-width: 25px; text-align: center; font-size: 10px; }
.cart-item > strong { font-size: 11px; }
.remove-item { border: 0; background: transparent; color: #9a6f78; cursor: pointer; font-size: 9px; display: block; margin-top: 8px; padding: 0; }
.empty-cart { display: none; flex: 1; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.empty-cart.show { display: flex; }
.empty-icon { width: 72px; height: 72px; border-radius: 24px; display: grid; place-items: center; background: var(--yellow); font-size: 30px; transform: rotate(8deg); }
.empty-cart h3 { font-family: "DM Serif Display", serif; font-size: 35px; font-weight: 400; margin: 20px 0 5px; }
.empty-cart p { color: var(--muted); font-size: 12px; margin: 0 0 18px; }
.cart-summary { border-top: 1px solid var(--line); padding-top: 20px; }
.cart-summary > div { display: flex; justify-content: space-between; }
.cart-summary p { color: var(--muted); font-size: 9px; }
.checkout-button { width: 100%; min-height: 57px; border: 0; background: var(--ink); color: white; border-radius: 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; font-size: 12px; font-weight: 800; }

.modal { position: fixed; z-index: 95; left: 50%; top: 50%; width: min(920px, calc(100% - 30px)); max-height: 88vh; overflow: auto; transform: translate(-50%, -46%) scale(.96); opacity: 0; visibility: hidden; transition: .3s ease; background: var(--paper); border-radius: 30px; box-shadow: 0 30px 110px rgba(0,0,0,.33); display: grid; grid-template-columns: 1.02fr .98fr; }
.modal.show { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
.modal-close { position: absolute; right: 16px; top: 16px; z-index: 4; }
.modal-image { min-height: 580px; background-size: cover; background-position: center; }
.modal-copy { padding: 60px 45px; display: flex; flex-direction: column; justify-content: center; }
.product-tag { align-self: flex-start; background: var(--yellow); border-radius: 999px; padding: 7px 10px; font-size: 8px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.modal h2 { font-size: 56px; line-height: .98; margin: 17px 0; }
.modal-price { display: flex; align-items: center; gap: 10px; }
.modal-price strong { font-size: 20px; }
.modal-price span { color: #94a0a4; text-decoration: line-through; }
.modal-copy > p { color: var(--muted); line-height: 1.75; font-size: 12px; margin: 23px 0; }
.modal-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; margin-bottom: 25px; }
.modal-feature-grid div { display: flex; align-items: center; gap: 8px; font-size: 10px; }
.modal-feature-grid b { width: 23px; height: 23px; border-radius: 50%; background: #dff8ec; color: var(--green); display: grid; place-items: center; }
.modal-add { width: 100%; }

.info-modal { position: fixed; z-index: 95; left: 50%; top: 50%; width: min(560px, calc(100% - 30px)); transform: translate(-50%, -45%) scale(.96); opacity: 0; visibility: hidden; background: var(--paper); border-radius: 28px; box-shadow: 0 30px 110px rgba(0,0,0,.33); padding: 48px; transition: .3s ease; }
.info-modal.show { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
.info-modal .close-button { position: absolute; right: 16px; top: 16px; }
.info-modal h2 { font-size: 48px; margin: 10px 0 12px; }
.info-modal p { color: var(--muted); line-height: 1.75; font-size: 12px; }
.info-modal code { background: #eef3f1; border-radius: 6px; padding: 2px 5px; }

.toast { position: fixed; left: 50%; bottom: 24px; z-index: 110; transform: translate(-50%, 25px); background: var(--ink); color: white; padding: 13px 18px; border-radius: 13px; box-shadow: var(--shadow); font-size: 11px; font-weight: 700; opacity: 0; visibility: hidden; transition: .3s ease; }
.toast.show { transform: translate(-50%, 0); opacity: 1; visibility: visible; }

.mobile-nav-wrap, .mobile-menu { display: none; }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s ease, transform .8s ease; }
.reveal.visible { opacity: 1; transform: none; }
.delay-one { transition-delay: .13s; }

@media (max-width: 1180px) {
  .hero { grid-template-columns: 1fr 1fr; min-height: 640px; }
  .hero-copy { padding-inline: 40px; }
  .hero h1 { font-size: clamp(54px, 7.4vw, 84px); }
  .product-grid { grid-template-columns: repeat(3, 1fr); }
  .deal-stage { grid-template-columns: 1fr; }
  .deal-copy { max-width: 730px; }
  .deal-cards { max-width: 790px; }
}

@media (max-width: 900px) {
  .side-rail { display: none; }
  .page-shell { width: 100%; margin-left: 0; }
  .mobile-nav-wrap { display: flex; position: sticky; top: 0; z-index: 75; min-height: 72px; align-items: center; justify-content: space-between; padding: 10px 4vw; background: rgba(255,253,247,.88); border-bottom: 1px solid var(--line); backdrop-filter: blur(18px); }
  .mobile-brand { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 800; letter-spacing: .13em; }
  .mobile-brand img { width: 43px; height: 43px; border-radius: 14px; object-fit: cover; }
  #mobileMenuButton { display: flex; flex-direction: column; justify-content: center; gap: 4px; }
  #mobileMenuButton span { width: 19px; height: 2px; background: var(--ink); border-radius: 2px; }
  .mobile-menu { display: grid; position: fixed; z-index: 74; top: 72px; left: 0; right: 0; background: var(--ink); color: white; padding: 20px 4vw 27px; gap: 15px; transform: translateY(-120%); transition: .3s ease; }
  .mobile-menu.open { transform: translateY(0); }
  .mobile-menu a { font-size: 18px; font-family: "DM Serif Display", serif; }
  .topbar { padding-top: 12px; }
  .shipping-note { display: none; }
  .top-actions { width: 100%; }
  .search-shell { width: 100%; }
  .hero { grid-template-columns: 1fr; padding-bottom: 50px; }
  .hero-copy { padding-bottom: 25px; }
  .hero-art { min-height: 470px; }
  .logo-medallion { width: min(66vw, 430px); }
  .sun-disc { width: min(78vw, 540px); }
  .category-card { grid-column: span 6 !important; }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .newsletter { grid-template-columns: 1fr; }
  .footer { grid-template-columns: 1fr; }
  .footer-links { flex-wrap: wrap; }
}

@media (max-width: 620px) {
  .topbar { padding-inline: 18px; }
  .text-icon { display: none; }
  .cart-button span { display: none; }
  .hero, .section, .marquee-section, .footer { margin-left: 18px; margin-right: 18px; }
  .hero { min-height: auto; border-radius: 28px; }
  .hero-copy { padding: 48px 25px 20px; }
  .hero h1 { font-size: 56px; }
  .hero-copy > p { font-size: 14px; }
  .hero-proof { gap: 16px; flex-wrap: wrap; }
  .hero-art { min-height: 390px; }
  .logo-medallion { width: 285px; border-width: 7px; }
  .sun-disc { width: 330px; }
  .floating-card-top { right: 2%; top: 13%; }
  .floating-card-bottom { left: 1%; bottom: 11%; }
  .section { padding: 84px 0; }
  .section-head { display: block; }
  .section-head h2 { font-size: 49px; }
  .section-head > p { margin-top: 17px; }
  .category-grid { grid-template-columns: 1fr; }
  .category-card { grid-column: 1 !important; min-height: 330px; }
  .deal-stage { border-radius: 28px; padding: 37px 23px; }
  .deal-stage h2 { font-size: 50px; }
  .deal-cards { grid-template-columns: 1fr; }
  .card-pink { transform: rotate(2deg); }
  .countdown { gap: 6px; }
  .countdown div { width: 70px; height: 70px; }
  .product-head { display: block; }
  .filter-row { justify-content: flex-start; margin-top: 20px; }
  .product-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .product-image { border-radius: 18px; }
  .quick-add { transform: none; opacity: 1; min-height: 40px; font-size: 9px; }
  .product-meta { display: block; }
  .price { text-align: left; margin-top: 8px; }
  .newsletter { border-radius: 28px; padding: 38px 23px; }
  .newsletter h2 { font-size: 47px; }
  .email-row { display: grid; gap: 6px; }
  .email-row input { min-height: 48px; }
  .footer-links { gap: 15px; }
  .footer-bottom { display: grid; gap: 8px; }
  .modal { grid-template-columns: 1fr; }
  .modal-image { min-height: 340px; }
  .modal-copy { padding: 30px 24px 35px; }
  .modal h2 { font-size: 44px; }
  .cart-drawer { padding: 22px; }
}
