import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,n as i,p as a,t as o}from"./index-D7KGRYYL.js";import{t as s}from"./CasinoBottomNav-CqSouChf.js";import{r as c,t as l}from"./c7Sys-QqKM1rFH.js";import{t as u}from"./usePlatformMode-BiIi62ob.js";import{t as d}from"./HDRBackdrop-JE7FOksY.js";var f=e(t(),1),p=n(),m=`var(--c7-danger)`,h=i.colors.emerald[500],g=`var(--c7-primary)`,_=i.colors.gold[400],v=`
@keyframes c7wp-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
@keyframes c7wp-pulse   { 0%,100%{opacity:1} 50%{opacity:0.4} }
@keyframes c7wp-spin    { from{transform:rotate(0)} to{transform:rotate(360deg)} }
@keyframes c7wp-fade-up { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
@keyframes c7wp-glow    { 0%,100%{filter:drop-shadow(0 4px 18px rgba(var(--c7-primary-rgb),0.30))} 50%{filter:drop-shadow(0 4px 30px rgba(var(--c7-primary-rgb),0.55))} }
@keyframes c7wp-shine   { 0%{background-position:-150% 0} 100%{background-position:250% 0} }

.c7wp-tap { transition: transform 160ms cubic-bezier(.34,1.56,.64,1), filter 160ms; }
.c7wp-tap:active { transform: scale(0.96); filter: brightness(1.12); }
.c7wp-fade-up { animation: c7wp-fade-up 0.5s cubic-bezier(.22,.61,.36,1) both; }
.c7wp-spin { animation: c7wp-spin 0.8s linear; }

.c7wp-card {
  position: relative;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(20,12,14,0.92) 0%, rgba(6,5,7,0.96) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 22px 54px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05);
  overflow: hidden;
}

.c7wp-balance-card {
  position: relative;
  padding: 24px 20px 22px;
  border-radius: 24px;
  background:
    radial-gradient(120% 80% at 88% -10%, rgba(var(--c7-primary-rgb), 0.26) 0%, transparent 55%),
    radial-gradient(120% 100% at 0% 110%, rgba(var(--c7-primary-rgb), 0.16) 0%, transparent 55%),
    linear-gradient(180deg, rgba(18,10,12,0.94) 0%, rgba(4,4,5,0.97) 100%);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 26px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06);
  overflow: hidden;
}
.c7wp-balance-card::before {
  content: ''; position: absolute; top: 0; left: 12%; right: 12%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(var(--c7-primary-rgb),0.6), transparent);
  pointer-events: none;
}
.c7wp-balance-shimmer {
  background: linear-gradient(92deg, #fff 0%, ${g} 58%, var(--c7-danger) 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: c7wp-glow 3.4s ease-in-out infinite;
}
.c7wp-trust-chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 9px; border-radius: 999px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);
  font-size: 9px; font-weight: 900; letter-spacing: 1.2px;
  color: ${i.colors.text.secondary}; text-transform: uppercase;
}
.c7wp-trust-chip__dot { width: 5px; height: 5px; border-radius: 50%; background: ${h}; box-shadow: 0 0 6px ${h}; animation: c7wp-pulse 1.5s ease-in-out infinite; }

.c7wp-action {
  position: relative;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  padding: 14px 8px 12px; border-radius: 16px; cursor: pointer; border: none;
  font-family: inherit; overflow: hidden;
  transition: transform 0.18s ease;
}
.c7wp-action__icon  { font-size: 22px; line-height: 1; filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5)); }
.c7wp-action__label { font-size: 11px; font-weight: 900; letter-spacing: 1.1px; text-transform: uppercase; }
.c7wp-action__sub   { font-size: 8.5px; font-weight: 700; letter-spacing: 0.3px; opacity: 0.72; line-height: 1.2; }
.c7wp-action--primary {
  background: linear-gradient(135deg, ${g} 0%, var(--c7-primary-dark) 100%); color: #fff;
  box-shadow: 0 8px 22px rgba(var(--c7-primary-rgb),0.45), inset 0 1px 0 rgba(255,255,255,0.14);
}
.c7wp-action--primary::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%);
  background-size: 250% 100%; animation: c7wp-shine 5s linear infinite;
  pointer-events: none; mix-blend-mode: overlay;
}
.c7wp-action--ghost {
  background: rgba(255,255,255,0.04); color: ${i.colors.text.primary};
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
}
.c7wp-action--gold {
  background: linear-gradient(135deg, rgba(var(--c7-primary-rgb),0.18), rgba(var(--c7-primary-rgb),0.04));
  color: ${_}; border: 1px solid rgba(var(--c7-gold-rgb),0.33);
}
.c7wp-action:active { transform: scale(0.96); }

.c7wp-tab {
  flex-shrink: 0; padding: 8px 14px; font-size: 11px; font-weight: 800;
  letter-spacing: 1.2px; text-transform: uppercase; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.04);
  color: ${i.colors.text.tertiary}; cursor: pointer; white-space: nowrap;
  transition: all 0.18s ease; font-family: inherit;
}
.c7wp-tab:active { transform: scale(0.95); }
.c7wp-tab--active {
  background: linear-gradient(135deg, ${g} 0%, var(--c7-primary-dark) 100%);
  color: #fff; border-color: ${g};
  box-shadow: 0 4px 16px rgba(var(--c7-primary-rgb),0.4);
}
.c7wp-tab__count { display: inline-block; margin-left: 5px; font-size: 9px; padding: 1px 5px; border-radius: 6px; background: rgba(0,0,0,0.25); font-weight: 800; }

.c7wp-refresh-btn {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);
  color: ${i.colors.text.primary}; font-size: 14px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; font-family: inherit;
  transition: border-color 0.18s ease;
}
.c7wp-refresh-btn:hover { border-color: ${g}; }
.c7wp-refresh-btn:active { transform: scale(0.92); }

.c7wp-txn-row {
  padding: 13px 15px; display: flex; align-items: center; justify-content: space-between; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.c7wp-txn-row:last-child { border-bottom: none; }
.c7wp-day-header { padding: 14px 4px 7px; font-size: 10px; font-weight: 900; letter-spacing: 2px; color: ${i.colors.text.tertiary}; text-transform: uppercase; }
`;function y(e,t=1200){let[n,r]=(0,f.useState)(0),i=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(e===i.current)return;let n=performance.now(),a=i.current,o=0,s=c=>{let l=Math.min(1,(c-n)/t),u=1-(1-l)**3;r(a+(e-a)*u),l<1?o=requestAnimationFrame(s):i.current=e};return o=requestAnimationFrame(s),()=>cancelAnimationFrame(o)},[e,t]),n}function b(e){let t=Date.now()-new Date(e).getTime(),n=Math.floor(t/1e3);if(n<60)return`${n}s ago`;let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let i=Math.floor(r/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function x(e){let t=new Date(e),n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(r.getTime()-864e5),a=new Date(t.getFullYear(),t.getMonth(),t.getDate());return a.getTime()===r.getTime()?`Today`:a.getTime()===i.getTime()?`Yesterday`:`Earlier`}function S(e){let t=e.toLowerCase();return t.includes(`deposit`)?`⬇️`:t.includes(`withdraw`)?`⬆️`:t.includes(`transfer_in`)||t.includes(`transfer`)?`🔁`:t.includes(`bet`)||t.includes(`wager`)?`🎲`:t.includes(`win`)||t.includes(`payout`)?`🏆`:t.includes(`bonus`)?`🎁`:t.includes(`refund`)?`↩️`:`◆`}function C(e,t){let n=e.toLowerCase();return n.includes(`deposit`)||n.includes(`win`)||n.includes(`payout`)||n.includes(`bonus`)||n.includes(`refund`)||n.includes(`transfer_in`)?!0:n.includes(`withdraw`)||n.includes(`bet`)||n.includes(`wager`)||n.includes(`transfer_out`)||n.includes(`transfer`)?!1:t>=0}function w(e,t){return C(e,t)?h:m}var T=[`crash`,`mines`,`plinko`,`slots`,`blackjack`,`roulette`,`baccarat`,`keno`,`limbo`,`hilo`,`dice`,`wheel`,`coinflip`,`jetx`,`aviator`,`spaceman`,`pachinko`,`rummy`,`andar`,`teen patti`,`starburst`,`sweet bonanza`,`wolf gold`,`book of dead`,`fruit party`];function E(e){let t=(e.description||``).trim(),n=e.type.replace(/_/g,` `),r=e.type.toLowerCase();if((r===`bet`||r===`win`||r.includes(`wager`)||r.includes(`payout`))&&t){let e=t.toLowerCase();if(T.some(t=>e.includes(t)))return t.charAt(0).toUpperCase()+t.slice(1)}return n}function D(e,t){let n=t.type.toLowerCase();switch(e){case`all`:return!0;case`in`:return n.includes(`deposit`)||n.includes(`refund`)||n.includes(`bonus`)||n.includes(`transfer_in`);case`out`:return n.includes(`withdraw`)||n.includes(`transfer_out`)||n.includes(`transfer`)&&!n.includes(`transfer_in`);case`bets`:return n.includes(`bet`)||n.includes(`wager`);case`wins`:return n.includes(`win`)||n.includes(`payout`);default:return!0}}function O(){let e=a(),[t,n]=(0,f.useState)(!0),[T,O]=(0,f.useState)(!1),[k,A]=(0,f.useState)(!1),[j,M]=(0,f.useState)({balance:0,deposited:0,withdrawn:0,wagered:0,won:0,netPL:0}),[N,P]=(0,f.useState)([]),[F,I]=(0,f.useState)(`all`),L=u()===`live`;(0,f.useEffect)(()=>{if(c(),document.getElementById(`c7wp-wallet-css`))return;let e=document.createElement(`style`);e.id=`c7wp-wallet-css`,e.textContent=v,document.head.appendChild(e)},[]);let R=(0,f.useRef)(null),z=async e=>{let[t,n]=await Promise.all([r.from(`casino_wallets`).select(`balance, total_deposited, total_withdrawn, total_wagered, total_won`).eq(`user_id`,e).eq(`currency`,`USDT`).maybeSingle(),r.from(`casino_transactions`).select(`id, type, amount, status, created_at, description, game_type`).eq(`user_id`,e).order(`created_at`,{ascending:!1}).limit(50)]),i=t.data,a=Number(i?.total_won??0),o=Number(i?.total_wagered??0);M({balance:Number(i?.balance??0),deposited:Number(i?.total_deposited??0),withdrawn:Number(i?.total_withdrawn??0),wagered:o,won:a,netPL:a-o}),P((n.data??[]).map(e=>({id:String(e.id),type:String(e.type??`transaction`),amount:Number(e.amount??0),status:String(e.status??``),createdAt:String(e.created_at??``),description:e.description?String(e.description):void 0,gameType:e.game_type?String(e.game_type):void 0})))};(0,f.useEffect)(()=>{let t=!0,i=null;return(async()=>{let{data:{user:a}}=await r.auth.getUser();if(!a){e(`/login?next=/wallet`,{replace:!0});return}if(t){R.current=a.id;try{await r.rpc(`ensure_user_setup`,{p_user_id:a.id})}catch{}await z(a.id),t&&(n(!1),i=r.channel(`wallet-power-${a.id}`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`casino_wallets`,filter:`user_id=eq.${a.id}`},()=>{z(a.id)}).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`casino_transactions`,filter:`user_id=eq.${a.id}`},()=>{z(a.id)}).subscribe(e=>{t&&A(e===`SUBSCRIBED`)}))}})(),()=>{t=!1,i&&r.removeChannel(i)}},[e]);let B=async()=>{let e=R.current;if(!(!e||T)){O(!0);try{await z(e)}finally{setTimeout(()=>O(!1),600)}}},V=y(j.balance),H=y(j.wagered),U=y(j.won),W=(0,f.useMemo)(()=>N.filter(e=>D(F,e)),[N,F]),G=(0,f.useMemo)(()=>{let e=[],t={};for(let e of W){let n=x(e.createdAt);(t[n]=t[n]||[]).push(e)}return[`Today`,`Yesterday`,`Earlier`].forEach(n=>{t[n]&&t[n].length&&e.push({day:n,items:t[n]})}),e},[W]),K=(0,f.useMemo)(()=>({all:N.length,in:N.filter(e=>D(`in`,e)).length,out:N.filter(e=>D(`out`,e)).length,bets:N.filter(e=>D(`bets`,e)).length,wins:N.filter(e=>D(`wins`,e)).length}),[N]);return(0,p.jsxs)(`div`,{style:{minHeight:`100dvh`,background:i.colors.surface.abyss,color:i.colors.text.primary,paddingBottom:100,position:`relative`},children:[(0,p.jsx)(d,{particleCount:16,noScanLine:!0}),(0,p.jsxs)(`div`,{style:{position:`relative`,zIndex:1,maxWidth:520,margin:`0 auto`},children:[(0,p.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:10,padding:`14px 16px`,background:`rgba(6,5,7,0.74)`,backdropFilter:`blur(18px)`,WebkitBackdropFilter:`blur(18px)`,borderBottom:`1px solid rgba(255,255,255,0.06)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:10},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>e(-1),"aria-label":`Back`,style:{width:34,height:34,borderRadius:10,background:`rgba(255,255,255,0.05)`,border:`1px solid rgba(255,255,255,0.10)`,color:i.colors.text.primary,cursor:`pointer`,fontSize:17,fontFamily:`inherit`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:`‹`}),(0,p.jsx)(`span`,{style:{width:4,height:20,borderRadius:2,background:`linear-gradient(180deg, ${g}, ${_})`}}),(0,p.jsx)(`h1`,{style:{margin:0,fontSize:19,fontWeight:900,letterSpacing:-.4},children:`Wallet`}),!t&&(0,p.jsx)(l,{isLive:k})]}),(0,p.jsx)(`button`,{type:`button`,className:`c7wp-refresh-btn`,onClick:B,disabled:T,"aria-label":`Refresh wallet`,children:(0,p.jsx)(`span`,{className:T?`c7wp-spin`:``,style:{display:`inline-block`},children:`⟳`})})]}),t?(0,p.jsxs)(`div`,{style:{padding:60,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16,color:i.colors.text.tertiary,fontSize:11,letterSpacing:1.6,fontWeight:700,textTransform:`uppercase`},children:[(0,p.jsx)(o,{size:36}),`Loading wallet`]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`section`,{className:`c7wp-fade-up`,style:{padding:`14px 16px 0`},children:(0,p.jsxs)(`div`,{className:`c7wp-balance-card`,children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:8},children:[(0,p.jsx)(`div`,{style:{fontSize:10,fontWeight:900,letterSpacing:2.4,color:i.colors.text.tertiary,textTransform:`uppercase`},children:`Total Balance`}),(0,p.jsxs)(`span`,{className:`c7wp-trust-chip`,children:[(0,p.jsx)(`span`,{className:`c7wp-trust-chip__dot`}),L?`💵 Real Balance`:`🪙 C7 Coins · Free Play`]})]}),(0,p.jsxs)(`div`,{style:{fontSize:46,fontWeight:900,letterSpacing:-1.4,lineHeight:1,fontVariantNumeric:`tabular-nums`,display:`inline-flex`,alignItems:`center`,gap:10},children:[(0,p.jsx)(`span`,{className:`c7wp-balance-shimmer`,children:V.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}),(0,p.jsx)(`span`,{style:{fontSize:38},children:`🪙`})]}),(0,p.jsxs)(`div`,{style:{marginTop:12,display:`flex`,alignItems:`center`,gap:11,flexWrap:`wrap`,fontSize:10,fontWeight:700,letterSpacing:.4,color:i.colors.text.tertiary},children:[(0,p.jsxs)(`span`,{children:[`Net P/L:`,` `,(0,p.jsxs)(`span`,{style:{color:j.netPL>=0?h:m,fontWeight:900,fontVariantNumeric:`tabular-nums`},children:[j.netPL>=0?`+`:`−`,Math.abs(j.netPL).toLocaleString(void 0,{maximumFractionDigits:2}),` 🪙`]})]}),(0,p.jsx)(`span`,{style:{width:1,height:11,background:`rgba(255,255,255,0.12)`}}),(0,p.jsxs)(`span`,{children:[`Wagered:`,` `,(0,p.jsxs)(`span`,{style:{color:i.colors.text.primary,fontWeight:900,fontVariantNumeric:`tabular-nums`},children:[H.toLocaleString(void 0,{maximumFractionDigits:0}),` 🪙`]})]}),(0,p.jsx)(`span`,{style:{width:1,height:11,background:`rgba(255,255,255,0.12)`}}),(0,p.jsxs)(`span`,{children:[`Won:`,` `,(0,p.jsxs)(`span`,{style:{color:_,fontWeight:900,fontVariantNumeric:`tabular-nums`},children:[U.toLocaleString(void 0,{maximumFractionDigits:0}),` 🪙`]})]})]})]})}),(0,p.jsx)(`section`,{className:`c7wp-fade-up`,style:{padding:`12px 16px 0`,animationDelay:`0.05s`},children:L?(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:9},children:[(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--primary c7wp-tap`,onClick:()=>e(`/deposit/upi`),"aria-label":`Deposit`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`＋`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Deposit`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`UPI · Instant`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--primary c7wp-tap`,onClick:()=>e(`/withdraw`),"aria-label":`Withdraw`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`↑`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Withdraw`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`To USDT wallet`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--gold c7wp-tap`,onClick:()=>e(`/kyc`),"aria-label":`Identity verification`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`🛡️`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Verify`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`KYC / identity`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--ghost c7wp-tap`,onClick:()=>{let e=document.getElementById(`c7wp-activity`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})},"aria-label":`Jump to activity`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`📋`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`History`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`All activity`})]})]}):(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:9},children:[(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--gold c7wp-tap`,onClick:async()=>{let{error:e}=await r.rpc(`grant_daily_bonus`);if(e){console.error(e);return}let t=R.current;t&&await z(t)},"aria-label":`Claim daily bonus`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`🎁`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Daily Bonus`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`+1,000 🪙 / day`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--ghost c7wp-tap`,onClick:async()=>{let{error:e}=await r.rpc(`auto_refill_if_empty`);if(e){console.error(e);return}let t=R.current;t&&await z(t)},"aria-label":`Free refill when low`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`🪙`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Free Refill`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`+1,000 🪙 when low`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--primary c7wp-tap`,onClick:()=>{window.location.href=`/deposit`},"aria-label":`Demo deposit`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`✨`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`Deposit`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`Demo · up to 5K 🪙`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-action c7wp-action--ghost c7wp-tap`,onClick:()=>{let e=document.getElementById(`c7wp-activity`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})},"aria-label":`Jump to activity`,children:[(0,p.jsx)(`span`,{className:`c7wp-action__icon`,children:`📋`}),(0,p.jsx)(`span`,{className:`c7wp-action__label`,children:`History`}),(0,p.jsx)(`span`,{className:`c7wp-action__sub`,children:`All activity`})]})]})}),(0,p.jsxs)(`section`,{id:`c7wp-activity`,className:`c7wp-fade-up`,style:{padding:`20px 16px 0`,animationDelay:`0.13s`,scrollMarginTop:80},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:11},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,p.jsx)(`span`,{style:{width:3,height:14,borderRadius:2,background:`linear-gradient(180deg, ${g}, ${_})`}}),(0,p.jsx)(`h2`,{style:{margin:0,fontSize:12,fontWeight:900,letterSpacing:2,textTransform:`uppercase`},children:`Activity`})]}),(0,p.jsxs)(`span`,{style:{fontSize:10,color:i.colors.text.tertiary,fontWeight:800,letterSpacing:1.4,textTransform:`uppercase`},children:[W.length,` of `,N.length]})]}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:6,overflowX:`auto`,paddingBottom:10,scrollbarWidth:`none`,msOverflowStyle:`none`},children:[{key:`all`,label:`All`},{key:`in`,label:`In`},{key:`out`,label:`Out`},{key:`bets`,label:`Bets`},{key:`wins`,label:`Wins`}].map(e=>(0,p.jsxs)(`button`,{type:`button`,className:`c7wp-tab${F===e.key?` c7wp-tab--active`:``}`,onClick:()=>I(e.key),children:[e.label,(0,p.jsx)(`span`,{className:`c7wp-tab__count`,children:K[e.key]})]},e.key))}),W.length===0?(0,p.jsxs)(`div`,{className:`c7wp-card`,style:{padding:`40px 16px`,textAlign:`center`,color:i.colors.text.tertiary,fontSize:13,marginTop:4},children:[(0,p.jsx)(`div`,{style:{fontSize:36,marginBottom:10,opacity:.55},children:`📭`}),(0,p.jsx)(`div`,{style:{fontWeight:800,color:i.colors.text.secondary,marginBottom:5},children:N.length===0?`No activity yet`:`No ${F} activity`}),(0,p.jsx)(`div`,{style:{fontSize:11},children:N.length===0?`Every deposit, bet and withdrawal will appear here.`:`Try a different filter or check back later.`})]}):(0,p.jsx)(`div`,{children:G.map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`c7wp-day-header`,children:e.day}),(0,p.jsx)(`div`,{className:`c7wp-card`,children:e.items.map(e=>{let t=w(e.type,e.amount),n=C(e.type,e.amount),r=n?`+`:`−`;return(0,p.jsxs)(`div`,{className:`c7wp-txn-row`,children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:11,minWidth:0},children:[(0,p.jsx)(`span`,{style:{fontSize:18,width:36,height:36,borderRadius:10,background:n?`rgba(var(--c7-success-rgb),0.09)`:`rgba(255,255,255,0.05)`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:S(e.type)}),(0,p.jsxs)(`div`,{style:{minWidth:0},children:[(0,p.jsx)(`div`,{style:{fontSize:13,fontWeight:800,textTransform:`capitalize`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,letterSpacing:.2},children:E(e)}),(0,p.jsxs)(`div`,{style:{fontSize:10,color:i.colors.text.tertiary,marginTop:2,fontWeight:700,letterSpacing:.3},children:[b(e.createdAt),e.status&&e.status.toLowerCase()!==`completed`&&(0,p.jsx)(`span`,{style:{marginLeft:8,padding:`1px 7px`,fontSize:8,fontWeight:900,borderRadius:999,background:e.status.toLowerCase()===`pending`?`rgba(var(--c7-gold-rgb),0.12)`:e.status.toLowerCase()===`failed`||e.status.toLowerCase()===`rejected`?`rgba(var(--c7-primary-rgb),0.12)`:`rgba(var(--c7-success-rgb),0.12)`,color:e.status.toLowerCase()===`pending`?_:e.status.toLowerCase()===`failed`||e.status.toLowerCase()===`rejected`?g:h,textTransform:`uppercase`,letterSpacing:1},children:e.status})]})]})]}),(0,p.jsxs)(`div`,{style:{fontSize:14,fontWeight:900,color:t,letterSpacing:-.3,fontVariantNumeric:`tabular-nums`,flexShrink:0},children:[r,Math.abs(e.amount).toFixed(2),` 🪙`]})]},e.id)})})]},e.day))})]}),(0,p.jsxs)(`section`,{style:{padding:`22px 16px 8px`,textAlign:`center`},children:[(0,p.jsx)(`p`,{style:{fontSize:10,color:i.colors.text.muted,fontWeight:700,letterSpacing:.4,margin:0},children:L?`Real-money play · 18+ · Deposits require identity (KYC) verification · Gamble responsibly`:`Free-play demo · C7 Coins have no monetary value · Bonus + Auto-refill keep you topped up`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>e(`/responsible`),style:{marginTop:10,background:`none`,border:`none`,cursor:`pointer`,color:_,fontSize:11,fontWeight:800,letterSpacing:.4},children:`🛡️ Responsible Gambling — set limits or take a break`})]})]})]}),(0,p.jsx)(s,{})]})}export{O as default};