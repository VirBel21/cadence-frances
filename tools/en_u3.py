# Unidad 3 del curso de inglés: «Escribir en remoto» (trabajo). Se carga desde build_en_course.py.
# Todo lo redacté yo (Claude); no ha pasado por revisión de un profesor nativo.
U3_SCENES=[
 {"id":"chatmsg","u":3,"title":"Quick chat messages","art":"wave","setting":"Es tu primera semana trabajando en remoto. Mark te escribe en el chat del equipo y tú contestas con mensajes cortos.","who":"Mark","phrases":[
  P("k1","Hi, Mark. Quick question.","JAI-mark, KUIK-KUES-chən","Abres un mensaje de chat avisando de que tienes una pregunta rápida."),
  P("k2","Are you free for a quick call?","ar-yu-FRII-fər-ə-KUIK-KOL","Preguntas si tiene un momento para una llamada corta."),
  P("k3","Got it, thanks!","GAT-it, THÆNKS","Confirmas en el chat que lo has entendido."),
  P("k4","I'm on it.","aim-ON-it","Dices que ya te ocupas de ello."),
  P("k5","Talk soon!","TOK-SUUN","Cierras el mensaje: hablamos pronto.")],
  "turns":[
   T("Hi, Ana. Do you have a minute?","Mark te escribe en el chat y pregunta si tienes un minuto.",[("Sure. Are you free for a quick call?",2,"Yes! Give me five minutes."),("Yes.",1,"Great. {Are you free for a quick call}? Five minutes?"),("Talk soon!",0,"Oh… {do you have a minute}? Or later?")]),
   T("Can you update the file today?","Mark te pide que actualices un archivo hoy.",[("Got it, thanks! I'm on it.",2,"Perfect, thank you."),("Okay.",1,"Thanks. {I'm on it}, right?"),("Hi, Mark. Quick question.",0,"Sure, go ahead. But {the file}, today?")]),
   T("Thanks, Ana. I need to go now.","Mark se despide.",[("No problem. Talk soon!",2,"Talk soon!"),("Bye.",1,"Bye! {Talk soon}."),("I'm on it.",0,"Hmm… {I need to go now}. Talk soon?")])]},
 {"id":"email","u":3,"title":"Writing an email","art":"key","setting":"Tienes que escribir tu primer email a Sarah, una clienta. Lo preparas frase por frase, en voz alta.","who":"Sarah","phrases":[
  P("l1","Hi Sarah, I hope you're well.","jai-SE-rə, ai-houp-yor-UEL","Abres el email con un saludo amable."),
  P("l2","I'm writing about the invoice.","aim-RAI-ting-ə-BAUT-dhə-IN-vois","Dices el motivo del email: la factura."),
  P("l3","Please find the file attached.","PLIIZ-faind-dhə-FAIL-ə-TÆCHT","Avisas de que el archivo va adjunto."),
  P("l4","Let me know if you have any questions.","LET-mi-NOU-if-yu-hæv-e-ni-KUES-chəns","Invitas a preguntar si hay dudas."),
  P("l5","Best regards, Ana","BEST-ri-GARDZ, A-na","Cierras el email con una despedida formal.")],
  "turns":[
   T("Hi Ana, what is this email about?","Sarah no sabe de qué va tu email.",[("I'm writing about the invoice.",2,"Oh, the invoice. Thank you."),("The invoice.",1,"Okay. {I'm writing about the invoice}. Got it."),("Talk soon!",0,"Sorry? {What is this email about}?")]),
   T("Where is the invoice?","Sarah no encuentra la factura.",[("Please find the file attached.",2,"Found it. Thanks!"),("Attached.",1,"Oh, {the file is attached}. Thanks!"),("I'm on it.",0,"Hmm… {Where is the invoice}? I don't see it.")]),
   T("Thanks. I have one more thing.","Sarah añade que tiene otra cosa.",[("Let me know if you have any questions.",2,"Will do. Thanks, Ana!"),("Okay.",1,"Great. {Let me know} if you need anything."),("Best regards, Ana",0,"Oh, {I have one more thing}. Can I ask?")])]},
 {"id":"deadline","u":3,"title":"Asking about deadlines","art":"sun","setting":"Mark necesita un informe y tienes que acordar la fecha de entrega sin prometer más de lo que puedes.","who":"Mark","phrases":[
  P("m1","When is the deadline?","UEN-iz-dhə-DED-lain","Preguntas cuándo vence el plazo."),
  P("m2","I can send it by Friday.","ai-kən-SEND-it-bai-FRAI-dei","Prometes enviarlo antes del viernes."),
  P("m3","Is Thursday okay?","iz-THERZ-dei-ou-KEI","Propones el jueves y preguntas si le viene bien."),
  P("m4","It'll be ready tomorrow.","it-ul-bi-RE-di-tə-MA-rou","Dices que estará listo mañana."),
  P("m5","Sorry, I need one more day.","SA-ri, ai-NIID-uan-mor-DEI","Pides un día más, con educación.")],
  "turns":[
   T("I need the report this week.","Mark necesita el informe esta semana.",[("When is the deadline?",2,"Friday, at five."),("When?",1,"{When is the deadline}? Friday, at five."),("Talk soon!",0,"Hmm? {The report}, this week. Is that okay?")]),
   T("Friday at five. Can you do it?","Mark fija el viernes a las cinco.",[("I can send it by Friday.",2,"Great. Thank you."),("Yes.",1,"Good. {You can send it by Friday}. Thanks."),("Let me know if you have any questions.",0,"Um… {Can you do it}? Friday at five?")]),
   T("Actually, can you send it on Thursday?","Mark adelanta el plazo al jueves.",[("Sorry, I need one more day.",2,"No problem. Friday is fine."),("No.",1,"Oh. {I need one more day}? Okay, Friday."),("Hi, Mark. Quick question.",0,"Sure… {Thursday}, yes or no?")])]},
 {"id":"helpmsg","u":3,"title":"Asking for help","art":"sign","setting":"Una tarea nueva te supera. Emily, tu responsable, te pregunta cómo va. Es el momento de pedir ayuda sin rodeos.","who":"Emily","phrases":[
  P("n1","Could you help me with this?","kud-yu-HELP-mi-uid-DHIS","Pides ayuda con una tarea."),
  P("n2","I'm not sure how to do this.","aim-NAT-shur-jau-tə-DU-dhis","Dices que no sabes cómo hacerlo."),
  P("n3","Can you send me an example?","kən-yu-SEND-mi-ən-ig-ZÆM-pəl","Pides un ejemplo."),
  P("n4","That's really helpful, thank you.","DHÆTS-RII-li-HELP-fəl, THÆNK-yu","Agradeces la ayuda."),
  P("n5","I'll let you know how it goes.","ail-LET-yu-NOU-jau-it-GOUZ","Prometes avisar de cómo va.")],
  "turns":[
   T("How is the task going?","Emily pregunta cómo va la tarea.",[("I'm not sure how to do this. Could you help me with this?",2,"Of course. What's the problem?"),("Bad.",1,"Oh. {I'm not sure how to do this}? Let me help."),("Talk soon!",0,"Hmm… {how is the task going}? Is it okay?")]),
   T("I can show you. Do you want an example?","Emily se ofrece a enseñarte.",[("Yes. Can you send me an example?",2,"Sure. I'll send it now."),("Yes.",1,"Okay. {Can you send me an example}? Sure."),("Best regards, Ana",0,"Hmm… {Do you want an example}?")]),
   T("Here it is. Is it clear?","Emily te envía el ejemplo y pregunta si está claro.",[("That's really helpful, thank you. I'll let you know how it goes.",2,"Great. Good luck!"),("Okay.",1,"Good. {Let me know how it goes}."),("When is the deadline?",0,"Um… {Is it clear}? Please tell me.")])]},
 {"id":"polite","u":3,"title":"Writing politely","art":"wave","setting":"Sarah te escribe y las cosas se complican: hay un retraso, una petición imposible y un archivo en blanco. Con cortesía todo se arregla.","who":"Sarah","phrases":[
  P("o1","Thank you for your patience.","THÆNK-yu-fər-yor-PEI-shəns","Agradeces que te hayan esperado."),
  P("o2","Sorry for the delay.","SA-ri-fər-dhə-di-LEI","Pides perdón por el retraso."),
  P("o3","I'm afraid I can't do that.","aim-ə-FREID-ai-KÆNT-du-DHÆT","Rechazas algo con cortesía."),
  P("o4","Would you mind sending it again?","uud-yu-MAIND-SEN-ding-it-ə-GEN","Pides con mucha cortesía que lo envíen otra vez."),
  P("o5","I really appreciate it.","ai-RII-li-ə-PRII-shi-eit-it","Agradeces con calidez.")],
  "turns":[
   T("Hi Ana. I'm still waiting for the file.","Sarah sigue esperando un archivo.",[("Sorry for the delay. I'll send it today.",2,"No problem. Thanks."),("Sorry.",1,"It's okay. {Sorry for the delay}, but please send it."),("I really appreciate it.",0,"Hmm… {I'm still waiting}. When can you send it?")]),
   T("Can you also join a call tonight?","Sarah pide que te unas a una llamada esta noche.",[("I'm afraid I can't do that. Is tomorrow okay?",2,"Of course. Tomorrow is fine."),("No.",1,"Oh. {I'm afraid I can't}. Is tomorrow okay?"),("Thank you for your patience.",0,"Hmm… {tonight}. Can you join or not?")]),
   T("I sent you a file, but it's blank.","Sarah dice que te envió un archivo, pero está en blanco.",[("Would you mind sending it again? Thank you for your patience.",2,"Sure. Sending it again now."),("Again.",1,"Okay. {Would you mind sending it again}? Sure."),("Sorry for the delay.",0,"Hmm… {the file is blank}. Can you send it again?")])]},
]
U3_DAYS=[
 {"n":17,"t":"Mensajes cortos de chat","sc":"chatmsg","m":20,"goal":"Preguntar si alguien tiene un momento, confirmar que has entendido, decir que te ocupas y despedirte.","u":3,"k":1},
 {"n":18,"t":"Un email: saludo y cierre","sc":"email","m":20,"goal":"Abrir un email con un saludo, decir el motivo, avisar de un adjunto y cerrar con cortesía.","u":3,"k":2},
 {"n":19,"t":"Pedir y dar plazos","sc":"deadline","m":20,"goal":"Preguntar por una fecha límite, proponer otra y pedir más tiempo.","u":3,"k":3},
 {"n":20,"t":"Pedir ayuda por escrito","sc":"helpmsg","m":20,"goal":"Decir que no sabes cómo hacer algo, pedir un ejemplo y agradecer.","u":3,"k":4},
 {"n":21,"t":"Cortesía por escrito","sc":"polite","m":20,"goal":"Disculparte por un retraso, decir que no con educación y agradecer con calidez.","u":3,"k":5},
 {"n":22,"t":"Una jornada completa","sc":None,"m":20,"goal":"Unir el chat, el plazo, la ayuda y el email en una jornada de trabajo.","u":3,"k":6},
 {"n":23,"t":"Repaso y mini-prueba","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":3,"k":7},
 {"n":24,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa lo que ya puedes hacer.","u":3,"k":8},
]
U3_STORY={
 "17":[L("Mark","Hi, Ana. Do you have a minute?","Hola, Ana. ¿Tienes un minuto?"),L("Ana","Sure. Are you free for a quick call?","Claro. ¿Estás libre para una llamada rápida?"),L("Mark","Yes! Give me five minutes.","¡Sí! Dame cinco minutos."),L("Mark","Can you update the file today?","¿Puedes actualizar el archivo hoy?"),L("Ana","Got it, thanks! I'm on it.","¡Entendido, gracias! Me pongo con ello."),L("Mark","Thanks. Talk soon!","Gracias. ¡Hablamos pronto!")],
 "18":[L("Ana","Hi Sarah, I hope you're well.","Hola, Sarah. Espero que estés bien."),L("Ana","I'm writing about the invoice.","Te escribo por la factura."),L("Ana","Please find the file attached.","Adjunto el archivo."),L("Ana","Let me know if you have any questions.","Avísame si tienes alguna pregunta."),L("Ana","Best regards, Ana","Saludos cordiales, Ana"),L("Sarah","Thanks, Ana. Got it!","Gracias, Ana. ¡Recibido!")],
 "19":[L("Ana","When is the deadline?","¿Cuándo es la fecha límite?"),L("Mark","Wednesday at five.","El miércoles a las cinco."),L("Ana","Is Thursday okay?","¿Te viene bien el jueves?"),L("Mark","Thursday is too late.","El jueves es demasiado tarde."),L("Ana","It'll be ready tomorrow.","Estará listo mañana."),L("Mark","Great, thanks.","Genial, gracias.")],
 "20":[L("Ana","I'm not sure how to do this.","No estoy segura de cómo hacer esto."),L("Emily","No problem. Do you want an example?","Sin problema. ¿Quieres un ejemplo?"),L("Ana","Yes. Can you send me an example?","Sí. ¿Puedes enviarme un ejemplo?"),L("Emily","Sure. Here it is.","Claro. Aquí lo tienes."),L("Ana","That's really helpful, thank you.","Me ayuda mucho, gracias."),L("Ana","I'll let you know how it goes.","Te aviso de cómo va.")],
 "21":[L("Sarah","Hi Ana. I'm still waiting for the file.","Hola, Ana. Sigo esperando el archivo."),L("Ana","Sorry for the delay.","Perdona por el retraso."),L("Sarah","Can you join a call tonight?","¿Puedes unirte a una llamada esta noche?"),L("Ana","I'm afraid I can't do that.","Me temo que no puedo."),L("Sarah","No problem. Tomorrow is fine.","Sin problema. Mañana está bien."),L("Ana","I really appreciate it. Thank you for your patience.","Te lo agradezco mucho. Gracias por tu paciencia.")],
 "22":[L("Ana","Hi, Mark. Quick question.","Hola, Mark. Una pregunta rápida."),L("Mark","Sure. What is it?","Claro. ¿Cuál es?"),L("Ana","When is the deadline?","¿Cuándo es la fecha límite?"),L("Mark","Friday at five.","El viernes a las cinco."),L("Ana","I'm not sure how to do this. Could you help me with this?","No estoy segura de cómo hacer esto. ¿Podrías ayudarme?"),L("Mark","Of course. I'll send you an example.","Por supuesto. Te envío un ejemplo."),L("Ana","That's really helpful, thank you.","Me ayuda mucho, gracias."),L("Ana","Hi Sarah, I'm writing about the invoice. Please find the file attached.","Hola, Sarah. Te escribo por la factura. Adjunto el archivo."),L("Sarah","Thanks, Ana. I really appreciate it.","Gracias, Ana. Te lo agradezco mucho."),L("Ana","Let me know if you have any questions. Best regards, Ana","Avísame si tienes alguna pregunta. Saludos cordiales, Ana")],
}
U3_SOUNDS=[
 {"id":"s10","g":"-ed","rs":"t / d / id","t":"La terminación -ed","tip":"El pasado en -ed suena de tres maneras: t después de sonidos sordos (asked, worked), d después de sonidos con voz (called, played) y id cuando la palabra ya acaba en t o d (needed, wanted). No se dice «as-ked» con una e: cuenta como una sílaba más solo en el tercer caso.","words":["asked","worked","called","needed","wanted"]},
 {"id":"s11","g":"can / can't","rs":"kən / kænt","t":"Can y can't","tip":"Dentro de una frase, can es débil y casi desaparece (kən); can't se pronuncia fuerte y larga (KÆNT). En una llamada es la confusión más cara: escucha la vocal y el final.","words":["I can help","I can't help","you can send","you can't send"]},
]
U3_PIC=[
 ["Trabajo","deal","el trato","1F91D"],["Trabajo","coworker","el compañero de trabajo","1F9D1-200D-1F4BC"],["Trabajo","call","la llamada","1F4DE"],["Trabajo","date","la fecha","1F4C6"],["Trabajo","picture","la imagen","1F5BC"],
]
U3_PCATS=["Trabajo"]
U3_WS=[("let","dejar; let me know = avísame","Let me know if you have questions.","Avísame si tienes preguntas."),("got","obtuve; got it = entendido","Got it, thanks!","¡Entendido, gracias!"),("going","yendo; going to = ir a (futuro)","I'm going to send it today.","Voy a enviarlo hoy."),("something","algo","I need something from you.","Necesito algo de ti."),("anything","algo, cualquier cosa","Do you need anything else?","¿Necesitas algo más?"),("everything","todo","Everything is ready.","Todo está listo."),("nothing","nada","Nothing is wrong.","No pasa nada."),("someone","alguien","Someone sent me this file.","Alguien me envió este archivo."),("because","porque","I'm late because of the call.","Llego tarde por la llamada."),("should","debería","I should send it today.","Debería enviarlo hoy."),("always","siempre","I always check twice.","Siempre lo reviso dos veces."),("never","nunca","I never work at night.","Nunca trabajo de noche."),("stop","parar","Let's stop here for today.","Paremos aquí por hoy."),("leave","irse, salir; dejar","I leave work at five.","Salgo del trabajo a las cinco."),("lot","mucho (a lot = mucho)","Thanks a lot.","Muchas gracias."),("made","hizo, hice (pasado de make)","I made a mistake.","Cometí un error.")]
U3_GOALS=["Escribir un mensaje de chat corto: preguntar, confirmar y despedirte.","Escribir un email con saludo, motivo, adjunto y cierre.","Preguntar y negociar un plazo, y pedir más tiempo cuando lo necesitas.","Pedir ayuda y un ejemplo, y disculparte, rechazar o agradecer con cortesía."]
