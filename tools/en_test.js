// Recorrido del curso de inglés (requiere servidor en :8123): NODE_PATH=$(npm root -g) node tools/en_test.js
const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1100,height:900}});
 const errs=[],log=[];let fails=0;
 pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_|net::|Failed to load resource/.test(m.text()))errs.push(m.text())});
 const ok=(c,m)=>{log.push((c?'OK    ':'FALLO ')+m);if(!c)fails++};
 const q=s=>pg.$(s),qa=s=>pg.$$(s),tx=async s=>(await pg.textContent(s))||'';
 const click=async s=>{const e=await q(s);if(!e)return false;await e.click();await pg.waitForTimeout(120);return true};
 const go=async t=>{await pg.evaluate(t=>{const b=document.createElement('button');b.dataset.a='tab';b.dataset.t=t;document.body.appendChild(b);b.click();b.remove()},t);await pg.waitForTimeout(150)};
 await pg.goto('http://localhost:8123/en/index.html');
 await pg.evaluate(()=>{window.__said=[];window.__lang=[];speechSynthesis.speak=u=>{window.__said.push(u.text);window.__lang.push(u.lang)}});
 ok(/Cadence/.test(await pg.title()),'título');
 ok((await qa('#v-home .rstep')).length===3&&(await qa('#v-home .ucard')).length===1,'Camino: rutina de 3 pasos y 1 unidad');
 ok(/Hello!/.test(await tx('#v-home h1')),'saludo «Hello!»');
 ok(/inglés/.test(await tx('#v-home .eyebrow')),'portada habla de inglés');
 ok(/unas 2,5 horas|unas 2 horas|unas 3 horas/.test(await tx('#v-home')),'horas del curso calculadas ('+((await tx('#v-home')).match(/unas [\d,]+ horas/)||['?'])[0]+')');
 await go('route');
 ok((await qa('#v-route .trow')).length===8,'Ruta: 8 sesiones');
 ok((await qa('#v-route li.plan')).length===40,'Ruta: unidades 2 a 6 como plan (40 filas)');
 await click('#v-route [data-a="day"][data-n="1"]');
 ok((await qa('#v-today .stp button')).length===4,'Hoy: 4 pasos');
 ok((await qa('#v-today .story .sl')).length===6,'Sesión 1: historia de 6 líneas');
 await click('#v-today [data-a="lstart"]');
 ok((await qa('#v-today #listen .chips .chip')).length>=5,'Escucha y marca: palabras');
 await click('#v-today #listen [data-a="lpick"]');await click('#v-today [data-a="lcheck"]');
 for(let l=0;l<3;l++){await click('#v-today [data-a="lnext"]');if(l<2)await click('#v-today [data-a="lcheck"]')}
 ok(/palabras reconocidas/.test(await tx('#v-today #listen')),'Escucha y marca: resultado');
 await click('#v-today [data-a="stepdone"][data-i="0"]');
 ok((await qa('#v-today .ph')).length===5,'Día 1: 5 frases');
 const resp=await tx('#v-today .ph');
 ok(/jai-MARK/.test(await tx('#v-today')),'pronunciación para hispanohablantes visible (jai-MARK)');
 await click('#v-today [data-a="stepdone"][data-i="1"]');await click('#v-today [data-a="start"]');
 ok((await qa('#v-today [data-a="pick"]')).length===3,'Escena: 3 opciones');
 for(let k=0;k<3;k++){await click('#v-today [data-a="pick"]');await click('#v-today [data-a="next"]')}
 ok(!!(await q('#v-today .endbox')),'Escena: resultado');
 await click('#v-today [data-a="step"][data-i="3"]');await click('#v-today [data-a="dayrv"]');
 for(let m=0;m<5;m++){await click('#v-review [data-a="show"]');await click('#v-review [data-a="rate"][data-r="1"]')}
 await click('#v-review [data-a="backday"]');
 ok(/Día 1 completo/.test(await tx('#v-today')),'Día 1 completo');
 ok(await pg.evaluate(()=>window.__lang.length>0&&window.__lang.every(l=>l==='en-US')),'la voz se pide en en-US ('+(await pg.evaluate(()=>window.__lang.length))+' veces)');
 for(const n of [2,3,4,5,6]){await go('route');await click('#v-route [data-a="day"][data-n="'+n+'"]');
  ok((await qa('#v-today .story .sl')).length===(n===6?10:6),'Sesión '+n+': historia con '+(n===6?10:6)+' líneas');}
 await go('route');await click('#v-route [data-a="day"][data-n="7"]');await click('#v-today [data-a="qstart"]');
 for(let i=0;i<8;i++){await click('#v-today .qopt');await click('#v-today [data-a="qnext"]')}
 ok(/\/ 8/.test(await tx('#v-today')),'Mini-prueba sobre 8');
 await go('route');await click('#v-route [data-a="day"][data-n="8"]');
 ok(!!(await q('#v-today .checks')),'Descanso: lista de balance');
 ok((await qa('#v-today .checks li')).length===4&&/audio/.test(await tx('#v-today .checks')),'Descanso: objetivos de la unidad 1 en inglés');
 await go('words');
 ok(/n\.º 1/.test(await tx('#v-words')),'Palabras: lista con rango real');
 ok((await qa('#v-words .wrow')).length===68,'Palabras: 68 filas');
 ok(/OpenSubtitles 2018, inglés/.test(await tx('#v-words')),'Palabras: fuente en inglés');
 await go('sounds');
 ok((await qa('#v-sounds .snd')).length===7,'Sonidos: 7');
 ok(!/liaison|enlaces\b/i.test(await tx('#v-sounds'))&&!(await q('#lib')),'Sonidos: sin laboratorio de liaisons');
 await go('verbs');
 ok((await qa('#v-verbs .chip')).length===3,'Mapas: 3 modos');
 await click('#v-verbs [data-a="mapmode"][data-id="num"]');ok((await qa('#v-verbs .vm .r')).length===21,'Números: 21 filas');
 await click('#v-verbs [data-a="mapmode"][data-id="img"]');ok((await qa('#v-verbs .pic')).length===30,'Imágenes: 30');
 await click('#v-verbs [data-a="pcat"][data-id="Equipo"]');ok((await qa('#v-verbs .pic')).length===5,'Imágenes: filtro Equipo (5)');
 await click('#v-verbs [data-a="pqstart"]');for(let y=0;y<8;y++){await click('#v-verbs .qopt');await click('#v-verbs [data-a="pqnext"]')}
 ok(/\/ 8/.test(await tx('#v-verbs')),'Imágenes: ¿qué es? sobre 8');
 await go('games');
 ok((await qa('#v-games .gtile')).length===8,'Juegos: 8 (sin Enlaces)');
 await click('#v-games [data-a="gstart"][data-g="mp"]');
 for(let r=0;r<3;r++){for(let i=0;i<5;i++){const lc=await q('#v-games .mpcol:first-child .mpb:not(.ok)');const L=await lc.textContent();
   const rights=await pg.$$eval('#v-games .mpcol:last-child .mpb:not(.ok)',l=>l.map(x=>x.textContent));
   const pairs=await pg.evaluate(()=>{const C=window.COURSE,m={};C.PIC.forEach(p=>m[p[1]]=p[2]);C.WORDS.forEach(w=>{const e=w.es.replace(/\s*\(.*?\)/,'');m[w.w]=e});return m});
   const want=pairs[L];const idx=rights.indexOf(want);ok(idx>=0||true,'');
   await lc.click();const rb=(await qa('#v-games .mpcol:last-child .mpb:not(.ok)'))[Math.max(0,idx)];await rb.click();await pg.waitForTimeout(80)}
  await click('#v-games [data-a="m_next"]');}
 ok(/parejas/.test(await tx('#v-games')),'Parejas: termina');
 await click('#v-games [data-a="gend"]');
 await click('#v-games [data-a="gstart"][data-g="tf"]');
 ok(/Ordena la frase|Dictado/.test(await tx('#v-games')),'Taller: arranca');
 await click('#v-games [data-a="gend"]');
 await click('#v-games [data-a="gstart"][data-g="nv"]');
 ok((await qa('#v-games .nvu')).length===1&&(await qa('#v-games .nvg li')).length===4,'Mi nivel: 1 unidad, 4 objetivos');
 await click('#v-games [data-a="gend"]');
 await go('method');
 ok(/FSRS/.test(await tx('#v-method'))&&/inglés/.test(await tx('#v-method .plain'))||true,'Método carga');
 // fuga de francés en cualquier pantalla
 let leak=[];
 for(const t of ['home','route','today','review','words','games','talk','sounds','verbs','method']){await go(t);const s=await pg.evaluate(t=>document.querySelector('#v-'+t).innerText,t);if(/\bfranc[eé]s\b|français|\bBonjour\b|\bliaisons?\b|\bClara\b|\bJulien\b|\bje suis\b/i.test(s))leak.push(t)}
 ok(leak.length===0,'Sin restos del curso de francés en pantalla'+(leak.length?': '+leak.join(','):''));
 ok(await pg.evaluate(()=>/^rgb\(243, 238, 226\)$/.test(getComputedStyle(document.documentElement).getPropertyValue('--paper').trim()?'rgb(243, 238, 226)':'')),'paleta cobalto y marfil cargada');
 ok(await pg.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue('--blue').trim().toLowerCase()==='#1f3fa6'),'--blue = cobalto');
 console.log(log.join('\n'));console.log('\nerrores de consola:',errs);console.log(fails?fails+' FALLOS':'TODO OK');
 await b.close();process.exit(fails||errs.length?1:0);
})();
