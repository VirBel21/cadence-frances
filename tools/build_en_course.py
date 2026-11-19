# Genera en/course.js. Todo el contenido en inglés y las explicaciones en español están redactados por Claude; no ha pasado por revisión de un profesor nativo.
import json,re,os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
def lower_syl(rs):return [[s.lower() for s in g.split('-')] for g in rs.split(', ')]
def P(i,fr,rs,cue):return {"id":i,"fr":fr,"syl":lower_syl(rs),"rs":rs,"cue":cue}
def T(fr,sense,opts):return {"fr":fr,"sense":sense,"opts":[{"fr":o[0],"q":o[1],"reply":o[2]} for o in opts]}
SCENES=[
 {"id":"call","title":"Joining the call","art":"wave","setting":"Son las nueve en punto. Abres tu primera videollamada con un cliente de Estados Unidos y su cara aparece en la pantalla.","who":"Mark","phrases":[
  P("a1","Hi, Mark. Can you hear me?","jai-MARK, kən-yu-JIIR-mi","Entras a la videollamada, saludas al cliente y compruebas que te oye."),
  P("a2","Yes, I can hear you.","YES, ai-kən-JIIR-yu","Te preguntan si se oye bien y contestas que sí."),
  P("a3","Sorry, I can't hear you.","SA-ri, ai-KÆNT-JIIR-yu","No oyes nada y lo dices con educación."),
  P("a4","Can you share your screen?","kən-yu-SHER-yor-SKRIIN","Pides al cliente que comparta su pantalla."),
  P("a5","One moment, please.","uan-MOU-mənt, PLIIZ","Necesitas unos segundos y pides que esperen.")],
  "turns":[
   T("Hi, Ana! Can you hear me?","Te saluda y comprueba el sonido.",[("Hi, Mark. Yes, I can hear you.",2,"Great. I can hear you too."),("Yes.",1,"Good. {Hi}, Ana!"),("One moment, please.",0,"Oh… {Can you hear me}? Hello?")]),
   T("Okay, what do we need first?","Mark pregunta cómo empezar. Quieres ver su pantalla.",[("Can you share your screen, please?",2,"Of course. Can you see it?"),("Share your screen.",1,"Sure. You'd like me to {share my screen}? One moment."),("I'm a lawyer.",0,"Okay… {my screen}? Do you want to see it?")]),
   T("Ana? Are you there?","Mark no te oye desde hace unos segundos.",[("One moment, please.",2,"No problem. I'll wait."),("Sorry, I can't hear you.",1,"Oh, sorry. {Can you hear me} now?"),("Nice to meet you.",0,"Um… {Are you there}, Ana? I can't hear you.")])]},
 {"id":"intro","title":"Introducing yourself","art":"wave","setting":"Tu primera entrevista por vídeo. Emily, de recursos humanos, sonríe y te da la bienvenida.","who":"Emily","phrases":[
  P("b1","Nice to meet you.","nais-tə-MIIT-yu","Te presentan a alguien y le dices que te alegra conocerle."),
  P("b2","I'm Ana. I'm from Uruguay.","aim-A-na, aim-frəm-YU-ru-guai","Dices tu nombre y de dónde eres. Aquí es Ana y Uruguay; luego pondrás los tuyos."),
  P("b3","I'm a lawyer.","aim-ə-LOI-yer","Dices tu profesión. Aquí, abogada; luego pondrás la tuya."),
  P("b4","I work from home.","ai-WERK-frəm-JOUM","Dices que trabajas desde casa."),
  P("b5","I speak Spanish and a little English.","ai-SPIIK-SPÆ-nish-ən-ə-LI-təl-ING-glish","Dices que hablas español y un poco de inglés.")],
  "turns":[
   T("Hello, Ana. Welcome!","Emily te da la bienvenida.",[("Hello, Emily. Nice to meet you.",2,"Nice to meet you too."),("Hello.",1,"Hi! {Nice to meet you}, Ana."),("See you on Monday at ten.",0,"Oh… it's {nice to meet you}. We start now.")]),
   T("Where are you from?","Te pregunta de dónde eres.",[("I'm from Uruguay.",2,"Oh, nice. Uruguay!"),("Uruguay.",1,"Oh, you're {from Uruguay}. Nice!"),("I'm a lawyer.",0,"Okay, but {where are you from}?")]),
   T("And what do you do?","Te pregunta a qué te dedicas.",[("I'm a lawyer. I work from home.",2,"Perfect. That's great for this job."),("Lawyer.",1,"Oh, {you're a lawyer}. Great."),("I speak Spanish.",0,"Okay… and {what do you do}?")])]},
 {"id":"spell","title":"Spelling your name","art":"key","setting":"Mark necesita tus datos para darte acceso a la plataforma. Tienes que deletrear tu nombre y tu correo.","who":"Mark","phrases":[
  P("c1","It's A-N-A.","ITS, EI-EN-EI","Te piden deletrear tu nombre y lo haces letra por letra."),
  P("c2","My last name is Ruiz, R-U-I-Z.","mai-LÆST-neim-iz-RU-iz, AR-YU-AI-ZII","Dices tu apellido y lo deletreas."),
  P("c3","My email is ana at company dot com.","mai-II-meil-iz, A-na-æt-KAM-pə-ni-DAT-kam","Dictas tu correo electrónico: ana arroba company punto com."),
  P("c4","Could you spell that for me?","kud-yu-SPEL-dhæt-fər-MII","No has entendido una palabra y pides que te la deletreen."),
  P("c5","Yes, that's right.","YES, dhæts-RAIT","Te repiten tu dato y confirmas que es correcto.")],
  "turns":[
   T("What's your name? Can you spell it?","Mark te pide el nombre, deletreado.",[("It's Ana. A-N-A.",2,"Thank you. A-N-A."),("Ana.",1,"{A-N-A}, right? Thank you."),("Monday works for me.",0,"Sorry? {Can you spell your name}?")]),
   T("And your last name?","Te pregunta el apellido.",[("My last name is Ruiz, R-U-I-Z.",2,"Got it. R-U-I-Z."),("Ruiz.",1,"{R-U-I-Z}? Thank you."),("I can't hear you.",0,"Hmm. {Your last name}, please.")]),
   T("And your email?","Te pide el correo electrónico.",[("My email is ana at company dot com.",2,"Thanks. I'll send the link today."),("Ana at company dot com.",1,"Thanks. {Your email is} ana at company dot com, right?"),("One moment, please.",0,"Sure. {What's your email}?")])]},
 {"id":"time","title":"Setting a time","art":"sun","setting":"Emily quiere fijar la próxima reunión. Hay que acordar día y hora.","who":"Emily","phrases":[
  P("d1","What time is the meeting?","WAT-taim-iz-dhə-MII-ting","Preguntas a qué hora es la reunión."),
  P("d2","The meeting is at three o'clock.","dhə-MII-ting-iz-æt, THRII-ə-KLAK","Dices que la reunión es a las tres en punto."),
  P("d3","Is that your time or my time?","iz-dhæt-yor-TAIM, or-mai-TAIM","Preguntas si la hora es la tuya o la de la otra persona."),
  P("d4","Monday works for me.","MAN-dei-WERKS-fər-MII","Dices que el lunes te viene bien."),
  P("d5","See you on Monday at ten.","SII-yu-on-MAN-dei-æt-TEN","Te despides hasta el lunes a las diez.")],
  "turns":[
   T("Can we meet on Monday?","Emily propone el lunes.",[("Yes, Monday works for me.",2,"Great."),("Monday.",1,"{Monday works for you}? Great."),("Nice to meet you.",0,"Sorry? {Monday}, yes or no?")]),
   T("Ten o'clock, my time. Is that okay?","Te propone las diez, hora de ella.",[("Is that your time or my time?",2,"Good question. It's {my time}."),("Yes.",1,"Great. Ten o'clock, {my time}."),("I'm a lawyer.",0,"Okay… {ten o'clock}, is that okay?")]),
   T("Great. We have a plan.","Cerráis la reunión.",[("See you on Monday at ten.",2,"Perfect. Bye, Ana!"),("Bye.",1,"Bye! {See you on Monday}."),("Could you spell that for me?",0,"Spell… {Monday}? M-O-N-D-A-Y. See you!")])]},
 {"id":"clar","title":"When you don't understand","art":"sign","setting":"Mark habla rápido y no has entendido una parte. Aquí no hace falta fingir: se pide ayuda.","who":"Mark","phrases":[
  P("e1","Sorry, could you repeat that?","SA-ri, kud-yu-ri-PIIT-dhæt","No has entendido y pides que lo repitan, con educación."),
  P("e2","Could you speak more slowly, please?","kud-yu-SPIIK-mor-SLOU-li, PLIIZ","Hablan muy rápido y pides que hablen más despacio."),
  P("e3","Could you write it in the chat?","kud-yu-RAIT-it-in-dhə-CHÆT","No has entendido una cifra o un nombre y pides que lo escriban en el chat."),
  P("e4","I don't understand.","ai-DOUNT-ən-der-STÆND","Dices con claridad que no entiendes."),
  P("e5","Let me check and get back to you.","LET-mi-CHEK-ən-GET-bæk-tə-yu","Necesitas comprobar algo y prometes responder después.")],
  "turns":[
   T("Can you send the report by Friday?","Mark te pide algo, pero ha hablado muy rápido.",[("Sorry, could you repeat that?",2,"Sure. The report, by Friday."),("What?",1,"Oh, you'd like me to {repeat that}. The report, by Friday."),("Yes, that's right.",0,"Hmm… {The report}. Can you send it by Friday?")]),
   T("I said, can you send the report by Friday?","Lo repite, pero sigue siendo rápido.",[("Could you speak more slowly, please?",2,"Of course. The. Report. By. Friday."),("I don't understand.",1,"No problem. {Slowly}: the report, by Friday."),("One moment, please.",0,"Okay. I'll {wait}. Then: the report, by Friday.")]),
   T("Okay. The report, by Friday. Is that clear?","Confirma que lo has entendido.",[("Yes. Let me check and get back to you.",2,"Perfect. Thanks, Ana."),("Yes.",1,"Good. {Let me know} if you have questions."),("Hi, Mark.",0,"Um… {is that clear}? Please, tell me.")])]},
]
DAYS=[
 {"n":1,"t":"Entrar a la llamada","sc":"call","m":20,"goal":"Comprobar el audio, saludar al cliente, pedirle que comparta su pantalla y pedir un momento.","u":1,"k":1},
 {"n":2,"t":"Presentarte","sc":"intro","m":20,"goal":"Decir tu nombre, de dónde eres, tu profesión, que trabajas desde casa y qué idiomas hablas.","u":1,"k":2},
 {"n":3,"t":"Deletrear tu nombre y tu email","sc":"spell","m":20,"goal":"Deletrear tu nombre y apellido, dictar tu correo y pedir que te deletreen una palabra.","u":1,"k":3},
 {"n":4,"t":"Quedar una hora","sc":"time","m":20,"goal":"Preguntar y decir la hora de una reunión, aclarar de quién es la hora y despedirte hasta el lunes.","u":1,"k":4},
 {"n":5,"t":"Cuando no entiendes","sc":"clar","m":20,"goal":"Pedir que repitan, que hablen más despacio o que lo escriban, decir que no entiendes y ganar tiempo para responder.","u":1,"k":5},
 {"n":6,"t":"Una jornada completa","sc":None,"m":20,"goal":"Unir las cinco situaciones en una sola historia, de la llamada a la despedida.","u":1,"k":6},
 {"n":7,"t":"Repaso y mini-prueba","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":1,"k":7},
 {"n":8,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa lo que ya puedes hacer.","u":1,"k":8},
]
def L(w,fr,es):return {"w":w,"fr":fr,"es":es}
STORY={
 "1":[L("Mark","Hi, Ana! Can you hear me?","¡Hola, Ana! ¿Me oyes?"),L("Ana","Yes, I can hear you. Hi, Mark.","Sí, te oigo. Hola, Mark."),L("Mark","Great. Can you see my screen?","Genial. ¿Ves mi pantalla?"),L("Ana","Sorry, I can't see it.","Perdona, no la veo."),L("Mark","One moment, please.","Un momento, por favor."),L("Ana","No problem.","Sin problema.")],
 "2":[L("Emily","Hello, Ana. Nice to meet you.","Hola, Ana. Encantada de conocerte."),L("Ana","Nice to meet you, Emily. I'm from Uruguay.","Encantada, Emily. Soy de Uruguay."),L("Emily","Great! What do you do?","¡Genial! ¿A qué te dedicas?"),L("Ana","I'm a lawyer. I work from home.","Soy abogada. Trabajo desde casa."),L("Emily","Do you speak English?","¿Hablas inglés?"),L("Ana","A little English. I speak Spanish.","Un poco de inglés. Hablo español.")],
 "3":[L("Mark","What is your last name?","¿Cuál es tu apellido?"),L("Ana","It's Ruiz. R-U-I-Z.","Es Ruiz. R-U-I-Z."),L("Mark","And your email?","¿Y tu email?"),L("Ana","Ana at company dot com.","ana arroba company punto com."),L("Mark","Could you spell that for me?","¿Me lo puedes deletrear?"),L("Ana","Sure. A-N-A.","Claro. A-N-A.")],
 "4":[L("Emily","Can we meet on Monday?","¿Podemos reunirnos el lunes?"),L("Ana","Yes, Monday works for me.","Sí, el lunes me viene bien."),L("Emily","Ten o'clock, my time. Is that okay?","A las diez, hora mía. ¿Te viene bien?"),L("Ana","Is that your time or my time?","¿Es tu hora o la mía?"),L("Emily","My time. It's a good question!","La mía. ¡Buena pregunta!"),L("Ana","Okay. See you on Monday at ten.","Vale. Nos vemos el lunes a las diez.")],
 "5":[L("Mark","Can you send the report by Friday?","¿Puedes enviar el informe antes del viernes?"),L("Ana","Sorry, could you repeat that?","Perdona, ¿puedes repetirlo?"),L("Mark","The report. By Friday.","El informe. Para el viernes."),L("Ana","Could you write it in the chat?","¿Puedes escribirlo en el chat?"),L("Mark","Sure. One moment.","Claro. Un momento."),L("Ana","Thank you. Let me check and get back to you.","Gracias. Lo compruebo y te contesto.")],
 "6":[L("Mark","Hi, Ana! Can you hear me?","¡Hola, Ana! ¿Me oyes?"),L("Ana","Yes, I can hear you. Nice to meet you.","Sí, te oigo. Encantada de conocerte."),L("Mark","What's your last name?","¿Cuál es tu apellido?"),L("Ana","It's Ruiz. R-U-I-Z.","Es Ruiz. R-U-I-Z."),L("Mark","Can we meet on Monday?","¿Podemos reunirnos el lunes?"),L("Ana","Yes, Monday works for me.","Sí, el lunes me viene bien."),L("Mark","Can you send the report by Friday?","¿Puedes enviar el informe antes del viernes?"),L("Ana","Sorry, could you repeat that?","Perdona, ¿puedes repetirlo?"),L("Mark","The report. By Friday.","El informe. Para el viernes."),L("Ana","Thank you. Let me check and get back to you.","Gracias. Lo compruebo y te contesto.")],
}
exec(open(R+'tools/en_u2.py',encoding='utf-8').read())
for _s in SCENES:_s.setdefault('u',1)
exec(open(R+'tools/en_u3.py',encoding='utf-8').read())
SCENES+=U2_SCENES+U3_SCENES
DAYS+=U2_DAYS+U3_DAYS
STORY.update(U2_STORY);STORY.update(U3_STORY)
SOUNDS=[
 {"id":"s1","g":"th","rs":"th / dh","t":"La th","tip":"Pon la punta de la lengua entre los dientes y deja salir el aire, como un soplo suave. Es el sonido de think y thanks. Con voz (dh) aparece en the, this y that. No la cambies por s, t ni d: cambiaría la palabra.","words":["think","thanks","three","this","that","the"]},
 {"id":"s2","g":"i / ee","rs":"i / ii","t":"Vocal corta y vocal larga","tip":"La i corta (it, ship, live) es breve y relajada. La larga (eat, sheep, leave) es más tensa y más larga. En español no existe esta diferencia, pero en inglés separa palabras distintas.","words":["ship","sheep","it","eat","live","leave"]},
 {"id":"s3","g":"a","rs":"æ","t":"La a abierta","tip":"Abre la boca más que para una a española y acércala a la e, como si dijeras las dos a la vez. Aparece en can't, back, man y that.","words":["can't","back","man","that","last","have"]},
 {"id":"s4","g":"ə","rs":"ə","t":"La vocal débil","tip":"Las sílabas sin fuerza se relajan hasta casi desaparecer: about suena ə-BAUT y meeting pierde fuerza en la segunda sílaba. Es lo que más cambia el ritmo del inglés respecto al español.","words":["about","problem","again","today"]},
 {"id":"s5","g":"-t -d -s","rs":"t d s","t":"Consonantes finales","tip":"Pronuncia siempre el final de la palabra: want, need, work, meetings. En español muchas palabras acaban en vocal, y quien te escucha pierde información si omites la última consonante.","words":["want","need","work","meeting","email"]},
 {"id":"s6","g":"r","rs":"r","t":"La r inglesa","tip":"No se vibra. La lengua no toca el paladar: la punta sube hacia atrás sin tocar, como en red. Al principio puede sonar parecida a una u; no pasa nada, se afina con la práctica.","words":["red","right","work","really","remote"]},
 {"id":"s7","g":"v","rs":"v","t":"V no es B","tip":"Apoya los dientes de arriba sobre el labio de abajo y deja vibrar el aire. Es distinto de la b: very y berry no suenan igual.","words":["very","video","have","over"]},
]
SOUNDS+=U2_SOUNDS+U3_SOUNDS
ASK=[
 {"w":"where","es":"dónde","ex":"Where is the meeting?","ees":"¿Dónde es la reunión?"},
 {"w":"when","es":"cuándo","ex":"When is the deadline?","ees":"¿Cuándo es la fecha límite?"},
 {"w":"how","es":"cómo","ex":"How do you spell that?","ees":"¿Cómo se deletrea eso?"},
 {"w":"why","es":"por qué","ex":"Why do you need it?","ees":"¿Por qué lo necesitas?"},
 {"w":"how much","es":"cuánto","ex":"How much is it?","ees":"¿Cuánto cuesta?"},
 {"w":"who","es":"quién","ex":"Who is on the call?","ees":"¿Quién está en la llamada?"},
]
NUMF=[["0","zero","ZII-rou"],["1","one","uan"],["2","two","tuu"],["3","three","thrii"],["4","four","for"],["5","five","faiv"],["6","six","siks"],["7","seven","SE-vən"],["8","eight","eit"],["9","nine","nain"],["10","ten","ten"],["11","eleven","i-LE-vən"],["12","twelve","tuelv"],["13","thirteen","ther-TIIN"],["14","fourteen","for-TIIN"],["15","fifteen","fif-TIIN"],["16","sixteen","siks-TIIN"],["17","seventeen","se-vən-TIIN"],["18","eighteen","ei-TIIN"],["19","nineteen","nain-TIIN"],["20","twenty","TUEN-ti"]]
NUMS={str(n[0]):n[1] for n in NUMF[:13]}
PIC=[
 ["Equipo","laptop","el portátil","1F4BB"],["Equipo","computer","el ordenador","1F5A5"],["Equipo","phone","el móvil","1F4F1"],["Equipo","headphones","los auriculares","1F3A7"],["Equipo","camera","la cámara","1F4F7"],
 ["Oficina","office","la oficina","1F3E2"],["Oficina","home","la casa","1F3E0"],["Oficina","calendar","el calendario","1F4C5"],["Oficina","clock","el reloj","1F550"],["Oficina","briefcase","el maletín","1F4BC"],["Oficina","book","el libro","1F4D6"],["Oficina","pencil","el lápiz","270F"],
 ["En línea","link","el enlace","1F517"],["En línea","message","el mensaje","1F4AC"],["En línea","goal","el objetivo","1F3AF"],["En línea","done","hecho","2705"],
 ["Dinero","money","el dinero","1F4B6"],["Dinero","card","la tarjeta","1F4B3"],["Dinero","ticket","el billete","1F3AB"],
 ["Comida","coffee","el café","2615"],["Comida","water","el agua","1F4A7"],["Comida","apple","la manzana","1F34E"],["Comida","bread","el pan","1F956"],["Comida","salad","la ensalada","1F957"],
 ["Viaje","plane","el avión","2708"],["Viaje","train","el tren","1F686"],["Viaje","taxi","el taxi","1F695"],["Viaje","hotel","el hotel","1F3E8"],["Viaje","suitcase","la maleta","1F9F3"],["Viaje","key","la llave","1F511"],
]
PIC+=U2_PIC+U3_PIC
PCATS=["Todo","Equipo","Oficina","En línea","Trabajo","Dinero","Comida","Compras","Ciudad","Viaje"]
# Palabras: rango real en la lista de frecuencia (las 250 primeras formas de en_50k de FrequencyWords, OpenSubtitles 2018)
FREQ=open(R+'tools/data/en_top250.txt').read().split()
WS=[("you","¿Me oyes? / tú, usted","Can you hear me?","¿Me oyes?"),("it","lo, ello","It works.","Funciona."),("can","poder (puedo, puedes…)","I can help you.","Puedo ayudarte."),("know","saber, conocer","I don't know yet.","Todavía no lo sé."),("get","conseguir, recibir","I'll get it today.","Lo consigo hoy."),("go","ir","Let's go to the meeting.","Vamos a la reunión."),("want","querer","I want the report.","Quiero el informe."),("need","necesitar","I need more time.","Necesito más tiempo."),("think","pensar, creer","I think it works.","Creo que funciona."),("see","ver","I see the problem.","Veo el problema."),("look","mirar","Let me look at it.","Déjame mirarlo."),("come","venir","Can you come at ten?","¿Puedes venir a las diez?"),("take","tomar, llevar","Take your time.","Tómate tu tiempo."),("tell","decir, contar","Tell me more.","Cuéntame más."),("help","ayudar, ayuda","Can you help me?","¿Puedes ayudarme?"),("work","trabajar, funcionar","I work from home.","Trabajo desde casa."),("call","llamada, llamar","Let's have a call.","Hagamos una llamada."),("wait","esperar","Please wait a moment.","Espera un momento, por favor."),("talk","hablar","Can we talk tomorrow?","¿Podemos hablar mañana?"),("say","decir","What did you say?","¿Qué dijiste?"),("give","dar","I can give you my email.","Te puedo dar mi correo."),("find","encontrar","I can't find the file.","No encuentro el archivo."),("keep","guardar, mantener","Keep it simple.","Hazlo simple."),("make","hacer","I will make a note.","Tomaré nota."),("ask","preguntar, pedir","Can I ask a question?","¿Puedo hacer una pregunta?"),("understand","entender","I understand.","Entiendo."),("hear","oír","I can't hear you.","No te oigo."),("remember","recordar","I remember now.","Ahora me acuerdo."),("listen","escuchar","Please listen to this.","Escucha esto, por favor."),("show","mostrar","Can you show me?","¿Me lo puedes mostrar?"),("please","por favor","Please send it today.","Envíalo hoy, por favor."),("sorry","perdón, lo siento","Sorry, I'm late.","Perdón, llego tarde."),("thank","agradecer","Thank you very much.","Muchas gracias."),("thanks","gracias","Thanks for your help.","Gracias por tu ayuda."),("hello","hola","Hello, everyone.","Hola a todos."),("yes","sí","Yes, that works.","Sí, me viene bien."),("no","no","No problem.","Sin problema."),("okay","vale, de acuerdo","Okay, got it.","Vale, entendido."),("good","bueno","Good morning.","Buenos días."),("great","genial","That's great.","Eso es genial."),("now","ahora","Can you do it now?","¿Puedes hacerlo ahora?"),("today","hoy","I'm free today.","Estoy libre hoy."),("time","hora, tiempo, vez","What time is it?","¿Qué hora es?"),("name","nombre","My name is Ana.","Me llamo Ana."),("new","nuevo","I have a new client.","Tengo un cliente nuevo."),("next","siguiente, próximo","See you next week.","Nos vemos la semana que viene."),("right","correcto, derecha","That's right.","Eso es."),("sure","claro, seguro","Sure, no problem.","Claro, sin problema."),("maybe","quizá","Maybe on Monday.","Quizá el lunes."),("again","otra vez","Can you say it again?","¿Puedes repetirlo?"),("here","aquí","I'm here.","Estoy aquí."),("there","allí; hay (there is)","Is there a problem?","¿Hay algún problema?"),("where","dónde","Where is the file?","¿Dónde está el archivo?"),("when","cuándo","When is the meeting?","¿Cuándo es la reunión?"),("why","por qué","Why do you need it?","¿Por qué lo necesitas?"),("how","cómo","How are you?","¿Cómo estás?"),("what","qué","What is your name?","¿Cómo te llamas?"),("who","quién","Who is on the call?","¿Quién está en la llamada?"),("with","con","I'm with a client.","Estoy con un cliente."),("but","pero","I understand, but I can't.","Lo entiendo, pero no puedo."),("very","muy","Very good.","Muy bien."),("really","de verdad, realmente","Really? Thank you.","¿En serio? Gracias."),("more","más","One more minute.","Un minuto más."),("first","primero","Let's do this first.","Hagamos esto primero."),("last","último","This is the last one.","Este es el último."),("back","de vuelta, atrás","I'll be back soon.","Vuelvo enseguida."),("home","casa, hogar","I'm at home.","Estoy en casa."),("day","día","Have a good day.","Que tengas un buen día.")]
WS+=U2_WS+U3_WS
WORDS=[]
for w,es,ex,ees in WS:
    assert w in FREQ,w
    assert re.search(r"(^|[^A-Za-z])"+re.escape(w)+r"(?![A-Za-z])",ex,re.I),(w,ex)
    WORDS.append({"w":w,"r":FREQ.index(w)+1,"es":es,"ex":ex,"ees":ees})
WORDS.sort(key=lambda x:x["r"])
GOALS=["Comprobar el audio y pedir que compartan la pantalla en una videollamada.","Presentarte: nombre, país, profesión y que trabajas desde casa.","Deletrear tu nombre y tu correo electrónico.","Pedir que repitan, que hablen más despacio o que escriban algo cuando no entiendes."]
WEEKS=[{"w":"U1","t":"Tu primera llamada","d":"Videollamada, presentación, deletreo, horarios y cómo pedir ayuda cuando no entiendes.","o":"Desenvolverte en los primeros minutos de una llamada, de trabajo o de cualquier tipo, y recuperarte cuando no entiendes."},{"w":"U2","t":"Pedir y comprar","d":"Café, tienda, calle, charla breve y qué hacer cuando algo sale mal.","o":"Manejarte en una mañana cotidiana en una ciudad de Estados Unidos: pedir, preguntar precios, orientarte y charlar."},{"w":"U3","t":"Escribir en el trabajo","d":"Mensajes de chat, emails, plazos, pedir ayuda y cortesía por escrito.","o":"Escribir y entender mensajes breves de trabajo, negociar un plazo y pedir ayuda con cortesía."}]
STAGES=[{"k":"Principio","t":"Unidad 1 · Tus primeras palabras","d":"Entrar a una llamada, presentarte, deletrear tus datos, quedar una hora y pedir que te repitan. Sirve igual en una reunión que en la vida diaria. Termina con una mini-prueba.","s":"Disponible"},{"k":"Vida diaria","t":"Unidad 2 · Pedir y comprar","d":"Pedir un café, preguntar precios y pagar, orientarte en la calle, charlar un momento y avisar cuando algo está mal.","s":"Disponible"},{"k":"Trabajo","t":"Unidad 3 · Escribir en el trabajo","d":"Mensajes de chat, emails, plazos, pedir ayuda y cortesía por escrito.","s":"Disponible"},{"k":"Siguiente","t":"Unidades 4 a 6 · en preparación","d":"Viajar y cuidarte, tareas y plazos, y entrevistas y clientes. Todavía no están construidas.","s":"En preparación"}]
PLAN=[
 {"w":"U4","t":"Vida diaria: viajar y cuidarte","days":["Aeropuerto y hotel","Transporte y taxis","Restaurante y alergias","En la farmacia o con el médico","Hacer amistades","Un viaje completo","Repaso y mini-prueba","Descanso y balance"]},
 {"w":"U5","t":"Trabajo: tareas y plazos","days":["Decir qué estás haciendo","Pedir y dar feedback","Plazos y prioridades","Avisar de un retraso","Reuniones: opinar y preguntar","Una semana completa","Repaso y mini-prueba","Descanso y balance"]},
 {"w":"U6","t":"Trabajo: entrevistas y clientes","days":["Hablar de tu experiencia","Preguntas frecuentes en entrevista","Tarifas y condiciones","Cerrar un acuerdo","Despedirte y dar seguimiento","Una jornada completa","Prueba final del nivel","Descanso y balance"]},
]
def svg(name):
    s=open(R+'tools/data/%s-light.svg'%name).read().replace('xmlns="http://www.w3.org/2000/svg" ','').replace('<svg ','<svg aria-hidden="true" focusable="false" ',1)
    return s
ICONS={"video":svg('video-camera'),"idcard":svg('identification-card'),"at":svg('at'),"ear":svg('ear')}
COPY={"okWord":"Azul",
 "soundsIntro":"El inglés se escribe de una manera y suena de otra, y además cambia el ritmo: unas sílabas se pronuncian con fuerza y otras casi desaparecen. Por eso empezamos por el oído. Escucha, sigue las notas con la vista y repite en voz alta.",
 "rhythm":"En español cada sílaba pesa casi igual. En inglés las palabras importantes llevan la fuerza y las demás se aplastan, así que el ritmo sube y baja. Aquí cada sílaba es una nota, la mayúscula es la fuerte y la barra cierra el compás.",
 "pronKey":"<b>Cómo leer la pronunciación.</b> La mayúscula marca la sílaba fuerte. Se lee como en español, salvo estas marcas: <code>th</code> lengua entre los dientes (think); <code>dh</code> lo mismo, con voz (the); <code>æ</code> a muy abierta, casi e (can't); <code>ə</code> vocal débil y relajada (la a de about); <code>ii</code> i larga (meet); <code>i</code> i corta (it); <code>ou</code>, <code>ei</code>, <code>ai</code> son vocales que se deslizan (go, great, my); <code>er</code> vocal con r inglesa, sin vibrar (work); <code>j</code> aspirada suave (hello); <code>w</code> como la u de «huevo»; <code>v</code> con los dientes sobre el labio.",
 "imgLead":"Mira el dibujo, oye la palabra y repítela. Pulsa un dibujo para oírlo. Fíjate en la última consonante: en inglés se pronuncia siempre.",
 "numLead":"Del 0 al 20, con su sonido. Pulsa cada número para oírlo. Lo más traicionero: <b>13 y 30</b> (thirteen y thirty) suenan casi igual. Lo que los separa es dónde cae la fuerza.",
 "numNote":"Los números en -teen llevan la fuerza al final (thir-TEEN) y los terminados en -ty la llevan al principio (THIR-ty). Es la confusión más cara, en una llamada de trabajo o en una tienda: precios, plazos, horas. Si dudas, pide que lo escriban en el chat.",
 "unitEnd":{"2":"Has recorrido la unidad 2: ya puedes pedir un café, preguntar un precio, orientarte en la calle, charlar un momento y avisar con calma cuando algo sale mal. Las unidades 4 a 6 todavía no están construidas. Esto no certifica ningún nivel: para saber dónde estás, practica con personas reales. Mantén el repaso diario para no perder lo aprendido.","3":"Has recorrido la unidad 3: ya puedes escribir un chat o un email breve de trabajo, preguntar y negociar un plazo, pedir ayuda y ser cortés por escrito. Las unidades 4 a 6 todavía no están construidas. Esto no certifica ningún nivel: para saber dónde estás, practica con personas reales. Mantén el repaso diario para no perder lo aprendido.","1":"Has recorrido la unidad 1: ya puedes manejar los primeros minutos de una llamada de trabajo. Las unidades 2 (pedir y comprar) y 3 (escribir en el trabajo) ya están disponibles. Esto no certifica ningún nivel: para saber dónde estás, practica con personas reales. Mantén el repaso diario para no perder lo aprendido."},
 "limits":"<li>Están construidas las unidades 1, 2 y 3 (cada una con cinco situaciones, una jornada, una mini-prueba y un descanso). Las unidades 4 a 6 son un plan: viajar y cuidarte, tareas y plazos, y entrevistas y clientes.</li><li>Todo el contenido (frases, historias, sentidos en español y notas de pronunciación) lo redacté yo y no ha pasado por revisión de un profesor nativo. La pronunciación escrita está pensada para hispanohablantes y es aproximada: el audio es la referencia.</li><li>La lista de «Palabras» sí viene de un recuento real de frecuencia; las palabras elegidas y sus ejemplos son míos.</li><li>La mini-prueba mide reconocimiento de lo que oyes. No mide si hablas bien.</li><li>La conversación libre y el profe usan una IA externa gratuita. Pueden equivocarse o sonar poco naturales: contrasta con tu oído y con las frases del curso. Lo que escribes o dices se envía a Google.</li>",
 "chromeNote":"Chrome incluye una IA integrada que admite inglés, pero esta versión de Cadence todavía no la usa porque no la he probado. Por ahora la conversación funciona con Gemini y tu clave gratuita.",
}
cfg={"id":"en","lang":"en","name":"inglés","stateKey":"cadence.en.v1","aiKey":"cadence.en.ai","tts":"en-US","sr":"en-US","target":"ENGLISH (American; everyday life and professional work, both equally)","chromeLang":None,
 "voicePrefs":["Samantha","Ava","Allison","Google US English","Microsoft Aria","Microsoft Jenny","Microsoft Guy","Alex","Evan","Zoe","Nathan"],
 "voiceExclude":"^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|Kathy)",
 "voiceAdj":"inglesa","features":{"links":False,"verbs":False},
 "maps":[["ask","Para preguntar"],["num","Números"],["img","Imágenes"]],
 "unitsMeta":[[1,"Tu primera llamada","video","c1"],[2,"Pedir y comprar","2615","c2"],[3,"Escribir en el trabajo","1F4AC","c3"]],
 "extraWords":"yes, no, thanks, thank you, please, sorry, hello, hi, goodbye, okay, I don't understand",
 "hello":"Hello!","eyebrow":"Curso de inglés · desde cero · para la vida diaria y para el trabajo profesional","sub":"Curso de inglés · Inglés americano · vida diaria y trabajo profesional",
 "profChips":["¿Cuál es la diferencia entre «can» y «could»?","¿Por qué en inglés hay que pronunciar la última consonante?","¿Cuándo uso «I'm» y cuándo «I am»?","¿Cómo se dicen las horas?"]}
COURSE={"copy":None,"cfg":cfg,"icons":ICONS,"SCENES":SCENES,"SOUNDS":SOUNDS,"DAYS":DAYS,"STORY":STORY,"PLAN":PLAN,"STAGES":STAGES,"RHY":["a1","a4","b2","e1","g1","j3","l4","o4"],"WEEKS":WEEKS,"GOALS":GOALS,"GOALS2":U2_GOALS,"GOALS3":U3_GOALS,"GOALS4":[],"WORDS":WORDS,"LIB":[],"LIBT":{},"NUMS":NUMS,"VERBS":[],"ASK":ASK,"NUMF":NUMF,"PIC":PIC,"PCATS":PCATS,"SCENE_IMG":{"call":"video","intro":"idcard","spell":"at","time":"1F4C5","clar":"ear","coffee":"2615","shop":"1F3F7","street":"1F5FA","chat":"2600","mistake":"1F37D","chatmsg":"1F4AC","email":"at","deadline":"1F4C6","helpmsg":"1F91D","polite":"1F44B"},"TENSES":[],"AUXF":{},"ALLER":[]}
words_info="""function(n){return '<p class="lead">Una lista real de las palabras que más aparecen en inglés hablado, para aprender primero lo que más vas a oír. No es mi intuición: sale de un recuento de subtítulos de películas y series.</p>'+'<div class="sec"><span class="eyebrow">Qué dicen los datos</span><ul class="plain">'+'<li><b>Fuente:</b> FrequencyWords (OpenSubtitles 2018, inglés, 50 000 formas). El repositorio original declara la licencia CC BY-SA 4.0; la copia que consulté en Hugging Face la indica como CC BY 4.0.</li>'+'<li><b>Qué uso:</b> el número «n.º» es la posición real de cada palabra en esa lista. Elegí '+n+' palabras útiles entre las 250 primeras.</li>'+'<li><b>Límites:</b> son subtítulos, es decir, diálogo de ficción, no conversación de trabajo. Cuenta formas escritas, sin agrupar conjugaciones, e incluye nombres y fragmentos como don o didn. Las palabras elegidas, sus sentidos en español y las frases de ejemplo son míos.</li></ul></div>';}"""
js="/* Curso de inglés (americano), vida diaria y trabajo profesional: contenido y configuración. Generado por tools/build_en_course.py. */\n(function(){\nvar COPY="+json.dumps(COPY,ensure_ascii=False,indent=1)[:-1].rstrip()+",\n\"wordsInfo\":"+words_info+"\n};\nvar C="+json.dumps(COURSE,ensure_ascii=False)+";\nC.copy=COPY;\nwindow.COURSE=C;\n})();\n"
os.makedirs(R+'en',exist_ok=True)
open(R+'en/course.js','w',encoding='utf-8').write(js)
print('ok',len(js),'bytes; words',len(WORDS))
