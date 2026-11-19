const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1200,height:900}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_|net::/.test(m.text()))errs.push(m.text())});
 await pg.goto('http://localhost:8123/tests.html');
 await pg.waitForFunction(()=>/PASS|FAIL/.test(document.title),null,{timeout:240000});
 console.log(await pg.title());
 console.log(await pg.$$eval('#out li',l=>l.filter(x=>x.className==='ko').map(x=>x.textContent).join('\n')||'sin fallos'));
 console.log('errores:',errs);
 await pg.goto('http://localhost:8123/fr/index.html');
 for(const [t,w] of [['home',1200],['route',1200],['today',1200],['home',390],['today',390]]){
  await pg.setViewportSize({width:w,height:1000});
  await pg.click(`[data-a="tab"][data-t="${t}"]`);await pg.waitForTimeout(300);
  await pg.screenshot({path:`/tmp/s_${t}_${w}.png`,fullPage:false});
 }
 await b.close();
})();
