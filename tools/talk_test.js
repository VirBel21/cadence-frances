const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1100,height:900}});const pg=await ctx.newPage();
 const errs=[],log=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_|net::|Failed to load resource/.test(m.text()))errs.push(m.text())});
 let calls=[],mode='ok',n=0;
 await pg.route('https://generativelanguage.googleapis.com/**',async route=>{
  const req=route.request(),u=req.url(),h=req.headers();
  if(u.includes('/models?')){
   if(h['x-goog-api-key']==='BADKEYBADKEYBADKEYBADKEY')return route.fulfill({status:400,contentType:'application/json',body:JSON.stringify({error:{message:'API key not valid. Please pass a valid API key.'}})});
   return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({models:[
    {name:'models/gemini-2.0-flash',supportedGenerationMethods:['generateContent']},
    {name:'models/gemini-2.5-flash',supportedGenerationMethods:['generateContent']},
    {name:'models/gemini-2.5-flash-lite',supportedGenerationMethods:['generateContent']},
    {name:'models/gemini-2.5-flash-preview-tts',supportedGenerationMethods:['generateContent']},
    {name:'models/gemini-embedding-001',supportedGenerationMethods:['embedContent']},
    {name:'models/gemini-2.5-pro',supportedGenerationMethods:['generateContent']}]})});
  }
  const body=JSON.parse(req.postData());calls.push({u,key:h['x-goog-api-key'],body});
  if(mode==='429')return route.fulfill({status:429,contentType:'application/json',body:JSON.stringify({error:{message:'quota'}})});
  const sys=body.systemInstruction.parts[0].text;let out;
  if(/teacher of/.test(sys))out={summary:'Has pedido bien el café. Corrige: «Je voudrais». Practica la cuenta.'};
  else{n++;out=[
   {reply:'Bonjour ! Vous désirez ?',es:'¡Buenos días! ¿Qué desea?',recast:'',why:'',suggest:'Un café, s’il vous plaît.'},
   {reply:'<img src=x onerror=window.__xss=1> Un café. Autre chose ?',es:'Un café. ¿Algo más?',recast:'Je voudrais un café.',why:'Con «je veux» suena brusco; usa «je voudrais».',suggest:'Je voudrais un croissant.'},
   {reply:'Voilà. Ça fait trois euros.',es:'Aquí tiene. Son tres euros.',recast:'',why:'',suggest:'Merci beaucoup.'},
   {reply:'De rien. Bonne journée !',es:'De nada. ¡Buen día!',recast:'',why:'',suggest:'Au revoir.'}][Math.min(n-1,3)]}
  route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({candidates:[{content:{parts:[{text:JSON.stringify(out)}]}}]})});
 });
 const ok=(c,m)=>log.push((c?'OK  ':'FALLO ')+m);
 await pg.goto('http://localhost:8123/fr/index.html');
 await pg.click('[data-a="tab"][data-t="games"]');
 ok(await pg.locator('.gtile.g4').count()===1,'ficha en Juegos');
 await pg.click('.gtile.g4 [data-a="go"]');
 ok(await pg.locator('.tsetup').count()===1,'pantalla de configuración sin clave');
 // clave inválida
 await pg.fill('#tkey','BADKEYBADKEYBADKEYBADKEY');await pg.click('[data-a="t_savekey"]');await pg.waitForSelector('.terr');
 ok(/no es válida|rechaz/i.test(await pg.textContent('.terr')),'clave inválida -> mensaje: '+(await pg.textContent('.terr')));
 ok(await pg.evaluate(()=>!localStorage.getItem('cadence.fr.ai')||JSON.parse(localStorage.getItem('cadence.fr.ai')).key===''),'clave inválida no se guarda');
 // clave buena
 await pg.fill('#tkey','GOODKEYGOODKEYGOODKEY1234');await pg.click('[data-a="t_savekey"]');await pg.waitForSelector('.tscenes');
 const st=await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.ai')));
 ok(st.model==='gemini-2.5-flash','modelo elegido = '+st.model);
 ok(!st.models.some(m=>/tts|embedding/.test(m)),'modelos filtrados: '+st.models.join(', '));
 ok(!(await pg.evaluate(()=>localStorage.getItem('cadence.fr.v1')||'')).includes('GOODKEY'),'la clave NO está en el estado del curso');
 ok(await pg.locator('.tscene').count()===20,'20 situaciones');
 // conversación
 await pg.click('[data-a="t_start"][data-id="cafe"]');await pg.waitForSelector('.tb.ai:not(.typing)');
 ok(/Bonjour/.test(await pg.textContent('#tlog')),'primer turno del personaje');
 const c0=calls[0];
 ok(c0.key==='GOODKEYGOODKEYGOODKEY1234'&&/gemini-2\.5-flash:generateContent/.test(c0.u),'cabecera de clave y modelo correctos');
 ok(/Un café, s’il vous plaît/.test(c0.body.systemInstruction.parts[0].text)&&/ABSOLUTE BEGINNER/.test(c0.body.systemInstruction.parts[0].text),'el guion incluye frases de la escena');
 ok(c0.body.generationConfig.responseMimeType==='application/json'&&c0.body.generationConfig.responseSchema.type==='OBJECT','respuesta estructurada JSON');
 await pg.click('[data-a="t_es"]');ok(/Qué desea/.test(await pg.textContent('#tlog')),'ver en español');
 await pg.fill('#tin','Je veux un café');await pg.click('#tform button[type=submit]');await pg.waitForFunction(()=>document.querySelectorAll('.tb.ai:not(.typing)').length>=2);
 ok(/Je voudrais un café/.test(await pg.textContent('.tb.me .tre')),'recast mostrado bajo mi frase');
 ok(await pg.evaluate(()=>window.__xss===undefined)&&await pg.locator('#tlog img').count()===0,'HTML de la IA escapado (sin XSS)');
 const c1=calls[1].body.contents;ok(c1.length===3&&c1[1].role==='model'&&c1[2].parts[0].text==='Je veux un café','el historial se envía completo (roles user/model)');
 ok(await pg.locator('[data-a="t_end"]').count()===0,'sin botón Terminar antes de 3 turnos');
 await pg.fill('#tin','Merci');await pg.click('#tform button[type=submit]');await pg.waitForFunction(()=>document.querySelectorAll('.tb.ai:not(.typing)').length>=3);
 await pg.fill('#tin','Au revoir');await pg.click('#tform button[type=submit]');await pg.waitForFunction(()=>document.querySelectorAll('.tb.ai:not(.typing)').length>=4);
 await pg.screenshot({path:'/tmp/t/talk_chat.png'});
 ok(await pg.locator('[data-a="t_end"]').count()===1,'botón Terminar tras 3 turnos');
 const g0=await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.v1')).xp||0);
 await pg.click('[data-a="t_end"]');await pg.waitForSelector('.tsum');
 const g1=await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.v1')).xp||0);
 ok(/Has pedido bien/.test(await pg.textContent('.tsum')),'resumen mostrado');ok(g1-g0===10,'+10 puntos y juego del día ('+g0+'→'+g1+')');
 // error 429
 mode='429';await pg.click('[data-a="t_back"]');await pg.click('[data-a="t_start"][data-id="resto"]');await pg.waitForSelector('.terr');
 ok(/límite gratuito/.test(await pg.textContent('.terr')),'429 -> mensaje claro');ok(await pg.locator('[data-a="t_retry"]').count()===1,'botón Reintentar');
 mode='ok';n=0;await pg.click('[data-a="t_retry"]');await pg.waitForFunction(()=>document.querySelectorAll('.tb.ai:not(.typing)').length>=1);ok(true,'reintento funciona');
 await pg.screenshot({path:'/tmp/t/talk_retry.png'});
 // ajustes y borrar clave
 await pg.click('[data-a="t_set"]');ok(await pg.locator('#tmodel option').count()===4,'selector de modelo (4 opciones)');
 await pg.click('[data-a="t_delkey"]');ok(await pg.locator('.tsetup').count()===1&&(await pg.evaluate(()=>JSON.parse(localStorage.getItem('cadence.fr.ai')).key))==='','borrar clave vuelve a configuración');
 // móvil
 await pg.setViewportSize({width:390,height:844});await pg.screenshot({path:'/tmp/t/talk_setup_m.png'});
 console.log(log.join('\n'));console.log('errores JS:',errs);
 await b.close();
})();
