import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";var r=e(t(),1),i=n(),a=`
@keyframes hdr9-orb-drift {
  0%   { transform: translate3d(  0vw,   0vh, 0) scale(1); }
  33%  { transform: translate3d( 12vw,  -8vh, 0) scale(1.08); }
  66%  { transform: translate3d( -8vw,  10vh, 0) scale(0.95); }
  100% { transform: translate3d(  0vw,   0vh, 0) scale(1); }
}
@keyframes hdr9-orb-drift-alt {
  0%   { transform: translate3d(  0vw,   0vh, 0) scale(1); }
  50%  { transform: translate3d(-10vw,  12vh, 0) scale(1.12); }
  100% { transform: translate3d(  0vw,   0vh, 0) scale(1); }
}
@keyframes hdr9-orb-drift-slow {
  0%   { transform: translate3d(  0vw,   0vh, 0); }
  50%  { transform: translate3d(  8vw,   6vh, 0); }
  100% { transform: translate3d(  0vw,   0vh, 0); }
}
@keyframes hdr9-particle-rise {
  0%   { transform: translate3d(0, 8vh, 0)    scale(0.6); opacity: 0;   }
  10%  { opacity: 0.85; }
  90%  { opacity: 0.85; }
  100% { transform: translate3d(2vw, -110vh, 0) scale(1.1); opacity: 0; }
}

.hdr9-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
}

.hdr9-base {
  position: absolute; inset: 0;
  background:
    radial-gradient(80% 60% at 50% -10%, rgba(224, 43, 60, 0.10) 0%, transparent 65%),
    radial-gradient(70% 55% at 90% 80%, rgba(232, 223, 202, 0.08) 0%, transparent 65%),
    radial-gradient(70% 55% at 10% 90%, rgba(92, 13, 23, 0.12) 0%, transparent 65%),
    linear-gradient(180deg, #070406 0%, #0f0a0b 50%, #070406 100%);
}

.hdr9-video-layer {
  position: absolute;
  inset: -10% -10% -10% -10%;
  will-change: transform;
}
.hdr9-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(48px) saturate(1.6) brightness(0.55) hue-rotate(-8deg);
  transform: scale(1.2);
  opacity: 0.22;
  mix-blend-mode: screen;
}

.hdr9-orbs {
  position: absolute; inset: 0;
  will-change: transform;
}
.hdr9-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(56px);
  will-change: transform;
  mix-blend-mode: screen;
}
.hdr9-orb--gold {
  width: 440px; height: 440px;
  top: -100px; left: -80px;
  background: radial-gradient(circle, rgba(224, 43, 60, 0.55), rgba(224, 43, 60, 0));
  animation: hdr9-orb-drift 22s ease-in-out infinite;
  opacity: 0.55;
}
.hdr9-orb--amber {
  width: 380px; height: 380px;
  bottom: -120px; right: -80px;
  background: radial-gradient(circle, rgba(232, 223, 202, 0.45), rgba(232, 223, 202, 0));
  animation: hdr9-orb-drift-alt 28s ease-in-out infinite;
  opacity: 0.40;
}
.hdr9-orb--ruby {
  width: 360px; height: 360px;
  top: 28%; right: -140px;
  background: radial-gradient(circle, rgba(92, 13, 23, 0.50), rgba(92, 13, 23, 0));
  animation: hdr9-orb-drift-slow 34s ease-in-out infinite;
  opacity: 0.35;
}
.hdr9-orb--ruby-deep {
  width: 300px; height: 300px;
  bottom: 22%; left: -110px;
  background: radial-gradient(circle, rgba(53, 19, 30, 0.45), rgba(53, 19, 30, 0));
  animation: hdr9-orb-drift 30s ease-in-out infinite reverse;
  opacity: 0.32;
}

.hdr9-particles {
  position: absolute; inset: 0;
  will-change: transform;
}
.hdr9-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform, opacity;
}

.hdr9-vignette {
  position: absolute; inset: 0;
  background:
    radial-gradient(150% 100% at 50% 50%, transparent 0%, transparent 55%, rgba(0, 0, 0, 0.65) 100%);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .hdr9-orb, .hdr9-particle, .hdr9-video {
    animation: none !important;
  }
  .hdr9-video-layer { display: none; }
}
`,o=!1;function s(){if(o||typeof document>`u`)return;if(document.getElementById(`hdr9-backdrop-css`)){o=!0;return}let e=document.createElement(`style`);e.id=`hdr9-backdrop-css`,e.textContent=a,document.head.appendChild(e),o=!0}function c(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 600px)`).matches}function l(){return typeof window>`u`?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function u({particleCount:e=20,noVideo:t=!1,videoSrc:n=`/videos/lobby-hero.mp4`}){let a=(0,r.useRef)(null),o=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,f]=(0,r.useState)(!1),[p,m]=(0,r.useState)(!1);(0,r.useEffect)(()=>{s();let e=l(),n=c();f(!t&&!e&&!n),m(!e)},[t]);let h=(0,r.useMemo)(()=>Array.from({length:e}).map((e,t)=>({size:1.5+t%5*.6,left:(t*13.37+7)%100,delay:t*.71%14,dur:18+t%9*1.7,color:t%3==0?`#e02b3c`:t%3==1?`#FFFFFF`:`#5c0d17`,key:t})),[e]);return(0,r.useEffect)(()=>{if(!p)return;let e=0,t=0,n=()=>{e=0;let n=t;a.current&&(a.current.style.transform=`translate3d(0, ${n*.15}px, 0)`),o.current&&(o.current.style.transform=`translate3d(0, ${n*.3}px, 0)`),u.current&&(u.current.style.transform=`translate3d(0, ${n*.5}px, 0)`)},r=()=>{t=window.scrollY,e||=requestAnimationFrame(n)};return window.addEventListener(`scroll`,r,{passive:!0}),()=>{window.removeEventListener(`scroll`,r),e&&cancelAnimationFrame(e)}},[p]),(0,i.jsxs)(`div`,{className:`hdr9-root`,"aria-hidden":`true`,children:[(0,i.jsx)(`div`,{className:`hdr9-base`}),d&&(0,i.jsx)(`div`,{className:`hdr9-video-layer`,ref:a,children:(0,i.jsx)(`video`,{className:`hdr9-video`,src:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`metadata`})}),(0,i.jsxs)(`div`,{className:`hdr9-orbs`,ref:o,children:[(0,i.jsx)(`div`,{className:`hdr9-orb hdr9-orb--gold`}),(0,i.jsx)(`div`,{className:`hdr9-orb hdr9-orb--amber`}),(0,i.jsx)(`div`,{className:`hdr9-orb hdr9-orb--ruby`}),(0,i.jsx)(`div`,{className:`hdr9-orb hdr9-orb--ruby-deep`})]}),(0,i.jsx)(`div`,{className:`hdr9-particles`,ref:u,children:h.map(e=>(0,i.jsx)(`span`,{className:`hdr9-particle`,style:{left:`${e.left}%`,bottom:`-12px`,width:e.size,height:e.size,background:e.color,boxShadow:`0 0 ${e.size*4}px ${e.color}`,opacity:0,animation:`hdr9-particle-rise ${e.dur}s linear ${e.delay}s infinite`}},e.key))}),(0,i.jsx)(`div`,{className:`hdr9-vignette`})]})}export{u as t};