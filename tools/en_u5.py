# Unidad 5 del curso de inglés: «Tareas y plazos» (trabajo). Se carga desde build_en_course.py.
# Todo lo redacté yo (Claude); no ha pasado por revisión de un profesor nativo.
U5_SCENES=[
 {"id":"status","u":5,"title":"Daily update","art":"sun","setting":"Cada mañana el equipo hace un resumen rápido por videollamada. Emily te pide tu parte.","who":"Emily","phrases":[
  P("va1","I'm working on the report.","aim-UER-king-ON-dhə-ri-PORT","Dices en qué estás trabajando."),
  P("va2","I finished the draft yesterday.","ai-FI-nisht-dhə-DRÆFT-YES-ter-dei","Cuentas lo que terminaste ayer."),
  P("va3","I'm going to send it today.","aim-GOU-ing-tə-SEND-it-tə-DEI","Dices lo que vas a enviar hoy."),
  P("va4","I'm waiting for feedback.","aim-UEI-ting-fər-FIID-bæk","Dices que esperas comentarios."),
  P("va5","No blockers right now.","NOU-BLA-kerz-rait-NAU","Dices que nada te bloquea ahora.")],
  "turns":[
   T("Good morning, Ana. What are you working on?","Emily te pregunta en qué trabajas.",[("I'm working on the report.",2,"Great. How is it going?"),("Report.",1,"{I'm working on the report}. Good."),("I'm waiting for feedback.",0,"Hmm… {What are you working on}?")]),
   T("Did you finish yesterday's task?","Emily pregunta si terminaste la tarea de ayer.",[("I finished the draft yesterday.",2,"Perfect."),("Yes.",1,"Good. {I finished the draft yesterday}, right?"),("No blockers right now.",0,"Okay, but {did you finish}?")]),
   T("Is anything blocking you?","Emily pregunta si algo te bloquea.",[("No blockers right now.",2,"Great. Thanks, Ana."),("No.",1,"Okay. {No blockers right now}. Thanks."),("I'm going to send it today.",0,"Good, but {is anything blocking you}?")])]},
 {"id":"feedback","u":5,"title":"Getting feedback","art":"key","setting":"Mark revisó tu borrador y te cuenta qué piensa. Tienes que entenderlo y responder con calma.","who":"Mark","phrases":[
  P("vb1","Thanks for the feedback.","THÆNKS-fər-dhə-FIID-bæk","Agradeces sus comentarios."),
  P("vb2","What do you think?","UAT-du-yu-THINK","Preguntas su opinión."),
  P("vb3","Could you be more specific?","kud-yu-bi-mor-spə-SI-fik","Pides más detalle."),
  P("vb4","That makes sense.","DHÆT-meiks-SENS","Dices que lo entiendes."),
  P("vb5","I'll fix it today.","ail-FIKS-it-tə-DEI","Prometes corregirlo hoy.")],
  "turns":[
   T("I read your draft. Overall, it's good.","Mark te dice que en general el borrador está bien.",[("Thanks for the feedback.",2,"You're welcome."),("Good.",1,"Yes. {Thanks for the feedback}, right? It's good."),("I'll fix it today.",0,"Fix what? {It's good}. Overall.")]),
   T("But the second part is unclear.","Mark dice que la segunda parte no está clara.",[("Could you be more specific?",2,"Sure. The examples are confusing."),("Why?",1,"{Could you be more specific}? Sure. The examples."),("I'm working on the report.",0,"Okay… but {the second part is unclear}.")]),
   T("The examples are confusing. Can you simplify?","Mark pide que simplifiques los ejemplos.",[("That makes sense. I'll fix it today.",2,"Great. Thanks!"),("Okay.",1,"Good. {That makes sense}. {I'll fix it today}."),("What do you think?",0,"I think {the examples are confusing}.")])]},
 {"id":"priorities","u":5,"title":"Setting priorities","art":"sign","setting":"Tienes dos tareas a la vez y no llegas a todo. Emily te ayuda a decidir qué va primero.","who":"Emily","phrases":[
  P("vc1","What is the priority?","UAT-iz-dhə-prai-OR-ə-ti","Preguntas qué es lo prioritario."),
  P("vc2","I can do this first.","ai-kən-DU-dhis-FERST","Propones hacer esto primero."),
  P("vc3","Is this urgent?","iz-dhis-ER-jənt","Preguntas si es urgente."),
  P("vc4","I'll do that after lunch.","ail-DU-dhæt-æf-ter-LANCH","Dices que lo harás después de comer."),
  P("vc5","Let's focus on this one.","LETS-FOU-kəs-on-dhis-UAN","Propones centraros en una sola tarea.")],
  "turns":[
   T("You have two tasks today. The report and the invoice.","Emily te recuerda las dos tareas de hoy.",[("What is the priority?",2,"The invoice. It's urgent."),("Which?",1,"{What is the priority}? The invoice."),("Let's focus on this one.",0,"Which one? {The report} or {the invoice}?")]),
   T("The invoice is urgent. The report can wait.","Emily dice que la factura es urgente.",[("I can do this first.",2,"Perfect."),("Okay.",1,"Good. {I can do this first}."),("Keep the change.",0,"Um… {the invoice is urgent}. Do it first?")]),
   T("And the report? When can you do it?","Emily pregunta cuándo harás el informe.",[("I'll do that after lunch.",2,"Great. See you then."),("Later.",1,"{I'll do that after lunch}? Okay."),("I'm working on the report.",0,"Yes, I know. {When can you do it}?")])]},
 {"id":"delay","u":5,"title":"Reporting a delay","art":"wave","setting":"Vas a llegar tarde con una entrega. Es mejor avisar pronto y con un nuevo plazo. Sarah, la clienta, espera noticias.","who":"Sarah","phrases":[
  P("vd1","There's going to be a delay.","dherz-GOU-ing-tə-bi-ə-di-LEI","Avisas de que habrá un retraso."),
  P("vd2","I'm sorry for the inconvenience.","aim-SA-ri-fər-dhi-in-kən-VIIN-yəns","Pides disculpas por las molestias."),
  P("vd3","The new date is Monday.","dhə-NU-deit-iz-MAN-dei","Das la nueva fecha: el lunes."),
  P("vd4","I'll keep you updated.","ail-KIIP-yu-AP-dei-təd","Prometes mantenerla al tanto."),
  P("vd5","Does that work for you?","DAZ-dhæt-UERK-fər-YU","Preguntas si le va bien.")],
  "turns":[
   T("Hi Ana. Do you have an update?","Sarah pregunta si tienes novedades.",[("There's going to be a delay.",2,"Oh. How long?"),("Delay.",1,"A delay? {There's going to be a delay}? How long?"),("The new date is Monday.",0,"Hmm… {do you have an update}?")]),
   T("How long is the delay?","Sarah pregunta cuánto será el retraso.",[("The new date is Monday. I'm sorry for the inconvenience.",2,"Okay. Monday."),("Monday.",1,"{The new date is Monday}. Okay."),("I'll fix it today.",0,"But {how long is the delay}?")]),
   T("Okay. Will you tell me if it changes?","Sarah pide que le avises si cambia.",[("I'll keep you updated. Does that work for you?",2,"Yes, that works."),("Yes.",1,"Good. {I'll keep you updated}."),("There's going to be a delay.",0,"Yes, I know. {Will you tell me}?")])]},
 {"id":"meeting","u":5,"title":"In a meeting","art":"key","setting":"En una reunión de equipo por videollamada quieres opinar y hacer una pregunta sin pisar a nadie. Mark dirige la reunión.","who":"Mark","phrases":[
  P("ve1","Sorry to interrupt. Can I add something?","SA-ri-tə-in-tə-RAPT, kən-ai-ÆD-SAM-thing","Pides la palabra con educación."),
  P("ve2","I agree with that.","ai-ə-GRII-uid-DHÆT","Dices que estás de acuerdo."),
  P("ve3","I see it a little differently.","ai-SII-it-ə-LI-təl-DI-fər-ənt-li","Das otra opinión con suavidad."),
  P("ve4","Could you repeat the question?","kud-yu-ri-PIIT-dhə-KUES-chən","Pides que repitan la pregunta."),
  P("ve5","Let's follow up by email.","LETS-FA-lou-AP-bai-I-meil","Propones seguir el tema por email.")],
  "turns":[
   T("We plan to launch next week. Any thoughts, Ana?","Mark anuncia el lanzamiento y te pide tu opinión.",[("I agree with that.",2,"Great. Thanks."),("Yes.",1,"Okay. {I agree with that}?"),("Let's follow up by email.",0,"Hmm… {any thoughts}?")]),
   T("Does anyone disagree?","Mark pregunta si alguien no está de acuerdo.",[("I see it a little differently.",2,"Interesting. Go ahead."),("No.",1,"Okay. Anyone else? {I see it a little differently}?"),("Keep the change.",0,"Um… {does anyone disagree}?")]),
   T("Ana, what do you think about the date?","Mark te pregunta qué opinas de la fecha.",[("Could you repeat the question?",2,"Sure. What do you think about the date?"),("What?",1,"{Could you repeat the question}? Sure."),("Let's follow up by email.",0,"Hmm… {what do you think about the date}?")])]},
]
U5_DAYS=[
 {"n":33,"t":"Tu resumen diario","sc":"status","m":20,"goal":"Contar en qué trabajas, qué terminaste, qué vas a enviar y si algo te bloquea.","u":5,"k":1},
 {"n":34,"t":"Recibir feedback","sc":"feedback","m":20,"goal":"Agradecer comentarios, pedir detalles, decir que lo entiendes y comprometerte a corregir.","u":5,"k":2},
 {"n":35,"t":"Prioridades","sc":"priorities","m":20,"goal":"Preguntar qué es lo prioritario y decidir el orden de tus tareas.","u":5,"k":3},
 {"n":36,"t":"Avisar de un retraso","sc":"delay","m":20,"goal":"Avisar de un retraso, dar la nueva fecha, disculparte y prometer mantener al tanto.","u":5,"k":4},
 {"n":37,"t":"Reuniones","sc":"meeting","m":20,"goal":"Pedir la palabra, estar de acuerdo o discrepar con suavidad y pedir que repitan.","u":5,"k":5},
 {"n":38,"t":"Una semana completa","sc":None,"m":20,"goal":"Unir el resumen, el feedback y el aviso de retraso en una semana de trabajo.","u":5,"k":6},
 {"n":39,"t":"Repaso y mini-prueba","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":5,"k":7},
 {"n":40,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa lo que ya puedes hacer.","u":5,"k":8},
]
U5_STORY={
 "33":[L("Emily","Good morning, Ana. What are you working on?","Buenos días, Ana. ¿En qué estás trabajando?"),L("Ana","I'm working on the report.","Estoy con el informe."),L("Emily","Did you finish yesterday's task?","¿Terminaste la tarea de ayer?"),L("Ana","I finished the draft yesterday. I'm going to send it today.","Terminé el borrador ayer. Lo voy a enviar hoy."),L("Emily","Is anything blocking you?","¿Algo te bloquea?"),L("Ana","No blockers right now. I'm waiting for feedback.","Nada me bloquea ahora. Estoy esperando comentarios.")],
 "34":[L("Mark","I read your draft. Overall, it's good.","Leí tu borrador. En general, está bien."),L("Ana","Thanks for the feedback. What do you think about the second part?","Gracias por los comentarios. ¿Qué piensas de la segunda parte?"),L("Mark","It's unclear.","No está clara."),L("Ana","Could you be more specific?","¿Podrías ser más específico?"),L("Mark","The examples are confusing.","Los ejemplos confunden."),L("Ana","That makes sense. I'll fix it today.","Tiene sentido. Lo corrijo hoy.")],
 "35":[L("Emily","You have two tasks today. The report and the invoice.","Hoy tienes dos tareas. El informe y la factura."),L("Ana","What is the priority?","¿Cuál es la prioridad?"),L("Emily","The invoice is urgent.","La factura es urgente."),L("Ana","I can do this first.","Puedo hacer esta primero."),L("Emily","And the report?","¿Y el informe?"),L("Ana","I'll do that after lunch.","Lo haré después de comer.")],
 "36":[L("Sarah","Hi Ana. Do you have an update?","Hola, Ana. ¿Tienes novedades?"),L("Ana","There's going to be a delay. I'm sorry for the inconvenience.","Va a haber un retraso. Perdona las molestias."),L("Sarah","How long is the delay?","¿Cuánto será el retraso?"),L("Ana","The new date is Monday. Does that work for you?","La nueva fecha es el lunes. ¿Te va bien?"),L("Sarah","Yes, that works.","Sí, me va bien."),L("Ana","I'll keep you updated.","Te mantendré al tanto.")],
 "37":[L("Mark","We plan to launch next week. Any thoughts?","Planeamos lanzar la semana que viene. ¿Alguna opinión?"),L("Ana","I agree with that.","Estoy de acuerdo."),L("Mark","Does anyone disagree?","¿Alguien no está de acuerdo?"),L("Ana","Sorry to interrupt. I see it a little differently.","Perdona que interrumpa. Yo lo veo un poco distinto."),L("Mark","Go ahead.","Adelante."),L("Ana","Let's follow up by email.","Sigamos el tema por email.")],
 "38":[L("Emily","What are you working on?","¿En qué estás trabajando?"),L("Ana","I'm working on the report. I'm going to send it today.","Estoy con el informe. Lo voy a enviar hoy."),L("Mark","I read your draft. Overall, it's good.","Leí tu borrador. En general, está bien."),L("Ana","Thanks for the feedback. Could you be more specific?","Gracias por los comentarios. ¿Podrías ser más específico?"),L("Mark","The examples are confusing.","Los ejemplos confunden."),L("Ana","That makes sense. I'll fix it today.","Tiene sentido. Lo corrijo hoy."),L("Sarah","Do you have an update?","¿Tienes novedades?"),L("Ana","There's going to be a delay. The new date is Monday.","Va a haber un retraso. La nueva fecha es el lunes."),L("Sarah","Okay. Thanks for telling me.","Vale. Gracias por avisarme."),L("Ana","I'll keep you updated.","Te mantendré al tanto.")],
}
U5_SOUNDS=[
 {"id":"s13","g":"to / for / and","rs":"tə / fər / ən","t":"Las palabras pequeñas se debilitan","tip":"Las palabras de función (to, for, and, of, a, the) casi desaparecen dentro de la frase: to suena tə, for suena fər, and suena ən. La fuerza va a las palabras con contenido: working, report, today. Si las dices fuertes, suenas lenta y cuesta más seguirte.","words":["to","for","and","of"]},
]
U5_PIC=[
 ["Trabajo","books","los libros","1F4DA"],["Trabajo","puzzle","el rompecabezas","1F9E9"],["Trabajo","trophy","el trofeo","1F3C6"],["Trabajo","numbers","los números","1F522"],["Trabajo","star","la estrella","2B50"],
]
U5_WS=[("will","futuro (will = voy a, haré)","I will send it tomorrow.","Lo enviaré mañana."),("must","deber, tener que","We must finish today.","Tenemos que terminar hoy."),("might","podría (poco seguro)","I might be late.","Puede que llegue tarde."),("may","poder (permiso); puede que","May I ask a question?","¿Puedo hacer una pregunta?"),("done","hecho, terminado","It's done.","Está hecho."),("doing","haciendo","What are you doing?","¿Qué estás haciendo?"),("about","sobre; acerca de","I'm calling about the report.","Llamo por el informe."),("just","solo; justo","I just need five minutes.","Solo necesito cinco minutos."),("then","luego; entonces","First this, then that.","Primero esto, luego aquello."),("other","otro","I have the other file.","Tengo el otro archivo."),("way","manera; camino","Is there a better way?","¿Hay una forma mejor?"),("mean","significar; querer decir","What do you mean?","¿Qué quieres decir?"),("thing","cosa","One more thing.","Una cosa más."),("found","encontré, encontrado","I found the problem.","Encontré el problema."),("course","curso; of course = claro","Of course!","¡Por supuesto!"),("out","fuera","I'm out of the office.","Estoy fuera de la oficina.")]
U5_GOALS=["Contar en una reunión diaria en qué trabajas, qué terminaste y qué esperas.","Recibir feedback, pedir detalles y comprometerte a corregir.","Preguntar qué es prioritario y decidir el orden de tus tareas.","Avisar de un retraso con una nueva fecha, y opinar o preguntar en una reunión."]
