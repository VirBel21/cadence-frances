// Validación estructural de un curso: node tools/validate_course.js fr en
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const engine=fs.readFileSync(path.join(root,'shared/engine.js'),'utf8');
const uicKeys=new Set((engine.match(/var UIC=\{([\s\S]*?)\};\nUIC\./)||['',''])[1].match(/"[0-9A-F-]+":/g)||[]).size?new Set([...(engine.match(/var UIC=\{([\s\S]*?)\};\nUIC\./)[1].matchAll(/"([0-9A-F-]+)":/g))].map(m=>m[1])):new Set();
const imgs=new Set(fs.readdirSync(path.join(root,'shared/img')).filter(f=>f.endsWith('.svg')).map(f=>f.replace('.svg','')));
let bad=0;const fail=m=>{bad++;console.log('  FALLO',m)};
for(const id of process.argv.slice(2)){
  global.window={};eval(fs.readFileSync(path.join(root,id,'course.js'),'utf8'));
  const C=window.COURSE;console.log('Curso',id);
  const ids={};let nph=0;
  C.SCENES.forEach(s=>{
    if(!s.phrases||s.phrases.length!==5)fail(s.id+': no tiene 5 frases');
    (s.phrases||[]).forEach(p=>{nph++;if(ids[p.id])fail('id repetido '+p.id);ids[p.id]=1;
      if(!p.fr||!p.cue||!Array.isArray(p.syl)||!p.syl.length)fail('frase incompleta '+p.id);
      if(p.rs){const n=p.rs.split(', ').map(g=>g.split('-').length);const m=p.syl.map(g=>g.length);if(JSON.stringify(n)!==JSON.stringify(m))fail('rs y syl no coinciden en '+p.id)}
    });
    if(s.turns){if(s.turns.length<3)fail(s.id+': menos de 3 turnos');s.turns.forEach((t,i)=>{if(!t.opts||t.opts.length!==3||t.opts.map(o=>o.q).sort().join()!=='0,1,2')fail(s.id+' turno '+i+': opciones no son q=0,1,2')})}
    else fail(s.id+': sin turnos');
    const ic=C.SCENE_IMG[s.id];if(!ic)fail(s.id+': sin icono');else if(!(uicKeys.has(ic)||(C.icons&&C.icons[ic])||imgs.has(ic)))fail(s.id+': icono no encontrado '+ic);
  });
  const sc=new Set(C.SCENES.map(s=>s.id));
  C.DAYS.forEach(d=>{if(d.sc&&!sc.has(d.sc))fail('día '+d.n+' apunta a escena inexistente');if((d.sc||d.sc===null)&&!d.kind&&!C.STORY[d.n])fail('día '+d.n+' sin historia')});
  Object.entries(C.STORY).forEach(([k,L])=>{if(!L.length)fail('historia '+k+' vacía');L.forEach(l=>{if(!l.w||!l.fr||!l.es)fail('línea incompleta en historia '+k)})});
  const wset={};C.WORDS.forEach((w,i)=>{if(wset[w.w])fail('palabra repetida '+w.w);wset[w.w]=1;if(i&&w.r<C.WORDS[i-1].r)fail('palabras no ordenadas por rango en '+w.w);if(!new RegExp('(^|[^\\p{L}])'+w.w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![\\p{L}])','iu').test(w.ex))fail('ejemplo sin la palabra '+w.w)});
  C.PIC.forEach(p=>{if(!imgs.has(p[3]))fail('falta imagen '+p[3]+' ('+p[1]+')')});
  const cats={};C.PIC.forEach(p=>cats[p[0]]=(cats[p[0]]||0)+1);Object.entries(cats).forEach(([c,n])=>{if(n<3)fail('categoría '+c+' con menos de 3 imágenes (el juego necesita distractores)');if(C.PCATS.indexOf(c)<0)fail('categoría '+c+' no está en PCATS')});
  const seenPic={};C.PIC.forEach(p=>{const k=p[1].toLowerCase();if(seenPic[k])fail('PIC repetido '+p[1]);seenPic[k]=1});
  C.RHY.forEach(r=>{if(!ids[r])fail('RHY apunta a '+r)});
  if((C.cfg.maps||[]).some(m=>m[0]==='ask')&&C.ASK.length!==6)fail('ASK debe tener 6');
  if((C.cfg.maps||[]).some(m=>m[0]==='num')&&C.NUMF.length!==21)fail('NUMF debe tener 21');
  ['soundsIntro','rhythm','pronKey','imgLead','numLead','numNote','unitEnd','limits'].forEach(k=>{if(!C.copy||!C.copy[k])fail('copy.'+k+' falta')});
  if(typeof C.copy.wordsInfo!=='function')fail('copy.wordsInfo falta');
  C.cfg.unitsMeta.forEach(u=>{if(!C.DAYS.some(d=>d.u===u[0]))fail('unidad '+u[0]+' sin días');if(!(uicKeys.has(u[2])||(C.icons&&C.icons[u[2]])))fail('icono de unidad '+u[2])});
  C.DAYS.forEach((d,i)=>{if(d.n!==i+1)fail('día fuera de orden '+d.n)});
  console.log('  escenas',C.SCENES.length,'frases',nph,'días',C.DAYS.length,'palabras',C.WORDS.length,'imágenes',C.PIC.length);
}
console.log(bad?('\n'+bad+' problemas'):'\nSin problemas');process.exit(bad?1:0);
