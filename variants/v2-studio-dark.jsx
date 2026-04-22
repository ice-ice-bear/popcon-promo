// V2 — Studio Dark
// Elevated version of the existing dark/navy direction:
// - Split hero with mascot, poster-sized section numerals
// - Sticky section rail on left, asymmetric grids
// - More rhythm: alternating dark/mid-tone bands

const V2 = () => {
  const css = `
    .v2 { --bg: #0a0a12; --bg-2: #12121e; --bg-3: #1a1a2a; --line: #26263a;
          --ink: #f5f5f7; --ink-dim: #9a9ab0;
          --yellow: #ffd400; --violet: #b580ff; --violet-deep: #7c3aed;
          font-family: "Pretendard", "Apple SD Gothic Neo", -apple-system, system-ui, sans-serif;
          color: var(--ink); background: var(--bg); line-height: 1.65; }
    .v2 * { box-sizing: border-box; }
    .v2 .shell { display: grid; grid-template-columns: 180px 1fr; min-height: 100%; }
    .v2 .rail { position: sticky; top: 0; align-self: start; padding: 28px 20px;
                border-right: 1px solid var(--line); height: 100%; }
    .v2 .rail .mark { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; }
    .v2 .rail .mark img { width: 26px; height: 26px; border-radius: 6px; }
    .v2 .rail .mark b { font-weight: 800; letter-spacing: -0.01em; }
    .v2 .rail .mark b .p { color: var(--yellow); }
    .v2 .rail .mark b .c { color: var(--violet); }
    .v2 .rail nav { display: flex; flex-direction: column; gap: 2px; font-family: "JetBrains Mono", ui-monospace, monospace;
                    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
    .v2 .rail nav a { color: var(--ink-dim); text-decoration: none; padding: 8px 8px;
                      border-radius: 4px; display: flex; align-items: center; gap: 10px; }
    .v2 .rail nav a:hover { color: var(--ink); background: var(--bg-2); }
    .v2 .rail nav a .n { color: var(--yellow); font-weight: 700; width: 22px; }
    .v2 .rail .foot { position: absolute; bottom: 24px; left: 20px; right: 20px;
                      font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 10px;
                      color: var(--ink-dim); letter-spacing: 0.1em; text-transform: uppercase; }

    .v2 main { min-width: 0; }

    /* Hero */
    .v2 .hero { position: relative; padding: 60px 56px 48px; border-bottom: 1px solid var(--line);
                background:
                  radial-gradient(ellipse 600px 400px at 85% 30%, rgba(181,128,255,0.18), transparent 60%),
                  radial-gradient(ellipse 500px 400px at 10% 90%, rgba(255,212,0,0.08), transparent 55%),
                  var(--bg); overflow: hidden; }
    .v2 .hero .grid { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: center; position: relative; z-index: 2; }
    .v2 .hero .kicker { display: inline-flex; align-items: center; gap: 10px;
                        font-family: "JetBrains Mono", ui-monospace, monospace;
                        font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
                        color: var(--yellow); padding: 6px 10px; border: 1px solid var(--yellow);
                        border-radius: 999px; margin-bottom: 22px; }
    .v2 .hero .kicker::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--yellow);
                                 box-shadow: 0 0 8px var(--yellow); animation: v2pulse 2s ease-in-out infinite; }
    @keyframes v2pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
    .v2 .hero h1 { font-size: 72px; font-weight: 900; line-height: 0.98; margin: 0 0 20px;
                   letter-spacing: -0.03em; }
    .v2 .hero h1 em { font-style: normal; background: linear-gradient(100deg, var(--yellow), var(--violet));
                      -webkit-background-clip: text; background-clip: text; color: transparent; }
    .v2 .hero p { font-size: 17px; color: var(--ink-dim); max-width: 520px; margin: 0 0 28px; }
    .v2 .hero .ctas { display: flex; gap: 10px; flex-wrap: wrap; }
    .v2 .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px;
               border-radius: 999px; font-weight: 700; font-size: 14px; text-decoration: none;
               transition: transform .12s, background .15s; cursor: pointer; border: 1px solid transparent; }
    .v2 .btn.primary { background: var(--yellow); color: #0a0a12; }
    .v2 .btn.primary:hover { transform: translateY(-1px); background: #fff000; }
    .v2 .btn.ghost { background: transparent; color: var(--ink); border-color: var(--line); }
    .v2 .btn.ghost:hover { background: var(--bg-2); border-color: var(--ink-dim); }

    .v2 .hero-art { position: relative; aspect-ratio: 1/1; }
    .v2 .hero-art .disk { position: absolute; inset: 0; border-radius: 50%;
                          background: conic-gradient(from 140deg, var(--violet-deep), var(--yellow), var(--violet)); filter: blur(30px); opacity: .55; }
    .v2 .hero-art .frame { position: absolute; inset: 14%;
                           background: rgba(255,255,255,0.04); border: 1px solid var(--line);
                           border-radius: 24px; overflow: hidden; backdrop-filter: blur(8px); }
    .v2 .hero-art .frame img { width: 100%; height: 100%; object-fit: contain; padding: 10px;
                               filter: drop-shadow(0 14px 30px rgba(0,0,0,0.5)); }
    .v2 .hero-art .chip { position: absolute; padding: 6px 10px; border-radius: 999px;
                          font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 10px;
                          letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700;
                          background: rgba(0,0,0,0.6); border: 1px solid var(--line); color: var(--ink); backdrop-filter: blur(8px); }
    .v2 .hero-art .c1 { top: 8%; left: -4%; background: var(--yellow); color: #0a0a12; border-color: var(--yellow); }
    .v2 .hero-art .c2 { bottom: 16%; right: -6%; background: var(--violet); color: #0a0a12; border-color: var(--violet); }
    .v2 .hero-art .c3 { top: 55%; left: -10%; }

    .v2 .tags-row { display: flex; gap: 12px; padding: 18px 56px; border-bottom: 1px solid var(--line);
                    background: var(--bg-2); }
    .v2 .tags-row .t { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                       letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-dim);
                       padding: 6px 12px; border: 1px solid var(--line); border-radius: 4px; }

    /* Sections */
    .v2 .sec { padding: 72px 56px; border-bottom: 1px solid var(--line); position: relative; }
    .v2 .sec.alt { background: var(--bg-2); }
    .v2 .sec-head { display: grid; grid-template-columns: 160px 1fr; gap: 32px; margin-bottom: 40px; align-items: start; }
    .v2 .sec-num { font-size: 140px; font-weight: 900; line-height: 0.8; letter-spacing: -0.06em;
                   background: linear-gradient(180deg, var(--yellow), transparent 110%);
                   -webkit-background-clip: text; background-clip: text; color: transparent;
                   font-family: "Space Grotesk", -apple-system, system-ui, sans-serif; }
    .v2 .sec-num.v { background: linear-gradient(180deg, var(--violet), transparent 110%);
                     -webkit-background-clip: text; background-clip: text; color: transparent; }
    .v2 .sec-head h2 { margin: 14px 0 4px; font-size: 34px; font-weight: 800; letter-spacing: -0.02em; }
    .v2 .sec-head p { margin: 0; color: var(--ink-dim); font-size: 15px; max-width: 560px; }

    /* Section 1 */
    .v2 .intro-card { background: var(--bg-2); border: 1px solid var(--line); border-radius: 12px;
                      padding: 28px 32px; margin-bottom: 24px; font-size: 16px; line-height: 1.65; }
    .v2 .intro-card strong { color: var(--yellow); font-weight: 700; }
    .v2 .ok-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 16px 0; }
    .v2 .ok { padding: 18px 20px; background: var(--bg-3); border: 1px solid var(--line);
              border-radius: 10px; font-size: 14px; display: grid; grid-template-columns: 22px 1fr; gap: 10px;
              align-items: start; }
    .v2 .ok .dot { width: 22px; height: 22px; border-radius: 50%; background: var(--yellow);
                   color: #0a0a12; display: flex; align-items: center; justify-content: center;
                   font-weight: 900; font-size: 13px; }

    .v2 .sample-wrap { margin-top: 28px; }
    .v2 .sample-wrap .lbl { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                            letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-dim);
                            margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
    .v2 .sample-wrap .lbl::before { content: ""; width: 20px; height: 1px; background: var(--yellow); }
    .v2 .sample { display: flex; gap: 0; background: #fff; border-radius: 12px; border: 1px solid var(--line);
                  padding: 20px; justify-content: center; align-items: flex-end; gap: 30px; }
    .v2 .sample img { width: 160px; height: auto; display: block; }

    /* Steps — vertical rail with pose previews */
    .v2 .timeline { position: relative; display: flex; flex-direction: column; gap: 0; padding-left: 0; }
    .v2 .tl-item { display: grid; grid-template-columns: 72px 1fr 220px; gap: 24px; align-items: stretch;
                   padding: 24px 0; border-top: 1px solid var(--line); }
    .v2 .tl-item:last-child { border-bottom: 1px solid var(--line); }
    .v2 .tl-num { display: flex; flex-direction: column; align-items: center; }
    .v2 .tl-num .big { font-family: "Space Grotesk", system-ui, sans-serif; font-size: 52px; font-weight: 800;
                       color: var(--yellow); line-height: 1; letter-spacing: -0.04em; }
    .v2 .tl-item:nth-child(even) .tl-num .big { color: var(--violet); }
    .v2 .tl-body h4 { margin: 4px 0 6px; font-size: 20px; font-weight: 800; letter-spacing: -0.01em; }
    .v2 .tl-body p { margin: 0; color: var(--ink-dim); font-size: 14.5px; line-height: 1.6; max-width: 520px; }
    .v2 .tl-body strong { color: var(--yellow); }
    .v2 .tl-side { display: flex; align-items: center; justify-content: center;
                   background: linear-gradient(135deg, var(--bg-3), var(--bg-2)); border-radius: 10px;
                   border: 1px solid var(--line); min-height: 120px; position: relative; overflow: hidden;
                   font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 10px;
                   letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-dim); }
    .v2 .tl-side img { max-width: 90%; max-height: 110%; object-fit: contain;
                       filter: drop-shadow(0 4px 14px rgba(0,0,0,0.5)); }
    .v2 .tl-side .ph { padding: 20px; text-align: center; }

    .v2 .callout { display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: start;
                   background: linear-gradient(135deg, rgba(181,128,255,0.14), rgba(255,212,0,0.06));
                   border: 1px solid var(--violet); border-left-width: 4px;
                   border-radius: 10px; padding: 22px 26px; margin-top: 28px; }
    .v2 .callout .pill { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 10px;
                         letter-spacing: 0.2em; color: var(--yellow); padding-top: 4px; }
    .v2 .callout code { background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;
                        font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 12px;
                        color: var(--yellow); margin: 0 2px; }

    /* Features — bento */
    .v2 .bento { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: repeat(2, auto);
                 gap: 12px; }
    .v2 .bt { padding: 22px 24px; background: var(--bg-2); border: 1px solid var(--line);
              border-radius: 14px; position: relative; overflow: hidden; min-height: 140px; }
    .v2 .bt.big { grid-row: span 2; background: linear-gradient(160deg, var(--bg-3), var(--bg-2));
                   border-color: var(--violet-deep); }
    .v2 .bt .idx { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px; color: var(--ink-dim);
                   letter-spacing: 0.15em; margin-bottom: 10px; }
    .v2 .bt h5 { margin: 0 0 6px; font-size: 16px; font-weight: 800; color: var(--yellow); }
    .v2 .bt.v h5 { color: var(--violet); }
    .v2 .bt p { margin: 0; font-size: 13.5px; color: var(--ink-dim); line-height: 1.55; }
    .v2 .bt .glyph { position: absolute; right: 14px; top: 14px; width: 28px; height: 28px;
                     border: 1px solid var(--line); border-radius: 6px; display: flex; align-items: center;
                     justify-content: center; font-family: "Space Grotesk"; font-weight: 800; font-size: 13px;
                     color: var(--ink-dim); }
    .v2 .bt.big h5 { font-size: 22px; }
    .v2 .bt.big p { font-size: 14.5px; max-width: 320px; }

    /* Expect */
    .v2 .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .v2 .exp { background: var(--bg-3); border: 1px solid var(--line); border-radius: 12px;
               padding: 24px 26px; }
    .v2 .exp h5 { margin: 0 0 10px; font-size: 15px; color: var(--yellow); font-weight: 800;
                  letter-spacing: 0.02em; }
    .v2 .exp ul { margin: 0; padding-left: 18px; color: var(--ink-dim); font-size: 13.5px; line-height: 1.65; }
    .v2 .exp ul li::marker { color: var(--violet); }

    /* Info + contact */
    .v2 .info { background: var(--bg-3); border: 1px solid var(--line); border-left: 3px solid var(--yellow);
                border-radius: 0 10px 10px 0; padding: 22px 26px; margin-bottom: 20px; }
    .v2 .info .l { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                   letter-spacing: 0.2em; color: var(--yellow); margin-bottom: 8px; }
    .v2 .info strong { color: var(--yellow); }

    .v2 .contact { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .v2 .contact .c { padding: 22px 24px; background: var(--bg-2); border: 1px solid var(--line);
                      border-radius: 10px; }
    .v2 .contact .c .ic { width: 32px; height: 32px; background: var(--yellow); color: #0a0a12;
                          border-radius: 8px; display: flex; align-items: center; justify-content: center;
                          font-weight: 900; margin-bottom: 12px; font-family: "Space Grotesk"; }
    .v2 .contact .c.v .ic { background: var(--violet); }
    .v2 .contact .c h5 { margin: 0 0 4px; font-size: 15px; font-weight: 800; }
    .v2 .contact .c p { margin: 0; color: var(--ink-dim); font-size: 13.5px; }

    .v2 footer { padding: 24px 56px; display: flex; justify-content: space-between; align-items: center;
                 color: var(--ink-dim); font-family: "JetBrains Mono", ui-monospace, monospace;
                 font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
    .v2 footer .brand { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); }
    .v2 footer .brand img { width: 18px; height: 18px; border-radius: 4px; }
  `;

  return (
    <div className="v2">
      <style>{css}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <div className="shell">
        <aside className="rail">
          <div className="mark">
            <img src="beta-assets/popcon-icon.png" alt="" />
            <b><span className="p">Pop</span><span className="c">Con</span></b>
          </div>
          <nav>
            <a href="#s1"><span className="n">01</span>Overview</a>
            <a href="#s2"><span className="n">02</span>Flow</a>
            <a href="#s3"><span className="n">03</span>Features</a>
            <a href="#s4"><span className="n">04</span>Asks</a>
            <a href="#s5"><span className="n">05</span>Notes</a>
            <a href="#s6"><span className="n">06</span>Contact</a>
          </nav>
          <div className="foot">Beta · 2026 · v1</div>
        </aside>

        <main>
          <section className="hero">
            <div className="grid">
              <div>
                <div className="kicker">Closed Beta · 2026</div>
                <h1>
                  한 장이면,<br/>
                  <em>움직이는 이모티콘</em>.
                </h1>
                <p>캐릭터 이미지 한 장만 있으면 LINE 움직이는 이모티콘 한 세트를
                   AI가 자동으로 만들어줍니다. 애니메이션도, 디자인 툴도 필요 없어요.</p>
                <div className="ctas">
                  <a className="btn primary" href="#apply">베타 신청 →</a>
                  <a className="btn ghost" href="#s2">5단계 흐름 보기</a>
                </div>
              </div>
              <div className="hero-art">
                <div className="disk" />
                <div className="frame"><img src="beta-assets/sample-panda-1.png" alt="" /></div>
                <span className="chip c1">APNG · 180×180</span>
                <span className="chip c2">24 presets</span>
                <span className="chip c3">LINE-ready</span>
              </div>
            </div>
          </section>

          <div className="tags-row">
            <span className="t">LINE 이모티콘</span>
            <span className="t">AI 자동생성</span>
            <span className="t">24 프리셋</span>
            <span className="t">APNG 규격</span>
            <span className="t">ZIP 원클릭</span>
          </div>

          <section className="sec" id="s1">
            <div className="sec-head">
              <div className="sec-num">01</div>
              <div>
                <h2>PopCon이 뭔가요?</h2>
                <p>Pop + Icon. 캐릭터 한 장을 LINE 제출 규격 APNG 이모티콘 세트로 바꿔주는 AI 웹 서비스입니다.</p>
              </div>
            </div>
            <div className="intro-card">
              최종 결과물은 LINE Creators Market에 그대로 제출할 수 있는 <strong>APNG 이모티콘 파일 묶음(ZIP)</strong>입니다.
              아이디어와 표정 선택만 하면 끝나요.
            </div>
            <div className="ok-row">
              <div className="ok"><span className="dot">✓</span><span>애니메이션 경험 없어도 OK</span></div>
              <div className="ok"><span className="dot">✓</span><span>디자인 툴 몰라도 OK</span></div>
              <div className="ok"><span className="dot">✓</span><span>아이디어·표정 선택만 하면 끝</span></div>
            </div>
            <div className="sample-wrap">
              <div className="lbl">샘플 캐릭터</div>
              <div className="sample">
                <img src="beta-assets/sample-panda-1.png" alt="" />
                <img src="beta-assets/sample-panda-2.png" alt="" />
              </div>
            </div>
          </section>

          <section className="sec alt" id="s2">
            <div className="sec-head">
              <div className="sec-num v">02</div>
              <div>
                <h2>전체 흐름 · 5단계</h2>
                <p>한 시간이면 나만의 이모티콘 세트가 완성됩니다.</p>
              </div>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-num"><div className="big">1</div></div>
                <div className="tl-body"><h4>캐릭터 준비</h4>
                  <p>이미지를 직접 업로드하거나, 텍스트로 설명해서 AI가 생성합니다.</p></div>
                <div className="tl-side"><img src="beta-assets/sample-panda-1.png" alt="" /></div>
              </div>
              <div className="tl-item">
                <div className="tl-num"><div className="big">2</div></div>
                <div className="tl-body"><h4>액션 선택</h4>
                  <p>행복, 춤, 울기, 사랑, 인사 등 <strong>24개의 감정/동작 프리셋</strong> 중 원하는 것을 고르거나,
                     직접 프롬프트를 써서 커스텀 액션도 가능합니다.</p></div>
                <div className="tl-side"><div className="ph">24 PRESETS<br/>+ CUSTOM PROMPT</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-num"><div className="big">3</div></div>
                <div className="tl-body"><h4>시작 포즈 확인</h4>
                  <p>각 액션별로 캐릭터의 첫 포즈가 생성됩니다. 마음에 들지 않는 포즈는 다시 뽑을 수 있어요.</p></div>
                <div className="tl-side"><img src="beta-assets/sample-panda-1-pose.png" alt="" /></div>
              </div>
              <div className="tl-item">
                <div className="tl-num"><div className="big">4</div></div>
                <div className="tl-body"><h4>애니메이션 생성</h4>
                  <p>승인한 포즈를 바탕으로 <strong>4초짜리 움직임</strong>이 만들어지고,
                     자동으로 LINE 규격의 APNG 프레임으로 변환됩니다. 진행 상황은 실시간으로 보입니다.</p></div>
                <div className="tl-side"><div className="ph">4s · APNG<br/>LIVE PROGRESS</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-num"><div className="big">5</div></div>
                <div className="tl-body"><h4>미리보기 & 다운로드</h4>
                  <p>완성된 이모티콘을 확인하고, 필요하면 배경이나 가장자리를 다듬은 뒤 ZIP으로 내려받습니다.</p></div>
                <div className="tl-side"><div className="ph">ZIP · LINE-READY</div></div>
              </div>
            </div>
            <div className="callout">
              <div className="pill">OUTPUT SPEC</div>
              <div>한 번에 <strong style={{color:'var(--yellow)'}}>1~24개</strong>의 이모티콘이 나오고,
                   전부 LINE 제출 규격 <code>180×180 px</code> <code>투명 배경</code> <code>300KB 이하</code>에 맞춰져 있습니다.
              </div>
            </div>
          </section>

          <section className="sec" id="s3">
            <div className="sec-head">
              <div className="sec-num">03</div>
              <div>
                <h2>주요 기능 요약</h2>
                <p>베타에서 이미 쓸 수 있는 것들.</p>
              </div>
            </div>
            <div className="bento">
              <div className="bt big"><div className="idx">FEATURE · 01</div>
                <span className="glyph">A</span>
                <h5>AI 캐릭터 생성</h5>
                <p>그림이 없어도 텍스트만으로 캐릭터를 만들 수 있어요. 이미지 업로드도 물론 OK.</p></div>
              <div className="bt v"><div className="idx">FEATURE · 02</div>
                <span className="glyph">B</span>
                <h5>24가지 프리셋</h5>
                <p>대표적인 표정·동작은 클릭 한 번으로.</p></div>
              <div className="bt"><div className="idx">FEATURE · 03</div>
                <span className="glyph">C</span>
                <h5>개별 재시도</h5>
                <p>한두 개만 마음에 안 들 때 해당 항목만 재생성.</p></div>
              <div className="bt v"><div className="idx">FEATURE · 04</div>
                <span className="glyph">D</span>
                <h5>배경 Refine</h5>
                <p>찌꺼기 픽셀·잘린 부분을 클릭 몇 번으로 정리.</p></div>
              <div className="bt"><div className="idx">FEATURE · 05</div>
                <span className="glyph">E</span>
                <h5>작업 이어하기</h5>
                <p>창을 닫아도 이전 작업을 그대로 이어서 진행.</p></div>
              <div className="bt v"><div className="idx">FEATURE · 06</div>
                <span className="glyph">F</span>
                <h5>원클릭 ZIP</h5>
                <p>LINE 제출에 필요한 파일이 한 번에 정리됩니다.</p></div>
            </div>
          </section>

          <section className="sec alt" id="s4">
            <div className="sec-head">
              <div className="sec-num v">04</div>
              <div>
                <h2>테스터께 부탁드리는 것</h2>
                <p>무거운 의무는 없습니다. 아래 정도만.</p>
              </div>
            </div>
            <div className="two-col">
              <div className="exp">
                <h5>처음에는 한두 프리셋으로</h5>
                <ul>
                  <li>아이디어만 있는 캐릭터 또는 평소에 그리시던 캐릭터로 직접 시도.</li>
                  <li>한두 감정으로 품질 파악 후, 괜찮으면 전체 세트(24개)로 확장.</li>
                  <li>점진적으로 더 많은 세트를 만들어봐도 좋습니다.</li>
                </ul>
              </div>
              <div className="exp">
                <h5>자유로운 피드백 공유</h5>
                <ul>
                  <li>"이 부분이 어색하다", "이런 액션이 있으면", "이 화면이 헷갈렸다" 모두 환영.</li>
                  <li>정제된 리포트 아니어도 OK. 메모·스크린샷·한 줄 코멘트도 큰 도움.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="sec" id="s5">
            <div className="sec-head">
              <div className="sec-num">05</div>
              <div>
                <h2>베타 참고사항</h2>
                <p>비공개 베타입니다.</p>
              </div>
            </div>
            <div className="info">
              <div className="l">비공개 베타</div>
              생성된 캐릭터 / 이모티콘은 <strong>베타 참여자 본인의 것</strong>입니다.
              외부 공개 여부는 자유롭게 결정해주세요.
            </div>
          </section>

          <section className="sec alt" id="s6">
            <div className="sec-head">
              <div className="sec-num v">06</div>
              <div>
                <h2>문의 & 피드백</h2>
                <p>편하게 연락주세요.</p>
              </div>
            </div>
            <div className="contact">
              <div className="c"><div className="ic">!</div>
                <h5>버그 · 불편 · 아이디어</h5>
                <p>언제든 편하게 전달해주세요. 한 줄도 큰 도움이 됩니다.</p></div>
              <div className="c v"><div className="ic">#</div>
                <h5>카카오 오픈톡방</h5>
                <p>개설 준비 중. 더 편리한 소통 채널은 추후 안내드립니다.</p></div>
            </div>
          </section>

          <footer>
            <span className="brand">
              <img src="beta-assets/popcon-icon.png" alt="" />
              <span>PopCon Beta Guide</span>
            </span>
            <span>© 2026 · v1</span>
          </footer>
        </main>
      </div>
    </div>
  );
};

window.V2 = V2;
