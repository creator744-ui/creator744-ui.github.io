import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{l as r,n as i,p as a}from"./index-DsGzpRzl.js";import{t as o}from"./arrow-left-C6UFzkXE.js";import{t as s}from"./circle-alert-BxKTtluW.js";import{t as c}from"./circle-check-Cy4PZX5f.js";import{t as l}from"./coins-DqUebkOS.js";import{t as u}from"./loader-circle-7vNK5oHx.js";import{t as d}from"./sparkles-CfVSwfFn.js";import{t as f}from"./usePlatformMode-DEuCuqBu.js";import{t as p}from"./HdrScreen-DJ5aAE1g.js";var m=e(t(),1),h=n(),g=[10,30,50,80,100,200,300,500,800,1e3,1500,2e3,3e3,5e3];function _(){let e=a(),[t,n]=(0,m.useState)(null),[_,y]=(0,m.useState)(100),[b,x]=(0,m.useState)(``),[S,C]=(0,m.useState)(!1),[w,T]=(0,m.useState)(null),E=f();(0,m.useEffect)(()=>{E===`live`&&e(`/deposit/request`,{replace:!0})},[E,e]),(0,m.useEffect)(()=>{(async()=>{let{data:{user:e}}=await r.auth.getUser();if(!e)return;let{data:t}=await r.from(`casino_wallets`).select(`balance`).eq(`user_id`,e.id).eq(`currency`,`USDT`).maybeSingle();t&&n(Number(t.balance))})()},[w]);let D=(()=>{if(b){let e=parseInt(b,10);if(Number.isFinite(e))return e}return _})(),O=D>=10&&D<=5e3;return(0,h.jsxs)(p,{pad:100,children:[(0,h.jsx)(v,{}),(0,h.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:10,background:`rgba(0, 0, 0, 0.92)`,backdropFilter:`blur(20px)`,borderBottom:`1px solid ${i.colors.border.subtle}`,padding:`14px 16px`,display:`flex`,alignItems:`center`,gap:12},children:[(0,h.jsx)(`button`,{onClick:()=>e(-1),"aria-label":`Back`,style:{width:36,height:36,borderRadius:`50%`,background:`rgba(255,255,255,0.06)`,border:`none`,color:`#fff`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:(0,h.jsx)(o,{size:18})}),(0,h.jsx)(`h1`,{style:{fontSize:18,fontWeight:700,margin:0,flex:1,textAlign:`center`},children:`Deposit`}),(0,h.jsx)(`div`,{style:{width:36}})]}),(0,h.jsxs)(`div`,{className:`demo-badge-row`,children:[(0,h.jsxs)(`div`,{className:`demo-badge`,children:[(0,h.jsx)(d,{size:14}),(0,h.jsx)(`span`,{children:`DEMO MODE`})]}),(0,h.jsx)(`p`,{className:`demo-badge-note`,children:`Free-play coins only · No real money · No payment processing`})]}),(0,h.jsxs)(`section`,{style:{padding:`8px 16px 16px`,textAlign:`center`},children:[(0,h.jsx)(`div`,{style:{fontSize:10,color:i.colors.text.tertiary,letterSpacing:2.4,textTransform:`uppercase`,marginBottom:4},children:`Current Balance`}),(0,h.jsxs)(`div`,{style:{fontSize:36,fontWeight:900,fontVariantNumeric:`tabular-nums`,letterSpacing:-.8,color:`#fff`},children:[t==null?`—`:t.toLocaleString(),` `,(0,h.jsx)(l,{size:26,style:{verticalAlign:`middle`,marginLeft:4}})]})]}),(0,h.jsx)(`section`,{style:{padding:`0 16px`},children:(0,h.jsxs)(`div`,{className:`demo-input-row`,children:[(0,h.jsx)(`input`,{type:`number`,inputMode:`numeric`,placeholder:`Enter amount (10 – 5,000)`,value:b,onChange:e=>{x(e.target.value),T(null)},min:10,max:5e3,className:`demo-amount-input`}),b&&(0,h.jsx)(`button`,{onClick:()=>x(``),className:`demo-input-clear`,"aria-label":`Clear`,children:`×`})]})}),(0,h.jsx)(`section`,{style:{padding:`16px`},children:(0,h.jsx)(`div`,{className:`demo-tile-grid`,children:g.map(e=>(0,h.jsx)(`button`,{onClick:()=>{y(e),x(``),T(null)},className:`demo-tile`,"data-active":!b&&_===e,children:e.toLocaleString()},e))})}),(0,h.jsxs)(`section`,{style:{padding:`0 16px 16px`},children:[(0,h.jsx)(`div`,{style:{fontSize:11,color:i.colors.text.tertiary,letterSpacing:1.6,textTransform:`uppercase`,marginBottom:8,fontWeight:700},children:`Method`}),(0,h.jsxs)(`div`,{className:`demo-method-row`,children:[(0,h.jsxs)(`div`,{className:`demo-method demo-method--active`,children:[(0,h.jsx)(l,{size:18}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`demo-method-name`,children:`Demo Credit`}),(0,h.jsx)(`div`,{className:`demo-method-note`,children:`Instant · Free-play coins`})]})]}),(0,h.jsxs)(`div`,{className:`demo-method demo-method--disabled`,title:`Available after Phase 2 licensing`,children:[(0,h.jsx)(`span`,{style:{fontSize:20,opacity:.4},children:`💳`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`demo-method-name`,children:`Card / UPI / Crypto`}),(0,h.jsx)(`div`,{className:`demo-method-note`,children:`Locked · Phase 2 only`})]})]})]})]}),(0,h.jsx)(`section`,{style:{padding:`0 16px 16px`},children:(0,h.jsxs)(`div`,{className:`demo-voucher`,children:[(0,h.jsx)(d,{size:20}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(`div`,{className:`demo-voucher-title`,children:`+50% BONUS`}),(0,h.jsx)(`div`,{className:`demo-voucher-note`,children:`On any demo deposit · Auto-applied`})]})]})}),w&&(0,h.jsx)(`section`,{style:{padding:`0 16px 16px`},children:w.ok?(0,h.jsxs)(`div`,{className:`demo-result demo-result--ok`,children:[(0,h.jsx)(c,{size:20}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:`#fff`},children:[`+`,w.amount_granted.toLocaleString(),` 🪙 credited`]}),(0,h.jsxs)(`div`,{style:{fontSize:11,color:`rgba(255,255,255,0.7)`,marginTop:2},children:[`New balance: `,w.new_balance.toLocaleString(),` 🪙`,` · `,w.daily_grants_remaining,` more demo deposits today`]})]})]}):(0,h.jsxs)(`div`,{className:`demo-result demo-result--err`,children:[(0,h.jsx)(s,{size:20}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(`div`,{style:{fontSize:14,fontWeight:700},children:w.message??`Demo deposit failed`}),(0,h.jsxs)(`div`,{style:{fontSize:11,color:`rgba(255,255,255,0.6)`,marginTop:2},children:[`Error code: `,w.error]})]})]})}),(0,h.jsxs)(`div`,{className:`demo-cta-wrap`,children:[(0,h.jsx)(`button`,{onClick:async()=>{if(!(!O||S)){C(!0),T(null);try{let{data:e,error:t}=await r.functions.invoke(`grant-demo-credit`,{body:{amount:D}});T(t?{ok:!1,error:`network`,message:t.message}:e)}catch(e){T({ok:!1,error:`exception`,message:e instanceof Error?e.message:`Unknown error`})}finally{C(!1)}}},disabled:!O||S,className:`demo-cta`,children:S?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{size:18,className:`demo-spin`}),(0,h.jsx)(`span`,{children:`Processing…`})]}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(`span`,{children:[`Credit `,D.toLocaleString(),` 🪙`]})})}),(0,h.jsx)(`p`,{className:`demo-cta-disclaimer`,children:`By tapping, you grant yourself free-play coins. No real money is involved.`})]})]})}function v(){return(0,h.jsx)(`style`,{children:`
      @keyframes demo-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      .demo-spin { animation: demo-spin 1s linear infinite; }

      .demo-badge-row {
        padding: 14px 16px 0;
        text-align: center;
      }
      .demo-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 999px;
        background: linear-gradient(135deg, #e02b3c, #8a1622);
        color: #fff;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1.6px;
        box-shadow: 0 4px 16px rgba(224, 43, 60, 0.45);
      }
      .demo-badge-note {
        margin: 8px 0 0;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.55);
        letter-spacing: 0.4px;
      }

      .demo-input-row {
        position: relative;
      }
      .demo-amount-input {
        width: 100%;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: 14px;
        padding: 14px 40px 14px 16px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        outline: none;
      }
      .demo-amount-input:focus {
        border-color: #e02b3c;
        box-shadow: 0 0 0 3px rgba(224, 43, 60, 0.18);
      }
      .demo-input-clear {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: rgba(255,255,255,0.12);
        color: #fff;
        border: none;
        font-size: 16px;
        cursor: pointer;
      }

      .demo-tile-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .demo-tile {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 14px 4px;
        color: rgba(255, 255, 255, 0.85);
        font-size: 14px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .demo-tile:active { transform: scale(0.96); }
      .demo-tile[data-active="true"] {
        background: linear-gradient(180deg, rgba(224, 43, 60, 0.30), rgba(224, 43, 60, 0.18));
        border-color: #e02b3c;
        color: #fff;
        box-shadow: 0 0 12px rgba(224, 43, 60, 0.35), inset 0 1px 0 rgba(255,255,255,0.10);
      }

      .demo-method-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .demo-method {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        cursor: pointer;
      }
      .demo-method--active {
        border-color: #e02b3c;
        background: linear-gradient(180deg, rgba(224, 43, 60, 0.18), rgba(224, 43, 60, 0.08));
        color: #fff;
      }
      .demo-method--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .demo-method-name {
        font-size: 13px;
        font-weight: 700;
        color: #fff;
      }
      .demo-method-note {
        font-size: 10px;
        color: rgba(255,255,255,0.55);
        margin-top: 2px;
      }

      .demo-voucher {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(224, 43, 60, 0.12));
        border: 1px solid rgba(255, 255, 255, 0.35);
        color: #FFFFFF;
      }
      .demo-voucher-title {
        font-size: 14px;
        font-weight: 900;
        letter-spacing: 0.4px;
        color: #ffd56b;
      }
      .demo-voucher-note {
        font-size: 11px;
        color: rgba(255,255,255,0.6);
        margin-top: 2px;
      }

      .demo-result {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px;
        border-radius: 12px;
        border: 1px solid;
      }
      .demo-result--ok {
        border-color: rgba(255, 201, 53, 0.55);
        background: rgba(255, 201, 53, 0.10);
        color: #ffd76b;
      }
      .demo-result--err {
        border-color: rgba(224, 43, 60, 0.55);
        background: rgba(224, 43, 60, 0.10);
        color: #ff8089;
      }

      .demo-cta-wrap {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 520px;
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
        background: linear-gradient(to top, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0));
        backdrop-filter: blur(10px);
        z-index: 10;
      }
      .demo-cta {
        width: 100%;
        padding: 16px;
        border-radius: 14px;
        border: none;
        background: linear-gradient(135deg, #e02b3c, #8a1622);
        color: #fff;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 0.4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 4px 24px rgba(224, 43, 60, 0.45);
        transition: transform 0.12s ease, opacity 0.15s ease;
      }
      .demo-cta:active { transform: scale(0.98); }
      .demo-cta:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .demo-cta-disclaimer {
        margin: 8px 0 0;
        text-align: center;
        font-size: 10px;
        color: rgba(255,255,255,0.45);
      }
    `})}export{_ as default};