'use strict';
const config=window.SITE_CONFIG||{},byId=id=>document.getElementById(id);
document.title=config.browserTitle||'Hehehehe';
byId('qr-one').src=config.qrOne||'assets/qr-1.png';
byId('qr-two').src=config.qrTwo||'assets/qr-2.png';
function showPage(number){
 const first=number===1;byId('page-one').hidden=!first;byId('page-two').hidden=first;
 (first?byId('page-one'):byId('page-two')).focus();window.scrollTo(0,0);
}
function openPages(){byId('cover').hidden=true;byId('letter').hidden=false;showPage(1)}
function closePages(){byId('letter').hidden=true;byId('cover').hidden=false;byId('open').focus();window.scrollTo(0,0)}
byId('open').addEventListener('click',openPages);byId('home').addEventListener('click',closePages);
byId('next').addEventListener('click',()=>showPage(2));byId('prev').addEventListener('click',()=>showPage(1));
document.addEventListener('keydown',event=>{if(byId('letter').hidden)return;if(event.key==='Escape')closePages();if(event.key==='ArrowRight')showPage(2);if(event.key==='ArrowLeft')showPage(1)});
