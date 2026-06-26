import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,p as i,r as a}from"./index-D7KGRYYL.js";import{n as o,t as s}from"./menu-O82cv9zV.js";import{t as c}from"./chevron-right-DFUaVWma.js";import{t as l}from"./crown-BUX5zB1O.js";import{t as u}from"./mail-D8OodK__.js";import{t as d}from"./plus-U7vKIH44.js";import{t as f}from"./settings-Cr7wgKXj.js";import{n as p,t as m}from"./volume-x-i9h9ndI7.js";import{t as h}from"./CartoonBottomNav-85wilsXd.js";import{t as g}from"./usePwaInstall-CBD2v4Ex.js";import{t as _}from"./games-B_-3ExBm.js";import{t as v}from"./AnimatedBackdrop-DRxPyGi_.js";var y=e(t(),1),b=n(),x=[{icon:`🏠`,label:`Home`,to:`/`},{icon:`🎮`,label:`All Games`,to:`/dtx/games`},{icon:`🎡`,label:`Lucky Wheel`,to:`/dtx/wingo`},{icon:`💰`,label:`Wallet`,to:`/wallet`},{icon:`➕`,label:`Deposit`,to:`/deposit/request`},{icon:`🏧`,label:`Withdraw`,to:`/withdraw`},{icon:`🎁`,label:`Promotions`,to:`/dtx/promotions`},{icon:`🤝`,label:`Refer & Earn`,to:`/agent`},{icon:`👑`,label:`VIP Club`,to:`/dtx/vip`},{icon:`👤`,label:`My Profile`,to:`/me`}];function S({open:e,onClose:t}){let n=i(),{canInstall:a,isInstalled:o,isIos:s,promptInstall:c}=g();(0,y.useEffect)(()=>{if(!e)return;let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t}},[e]);let l=e=>{t(),n(e)},u=async()=>{try{await r.auth.signOut()}catch{}t(),n(`/login`,{replace:!0})},d=async()=>{if(a){await c();return}s?window.alert(`Add to Home Screen:
Tap the Share button, then “Add to Home Screen”.`):window.alert(`Open your browser menu and choose “Install app” / “Add to Home screen”.`)},f=!o;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        .hmd-overlay { position: fixed; inset: 0; z-index: 60; background: rgba(0,0,0,0.6);
          backdrop-filter: blur(3px); opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity .22s ease, visibility .22s ease; }
        .hmd-overlay[data-open="true"] { opacity: 1; visibility: visible; pointer-events: auto; }
        .hmd-panel { position: fixed; top: 0; left: 0; bottom: 0; z-index: 61; width: 82%; max-width: 320px;
          background: linear-gradient(180deg, var(--c7-surface), var(--c7-bg));
          border-right: 1px solid rgba(var(--c7-primary-rgb),0.25);
          box-shadow: 8px 0 32px rgba(0,0,0,0.5);
          transform: translateX(-104%); transition: transform .26s cubic-bezier(0.34,1.4,0.64,1);
          display: flex; flex-direction: column; padding: 16px 14px calc(16px + env(safe-area-inset-bottom,0px));
          overflow-y: auto; pointer-events: none; }
        .hmd-panel[data-open="true"] { transform: translateX(0); pointer-events: auto; }
        .hmd-head { display: flex; align-items: center; gap: 11px; padding: 6px 4px 16px; }
        .hmd-logo { width: 46px; height: 46px; border-radius: 16px; display: flex; align-items: center; justify-content: center;
          font-size: 24px; background: linear-gradient(135deg, var(--c7-accent), var(--c7-primary)); color: var(--c7-bg);
          box-shadow: 0 4px 0 var(--c7-primary-dark); }
        .hmd-brand { font-size: 17px; font-weight: 900; color: #fff; letter-spacing: 0.4px; }
        .hmd-brand b { color: var(--c7-gold); }
        .hmd-sub { font-size: 9px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.5); }
        .hmd-x { margin-left: auto; width: 32px; height: 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.35); color: #fff; font-size: 16px; cursor: pointer; }
        .hmd-list { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .hmd-item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; cursor: pointer;
          background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.06); color: #fff; font-size: 14px; font-weight: 800;
          box-shadow: 0 3px 0 rgba(0,0,0,0.3); transition: transform .12s ease, box-shadow .12s ease; text-align: left; width: 100%; }
        .hmd-item:active { transform: translateY(3px); box-shadow: 0 0 0 rgba(0,0,0,0.3); }
        .hmd-ic { font-size: 20px; width: 26px; text-align: center; }
        .hmd-install { margin-top: 12px; display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 18px; cursor: pointer;
          background: linear-gradient(135deg, var(--c7-accent), var(--c7-primary)); color: var(--c7-bg); font-size: 14px; font-weight: 900;
          border: none; box-shadow: 0 5px 0 var(--c7-primary-dark), 0 9px 16px rgba(0,0,0,0.32); width: 100%; text-align: left;
          transition: transform .12s ease, box-shadow .12s ease; }
        .hmd-install:active { transform: translateY(4px); box-shadow: 0 1px 0 var(--c7-primary-dark); }
        .hmd-install-s { display: block; font-size: 9px; font-weight: 800; opacity: 0.8; letter-spacing: 0.4px; margin-top: 1px; }
        .hmd-out { margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px;
          border-radius: 16px; cursor: pointer; background: rgba(255,77,109,0.12); border: 1px solid rgba(255,77,109,0.35);
          color: var(--c7-danger); font-size: 13px; font-weight: 900; width: 100%; }
        @media (prefers-reduced-motion: reduce) { .hmd-overlay, .hmd-panel { transition: none !important; } }
      `}),(0,b.jsx)(`div`,{className:`hmd-overlay`,"data-open":e,onClick:t,"aria-hidden":!0}),(0,b.jsxs)(`aside`,{className:`hmd-panel`,"data-open":e,role:`dialog`,"aria-modal":`true`,"aria-label":`Menu`,children:[(0,b.jsxs)(`div`,{className:`hmd-head`,children:[(0,b.jsx)(`span`,{className:`hmd-logo`,children:`🎰`}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`hmd-brand`,children:[`C7`,(0,b.jsx)(`b`,{children:`Winner`})]}),(0,b.jsx)(`div`,{className:`hmd-sub`,children:`Provably Fair`})]}),(0,b.jsx)(`button`,{className:`hmd-x`,onClick:t,"aria-label":`Close menu`,children:`✕`})]}),(0,b.jsxs)(`nav`,{className:`hmd-list`,children:[x.map(e=>(0,b.jsxs)(`button`,{className:`hmd-item`,onClick:()=>l(e.to),children:[(0,b.jsx)(`span`,{className:`hmd-ic`,children:e.icon}),(0,b.jsx)(`span`,{children:e.label})]},e.to+e.label)),f&&(0,b.jsxs)(`button`,{className:`hmd-install`,onClick:d,children:[(0,b.jsx)(`span`,{className:`hmd-ic`,children:`📲`}),(0,b.jsxs)(`span`,{children:[`Add to Home Screen`,(0,b.jsx)(`span`,{className:`hmd-install-s`,children:`One-tap launch · faster access`})]})]}),(0,b.jsx)(`button`,{className:`hmd-out`,onClick:u,children:`↩ Sign out`})]})]})]})}function C({id:e,emoji:t,emojiClassName:n}){let[r,i]=(0,y.useState)(!1),[a,o]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[!r&&(0,b.jsx)(`span`,{className:n,children:t}),!a&&(0,b.jsx)(`img`,{src:`/icons/games/${e}.webp`,alt:``,"aria-hidden":`true`,loading:`lazy`,decoding:`async`,onLoad:()=>i(!0),onError:()=>o(!0),style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`inherit`,opacity:+!!r,transition:`opacity 0.25s ease`,zIndex:1}})]})}function w({id:e,children:t,imgClassName:n=`uo-art-img`}){let[r,i]=(0,y.useState)(!1),[a,o]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(!r||a)&&t,!a&&(0,b.jsx)(`img`,{src:`/icons/home/${e}.webp`,alt:``,"aria-hidden":`true`,loading:`lazy`,decoding:`async`,onLoad:()=>i(!0),onError:()=>o(!0),className:n,style:{opacity:+!!r,transition:`opacity .3s ease`}})]})}var T=`#19c478`,E=`#0c7a43`,D=`#ffd24d`,O=`#e0a514`;function k({name:e,size:t=30}){let n=`ci-${e}`;return(0,b.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 48 48`,fill:`none`,"aria-hidden":`true`,style:{filter:`drop-shadow(0 2px 3px rgba(0,0,0,0.45))`},children:[(0,b.jsxs)(`defs`,{children:[(0,b.jsxs)(`linearGradient`,{id:`${n}-gold`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,b.jsx)(`stop`,{offset:`0`,stopColor:`#fff0b0`}),(0,b.jsx)(`stop`,{offset:`0.5`,stopColor:D}),(0,b.jsx)(`stop`,{offset:`1`,stopColor:O})]}),(0,b.jsxs)(`linearGradient`,{id:`${n}-grn`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,b.jsx)(`stop`,{offset:`0`,stopColor:`#5ef0a8`}),(0,b.jsx)(`stop`,{offset:`0.55`,stopColor:T}),(0,b.jsx)(`stop`,{offset:`1`,stopColor:E})]})]}),N[e]?.(n)]})}var A=e=>`url(#${e}-gold)`,j=e=>`url(#${e}-grn)`,M=(0,b.jsx)(`ellipse`,{cx:`19`,cy:`15`,rx:`11`,ry:`6`,fill:`#fff`,opacity:`0.25`}),N={notice:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`path`,{d:`M10 21l20-9v24l-20-9z`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,b.jsx)(`rect`,{x:`6`,y:`19`,width:`6`,height:`10`,rx:`2`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1`}),(0,b.jsx)(`path`,{d:`M31 19c4 1 4 9 0 10`,stroke:O,strokeWidth:`2.4`,strokeLinecap:`round`}),M]}),promo:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`path`,{d:`M9 16h30v6a3 3 0 000 4v6H9v-6a3 3 0 000-4z`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M24 16v16`,stroke:`#a8780c`,strokeWidth:`1.4`,strokeDasharray:`2 2.4`}),M]}),invite:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`rect`,{x:`9`,y:`20`,width:`30`,height:`18`,rx:`2`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1.2`}),(0,b.jsx)(`rect`,{x:`7`,y:`15`,width:`34`,height:`7`,rx:`2`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1.1`}),(0,b.jsx)(`rect`,{x:`21`,y:`15`,width:`6`,height:`23`,fill:O,opacity:`0.9`}),(0,b.jsx)(`path`,{d:`M24 15c-3-6-9-3-6 0M24 15c3-6 9-3 6 0`,stroke:D,strokeWidth:`2.2`,fill:`none`,strokeLinecap:`round`}),M]}),records:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`rect`,{x:`12`,y:`9`,width:`24`,height:`32`,rx:`3`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1.2`}),(0,b.jsx)(`rect`,{x:`19`,y:`7`,width:`10`,height:`6`,rx:`2`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1`}),(0,b.jsx)(`path`,{d:`M17 21h14M17 27h14M17 33h9`,stroke:`#eafff3`,strokeWidth:`2`,strokeLinecap:`round`,opacity:`0.85`}),M]}),leaderboard:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`path`,{d:`M14 10h20v6a10 10 0 01-20 0z`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1.2`}),(0,b.jsx)(`path`,{d:`M14 12H9c0 6 4 7 6 7M34 12h5c0 6-4 7-6 7`,stroke:O,strokeWidth:`2.2`,fill:`none`,strokeLinecap:`round`}),(0,b.jsx)(`rect`,{x:`21`,y:`27`,width:`6`,height:`7`,fill:O}),(0,b.jsx)(`rect`,{x:`15`,y:`34`,width:`18`,height:`5`,rx:`2`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1`}),M]}),vip:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`path`,{d:`M9 32l-2-14 9 6 8-12 8 12 9-6-2 14z`,fill:A(e),stroke:`#a8780c`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,b.jsx)(`rect`,{x:`9`,y:`32`,width:`30`,height:`6`,rx:`2`,fill:O,stroke:`#a8780c`,strokeWidth:`1`}),(0,b.jsx)(`circle`,{cx:`24`,cy:`14`,r:`2.4`,fill:`#fff`}),` `,M]}),rewards:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`circle`,{cx:`24`,cy:`25`,r:`14`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1.4`}),(0,b.jsx)(`circle`,{cx:`24`,cy:`25`,r:`9.5`,fill:`none`,stroke:D,strokeWidth:`1.6`,opacity:`0.7`}),(0,b.jsx)(`path`,{d:`M18 25l4.2 4.2L31 21`,stroke:`#fff`,strokeWidth:`3.2`,strokeLinecap:`round`,strokeLinejoin:`round`,fill:`none`}),M]}),contact:e=>(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`path`,{d:`M12 26v-3a12 12 0 0124 0v3`,stroke:O,strokeWidth:`3`,fill:`none`,strokeLinecap:`round`}),(0,b.jsx)(`rect`,{x:`8`,y:`25`,width:`7`,height:`12`,rx:`3`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1.1`}),(0,b.jsx)(`rect`,{x:`33`,y:`25`,width:`7`,height:`12`,rx:`3`,fill:j(e),stroke:`#0a5c33`,strokeWidth:`1.1`}),(0,b.jsx)(`path`,{d:`M24 39h6a3 3 0 003-3`,stroke:D,strokeWidth:`2.2`,fill:`none`,strokeLinecap:`round`}),M]})},P=[{id:`notice`,label:`Notice`,emoji:`📢`,to:`/dtx/promotions`},{id:`promo`,label:`Promo Code`,emoji:`🎟️`,to:`/dtx/promotions`},{id:`invite`,label:`Invite`,emoji:`🎁`,to:`/agent`},{id:`records`,label:`Records`,emoji:`📋`,to:`/wallet`},{id:`leaderboard`,label:`Leaderboard`,emoji:`🏆`,to:`/dtx/leaderboard`},{id:`vip`,label:`VIP`,emoji:`👑`,to:`/dtx/vip`},{id:`rewards`,label:`Rewards`,emoji:`✅`,to:`/dtx/promotions`},{id:`contact`,label:`Contact`,emoji:`🎧`,to:`/dtx/promotions`}];function F(){let e=i(),[t,n]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        .qf-tab { position: fixed; right: 0; top: 38%; z-index: 38; transform: translateY(-50%);
          width: 26px; height: 52px; border: none; cursor: pointer; color: var(--c7-bg);
          border-radius: 12px 0 0 12px; display: grid; place-items: center;
          background: radial-gradient(120% 80% at 30% 10%, rgba(255,255,255,0.5), transparent 55%), linear-gradient(180deg, var(--c7-gold), var(--c7-primary));
          box-shadow: -3px 4px 12px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.5);
          animation: qf-bob 2.4s ease-in-out infinite; }
        @keyframes qf-bob { 0%,100% { transform: translateY(-50%); } 50% { transform: translateY(-58%); } }
        .qf-panel { position: fixed; right: 0; top: 50%; transform: translateY(-50%) translateX(110%); z-index: 39;
          width: 78px; max-height: 76vh; overflow-y: auto; padding: 8px 7px;
          display: flex; flex-direction: column; gap: 7px; border-radius: 18px 0 0 18px;
          background: linear-gradient(180deg, rgba(8,28,18,0.96), rgba(3,13,7,0.97));
          border: 1px solid rgba(255,200,61,0.35); border-right: none;
          box-shadow: -8px 0 26px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform .28s cubic-bezier(0.2,0.9,0.2,1); }
        .qf-panel[data-open="true"] { transform: translateY(-50%) translateX(0); }
        .qf-panel::-webkit-scrollbar { width: 0; }
        .qf-item { background: none; border: none; cursor: pointer; color: #fff; padding: 4px 2px;
          display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .qf-ic { position: relative; width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px;
          background: radial-gradient(120% 90% at 50% -10%, rgba(255,255,255,0.16), transparent 55%), linear-gradient(180deg, rgba(20,184,102,0.28), rgba(3,13,7,0.6));
          border: 1px solid rgba(255,255,255,0.12); box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 3px 8px rgba(0,0,0,0.4);
          font-size: 21px; }
        .qf-ic .uo-art-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
        .qf-item:active .qf-ic { transform: scale(0.93); }
        .qf-lbl { font-size: 8.5px; font-weight: 800; color: var(--c7-gold-soft); letter-spacing: 0.2px; line-height: 1; }
        .qf-close { margin: 2px auto 0; background: rgba(255,255,255,0.08); border: none; color: #fff; width: 22px; height: 22px; border-radius: 50%; cursor: pointer; display: grid; place-items: center; }
        @media (prefers-reduced-motion: reduce) { .qf-tab { animation: none; } }
      `}),!t&&(0,b.jsx)(`button`,{className:`qf-tab`,onClick:()=>n(!0),"aria-label":`Open features`,children:(0,b.jsx)(o,{size:16,strokeWidth:3})}),(0,b.jsxs)(`div`,{className:`qf-panel`,"data-open":t,role:`menu`,"aria-hidden":!t,children:[P.map(t=>(0,b.jsxs)(`button`,{className:`qf-item`,onClick:()=>{n(!1),e(t.to)},children:[(0,b.jsx)(`span`,{className:`qf-ic`,children:(0,b.jsx)(w,{id:`feat-${t.id}`,children:(0,b.jsx)(k,{name:t.id,size:28})})}),(0,b.jsx)(`span`,{className:`qf-lbl`,children:t.label})]},t.id)),(0,b.jsx)(`button`,{className:`qf-close`,onClick:()=>n(!1),"aria-label":`Close`,children:(0,b.jsx)(c,{size:14,strokeWidth:3})})]})]})}var I={crash:`✈️`,aviator:`✈️`,"aviator-2":`🛩️`,jetx:`🚀`,spaceman:`🧑‍🚀`,mines:`💣`,plinko:`🎯`,dice:`🎲`,wheel:`🎡`,wingo:`🎡`,"win-go":`🎡`,limbo:`📈`,keno:`🔢`,hilo:`🃏`,coinflip:`🪙`,slots:`🎰`,roulette:`🔴`,blackjack:`🃏`,baccarat:`🀄`,"crazy-time":`🎪`,monopoly:`🎩`,"teen-patti":`🂡`,rummy:`🃏`,football:`⚽`,cricket:`🏏`,basketball:`🏀`},L=e=>(e||``).toLowerCase().replace(/_/g,`-`),R=e=>I[L(e)]||`🎮`,z=e=>{let t=L(e);return t?t.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):`Casino`};function B(e){let t=(e||``).replace(/[^a-z0-9]/gi,``);return`${(t.slice(0,2)||`PL`).toUpperCase()}•••${(t.slice(-2)||`07`).toUpperCase()}`}var V=[{id:`f1`,name:`RO•••24`,initial:`R`,game:`Aviator`,icon:`✈️`,amount:1240,mult:124},{id:`f2`,name:`PR•••88`,initial:`P`,game:`Crash`,icon:`✈️`,amount:860,mult:18},{id:`f3`,name:`AR•••12`,initial:`A`,game:`Crazy Time`,icon:`🎪`,amount:3120,mult:234},{id:`f4`,name:`NE•••57`,initial:`N`,game:`Mines`,icon:`💣`,amount:580,mult:9},{id:`f5`,name:`VI•••33`,initial:`V`,game:`Monopoly Live`,icon:`🎩`,amount:2050,mult:41}],H=`
.wt-wrap { position: fixed; top: calc(58px + env(safe-area-inset-top,0px)); right: 0; z-index: 60; pointer-events: none; }
.wt-toast { display: flex; align-items: center; gap: 10px; padding: 9px 14px 9px 9px; margin-right: 10px; border-radius: 16px; max-width: 78vw;
  background: linear-gradient(135deg, rgba(20,16,40,0.92), rgba(8,6,16,0.95));
  border: 1px solid rgba(64,196,255,0.8);
  box-shadow: 0 0 0 1px rgba(64,196,255,0.25), 0 0 18px rgba(64,196,255,0.55), 0 10px 26px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  transform: translateX(120%); opacity: 0; transition: transform 0.5s cubic-bezier(.22,1,.36,1), opacity 0.5s ease; will-change: transform, opacity; }
.wt-toast.wt-in { transform: translateX(0); opacity: 1; }
.wt-ava { position: relative; width: 40px; height: 40px; flex-shrink: 0; border-radius: 12px; display: grid; place-items: center;
  font-size: 16px; font-weight: 900; color: #fff;
  background: radial-gradient(120% 100% at 50% 6%, rgba(255,255,255,0.45), transparent 55%), linear-gradient(180deg, #7b3df5, #c0267a);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 3px 8px rgba(0,0,0,0.5); }
.wt-game { position: absolute; bottom: -5px; right: -5px; font-size: 14px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6)); }
.wt-mid { min-width: 0; }
.wt-name { font-size: 11px; font-weight: 800; color: #cfe9ff; letter-spacing: 0.2px; white-space: nowrap; }
.wt-won { color: rgba(255,255,255,0.5); font-weight: 700; }
.wt-amt { font-size: 15px; font-weight: 900; color: var(--c7-gold); font-variant-numeric: tabular-nums; line-height: 1.1; text-shadow: 0 0 10px rgba(var(--c7-gold-rgb),0.5); }
.wt-cur { font-size: 9px; color: rgba(255,255,255,0.55); font-weight: 800; }
.wt-mult { flex-shrink: 0; margin-left: 2px; padding: 5px 9px; border-radius: 10px; font-size: 13px; font-weight: 900; color: #06121f;
  background: radial-gradient(120% 100% at 50% 8%, #fff, transparent 55%), linear-gradient(180deg, #6fe0ff, #2aa8ff);
  box-shadow: 0 0 12px rgba(64,196,255,0.7), inset 0 1px 0 rgba(255,255,255,0.7); font-variant-numeric: tabular-nums; }
@media (prefers-reduced-motion: reduce) { .wt-toast { transition: opacity 0.3s ease; transform: none; } }
`;function U(){let[e,t]=(0,y.useState)([]),[n,i]=(0,y.useState)(0),[a,o]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{let e=!0;return(async()=>{try{let{data:n}=await r.from(`casino_bets`).select(`id,user_id,game_type,payout,multiplier`).eq(`is_win`,!0).gt(`payout`,0).order(`created_at`,{ascending:!1}).limit(14);if(!e)return;let i=(n??[]).map(e=>{let t=B(String(e.user_id??``));return{id:String(e.id),name:t,initial:t.charAt(0),game:z(String(e.game_type??``)),icon:R(String(e.game_type??``)),amount:Number(e.payout??0),mult:Number(e.multiplier??0)}}).filter(e=>e.amount>0);t(i.length>=3?i:V)}catch{e&&t(V)}})(),()=>{e=!1}},[]),(0,y.useEffect)(()=>{if(e.length===0)return;o(!0);let t=window.setTimeout(()=>o(!1),5e3),n=window.setTimeout(()=>i(t=>(t+1)%e.length),6300);return()=>{clearTimeout(t),clearTimeout(n)}},[n,e]),e.length===0)return null;let s=e[n],c=s.mult>=1.05?`×${s.mult<10?s.mult.toFixed(1):Math.round(s.mult)}`:`WIN`;return(0,b.jsxs)(`div`,{className:`wt-wrap`,children:[(0,b.jsx)(`style`,{children:H}),(0,b.jsxs)(`div`,{className:`wt-toast${a?` wt-in`:``}`,children:[(0,b.jsxs)(`div`,{className:`wt-ava`,children:[s.initial,(0,b.jsx)(`span`,{className:`wt-game`,children:s.icon})]}),(0,b.jsxs)(`div`,{className:`wt-mid`,children:[(0,b.jsxs)(`div`,{className:`wt-name`,children:[s.name,` `,(0,b.jsxs)(`span`,{className:`wt-won`,children:[`won on `,s.game]})]}),(0,b.jsxs)(`div`,{className:`wt-amt`,children:[`+`,s.amount.toLocaleString(void 0,{maximumFractionDigits:2}),` `,(0,b.jsx)(`span`,{className:`wt-cur`,children:`USDT`})]})]}),(0,b.jsx)(`div`,{className:`wt-mult`,children:c})]})]})}var W=`c7_gullak_seen_v1`,G=228575,K=`
.gk-overlay { position: fixed; inset: 0; z-index: 9000; display: flex; align-items: center; justify-content: center; padding: 24px;
  background: radial-gradient(120% 80% at 50% 30%, rgba(40,12,60,0.55), rgba(6,4,12,0.82));
  -webkit-backdrop-filter: blur(9px); backdrop-filter: blur(9px); animation: gk-fade 0.3s ease both; }
@keyframes gk-fade { from { opacity: 0; } to { opacity: 1; } }
.gk-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.gk-particles i { position: absolute; bottom: -8px; width: 4px; height: 4px; border-radius: 50%;
  background: var(--c7-gold); box-shadow: 0 0 8px var(--c7-gold); opacity: 0; animation: gk-rise 5s linear infinite; }
@keyframes gk-rise { 0% { transform: translateY(0) scale(0.5); opacity: 0; } 12% { opacity: 0.9; } 90% { opacity: 0.7; } 100% { transform: translateY(-94vh) scale(1); opacity: 0; } }

.gk-card { position: relative; width: 100%; max-width: 340px; padding: 30px 22px 22px; text-align: center; border-radius: 26px;
  background: linear-gradient(180deg, rgba(30,16,46,0.96), rgba(12,8,20,0.98));
  border: 1px solid rgba(var(--c7-gold-rgb),0.45);
  box-shadow: 0 0 0 1px rgba(123,61,245,0.35), 0 0 40px rgba(var(--c7-gold-rgb),0.4), 0 24px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1);
  animation: gk-pop 0.55s cubic-bezier(.22,1.4,.4,1) both; }
@keyframes gk-pop { from { transform: scale(0.7) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
.gk-card::before { content: ''; position: absolute; inset: 0; border-radius: 26px; pointer-events: none;
  background: radial-gradient(90% 50% at 50% 0%, rgba(var(--c7-primary-rgb),0.18), transparent 60%); }
.gk-x { position: absolute; top: 12px; right: 12px; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; z-index: 3;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.7); font-size: 13px; font-family: inherit; }

.gk-pot { position: relative; width: 108px; height: 108px; margin: 0 auto 6px; display: grid; place-items: center; }
.gk-glow { position: absolute; inset: -14px; border-radius: 50%; background: radial-gradient(circle, rgba(var(--c7-gold-rgb),0.6), transparent 62%); animation: gk-pulse 2.4s ease-in-out infinite; }
@keyframes gk-pulse { 0%,100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
.gk-coin { position: relative; width: 92px; height: 92px; border-radius: 50%; display: grid; place-items: center; z-index: 1;
  font-size: 38px; font-weight: 900; color: #7a4a00; letter-spacing: -1px;
  background: radial-gradient(circle at 50% 30%, #fff7d6 0 14%, #ffd35a 22% 50%, #f0a020 54% 82%, #c97a10 86% 100%);
  box-shadow: inset 0 3px 2px rgba(255,255,255,0.8), inset 0 -8px 12px rgba(120,70,0,0.55), 0 8px 20px rgba(240,160,32,0.55);
  text-shadow: 0 1px 0 rgba(255,255,255,0.6); animation: gk-float 3s ease-in-out infinite; }
@keyframes gk-float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
.gk-coin span { font-size: 16px; }
.gk-burst { position: absolute; left: 50%; top: 38%; width: 0; height: 0; z-index: 2; pointer-events: none; }
.gk-coin-fly { position: absolute; left: 0; top: 0; font-size: 17px; opacity: 0; animation: gk-burst 0.95s ease-out forwards; animation-delay: var(--d, 0s); }
@keyframes gk-burst { 0% { transform: translate(-50%,-50%) rotate(var(--ang)) translateY(0) scale(0.3); opacity: 0; } 18% { opacity: 1; } 100% { transform: translate(-50%,-50%) rotate(var(--ang)) translateY(-115px) scale(1); opacity: 0; } }

.gk-title { font-size: 24px; font-weight: 900; letter-spacing: 1px; margin-top: 4px;
  background: linear-gradient(180deg, #fff3c4, var(--c7-gold) 55%, #f0a020); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 6px rgba(var(--c7-primary-rgb),0.5)); }
.gk-sub { font-size: 10.5px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-top: 4px; }
.gk-counter { font-size: 40px; font-weight: 900; line-height: 1.1; margin: 8px 0 2px; color: #fff; font-variant-numeric: tabular-nums;
  text-shadow: 0 0 18px rgba(var(--c7-gold-rgb),0.6), 0 2px 4px rgba(0,0,0,0.5); }
.gk-note { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 600; margin-bottom: 16px; }
.gk-start { position: relative; width: 100%; padding: 15px; border-radius: 16px; border: none; cursor: pointer; overflow: hidden;
  font-size: 15px; font-weight: 900; letter-spacing: 0.6px; color: #3a1d00; font-family: inherit;
  background: radial-gradient(120% 90% at 50% -10%, rgba(255,255,255,0.55), transparent 55%), linear-gradient(180deg, var(--c7-gold), var(--c7-primary));
  box-shadow: 0 6px 0 var(--c7-primary-dark), inset 0 2px 0 rgba(255,255,255,0.6), 0 12px 24px -5px rgba(var(--c7-primary-rgb),0.6); transition: transform 0.12s ease, box-shadow 0.12s ease; }
.gk-start::after { content: ''; position: absolute; inset: 0; background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%); background-size: 250% 100%; animation: gk-shine 2.6s linear infinite; mix-blend-mode: overlay; }
@keyframes gk-shine { 0% { background-position: 200% 0; } 60%,100% { background-position: -120% 0; } }
.gk-start:active { transform: translateY(5px); box-shadow: 0 1px 0 var(--c7-primary-dark), inset 0 2px 0 rgba(255,255,255,0.5); }
.gk-later { margin-top: 11px; background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.45); font-size: 12px; font-weight: 700; font-family: inherit; }
@media (prefers-reduced-motion: reduce) { .gk-particles i, .gk-glow, .gk-coin, .gk-coin-fly, .gk-start::after { animation: none !important; } .gk-coin-fly { display: none; } }
`;function q(){let e=i(),[t,n]=(0,y.useState)(()=>{try{return sessionStorage.getItem(W)!==`1`}catch{return!0}}),[r,a]=(0,y.useState)(0);(0,y.useEffect)(()=>{if(!t)return;let e=0,n=0,r=t=>{n||=t;let i=Math.min(1,(t-n)/1600),o=1-(1-i)**3;a(Math.round(o*G)),i<1&&(e=requestAnimationFrame(r))};return e=requestAnimationFrame(r),()=>cancelAnimationFrame(e)},[t]);let o=()=>{try{sessionStorage.setItem(W,`1`)}catch{}n(!1)};return t?(0,b.jsxs)(`div`,{className:`gk-overlay`,onClick:o,children:[(0,b.jsx)(`style`,{children:K}),(0,b.jsx)(`div`,{className:`gk-particles`,children:Array.from({length:16}).map((e,t)=>(0,b.jsx)(`i`,{style:{left:`${(t*6.3+4)%100}%`,animationDelay:`${t%8*.55}s`,animationDuration:`${4+t%5*.7}s`}},t))}),(0,b.jsxs)(`div`,{className:`gk-card`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`gk-x`,onClick:o,"aria-label":`Close`,children:`✕`}),(0,b.jsxs)(`div`,{className:`gk-pot`,children:[(0,b.jsx)(`span`,{className:`gk-glow`}),(0,b.jsxs)(`div`,{className:`gk-coin`,children:[`₹`,(0,b.jsx)(`span`,{children:`C7`})]}),(0,b.jsx)(`div`,{className:`gk-burst`,children:Array.from({length:12}).map((e,t)=>(0,b.jsx)(`span`,{className:`gk-coin-fly`,style:{"--ang":`${t*30}deg`,"--d":`${t*18}ms`},children:`🪙`},t))})]}),(0,b.jsx)(`div`,{className:`gk-title`,children:`LUCKY GULLAK`}),(0,b.jsx)(`div`,{className:`gk-sub`,children:`Today's lucky jackpot pool`}),(0,b.jsxs)(`div`,{className:`gk-counter`,children:[`₹`,r.toLocaleString()]}),(0,b.jsx)(`div`,{className:`gk-note`,children:`Deposit & play to win your share 🎉`}),(0,b.jsx)(`button`,{className:`gk-start`,onClick:()=>{o(),e(`/dtx/promotions`)},children:`PLAY & WIN →`}),(0,b.jsx)(`button`,{className:`gk-later`,onClick:o,children:`Maybe later`})]})]}):null}var J=[{id:`popular`,label:`Hot`,emoji:`🔥`},{id:`spribe`,label:`Lottery`,emoji:`🎡`},{id:`slots`,label:`Slots`,emoji:`🎰`},{id:`fishing`,label:`Fishing`,emoji:`🎣`},{id:`live`,label:`Live`,emoji:`🎲`},{id:`indian`,label:`Cards`,emoji:`🃏`}],Y=[{k:`MONTHLY CARD`,t:`Daily rewards, all month`,emoji:`💳`,grad:`linear-gradient(120deg,#2b1a05,#6b3e0b)`},{k:`AVIATOR`,t:`Daily 1 million leaderboard`,emoji:`✈️`,grad:`linear-gradient(120deg,#3a0a0a,#7a1414)`},{k:`AGENT`,t:`Refer & earn commission`,emoji:`🤝`,grad:`linear-gradient(120deg,#06281f,#0b5c39)`}],X=[{k:`UPI`,s:`Instant · INR`,icon:`📱`,c:`var(--c7-success)`,to:`/deposit/upi`}],Z=[{k:`USDT`,s:`TRC-20 · TRON`,icon:`🟢`,c:`var(--c7-success)`,to:`/deposit/crypto`}],Q=a;function $(){let e=i(),[t,n]=(0,y.useState)(`popular`),[a,o]=(0,y.useState)(null),[c,g]=(0,y.useState)(228522),[x,T]=(0,y.useState)(0),[E,D]=(0,y.useState)(!1),[O,k]=(0,y.useState)(``),{on:A,toggle:j}=Q();(0,y.useEffect)(()=>{(async()=>{let{data:e}=await r.auth.getUser();if(!e?.user)return;let{data:t}=await r.from(`casino_wallets`).select(`balance`).eq(`user_id`,e.user.id).eq(`currency`,`USDT`).maybeSingle();o(Number(t?.balance??0))})()},[]),(0,y.useEffect)(()=>{let e=setInterval(()=>g(e=>e+Math.floor(Math.random()*37)),1500),t=setInterval(()=>T(e=>(e+1)%Y.length),4e3);return()=>{clearInterval(e),clearInterval(t)}},[]);let M=(0,y.useMemo)(()=>{let e=O.trim().toLowerCase();return e?_.filter(t=>t.name.toLowerCase().includes(e)).slice(0,30):t===`popular`?[..._].sort((e,t)=>t.players-e.players).slice(0,18):_.filter(e=>e.section===t)},[t,O]);return(0,b.jsxs)(`div`,{className:`uo-root`,children:[(0,b.jsx)(ee,{}),(0,b.jsx)(v,{}),(0,b.jsx)(S,{open:E,onClose:()=>D(!1)}),(0,b.jsxs)(`header`,{className:`uo-bar`,children:[(0,b.jsx)(`button`,{className:`uo-ic`,onClick:()=>D(!0),"aria-label":`Open menu`,children:(0,b.jsx)(s,{size:18})}),(0,b.jsxs)(`button`,{className:`uo-avatar`,onClick:()=>e(`/me`),"aria-label":`My account`,children:[`🧑‍✈️`,(0,b.jsxs)(`span`,{className:`uo-vip`,children:[(0,b.jsx)(l,{size:9}),` VIP`]})]}),(0,b.jsxs)(`button`,{className:`uo-coins`,onClick:()=>e(`/deposit/request`),children:[(0,b.jsx)(`span`,{className:`uo-coin`,children:`🪙`}),(0,b.jsx)(`span`,{className:`uo-bal`,children:a===null?`—`:a.toLocaleString(void 0,{maximumFractionDigits:2})}),(0,b.jsx)(`span`,{className:`uo-plus`,children:(0,b.jsx)(d,{size:14})})]}),(0,b.jsxs)(`div`,{className:`uo-bar-icons`,children:[(0,b.jsx)(`button`,{className:`uo-ic`,onClick:j,"aria-label":`Toggle music`,children:A?(0,b.jsx)(p,{size:18}):(0,b.jsx)(m,{size:18})}),(0,b.jsxs)(`button`,{className:`uo-ic`,onClick:()=>e(`/dtx/promotions`),"aria-label":`Inbox`,children:[(0,b.jsx)(u,{size:18}),(0,b.jsx)(`i`,{className:`uo-dot`})]}),(0,b.jsx)(`button`,{className:`uo-ic`,onClick:()=>e(`/profile`),"aria-label":`Settings`,children:(0,b.jsx)(f,{size:18})})]})]}),(0,b.jsxs)(`main`,{className:`uo-main`,children:[(0,b.jsx)(`div`,{className:`uo-tabs`,children:J.map(e=>(0,b.jsxs)(`button`,{className:`uo-tab`,"data-on":t===e.id,onClick:()=>n(e.id),children:[(0,b.jsx)(`span`,{className:`uo-tab-ic`,children:e.emoji}),(0,b.jsx)(`span`,{children:e.label})]},e.id))}),(0,b.jsxs)(`button`,{className:`uo-banner uo-fade`,style:{background:Y[x].grad},onClick:()=>e(x===2?`/agent`:`/dtx/wingo`),children:[(0,b.jsx)(`span`,{className:`uo-bn-gloss`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-bn-shine`,"aria-hidden":`true`}),(0,b.jsxs)(`div`,{className:`uo-bn-body`,children:[(0,b.jsx)(`div`,{className:`uo-bn-k`,children:Y[x].k}),(0,b.jsx)(`div`,{className:`uo-bn-t`,children:Y[x].t})]}),(0,b.jsx)(`span`,{className:`uo-bn-art`,children:(0,b.jsx)(w,{id:`banner-${Y[x].k.toLowerCase().replace(/\s+/g,`-`)}`,children:(0,b.jsx)(`span`,{className:`uo-bn-emoji`,children:Y[x].emoji})})}),(0,b.jsx)(`div`,{className:`uo-dots`,children:Y.map((e,t)=>(0,b.jsx)(`i`,{"data-on":t===x},t))})]},x),(0,b.jsxs)(`div`,{className:`uo-jackpot`,children:[(0,b.jsx)(`span`,{className:`uo-jp-rays`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-shine`}),(0,b.jsx)(`span`,{className:`uo-jp-spark s1`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-jp-spark s2`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-jp-spark s3`,"aria-hidden":`true`}),(0,b.jsx)(`div`,{className:`uo-jp-title`,children:`JACKPOT LOTTO`}),(0,b.jsx)(`div`,{className:`uo-jp-reel`,children:(0,b.jsx)(`div`,{className:`uo-jp-num uo-glow`,children:c.toLocaleString()})},c),(0,b.jsx)(`div`,{className:`uo-jp-sub`,children:`100% Random & 100% Provably Fair`})]}),(0,b.jsxs)(`div`,{className:`uo-sec`,children:[(0,b.jsx)(`div`,{className:`uo-pick-h`,children:`✦ TOP PICK ✦`}),(0,b.jsxs)(`button`,{className:`uo-pick`,onClick:()=>e(`/dtx/games/aviator`),children:[(0,b.jsx)(`span`,{className:`uo-pick-glow`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-pick-shine`,"aria-hidden":`true`}),(0,b.jsx)(`span`,{className:`uo-pick-badge`,children:`★ FEATURED`}),(0,b.jsx)(`span`,{className:`uo-pick-emoji`,children:(0,b.jsx)(w,{id:`pick-aviator`,children:`✈️`})}),(0,b.jsxs)(`div`,{className:`uo-pick-body`,children:[(0,b.jsx)(`div`,{className:`uo-pick-t`,children:`C7 AVIATOR`}),(0,b.jsx)(`div`,{className:`uo-pick-s`,children:`HIGH MULTIPLIER · INSTANT CASHOUT`}),(0,b.jsxs)(`span`,{className:`uo-pick-cta`,children:[`▶ PLAY NOW `,(0,b.jsx)(`b`,{className:`uo-pick-live`,children:`● 8,891 live`})]})]})]})]}),(0,b.jsxs)(`div`,{className:`uo-search`,children:[(0,b.jsx)(`span`,{className:`uo-search-ic`,children:`🔎`}),(0,b.jsx)(`input`,{className:`uo-search-in`,value:O,onChange:e=>k(e.target.value),placeholder:`Enter the game name here`,"aria-label":`Search games`,autoComplete:`off`}),O&&(0,b.jsx)(`button`,{className:`uo-search-x`,onClick:()=>k(``),"aria-label":`Clear`,children:`✕`})]}),(0,b.jsxs)(`div`,{className:`uo-sec-h`,style:{marginTop:8},children:[(0,b.jsx)(`span`,{className:`uo-sec-t`,children:O?`🔎 Results · ${M.length}`:`🎮 Popular Games`}),!O&&(0,b.jsx)(`button`,{className:`uo-sec-all`,onClick:()=>e(`/dtx/games`),children:`VIEW ALL ›`})]}),O&&M.length===0&&(0,b.jsxs)(`div`,{className:`uo-no-res`,children:[`No games match “`,O,`”.`]}),(0,b.jsx)(`div`,{className:`uo-grid`,children:M.map((t,n)=>(0,b.jsxs)(`button`,{className:`uo-card uo-pop`,onClick:()=>e(`/dtx/games/`+t.id),style:{"--a":t.color,"--i":n%6,animationDelay:`${Math.min(n,12)*35}ms`},children:[t.badge&&(0,b.jsx)(`span`,{className:`uo-badge`,"data-b":t.badge,children:t.badge}),(0,b.jsx)(`span`,{className:`uo-card-ic`,children:(0,b.jsx)(C,{id:t.id,emoji:t.icon,emojiClassName:`uo-ic-emoji`})}),(0,b.jsx)(`span`,{className:`uo-card-n`,children:t.name}),(0,b.jsxs)(`span`,{className:`uo-card-p`,children:[`▸ `,t.players.toLocaleString()]})]},t.id))},O||t),(0,b.jsxs)(`div`,{className:`uo-sec`,style:{marginTop:20},children:[(0,b.jsx)(`div`,{className:`uo-sec-h`,children:(0,b.jsx)(`span`,{className:`uo-sec-t`,children:`💰 Deposit Now`})}),(0,b.jsxs)(`div`,{className:`uo-dep-grp`,children:[`📱 UPI · INR `,(0,b.jsx)(`span`,{className:`uo-dep-grp-b`,children:`Instant`})]}),(0,b.jsx)(`div`,{className:`uo-dep uo-dep--1`,children:X.map((t,n)=>(0,b.jsxs)(`button`,{className:`uo-dep-tile uo-dep-tile--wide`,onClick:()=>e(t.to),style:{"--dc":t.c},children:[(0,b.jsx)(`span`,{className:`uo-dep-ic`,children:(0,b.jsx)(w,{id:`dep-${t.k.toLowerCase()}`,children:t.icon})}),(0,b.jsx)(`span`,{className:`uo-dep-k`,children:t.k}),(0,b.jsx)(`span`,{className:`uo-dep-s`,children:t.s})]},t.k+n))}),(0,b.jsxs)(`div`,{className:`uo-dep-grp`,children:[`₿ Crypto `,(0,b.jsx)(`span`,{className:`uo-dep-grp-b`,children:`No limits`})]}),(0,b.jsx)(`div`,{className:`uo-dep uo-dep--1`,children:Z.map((t,n)=>(0,b.jsxs)(`button`,{className:`uo-dep-tile uo-dep-tile--wide`,onClick:()=>e(t.to),style:{"--dc":t.c},children:[(0,b.jsx)(`span`,{className:`uo-dep-ic`,children:(0,b.jsx)(w,{id:`dep-${t.k.toLowerCase()}`,children:t.icon})}),(0,b.jsx)(`span`,{className:`uo-dep-k`,children:t.k}),(0,b.jsx)(`span`,{className:`uo-dep-s`,children:t.s})]},t.k+n))})]})]}),(0,b.jsx)(h,{}),(0,b.jsx)(F,{}),(0,b.jsx)(U,{}),(0,b.jsx)(q,{})]})}function ee(){return(0,b.jsx)(`style`,{children:`
      .uo-root { min-height: 100vh; color: #fff; padding-bottom: 82px; position: relative; overflow-x: hidden; }
      .uo-bar { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; gap: 8px; padding: 10px 12px;
        background: linear-gradient(180deg, rgba(var(--c7-bg-rgb),0.85), rgba(var(--c7-bg-rgb),0.2)); backdrop-filter: blur(6px); }
      .uo-avatar { position: relative; width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.4);
        border: 2px solid var(--c7-primary); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; cursor: pointer; padding: 0; }
      .uo-vip { position: absolute; bottom: -7px; left: 50%; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 2px;
        font-size: 7px; font-weight: 900; padding: 1px 5px; border-radius: 999px; background: linear-gradient(90deg,var(--c7-gold),var(--c7-primary)); color: var(--c7-bg); white-space: nowrap; }
      .uo-coins { flex: 1; display: flex; align-items: center; gap: 7px; padding: 6px 6px 6px 12px; border-radius: 999px;
        background: rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.06); cursor: pointer; max-width: 200px; margin: 0 auto; }
      .uo-coin { font-size: 15px; }
      .uo-bal { flex: 1; font-size: 16px; font-weight: 900; color: var(--c7-gold-soft); font-variant-numeric: tabular-nums; text-align: left; }
      .uo-plus { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg,var(--c7-primary),var(--c7-primary)); color: var(--c7-bg); display: inline-flex; align-items: center; justify-content: center; }
      .uo-bar-icons { display: flex; gap: 4px; }
      .uo-ic { position: relative; width: 34px; height: 34px; border-radius: 10px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); color: var(--c7-gold-soft); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
      .uo-dot { position: absolute; top: 5px; right: 5px; width: 7px; height: 7px; border-radius: 50%; background: var(--c7-danger); }
      .uo-main { padding: 8px 12px; }
      .uo-tabs { display: flex; gap: 8px; overflow-x: auto; padding: 8px 0 12px; }
      .uo-tab { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 58px; padding: 8px 6px; border-radius: 18px;
        background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 800; cursor: pointer;
        box-shadow: 0 3px 0 rgba(0,0,0,0.3); transition: transform .14s cubic-bezier(0.34,1.56,0.64,1), box-shadow .12s ease; }
      .uo-tab-ic { font-size: 22px; }
      .uo-tab[data-on="true"] { background:
          radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.4), transparent 60%),
          linear-gradient(180deg,var(--c7-gold),var(--c7-primary)); border-color: transparent; color: var(--c7-bg);
        box-shadow: 0 4px 0 var(--c7-primary-dark), inset 0 2px 0 rgba(255,255,255,0.55), inset 0 -9px 16px rgba(0,0,0,0.24),
          0 8px 18px -4px rgba(var(--c7-primary-rgb),0.6); transform: translateY(-2px) scale(1.05); }
      .uo-jackpot { margin-top: 4px; text-align: center; padding: 16px; border-radius: 24px; position: relative; overflow: hidden;
        background:
          radial-gradient(120% 70% at 50% -10%, rgba(255,221,128,0.28), transparent 55%),
          linear-gradient(180deg, #9a2415, #45120a 92%); border: 1px solid rgba(255,200,61,0.35);
        box-shadow: 0 7px 0 rgba(0,0,0,0.45), 0 14px 28px -6px rgba(180,70,20,0.55), inset 0 2px 0 rgba(255,221,128,0.4), inset 0 -16px 30px rgba(0,0,0,0.45); }
      .uo-jp-title { font-size: 18px; font-weight: 900; letter-spacing: 2px; color: var(--c7-gold); text-shadow: 0 2px 0 rgba(0,0,0,0.5); }
      .uo-jp-num { font-size: 34px; font-weight: 900; color: #fff; font-variant-numeric: tabular-nums; letter-spacing: 1px;
        text-shadow: 0 0 18px rgba(var(--c7-primary-rgb),0.7); margin: 2px 0; }
      .uo-jp-sub { font-size: 11px; font-weight: 700; color: var(--c7-gold-soft); }
      .uo-banner { width: 100%; margin-top: 12px; min-height: 86px; border: none; border-radius: 22px; padding: 16px; cursor: pointer; color: #fff;
        display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; text-align: left;
        box-shadow: 0 6px 0 rgba(0,0,0,0.32), 0 10px 18px rgba(0,0,0,0.28); }
      .uo-bn-k { font-size: 10px; font-weight: 900; letter-spacing: 1.5px; opacity: 0.85; }
      .uo-bn-t { font-size: 16px; font-weight: 900; margin-top: 4px; max-width: 70%; }
      .uo-bn-emoji { font-size: 44px; opacity: 0.6; }
      .uo-dots { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 5px; }
      .uo-dots i { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.35); }
      .uo-dots i[data-on="true"] { background: var(--c7-gold); width: 16px; border-radius: 3px; }
      .uo-sec { margin-top: 16px; }
      .uo-search { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 11px 14px; border-radius: 14px;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(var(--c7-primary-rgb),0.3); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); transition: border-color 0.18s, box-shadow 0.18s; }
      .uo-search:focus-within { border-color: var(--c7-primary); box-shadow: 0 0 0 3px rgba(var(--c7-primary-rgb),0.18); }
      .uo-search-ic { font-size: 14px; opacity: 0.85; }
      .uo-search-in { flex: 1; min-width: 0; background: none; border: none; outline: none; color: #fff; font-size: 14px; font-weight: 600; font-family: inherit; }
      .uo-search-in::placeholder { color: rgba(255,255,255,0.4); font-weight: 600; }
      .uo-search-x { flex-shrink: 0; background: rgba(255,255,255,0.08); border: none; color: rgba(255,255,255,0.7); width: 22px; height: 22px; border-radius: 50%; cursor: pointer; font-size: 11px; font-family: inherit; }
      .uo-no-res { padding: 24px 10px; text-align: center; color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 700; }
      .uo-sec-h { display: flex; align-items: center; justify-content: space-between; margin-bottom: 9px; }
      .uo-sec-t { font-size: 13px; font-weight: 900; color: #fff; letter-spacing: 0.4px; }
      .uo-sec-bonus { font-size: 9px; font-weight: 900; color: var(--c7-bg); background: var(--c7-gold); padding: 2px 6px; border-radius: 6px; margin-left: 4px; }
      .uo-sec-all { background: none; border: none; color: var(--c7-primary); font-size: 11px; font-weight: 800; cursor: pointer; }
      .uo-dep { display: grid; gap: 7px; }
      .uo-dep--1 { grid-template-columns: 1fr; }
      .uo-dep--4 { grid-template-columns: repeat(4,1fr); }
      .uo-dep-grp { display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: var(--c7-gold); margin: 11px 0 5px; }
      .uo-dep-grp-b { font-size: 8px; font-weight: 800; padding: 1px 6px; border-radius: 999px; background: rgba(var(--c7-primary-rgb),0.18); color: var(--c7-primary); letter-spacing: 0.5px; }
      .uo-dep-tile--wide { flex-direction: row !important; justify-content: flex-start; gap: 12px; padding: 13px 14px; }
      .uo-dep-tile--wide .uo-dep-ic { font-size: 22px; }
      .uo-dep-tile--wide .uo-dep-s { margin-left: auto; opacity: 0.85; }
      .uo-dep-tile { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 12px 4px; border-radius: 18px; cursor: pointer; color: #fff;
        background:
          radial-gradient(130% 80% at 50% -10%, rgba(255,255,255,0.12), transparent 55%),
          linear-gradient(180deg, color-mix(in srgb, var(--dc) 20%, #100c08), #0a0805);
        border: 1px solid color-mix(in srgb, var(--dc) 30%, rgba(255,255,255,0.05));
        box-shadow: inset 0 1.4px 0 rgba(255,255,255,0.22), inset 0 -10px 18px rgba(0,0,0,0.35),
          0 5px 0 rgba(0,0,0,0.4), 0 9px 16px -4px color-mix(in srgb, var(--dc) 45%, transparent);
        transition: transform .12s ease, box-shadow .12s ease; }
      .uo-dep-tile:active { transform: translateY(3px) scale(0.97); box-shadow: inset 0 1.4px 0 rgba(255,255,255,0.18), 0 1px 0 rgba(0,0,0,0.4); }
      .uo-dep-ic { font-size: 20px; font-weight: 900; line-height: 1; filter: drop-shadow(0 0 8px color-mix(in srgb, var(--dc) 60%, transparent)); }
      .uo-dep-k { font-size: 11px; font-weight: 900; }
      .uo-dep-s { font-size: 8px; font-weight: 800; color: var(--dc); letter-spacing: 0.3px; }
      .uo-pick-h { text-align: center; font-size: 12px; font-weight: 900; letter-spacing: 3px; color: var(--c7-gold-soft); margin-bottom: 10px; }
      .uo-pick { position: relative; width: 100%; display: flex; align-items: center; gap: 12px; padding: 20px 16px; border-radius: 26px; cursor: pointer; color: #fff; overflow: hidden;
        background:
          radial-gradient(120% 90% at 50% -15%, rgba(255,255,255,0.28), transparent 55%),
          linear-gradient(120deg, #8a23a3, #d12ae6 56%, var(--c7-primary)); border: none; text-align: left;
        box-shadow: 0 8px 0 rgba(0,0,0,0.34), 0 16px 30px -6px rgba(192,38,211,0.55), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -18px 32px rgba(0,0,0,0.32);
        transition: transform .12s ease, box-shadow .12s ease; }
      .uo-pick:active { transform: translateY(5px) scale(0.99); box-shadow: 0 2px 0 rgba(0,0,0,0.34), 0 6px 14px rgba(192,38,211,0.4), inset 0 2px 0 rgba(255,255,255,0.3); }
      .uo-pick-badge { position: absolute; top: 10px; left: 12px; background: rgba(255,255,255,0.92); color: #c026d3; font-size: 9px; font-weight: 900; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 8px; }
      .uo-pick-emoji { font-size: 52px; flex-shrink: 0; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.45)); }
      .uo-pick-body { flex: 1; min-width: 0; }
      .uo-pick-t { font-size: 25px; font-weight: 900; letter-spacing: 0.4px; }
      .uo-pick-s { font-size: 10px; font-weight: 800; color: rgba(255,255,255,0.88); margin-top: 3px; letter-spacing: 0.4px; }
      .uo-pick-cta { display: inline-flex; align-items: center; gap: 9px; margin-top: 11px; background: linear-gradient(135deg,var(--c7-gold),var(--c7-primary)); color: var(--c7-bg); font-size: 12px; font-weight: 900; padding: 8px 14px; border-radius: 10px; }
      .uo-pick-live { color: #166534; font-weight: 900; }
      .uo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(82px, 1fr)); gap: 8px; margin-top: 4px; }
      .uo-card { position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 13px 4px 10px; border-radius: 18px; cursor: pointer; color: #fff; isolation: isolate;
        background:
          radial-gradient(130% 80% at 50% -10%, rgba(255,255,255,0.16), transparent 55%),
          linear-gradient(180deg, color-mix(in srgb, var(--a) 26%, #16110a), #0a0805 86%);
        border: 1px solid color-mix(in srgb, var(--a) 30%, rgba(255,255,255,0.06));
        box-shadow:
          inset 0 1.6px 0 rgba(255,255,255,0.28), inset 0 -14px 26px rgba(0,0,0,0.42),
          0 6px 0 rgba(0,0,0,0.45), 0 13px 22px -4px color-mix(in srgb, var(--a) 50%, transparent);
        transition: transform .12s ease, box-shadow .12s ease; }
      .uo-card::before { content:''; position:absolute; inset:0 0 auto; height:42%; border-radius:22px 22px 60% 60%/22px 22px 30% 30%;
        background: linear-gradient(180deg, rgba(255,255,255,0.20), transparent); pointer-events:none; z-index:-1; }
      .uo-card:active { transform: translateY(5px) scale(0.97);
        box-shadow: inset 0 1.6px 0 rgba(255,255,255,0.22), inset 0 -8px 18px rgba(0,0,0,0.4), 0 1px 0 rgba(0,0,0,0.45), 0 4px 10px color-mix(in srgb, var(--a) 40%, transparent); }
      /* Simple flat icon tile (glossy candy 3D + spin chip dropped per design) */
      .uo-card-ic { position: relative; width: clamp(44px, 60%, 58px); aspect-ratio: 1; border-radius: 16px; display: grid; place-items: center; margin-bottom: 2px;
        background: var(--a);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12), 0 2px 6px -2px rgba(0,0,0,0.5); }
      .uo-ic-emoji { font-size: clamp(23px, 7vw, 31px); line-height: 1; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5)); position: relative; z-index: 1; }
      .uo-card-n { font-size: clamp(10px, 2.7vw, 12px); font-weight: 800; text-align: center; line-height: 1.1; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .uo-card-p { font-size: clamp(8px, 2.1vw, 9px); color: var(--c7-gold-soft); font-weight: 700; }
      /* Flat badge (3D gloss + LIVE pulse dropped per design) */
      .uo-badge { position: absolute; top: 4px; right: 4px; z-index: 5; font-size: 6.5px; font-weight: 900; letter-spacing: 0.3px; padding: 2px 4px 1px; border-radius: 5px; color: #fff; text-transform: uppercase; }
      .uo-badge[data-b="HOT"] { background: var(--c7-accent); color: #2a1400; }
      .uo-badge[data-b="NEW"] { background: var(--c7-gold); color: #2a1a00; }
      .uo-badge[data-b="LIVE"] { background: var(--c7-primary); color: #fff; font-size: 8.5px; letter-spacing: 1px; }
      .uo-nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 520px; display: grid; grid-template-columns: repeat(5,1fr); align-items: end;
        background: linear-gradient(180deg, rgba(var(--c7-bg-rgb),0.7), rgba(var(--c7-bg-rgb),0.97)); backdrop-filter: blur(14px); border-top: 1px solid rgba(var(--c7-primary-rgb),0.3);
        padding: 8px 4px calc(8px + env(safe-area-inset-bottom,0px)); z-index: 20; }
      .uo-navi { display: flex; flex-direction: column; align-items: center; gap: 3px; background: none; border: none; color: rgba(255,255,255,0.55); font-size: 10px; font-weight: 800; cursor: pointer; padding: 4px 0; }
      .uo-navi--on { color: var(--c7-primary); }
      .uo-navi--mid { color: var(--c7-gold); }
      .uo-mid { width: 54px; height: 54px; margin-top: -23px; border-radius: 50%; color: var(--c7-bg); display: flex; align-items: center; justify-content: center;
        background: radial-gradient(120% 100% at 50% 12%, rgba(255,255,255,0.6), transparent 50%), linear-gradient(180deg,var(--c7-gold),var(--c7-primary));
        box-shadow: 0 4px 18px rgba(var(--c7-primary-rgb),0.6), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.3); border: 3px solid rgba(var(--c7-bg-rgb),0.9); animation: uo-pulse 2.2s ease-in-out infinite; }
      @keyframes uo-pulse { 0%,100% { box-shadow: 0 4px 18px rgba(var(--c7-primary-rgb),0.5); } 50% { box-shadow: 0 4px 28px rgba(var(--c7-primary-rgb),0.85); transform: scale(1.04); } }
      @keyframes uo-glow { 0%,100% { text-shadow: 0 0 14px rgba(var(--c7-primary-rgb),0.6); } 50% { text-shadow: 0 0 26px rgba(var(--c7-primary-rgb),0.95), 0 0 8px #fff; } }
      .uo-glow { animation: uo-glow 1.6s ease-in-out infinite; }
      .uo-shine { position: absolute; top: 0; left: -60%; width: 50%; height: 100%; transform: skewX(-20deg);
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); animation: uo-shine 3.2s ease-in-out infinite; }
      @keyframes uo-shine { 0% { left: -60%; } 55%,100% { left: 130%; } }
      @keyframes uo-fade { from { opacity: 0; transform: translateY(6px) scale(0.99); } to { opacity: 1; transform: none; } }
      .uo-fade { animation: uo-fade 0.45s ease both; }
      @keyframes uo-pop { from { opacity: 0; transform: translateY(10px) scale(0.95); } to { opacity: 1; transform: none; } }
      .uo-pop { animation: uo-pop 0.34s cubic-bezier(0.34,1.56,0.64,1) both; }
      @keyframes uo-float { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-4px) rotate(1deg); } }

      /* ════════ PREMIUM OVERHAUL (CSS-only, fully asset-ready) ════════ */
      /* HomeArt drop-in image — fills its slot, falls back to emoji/gradient. */
      .uo-art-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;
        filter: drop-shadow(0 6px 14px rgba(0,0,0,0.55)); z-index: 2; pointer-events: none; }

      /* Fine grain + vignette over the whole home for a premium finish. */
      .uo-root::after { content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 1;
        background:
          radial-gradient(125% 80% at 50% -8%, transparent 58%, rgba(0,0,0,0.38)),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E");
        mix-blend-mode: overlay; }
      /* Colour wash — emerald + teal jungle depth */
      .uo-root::before { content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
        background:
          radial-gradient(95% 55% at 12% -5%, rgba(23,196,110,0.18), transparent 60%),
          radial-gradient(100% 70% at 92% 102%, rgba(18,184,166,0.16), transparent 62%),
          radial-gradient(80% 50% at 50% 40%, rgba(10,90,70,0.12), transparent 70%); }
      .uo-bar, .uo-main { position: relative; z-index: 2; }

      /* Banner — premium glass, art zone, gloss + shine sweep. */
      .uo-banner { min-height: 104px; }
      .uo-bn-body { position: relative; z-index: 3; }
      .uo-bn-art { position: relative; width: 98px; height: 76px; flex-shrink: 0; display: grid; place-items: center; z-index: 3; }
      .uo-bn-emoji { font-size: 46px; opacity: 0.95; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.5)); animation: uo-float 4s ease-in-out infinite; }
      .uo-bn-gloss { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 1;
        background: linear-gradient(180deg, rgba(255,255,255,0.24), transparent 44%);
        box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.32), inset 0 -22px 42px rgba(0,0,0,0.42); }
      .uo-bn-shine { position: absolute; top: 0; left: -60%; width: 45%; height: 100%; transform: skewX(-20deg); pointer-events: none; z-index: 2;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent); animation: uo-shine 4.6s ease-in-out infinite; }

      /* Top-pick — rotating premium glow + bigger 3D art slot. */
      .uo-pick { padding: 22px 18px; isolation: isolate; }
      .uo-pick-emoji { position: relative; width: 70px; height: 70px; display: grid; place-items: center; flex-shrink: 0; }
      .uo-pick-badge, .uo-pick-body { position: relative; z-index: 2; }
      .uo-pick-emoji { z-index: 2; }
      .uo-pick-glow { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 0;
        background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.5) 12%, transparent 30%, rgba(255,200,61,0.55) 60%, transparent 78%);
        opacity: 0.55; animation: uo-spin 6.5s linear infinite; }
      .uo-pick-shine { position: absolute; top: 0; left: -60%; width: 40%; height: 100%; transform: skewX(-20deg); z-index: 1; pointer-events: none;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: uo-shine 3.8s ease-in-out infinite; }
      @keyframes uo-spin { to { transform: rotate(360deg); } }

      /* Game card — premium sheen sweep + glossier icon backing. */
      .uo-card { border-radius: 20px; }
      .uo-card-ic { overflow: hidden;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.16), inset 0 2px 5px rgba(255,255,255,0.28), 0 4px 10px -3px rgba(0,0,0,0.6); }
      .uo-card-ic::after { content: ''; position: absolute; top: 0; left: -120%; width: 60%; height: 100%; transform: skewX(-20deg); z-index: 3; pointer-events: none;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent); animation: uo-card-sheen 4.8s ease-in-out infinite; }
      @keyframes uo-card-sheen { 0%, 72% { left: -120%; } 88%, 100% { left: 170%; } }

      /* Jackpot — premium gold frame + bigger odometer digits. */
      .uo-jackpot { --c7-primary-rgb: 255,180,40; border: 2px solid rgba(255,200,61,0.55);
        box-shadow: 0 7px 0 rgba(0,0,0,0.45), 0 16px 34px -6px rgba(180,70,20,0.6),
          inset 0 2px 0 rgba(255,221,128,0.45), inset 0 -18px 36px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,200,61,0.18); }
      .uo-jp-num { font-size: 40px; letter-spacing: 2px; color: #ffe9a8;
        text-shadow: 0 0 18px rgba(255,180,40,0.75), 0 2px 2px rgba(0,0,0,0.65); }
      /* Cinematic jackpot — god-rays, spotlight breathe, sparkles, spin reel */
      .uo-jackpot { animation: uo-jp-breathe 4.5s ease-in-out infinite; }
      .uo-jp-title, .uo-jp-reel, .uo-jp-sub { position: relative; z-index: 2; }
      .uo-jp-rays { position: absolute; inset: -45%; z-index: 0; pointer-events: none; opacity: 0.45;
        background: repeating-conic-gradient(from 0deg at 50% 44%, rgba(255,221,128,0) 0deg, rgba(255,221,128,0.24) 5deg, rgba(255,221,128,0) 11deg);
        -webkit-mask: radial-gradient(closest-side, #000 28%, transparent 72%);
                mask: radial-gradient(closest-side, #000 28%, transparent 72%);
        animation: uo-spin 24s linear infinite; }
      .uo-jp-reel { display: inline-block; animation: uo-jp-roll .5s cubic-bezier(0.2,0.9,0.2,1) both; will-change: transform; }
      .uo-jp-spark { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #fff; z-index: 3; pointer-events: none; opacity: 0;
        box-shadow: 0 0 9px 2px rgba(255,221,128,0.95); animation: uo-spark 2.6s ease-in-out infinite; }
      .uo-jp-spark.s1 { top: 20%; left: 16%; animation-delay: 0s; }
      .uo-jp-spark.s2 { top: 30%; right: 15%; animation-delay: 0.9s; }
      .uo-jp-spark.s3 { bottom: 24%; left: 32%; animation-delay: 1.7s; }
      @keyframes uo-jp-roll { 0% { transform: translateY(72%); opacity: 0; filter: blur(7px); } 60% { filter: blur(0); } 100% { transform: translateY(0); opacity: 1; filter: blur(0); } }
      @keyframes uo-jp-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.012); } }
      @keyframes uo-spark { 0%,100% { opacity: 0; transform: scale(0.4); } 50% { opacity: 1; transform: scale(1.15); } }

      /* Deposit tile — premium art slot. */
      .uo-dep-tile--wide .uo-dep-ic { position: relative; width: 30px; height: 30px; display: grid; place-items: center; }

      .uo-sec-t { text-shadow: 0 1px 2px rgba(0,0,0,0.6); }

      /* ════════ HDR luminance + spin-everywhere ════════ */
      .uo-main { filter: saturate(1.13) contrast(1.05) brightness(1.03); }
      .uo-coin { display: inline-block; animation: uo-coinflip 3.4s linear infinite; }
      @keyframes uo-coinflip { to { transform: rotateY(360deg); } }
      .uo-jp-rays { opacity: 0.6; }
      /* per-tile rotating light glint (HDR screen blend) */
      .uo-card-ic::before { content: ''; position: absolute; inset: 0; z-index: 4; pointer-events: none; opacity: 0.38; mix-blend-mode: screen;
        background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.55) 13deg, transparent 28deg, transparent 200deg, rgba(255,255,255,0.4) 214deg, transparent 232deg);
        animation: uo-spin 6.5s linear infinite; }
      .uo-tab-ic { display: inline-block; }
      .uo-tab[data-on="true"] .uo-tab-ic { animation: uo-wobble 1.8s ease-in-out infinite; }
      @keyframes uo-wobble { 0%,100% { transform: rotate(-7deg); } 50% { transform: rotate(7deg); } }

      /* Bigger, cinematic game tiles (3D-icon slots scale up) */
      .uo-grid { grid-template-columns: repeat(auto-fill, minmax(106px, 1fr)); gap: 10px; }
      .uo-card { padding: 15px 6px 12px; border-radius: 22px; }
      .uo-card-ic { width: clamp(60px, 76%, 86px); border-radius: 20px; }
      .uo-ic-emoji { font-size: clamp(33px, 10vw, 44px); }
      .uo-card-n { font-size: clamp(11px, 3vw, 13px); }
      .uo-card-p { font-size: clamp(9px, 2.4vw, 10px); }
      /* Deposit icon — rotating glint too (spin all) */
      .uo-dep-tile--wide .uo-dep-ic { overflow: hidden; }
      .uo-dep-ic::after { content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none; opacity: 0.32; mix-blend-mode: screen;
        background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.5) 14deg, transparent 30deg, transparent 200deg, rgba(255,255,255,0.4) 214deg, transparent 232deg);
        animation: uo-spin 7s linear infinite; }

      @media (prefers-reduced-motion: reduce) {
        .uo-glow, .uo-shine, .uo-mid, .uo-fade, .uo-pop,
        .uo-bn-shine, .uo-bn-emoji, .uo-pick-shine, .uo-pick-glow, .uo-card-ic::after, .uo-card-ic::before,
        .uo-dep-ic::after, .uo-coin, .uo-tab-ic, .uo-jackpot, .uo-jp-rays, .uo-jp-reel, .uo-jp-spark { animation: none !important; }
        .uo-pick-glow { opacity: 0.3; } .uo-jp-rays { opacity: 0.25; } .uo-card-ic::before { opacity: 0.15; }
      }
    `})}export{$ as default};