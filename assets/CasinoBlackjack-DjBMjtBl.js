import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,n as i,p as a}from"./index-DsGzpRzl.js";import{t as o}from"./useSound-DSjN1PYy.js";import{t as s}from"./RewardPopup-BOnplDad.js";var c=e(t(),1),l=n(),u=[{value:.5,color:`#ff4d5c`,label:`0.5`},{value:1,color:`#e02b3c`,label:`1`},{value:5,color:`#FFFFFF`,label:`5`},{value:25,color:`#f5b300`,label:`25`},{value:100,color:`#5c0d17`,label:`100`}],d=[`♥`,`♦`,`♣`,`♠`],f=[`A`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`];function p(e){let t=Math.floor(e/13),n=e%13,r=t===0||t===1;return{rank:f[n],suit:d[t],isRed:r}}function m(){try{return crypto.randomUUID?.()??`${Date.now()}-${Math.random()}`}catch{return`${Date.now()}-${Math.random()}`}}var h=`
@keyframes bj-fade-in    { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bj-card-deal  { from { opacity: 0; transform: translateY(-30px) rotate(var(--bj-r-from, -8deg)); } to { opacity: 1; transform: translateY(0) rotate(var(--bj-r-to, 0deg)); } }
@keyframes bj-card-flip  { 0% { transform: rotateY(180deg); } 100% { transform: rotateY(0deg); } }
@keyframes bj-pulse      { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.9)} }
@keyframes bj-shake      { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
@keyframes bj-outcome    { 0% { opacity: 0; transform: translateY(8px) scale(.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

.bj-page {
  min-height: 100vh;
  background:
    radial-gradient(80% 60% at 50% 0%,  rgba(224, 43, 60, .10) 0%, transparent 60%),
    radial-gradient(70% 50% at 50% 100%, rgba(255, 255, 255, .08) 0%, transparent 55%),
    ${i.colors.surface.abyss};
  color: ${i.colors.text.primary};
  padding-bottom: 32px;
  animation: bj-fade-in .35s ease-out both;
}

.bj-header {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 14px;
  background: rgba(0, 0, 0, .78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${i.colors.border.subtle};
}
.bj-back {
  appearance: none;
  background: rgba(28, 28, 32, 0.55);
  border: 1px solid ${i.colors.border.soft};
  color: ${i.colors.text.primary};
  font-size: 14px; font-weight: 900;
  width: 36px; height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
.bj-back:active { transform: scale(.94); }
.bj-title { font-size: 14px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
.bj-balance {
  display: flex; align-items: center; gap: 6px;
  background: linear-gradient(135deg, rgba(224, 43, 60, .18), rgba(255, 255, 255, .14));
  border: 1px solid ${i.colors.border.aqua};
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px; font-weight: 900;
  font-variant-numeric: tabular-nums;
}

/* Felt table */
.bj-table {
  margin: 16px;
  border-radius: 22px;
  background:
    radial-gradient(60% 40% at 50% 20%, rgba(60, 13, 23, 0.55), transparent 70%),
    radial-gradient(60% 40% at 50% 80%, rgba(60, 13, 23, 0.45), transparent 70%),
    linear-gradient(180deg, #1a0a0d 0%, #050304 100%);
  border: 1.5px solid rgba(255, 255, 255, .22);
  padding: 18px 16px 14px;
  position: relative;
  overflow: hidden;
}
.bj-table::before {
  content: ''; position: absolute; inset: 8px; pointer-events: none;
  border: 1px dashed rgba(255, 255, 255, .18);
  border-radius: 16px;
}
.bj-table-label {
  text-align: center;
  font-size: 9.5px; font-weight: 900; letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .6);
  margin-bottom: 6px;
}

/* Hand rows */
.bj-handrow {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 14px 0;
  position: relative;
}
.bj-handrow + .bj-handrow { border-top: 1px solid rgba(255,255,255,.06); }

.bj-handlabel {
  display: flex; align-items: center; gap: 8px;
  font-size: 10px; font-weight: 900; letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${i.colors.text.secondary};
}
.bj-score-pill {
  display: inline-flex; align-items: center; gap: 4px;
  background: rgba(0, 0, 0, .7);
  border: 1px solid ${i.colors.border.soft};
  border-radius: 999px;
  padding: 3px 9px;
  font-size: 12px; font-weight: 900;
  font-variant-numeric: tabular-nums;
  color: #fff;
}
.bj-score-pill[data-bust="true"]      { background: rgba(239,42,76,.22); border-color: rgba(239,42,76,.5); color: #ff5870; }
.bj-score-pill[data-bj="true"]        { background: rgba(255, 255, 255, .2); border-color: ${i.colors.border.gold}; color: ${i.colors.gold[300]}; }
.bj-score-pill[data-twentyone="true"] { background: rgba(224, 43, 60, .16); border-color: ${i.colors.border.aqua}; color: ${i.colors.aqua[300]}; }

/* Cards row */
.bj-cards { display: flex; gap: -10px; margin-top: 4px; min-height: 102px; }
.bj-card-wrap { margin-left: -22px; }
.bj-card-wrap:first-child { margin-left: 0; }

.bj-card {
  width: 70px; height: 96px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #000000;
  box-shadow: 0 4px 12px rgba(0,0,0,.5), 0 0 0 0.5px rgba(255,255,255,.4) inset;
  position: relative;
  display: flex; flex-direction: column; padding: 5px 6px;
  animation: bj-card-deal .42s cubic-bezier(.18,.7,.2,1) both;
  --bj-r-to: 0deg;
}
.bj-card[data-tilted-l="true"] { --bj-r-to: -2deg; }
.bj-card[data-tilted-r="true"] { --bj-r-to:  2deg; }
.bj-card[data-back="true"] {
  background: linear-gradient(135deg, #e02b3c 0%, #5c0d17 100%);
  color: #fff;
}
.bj-card[data-back="true"]::after {
  content: 'C7';
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; font-weight: 900; letter-spacing: 1px;
  color: rgba(255,255,255,.85);
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
  border: 3px solid rgba(255, 255, 255, .35);
  border-radius: 5px;
  margin: 3px;
}
.bj-card-flip { animation: bj-card-flip .55s ease-out both; transform-style: preserve-3d; }

.bj-card-rank {
  font-size: 14px; font-weight: 900;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1;
}
.bj-card-suit-sm { font-size: 12px; line-height: 1; margin-top: 1px; }
.bj-card-suit-lg {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 38px;
  font-weight: 600;
  line-height: 1;
  pointer-events: none;
}
.bj-card[data-red="true"]   { color: #e02b3c; }
.bj-card[data-black="true"] { color: #000000; }

/* Outcome banner */
.bj-outcome {
  margin: 4px auto 10px;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 14px; font-weight: 900; letter-spacing: 2.5px;
  text-transform: uppercase;
  animation: bj-outcome .4s ease-out both;
  text-align: center;
  display: inline-block;
}
.bj-outcome[data-outcome="blackjack"]     { background: linear-gradient(135deg, #FFFFFF, #f5b300); color: #000000; box-shadow: 0 8px 30px ${i.colors.gold.glowSoft}; }
.bj-outcome[data-outcome="win"]           { background: linear-gradient(135deg, #ffd76b, #f5b300); color: #000000; }
.bj-outcome[data-outcome="dealer_bust"]   { background: linear-gradient(135deg, #ffd76b, #f5b300); color: #000000; }
.bj-outcome[data-outcome="push"]          { background: rgba(255,255,255,.12); color: #fff; border: 1px solid rgba(255,255,255,.2); }
.bj-outcome[data-outcome="lose"]          { background: rgba(239,42,76,.18); color: #ff5870; border: 1px solid rgba(239,42,76,.4); }
.bj-outcome[data-outcome="bust"]          { background: rgba(239,42,76,.28); color: #fff; border: 1px solid rgba(239,42,76,.55); }

/* Bet selector */
.bj-bet-wrap { padding: 14px 16px 0; }
.bj-bet-label {
  font-size: 9.5px; font-weight: 800; letter-spacing: 1.6px;
  color: ${i.colors.text.tertiary}; text-transform: uppercase;
  margin-bottom: 8px;
  display: flex; justify-content: space-between; align-items: center;
}
.bj-bet-amount {
  font-size: 14px; font-weight: 900;
  color: ${i.colors.text.primary};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.3px;
  text-transform: none;
}
.bj-chips { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
.bj-chip {
  appearance: none; background: transparent; border: none; cursor: pointer; padding: 0;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  -webkit-tap-highlight-color: transparent;
}
.bj-chip:active { transform: scale(.94); }
.bj-chip-disc {
  width: 42px; height: 42px; border-radius: 50%;
  background: var(--bj-c, #fff);
  border: 3px dashed rgba(255,255,255,.6);
  display: flex; align-items: center; justify-content: center;
  color: ${i.colors.surface.abyss};
  font-size: 13px; font-weight: 900;
  font-variant-numeric: tabular-nums;
  box-shadow: 0 4px 10px rgba(0,0,0,.4), 0 0 0 2px rgba(0,0,0,.25) inset;
  transition: transform .15s ease, box-shadow .15s ease;
}
.bj-chip[data-active="true"] .bj-chip-disc {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0,0,0,.55), 0 0 0 3px ${i.colors.gold[400]} inset, 0 0 18px ${i.colors.gold.glowSoft};
}
.bj-chip-val { font-size: 9.5px; font-weight: 800; color: ${i.colors.text.tertiary}; }

/* Actions row */
.bj-actions {
  margin: 14px 16px 0;
  display: grid; gap: 8px;
}
.bj-actions[data-cols="1"] { grid-template-columns: 1fr; }
.bj-actions[data-cols="3"] { grid-template-columns: 1fr 1fr 1fr; }
.bj-btn {
  appearance: none; border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 12px; font-weight: 900; letter-spacing: 1.6px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform .12s ease;
}
.bj-btn:active { transform: scale(.97); }
.bj-btn:disabled { opacity: .35; cursor: not-allowed; }
.bj-btn-primary { background: linear-gradient(135deg, ${i.colors.aqua[500]} 0%, ${i.colors.gold[400]} 100%); color: ${i.colors.surface.abyss}; box-shadow: 0 8px 22px ${i.colors.aqua.glowSoft}; }
.bj-btn-hit    { background: linear-gradient(135deg, ${i.colors.aqua[500]} 0%, ${i.colors.aqua[700]} 100%); color: ${i.colors.surface.abyss}; }
.bj-btn-stand  { background: linear-gradient(135deg, ${i.colors.gold[400]} 0%, ${i.colors.gold[600]} 100%); color: ${i.colors.surface.abyss}; }
.bj-btn-double { background: linear-gradient(135deg, #e02b3c 0%, #5c0d17 100%); color: #fff; }

.bj-error {
  margin: 10px 16px 0;
  padding: 8px 12px;
  background: rgba(239,42,76,.14);
  border: 1px solid rgba(239,42,76,.4);
  border-radius: 10px;
  font-size: 11px; font-weight: 700;
  color: #ff5870;
  animation: bj-shake .35s ease;
}
`;function g({card:e,hidden:t,tilt:n}){if(t||e==null)return(0,l.jsx)(`div`,{className:`bj-card`,"data-back":`true`,"data-tilted-l":n===`l`||void 0,"data-tilted-r":n===`r`||void 0});let r=p(e);return(0,l.jsxs)(`div`,{className:`bj-card`,"data-red":r.isRed||void 0,"data-black":!r.isRed||void 0,"data-tilted-l":n===`l`||void 0,"data-tilted-r":n===`r`||void 0,children:[(0,l.jsx)(`span`,{className:`bj-card-rank`,children:r.rank}),(0,l.jsx)(`span`,{className:`bj-card-suit-sm`,children:r.suit}),(0,l.jsx)(`span`,{className:`bj-card-suit-lg`,style:{opacity:.55},children:r.suit})]})}function ee(e){switch(e){case`blackjack`:return`★ BLACKJACK!`;case`win`:return`✓ YOU WIN`;case`dealer_bust`:return`✓ DEALER BUST`;case`push`:return`↔ PUSH`;case`lose`:return`✗ YOU LOSE`;case`bust`:return`✗ BUST`}}function _(){let e=a(),{play:t}=o(),[n,d]=(0,c.useState)(null),[f,p]=(0,c.useState)(null),[_,v]=(0,c.useState)(!1),[y,te]=(0,c.useState)(u[1].value),[b,x]=(0,c.useState)(`idle`),[S,C]=(0,c.useState)(null),[w,T]=(0,c.useState)(null),[E,D]=(0,c.useState)([]),[O,k]=(0,c.useState)(0),[A,j]=(0,c.useState)([]),[M,N]=(0,c.useState)(0),[P,F]=(0,c.useState)(0),[I,L]=(0,c.useState)(!1),[R,z]=(0,c.useState)(!1),[B,V]=(0,c.useState)(!1),[ne,H]=(0,c.useState)(!1),[U,W]=(0,c.useState)(null),[G,K]=(0,c.useState)(0),[q,J]=(0,c.useState)(null);(0,c.useEffect)(()=>{if(document.getElementById(`c7-bj-css`))return;let e=document.createElement(`style`);e.id=`c7-bj-css`,e.textContent=h,document.head.appendChild(e)},[]),(0,c.useEffect)(()=>{let e=!1;return(async()=>{let{data:{session:t}}=await r.auth.getSession();if(e)return;let n=t?.user?.id??null;if(d(n),v(!0),n){let{data:t}=await r.from(`casino_wallets`).select(`balance`).eq(`user_id`,n).eq(`currency`,`USDT`).maybeSingle();e||p(Number(t?.balance??0))}})(),()=>{e=!0}},[]),(0,c.useEffect)(()=>{if(!n)return;let e=r.channel(`bj-wallet-${n}`).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`casino_wallets`,filter:`user_id=eq.${n}`},e=>{let t=e?.new?.balance;t!=null&&p(Number(t))}).subscribe();return()=>{r.removeChannel(e)}},[n]);let Y=()=>{T(null),D([]),k(0),j([]),N(0),F(0),L(!1),z(!1),V(!1),H(!1),W(null),K(0),x(`idle`)},X=(0,c.useCallback)((e,n)=>{if(T(e.session_id),D(e.player??[]),k(e.player_score??0),n&&e.dealer){j(e.dealer),F(e.dealer_score??0),L(!0),z(!1),V(!1),H(!1),W(e.outcome??null),K(Number(e.payout??0)),e.new_balance!=null&&p(Number(e.new_balance)),x(`settled`);let n=Number(e.payout??0);if(n>0){let r=Number(e.bet_total??y),i=n/Math.max(r,1e-6),a=i>=2.5?`jackpot`:i>=2?`big`:`normal`;t(a===`jackpot`?`jackpot`:a===`big`?`winCelebrate`:`coin`),J({amount:n,tier:a})}else e.outcome!==`push`&&t(`notification`)}else j(e.dealer_visible??[]),N(e.dealer_visible_score??0),L(!1),z(!!e.can_hit),V(!!e.can_stand),H(!!e.can_double),x(`player_turn`)},[y,t]),Z=(0,c.useCallback)(async e=>{C(null);try{let{data:t,error:n}=await r.functions.invoke(`blackjack-play`,{body:{...e,idempotency_key:m()}});if(n)throw Error(n.message||`Network error`);let i=t;return!i||i.success===!1?(i?.code===`INSUFFICIENT_BALANCE`?C(`Insufficient balance`):C(i?.error||`Action failed`),null):i}catch(e){return C(e?.message||`Action failed`),null}},[]),re=(0,c.useCallback)(async()=>{if(!_){C(`Loading…`);return}if(!n){C(`Sign in to play`);return}if(f===null){C(`Loading wallet…`);return}if(f<y){C(`Insufficient balance`);return}Y(),x(`dealing`),t(`buttonClick`),t(`spinStart`);let e=await Z({action:`start`,bet_amount:y});if(!e){x(`idle`);return}X(e,e.status===`completed`)},[_,n,f,y,Z,X,t]),ie=(0,c.useCallback)(async()=>{if(!w||b!==`player_turn`)return;x(`busy`),t(`buttonClick`);let e=await Z({action:`hit`,session_id:w});if(!e){x(`player_turn`);return}X(e,e.status===`completed`)},[w,b,Z,X,t]),ae=(0,c.useCallback)(async()=>{if(!w||b!==`player_turn`)return;x(`dealer_turn`),t(`buttonClick`);let e=await Z({action:`stand`,session_id:w});if(!e){x(`player_turn`);return}X(e,!0)},[w,b,Z,X,t]),oe=(0,c.useCallback)(async()=>{if(!w||b!==`player_turn`)return;x(`busy`),t(`buttonClick`);let e=await Z({action:`double`,session_id:w});if(!e){x(`player_turn`);return}X(e,!0)},[w,b,Z,X,t]),Q=f===null?`—`:`${Math.round(f).toLocaleString()} 🪙`,se=b===`player_turn`||b===`busy`,$=b===`idle`||b===`settled`,ce=(0,c.useMemo)(()=>{let e=E.length===2&&O===21;return{"data-bj":e||void 0,"data-twentyone":!e&&O===21||void 0,"data-bust":O>21||void 0}},[E,O]),le=I?P:M,ue=(0,c.useMemo)(()=>{if(!I)return{};let e=A.length===2&&P===21;return{"data-bj":e||void 0,"data-twentyone":!e&&P===21||void 0,"data-bust":P>21||void 0}},[I,A,P]);return(0,l.jsxs)(`div`,{className:`bj-page`,children:[(0,l.jsxs)(`div`,{className:`bj-header`,children:[(0,l.jsx)(`button`,{className:`bj-back`,"aria-label":`Back`,onClick:()=>e(-1),children:`‹`}),(0,l.jsx)(`span`,{className:`bj-title`,children:`Blackjack`}),(0,l.jsxs)(`span`,{className:`bj-balance`,children:[(0,l.jsx)(`span`,{style:{display:`inline-block`,width:6,height:6,borderRadius:`50%`,background:i.colors.aqua[400]}}),Q]})]}),(0,l.jsxs)(`div`,{className:`bj-table`,children:[(0,l.jsxs)(`div`,{className:`bj-handrow`,children:[(0,l.jsxs)(`div`,{className:`bj-handlabel`,children:[(0,l.jsx)(`span`,{children:`Dealer`}),A.length>0&&(0,l.jsx)(`span`,{className:`bj-score-pill`,...ue,children:I?le:M?`${M}+`:`?`})]}),(0,l.jsx)(`div`,{className:`bj-cards`,children:A.length===0?null:I?A.map((e,t)=>(0,l.jsx)(`div`,{className:`bj-card-wrap`,children:(0,l.jsx)(g,{card:e,tilt:t===0?`l`:t===A.length-1?`r`:void 0})},t)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{className:`bj-card-wrap`,children:(0,l.jsx)(g,{card:A[0],tilt:`l`})}),(0,l.jsx)(`div`,{className:`bj-card-wrap`,children:(0,l.jsx)(g,{hidden:!0,tilt:`r`})})]})})]}),(0,l.jsx)(`div`,{className:`bj-table-label`,children:U?`— Result —`:b===`idle`?`Place a bet to deal`:`Blackjack 21`}),(0,l.jsxs)(`div`,{className:`bj-handrow`,children:[(0,l.jsxs)(`div`,{className:`bj-handlabel`,children:[(0,l.jsx)(`span`,{children:`You`}),E.length>0&&(0,l.jsx)(`span`,{className:`bj-score-pill`,...ce,children:O})]}),(0,l.jsx)(`div`,{className:`bj-cards`,children:E.map((e,t)=>(0,l.jsx)(`div`,{className:`bj-card-wrap`,children:(0,l.jsx)(g,{card:e,tilt:t===0?`l`:t===E.length-1?`r`:void 0})},t))})]}),U&&(0,l.jsx)(`div`,{style:{textAlign:`center`},children:(0,l.jsxs)(`div`,{className:`bj-outcome`,"data-outcome":U,children:[ee(U),G>0&&(0,l.jsxs)(`span`,{style:{marginLeft:10,opacity:.85},children:[` · +$`,G.toFixed(2)]})]})})]}),S&&(0,l.jsxs)(`div`,{className:`bj-error`,children:[`⚠ `,S]}),$&&(0,l.jsxs)(`div`,{className:`bj-bet-wrap`,children:[(0,l.jsxs)(`div`,{className:`bj-bet-label`,children:[(0,l.jsx)(`span`,{children:`Bet`}),(0,l.jsxs)(`span`,{className:`bj-bet-amount`,children:[Math.round(y),` 🪙`]})]}),(0,l.jsx)(`div`,{className:`bj-chips`,children:u.map(e=>(0,l.jsxs)(`button`,{type:`button`,className:`bj-chip`,"data-active":y===e.value,onClick:()=>{te(e.value),t(`buttonClick`)},"aria-label":`Bet ${e.label}`,children:[(0,l.jsx)(`span`,{className:`bj-chip-disc`,style:{"--bj-c":e.color},children:e.label}),(0,l.jsxs)(`span`,{className:`bj-chip-val`,children:[e.value,` 🪙`]})]},e.value))})]}),(0,l.jsx)(`div`,{className:`bj-actions`,"data-cols":se?`3`:`1`,children:$?(0,l.jsx)(`button`,{type:`button`,className:`bj-btn bj-btn-primary`,disabled:!n||f===null||f<y,onClick:re,children:n?f===null?`Loading…`:f<y?`Insufficient`:`▶ Deal`:`Sign in`}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{type:`button`,className:`bj-btn bj-btn-hit`,disabled:!R||b!==`player_turn`,onClick:ie,children:`+ Hit`}),(0,l.jsx)(`button`,{type:`button`,className:`bj-btn bj-btn-stand`,disabled:!B||b!==`player_turn`,onClick:ae,children:`✋ Stand`}),(0,l.jsx)(`button`,{type:`button`,className:`bj-btn bj-btn-double`,disabled:!ne||b!==`player_turn`,onClick:oe,children:`2× Double`})]})}),q&&(0,l.jsx)(s,{open:!0,prize:`$${q.amount.toFixed(2)}`,variant:q.tier,onClose:()=>J(null)})]})}export{_ as default};