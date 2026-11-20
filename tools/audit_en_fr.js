// Busca restos de francés en TODA la interfaz del curso de inglés (texto, aria-label, title, alt, placeholder, data-say).
// Uso: NODE_PATH=$(npm root -g) node tools/audit_en_fr.js   (servidor en :8123)
const {chromium}=require('playwright');
const FR=/\b(continuer|terminer|rejouer|suivant|recommencer|valider|bonjour|bonsoir|salut|merci|s'il (vous|te) pla[iî]t|je (suis|ne|m'appelle|voudrais|parle)|vous (êtes|avez|parlez)|tu (es|as)|nous (sommes|avons)|enchanté|au revoir|désolé|français|française|oui|des|les|jouer|nouveau|la scène|pour|avec|dans|comment (allez|ça|vous)|très|où est|c'est|ça va|aujourd'hui|demain|le café|la gare|l'eau|un peu|beaucoup|excusez)\b/i;
const FRC=/[çœàèùâêîôûëïÿÀÈÙÂÊÎÔÛ]/;
const FRX=/(?:^|[^A-Za-z])(Bonjour|Merci|Salut|Au revoir|Excusez-moi|S'il vous plaît|Je suis|Enchanté)/;
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1100,height:900}});
const found=new Map();let views=0;
global.window={};require('../fr/course.js');const FC=window.COURSE;const FRSTR=new Set();
const addS=x=>{if(typeof x==='string'&&x.length>=5&&x!=='Uruguay.')FRSTR.add(x.replace(/\{|\}/g,''))};
FC.SCENES.forEach(sc=>{sc.phrases.forEach(p=>addS(p.fr));sc.turns.forEach(t=>{addS(t.fr||t.say);t.opts.forEach(o=>addS(o.fr))})});
Object.values(FC.STORY).forEach(l=>l.forEach(x=>addS(x.fr||x[1])));FC.WORDS.forEach(w=>{addS(w.w);addS(w.ex)});FC.PIC.forEach(p=>addS(p[1]));(FC.ASK||[]).forEach(a=>{addS(a.w);addS(a.ex)});
delete global.window;
const snap=async tag=>{views++;const t=await pg.evaluate(()=>{const o=[];const w=document.body;o.push(w.innerText);document.querySelectorAll('[aria-label],[title],[alt],[placeholder],[data-say]').forEach(e=>['aria-label','title','alt','placeholder','data-say'].forEach(a=>{const v=e.getAttribute(a);if(v)o.push(v)}));return o.join('\n')});
 for(const f of FRSTR){if(t.includes(f))found.set(f,(found.get(f)||tag+' (frase del curso de francés)'))}
 for(const line of t.split('\n')){const l=line.trim();if(l&&(FR.test(l)||FRX.test(l)||FRC.test(l)))found.set(l,(found.get(l)||tag))}};
const act=async(a,attrs={})=>{await pg.evaluate(([a,attrs])=>{const x=document.createElement('button');x.dataset.a=a;for(const k in attrs)x.dataset[k]=attrs[k];document.body.appendChild(x);x.click();x.remove()},[a,attrs]);await pg.waitForTimeout(120)};
const click=async s=>{const e=await pg.$(s);if(!e)return false;try{await e.click({timeout:1500})}catch(_){return false}await pg.waitForTimeout(100);return true};
await pg.goto('http://localhost:8123/en/index.html');await pg.waitForTimeout(400);
await pg.evaluate(()=>{speechSynthesis.speak=()=>{}});
for(const t of ['home','route','today','review','words','games','talk','sounds','verbs','method']){await act('tab',{t});await snap('tab:'+t)}
// todos los días
for(let n=1;n<=48;n++){await act('tab',{t:'route'});await click('[data-a="day"][data-n="'+n+'"]');await snap('día '+n);
 for(const i of [0,1,2,3]){await click('[data-a="stepdone"][data-i="'+i+'"]');await click('[data-a="step"][data-i="'+i+'"]');await snap('día '+n+' paso '+i)}
 if(await click('[data-a="lstart"]')){await snap('día '+n+' escucha');await click('#listen [data-a="lpick"]');await click('[data-a="lcheck"]');await snap('día '+n+' escucha resultado')}
 if(await click('[data-a="start"]')){for(let k=0;k<3;k++){await click('[data-a="pick"]');await snap('día '+n+' escena turno '+k);await click('[data-a="next"]')}await snap('día '+n+' escena fin')}
 if(await click('[data-a="qstart"]')){for(let i=0;i<8;i++){await snap('día '+n+' prueba '+i);await click('.qopt');await snap('día '+n+' prueba resp '+i);await click('[data-a="qnext"]')}await snap('día '+n+' prueba fin')}
 if(await click('[data-a="dayrv"]')){for(let m=0;m<6;m++){await snap('día '+n+' repaso ficha '+m);await click('[data-a="show"]');await snap('día '+n+' repaso ficha reverso '+m);await click('[data-a="rate"][data-r="1"]')}}
}
// repaso global
await act('tab',{t:'review'});for(let m=0;m<40;m++){await snap('repaso '+m);if(!(await click('[data-a="show"]')))break;await snap('repaso rev '+m);await click('[data-a="rate"][data-r="0"]')}
// palabras
await act('tab',{t:'words'});await snap('palabras');
if(await click('[data-a="wstart"]')||await click('[data-a="wprac"]')){for(let i=0;i<10;i++){await snap('palabras práctica '+i);await click('[data-a="show"]');await click('[data-a="wrate"][data-r="1"]')||await click('[data-a="rate"][data-r="1"]')}}
// mapas
await act('tab',{t:'verbs'});for(const m of ['num','img','verb']){await click('[data-a="mapmode"][data-id="'+m+'"]');await snap('mapa '+m)}
await click('[data-a="mapmode"][data-id="img"]');await click('[data-a="pqstart"]');for(let i=0;i<8;i++){await snap('imágenes quiz '+i);await click('.qopt');await click('[data-a="pqnext"]')}
// juegos
await act('tab',{t:'games'});await snap('juegos');
for(const g of await pg.$$eval('[data-a="gstart"]',l=>l.map(e=>e.dataset.g))){await act('tab',{t:'games'});await act('gstart',{g});await snap('juego '+g+' inicio');
 for(let i=0;i<6;i++){await click('.opt, .qopt, .mpcol .mpb, .tfbank button, [data-a="f_pick"], [data-a="show"]');await snap('juego '+g+' paso '+i);await click('[data-a="next"], [data-a="m_next"], [data-a="f_next"], [data-a="check"], [data-a="f_check"]')}
 await click('[data-a="gend"]')}
// conversación / profe: pantallas iniciales
await act('tab',{t:'talk'});await snap('talk');
console.log('vistas revisadas:',views);
if(!found.size)console.log('SIN restos de francés');else{console.log('POSIBLES RESTOS:');for(const [l,t] of found)console.log(' - ['+t+'] '+l.slice(0,160))}
await b.close()})();
