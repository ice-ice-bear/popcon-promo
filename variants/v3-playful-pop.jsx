// V3 — Playful Pop
// Leans into the 'Pop' in PopCon: bright sunny yellow, big chunky type,
// rounded card stacks, sticker-like badges, lots of mascot usage.

const V3 = () => {
  const css = `
    .v3 { --bg: #ffd84a; --bg-2: #fff3b0; --ink: #1a1a2e; --ink-soft: #4a4a5e;
          --violet: #7c3aed; --violet-2: #a855f7; --pink: #ff5a8a; --mint: #5fe3c4;
          --paper: #fff8e0;
          font-family: "Pretendard", "Apple SD Gothic Neo", -apple-system, system-ui, sans-serif;
          color: var(--ink); background: var(--bg); line-height: 1.6; }
    .v3 * { box-sizing: border-box; }
    .v3 .page { padding: 0; overflow: hidden; }

    /* HERO */
    .v3 .hero { position: relative; padding: 40px 56px 72px;
                background:
                  radial-gradient(circle at 85% 20%, rgba(124,58,237,0.2) 0%, transparent 45%),
                  var(--bg);
                border-bottom: 3px solid var(--ink); overflow: hidden; }
    .v3 .hero .nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; }
    .v3 .hero .logo { display: flex; align-items: center; gap: 12px; font-weight: 900; font-size: 18px;
                      letter-spacing: -0.01em; }
    .v3 .hero .logo img { width: 36px; height: 36px; border-radius: 10px;
                          box-shadow: 3px 3px 0 var(--ink); }
    .v3 .hero .logo .p { color: var(--ink); }
    .v3 .hero .logo .c { color: var(--violet); }
    .v3 .hero .pill { padding: 8px 14px; background: var(--ink); color: var(--bg);
                      border-radius: 999px; font-weight: 700; font-size: 12px; letter-spacing: 0.08em;
                      text-transform: uppercase; display: inline-flex; align-items: center; gap: 8px; }
    .v3 .hero .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #5fe3c4;
                              box-shadow: 0 0 6px #5fe3c4; }

    .v3 .hero .big { position: relative; display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px;
                     align-items: center; }
    .v3 .hero h1 { font-size: 104px; font-weight: 900; line-height: 0.9; margin: 0 0 24px;
                   letter-spacing: -0.05em; font-family: "Archivo Black", "Space Grotesk", system-ui, sans-serif; }
    .v3 .hero h1 .pop-word {
      display: inline-block;
      background: var(--ink); color: var(--bg);
      padding: 2px 18px; border-radius: 16px;
      transform: rotate(-3deg);
      box-shadow: 6px 6px 0 var(--violet);
    }
    .v3 .hero h1 .v-word { color: var(--violet); font-style: italic; }
    .v3 .hero .sub { font-size: 19px; color: var(--ink); max-width: 460px; margin: 0 0 28px;
                     line-height: 1.5; font-weight: 500; }
    .v3 .hero .sub strong { background: white; padding: 1px 6px; border-radius: 4px;
                            box-shadow: 2px 2px 0 var(--ink); }
    .v3 .hero .ctas { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .v3 .btn { padding: 14px 26px; border-radius: 999px; font-weight: 800; font-size: 15px;
               text-decoration: none; cursor: pointer; border: 2.5px solid var(--ink);
               transition: transform .12s, box-shadow .15s; display: inline-flex; align-items: center; gap: 8px; }
    .v3 .btn.primary { background: var(--ink); color: white; box-shadow: 4px 4px 0 var(--violet); }
    .v3 .btn.primary:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--violet); }
    .v3 .btn.ghost { background: white; color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
    .v3 .btn.ghost:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }

    /* Hero art: panda on a disc, with floating stickers */
    .v3 .hero-art { position: relative; aspect-ratio: 1/1; }
    .v3 .hero-art .disc { position: absolute; inset: 10%; background: white; border: 3px solid var(--ink);
                          border-radius: 50%; box-shadow: 8px 8px 0 var(--ink); overflow: hidden; }
    .v3 .hero-art .disc::before { content: ""; position: absolute; inset: -20%;
                                   background: repeating-conic-gradient(from 0deg, transparent 0 10deg, rgba(124,58,237,0.08) 10deg 20deg); }
    .v3 .hero-art .disc img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;
                              padding: 12%; }
    .v3 .hero-art .sticker { position: absolute; background: white; border: 2.5px solid var(--ink);
                             border-radius: 12px; padding: 8px 14px; font-weight: 800; font-size: 13px;
                             box-shadow: 3px 3px 0 var(--ink); }
    .v3 .hero-art .st1 { top: 5%; left: -4%; transform: rotate(-8deg); background: var(--mint); }
    .v3 .hero-art .st2 { top: 14%; right: -8%; transform: rotate(6deg); background: var(--pink); color: white; }
    .v3 .hero-art .st3 { bottom: 10%; left: -6%; transform: rotate(4deg); background: var(--violet); color: white; }
    .v3 .hero-art .st4 { bottom: 2%; right: -2%; transform: rotate(-5deg); background: white; }

    /* MARQUEE strip */
    .v3 .marq { background: var(--ink); color: var(--bg); padding: 18px 0; overflow: hidden;
                border-bottom: 3px solid var(--ink); }
    .v3 .marq-track { display: flex; gap: 48px; white-space: nowrap; align-items: center;
                      font-family: "Archivo Black", system-ui, sans-serif; font-size: 22px;
                      letter-spacing: 0.02em; animation: v3marq 30s linear infinite; }
    @keyframes v3marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
    .v3 .marq .d { width: 14px; height: 14px; border-radius: 50%; background: var(--violet); flex: none; }
    .v3 .marq .d.v2 { background: var(--mint); }
    .v3 .marq .d.v3 { background: var(--pink); }

    /* Sections */
    .v3 .sec { padding: 72px 56px; border-bottom: 3px solid var(--ink); position: relative; }
    .v3 .sec.paper { background: var(--paper); }
    .v3 .sec.dark { background: var(--ink); color: var(--bg); }
    .v3 .sec-head { display: flex; align-items: baseline; gap: 20px; margin-bottom: 28px; }
    .v3 .sec-num { background: var(--ink); color: var(--bg); font-family: "Archivo Black", sans-serif;
                   font-size: 28px; font-weight: 900; width: 56px; height: 56px;
                   display: flex; align-items: center; justify-content: center; border-radius: 14px;
                   transform: rotate(-4deg); box-shadow: 4px 4px 0 var(--violet); flex: none;
                   line-height: 1; }
    .v3 .sec.paper .sec-num { background: var(--violet); box-shadow: 4px 4px 0 var(--ink); }
    .v3 .sec.dark .sec-num { background: var(--bg); color: var(--ink); box-shadow: 4px 4px 0 var(--violet); }
    .v3 .sec h2 { margin: 0; font-size: 42px; font-weight: 900; letter-spacing: -0.03em;
                  font-family: "Archivo Black", "Space Grotesk", sans-serif; line-height: 1; }
    .v3 .sec .lede { margin: 12px 0 0; font-size: 16px; color: var(--ink-soft); font-weight: 500; max-width: 560px; }
    .v3 .sec.dark .lede { color: #c0c0d0; }

    /* Section 1 */
    .v3 .intro { font-size: 20px; line-height: 1.5; max-width: 680px; margin: 16px 0 32px; font-weight: 500; }
    .v3 .intro strong { background: var(--violet); color: white; padding: 1px 8px; border-radius: 6px; }
    .v3 .ok-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
    .v3 .ok { padding: 22px 20px; background: white; border: 2.5px solid var(--ink); border-radius: 16px;
              box-shadow: 4px 4px 0 var(--ink); position: relative; font-weight: 700; font-size: 14.5px; }
    .v3 .ok .chk { position: absolute; top: -12px; right: -12px; width: 36px; height: 36px;
                   background: var(--mint); border: 2.5px solid var(--ink); border-radius: 50%;
                   display: flex; align-items: center; justify-content: center; font-weight: 900;
                   box-shadow: 2px 2px 0 var(--ink); transform: rotate(-10deg); }
    .v3 .ok:nth-child(2) .chk { background: var(--pink); color: white; }
    .v3 .ok:nth-child(3) .chk { background: var(--violet); color: white; }

    .v3 .sample { margin-top: 32px; background: white; border: 3px solid var(--ink); border-radius: 24px;
                  padding: 32px; box-shadow: 8px 8px 0 var(--ink); position: relative; text-align: center; }
    .v3 .sample .tape { position: absolute; top: -16px; left: 50%; transform: translateX(-50%) rotate(-2deg);
                        background: var(--violet); color: white; padding: 6px 22px; border-radius: 4px;
                        font-weight: 800; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
                        border: 2.5px solid var(--ink); }
    .v3 .sample .row { display: inline-flex; gap: 32px; align-items: flex-end;
                       padding: 16px 24px; background: var(--bg-2); border-radius: 16px;
                       border: 2px solid var(--ink); }
    .v3 .sample img { width: 150px; height: auto; }
    .v3 .sample .cap { margin-top: 16px; font-weight: 600; font-size: 14px; color: var(--ink-soft); }

    /* Steps — 5 chunky cards */
    .v3 .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 8px; }
    .v3 .stp { background: white; border: 2.5px solid var(--ink); border-radius: 18px;
               padding: 22px 18px 24px; box-shadow: 5px 5px 0 var(--ink); position: relative; }
    .v3 .stp:nth-child(1) { background: white; }
    .v3 .stp:nth-child(2) { background: var(--mint); }
    .v3 .stp:nth-child(3) { background: var(--bg); }
    .v3 .stp:nth-child(4) { background: var(--pink); color: white; }
    .v3 .stp:nth-child(5) { background: var(--violet); color: white; }
    .v3 .stp .n { font-family: "Archivo Black", sans-serif; font-size: 44px; font-weight: 900;
                  line-height: 1; margin-bottom: 12px; letter-spacing: -0.04em; }
    .v3 .stp .t { font-size: 16px; font-weight: 900; margin-bottom: 6px; letter-spacing: -0.01em; }
    .v3 .stp .d { font-size: 13px; line-height: 1.5; opacity: 0.9; }
    .v3 .stp .d strong { font-weight: 800; }

    .v3 .callout { margin-top: 32px; background: var(--ink); color: var(--bg); border: 3px solid var(--ink);
                   border-radius: 20px; padding: 24px 28px; box-shadow: 6px 6px 0 var(--violet);
                   display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: center; }
    .v3 .callout .tag { background: var(--violet); color: white; padding: 8px 14px; border-radius: 10px;
                        font-weight: 900; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; white-space: nowrap; }
    .v3 .callout code { background: var(--violet); color: white; padding: 3px 10px; border-radius: 6px;
                        font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 12px; margin: 0 3px; font-weight: 700; }
    .v3 .callout strong { color: var(--bg); text-decoration: underline wavy var(--violet); }

    /* Features */
    .v3 .feats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .v3 .ft { background: white; border: 2.5px solid var(--ink); border-radius: 18px;
              padding: 24px; box-shadow: 5px 5px 0 var(--ink); }
    .v3 .ft .glyph { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center;
                     justify-content: center; font-weight: 900; font-size: 22px; border: 2.5px solid var(--ink);
                     margin-bottom: 16px; font-family: "Archivo Black", sans-serif; }
    .v3 .ft .n { font-size: 17px; font-weight: 900; margin: 0 0 6px; letter-spacing: -0.01em; }
    .v3 .ft .desc { font-size: 13.5px; color: var(--ink-soft); line-height: 1.55; }
    .v3 .ft.c1 .glyph { background: var(--bg); }
    .v3 .ft.c2 .glyph { background: var(--mint); }
    .v3 .ft.c3 .glyph { background: var(--pink); color: white; }
    .v3 .ft.c4 .glyph { background: var(--violet); color: white; }
    .v3 .ft.c5 .glyph { background: white; }
    .v3 .ft.c6 .glyph { background: var(--bg-2); }

    /* Expect — stacked on dark */
    .v3 .exp-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .v3 .exp { background: var(--bg); color: var(--ink); border: 2.5px solid var(--bg);
               border-radius: 18px; padding: 24px 26px; box-shadow: 5px 5px 0 var(--violet); }
    .v3 .exp:nth-child(2) { background: var(--mint); box-shadow: 5px 5px 0 var(--pink); }
    .v3 .exp h4 { margin: 0 0 12px; font-size: 18px; font-weight: 900; letter-spacing: -0.01em; }
    .v3 .exp ul { margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.65; }
    .v3 .exp ul li + li { margin-top: 6px; }

    /* Info */
    .v3 .info-card { background: white; border: 3px solid var(--ink); border-radius: 20px;
                     padding: 26px 30px; box-shadow: 6px 6px 0 var(--violet); position: relative; }
    .v3 .info-card .tape { position: absolute; top: -14px; right: 24px; transform: rotate(4deg);
                           background: var(--pink); color: white; padding: 6px 14px; border-radius: 6px;
                           font-weight: 900; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
                           border: 2.5px solid var(--ink); }
    .v3 .info-card strong { background: var(--bg); padding: 1px 6px; border-radius: 4px; }

    /* Contact */
    .v3 .contact { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .v3 .cc { background: white; border: 2.5px solid var(--ink); border-radius: 18px;
              padding: 24px 26px; box-shadow: 5px 5px 0 var(--ink); }
    .v3 .cc .ic { width: 44px; height: 44px; background: var(--violet); color: white;
                  border-radius: 12px; border: 2.5px solid var(--ink); display: flex;
                  align-items: center; justify-content: center; font-weight: 900; font-size: 20px;
                  margin-bottom: 12px; font-family: "Archivo Black", sans-serif; }
    .v3 .cc:nth-child(2) .ic { background: var(--mint); color: var(--ink); }
    .v3 .cc h5 { margin: 0 0 6px; font-size: 16px; font-weight: 900; }
    .v3 .cc p { margin: 0; color: var(--ink-soft); font-size: 13.5px; }

    .v3 footer { padding: 32px 56px; background: var(--ink); color: var(--bg);
                 display: flex; justify-content: space-between; align-items: center;
                 font-size: 13px; font-weight: 600; }
    .v3 footer .m { display: flex; align-items: center; gap: 10px; }
    .v3 footer img { width: 22px; height: 22px; border-radius: 6px; }
    .v3 footer .p { color: var(--bg); font-weight: 900; }
    .v3 footer .c { color: var(--violet-2); font-weight: 900; }
  `;

  return (
    <div className="v3">
      <style>{css}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />

      <div className="page">
        <section className="hero">
          <div className="nav">
            <div className="logo">
              <img src="beta-assets/popcon-icon.png" alt="" />
              <span><span className="p">Pop</span><span className="c">Con</span></span>
            </div>
            <div className="pill">Closed Beta · 2026</div>
          </div>

          <div className="big">
            <div>
              <h1>
                <span className="pop-word">Pop!</span> your<br/>
                character into<br/>
                <span className="v-word">sticker magic.</span>
              </h1>
              <p className="sub">
                캐릭터 이미지 <strong>한 장</strong>만 있으면 LINE 움직이는 이모티콘 한 세트를
                AI가 자동으로 만들어드려요.
              </p>
              <div className="ctas">
                <a className="btn primary" href="#apply">베타 신청 →</a>
                <a className="btn ghost" href="#flow">어떻게 동작해요?</a>
              </div>
            </div>
            <div className="hero-art">
              <div className="disc">
                <img src="beta-assets/sample-panda-1.png" alt="" />
              </div>
              <span className="sticker st1">✦ AI 생성</span>
              <span className="sticker st2">24 프리셋</span>
              <span className="sticker st3">APNG · 4s</span>
              <span className="sticker st4">LINE 규격 ✓</span>
            </div>
          </div>
        </section>

        <div className="marq">
          <div className="marq-track">
            <span>MAKE IT POP</span><span className="d"></span>
            <span>LINE 이모티콘</span><span className="d v2"></span>
            <span>AI 생성 ✦</span><span className="d v3"></span>
            <span>24 감정 프리셋</span><span className="d"></span>
            <span>APNG 180×180</span><span className="d v2"></span>
            <span>ZIP 원클릭</span><span className="d v3"></span>
            <span>MAKE IT POP</span><span className="d"></span>
            <span>LINE 이모티콘</span><span className="d v2"></span>
            <span>AI 생성 ✦</span><span className="d v3"></span>
            <span>24 감정 프리셋</span><span className="d"></span>
            <span>APNG 180×180</span><span className="d v2"></span>
            <span>ZIP 원클릭</span><span className="d v3"></span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="sec">
          <div className="sec-head">
            <div className="sec-num">01</div>
            <div>
              <h2>PopCon이 뭔가요?</h2>
              <p className="lede">Pop + Icon. 캐릭터 터뜨려서 이모티콘으로.</p>
            </div>
          </div>
          <p className="intro">
            <strong>PopCon</strong>은 캐릭터 이미지 한 장만 있으면
            LINE 움직이는 이모티콘 한 세트를 자동으로 만들어주는 AI 웹 서비스입니다.
            최종 결과물은 LINE Creators Market에 그대로 제출 가능한 APNG ZIP 파일.
          </p>
          <div className="ok-row">
            <div className="ok">애니메이션 경험 없어도 OK <span className="chk">✓</span></div>
            <div className="ok">디자인 툴 몰라도 OK <span className="chk">✓</span></div>
            <div className="ok">아이디어·표정 선택만 하면 끝 <span className="chk">✓</span></div>
          </div>

          <div className="sample">
            <div className="tape">Sample Characters</div>
            <div className="row">
              <img src="beta-assets/sample-panda-1.png" alt="" />
              <img src="beta-assets/sample-panda-2.png" alt="" />
            </div>
            <div className="cap">샘플 · 하와이안 셔츠를 입은 판다</div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="sec paper" id="flow">
          <div className="sec-head">
            <div className="sec-num">02</div>
            <div>
              <h2>어떻게 동작해요?</h2>
              <p className="lede">딱 5단계. 한 시간이면 세트 완성.</p>
            </div>
          </div>
          <div className="steps">
            <div className="stp"><div className="n">1</div><div className="t">캐릭터 준비</div>
              <div className="d">이미지 업로드 또는 텍스트로 AI 생성.</div></div>
            <div className="stp"><div className="n">2</div><div className="t">액션 선택</div>
              <div className="d"><strong>24개 프리셋</strong> + 커스텀 프롬프트.</div></div>
            <div className="stp"><div className="n">3</div><div className="t">포즈 확인</div>
              <div className="d">마음에 안 들면 다시 뽑기.</div></div>
            <div className="stp"><div className="n">4</div><div className="t">애니 생성</div>
              <div className="d">4초 움직임 → APNG 자동 변환.</div></div>
            <div className="stp"><div className="n">5</div><div className="t">ZIP 다운</div>
              <div className="d">정리 후 한 번에 내려받기.</div></div>
          </div>
          <div className="callout">
            <div className="tag">OUTPUT</div>
            <div>한 번에 <strong>1~24개</strong>의 이모티콘이 나오고, 전부 LINE 제출 규격
              <code>180×180 px</code><code>투명 배경</code><code>300KB 이하</code>에 맞춰져 있습니다.</div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="sec">
          <div className="sec-head">
            <div className="sec-num">03</div>
            <div>
              <h2>주요 기능</h2>
              <p className="lede">베타에서 이미 쓸 수 있는 것들.</p>
            </div>
          </div>
          <div className="feats">
            <div className="ft c1"><div className="glyph">A</div>
              <div className="n">AI 캐릭터 생성</div>
              <div className="desc">그림이 없어도 텍스트만으로 캐릭터를 만들 수 있어요.</div></div>
            <div className="ft c2"><div className="glyph">B</div>
              <div className="n">24가지 감정 프리셋</div>
              <div className="desc">대표 표정·동작은 클릭 한 번으로.</div></div>
            <div className="ft c3"><div className="glyph">C</div>
              <div className="n">개별 재시도</div>
              <div className="desc">한두 개만 마음에 안 들 때 해당 항목만 재생성.</div></div>
            <div className="ft c4"><div className="glyph">D</div>
              <div className="n">배경 Refine</div>
              <div className="desc">찌꺼기 픽셀·잘린 부분을 클릭 몇 번으로 정리.</div></div>
            <div className="ft c5"><div className="glyph">E</div>
              <div className="n">작업 이어하기</div>
              <div className="desc">창을 닫아도 이전 작업을 그대로 이어서 진행.</div></div>
            <div className="ft c6"><div className="glyph">F</div>
              <div className="n">원클릭 ZIP</div>
              <div className="desc">LINE 제출에 필요한 파일이 한 번에 정리됩니다.</div></div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="sec dark">
          <div className="sec-head">
            <div className="sec-num">04</div>
            <div>
              <h2>부탁드리는 것</h2>
              <p className="lede">무거운 의무는 없어요. 아래 정도만.</p>
            </div>
          </div>
          <div className="exp-wrap">
            <div className="exp">
              <h4>🌱 처음엔 한두 프리셋으로</h4>
              <ul>
                <li>아이디어만 있는 캐릭터 또는 평소 그리시던 캐릭터로 시도.</li>
                <li>한두 감정으로 품질 파악 → 괜찮으면 전체 세트(24개).</li>
                <li>점진적으로 더 많은 세트도 OK.</li>
              </ul>
            </div>
            <div className="exp">
              <h4>💬 자유로운 피드백</h4>
              <ul>
                <li>"이 부분이 어색", "이런 액션 있으면", "이 화면 헷갈림" 모두 환영.</li>
                <li>정제된 리포트 아니어도 OK. 메모·스크린샷·한 줄 코멘트도 큰 도움.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="sec paper">
          <div className="sec-head">
            <div className="sec-num">05</div>
            <div>
              <h2>베타 참고사항</h2>
              <p className="lede">비공개 베타입니다.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="tape">Private Beta</div>
            생성된 캐릭터 / 이모티콘은 <strong>베타 참여자 본인의 것</strong>입니다.
            외부 공개 여부는 자유롭게 결정해주세요.
          </div>
        </section>

        {/* Section 6 */}
        <section className="sec">
          <div className="sec-head">
            <div className="sec-num">06</div>
            <div>
              <h2>문의 & 피드백</h2>
              <p className="lede">편하게 연락주세요.</p>
            </div>
          </div>
          <div className="contact">
            <div className="cc"><div className="ic">!</div>
              <h5>버그 · 불편 · 아이디어</h5>
              <p>언제든 편하게 전달해주세요. 한 줄도 큰 도움이 됩니다.</p></div>
            <div className="cc"><div className="ic">#</div>
              <h5>카카오 오픈톡방</h5>
              <p>개설 준비 중. 더 편리한 소통 채널은 추후 안내드립니다.</p></div>
          </div>
        </section>

        <footer>
          <div className="m">
            <img src="beta-assets/popcon-icon.png" alt="" />
            <span><span className="p">Pop</span><span className="c">Con</span> Beta Guide</span>
          </div>
          <span>© 2026 · v1 · Made with POP</span>
        </footer>
      </div>
    </div>
  );
};

window.V3 = V3;
