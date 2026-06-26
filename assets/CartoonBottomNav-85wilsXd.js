import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{f as r,p as i}from"./index-D7KGRYYL.js";var a=e(t(),1),o=n(),s=[{id:`game`,label:`Lobby`,route:`/`,emoji:`🎰`,match:e=>e===`/`||e===`/home`||e===`/uono`||e.startsWith(`/dtx/games`)||e.startsWith(`/games`)||e.startsWith(`/casino`)||e.startsWith(`/lobby`)},{id:`bank`,label:`Bank`,route:`/wallet`,emoji:`🏦`,match:e=>e.startsWith(`/wallet`)||e.startsWith(`/dtx/wallet`)||e.startsWith(`/deposit`)||e.startsWith(`/withdraw`)||e.startsWith(`/kyc`)},{id:`lucky`,label:`Lucky`,route:`/dtx/wingo`,emoji:`🎡`,mid:!0,match:e=>e.startsWith(`/dtx/wingo`)||e.startsWith(`/dtx/wheel`)},{id:`refer`,label:`Refer`,route:`/agent`,emoji:`🤝`,match:e=>e.startsWith(`/agent`)||e.startsWith(`/dtx/refer`)},{id:`events`,label:`Events`,route:`/dtx/promotions`,emoji:`🎁`,match:e=>e.startsWith(`/dtx/promotions`)||e.startsWith(`/dtx/vip`)||e.startsWith(`/dtx/events`)||e.startsWith(`/dtx/leaderboard`)}],c=`
.cbn-nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 520px; display: grid; grid-template-columns: repeat(5,1fr); align-items: end;
  background: linear-gradient(180deg, rgba(var(--c7-bg-rgb),0.72), rgba(var(--c7-bg-rgb),0.98)); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-top: 1px solid rgba(var(--c7-primary-rgb),0.3);
  padding: 7px 4px calc(7px + env(safe-area-inset-bottom,0px)); z-index: 100; }
.cbn-navi { display: flex; flex-direction: column; align-items: center; gap: 3px; background: none; border: none; color: rgba(255,255,255,0.55); font-size: 10px; font-weight: 800; cursor: pointer; padding: 2px 0; font-family: inherit; transition: color 180ms ease; }
.cbn-navi--on { color: var(--c7-gold); }
/* Glossy 3D emoji chip — same candy module as the game cards */
.cbn-ic { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; font-size: 20px; line-height: 1;
  background: radial-gradient(120% 100% at 50% 6%, rgba(255,255,255,0.22), transparent 52%), linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.015));
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -4px 7px rgba(0,0,0,0.32), 0 2px 5px rgba(0,0,0,0.45);
  transition: transform 200ms cubic-bezier(.2,.9,.2,1), box-shadow 200ms ease, border-color 200ms ease; }
.cbn-ic > span { filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5)); }
.cbn-navi--on .cbn-ic { transform: translateY(-3px) scale(1.08); border-color: rgba(var(--c7-gold-rgb),0.85);
  background: radial-gradient(120% 100% at 50% 6%, rgba(255,255,255,0.4), transparent 52%), linear-gradient(180deg, rgba(var(--c7-primary-rgb),0.32), rgba(var(--c7-primary-rgb),0.08));
  box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -4px 8px rgba(0,0,0,0.3), 0 5px 14px rgba(var(--c7-primary-rgb),0.55), 0 0 14px rgba(var(--c7-gold-rgb),0.4); }
/* Center "Lucky" — elevated glossy gold disc */
.cbn-mid { width: 56px; height: 56px; margin-top: -24px; border-radius: 50%; display: grid; place-items: center; font-size: 26px;
  background: radial-gradient(120% 100% at 50% 12%, rgba(255,255,255,0.65), transparent 50%), linear-gradient(180deg, var(--c7-gold), var(--c7-primary));
  box-shadow: 0 5px 18px rgba(var(--c7-primary-rgb),0.6), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.3); border: 3px solid rgba(var(--c7-bg-rgb),0.9); animation: cbn-pulse 2.2s ease-in-out infinite; }
.cbn-mid > span { filter: drop-shadow(0 2px 3px rgba(0,0,0,0.45)); display: grid; place-items: center; animation: cbn-spin 5s linear infinite; }
.cbn-navi--mid:active .cbn-mid > span { animation-duration: 0.5s; }
@keyframes cbn-spin { to { transform: rotate(360deg); } }
@keyframes cbn-pulse { 0%,100% { box-shadow: 0 5px 18px rgba(var(--c7-primary-rgb),0.5), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.3); } 50% { box-shadow: 0 5px 26px rgba(var(--c7-primary-rgb),0.85), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.3); transform: scale(1.04); } }
@media (prefers-reduced-motion: reduce) { .cbn-mid, .cbn-mid > span { animation: none !important; } }
`;function l(){let e=i(),{pathname:t}=r();return(0,a.useEffect)(()=>{if(document.getElementById(`cbn-nav-css`))return;let e=document.createElement(`style`);e.id=`cbn-nav-css`,e.textContent=c,document.head.appendChild(e)},[]),(0,o.jsx)(`nav`,{className:`cbn-nav`,children:s.map(n=>{let r=n.match(t);return(0,o.jsxs)(`button`,{className:`cbn-navi${n.mid?` cbn-navi--mid`:r?` cbn-navi--on`:``}`,onClick:()=>e(n.route),"aria-label":n.label,children:[n.mid?(0,o.jsx)(`span`,{className:`cbn-mid`,children:(0,o.jsx)(`span`,{children:n.emoji})}):(0,o.jsx)(`span`,{className:`cbn-ic`,children:(0,o.jsx)(`span`,{children:n.emoji})}),(0,o.jsx)(`span`,{children:n.label})]},n.id)})})}export{l as t};