# Unidad 6 del curso de inglés: «Entrevistas y clientes» (trabajo). Se carga desde build_en_course.py.
# Todo lo redacté yo (Claude); no ha pasado por revisión de un profesor nativo.
U6_SCENES=[
 {"id":"experience","u":6,"title":"Talking about your experience","art":"key","setting":"Estás en una entrevista por videollamada. Rachel, de recursos humanos, te pide que cuentes quién eres y qué sabes hacer.","who":"Rachel","phrases":[
  P("wa1","I have five years of experience.","ai-hæv-FAIV-yirz-əv-ik-SPIR-i-əns","Dices cuántos años de experiencia tienes."),
  P("wa2","I'm a lawyer and a notary.","aim-ə-LOI-yer-ənd-ə-NOU-tə-ri","Dices tu profesión."),
  P("wa3","I work with clients around the world.","ai-UERK-uid-KLAI-ənts-ə-RAUND-dhə-UERLD","Cuentas que trabajas con clientes de todo el mundo."),
  P("wa4","I'm very organized.","aim-VE-ri-OR-gə-naizd","Dices que eres muy organizada."),
  P("wa5","I learn fast.","ai-LERN-FÆST","Dices que aprendes rápido.")],
  "turns":[
   T("Thanks for joining. Tell me about yourself.","Rachel te da las gracias y te pide que te presentes.",[("I'm a lawyer and a notary.",2,"Interesting. How long have you worked?"),("Lawyer.",1,"{I'm a lawyer and a notary}. Interesting."),("I learn fast.",0,"Hmm… first, {tell me about yourself}.")]),
   T("How much experience do you have?","Rachel pregunta cuánta experiencia tienes.",[("I have five years of experience.",2,"Great."),("Five.",1,"{I have five years of experience}. Great."),("I'm very organized.",0,"Okay, but {how much experience}?")]),
   T("What are your strengths?","Rachel pregunta cuáles son tus puntos fuertes.",[("I'm very organized. I learn fast.",2,"Those are great strengths."),("Good.",1,"Hmm. {I'm very organized}, for example?"),("Keep the change.",0,"Sorry? {What are your strengths}?")])]},
 {"id":"interview","u":6,"title":"Common interview questions","art":"sun","setting":"Dan, el responsable del puesto, te hace las preguntas de siempre: por qué este trabajo, por qué tú y cuándo puedes empezar.","who":"Dan","phrases":[
  P("wb1","I'm interested in this role.","aim-IN-trə-stəd-in-dhis-ROUL","Dices que te interesa el puesto."),
  P("wb2","I think I'm a good fit.","ai-THINK-aim-ə-GUD-FIT","Dices que encajas bien en el puesto."),
  P("wb3","I'm available to start in January.","aim-ə-VEI-lə-bəl-tə-START-in-JÆN-yu-e-ri","Dices cuándo puedes empezar."),
  P("wb4","Can I ask a question?","kən-ai-ÆSK-ə-KUES-chən","Pides permiso para preguntar."),
  P("wb5","Thank you for your time.","THÆNK-yu-fər-yor-TAIM","Agradeces que te hayan dedicado su tiempo.")],
  "turns":[
   T("Why do you want this job?","Dan pregunta por qué quieres este trabajo.",[("I'm interested in this role.",2,"Good. Why?"),("Money.",1,"Hmm… {I'm interested in this role}. Why?"),("Thank you for your time.",0,"Not yet! {Why do you want this job}?")]),
   T("Why should we hire you?","Dan pregunta por qué deberían contratarte.",[("I think I'm a good fit.",2,"Tell me more."),("Because.",1,"{I think I'm a good fit}. Tell me more."),("Can I ask a question?",0,"Sure, after. {Why should we hire you}?")]),
   T("When can you start?","Dan pregunta cuándo puedes empezar.",[("I'm available to start in January.",2,"Great. January works."),("Now.",1,"{I'm available to start in January}? Okay."),("I think I'm a good fit.",0,"Yes, but {when can you start}?")])]},
 {"id":"rates","u":6,"title":"Talking about rates","art":"sign","setting":"Un cliente, Tom, quiere contratarte para un proyecto y pregunta por tus tarifas y por cómo se paga.","who":"Tom","phrases":[
  P("wc1","My rate is twenty dollars an hour.","mai-REIT-iz-TUEN-ti-DA-lerz-ən-AU-er","Dices tu tarifa por hora."),
  P("wc2","That includes two revisions.","dhæt-in-KLUDZ-tu-ri-VI-zhəns","Dices que incluye dos revisiones."),
  P("wc3","I need a deposit first.","ai-NIID-ə-di-PA-zət-FERST","Pides un anticipo antes de empezar."),
  P("wc4","Payment is due in fifteen days.","PEI-mənt-iz-DU-in-fif-TIIN-DEIZ","Dices que el pago vence en quince días."),
  P("wc5","I can send you a quote.","ai-kən-SEND-yu-ə-KUOUT","Ofreces enviar un presupuesto.")],
  "turns":[
   T("What are your rates?","Tom pregunta cuáles son tus tarifas.",[("My rate is twenty dollars an hour.",2,"Okay. That's fair."),("Cheap.",1,"{My rate is twenty dollars an hour}. Okay."),("Thank you for your time.",0,"Hmm… {What are your rates}?")]),
   T("Does that include changes?","Tom pregunta si incluye cambios.",[("That includes two revisions.",2,"Good. Two revisions."),("Yes.",1,"Okay. {That includes two revisions}."),("I can send you a quote.",0,"A quote later. {Does that include changes}?")]),
   T("How does payment work?","Tom pregunta cómo funciona el pago.",[("I need a deposit first. Payment is due in fifteen days.",2,"Fine. That works for us."),("Later.",1,"{Payment is due in fifteen days}. Okay."),("My rate is twenty dollars an hour.",0,"Yes, but {how does payment work}?")])]},
 {"id":"agreement","u":6,"title":"Closing a deal","art":"key","setting":"Tom acepta tu propuesta. Quedan los últimos detalles antes de empezar.","who":"Tom","phrases":[
  P("wd1","We have a deal.","uii-hæv-ə-DIIL","Cierras el trato."),
  P("wd2","Let me confirm the details.","LET-mi-kən-FERM-dhə-DII-teilz","Dices que vas a confirmar los detalles."),
  P("wd3","I'll send the contract today.","ail-SEND-dhə-KAN-trækt-tə-DEI","Prometes enviar el contrato hoy."),
  P("wd4","When do we start?","UEN-du-uii-START","Preguntas cuándo empezáis."),
  P("wd5","I'm looking forward to it.","aim-LU-king-FOR-uərd-tu-IT","Dices que tienes ganas de empezar.")],
  "turns":[
   T("Okay, your proposal looks good.","Tom dice que tu propuesta le parece bien.",[("Great. We have a deal.",2,"Yes! Deal."),("Okay.",1,"Good. {We have a deal}?"),("I think I'm a good fit.",0,"Thanks. But {the proposal}… yes, it looks good.")]),
   T("Can you send me the details?","Tom pide que le envíes los detalles.",[("Let me confirm the details. I'll send the contract today.",2,"Perfect."),("Yes.",1,"Great. {I'll send the contract today}."),("I need a deposit first.",0,"Yes, later. {Can you send me the details}?")]),
   T("Great. We can start Monday.","Tom propone empezar el lunes.",[("I'm looking forward to it.",2,"Me too."),("Okay.",1,"Good. {I'm looking forward to it}."),("Payment is due in fifteen days.",0,"Yes, I know. {We can start Monday}.")])]},
 {"id":"followup","u":6,"title":"Following up","art":"wave","setting":"Terminada la entrevista, escribes a Rachel para dar las gracias y preguntar cómo va el proceso.","who":"Rachel","phrases":[
  P("we1","Thank you for the opportunity.","THÆNK-yu-fər-dhi-a-pər-TU-nə-ti","Agradeces la oportunidad."),
  P("we2","I enjoyed our conversation.","ai-en-JOID-aur-kan-vər-SEI-shən","Dices que disfrutaste la conversación."),
  P("we3","I wanted to follow up.","ai-UAN-təd-tə-FA-lou-AP","Dices que escribes para hacer seguimiento."),
  P("we4","Do you have any updates?","du-yu-hæv-e-ni-AP-deits","Preguntas si hay novedades."),
  P("we5","I look forward to hearing from you.","ai-LUK-FOR-uərd-tə-HIR-ing-frəm-YU","Te despides esperando su respuesta.")],
  "turns":[
   T("Hi Ana. Thanks for your email.","Rachel agradece tu email.",[("I wanted to follow up.",2,"Of course."),("Hi.",1,"Hello! {I wanted to follow up}, right?"),("We have a deal.",0,"Hmm… {Thanks for your email}.")]),
   T("We're still reviewing candidates.","Rachel dice que aún están evaluando candidatos.",[("Do you have any updates?",2,"Not yet, sorry."),("Okay.",1,"Thanks. {Do you have any updates}? Not yet."),("I enjoyed our conversation.",0,"Thank you. {We're still reviewing}.")]),
   T("We'll contact you next week.","Rachel dice que te contactarán la semana que viene.",[("Thank you for the opportunity. I look forward to hearing from you.",2,"You're welcome. Talk soon."),("Okay.",1,"Great. {I look forward to hearing from you}."),("We have a deal.",0,"Not yet! {We'll contact you next week}.")])]},
]
U6_DAYS=[
 {"n":41,"t":"Hablar de tu experiencia","sc":"experience","m":20,"goal":"Presentarte, decir tu profesión, tus años de experiencia y tus puntos fuertes.","u":6,"k":1},
 {"n":42,"t":"Preguntas de entrevista","sc":"interview","m":20,"goal":"Responder por qué este puesto, por qué tú y cuándo puedes empezar.","u":6,"k":2},
 {"n":43,"t":"Tarifas y condiciones","sc":"rates","m":20,"goal":"Decir tu tarifa, qué incluye, pedir un anticipo y fijar el plazo de pago.","u":6,"k":3},
 {"n":44,"t":"Cerrar un acuerdo","sc":"agreement","m":20,"goal":"Cerrar un trato, confirmar detalles y prometer el contrato.","u":6,"k":4},
 {"n":45,"t":"Dar seguimiento","sc":"followup","m":20,"goal":"Agradecer, hacer seguimiento y preguntar por novedades con cortesía.","u":6,"k":5},
 {"n":46,"t":"Una jornada completa","sc":None,"m":20,"goal":"Unir la entrevista, la tarifa, el acuerdo y el seguimiento en una jornada.","u":6,"k":6},
 {"n":47,"t":"Repaso y prueba final","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":6,"k":7},
 {"n":48,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa todo lo que ya puedes hacer.","u":6,"k":8},
]
U6_STORY={
 "41":[L("Rachel","Thanks for joining. Tell me about yourself.","Gracias por unirte. Cuéntame sobre ti."),L("Ana","I'm a lawyer and a notary. I work with clients around the world.","Soy abogada y notaria. Trabajo con clientes de todo el mundo."),L("Rachel","How much experience do you have?","¿Cuánta experiencia tienes?"),L("Ana","I have five years of experience.","Tengo cinco años de experiencia."),L("Rachel","What are your strengths?","¿Cuáles son tus puntos fuertes?"),L("Ana","I'm very organized. I learn fast.","Soy muy organizada. Aprendo rápido.")],
 "42":[L("Dan","Why do you want this job?","¿Por qué quieres este trabajo?"),L("Ana","I'm interested in this role.","Me interesa este puesto."),L("Dan","Why should we hire you?","¿Por qué deberíamos contratarte?"),L("Ana","I think I'm a good fit.","Creo que encajo bien."),L("Dan","When can you start?","¿Cuándo puedes empezar?"),L("Ana","I'm available to start in January. Thank you for your time.","Puedo empezar en enero. Gracias por su tiempo.")],
 "43":[L("Tom","What are your rates?","¿Cuáles son tus tarifas?"),L("Ana","My rate is twenty dollars an hour.","Mi tarifa es de veinte dólares la hora."),L("Tom","Does that include changes?","¿Eso incluye cambios?"),L("Ana","That includes two revisions.","Incluye dos revisiones."),L("Tom","How does payment work?","¿Cómo funciona el pago?"),L("Ana","I need a deposit first. Payment is due in fifteen days.","Necesito un anticipo primero. El pago vence en quince días.")],
 "44":[L("Tom","Your proposal looks good.","Tu propuesta me parece bien."),L("Ana","Great. We have a deal.","Genial. Tenemos un trato."),L("Tom","Can you send me the details?","¿Puedes enviarme los detalles?"),L("Ana","Let me confirm the details. I'll send the contract today.","Déjame confirmar los detalles. Hoy envío el contrato."),L("Tom","We can start Monday.","Podemos empezar el lunes."),L("Ana","I'm looking forward to it.","Tengo muchas ganas.")],
 "45":[L("Rachel","Hi Ana. Thanks for your email.","Hola, Ana. Gracias por tu email."),L("Ana","I wanted to follow up. I enjoyed our conversation.","Quería hacer seguimiento. Disfruté nuestra conversación."),L("Rachel","We're still reviewing candidates.","Seguimos evaluando candidatos."),L("Ana","Do you have any updates?","¿Hay novedades?"),L("Rachel","We'll contact you next week.","Te contactaremos la semana que viene."),L("Ana","Thank you for the opportunity. I look forward to hearing from you.","Gracias por la oportunidad. Espero tener noticias tuyas.")],
 "46":[L("Rachel","Tell me about yourself.","Cuéntame sobre ti."),L("Ana","I'm a lawyer and a notary. I have five years of experience.","Soy abogada y notaria. Tengo cinco años de experiencia."),L("Dan","Why should we hire you?","¿Por qué deberíamos contratarte?"),L("Ana","I think I'm a good fit.","Creo que encajo bien."),L("Tom","What are your rates?","¿Cuáles son tus tarifas?"),L("Ana","My rate is twenty dollars an hour.","Mi tarifa es de veinte dólares la hora."),L("Tom","Your proposal looks good.","Tu propuesta me parece bien."),L("Ana","Great. We have a deal. I'm looking forward to it.","Genial. Tenemos un trato. Tengo muchas ganas."),L("Rachel","Thanks for your email.","Gracias por tu email."),L("Ana","Thank you for the opportunity. I look forward to hearing from you.","Gracias por la oportunidad. Espero tener noticias tuyas.")],
}
U6_SOUNDS=[
 {"id":"s14","g":"↗ ↘","rs":"sube / baja","t":"La entonación de las preguntas","tip":"En las preguntas de sí o no, la voz sube al final (Do you have a minute? ↗). En las que empiezan por who, what, when, where, why o how, la voz suele bajar (What are your rates? ↘). Copia la melodía, no solo las palabras: es lo que hace que una pregunta suene natural y cortés.","words":["Do you have a minute?","What are your rates?","Can you start Monday?","When can you start?"]},
]
U6_PIC=[
 ["Vida","dog","el perro","1F436"],["Vida","cat","el gato","1F431"],["Vida","party","la fiesta","1F389"],["Trabajo","greeting","el saludo","1F44B"],
]
U6_WS=[("years","años","I have five years of experience.","Tengo cinco años de experiencia."),("love","amar; encantar","I love my work.","Me encanta mi trabajo."),("believe","creer","I believe I can help.","Creo que puedo ayudar."),("ever","alguna vez","Have you ever worked remotely?","¿Has trabajado alguna vez en remoto?"),("own","propio","I have my own business.","Tengo mi propio negocio."),("world","mundo","I work with clients around the world.","Trabajo con clientes de todo el mundo."),("through","a través de; por","We work through email.","Trabajamos por email."),("thought","pensé; pensamiento","I thought about it.","Lo he pensado."),("life","vida","It makes life easier.","Hace la vida más fácil."),("well","bien","I work well with others.","Trabajo bien con otros."),("from","de (origen)","I'm from Uruguay.","Soy de Uruguay.")]
U6_GOALS=["Presentarte en una entrevista: profesión, experiencia y puntos fuertes.","Responder las preguntas típicas: por qué este puesto, por qué tú y cuándo empiezas.","Hablar de tarifas, qué incluyen y cómo se paga.","Cerrar un acuerdo y hacer seguimiento con cortesía."]
