# Unidad 2 del curso de inglés: «Pedir y comprar» (vida diaria). Se carga desde build_en_course.py.
# Todo lo redacté yo (Claude); no ha pasado por revisión de un profesor nativo.
U2_SCENES=[
 {"id":"coffee","u":2,"title":"Ordering a coffee","art":"sun","setting":"Es tu primera mañana en Boston. Entras en una cafetería y Sam, el barista, te sonríe desde detrás del mostrador.","who":"Sam","phrases":[
  P("f1","Hi. Can I have a coffee, please?","JAI, kən-ai-HÆV-ə-KA-fi, PLIIZ","Pides un café con educación."),
  P("f2","I'd like a large coffee with milk.","aid-LAIK-ə-LARJ, KA-fi-wid-MILK","Dices justo lo que quieres: un café grande con leche."),
  P("f3","To go, please.","tə-GOU, PLIIZ","Te preguntan si lo tomas aquí o te lo llevas, y contestas que para llevar."),
  P("f4","And a bagel, please.","ən-ə-BEI-gəl, PLIIZ","Añades un bagel al pedido."),
  P("f5","That's all, thank you.","DHÆTS-OL, THÆNK-yu","Cierras el pedido: eso es todo.")],
  "turns":[
   T("Good morning! What can I get you?","Sam te saluda y pregunta qué quieres.",[("Good morning. Can I have a coffee, please?",2,"Sure. Coming right up."),("Coffee.",1,"Sure! {Can I have a coffee, please}? What size?"),("That's all, thank you.",0,"Oh… {What can I get you}? A coffee? A tea?")]),
   T("Small, medium or large? Milk?","Te pregunta el tamaño y si lo quieres con leche.",[("I'd like a large coffee with milk.",2,"Perfect. One large coffee with milk."),("Large.",1,"Large, with milk? {A large coffee with milk}. Got it."),("To go, please.",0,"Okay, but {what size}? Small, medium or large?")]),
   T("Anything else?","Sam pregunta si quieres algo más.",[("That's all, thank you.",2,"Great. For here or to go?"),("No.",1,"{That's all}? Okay. For here or to go?"),("I'd like a large coffee with milk.",0,"Okay, got it. {Anything else}? A bagel, maybe?")])]},
 {"id":"shop","u":2,"title":"Asking the price","art":"key","setting":"Entras en una tienda de recuerdos. Has visto una bufanda que te gusta y Dana atiende en la caja.","who":"Dana","phrases":[
  P("g1","How much is this?","jau-MACH-iz-DHIS","Señalas algo y preguntas cuánto cuesta."),
  P("g2","Do you have this in blue?","du-yu-HÆV-dhis-in-BLU","Preguntas si lo tienen en otro color: azul."),
  P("g3","I'll take it.","ail-TEIK-it","Decides comprarlo."),
  P("g4","Do you take cards?","du-yu-TEIK-KARDZ","Preguntas si aceptan tarjeta."),
  P("g5","Could I have a receipt, please?","kud-ai-HÆV-ə-ri-SIIT, PLIIZ","Pides el recibo.")],
  "turns":[
   T("Hi! Can I help you find anything?","Dana te pregunta si buscas algo. Has visto una bufanda.",[("Yes. How much is this?",2,"That one is twenty dollars."),("This.",1,"The scarf? {How much is this}? It's twenty dollars."),("To go, please.",0,"Oh… {Can I help you}? Are you looking for something?")]),
   T("It's twenty dollars. It comes in gray and blue.","Te dice el precio y que hay en gris y en azul.",[("Do you have this in blue?",2,"Yes, here you go."),("Blue.",1,"{Do you have this in blue}? Yes, here it is."),("That's all, thank you.",0,"Hmm… {gray or blue}? Which one?")]),
   T("Okay! Are you ready to check out?","Dana pregunta si quieres pagar.",[("Yes. I'll take it. Do you take cards?",2,"Of course. Card is fine."),("Yes.",1,"Great. {Do you take cards}? Yes, we do. Twenty dollars."),("How much is this?",0,"It's {twenty dollars}. Do you want it?")])]},
 {"id":"street","u":2,"title":"Asking for directions","art":"sign","setting":"Estás en una esquina de Boston y no encuentras el metro. Chris, un hombre amable, espera el semáforo a tu lado.","who":"Chris","phrases":[
  P("h1","Excuse me. Where is the subway station?","ik-SKIUZ-mi, WER-iz-dhə-SAB-wei-STEI-shən","Paras a alguien y preguntas dónde está la estación de metro."),
  P("h2","Is it far from here?","iz-it-FAR-frəm-JIIR","Preguntas si queda lejos."),
  P("h3","Go straight, then turn left.","GOU-STREIT, dhen-TERN-LEFT","Repites la indicación para comprobarla: sigue recto y luego gira a la izquierda."),
  P("h4","Can I walk there?","kən-ai-UOK-DHER","Preguntas si puedes ir andando."),
  P("h5","Thank you so much. Have a nice day!","THÆNK-yu-sou-MACH, hæv-ə-NAIS-DEI","Agradeces con calidez y te despides.")],
  "turns":[
   T("Hi! Can I help you?","Un hombre te ve mirando el móvil y se ofrece a ayudar.",[("Excuse me. Where is the subway station?",2,"Sure. It's close."),("Subway?",1,"The subway station? {Where is the subway station}? It's close."),("I'll take it.",0,"Sorry? {Where are you going}? Maybe I can help.")]),
   T("It's two blocks from here. Go straight, then turn left.","Te explica el camino: dos manzanas, recto y luego a la izquierda.",[("Go straight, then turn left?",2,"Yes, exactly. Then you'll see it."),("Left?",1,"Yes, {turn left}. First, go straight."),("Do you take cards?",0,"Cards? Hmm… {It's two blocks}. Straight, then left.")]),
   T("You can walk there. It's five minutes.","Te dice que se va andando, cinco minutos.",[("Thank you so much. Have a nice day!",2,"You too! Enjoy Boston."),("Thanks.",1,"You're welcome. {Have a nice day}!"),("Is it far from here?",0,"No, no. {Five minutes}. Not far.")])]},
 {"id":"chat","u":2,"title":"Small talk","art":"wave","setting":"En el ascensor de tu edificio coincides con tu vecina Linda. Hace frío y ella empieza una charla corta.","who":"Linda","phrases":[
  P("i1","Good morning! How are you?","gud-MOR-ning, JAU-ar-YU","Saludas a tu vecina y preguntas cómo está."),
  P("i2","I'm fine, thanks. And you?","aim-FAIN, THÆNKS, ən-YU","Dices que estás bien y devuelves la pregunta."),
  P("i3","It's really cold today.","its-RII-li-KOULD-tə-DEI","Comentas el tiempo: hace mucho frío hoy."),
  P("i4","I'm going to the market.","aim-GOU-ing-tə-dhə-MAR-kət","Cuentas adónde vas: al mercado."),
  P("i5","Have a good weekend!","hæv-ə-GUD-UIK-end","Te despides deseando buen fin de semana.")],
  "turns":[
   T("Good morning, Ana! How are you?","Linda te saluda en el ascensor.",[("Good morning! I'm fine, thanks. And you?",2,"I'm good, thanks."),("Fine.",1,"Good! {How are you}? I'm fine too."),("Where is the subway station?",0,"Oh… {How are you}, Ana? Are you okay?")]),
   T("Brr. It's so cold today!","Linda comenta el frío.",[("Yes, it's really cold today.",2,"I know! I need a coffee."),("Yes.",1,"{It's really cold}, right? I need a coffee."),("I'll take it.",0,"Sorry? {It's cold today}. Don't you think?")]),
   T("Where are you going?","Linda te pregunta adónde vas.",[("I'm going to the market.",2,"Nice. Have fun!"),("Market.",1,"Oh, {you're going to the market}. Nice!"),("Do you have this in blue?",0,"Hmm? {Where are you going}, Ana?")])]},
 {"id":"mistake","u":2,"title":"When something is wrong","art":"key","setting":"Estás en un restaurante. Joe, el camarero, te trae un plato, pero no es lo que pediste.","who":"Joe","phrases":[
  P("j1","Excuse me. I ordered the salad.","ik-SKIUZ-mi, ai-OR-derd-dhə-SÆ-ləd","Avisas al camarero de que pediste otra cosa: la ensalada."),
  P("j2","This is not what I ordered.","DHIS-iz-not-UAT-ai-OR-derd","Dices con claridad que ese plato no es el que pediste."),
  P("j3","I think there's a mistake.","ai-THINK, dhers-ə-mi-STEIK","Señalas un error sin acusar a nadie."),
  P("j4","Could you check, please?","kud-yu-CHEK, PLIIZ","Pides que lo comprueben."),
  P("j5","No problem. Thank you for your help.","nou-PRA-bləm, THÆNK-yu-fər-yor-HELP","Cierras el asunto con calma y agradeces.")],
  "turns":[
   T("Here you go. The chicken!","Joe te trae un pollo, pero tú pediste una ensalada.",[("Excuse me. I ordered the salad.",2,"Oh, I'm sorry. The salad. One moment."),("Salad.",1,"The salad? {I ordered the salad}. I'm sorry."),("Have a good weekend!",0,"Thanks! But… {the chicken}. Is this okay?")]),
   T("Are you sure? I think it's the chicken.","Joe duda: cree que pediste pollo.",[("I think there's a mistake. Could you check, please?",2,"Of course. Let me check."),("No.",1,"Hmm… {I think there's a mistake}? Let me check."),("It's really cold today.",0,"Cold? Um… {The chicken}, or the salad?")]),
   T("You're right. Sorry about that! The salad is coming.","Joe reconoce el error.",[("No problem. Thank you for your help.",2,"Thank you for your patience!"),("Okay.",1,"Thanks! {No problem}. It's coming."),("Do you take cards?",0,"Cards? Later. {The salad is coming}.")])]},
]
U2_DAYS=[ {"n":9,"t":"Pedir un café","sc":"coffee","m":20,"goal":"Pedir un café, decir el tamaño y si lo quieres con leche, y cerrar el pedido.","u":2,"k":1},
 {"n":10,"t":"Precios y pagar","sc":"shop","m":20,"goal":"Preguntar cuánto cuesta algo, pedir otro color, decidir comprarlo y pedir el recibo.","u":2,"k":2},
 {"n":11,"t":"Pedir indicaciones","sc":"street","m":20,"goal":"Preguntar por un lugar, repetir las indicaciones para comprobarlas y dar las gracias.","u":2,"k":3},
 {"n":12,"t":"Charla de ascensor","sc":"chat","m":20,"goal":"Saludar a un vecino, comentar el tiempo, contar adónde vas y despedirte.","u":2,"k":4},
 {"n":13,"t":"Cuando algo sale mal","sc":"mistake","m":20,"goal":"Avisar con educación de que te han traído otra cosa y pedir que lo comprueben.","u":2,"k":5},
 {"n":14,"t":"Una mañana completa","sc":None,"m":20,"goal":"Unir el café, la tienda y la calle en una sola mañana.","u":2,"k":6},
 {"n":15,"t":"Repaso y mini-prueba","kind":"test","m":15,"goal":"Comprobar qué has fijado: ocho frases que escuchas y reconoces.","u":2,"k":7},
 {"n":16,"t":"Descanso y balance","kind":"rest","m":10,"goal":"Sin lecciones nuevas. Revisa lo que ya puedes hacer.","u":2,"k":8},
]
U2_STORY={
 "9":[L("Sam","Good morning! What can I get you?","¡Buenos días! ¿Qué te pongo?"),L("Ana","Hi. Can I have a coffee, please?","Hola. ¿Me pone un café, por favor?"),L("Sam","Sure. Small, medium or large?","Claro. ¿Pequeño, mediano o grande?"),L("Ana","I'd like a large coffee with milk.","Quisiera un café grande con leche."),L("Sam","Anything else? For here or to go?","¿Algo más? ¿Para tomar aquí o para llevar?"),L("Ana","And a bagel, please. To go. That's all, thank you.","Y un bagel, por favor. Para llevar. Eso es todo, gracias.")],
 "10":[L("Dana","Hi! Can I help you find anything?","¡Hola! ¿Te ayudo a encontrar algo?"),L("Ana","Yes. How much is this?","Sí. ¿Cuánto cuesta esto?"),L("Dana","It's twenty dollars. It comes in gray and blue.","Son veinte dólares. Viene en gris y azul."),L("Ana","Do you have this in blue?","¿Lo tienen en azul?"),L("Dana","Yes, here you go.","Sí, aquí tienes."),L("Ana","I'll take it. Could I have a receipt, please?","Me lo llevo. ¿Me da el recibo, por favor?")],
 "11":[L("Ana","Excuse me. Where is the subway station?","Perdone. ¿Dónde está la estación de metro?"),L("Chris","Go straight, then turn left. It's two blocks.","Siga recto y luego gire a la izquierda. Son dos manzanas."),L("Ana","Is it far from here?","¿Queda lejos de aquí?"),L("Chris","No. You can walk there. It's five minutes.","No. Puede ir andando. Son cinco minutos."),L("Ana","Go straight, then turn left. Thank you so much!","Recto y luego a la izquierda. ¡Muchas gracias!"),L("Chris","You're welcome. Have a nice day!","De nada. ¡Que tenga un buen día!")],
 "12":[L("Linda","Good morning, Ana! How are you?","¡Buenos días, Ana! ¿Cómo estás?"),L("Ana","I'm fine, thanks. And you?","Bien, gracias. ¿Y tú?"),L("Linda","Good! It's so cold today.","¡Bien! Hoy hace mucho frío."),L("Ana","Yes, it's really cold today.","Sí, hace muchísimo frío hoy."),L("Linda","Where are you going?","¿Adónde vas?"),L("Ana","I'm going to the market. Have a good weekend!","Voy al mercado. ¡Que tengas buen fin de semana!")],
 "13":[L("Joe","Here you go. The chicken!","¡Aquí tiene! ¡El pollo!"),L("Ana","Excuse me. I ordered the salad.","Perdone. Yo pedí la ensalada."),L("Joe","Are you sure?","¿Está segura?"),L("Ana","I think there's a mistake. Could you check, please?","Creo que hay un error. ¿Podría comprobarlo, por favor?"),L("Joe","You're right. Sorry about that!","Tiene razón. ¡Perdone!"),L("Ana","No problem. Thank you for your help.","No pasa nada. Gracias por su ayuda.")],
 "14":[L("Sam","Good morning! What can I get you?","¡Buenos días! ¿Qué te pongo?"),L("Ana","A large coffee with milk, to go, please.","Un café grande con leche, para llevar, por favor."),L("Dana","Can I help you find anything?","¿Te ayudo a encontrar algo?"),L("Ana","How much is this? Do you have this in blue?","¿Cuánto cuesta esto? ¿Lo tienen en azul?"),L("Dana","Yes. It's twenty dollars.","Sí. Son veinte dólares."),L("Ana","I'll take it. Could I have a receipt, please?","Me lo llevo. ¿Me da el recibo, por favor?"),L("Ana","Excuse me. Where is the subway station?","Perdone. ¿Dónde está la estación de metro?"),L("Chris","Go straight, then turn left.","Siga recto y luego gire a la izquierda."),L("Ana","Thank you so much. Have a nice day!","Muchas gracias. ¡Que tenga un buen día!"),L("Chris","You're welcome. Have a good weekend!","De nada. ¡Que tenga un buen fin de semana!")]
}
U2_SOUNDS=[
 {"id":"s8","g":"t","rs":"d","t":"La t rápida","tip":"En inglés americano, una t entre dos vocales suena casi como una d suave o como una r española muy rápida: latte, water, better. Es una de las marcas del acento americano; si dices una t marcada, también se entiende.","words":["latte","water","better","city","bottle"]},
 {"id":"s9","g":"…","rs":"…","t":"Las palabras se pegan","tip":"En una frase, las palabras se unen: Can I have suena casi como kənaiHAV, y Do you take cards como dyuteikardz. No lo fuerces al leer; escucha el audio y copia el ritmo, no las palabras sueltas.","words":["can I","do you","I'll take it","what do you"]},
]
U2_PIC=[
 ["Comida","fish","el pescado","1F41F"],["Comida","soup","la sopa","1F372"],["Comida","ice cream","el helado","1F366"],["Comida","cheese","el queso","1F9C0"],["Comida","croissant","el cruasán","1F950"],["Comida","wine","el vino","1F377"],
 ["Compras","cart","el carrito","1F6D2"],["Compras","bag","el bolso","1F45C"],["Compras","price tag","la etiqueta de precio","1F3F7"],["Compras","store","la tienda","1F3EA"],["Compras","basket","la cesta","1F9FA"],["Compras","backpack","la mochila","1F392"],
 ["Ciudad","map","el mapa","1F5FA"],["Ciudad","bus","el autobús","1F68C"],["Ciudad","subway","el metro","1F687"],["Ciudad","station","la estación","1F689"],["Ciudad","car","el coche","1F697"],["Ciudad","bike","la bici","1F6B2"],
]
U2_PCATS=["Compras","Ciudad"]
U2_WS=[("have","tener; tomar, pedir (Can I have…?)","Can I have a coffee?","¿Me pone un café?"),("like","gustar; querer (I'd like…)","I'd like a large coffee.","Quisiera un café grande."),("would","condicional (would like = quisiera)","I would like some water.","Quisiera un poco de agua."),("could","podría (más cortés que can)","Could I have a bag?","¿Podría darme una bolsa?"),("much","mucho; how much = cuánto","How much is this?","¿Cuánto cuesta esto?"),("little","poco; pequeño","A little more, please.","Un poco más, por favor."),("big","grande","A big coffee, please.","Un café grande, por favor."),("two","dos","It's two blocks from here.","Está a dos manzanas de aquí."),("three","tres","The bus comes at three.","El autobús llega a las tres."),("left","izquierda; se fue","Turn left at the corner.","Gira a la izquierda en la esquina."),("money","dinero","I need some money.","Necesito algo de dinero."),("nice","agradable, simpático","Have a nice day.","Que tengas un buen día."),("fine","bien (fine = estoy bien)","I'm fine, thanks.","Estoy bien, gracias."),("only","solo","It's only five minutes.","Son solo cinco minutos."),("enough","suficiente","That's enough, thanks.","Es suficiente, gracias."),("another","otro","Another coffee, please.","Otro café, por favor."),("bad","malo","That's not bad.","No está mal."),("over","sobre; acabado; over there = por allí","It's over there.","Está por allí."),("away","lejos, fuera","It's not far away.","No está lejos."),("after","después de","Turn left after the bank.","Gira a la izquierda después del banco."),("before","antes de","Call me before ten.","Llámame antes de las diez."),("down","abajo; por (go down the street)","Go down this street.","Baja por esta calle.")]
U2_GOALS=["Pedir un café o una comida: qué quieres, el tamaño y si es para llevar.","Preguntar cuánto cuesta algo, pedir otro color y pagar.","Preguntar por una dirección y repetir las indicaciones para comprobarlas.","Charlar un momento con alguien y avisar con calma cuando algo está mal."]
