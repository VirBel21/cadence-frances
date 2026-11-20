# Unidad 4 del curso de inglés: «Viajar y cuidarte» (vida diaria). Se carga desde build_en_course.py.
# Todo lo redacté yo (Claude); no ha pasado por revisión de un profesor nativo.
U4_SCENES=[
 {"id":"hotel","u":4,"title":"Checking in","art":"key","setting":"Llegas a Boston de noche, después del vuelo. En el mostrador del hotel, Maria te recibe con una sonrisa cansada.","who":"Maria","phrases":[
  P("ta1","I have a reservation.","ai-hæv-ə-rez-er-VEI-shən","Dices que tienes una reserva."),
  P("ta2","It's under Ruiz.","its-AN-der-RU-iz","Das el apellido con el que está la reserva."),
  P("ta3","I'm staying two nights.","aim-STEI-ing-TU-naits","Dices cuántas noches te quedas."),
  P("ta4","What time is checkout?","UAT-taim-iz-CHEK-aut","Preguntas a qué hora hay que dejar la habitación."),
  P("ta5","Is breakfast included?","iz-BREK-fəst-in-KLU-did","Preguntas si el desayuno está incluido.")],
  "turns":[
   T("Good evening! Welcome. Do you have a reservation?","María te da la bienvenida y pregunta si tienes reserva.",[("Yes. I have a reservation.",2,"Great. What's the name?"),("Yes.",1,"Okay. {I have a reservation}, under what name?"),("Is breakfast included?",0,"Hmm… {Do you have a reservation}?")]),
   T("What's the last name?","María pide el apellido de la reserva.",[("It's under Ruiz.",2,"Ruiz. Yes, I see it."),("Ruiz.",1,"Ruiz? {It's under Ruiz}. Yes, found it."),("What time is checkout?",0,"Sorry? {What's the last name}?")]),
   T("How many nights are you staying?","María pregunta cuántas noches te quedas.",[("I'm staying two nights.",2,"Perfect. Two nights."),("Two.",1,"{I'm staying two nights}. Okay, got it."),("I have a reservation.",0,"Yes, I know. {How many nights}?")])]},
 {"id":"taxi","u":4,"title":"Getting around","art":"sign","setting":"Necesitas llegar al centro. Ray, un taxista, guarda tu maleta en el maletero y arranca.","who":"Ray","phrases":[
  P("tb1","To the city center, please.","tə-dhə-SI-ti-SEN-ter, PLIIZ","Dices el destino."),
  P("tb2","How long does it take?","jau-LONG-daz-it-TEIK","Preguntas cuánto se tarda."),
  P("tb3","How much will it cost?","JAU-match-uil-it-KOST","Preguntas cuánto costará, más o menos."),
  P("tb4","Please stop here.","PLIIZ-STAP-JIIR","Pides que pare aquí."),
  P("tb5","Keep the change.","KIIP-dhə-CHEINJ","Dejas la vuelta de propina.")],
  "turns":[
   T("Hi! Where to?","Ray pregunta adónde vas.",[("To the city center, please.",2,"Sure thing."),("City center.",1,"{To the city center, please}? Sure."),("Keep the change.",0,"Not yet! {Where to}?")]),
   T("No problem. Traffic is heavy, though.","Ray avisa de que hay mucho tráfico.",[("How long does it take?",2,"About twenty minutes."),("Long?",1,"{How long does it take}? About twenty minutes."),("Please stop here.",0,"Not yet… {we're in traffic}.")]),
   T("We're almost there. Is here okay?","Ray pregunta si puede parar aquí.",[("Please stop here.",2,"Sure. That's twenty dollars."),("Yes.",1,"Okay. {Please stop here}? I'll stop."),("How much will it cost?",0,"Twenty dollars. {Is here okay}?")])]},
 {"id":"restaurant","u":4,"title":"At a restaurant","art":"wave","setting":"Cenas fuera. Kim, la camarera, te lleva a la mesa, y tú tienes una alergia que conviene avisar desde el principio.","who":"Kim","phrases":[
  P("tc1","A table for two, please.","ə-TEI-bəl-fər-TU, PLIIZ","Pides una mesa para dos."),
  P("tc2","I'm allergic to nuts.","aim-ə-LER-jik-tə-NATS","Avisas de tu alergia a los frutos secos."),
  P("tc3","Does this have nuts?","DAZ-dhis-hæv-NATS","Preguntas si un plato lleva frutos secos."),
  P("tc4","I'll have the chicken.","ail-hæv-dhə-CHI-kən","Pides el pollo."),
  P("tc5","Could we have the check, please?","kud-uii-hæv-dhə-CHEK, PLIIZ","Pides la cuenta.")],
  "turns":[
   T("Hi! How many?","Kim pregunta cuántas personas sois.",[("A table for two, please.",2,"Right this way."),("Two.",1,"{A table for two}. Right this way."),("Keep the change.",0,"Oh… {How many}? One? Two?")]),
   T("Do you have any allergies?","Kim pregunta si tienes alguna alergia.",[("I'm allergic to nuts.",2,"Thanks. I'll tell the kitchen."),("Yes.",1,"Oh. {What are you allergic to}?"),("I'll have the chicken.",0,"Okay, but first: {any allergies}?")]),
   T("Are you ready to order?","Kim pregunta si ya quieres pedir.",[("Does this have nuts? I'll have the chicken.",2,"No nuts. The chicken is safe."),("Chicken.",1,"{I'll have the chicken}. Great choice."),("Could we have the check, please?",0,"Already? {Are you ready to order}?")])]},
 {"id":"pharmacy","u":4,"title":"At the pharmacy","art":"key","setting":"Te duele la cabeza desde ayer. Entras en una farmacia y Paul, el farmacéutico, te pregunta qué necesitas.","who":"Paul","phrases":[
  P("td1","I don't feel well.","ai-dount-FIIL-UEL","Dices que no te encuentras bien."),
  P("td2","I have a headache.","ai-hæv-ə-HED-eik","Dices que te duele la cabeza."),
  P("td3","Do you have something for pain?","du-yu-hæv-SAM-thing-fər-PEIN","Preguntas si tienen algo para el dolor."),
  P("td4","How often should I take it?","JAU-O-fən-shud-ai-TEIK-it","Preguntas cada cuánto debes tomarlo."),
  P("td5","I'm allergic to penicillin.","aim-ə-LER-jik-tə-pe-ni-SI-lin","Avisas de una alergia a un medicamento.")],
  "turns":[
   T("Hi. How can I help you?","Paul te pregunta qué necesitas.",[("I don't feel well. I have a headache.",2,"I'm sorry to hear that."),("Headache.",1,"Oh, {you have a headache}. I'm sorry."),("A table for two, please.",0,"Sorry? {How can I help you}?")]),
   T("Do you have any allergies to medicine?","Paul pregunta si eres alérgica a algún medicamento.",[("I'm allergic to penicillin.",2,"Okay. This one is safe."),("No.",1,"Good. {No allergies}. This one is fine."),("Please stop here.",0,"Hmm… {Any allergies to medicine}?")]),
   T("This will help with the pain.","Paul te da una medicina para el dolor.",[("How often should I take it?",2,"Every six hours."),("Thanks.",1,"You're welcome. {How often should I take it}? Every six hours."),("Do you have something for pain?",0,"Yes, {this one}. It will help.")])]},
 {"id":"friends","u":4,"title":"Making friends","art":"wave","setting":"En un evento del barrio conoces a Jenna, que se sienta a tu lado y quiere charlar.","who":"Jenna","phrases":[
  P("te1","Do you live around here?","du-yu-LIV-ə-RAUND-JIIR","Preguntas si vive por la zona."),
  P("te2","I'm from Uruguay.","aim-frəm-YU-rə-gwai","Dices de dónde eres."),
  P("te3","What do you do?","uat-du-yu-DU","Preguntas a qué se dedica."),
  P("te4","Do you want to get coffee sometime?","du-yu-UANT-tə-get-KA-fi-SAM-taim","La invitas a tomar un café algún día."),
  P("te5","Let's keep in touch.","LETS-kiip-in-TACH","Propones seguir en contacto.")],
  "turns":[
   T("Hi! Are you new here?","Jenna te pregunta si eres nueva.",[("Yes. I'm from Uruguay.",2,"Oh, nice! Welcome."),("Yes.",1,"Welcome! {Where are you from}?"),("Let's keep in touch.",0,"Oh, we just met! {Are you new here}?")]),
   T("I love this neighborhood.","Jenna dice que le encanta el barrio.",[("Do you live around here?",2,"Yes! Just around the corner."),("Yes.",1,"Great! {Do you live around here}? I do."),("What do you do?",0,"Hmm… {this neighborhood}? It's great.")]),
   T("It was great to meet you!","Jenna se despide.",[("Let's keep in touch.",2,"Yes! Here's my number."),("Bye.",1,"Bye! {Let's keep in touch}."),("Do you live around here?",0,"Ha, {we talked about that}. Let's keep in touch!")])]},
]
U4_DAYS=[
 {"n":25,"t":"Llegar al hotel","sc":"hotel","m":20,"goal":"Decir que tienes una reserva, dar tu apellido y las noches, y preguntar por la salida y el desayuno.","u":4,"k":1},
 {"n":26,"t":"Taxis y transporte","sc":"taxi","m":20,"goal":"Decir el destino, preguntar cuánto se tarda y cuánto cuesta, y pedir que paren.","u":4,"k":2},
 {"n":27,"t":"Restaurante y alergias","sc":"restaurant","m":20,"goal":"Pedir mesa, avisar de una alergia, preguntar por un plato y pedir la cuenta.","u":4,"k":3},
 {"n":28,"t":"En la farmacia","sc":"pharmacy","m":20,"goal":"Decir cómo te sientes, pedir algo para el dolor y avisar de una alergia a un medicamento.","u":4,"k":4},
 {"n":29,"t":"Hacer amistades","sc":"friends","m":20,"goal":"Preguntar de dónde es o a qué se dedica alguien, decir de dónde eres y proponer un café.","u":4,"k":5},
 {"n":30,"t":"Un viaje completo","sc":None,"m":20,"goal":"Unir el taxi, el hotel, el restaurante y la farmacia en una sola llegada.","u":4,"k":6},
 {"n":31,"t":"Repaso y mini-prueba","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":4,"k":7},
 {"n":32,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa lo que ya puedes hacer.","u":4,"k":8},
]
U4_STORY={
 "25":[L("Maria","Good evening! Do you have a reservation?","¡Buenas noches! ¿Tiene una reserva?"),L("Ana","Yes. I have a reservation.","Sí. Tengo una reserva."),L("Maria","What's the last name?","¿Cuál es el apellido?"),L("Ana","It's under Ruiz. I'm staying two nights.","Está a nombre de Ruiz. Me quedo dos noches."),L("Maria","Perfect. Welcome!","Perfecto. ¡Bienvenida!"),L("Ana","Thank you. What time is checkout? Is breakfast included?","Gracias. ¿A qué hora es la salida? ¿El desayuno está incluido?")],
 "26":[L("Ray","Hi! Where to?","¡Hola! ¿Adónde?"),L("Ana","To the city center, please. How long does it take?","Al centro, por favor. ¿Cuánto se tarda?"),L("Ray","About twenty minutes.","Unos veinte minutos."),L("Ana","How much will it cost?","¿Cuánto costará?"),L("Ray","About twenty dollars.","Unos veinte dólares."),L("Ana","Please stop here. Keep the change.","Pare aquí, por favor. Quédese con la vuelta.")],
 "27":[L("Kim","Hi! How many?","¡Hola! ¿Cuántas personas?"),L("Ana","A table for two, please.","Una mesa para dos, por favor."),L("Kim","Do you have any allergies?","¿Tiene alguna alergia?"),L("Ana","I'm allergic to nuts. Does this have nuts?","Soy alérgica a los frutos secos. ¿Esto lleva frutos secos?"),L("Kim","No nuts. Are you ready to order?","Sin frutos secos. ¿Ya quiere pedir?"),L("Ana","I'll have the chicken, please.","Tomaré el pollo, por favor.")],
 "28":[L("Paul","Hi. How can I help you?","Hola. ¿En qué puedo ayudarla?"),L("Ana","I don't feel well. I have a headache.","No me encuentro bien. Me duele la cabeza."),L("Paul","Any allergies to medicine?","¿Alguna alergia a medicamentos?"),L("Ana","I'm allergic to penicillin.","Soy alérgica a la penicilina."),L("Paul","This will help with the pain.","Esto ayudará con el dolor."),L("Ana","How often should I take it?","¿Cada cuánto debo tomarlo?")],
 "29":[L("Jenna","Hi! Are you new here?","¡Hola! ¿Eres nueva por aquí?"),L("Ana","Yes. I'm from Uruguay.","Sí. Soy de Uruguay."),L("Jenna","Welcome! What do you do?","¡Bienvenida! ¿A qué te dedicas?"),L("Ana","I'm a lawyer. What do you do?","Soy abogada. ¿Y tú?"),L("Jenna","I'm a designer. Do you want to get coffee sometime?","Soy diseñadora. ¿Quieres tomar un café algún día?"),L("Ana","Yes! Let's keep in touch.","¡Sí! Sigamos en contacto.")],
 "30":[L("Ray","Hi! Where to?","¡Hola! ¿Adónde?"),L("Ana","To the city center, please.","Al centro, por favor."),L("Ray","About twenty minutes.","Unos veinte minutos."),L("Ana","Please stop here. Keep the change.","Pare aquí, por favor. Quédese con la vuelta."),L("Maria","Good evening! Do you have a reservation?","¡Buenas noches! ¿Tiene una reserva?"),L("Ana","Yes. It's under Ruiz. I'm staying two nights.","Sí. Está a nombre de Ruiz. Me quedo dos noches."),L("Kim","Hi! How many?","¡Hola! ¿Cuántas personas?"),L("Ana","A table for two, please. I'm allergic to nuts.","Una mesa para dos, por favor. Soy alérgica a los frutos secos."),L("Paul","Hi. How can I help you?","Hola. ¿En qué puedo ayudarla?"),L("Ana","I don't feel well. Do you have something for pain?","No me encuentro bien. ¿Tienen algo para el dolor?")],
}
U4_SOUNDS=[
 {"id":"s12","g":"13/30","rs":"THER-TIIN / THER-di","t":"Thirteen y thirty","tip":"Los números que acaban en -teen y los que acaban en -ty suenan casi igual. La diferencia está en el acento: thirTEEN lleva la fuerza al final y se alarga (13); THIRty la lleva al principio y termina corto (30). Con precios y horas, escucha dónde cae la fuerza.","words":["thirteen","thirty","fourteen","forty","fifteen","fifty"]},
]
U4_PIC=[
 ["Comida","chicken","el pollo","1F357"],["Comida","plate","el plato","1F37D"],["Comida","restaurant","el restaurante","1F374"],["Comida","cook","el cocinero","1F9D1-200D-1F373"],
 ["Ciudad","city","la ciudad","1F3D9"],["Ciudad","compass","la brújula","1F9ED"],
 ["Vida","medicine","la medicina","1F48A"],["Vida","family","la familia","1F468-200D-1F469-200D-1F467"],
]
U4_WS=[("night","noche","One night, please.","Una noche, por favor."),("place","lugar","Is this place open?","¿Este lugar está abierto?"),("long","largo; mucho tiempo","How long is the flight?","¿Cuánto dura el vuelo?"),("feel","sentir(se)","I don't feel well.","No me siento bien."),("care","cuidado; take care = cuídate","Take care!","¡Cuídate!"),("stay","quedarse, alojarse","I'm going to stay two nights.","Me voy a quedar dos noches."),("wrong","equivocado; mal","Something is wrong.","Algo va mal."),("better","mejor","I feel better today.","Hoy me siento mejor."),("kind","tipo; amable","What kind of food is it?","¿Qué tipo de comida es?"),("house","casa","My house is near here.","Mi casa está cerca de aquí."),("car","coche","I need a car for two days.","Necesito un coche dos días."),("people","gente","There are a lot of people.","Hay mucha gente."),("old","viejo; de edad","How old is this building?","¿Cuántos años tiene este edificio?"),("around","alrededor; por aquí","Is there a pharmacy around here?","¿Hay una farmacia por aquí cerca?")]
U4_GOALS=["Registrarte en un hotel y preguntar por la salida y el desayuno.","Moverte en taxi: decir el destino, preguntar duración y precio, y pedir que paren.","Pedir en un restaurante avisando de tus alergias, y pedir la cuenta.","Explicar cómo te sientes en una farmacia y hacer amistades."]
