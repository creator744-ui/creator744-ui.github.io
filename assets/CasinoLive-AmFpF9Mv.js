import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{f as t}from"./vendor-charts-lAsn_sRA.js";import{U as n}from"./vendor-radix-Ba6QWFpM.js";import{n as r,p as i}from"./index-D7KGRYYL.js";import{t as a}from"./CasinoBottomNav-CqSouChf.js";import{r as o}from"./c7Sys-QqKM1rFH.js";var s=e(t(),1),c=n(),l={roulette:`/videos/roulette.mp4`,blackjack:`/videos/blackjack.mp4`,baccarat:`/videos/baccarat.mp4`,shows:`/videos/shows.mp4`},u=[{id:`lightning-roulette`,name:`Quick Roulette`,category:`roulette`,dealer:`Auto`,minBet:10,maxBet:2e3,viewers:412,route:`/casino/live-roulette`,accent:`platinum`,videoSrc:l.roulette},{id:`speed-blackjack`,name:`Speed Blackjack (RNG)`,category:`blackjack`,dealer:`Auto`,minBet:25,maxBet:1e3,viewers:187,route:`/casino/live-blackjack`,accent:`ruby`,videoSrc:l.blackjack},{id:`vip-roulette`,name:`High-Stakes Roulette`,category:`roulette`,dealer:`Auto`,minBet:100,maxBet:5e3,viewers:89,route:`/casino/live-roulette`,accent:`platinum`,videoSrc:l.roulette},{id:`auto-roulette`,name:`Auto-Roulette`,category:`roulette`,dealer:`Auto`,minBet:5,maxBet:500,viewers:234,route:`/casino/live-roulette`,accent:`aqua`,videoSrc:l.roulette},{id:`salon-prive-blackjack`,name:`High-Stakes Blackjack`,category:`blackjack`,dealer:`Auto`,minBet:50,maxBet:2500,viewers:156,route:`/casino/live-blackjack`,accent:`ruby`,videoSrc:l.blackjack},{id:`speed-roulette`,name:`Speed Roulette`,category:`roulette`,dealer:`Auto`,minBet:10,maxBet:1e3,viewers:301,route:`/casino/live-roulette`,accent:`platinum`,videoSrc:l.roulette},{id:`live-baccarat`,name:`Live Baccarat`,category:`baccarat`,dealer:`Demo`,minBet:25,maxBet:1500,viewers:0,demoMode:!0,route:`/casino/blackjack`,accent:`emerald`,videoSrc:l.baccarat},{id:`crazy-time`,name:`Crazy Time`,category:`shows`,dealer:`—`,minBet:10,maxBet:500,viewers:0,comingSoon:!0,accent:`aqua`,videoSrc:l.shows},{id:`monopoly-live`,name:`Monopoly Live`,category:`shows`,dealer:`—`,minBet:5,maxBet:1e3,viewers:0,comingSoon:!0,accent:`emerald`,videoSrc:l.shows},{id:`dragon-tiger`,name:`Dragon Tiger`,category:`baccarat`,dealer:`Demo`,minBet:10,maxBet:800,viewers:0,demoMode:!0,route:`/casino/blackjack`,videoSrc:l.baccarat,accent:`ruby`}],d=[{id:`all`,label:`All`,icon:`🎰`},{id:`roulette`,label:`Roulette`,icon:`🎡`},{id:`blackjack`,label:`Blackjack`,icon:`🂡`},{id:`baccarat`,label:`Baccarat`,icon:`🃏`},{id:`shows`,label:`Game Shows`,icon:`🎁`}],f=`
@keyframes c7live-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,42,61,0.7); }
  50%      { opacity: 0.85; box-shadow: 0 0 0 6px rgba(255,42,61,0); }
}
@keyframes c7live-spotlight {
  0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1); }
  50%      { opacity: 1.00; transform: translate(-50%, -50%) scale(1.06); }
}
@keyframes c7live-scan {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
@keyframes c7live-fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes c7live-ticker-tick {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-1px); }
}
@keyframes c7live-grain-shift {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-5%, -3%); }
  50%  { transform: translate(3%, -5%); }
  75%  { transform: translate(-3%, 4%); }
  100% { transform: translate(0, 0); }
}
@keyframes c7live-bokeh-drift {
  0%   { transform: translate(0, 0); }
  50%  { transform: translate(20px, -30px); }
  100% { transform: translate(0, 0); }
}
.c7live-card {
  position: relative;
  background: rgba(8,4,4,0.85);
  border: 1px solid rgba(255,42,61,0.18);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset;
  transition: transform 200ms cubic-bezier(.22,.61,.36,1), border-color 200ms, box-shadow 200ms;
  animation: c7live-fade-up 0.5s cubic-bezier(.22,.61,.36,1) both;
}
.c7live-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255,90,90,0.45);
  box-shadow: 0 12px 32px rgba(0,0,0,0.6), 0 0 24px rgba(255,42,61,0.18);
}
.c7live-card[data-soon="1"]:hover {
  transform: none;
  cursor: default;
}
.c7live-tap { transition: transform 140ms; }
.c7live-tap:active { transform: scale(0.97); }

/* Film grain — animated SVG noise gives a true cinema texture */
.c7live-grain {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.85'/></svg>");
  background-size: 160px 160px;
  animation: c7live-grain-shift 1.4s steps(8) infinite;
}

/* Bokeh particles for backdrop */
.c7live-bokeh {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
  pointer-events: none;
}
`,p=e=>{switch(e){case`platinum`:return`#c8c8d4`;case`aqua`:return`#5fb8d4`;case`emerald`:return`#1f8a5a`;case`violet`:return`#7a3dd8`;default:return`#dc1c2c`}},m=e=>e.toLocaleString();function h({table:e}){let t=i(),n=p(e.accent);return(0,c.jsxs)(`div`,{className:`c7live-card`,"data-soon":e.comingSoon?`1`:`0`,style:{display:`flex`,flexDirection:`column`},children:[(0,c.jsxs)(`div`,{style:{position:`relative`,width:`100%`,aspectRatio:`16 / 9`,background:`#020103`,overflow:`hidden`},children:[e.videoSrc&&(0,c.jsx)(`video`,{src:e.videoSrc,poster:e.posterSrc,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`metadata`,"aria-hidden":!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`,filter:`brightness(0.85) contrast(1.15) saturate(1.1)`,zIndex:0}}),(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,inset:0,background:`
              radial-gradient(60% 80% at 50% 30%, ${n}22 0%, transparent 70%),
              radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,0.85) 0%, transparent 60%),
              linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)
            `,pointerEvents:`none`,zIndex:1}}),(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,top:`30%`,left:`50%`,width:`60%`,height:`60%`,borderRadius:`50%`,background:`radial-gradient(circle, ${n}33 0%, transparent 65%)`,transform:`translate(-50%, -50%)`,animation:`c7live-spotlight 4.5s ease-in-out infinite`,filter:`blur(10px)`,pointerEvents:`none`,mixBlendMode:`screen`,zIndex:2}}),!e.videoSrc&&(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,bottom:`-12%`,left:`50%`,transform:`translateX(-50%)`,width:`85%`,height:`60%`,borderRadius:`50% / 35%`,background:e.category===`roulette`?`radial-gradient(ellipse, #2a0a0a 0%, #0a0202 80%)`:`radial-gradient(ellipse, #0a3522 0%, #02110a 80%)`,border:`1px solid ${n}44`,pointerEvents:`none`,zIndex:2}}),(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)`,height:`20%`,top:0,animation:`c7live-scan 6s linear infinite`,pointerEvents:`none`,mixBlendMode:`screen`,zIndex:3}}),(0,c.jsx)(`div`,{"aria-hidden":!0,className:`c7live-grain`,style:{position:`absolute`,inset:0,pointerEvents:`none`,mixBlendMode:`overlay`,opacity:.18,zIndex:4}}),(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,inset:0,boxShadow:`inset 0 0 40px rgba(0,0,0,0.85), inset 0 0 80px rgba(0,0,0,0.4)`,pointerEvents:`none`,zIndex:5}}),!e.comingSoon&&!e.demoMode&&(0,c.jsxs)(`div`,{style:{position:`absolute`,top:10,left:10,zIndex:10,display:`flex`,alignItems:`center`,gap:6,padding:`4px 10px`,background:`rgba(0,0,0,0.7)`,border:`1px solid rgba(0,212,255,0.45)`,borderRadius:999,fontSize:10,fontWeight:900,letterSpacing:1.2,color:`#fff`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,c.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,background:`#ff2238`}}),`AUTO`]}),e.demoMode&&(0,c.jsx)(`div`,{style:{position:`absolute`,top:10,left:10,zIndex:10,padding:`4px 10px`,background:`rgba(0,0,0,0.7)`,border:`1px solid rgba(255,201,64,0.45)`,borderRadius:999,fontSize:10,fontWeight:900,letterSpacing:1.2,color:`#ffd66b`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:`DEMO`}),e.comingSoon&&(0,c.jsx)(`div`,{style:{position:`absolute`,top:10,left:10,zIndex:10,padding:`4px 10px`,background:`rgba(0,0,0,0.7)`,border:`1px solid ${n}66`,borderRadius:999,fontSize:10,fontWeight:900,letterSpacing:1.2,color:n,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:`COMING SOON`}),!e.comingSoon&&!e.demoMode&&(0,c.jsxs)(`div`,{style:{position:`absolute`,top:10,right:10,zIndex:10,display:`flex`,alignItems:`center`,gap:5,padding:`4px 10px`,background:`rgba(0,0,0,0.6)`,borderRadius:999,fontSize:10,fontWeight:800,color:`#e5e5e8`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,c.jsx)(`span`,{style:{color:`#ff2238`},children:`●`}),`Open · Auto-play`]}),(0,c.jsx)(`div`,{style:{position:`absolute`,bottom:10,left:10,zIndex:10,fontSize:11,fontWeight:700,color:`#fff`,textShadow:`0 1px 4px rgba(0,0,0,0.95)`,letterSpacing:.3},children:e.comingSoon?`— offline —`:e.demoMode?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{style:{opacity:.65},children:`Mode · `}),(0,c.jsx)(`span`,{children:`Free play`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{style:{opacity:.65},children:`Dealer · `}),(0,c.jsx)(`span`,{children:e.dealer})]})})]}),(0,c.jsxs)(`div`,{style:{padding:`12px 14px 14px`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,gap:8,marginBottom:8},children:[(0,c.jsx)(`h3`,{style:{margin:0,fontSize:15,fontWeight:800,color:r.colors.text.primary,letterSpacing:.2},children:e.name}),(0,c.jsx)(`span`,{style:{fontSize:9,fontWeight:700,textTransform:`uppercase`,letterSpacing:1.2,color:n,opacity:.9},children:e.category})]}),(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:8,fontSize:11,color:r.colors.text.secondary,marginBottom:10},children:(0,c.jsxs)(`span`,{children:[`🪙 `,m(e.minBet),` – `,m(e.maxBet)]})}),(0,c.jsx)(`button`,{type:`button`,className:`c7live-tap`,onClick:()=>{e.comingSoon||!e.route||t(e.route)},disabled:!!e.comingSoon,"aria-label":e.comingSoon?`${e.name} (coming soon)`:`Join ${e.name}`,style:{width:`100%`,padding:`10px 14px`,border:`none`,borderRadius:10,fontSize:12,fontWeight:900,letterSpacing:1.4,textTransform:`uppercase`,cursor:e.comingSoon?`not-allowed`:`pointer`,color:e.comingSoon?r.colors.text.muted:`#1a0500`,background:e.comingSoon?`rgba(255,255,255,0.04)`:`linear-gradient(180deg, ${n} 0%, ${n}cc 100%)`,boxShadow:e.comingSoon?`none`:`0 6px 16px ${n}55`,opacity:e.comingSoon?.55:1},children:e.comingSoon?`🔒 Notify Me`:e.demoMode?`Play Demo`:`Join Table`})]})]})}function g(){let e=i(),[t,n]=(0,s.useState)(`all`);(0,s.useEffect)(()=>{o()},[]);let l=(0,s.useMemo)(()=>t===`all`?u:u.filter(e=>e.category===t),[t]),p=(0,s.useMemo)(()=>u.filter(e=>!e.comingSoon).length,[]);return(0,c.jsxs)(`div`,{style:{minHeight:`100vh`,background:`#020103`,color:r.colors.text.primary,paddingBottom:92,position:`relative`,overflow:`hidden`},children:[(0,c.jsx)(`style`,{children:f}),(0,c.jsx)(`div`,{"aria-hidden":!0,style:{position:`fixed`,inset:0,zIndex:0,pointerEvents:`none`,background:`
            radial-gradient(50% 30% at 50% 0%, rgba(255,42,61,0.14) 0%, transparent 60%),
            radial-gradient(40% 40% at 100% 100%, rgba(255,80,80,0.08) 0%, transparent 60%),
            radial-gradient(40% 40% at 0% 100%, rgba(124,80,200,0.06) 0%, transparent 60%),
            #020103
          `}}),(0,c.jsxs)(`div`,{style:{position:`relative`,zIndex:1},children:[(0,c.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:10,background:`rgba(2, 1, 3, 0.85)`,backdropFilter:`blur(18px)`,WebkitBackdropFilter:`blur(18px)`,borderBottom:`1px solid rgba(255,55,55,0.22)`,padding:`12px 16px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,c.jsx)(`button`,{type:`button`,onClick:()=>e(`/casino`),"aria-label":`Back to lobby`,style:{background:`transparent`,border:`none`,color:r.colors.text.secondary,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`,padding:4},children:`← Lobby`}),(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:16,fontWeight:900,letterSpacing:1.2,textTransform:`uppercase`},children:[(0,c.jsx)(`span`,{style:{width:9,height:9,borderRadius:`50%`,background:`#ff3737`,animation:`c7live-pulse 1.6s ease-in-out infinite`}}),(0,c.jsx)(`span`,{style:{background:`linear-gradient(90deg, #ffffff 0%, #ff2a3d 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:`LIVE CASINO`})]}),(0,c.jsx)(`div`,{style:{fontSize:11,color:r.colors.text.secondary,fontWeight:800,letterSpacing:.5},children:`🪙 Free-play`})]}),(0,c.jsxs)(`section`,{style:{padding:`24px 16px 14px`,textAlign:`center`},children:[(0,c.jsx)(`p`,{style:{margin:0,fontSize:10,fontWeight:700,letterSpacing:2.4,textTransform:`uppercase`,color:`#ff2238`,marginBottom:8},children:`● Auto-play live`}),(0,c.jsxs)(`h1`,{style:{margin:0,fontSize:28,fontWeight:900,letterSpacing:-.5,lineHeight:1.1,background:`linear-gradient(180deg, #ffffff 0%, #c8c8c8 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:[p,` tables open now`]}),(0,c.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:12,color:r.colors.text.secondary,fontWeight:500},children:`Instant-play RNG tables · Provably fair · Free-play 🪙`})]}),(0,c.jsx)(`section`,{style:{padding:`6px 16px 18px`,display:`flex`,gap:8,overflowX:`auto`,scrollbarWidth:`none`,WebkitOverflowScrolling:`touch`},children:d.map(e=>{let i=t===e.id;return(0,c.jsxs)(`button`,{type:`button`,className:`c7live-tap`,onClick:()=>n(e.id),style:{flexShrink:0,display:`flex`,alignItems:`center`,gap:6,padding:`8px 14px`,borderRadius:999,border:i?`1px solid #ff2a3d`:`1px solid rgba(255,255,255,0.10)`,background:i?`linear-gradient(180deg, rgba(255,42,61,0.18) 0%, rgba(255,42,61,0.04) 100%)`:`rgba(255,255,255,0.03)`,color:i?`#ff5566`:r.colors.text.secondary,fontSize:12,fontWeight:800,letterSpacing:.4,cursor:`pointer`,whiteSpace:`nowrap`},children:[(0,c.jsx)(`span`,{children:e.icon}),(0,c.jsx)(`span`,{children:e.label})]},e.id)})}),(0,c.jsx)(`section`,{style:{padding:`0 16px`,display:`grid`,gap:12,gridTemplateColumns:`repeat(auto-fill, minmax(160px, 1fr))`},children:l.map(e=>(0,c.jsx)(h,{table:e},e.id))}),l.length===0&&(0,c.jsx)(`div`,{style:{padding:`40px 16px`,textAlign:`center`,color:r.colors.text.muted,fontSize:13},children:`No tables in this category right now. Try another.`}),(0,c.jsx)(`section`,{style:{padding:`24px 16px 8px`,textAlign:`center`},children:(0,c.jsx)(`p`,{style:{margin:0,fontSize:10,fontWeight:700,letterSpacing:.4,color:r.colors.text.muted},children:`Free-play demo · No real money · Tables animated for presentation`})})]}),(0,c.jsx)(a,{})]})}export{g as default};