import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,p as i}from"./index-D7KGRYYL.js";import{t as a}from"./arrow-left-C6UFzkXE.js";import{t as o}from"./chevron-right-DFUaVWma.js";import{t as s}from"./log-out-CUoE7pbh.js";import{t as c}from"./settings-Cr7wgKXj.js";import{t as l}from"./useProfileStats-DtbxRUoR.js";var u=e(t(),1),d=n(),f=[{name:`BRONZE`,min:0,color:`#cd7f32`},{name:`SILVER`,min:100,color:`#c0c0c0`},{name:`GOLD`,min:1e3,color:`var(--c7-gold)`},{name:`PLATINUM`,min:5e3,color:`#7dd3fc`},{name:`DIAMOND`,min:1e4,color:`#a78bfa`}];function p(e){let t=0;for(let n=0;n<f.length;n++)e>=f[n].min&&(t=n);let n=f[t],r=f[t+1]??null;return{cur:n,next:r,progress:r?Math.min(1,(e-n.min)/(r.min-n.min)):1}}var m=[{icon:`💰`,label:`Deposit`,sub:`UPI · INR · instant`,to:`/deposit/upi`,c1:`var(--c7-success)`,c2:`#18a85a`},{icon:`🎡`,label:`Lucky Wheel`,sub:`Free daily spin`,to:`/dtx/wheel`,c1:`#a855f7`,c2:`#6d28d9`},{icon:`🎁`,label:`Bonuses`,sub:`Claim offers`,to:`/dtx/promotions`,c1:`#ec4899`,c2:`#be185d`},{icon:`🏧`,label:`Withdraw`,sub:`Cash out`,to:`/withdraw`,c1:`var(--c7-primary)`,c2:`var(--c7-primary-dark)`}],h=[{icon:`📱`,label:`Deposit · UPI`,sub:`Instant`,to:`/deposit/upi`,c1:`var(--c7-success)`,c2:`#18a85a`},{icon:`🪙`,label:`Deposit · Crypto`,sub:`USDT · TRC-20`,to:`/deposit/crypto`,c1:`#f59e0b`,c2:`#b45309`},{icon:`📋`,label:`Transaction History`,sub:`Deposits, bets & wins`,to:`/wallet`,c1:`#38bdf8`,c2:`#0369a1`},{icon:`👑`,label:`VIP Club`,sub:`Tiers, rakeback & perks`,to:`/vip`,c1:`var(--c7-gold)`,c2:`#b45309`},{icon:`🤝`,label:`Refer & Earn`,sub:`Agent commission`,to:`/agent`,c1:`var(--c7-success)`,c2:`#047857`},{icon:`🔗`,label:`Share & Earn`,sub:`Invite friends, get rewards`,to:`/dtx/refer`,c1:`#f472b6`,c2:`#be185d`},{icon:`🏆`,label:`Leaderboard`,sub:`Top winners`,to:`/top`,c1:`#fb7185`,c2:`#be123c`},{icon:`🛡️`,label:`Verify Identity (KYC)`,sub:`For withdrawals`,to:`/kyc`,c1:`#60a5fa`,c2:`#1d4ed8`},{icon:`🧭`,label:`Responsible Gambling`,sub:`Limits & self-exclusion`,to:`/responsible`,c1:`#94a3b8`,c2:`#475569`},{icon:`⚙️`,label:`Settings`,sub:`Profile & preferences`,to:`/dtx/settings`,c1:`#cbd5e1`,c2:`#64748b`}];function g(){let e=i(),{stats:t}=l(),[n,f]=(0,u.useState)(null);(0,u.useEffect)(()=>{r.auth.getUser().then(({data:e})=>f(e.user?.email??null))},[]);let g=n?n.split(`@`)[0]:`Player`,{cur:v,next:y,progress:b}=p(t.total_wagered),x=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2}),S=t.net_profit,C=async()=>{await r.auth.signOut(),e(`/login`)},w=[{k:`Wagered`,v:x(t.total_wagered),c:`var(--c7-gold-soft)`},{k:`Won`,v:x(t.total_won),c:`var(--c7-success)`},{k:`Deposited`,v:x(t.total_deposited),c:`#60a5fa`},{k:`Net P/L`,v:(S>=0?`+`:``)+x(S),c:S>=0?`var(--c7-success)`:`var(--c7-danger)`}];return(0,d.jsxs)(`div`,{className:`ac2-root`,children:[(0,d.jsx)(_,{}),(0,d.jsxs)(`header`,{className:`ac2-bar`,children:[(0,d.jsx)(`button`,{className:`ac2-ic`,onClick:()=>window.history.length>1?e(-1):e(`/`),"aria-label":`Back`,children:(0,d.jsx)(a,{size:18})}),(0,d.jsx)(`span`,{className:`ac2-title`,children:`🎮 My Account`}),(0,d.jsx)(`button`,{className:`ac2-ic`,onClick:()=>e(`/dtx/settings`),"aria-label":`Settings`,children:(0,d.jsx)(c,{size:18})})]}),(0,d.jsxs)(`main`,{className:`ac2-main`,children:[(0,d.jsxs)(`section`,{className:`ac2-hero ac2-pop`,children:[(0,d.jsx)(`span`,{className:`ac2-shine`}),(0,d.jsxs)(`div`,{className:`ac2-hero-top`,children:[(0,d.jsxs)(`div`,{className:`ac2-avatar`,children:[`🧑‍✈️`,(0,d.jsx)(`span`,{className:`ac2-tier`,style:{background:v.color},children:v.name})]}),(0,d.jsxs)(`div`,{className:`ac2-id`,children:[(0,d.jsx)(`div`,{className:`ac2-name`,children:g}),(0,d.jsx)(`div`,{className:`ac2-email`,children:n??`Not signed in`})]})]}),(0,d.jsx)(`div`,{className:`ac2-bal-k`,children:`🪙 Balance`}),(0,d.jsx)(`div`,{className:`ac2-bal-v`,children:x(t.balance)}),(0,d.jsx)(`button`,{className:`ac2-dep`,onClick:()=>e(`/deposit/upi`),children:`＋ Deposit Now`}),(0,d.jsxs)(`div`,{className:`ac2-vip`,children:[(0,d.jsx)(`div`,{className:`ac2-vip-bar`,children:(0,d.jsx)(`span`,{style:{width:`${Math.round(b*100)}%`,background:v.color}})}),(0,d.jsx)(`div`,{className:`ac2-vip-sub`,children:y?`${x(Math.max(0,y.min-t.total_wagered))} more wagered → ${y.name}`:`Max tier 🎉`})]})]}),(0,d.jsx)(`div`,{className:`ac2-quick`,children:m.map((t,n)=>(0,d.jsxs)(`button`,{className:`ac2-tile ac2-pop`,style:{background:`linear-gradient(150deg, ${t.c1}, ${t.c2})`,animationDelay:`${n*50}ms`},onClick:()=>e(t.to),children:[(0,d.jsx)(`span`,{className:`ac2-tile-ic`,children:t.icon}),(0,d.jsx)(`span`,{className:`ac2-tile-l`,children:t.label}),(0,d.jsx)(`span`,{className:`ac2-tile-s`,children:t.sub})]},t.label))}),(0,d.jsx)(`div`,{className:`ac2-stats`,children:w.map(e=>(0,d.jsxs)(`div`,{className:`ac2-stat`,children:[(0,d.jsx)(`div`,{className:`ac2-stat-v`,style:{color:e.c},children:e.v}),(0,d.jsx)(`div`,{className:`ac2-stat-k`,children:e.k})]},e.k))}),(0,d.jsx)(`div`,{className:`ac2-sec-t`,children:`More`}),(0,d.jsx)(`div`,{className:`ac2-list`,children:h.map(t=>(0,d.jsxs)(`button`,{className:`ac2-row`,onClick:()=>e(t.to),children:[(0,d.jsx)(`span`,{className:`ac2-row-ic`,style:{background:`linear-gradient(150deg, ${t.c1}, ${t.c2})`},children:t.icon}),(0,d.jsxs)(`span`,{className:`ac2-row-body`,children:[(0,d.jsx)(`span`,{className:`ac2-row-l`,children:t.label}),t.sub&&(0,d.jsx)(`span`,{className:`ac2-row-s`,children:t.sub})]}),(0,d.jsx)(o,{size:16,className:`ac2-row-chev`})]},t.label))}),(0,d.jsxs)(`button`,{className:`ac2-logout`,onClick:C,children:[(0,d.jsx)(s,{size:16}),` Sign Out`]}),(0,d.jsx)(`div`,{className:`ac2-foot`,children:`18+ · Play responsibly · Provably fair`})]})]})}function _(){return(0,d.jsx)(`style`,{children:`
      .ac2-root { min-height: 100vh; color: #fff; padding-bottom: 36px;
        background: radial-gradient(at 0% 0%, rgba(var(--c7-primary-rgb),0.22), transparent 40%),
                    radial-gradient(at 100% 0%, rgba(var(--c7-primary-rgb),0.16), transparent 42%),
                    linear-gradient(180deg, var(--c7-bg), var(--c7-bg)); }
      .ac2-bar { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 12px 14px;
        background: rgba(22,12,48,0.78); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.08); }
      .ac2-title { font-size: 16px; font-weight: 900; letter-spacing: 0.4px; }
      .ac2-ic { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); color: #fff; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
      .ac2-main { padding: 14px; max-width: 520px; margin: 0 auto; }

      .ac2-hero { position: relative; overflow: hidden; border-radius: 22px; padding: 18px; text-align: center;
        background: linear-gradient(140deg, var(--c7-primary) 0%, var(--c7-primary-dark) 58%, #1a0306 100%);
        box-shadow: 0 12px 30px rgba(var(--c7-primary-rgb),0.4); }
      .ac2-hero-top { display: flex; align-items: center; gap: 12px; text-align: left; }
      .ac2-avatar { position: relative; width: 52px; height: 52px; border-radius: 50%; background: rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; font-size: 26px; flex-shrink: 0; }
      .ac2-tier { position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); font-size: 7px; font-weight: 900; color: var(--c7-bg); padding: 1px 6px; border-radius: 999px; white-space: nowrap; }
      .ac2-name { font-size: 18px; font-weight: 900; text-transform: capitalize; }
      .ac2-email { font-size: 11px; color: rgba(255,255,255,0.85); overflow: hidden; text-overflow: ellipsis; }
      .ac2-bal-k { margin-top: 14px; font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.9); letter-spacing: 1px; text-transform: uppercase; }
      .ac2-bal-v { font-size: 44px; font-weight: 900; letter-spacing: -1px; font-variant-numeric: tabular-nums; text-shadow: 0 2px 10px rgba(0,0,0,0.3); line-height: 1.05; }
      .ac2-dep { margin-top: 10px; background: #fff; color: var(--c7-primary-dark); border: none; border-radius: 999px; padding: 10px 22px; font-size: 14px; font-weight: 900; cursor: pointer; box-shadow: 0 4px 14px rgba(0,0,0,0.25); }
      .ac2-dep:active { transform: scale(0.97); }
      .ac2-vip { margin-top: 14px; }
      .ac2-vip-bar { height: 8px; border-radius: 5px; background: rgba(0,0,0,0.28); overflow: hidden; }
      .ac2-vip-bar span { display: block; height: 100%; border-radius: 5px; transition: width .4s ease; box-shadow: 0 0 10px rgba(255,255,255,0.5); }
      .ac2-vip-sub { font-size: 10px; color: rgba(255,255,255,0.92); margin-top: 5px; font-weight: 700; }

      .ac2-quick { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; margin-top: 16px; }
      .ac2-tile { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 14px 4px; border-radius: 16px; border: none; cursor: pointer; color: #fff;
        box-shadow: 0 6px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25); }
      .ac2-tile:active { transform: scale(0.95); }
      .ac2-tile-ic { font-size: 26px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
      .ac2-tile-l { font-size: 11px; font-weight: 900; }
      .ac2-tile-s { font-size: 8px; font-weight: 700; opacity: 0.92; }

      .ac2-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-top: 14px; }
      .ac2-stat { padding: 12px 4px; border-radius: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); text-align: center; }
      .ac2-stat-v { font-size: 14px; font-weight: 900; font-variant-numeric: tabular-nums; }
      .ac2-stat-k { font-size: 9px; color: rgba(255,255,255,0.55); margin-top: 3px; font-weight: 700; }

      .ac2-sec-t { font-size: 11px; font-weight: 900; letter-spacing: 1.6px; text-transform: uppercase; color: var(--c7-primary); margin: 22px 4px 10px; }
      .ac2-list { display: flex; flex-direction: column; gap: 8px; }
      .ac2-row { display: flex; align-items: center; gap: 12px; padding: 11px 13px; border-radius: 15px; cursor: pointer; color: #fff; text-align: left;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); transition: transform .12s ease, background .12s ease; }
      .ac2-row:active { transform: scale(0.99); background: rgba(255,255,255,0.09); }
      .ac2-row-ic { width: 42px; height: 42px; border-radius: 13px; display: inline-flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; box-shadow: 0 3px 10px rgba(0,0,0,0.3); }
      .ac2-row-body { flex: 1; min-width: 0; display: flex; flex-direction: column; }
      .ac2-row-l { font-size: 14px; font-weight: 800; }
      .ac2-row-s { font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 1px; }
      .ac2-row-chev { color: rgba(255,255,255,0.4); flex-shrink: 0; }

      .ac2-logout { width: 100%; margin-top: 22px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px; border-radius: 14px; cursor: pointer;
        background: rgba(255,59,59,0.12); border: 1px solid rgba(255,59,59,0.4); color: #ff8fb0; font-size: 13px; font-weight: 900; }
      .ac2-foot { text-align: center; font-size: 10px; color: rgba(255,255,255,0.35); margin-top: 16px; font-weight: 600; }

      .ac2-shine { position: absolute; top: 0; left: -60%; width: 45%; height: 100%; transform: skewX(-20deg); pointer-events: none;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent); animation: ac2-shine 3.6s ease-in-out infinite; }
      @keyframes ac2-shine { 0% { left: -60%; } 55%,100% { left: 130%; } }
      @keyframes ac2-pop { from { opacity: 0; transform: translateY(10px) scale(0.96); } to { opacity: 1; transform: none; } }
      .ac2-pop { animation: ac2-pop 0.34s cubic-bezier(0.34,1.56,0.64,1) both; }
      @media (prefers-reduced-motion: reduce) { .ac2-shine, .ac2-pop { animation: none !important; } }
    `})}export{g as default};