import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";var r=e(t(),1),i=n();function a(){let e=(0,r.useMemo)(()=>Array.from({length:18},(e,t)=>({left:t*53%100,size:5+t*7%9,delay:t%9*1.3,dur:9+t*3%8,gold:t%3==0})),[]);return(0,i.jsxs)(`div`,{className:`c7-backdrop`,"aria-hidden":!0,children:[(0,i.jsx)(`div`,{className:`c7-bd-base`}),(0,i.jsx)(`div`,{className:`c7-bd-blob c7-bd-blob--pink`}),(0,i.jsx)(`div`,{className:`c7-bd-blob c7-bd-blob--cyan`}),(0,i.jsx)(`div`,{className:`c7-bd-blob c7-bd-blob--gold`}),(0,i.jsx)(`div`,{className:`c7-bd-beam`}),(0,i.jsx)(`div`,{className:`c7-bd-sparkles`,children:e.map((e,t)=>(0,i.jsx)(`span`,{className:`c7-bd-spark`,style:{left:`${e.left}%`,width:e.size,height:e.size,animationDelay:`${e.delay}s`,animationDuration:`${e.dur}s`,background:e.gold?`var(--c7-gold)`:`var(--c7-primary)`,boxShadow:e.gold?`0 0 8px rgba(var(--c7-gold-rgb),0.9)`:`0 0 8px rgba(var(--c7-primary-rgb),0.9)`}},t))}),(0,i.jsx)(`div`,{className:`c7-bd-vignette`}),(0,i.jsx)(`style`,{children:`
        .c7-backdrop { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none;
          background:
            radial-gradient(80% 60% at 50% -10%, rgba(var(--c7-primary-rgb),0.22) 0%, transparent 60%),
            radial-gradient(70% 55% at 88% 82%, rgba(var(--c7-gold-rgb),0.10) 0%, transparent 60%),
            radial-gradient(70% 55% at 10% 90%, rgba(var(--c7-accent-rgb),0.12) 0%, transparent 60%),
            var(--c7-bg); }
        .c7-bd-base { position: absolute; inset: 0;
          background:
            radial-gradient(at 50% 120%, rgba(var(--c7-primary-rgb),0.10), transparent 55%); }

        .c7-bd-blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.5;
          will-change: transform; }
        .c7-bd-blob--pink { width: 60vw; height: 60vw; top: -12%; left: -18%;
          background: radial-gradient(circle, rgba(var(--c7-primary-rgb),0.55), transparent 68%);
          animation: c7-bd-drift1 18s ease-in-out infinite; }
        .c7-bd-blob--cyan { width: 55vw; height: 55vw; top: 8%; right: -22%;
          background: radial-gradient(circle, rgba(var(--c7-accent-rgb),0.34), transparent 68%);
          animation: c7-bd-drift2 22s ease-in-out infinite; }
        .c7-bd-blob--gold { width: 50vw; height: 50vw; bottom: -16%; left: 22%;
          background: radial-gradient(circle, rgba(var(--c7-gold-rgb),0.26), transparent 68%);
          animation: c7-bd-drift3 26s ease-in-out infinite; }

        @keyframes c7-bd-drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(8vw,5vh) scale(1.12)} }
        @keyframes c7-bd-drift2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-7vw,7vh) scale(1.15)} }
        @keyframes c7-bd-drift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5vw,-6vh) scale(1.1)} }

        /* Soft top light beam */
        .c7-bd-beam { position: absolute; top: -30%; left: 50%; width: 120%; height: 70%;
          transform: translateX(-50%) rotate(8deg);
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.06), transparent 60%);
          animation: c7-bd-beam 12s ease-in-out infinite; }
        @keyframes c7-bd-beam { 0%,100%{opacity:.5} 50%{opacity:.9} }

        /* Rising sparkles / coins */
        .c7-bd-sparkles { position: absolute; inset: 0; }
        .c7-bd-spark { position: absolute; bottom: -6%; border-radius: 50%; opacity: 0;
          will-change: transform, opacity; animation-name: c7-bd-rise;
          animation-timing-function: linear; animation-iteration-count: infinite; }
        @keyframes c7-bd-rise {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          12% { opacity: 0.9; }
          85% { opacity: 0.8; }
          100% { transform: translateY(-108vh) scale(1); opacity: 0; }
        }

        .c7-bd-vignette { position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(var(--c7-bg-rgb),0.10), transparent 22%, transparent 70%, var(--c7-bg)); }

        @media (prefers-reduced-motion: reduce) {
          .c7-bd-blob, .c7-bd-beam, .c7-bd-spark { animation: none !important; }
          .c7-bd-spark { opacity: 0.5; }
        }
      `})]})}export{a as t};