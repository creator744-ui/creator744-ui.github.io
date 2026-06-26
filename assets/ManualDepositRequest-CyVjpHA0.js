import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,n as i,p as a}from"./index-D7KGRYYL.js";import{t as o}from"./arrow-left-C6UFzkXE.js";import{t as s}from"./banknote-DqEX4ILn.js";import{t as c}from"./circle-alert-BxKTtluW.js";import{t as l}from"./circle-check-Cy4PZX5f.js";import{t as u}from"./loader-circle-7vNK5oHx.js";import{t as d}from"./shield-check-DH9RWNTW.js";import{t as f}from"./HdrScreen-DoiMkSTV.js";var p=e(t(),1),m=n(),h=[100,250,500,1e3,2500,5e3,1e4,25e3],g=[{id:`bank`,label:`Bank transfer`,note:`NEFT / IMPS / wire`},{id:`cash`,label:`Cash agent`,note:`Agent collection`},{id:`other`,label:`Other`,note:`Any approved route`}],_=100,v=1e5;function y(){let e=a(),[t,n]=(0,p.useState)(``),[y,x]=(0,p.useState)(`bank`),[S,C]=(0,p.useState)(``),[w,T]=(0,p.useState)(``),[E,D]=(0,p.useState)(!1),[O,k]=(0,p.useState)(null),A=parseInt(t,10),j=Number.isFinite(A)&&A>=_&&A<=v;return(0,m.jsxs)(f,{pad:120,children:[(0,m.jsx)(b,{}),(0,m.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:10,background:`rgba(0,0,0,0.92)`,backdropFilter:`blur(20px)`,borderBottom:`1px solid ${i.colors.border.subtle}`,padding:`14px 16px`,display:`flex`,alignItems:`center`,gap:12},children:[(0,m.jsx)(`button`,{onClick:()=>e(-1),"aria-label":`Back`,style:{width:36,height:36,borderRadius:`50%`,background:`rgba(255,255,255,0.06)`,border:`none`,color:`#fff`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:(0,m.jsx)(o,{size:18})}),(0,m.jsx)(`h1`,{style:{fontSize:18,fontWeight:700,margin:0,flex:1,textAlign:`center`},children:`Deposit Request`}),(0,m.jsx)(`div`,{style:{width:36}})]}),(0,m.jsxs)(`div`,{className:`md-note-row`,children:[(0,m.jsxs)(`div`,{className:`md-badge`,children:[(0,m.jsx)(d,{size:14}),(0,m.jsx)(`span`,{children:`VERIFIED OFFLINE DEPOSIT`})]}),(0,m.jsx)(`p`,{className:`md-note`,children:`Submit your offline payment (bank · UPI · cash) for manual review. Funds are credited after an admin verifies your reference. KYC required.`}),(0,m.jsxs)(`div`,{className:`md-quick-row`,children:[(0,m.jsx)(`button`,{onClick:()=>e(`/deposit/crypto`),className:`md-upi-link`,children:`Crypto (USDT-TRC20) →`}),(0,m.jsx)(`button`,{onClick:()=>e(`/deposit/upi`),className:`md-upi-link`,children:`UPI (INR) →`})]})]}),(0,m.jsxs)(`section`,{style:{padding:`8px 16px 0`},children:[(0,m.jsx)(`label`,{className:`md-label`,children:`Amount`}),(0,m.jsx)(`input`,{type:`number`,inputMode:`numeric`,placeholder:`Enter amount (${_.toLocaleString()} – ${v.toLocaleString()})`,value:t,onChange:e=>{n(e.target.value),k(null)},min:_,max:v,className:`md-input`}),(0,m.jsx)(`div`,{className:`md-tile-grid`,children:h.map(e=>(0,m.jsx)(`button`,{onClick:()=>{n(String(e)),k(null)},className:`md-tile`,"data-active":A===e,children:e.toLocaleString()},e))})]}),(0,m.jsxs)(`section`,{style:{padding:`16px 16px 0`},children:[(0,m.jsx)(`label`,{className:`md-label`,children:`Payment method`}),(0,m.jsx)(`div`,{className:`md-method-grid`,children:g.map(e=>(0,m.jsxs)(`button`,{onClick:()=>x(e.id),className:`md-method`,"data-active":y===e.id,children:[(0,m.jsx)(`div`,{className:`md-method-name`,children:e.label}),(0,m.jsx)(`div`,{className:`md-method-note`,children:e.note})]},e.id))})]}),(0,m.jsxs)(`section`,{style:{padding:`16px 16px 0`},children:[(0,m.jsx)(`label`,{className:`md-label`,children:`Payment reference / UTR`}),(0,m.jsx)(`input`,{placeholder:`e.g. UPI ref, bank UTR, agent receipt no.`,value:S,onChange:e=>C(e.target.value),maxLength:120,className:`md-input`}),(0,m.jsx)(`label`,{className:`md-label`,style:{marginTop:12},children:`Receipt URL (optional)`}),(0,m.jsx)(`input`,{placeholder:`Link to an uploaded receipt / screenshot`,value:w,onChange:e=>T(e.target.value),maxLength:300,className:`md-input`})]}),O&&(0,m.jsx)(`section`,{style:{padding:`16px 16px 0`},children:O.ok?(0,m.jsxs)(`div`,{className:`md-result md-result--ok`,children:[(0,m.jsx)(l,{size:20}),(0,m.jsxs)(`div`,{style:{flex:1},children:[(0,m.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`#fff`},children:`Request submitted`}),(0,m.jsxs)(`div`,{style:{fontSize:11,color:`rgba(255,255,255,0.7)`,marginTop:2},children:[`Pending admin review · Ref `,O.id.slice(0,8)]})]})]}):(0,m.jsxs)(`div`,{className:`md-result md-result--err`,children:[(0,m.jsx)(c,{size:20}),(0,m.jsxs)(`div`,{style:{flex:1},children:[(0,m.jsx)(`div`,{style:{fontSize:14,fontWeight:700},children:O.message}),O.code===`kyc`&&(0,m.jsx)(`button`,{onClick:()=>e(`/kyc`),style:{marginTop:6,fontSize:12,fontWeight:700,color:`#ff8089`,background:`none`,border:`none`,cursor:`pointer`,padding:0},children:`Go to verification →`})]})]})}),(0,m.jsxs)(`div`,{className:`md-cta-wrap`,children:[(0,m.jsx)(`button`,{onClick:async()=>{if(!(!j||E)){D(!0),k(null);try{let{data:e,error:t}=await r.rpc(`request_manual_deposit`,{p_amount:A,p_method:y,p_reference:S.trim()||null,p_proof_url:w.trim()||null});if(t){let e=t.message||`Request failed`,n=e,r=`error`;e.includes(`E_DEMO_MODE`)?(r=`demo`,n=`Real-money deposits are not enabled yet. This platform is in free-play (demo) mode.`):e.includes(`E_KYC_REQUIRED`)?(r=`kyc`,n=`KYC verification is required before you can deposit. Please complete verification first.`):e.includes(`Too many pending`)&&(r=`limit`,n=`You already have several pending requests. Please wait for them to be reviewed.`),k({ok:!1,code:r,message:n})}else{let t=e;k({ok:!0,id:t.id,status:t.status}),n(``),C(``),T(``)}}catch(e){k({ok:!1,code:`exception`,message:e instanceof Error?e.message:`Unknown error`})}finally{D(!1)}}},disabled:!j||E,className:`md-cta`,children:E?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{size:18,className:`md-spin`}),(0,m.jsx)(`span`,{children:`Submitting…`})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{size:18}),(0,m.jsx)(`span`,{children:`Submit deposit request`})]})}),(0,m.jsx)(`p`,{className:`md-cta-disclaimer`,children:`Reviewed manually by an admin. No funds move until your reference is verified.`})]})]})}function b(){return(0,m.jsx)(`style`,{children:`
      @keyframes md-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      .md-spin { animation: md-spin 1s linear infinite; }

      .md-note-row { padding: 14px 16px 4px; text-align: center; }
      .md-badge {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 6px 14px; border-radius: 999px;
        background: linear-gradient(135deg, var(--c7-accent), var(--c7-primary));
        color: var(--c7-bg); font-size: 10px; font-weight: 800; letter-spacing: 1.4px;
        box-shadow: 0 4px 16px rgba(var(--c7-primary-rgb),0.4);
      }
      .md-note { margin: 8px 0 0; font-size: 11px; color: rgba(255,255,255,0.55); }
      .md-quick-row { display: flex; gap: 8px; justify-content: center; margin-top: 10px; flex-wrap: wrap; }
      .md-upi-link { display: inline-block; background: rgba(255,201,53,0.10); border: 1px solid rgba(255,201,53,0.35); color: #ffd76b; font-size: 12px; font-weight: 700; padding: 9px 16px; border-radius: 999px; cursor: pointer; }

      .md-label {
        display: block; font-size: 11px; color: rgba(255,255,255,0.55);
        letter-spacing: 1.2px; text-transform: uppercase; font-weight: 700; margin-bottom: 8px;
      }
      .md-input {
        width: 100%; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.10); border-radius: 14px;
        padding: 14px 16px; color: #fff; font-size: 16px; font-weight: 600;
        font-variant-numeric: tabular-nums; outline: none;
      }
      .md-input:focus { border-color: var(--c7-primary); box-shadow: 0 0 0 3px rgba(var(--c7-primary-rgb),0.18); }

      .md-tile-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px; }
      .md-tile {
        background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px; padding: 12px 4px; color: rgba(255,255,255,0.85);
        font-size: 13px; font-weight: 700; font-variant-numeric: tabular-nums;
        cursor: pointer; transition: all 0.15s ease;
      }
      .md-tile:active { transform: scale(0.96); }
      .md-tile[data-active="true"] {
        background: linear-gradient(180deg, var(--c7-accent), var(--c7-primary));
        border-color: transparent; color: var(--c7-bg);
        box-shadow: 0 3px 0 var(--c7-primary-dark), inset 0 1px 0 rgba(255,255,255,0.35);
      }

      .md-method-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .md-method {
        text-align: left; padding: 12px; border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04);
        color: #fff; cursor: pointer; transition: all 0.15s ease;
      }
      .md-method[data-active="true"] {
        border-color: var(--c7-primary);
        background: linear-gradient(180deg, rgba(var(--c7-primary-rgb),0.20), rgba(var(--c7-primary-rgb),0.08));
      }
      .md-method-name { font-size: 13px; font-weight: 700; }
      .md-method-note { font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 2px; }

      .md-result { display: flex; align-items: flex-start; gap: 12px; padding: 14px; border-radius: 12px; border: 1px solid; }
      .md-result--ok { border-color: rgba(16,185,129,0.55); background: rgba(16,185,129,0.10); color: #34d399; }
      .md-result--err { border-color: rgba(224,43,60,0.55); background: rgba(224,43,60,0.10); color: #ff8089; }

      .md-cta-wrap {
        position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
        width: 100%; max-width: 520px;
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
        background: linear-gradient(to top, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0));
        backdrop-filter: blur(10px); z-index: 10;
      }
      .md-cta {
        width: 100%; padding: 16px; border-radius: 18px; border: none;
        background: radial-gradient(120% 90% at 50% -15%, rgba(255,255,255,0.45), transparent 55%), linear-gradient(180deg, var(--c7-accent), var(--c7-primary)); color: var(--c7-bg);
        font-size: 16px; font-weight: 900; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center; gap: 10px;
        box-shadow: 0 6px 0 var(--c7-primary-dark), inset 0 2px 0 rgba(255,255,255,0.5), 0 12px 22px -5px rgba(var(--c7-primary-rgb),0.55); transition: transform 0.12s ease, opacity 0.15s ease;
      }
      .md-cta:active { transform: scale(0.98); }
      .md-cta:disabled { opacity: 0.45; cursor: not-allowed; }
      .md-cta-disclaimer { margin: 8px 0 0; text-align: center; font-size: 10px; color: rgba(255,255,255,0.45); }
    `})}export{y as default};