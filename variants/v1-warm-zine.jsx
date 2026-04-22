// V1 — Warm Creator Zine
// Warmer cream paper feel, editorial magazine rhythm, panda as hero.

const V1 = () => {
  const css = `
    .v1 { --ink: #1a1714; --ink-soft: #4a4540; --paper: #f5f0e6; --paper-2: #ebe3d2;
          --accent: #ff6b35; --accent-deep: #c94b1b; --violet: #6a3ea1; --yellow: #f5c518;
          --rule: #d9cfb8; font-family: "Pretendard", "Apple SD Gothic Neo", -apple-system, system-ui, sans-serif;
          color: var(--ink); background: var(--paper); line-height: 1.6; }
    .v1 * { box-sizing: border-box; }
    .v1 .page { padding: 48px 56px 80px; }
    .v1 .topbar { display: flex; justify-content: space-between; align-items: center;
                  padding-bottom: 18px; border-bottom: 1.5px solid var(--ink);
                  font-family: "JetBrains Mono", "SF Mono", ui-monospace, monospace;
                  font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
    .v1 .topbar .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; }
    .v1 .topbar .brand img { width: 22px; height: 22px; border-radius: 5px; }
    .v1 .topbar .meta { color: var(--ink-soft); }

    .v1 .hero { display: grid; grid-template-columns: 1.3fr 1fr; gap: 36px; align-items: center;
                padding: 56px 0 48px; border-bottom: 1.5px solid var(--ink); }
    .v1 .hero .kicker { font-family: "JetBrains Mono", ui-monospace, monospace;
                        font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
                        color: var(--accent-deep); margin-bottom: 14px; }
    .v1 .hero h1 { font-size: 88px; font-weight: 900; line-height: 0.92; margin: 0 0 18px;
                   letter-spacing: -0.04em; font-family: "Fraunces", "Playfair Display", Georgia, serif; }
    .v1 .hero h1 .accent { font-style: italic; color: var(--accent); }
    .v1 .hero h1 .u { display: inline-block; position: relative; }
    .v1 .hero h1 .u::after { content: ""; position: absolute; left: -2px; right: -2px; bottom: 4px; height: 14px;
                              background: var(--yellow); z-index: -1; border-radius: 2px; }
    .v1 .hero .sub { font-size: 18px; color: var(--ink-soft); max-width: 440px; margin: 0 0 26px; }
    .v1 .hero .cta-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .v1 .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px;
               border-radius: 999px; font-weight: 700; font-size: 14px; text-decoration: none;
               transition: transform .12s, box-shadow .15s; cursor: pointer; border: 1.5px solid var(--ink); }
    .v1 .btn.primary { background: var(--ink); color: var(--paper); }
    .v1 .btn.primary:hover { transform: translateY(-1px); box-shadow: 3px 3px 0 var(--accent); }
    .v1 .btn.ghost { background: transparent; color: var(--ink); }
    .v1 .btn.ghost:hover { background: var(--paper-2); }

    .v1 .hero-art { position: relative; aspect-ratio: 1/1; }
    .v1 .hero-art .halo { position: absolute; inset: 8%; background: var(--yellow);
                          border-radius: 50%; filter: blur(0); }
    .v1 .hero-art .halo-2 { position: absolute; inset: 22%; background: var(--accent); border-radius: 50%;
                            mix-blend-mode: multiply; opacity: .85; }
    .v1 .hero-art img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;
                        z-index: 2; filter: drop-shadow(6px 6px 0 var(--ink)); }
    .v1 .hero-art .badge { position: absolute; bottom: -6px; right: -6px; background: var(--ink);
                           color: var(--paper); padding: 10px 14px; border-radius: 999px; font-weight: 700;
                           font-size: 12px; letter-spacing: 0.08em; z-index: 3;
                           transform: rotate(-6deg); }

    .v1 .tagstrip { display: flex; gap: 24px; padding: 14px 0 32px; border-bottom: 1px dashed var(--rule);
                    font-family: "JetBrains Mono", ui-monospace, monospace;
                    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-soft); }
    .v1 .tagstrip span { display: inline-flex; align-items: center; gap: 8px; }
    .v1 .tagstrip span::before { content: ""; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }

    .v1 .section { padding: 48px 0; border-bottom: 1px solid var(--rule); }
    .v1 .section-head { display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: end;
                        margin-bottom: 28px; }
    .v1 .section-num { font-family: "Fraunces", Georgia, serif; font-weight: 900; font-size: 120px;
                       line-height: 0.8; color: var(--accent); font-style: italic; letter-spacing: -0.05em; }
    .v1 .section-num.alt { color: var(--violet); }
    .v1 .section-title { font-size: 32px; font-weight: 800; letter-spacing: -0.02em; margin: 0; }
    .v1 .section-lede { font-size: 15px; color: var(--ink-soft); margin: 6px 0 0; }

    .v1 .intro-quote { font-family: "Fraunces", Georgia, serif; font-size: 22px; line-height: 1.45;
                        font-style: italic; color: var(--ink); padding: 20px 0 8px; max-width: 620px; }
    .v1 .intro-quote strong { color: var(--accent); font-weight: 700; }

    .v1 .ok-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0; }
    .v1 .ok { padding: 16px; background: var(--paper); border: 1.5px solid var(--ink);
              border-radius: 4px; font-size: 14px; font-weight: 500; position: relative; }
    .v1 .ok::before { content: "✓"; position: absolute; top: 12px; right: 12px; width: 22px; height: 22px;
                      background: var(--yellow); border: 1.5px solid var(--ink); border-radius: 50%;
                      display: flex; align-items: center; justify-content: center; font-weight: 900;
                      font-size: 12px; color: var(--ink); }

    .v1 .sample { background: var(--paper-2); border: 1.5px solid var(--ink); border-radius: 6px;
                  padding: 28px; margin: 24px 0; text-align: center; position: relative; }
    .v1 .sample::before { content: "SAMPLE"; position: absolute; top: 10px; left: 14px;
                          font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 10px;
                          letter-spacing: 0.2em; color: var(--ink-soft); }
    .v1 .sample-row { display: inline-flex; gap: 28px; align-items: flex-end; padding: 6px 20px;
                      background: #fff; border-radius: 8px; border: 1px solid var(--ink); }
    .v1 .sample-row img { width: 140px; height: auto; display: block; }
    .v1 .sample-cap { margin-top: 14px; font-family: "Fraunces", Georgia, serif; font-style: italic;
                      font-size: 14px; color: var(--ink-soft); }

    .v1 .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; margin: 16px 0 4px;
                 border: 1.5px solid var(--ink); border-radius: 8px; overflow: hidden; background: #fff; }
    .v1 .step { padding: 20px 16px 22px; border-right: 1.5px solid var(--ink); position: relative;
                background: #fff; }
    .v1 .step:last-child { border-right: none; }
    .v1 .step .n { font-family: "Fraunces", Georgia, serif; font-weight: 900; font-size: 28px;
                   color: var(--accent); font-style: italic; line-height: 1; margin-bottom: 10px; }
    .v1 .step .t { font-size: 14px; font-weight: 800; margin-bottom: 6px; }
    .v1 .step .d { font-size: 12.5px; line-height: 1.5; color: var(--ink-soft); }
    .v1 .step:nth-child(even) { background: var(--paper); }

    .v1 .callout { display: grid; grid-template-columns: auto 1fr; gap: 18px; align-items: start;
                   padding: 20px 24px; background: var(--ink); color: var(--paper);
                   border-radius: 6px; margin: 24px 0; }
    .v1 .callout .label { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                          letter-spacing: 0.2em; color: var(--yellow); padding-top: 2px; }
    .v1 .callout .body { font-size: 14.5px; line-height: 1.6; }
    .v1 .callout code { background: rgba(255,255,255,.12); padding: 2px 8px; border-radius: 3px;
                        font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 12px;
                        color: var(--yellow); margin: 0 2px; }

    .v1 .features { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
    .v1 .feat { padding: 18px 20px; background: #fff; border: 1.5px solid var(--ink); border-radius: 6px;
                display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: start; }
    .v1 .feat .icon { width: 36px; height: 36px; background: var(--yellow); border: 1.5px solid var(--ink);
                      border-radius: 8px; display: flex; align-items: center; justify-content: center;
                      font-weight: 900; font-family: "Fraunces", Georgia, serif; font-style: italic; }
    .v1 .feat.alt .icon { background: var(--violet); color: white; }
    .v1 .feat.orange .icon { background: var(--accent); color: white; }
    .v1 .feat .name { font-weight: 800; font-size: 14.5px; margin-bottom: 2px; }
    .v1 .feat .desc { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }

    .v1 .expect { background: var(--paper-2); border-left: 4px solid var(--accent); padding: 22px 26px;
                  border-radius: 0 6px 6px 0; margin: 16px 0; }
    .v1 .expect h4 { margin: 0 0 6px; font-size: 15px; font-weight: 800;
                     font-family: "Fraunces", Georgia, serif; font-style: italic; }
    .v1 .expect h4 + h4 { margin-top: 18px; }
    .v1 .expect ul { margin: 0; padding-left: 18px; font-size: 13.5px; line-height: 1.6; color: var(--ink-soft); }

    .v1 .info { padding: 18px 22px; border: 1.5px dashed var(--ink); border-radius: 6px; margin: 16px 0;
                background: var(--paper); }
    .v1 .info .lbl { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                     letter-spacing: 0.2em; color: var(--accent-deep); margin-bottom: 6px; }
    .v1 .info strong { background: var(--yellow); padding: 0 4px; }

    .v1 .contact { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .v1 .contact .c { padding: 20px; background: #fff; border: 1.5px solid var(--ink); border-radius: 6px; }
    .v1 .contact .c h5 { margin: 0 0 6px; font-size: 14px; font-weight: 800; }
    .v1 .contact .c p { margin: 0; font-size: 13px; color: var(--ink-soft); line-height: 1.5; }

    .v1 footer { display: flex; justify-content: space-between; align-items: center;
                 padding: 28px 0 0; margin-top: 40px; border-top: 1.5px solid var(--ink);
                 font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 11px;
                 letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }
    .v1 footer .mini { display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--ink); }
    .v1 footer .mini img { width: 16px; height: 16px; border-radius: 3px; }
  `;

  return (
    <div className="v1">
      <style>{css}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,700;1,900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <div className="page">
        <header className="topbar">
          <div className="brand">
            <img src="beta-assets/popcon-icon.png" alt="" />
            <span>PopCon ∙ Beta Guide</span>
          </div>
          <div className="meta">Issue №01 · Spring 2026 · KR</div>
        </header>

        <section className="hero">
          <div>
            <div className="kicker">Closed Beta · Limited Seats</div>
            <h1>
              캐릭터 한 장,<br/>
              <span className="accent">움직이는</span> <span className="u">이모티콘</span>으로.
            </h1>
            <p className="sub">
              PopCon은 캐릭터 이미지 한 장만으로 LINE 움직이는 이모티콘 한 세트를
              자동으로 만들어주는 AI 웹 서비스입니다.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#apply">베타 신청하기 →</a>
              <a className="btn ghost" href="#flow">5단계 흐름 보기</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="halo" />
            <div className="halo-2" />
            <img src="beta-assets/sample-panda-1.png" alt="" />
            <div className="badge">AI · 4s Animated</div>
          </div>
        </section>

        <div className="tagstrip">
          <span>LINE 이모티콘</span>
          <span>AI 자동 생성</span>
          <span>24 프리셋</span>
          <span>APNG · 180×180</span>
          <span>ZIP 원클릭</span>
        </div>

        {/* Section 1 */}
        <section className="section">
          <div className="section-head">
            <div className="section-num">01</div>
            <div>
              <h2 className="section-title">PopCon이 뭔가요?</h2>
              <p className="section-lede">Pop + Icon. 캐릭터를 터뜨려 이모티콘으로.</p>
            </div>
          </div>
          <p className="intro-quote">
            "애니메이션 경험도, 디자인 툴도 필요 없습니다. <strong>아이디어와 표정 선택</strong>만으로,
            LINE Creators Market에 그대로 제출 가능한 APNG 이모티콘 세트가 나옵니다."
          </p>
          <div className="ok-grid">
            <div className="ok">애니메이션 경험 없어도 OK</div>
            <div className="ok">디자인 툴 몰라도 OK</div>
            <div className="ok">아이디어와 표정 선택만 하면 끝</div>
          </div>

          <h3 style={{fontSize: 14, fontWeight: 800, marginTop: 28, marginBottom: 4,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '.15em',
                      textTransform: 'uppercase', color: 'var(--ink-soft)'}}>
            이런 캐릭터로 시작할 수 있어요
          </h3>
          <div className="sample">
            <div className="sample-row">
              <img src="beta-assets/sample-panda-1.png" alt="" />
              <img src="beta-assets/sample-panda-2.png" alt="" />
            </div>
            <div className="sample-cap">샘플 · 하와이안 셔츠를 입은 판다</div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section" id="flow">
          <div className="section-head">
            <div className="section-num alt">02</div>
            <div>
              <h2 className="section-title">전체 흐름 · 5단계</h2>
              <p className="section-lede">준비 → 액션 → 포즈 → 애니메이션 → 다운로드</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><div className="n">1</div><div className="t">캐릭터 준비</div>
              <div className="d">업로드 또는 텍스트로 AI 생성.</div></div>
            <div className="step"><div className="n">2</div><div className="t">액션 선택</div>
              <div className="d">24개 감정/동작 프리셋 + 커스텀 프롬프트.</div></div>
            <div className="step"><div className="n">3</div><div className="t">시작 포즈 확인</div>
              <div className="d">마음에 안 들면 다시 뽑기.</div></div>
            <div className="step"><div className="n">4</div><div className="t">애니메이션 생성</div>
              <div className="d">4초 · LINE APNG 규격 자동 변환.</div></div>
            <div className="step"><div className="n">5</div><div className="t">미리보기 & 다운</div>
              <div className="d">배경 정리 후 ZIP 내려받기.</div></div>
          </div>
          <div className="callout">
            <div className="label">OUTPUT</div>
            <div className="body">
              한 번에 <strong style={{color:'var(--yellow)'}}>1~24개</strong>의 이모티콘이 나오고,
              전부 LINE 제출 규격 <code>180×180 px</code> <code>투명 배경</code> <code>300KB 이하</code>에 맞춰져 있습니다.
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section">
          <div className="section-head">
            <div className="section-num">03</div>
            <div>
              <h2 className="section-title">주요 기능 요약</h2>
              <p className="section-lede">베타에서 이미 쓸 수 있는 것들.</p>
            </div>
          </div>
          <div className="features">
            <div className="feat"><div className="icon">A</div>
              <div><div className="name">AI 캐릭터 생성</div>
              <div className="desc">그림이 없어도 텍스트만으로 캐릭터를 만들 수 있어요.</div></div></div>
            <div className="feat alt"><div className="icon">B</div>
              <div><div className="name">24가지 감정 프리셋</div>
              <div className="desc">대표 표정·동작은 클릭 한 번으로.</div></div></div>
            <div className="feat orange"><div className="icon">C</div>
              <div><div className="name">개별 이모티콘 재시도</div>
              <div className="desc">한두 개만 마음에 안 들 때, 해당 항목만 재생성.</div></div></div>
            <div className="feat alt"><div className="icon">D</div>
              <div><div className="name">배경 다듬기 (Refine)</div>
              <div className="desc">찌꺼기 픽셀·잘린 부분을 클릭 몇 번으로 정리.</div></div></div>
            <div className="feat"><div className="icon">E</div>
              <div><div className="name">작업 이어하기</div>
              <div className="desc">창을 닫아도 이전 작업을 그대로 이어서 진행.</div></div></div>
            <div className="feat orange"><div className="icon">F</div>
              <div><div className="name">원클릭 ZIP 다운로드</div>
              <div className="desc">LINE 제출에 필요한 파일이 한 번에 정리됩니다.</div></div></div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section">
          <div className="section-head">
            <div className="section-num alt">04</div>
            <div>
              <h2 className="section-title">테스터께 부탁드리는 것</h2>
              <p className="section-lede">무거운 의무는 없습니다. 아래 정도만.</p>
            </div>
          </div>
          <div className="expect">
            <h4>처음에는 한두 프리셋으로 시도해보기</h4>
            <ul>
              <li>아이디어만 있는 캐릭터 또는 평소에 그리시던 캐릭터로 직접 시도.</li>
              <li>한두 감정으로 품질 파악 후, 괜찮으면 전체 세트(24개)로 확장.</li>
              <li>점진적으로 더 많은 세트를 만들어보세요.</li>
            </ul>
            <h4>자유로운 피드백 공유</h4>
            <ul>
              <li>"이 부분이 어색하다", "이 액션도 있으면", "이 화면 헷갈렸다" 모두 환영.</li>
              <li>정제된 리포트 아니어도 OK. 메모·스크린샷·한 줄 코멘트도 큰 도움이 됩니다.</li>
            </ul>
          </div>
        </section>

        {/* Section 5 & 6 combined */}
        <section className="section">
          <div className="section-head">
            <div className="section-num">05</div>
            <div>
              <h2 className="section-title">베타 참고사항 & 문의</h2>
              <p className="section-lede">비공개 베타입니다. 소유권은 참여자 본인에게.</p>
            </div>
          </div>
          <div className="info">
            <div className="lbl">비공개 베타</div>
            생성된 캐릭터 / 이모티콘은 <strong>베타 참여자 본인의 것</strong>입니다.
            외부 공개 여부는 자유롭게 결정해주세요.
          </div>
          <div className="contact">
            <div className="c">
              <h5>버그 · 불편 · 아이디어</h5>
              <p>언제든 편하게 전달해주세요. 한 줄도 좋습니다.</p>
            </div>
            <div className="c">
              <h5>카카오 오픈톡방</h5>
              <p>개설 준비 중. 더 편리한 소통 채널은 추후 안내드립니다.</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="mini">
            <img src="beta-assets/popcon-icon.png" alt="" />
            <span>PopCon Beta Guide</span>
          </div>
          <div>© 2026 · v1 · Thank you, testers.</div>
        </footer>
      </div>
    </div>
  );
};

window.V1 = V1;
