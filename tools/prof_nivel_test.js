const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1100,height:900}});const pg=await ctx.newPage();
 const errs=[],log=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_|net::|Failed to load resource/.test(m.text()))errs.push(m.text())});
 let calls=[],mode='ok';
 await pg.route('https://generativelanguage.googleapis.com/**',async route=>{
  const req=route.request();const body=JSON.parse(req.postData()||'{}');calls.push(body);
  if(mode==='429'){mode='ok';return route.fulfill({status:429,contentType:'application/json',body:JSON.stringify({error:{message:'quota'}})})}
  const out={answer:'«Tu» es de confianza y «vous» de respeto. <img src=x onerror=window.__xss=1>',examples:[{t:'Tu es ici.',es:'Estás aquí.'},{t:'Vous êtes ici.',es:'Usted está aquí.'}]};
  route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({candidates:[{content:{parts:[{text:JSON.stringify(out)}]}}]})});
 });
 const ok=(c,m)=>log.push((c?'OK  ':'FALLO ')+m);
 await pg.goto('http://localhost:8123/fr/index.html');
 await pg.evaluate(()=>{localStorage.setItem('cadence.fr.ai',JSON.stringify({prov:'gemini',model:'gemini-2.5-flash',key:'K'.repeat(30),models:['gemini-2.5-flash']}));
  const s=JSON.parse(localStorage.getItem('cadence.fr.v1')||'{}');s.unlocked={cafe:1,salut:1,hotel:1,rue:1,verbes:1};localStorage.setItem('cadence.fr.v1',JSON.stringify(s))});
 await pg.reload();
 await pg.evaluate(()=>{window.__said=[];speechSynthesis.speak=u=>{window.__said.push(u.text)}});
 await pg.click('[data-a="tab"][data-t="games"]');
 ok(await pg.$$eval('#v-games .gtile',l=>l.length)===9,'9 juegos en el hub');
 await pg.click('[data-a="t_prof"]');
 ok(/Pregúntale al profe/.test(await pg.textContent('#v-talk h2')),'abre el profe con su título');
 ok(await pg.$$eval('#v-talk .tchips .chip',l=>l.length)===4,'4 preguntas sugeridas');
 mode='429';
 await pg.click('#v-talk [data-a="p_chip"]');await pg.waitForSelector('#v-talk .terr');
 ok(/límite gratuito/.test(await pg.textContent('#plog')),'error 429 con mensaje claro');
 ok(await pg.$$eval('#plog .tb.me',l=>l.length)===0,'la pregunta fallida no queda en el historial');
 await pg.click('[data-a="p_retry"]');await pg.waitForSelector('#plog .tb.ai:not(.typing)');
 ok(/de confianza/.test(await pg.textContent('#plog')),'responde tras reintentar');
 ok(await pg.$$eval('#plog .pex',l=>l.length)===2,'2 ejemplos con audio');
 ok(await pg.evaluate(()=>!window.__xss&&!document.querySelector('#plog img')),'HTML del modelo escapado');
 const sys=calls[calls.length-1].systemInstruction.parts[0].text;
 ok(/SPANISH/.test(sys)&&/Bonjour/.test(sys),'el prompt pide español e incluye frases del alumno');
 await pg.fill('#pin','¿Y «je»?');await pg.press('#pin','Enter');await pg.waitForFunction(()=>document.querySelectorAll('#plog .tb.ai').length===2);
 ok(calls[calls.length-1].contents.length===3,'segunda pregunta envía el historial (3 mensajes)');
 await pg.click('[data-a="p_back"]');
 ok(await pg.$$eval('#v-games .gtile',l=>l.length)===9,'vuelve a Juegos');
 /* Mi nivel */
 await pg.click('[data-a="gstart"][data-g="nv"]');
 ok(await pg.$$eval('#v-games .nvu',l=>l.length)===4,'Mi nivel: 4 unidades');
 ok((await pg.$$eval('#v-games .nvg li',l=>l.length))===16,'Mi nivel: 16 objetivos listados');
 await pg.click('[data-a="n_start"][data-u="2"]');
 ok(/no has estudiado situaciones suficientes/.test(await pg.textContent('#v-games')),'unidad 2 sin estudiar: avisa');
 await pg.click('[data-a="n_hub"]');
 await pg.click('[data-a="n_start"][data-u="1"]');
 const ph=await pg.evaluate(()=>{const m={};window.COURSE.SCENES.forEach(s=>s.phrases.forEach(p=>m[p.cue]=p.fr));return m});
 for(let i=0;i<6;i++){
  const said=await pg.evaluate(()=>window.__said[window.__said.length-1]);
  const cue=Object.keys(ph).find(k=>ph[k]===said);
  ok(!!cue,'pregunta '+(i+1)+': se oyó una frase conocida');
  const opts=await pg.$$eval('#v-games .qopt',l=>l.map(x=>x.textContent));
  await pg.click('#v-games .qopt:nth-child('+(opts.indexOf(cue)+1)+')');
  await pg.click('[data-a="n_next"]');
 }
 ok(/6\s*\/ 6/.test(await pg.textContent('#v-games .endbox'))&&/Dominas/.test(await pg.textContent('#v-games .endbox')),'6/6 = «Dominas esta unidad»');
 let st=await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.v1')));
 ok(st.nv&&st.nv[1]&&st.nv[1].score===6,'resultado guardado');
 await pg.click('[data-a="n_start"][data-u="1"]');
 for(let i=0;i<6;i++){
  const said=await pg.evaluate(()=>window.__said[window.__said.length-1]);
  const cue=Object.keys(ph).find(k=>ph[k]===said);
  const opts=await pg.$$eval('#v-games .qopt',l=>l.map(x=>x.textContent));
  const wrong=opts.findIndex(o=>o!==cue);
  await pg.click('#v-games .qopt:nth-child('+(wrong+1)+')');await pg.click('[data-a="n_next"]');
 }
 ok(/0\s*\/ 6/.test(await pg.textContent('#v-games .endbox'))&&/Todavía te cuesta/.test(await pg.textContent('#v-games .endbox')),'0/6 = «Todavía te cuesta»');
 st=await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.v1')));
 ok(Object.keys(st.cards).length>=6&&Object.values(st.cards).every(c=>c.s>0),'las falladas pasan al repaso con FSRS');
 await pg.screenshot({path:'/tmp/t/nivel.png'});
 console.log(log.join('\n'));console.log('errores:',errs);await b.close()})();
