import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,n as i,p as a}from"./index-DsGzpRzl.js";import{t as o}from"./useSound-DSjN1PYy.js";import{t as s}from"./RewardPopup-BOnplDad.js";var c=e(t(),1),l=n(),u=new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]),d=[{key:`dozen_1`,label:`1st 12`,hint:`1-12`,payout:3},{key:`dozen_2`,label:`2nd 12`,hint:`13-24`,payout:3},{key:`dozen_3`,label:`3rd 12`,hint:`25-36`,payout:3},{key:`low`,label:`1-18`,hint:`Low`,payout:2},{key:`even`,label:`EVEN`,hint:`Even`,payout:2},{key:`red`,label:`RED`,hint:`Red`,payout:2,swatch:`red`},{key:`black`,label:`BLACK`,hint:`Black`,payout:2,swatch:`black`},{key:`odd`,label:`ODD`,hint:`Odd`,payout:2},{key:`high`,label:`19-36`,hint:`High`,payout:2}],f=[{value:.1,color:`#f5f7fa`,label:`0.1`},{value:.5,color:`#ff4d5c`,label:`0.5`},{value:1,color:`#ef2a4c`,label:`1`},{value:5,color:`#8a1622`,label:`5`},{value:25,color:`#ffc935`,label:`25`}],p=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],m=360/p.length;function h(e){return e===0?`green`:u.has(e)?`red`:`black`}var g=`
@keyframes rou-wheel-spin {
  to { transform: rotate(var(--rou-wheel-end, 0deg)); }
}
@keyframes rou-ball-orbit {
  to { transform: rotate(var(--rou-ball-end, 0deg)); }
}
@keyframes rou-pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.9)} }
@keyframes rou-flash  { 0% { box-shadow: 0 0 0 0 var(--rou-flash); } 100% { box-shadow: 0 0 0 24px transparent; } }
@keyframes rou-fade-in{ from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes rou-shake  { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
@keyframes rou-cycle  { 0%,100%{opacity:1} 50%{opacity:.7} }

.rou-page {
  min-height: 100vh;
  background:
    radial-gradient(80% 60% at 50% 0%, rgba(224, 43, 60, .10) 0%, transparent 60%),
    radial-gradient(70% 50% at 50% 100%, rgba(224, 43, 60, .08) 0%, transparent 55%),
    ${i.colors.surface.abyss};
  color: ${i.colors.text.primary};
  padding-bottom: 32px;
  animation: rou-fade-in .35s ease-out both;
}

.rou-header {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 14px;
  background: rgba(4,6,10,.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${i.colors.border.subtle};
}
.rou-back {
  appearance: none;
  background: rgba(20,30,50,.55);
  border: 1px solid ${i.colors.border.soft};
  color: ${i.colors.text.primary};
  font-size: 14px; font-weight: 900;
  width: 36px; height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
.rou-back:active { transform: scale(.94); }
.rou-title { font-size: 14px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
.rou-balance {
  display: flex; align-items: center; gap: 6px;
  background: linear-gradient(135deg, rgba(224, 43, 60, .18), rgba(224, 43, 60, .14));
  border: 1px solid ${i.colors.border.aqua};
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px; font-weight: 900;
  font-variant-numeric: tabular-nums;
}

/* ── Wheel ──────────────────────────────────────────────── */
.rou-wheel-wrap {
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  padding: 18px 16px 6px;
}
.rou-wheel {
  position: relative;
  width: 220px; height: 220px;
  border-radius: 50%;
  border: 3px solid ${i.colors.gold[600]};
  background:
    conic-gradient(from 0deg,
      ${i.colors.gold[700]} 0deg,
      ${i.colors.gold[500]} 90deg,
      ${i.colors.gold[700]} 180deg,
      ${i.colors.gold[500]} 270deg,
      ${i.colors.gold[700]} 360deg);
  box-shadow: 0 12px 40px rgba(0,0,0,.55), 0 0 0 6px rgba(224, 43, 60, .08);
}
.rou-wheel-inner {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: ${i.colors.surface.abyss};
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.rou-wheel-ring {
  position: absolute; inset: 0;
  transform-origin: center;
  animation: rou-wheel-spin var(--rou-wheel-dur, 0s) cubic-bezier(.18,.7,.2,1) both;
}
.rou-result-num {
  position: relative;
  font-size: 70px; font-weight: 900;
  font-variant-numeric: tabular-nums;
  letter-spacing: -3px;
  z-index: 2;
}
.rou-result-num[data-color="red"]   { color: #ff5870; text-shadow: 0 0 22px rgba(220, 50, 60, .55); }
.rou-result-num[data-color="black"] { color: #f5f7fa; text-shadow: 0 0 22px rgba(255,255,255,.5); }
.rou-result-num[data-color="green"] { color: #ffc935; text-shadow: 0 0 22px rgba(255, 201, 53,.7); }
.rou-result-num[data-cycling="true"] { animation: rou-cycle .12s linear infinite; }

.rou-pointer {
  position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
  width: 0; height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 16px solid ${i.colors.gold[400]};
  filter: drop-shadow(0 2px 4px rgba(0,0,0,.6));
  z-index: 3;
}

.rou-result-pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px;
  background: rgba(20,30,50,.6);
  border: 1px solid ${i.colors.border.soft};
  border-radius: 999px;
  font-size: 10px; font-weight: 900; letter-spacing: 1.4px;
  text-transform: uppercase;
}

/* ── History strip ─────────────────────────────────────── */
.rou-history {
  display: flex; gap: 5px;
  overflow-x: auto; overflow-y: hidden;
  padding: 6px 16px 14px;
  scrollbar-width: none;
}
.rou-history::-webkit-scrollbar { display: none; }
.rou-history-pill {
  flex: 0 0 auto;
  width: 28px; height: 28px;
  border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 900;
  font-variant-numeric: tabular-nums;
  border: 1px solid rgba(255,255,255,.1);
}
.rou-history-pill[data-color="red"]   { background: #ef2a4c; color: #fff; }
.rou-history-pill[data-color="black"] { background: #0a0a0a; color: #fff; }
.rou-history-pill[data-color="green"] { background: #ffc935; color: #04060a; }

/* ── Bet board ─────────────────────────────────────────── */
.rou-board {
  padding: 8px 16px 0;
  display: grid; gap: 8px;
}
.rou-row {
  display: grid;
  gap: 6px;
}
.rou-row[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.rou-row[data-cols="6"] { grid-template-columns: repeat(6, 1fr); }

.rou-zone {
  position: relative;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  min-height: 58px;
  padding: 6px;
  background: rgba(20,30,50,.5);
  border: 1.5px solid ${i.colors.border.soft};
  border-radius: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all .15s ease;
  overflow: hidden;
}
.rou-zone:active { transform: scale(.96); }
.rou-zone[data-swatch="red"]   { background: linear-gradient(135deg, rgba(239,42,76,.36), rgba(239,42,76,.16)); border-color: rgba(239,42,76,.5); }
.rou-zone[data-swatch="black"] { background: linear-gradient(135deg, rgba(20,20,30,.85), rgba(8,8,12,.95)); border-color: rgba(255,255,255,.18); }
.rou-zone[data-disabled="true"] { opacity: .5; cursor: not-allowed; }
.rou-zone[data-winning="true"]  { border-color: ${i.colors.gold[400]}; animation: rou-flash .8s ease-out 2; --rou-flash: ${i.colors.gold.glow}; }
.rou-zone-label { font-size: 12px; font-weight: 900; letter-spacing: .5px; color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,.5); }
.rou-zone-hint  { font-size: 8.5px; font-weight: 800; letter-spacing: 1.2px; color: rgba(255,255,255,.55); text-transform: uppercase; }
.rou-zone-pay   {
  position: absolute; top: 4px; right: 6px;
  font-size: 7.5px; font-weight: 900;
  color: rgba(255,255,255,.6); letter-spacing: .5px;
}

.rou-zone-stack {
  position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 3px;
  background: rgba(4,6,10,.7);
  padding: 2px 6px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.2);
  font-size: 9.5px; font-weight: 900;
  font-variant-numeric: tabular-nums;
}
.rou-zone-stack-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rou-chip, #e02b3c); box-shadow: 0 0 0 1px rgba(0,0,0,.4); }

/* ── Chip rack ─────────────────────────────────────────── */
.rou-chips-wrap {
  padding: 14px 16px 6px;
}
.rou-chips-label {
  font-size: 9.5px; font-weight: 800; letter-spacing: 1.6px;
  color: ${i.colors.text.tertiary}; text-transform: uppercase;
  margin-bottom: 8px;
}
.rou-chips {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;
}
.rou-chip {
  position: relative;
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  -webkit-tap-highlight-color: transparent;
}
.rou-chip:active { transform: scale(.94); }
.rou-chip-disc {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--rou-c, #fff);
  border: 3px dashed rgba(255,255,255,.6);
  display: flex; align-items: center; justify-content: center;
  color: ${i.colors.surface.abyss};
  font-size: 13px; font-weight: 900;
  font-variant-numeric: tabular-nums;
  box-shadow: 0 4px 10px rgba(0,0,0,.4), 0 0 0 2px rgba(0,0,0,.25) inset;
  transition: transform .15s ease, box-shadow .15s ease;
}
.rou-chip[data-active="true"] .rou-chip-disc {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0,0,0,.55), 0 0 0 3px ${i.colors.gold[400]} inset, 0 0 18px ${i.colors.gold.glowSoft};
}
.rou-chip-val {
  font-size: 9.5px; font-weight: 800; letter-spacing: .5px;
  color: ${i.colors.text.tertiary};
}
.rou-chip[data-active="true"] .rou-chip-val { color: ${i.colors.gold[300]}; }

/* ── Bet summary + spin ────────────────────────────────── */
.rou-summary {
  margin: 14px 16px 0;
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 10px 12px;
  background: rgba(20,30,50,.55);
  border: 1px solid ${i.colors.border.soft};
  border-radius: 12px;
}
.rou-summary-label { font-size: 9.5px; font-weight: 800; letter-spacing: 1.6px; color: ${i.colors.text.tertiary}; text-transform: uppercase; }
.rou-summary-val   { font-size: 18px; font-weight: 900; font-variant-numeric: tabular-nums; }
.rou-summary-btn {
  appearance: none; background: rgba(239,42,76,.15); color: #ff5870;
  border: 1px solid rgba(239,42,76,.4); padding: 6px 10px; border-radius: 8px;
  font-size: 10px; font-weight: 900; letter-spacing: 1px; cursor: pointer;
  text-transform: uppercase; -webkit-tap-highlight-color: transparent;
}
.rou-summary-btn:active { transform: scale(.95); }
.rou-summary-btn:disabled { opacity: .35; cursor: not-allowed; }

.rou-spin-wrap { padding: 14px 16px 0; }
.rou-spin {
  appearance: none; border: none;
  width: 100%; padding: 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${i.colors.aqua[500]} 0%, ${i.colors.gold[400]} 100%);
  color: ${i.colors.surface.abyss};
  font-size: 14px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 10px 30px ${i.colors.aqua.glowSoft};
  -webkit-tap-highlight-color: transparent;
}
.rou-spin:active { transform: scale(.98); }
.rou-spin:disabled { background: rgba(255,255,255,.08); color: ${i.colors.text.muted}; box-shadow: none; cursor: not-allowed; }

.rou-error {
  margin: 10px 16px 0;
  padding: 8px 12px;
  background: rgba(239,42,76,.14);
  border: 1px solid rgba(239,42,76,.4);
  border-radius: 10px;
  font-size: 11px; font-weight: 700;
  color: #ff5870;
  animation: rou-shake .35s ease;
}
`;function _(){try{return crypto.randomUUID?.()??`${Date.now()}-${Math.random()}`}catch{return`${Date.now()}-${Math.random()}`}}function v(e){return 360*6+-(p.indexOf(e)*m)}function y(e,t){if(t===0)return!1;switch(e){case`red`:return u.has(t);case`black`:return!u.has(t);case`even`:return t%2==0;case`odd`:return t%2==1;case`low`:return t>=1&&t<=18;case`high`:return t>=19&&t<=36;case`dozen_1`:return t>=1&&t<=12;case`dozen_2`:return t>=13&&t<=24;case`dozen_3`:return t>=25&&t<=36}}function b(){let e=a(),{play:t}=o(),[n,u]=(0,c.useState)(null),[p,m]=(0,c.useState)(null),[b,S]=(0,c.useState)(!1),[C,w]=(0,c.useState)(f[2].value),[T,E]=(0,c.useState)({}),[D,O]=(0,c.useState)(`idle`),[k,A]=(0,c.useState)(null),[j,M]=(0,c.useState)(null),[N,P]=(0,c.useState)([]),[F,I]=(0,c.useState)(0),[L,R]=(0,c.useState)(0),[z,B]=(0,c.useState)(null),V=(0,c.useRef)(null),[H,U]=(0,c.useState)(null);(0,c.useEffect)(()=>{if(document.getElementById(`c7-roulette-css`))return;let e=document.createElement(`style`);e.id=`c7-roulette-css`,e.textContent=g,document.head.appendChild(e)},[]),(0,c.useEffect)(()=>{let e=!1;return(async()=>{let{data:{session:t}}=await r.auth.getSession();if(e)return;let n=t?.user?.id??null;if(u(n),S(!0),n){let{data:t}=await r.from(`casino_wallets`).select(`balance`).eq(`user_id`,n).eq(`currency`,`USDT`).maybeSingle();e||m(Number(t?.balance??0))}})(),()=>{e=!0}},[]),(0,c.useEffect)(()=>{if(!n)return;let e=r.channel(`roulette-wallet-${n}`).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`casino_wallets`,filter:`user_id=eq.${n}`},e=>{let t=e?.new?.balance;t!=null&&m(Number(t))}).subscribe();return()=>{r.removeChannel(e)}},[n]),(0,c.useEffect)(()=>()=>{V.current&&window.clearInterval(V.current)},[]);let W=(0,c.useMemo)(()=>Object.values(T).reduce((e,t)=>e+(t??0),0),[T]),G=(0,c.useMemo)(()=>Object.keys(T),[T]),K=e=>{D!==`idle`&&D!==`settled`||(A(null),D===`settled`&&(M(null),U(null)),O(`idle`),E(t=>({...t,[e]:Number(((t[e]??0)+C).toFixed(8))})),t(`buttonClick`))},q=()=>{D!==`spinning`&&(E({}),A(null),t(`buttonClick`))},J=(0,c.useCallback)(async()=>{if(D!==`idle`&&D!==`settled`)return;if(!b){A(`Loading…`);return}if(!n){A(`Sign in to play`);return}if(W<=0){A(`Place a bet to spin`);return}if(p===null){A(`Loading wallet…`);return}if(p<W){A(`Insufficient balance`);return}A(null),t(`spinStart`),O(`placing`),M(null);let e=Math.floor(Math.random()*37);U(e),V.current=window.setInterval(()=>{e=(e+7)%37,U(e)},80);let i=Object.entries(T).map(([e,t])=>({type:e,amount:t})),a;try{let{data:e,error:t}=await r.functions.invoke(`place-bet-v2`,{body:{game_type:`roulette`,bet_amount:Number(W.toFixed(8)),game_params:{bets:i},idempotency_key:_()}});if(t)throw Error(t.message||`Network error`);if(!e||e.success===!1)throw Error(e?.error||`Bet failed`);a=e}catch(e){V.current&&=(window.clearInterval(V.current),null),U(null),A(e?.message||`Bet failed`),O(`idle`);return}let o=Number(a?.result?.spin??0),s=Number(a?.payout??0),c=Number(a?.new_balance??p);I(v(o)),R(3.4),O(`spinning`),window.setTimeout(()=>{if(V.current&&=(window.clearInterval(V.current),null),U(o),M(o),P(e=>[o,...e].slice(0,10)),m(c),O(`settled`),t(`spinEnd`),s>0){let e=s/Math.max(W,1e-6),n=e>=10?`jackpot`:e>=3?`big`:`normal`;t(n===`jackpot`?`jackpot`:n===`big`?`winCelebrate`:`coin`),B({amount:s,tier:n})}else t(`notification`);window.setTimeout(()=>{E({})},1600)},3400)},[D,b,n,W,p,T,t]),Y=p===null?`—`:`${Math.round(p).toLocaleString()} 🪙`,X=(D===`idle`||D===`settled`)&&!!n&&p!==null&&W>0&&p>=W,Z=D===`spinning`?`SPINNING…`:n?p===null?`LOADING…`:W===0?`PLACE A BET`:p<W?`INSUFFICIENT BALANCE`:`SPIN`:`SIGN IN`,Q=H==null?void 0:h(H),$=D===`spinning`&&j==null;return(0,l.jsxs)(`div`,{className:`rou-page`,children:[(0,l.jsxs)(`div`,{className:`rou-header`,children:[(0,l.jsx)(`button`,{className:`rou-back`,"aria-label":`Back`,onClick:()=>e(-1),children:`‹`}),(0,l.jsx)(`span`,{className:`rou-title`,children:`Roulette`}),(0,l.jsxs)(`span`,{className:`rou-balance`,children:[(0,l.jsx)(`span`,{style:{display:`inline-block`,width:6,height:6,borderRadius:`50%`,background:i.colors.aqua[400]}}),Y]})]}),(0,l.jsxs)(`div`,{className:`rou-wheel-wrap`,children:[(0,l.jsxs)(`div`,{className:`rou-wheel`,children:[(0,l.jsx)(`div`,{className:`rou-pointer`}),(0,l.jsx)(`div`,{className:`rou-wheel-ring`,style:{"--rou-wheel-end":`${F}deg`,"--rou-wheel-dur":`${L}s`}}),(0,l.jsx)(`div`,{className:`rou-wheel-inner`,children:(0,l.jsx)(`span`,{className:`rou-result-num`,"data-color":Q,"data-cycling":$,children:H??`—`})})]}),j!=null&&(0,l.jsxs)(`span`,{className:`rou-result-pill`,children:[`Last:\xA0`,(0,l.jsxs)(`span`,{style:{color:h(j)===`red`?`#ff5870`:h(j)===`green`?`#ffc935`:i.colors.text.primary},children:[j,` · `,h(j).toUpperCase()]})]})]}),N.length>0&&(0,l.jsx)(`div`,{className:`rou-history`,children:N.map((e,t)=>(0,l.jsx)(`span`,{className:`rou-history-pill`,"data-color":h(e),children:e},t))}),(0,l.jsxs)(`div`,{className:`rou-board`,children:[(0,l.jsx)(`div`,{className:`rou-row`,"data-cols":`3`,children:d.slice(0,3).map(e=>(0,l.jsx)(x,{z:e,amount:T[e.key],disabled:D===`spinning`,winning:D===`settled`&&j!=null&&y(e.key,j)&&(T[e.key]??0)>0,chipColor:f.find(e=>e.value===C)?.color??`#e02b3c`,onClick:()=>K(e.key)},e.key))}),(0,l.jsx)(`div`,{className:`rou-row`,"data-cols":`6`,children:d.slice(3).map(e=>(0,l.jsx)(x,{z:e,amount:T[e.key],disabled:D===`spinning`,winning:D===`settled`&&j!=null&&y(e.key,j)&&(T[e.key]??0)>0,chipColor:f.find(e=>e.value===C)?.color??`#e02b3c`,onClick:()=>K(e.key)},e.key))})]}),k&&(0,l.jsxs)(`div`,{className:`rou-error`,children:[`⚠ `,k]}),(0,l.jsxs)(`div`,{className:`rou-chips-wrap`,children:[(0,l.jsx)(`div`,{className:`rou-chips-label`,children:`Choose chip`}),(0,l.jsx)(`div`,{className:`rou-chips`,children:f.map(e=>(0,l.jsxs)(`button`,{className:`rou-chip`,"data-active":C===e.value,onClick:()=>{w(e.value),t(`buttonClick`)},"aria-label":`Select ${e.label} chip`,type:`button`,children:[(0,l.jsx)(`span`,{className:`rou-chip-disc`,style:{"--rou-c":e.color},children:e.label}),(0,l.jsxs)(`span`,{className:`rou-chip-val`,children:[e.value,` 🪙`]})]},e.value))})]}),(0,l.jsxs)(`div`,{className:`rou-summary`,children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,l.jsx)(`span`,{className:`rou-summary-label`,children:`Total Bet`}),(0,l.jsxs)(`span`,{className:`rou-summary-val`,children:[Math.round(W),` 🪙`]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,textAlign:`right`},children:[(0,l.jsx)(`span`,{className:`rou-summary-label`,children:`Zones`}),(0,l.jsx)(`span`,{className:`rou-summary-val`,children:G.length})]}),(0,l.jsx)(`button`,{type:`button`,className:`rou-summary-btn`,onClick:q,disabled:W===0||D===`spinning`,children:`Clear`})]}),(0,l.jsx)(`div`,{className:`rou-spin-wrap`,children:(0,l.jsx)(`button`,{type:`button`,className:`rou-spin`,disabled:!X,onClick:J,children:Z})}),z&&(0,l.jsx)(s,{open:!0,prize:`$${z.amount.toFixed(2)}`,variant:z.tier,onClose:()=>B(null)})]})}function x({z:e,amount:t,disabled:n,winning:r,chipColor:i,onClick:a}){return(0,l.jsxs)(`button`,{type:`button`,className:`rou-zone`,"data-swatch":e.swatch,"data-disabled":n||void 0,"data-winning":r||void 0,onClick:a,disabled:n,"aria-label":`Bet on ${e.label}`,children:[(0,l.jsxs)(`span`,{className:`rou-zone-pay`,children:[e.payout,`×`]}),(0,l.jsx)(`span`,{className:`rou-zone-label`,children:e.label}),(0,l.jsx)(`span`,{className:`rou-zone-hint`,children:e.hint}),t&&t>0&&(0,l.jsxs)(`span`,{className:`rou-zone-stack`,style:{"--rou-chip":i},children:[(0,l.jsx)(`span`,{className:`rou-zone-stack-dot`}),`$`,t.toFixed(2)]})]})}export{b as default};