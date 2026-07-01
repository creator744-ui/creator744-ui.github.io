import"./rolldown-runtime-Cyuzqnbw.js";import{f as e}from"./vendor-charts-lAsn_sRA.js";import{U as t}from"./vendor-radix-Ba6QWFpM.js";import{n}from"./index-DsGzpRzl.js";e();var r=t(),i=`
@keyframes c7sys-pulse-dot { 0%,100%{ opacity: 1; transform: scale(1) } 50%{ opacity: 0.4; transform: scale(0.8) } }
@keyframes c7sys-rise { 0% { opacity: 0; transform: translateY(8px) } 100% { opacity: 1; transform: translateY(0) } }
@keyframes c7sys-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
@keyframes c7sys-spin { to { transform: rotate(360deg) } }

.c7-fade-in { animation: c7sys-rise 420ms cubic-bezier(.21,1.02,.73,1) both; }
.c7-pulse-dot { animation: c7sys-pulse-dot 1.6s ease-in-out infinite; }
.c7-tap { transition: transform 160ms cubic-bezier(.34,1.56,.64,1), filter 160ms, box-shadow 200ms; }
.c7-tap:active { transform: scale(0.97); filter: brightness(1.12); }
.c7-card-hover { transition: transform 220ms, box-shadow 220ms, border-color 220ms; }
.c7-card-hover:hover { transform: translateY(-2px); }

/* Consistent focus ring for all inputs */
.c7-input { transition: border-color 180ms, box-shadow 180ms; }
.c7-input:focus {
  border-color: rgba(255, 201, 53, 0.5) !important;
  box-shadow: 0 0 0 3px rgba(255, 201, 53, 0.12);
  outline: none;
}

/* Title gradient (shared between H1s) */
.c7-title-gradient {
  background: linear-gradient(135deg, #ffc935 0%, #ffc940 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
`,a=!1;function o(){if(a||typeof document>`u`)return;if(document.getElementById(`c7-system-css`)){a=!0;return}let e=document.createElement(`style`);e.id=`c7-system-css`,e.textContent=i,document.head.appendChild(e),a=!0}var s={pagePad:`20px 16px 110px`,pageBg:n.colors.surface.void,cardBlur:`blur(14px)`,cardElevatedBlur:`blur(18px)`,cardPad:20,cardPadCompact:16,cardRadius:n.radius.card,cardBorder:`1px solid ${n.colors.border.medium}`,cardBg:n.colors.surface.glass,cardShadow:n.shadow.card,cardShadowElevated:n.shadow.modal,btnHeight:48,btnHeightSm:38,btnRadius:n.radius.md,btnPillRadius:n.radius.pill,btnFontSize:13,btnFontWeight:900,btnLetterSpacing:1.4,labelFontSize:10,labelFontWeight:900,labelLetterSpacing:1.8,labelColor:n.colors.text.tertiary},c=({isLive:e,label:t})=>(0,r.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:5,padding:`4px 9px`,fontSize:10,fontWeight:900,letterSpacing:1.3,borderRadius:n.radius.pill,background:e?`${n.colors.emerald[500]}1f`:`${n.colors.text.tertiary}1a`,color:e?n.colors.emerald[500]:n.colors.text.tertiary,border:`1px solid ${e?n.colors.emerald[500]+`55`:n.colors.border.subtle}`,textTransform:`uppercase`,whiteSpace:`nowrap`},children:[(0,r.jsx)(`span`,{className:e?`c7-pulse-dot`:``,style:{fontSize:8,lineHeight:1},children:`●`}),t||(e?`Live`:`Offline`)]}),l=({title:e,subtitle:t,rightSlot:i})=>(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:12,marginBottom:20},children:[(0,r.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,r.jsx)(`h1`,{style:{margin:0,fontSize:26,fontWeight:900,letterSpacing:n.type.tracking.tight,lineHeight:1.05},children:(0,r.jsx)(`span`,{className:`c7-title-gradient`,children:e})}),t&&(0,r.jsx)(`div`,{style:{marginTop:4,fontSize:s.labelFontSize,fontWeight:s.labelFontWeight,letterSpacing:2,color:s.labelColor,textTransform:`uppercase`},children:t})]}),i&&(0,r.jsx)(`div`,{style:{flexShrink:0,display:`flex`,alignItems:`center`,gap:8},children:i})]});export{l as n,o as r,c as t};