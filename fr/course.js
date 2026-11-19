/* Curso de francés: contenido y configuración. El motor está en ../shared/engine.js */
(function(){
var SCENES=[
 {id:'salut',title:'Les présentations',art:'wave',
  setting:'Es tu primera mañana en el edificio. Un vecino sonriente te cruza en el rellano y te saluda.',
  who:'Julien',
  phrases:[
   {id:'g1',fr:'Bonjour, ça va ?',syl:[['bõ','zhur'],['sa','va']],cue:'Saludas a alguien y le preguntas cómo está.'},
   {id:'g2',fr:'Ça va bien, merci.',syl:[['sa','va','biẽ'],['mer','si']],cue:'Te preguntan cómo estás y contestas que bien.'},
   {id:'g3',fr:'Je m’appelle Clara.',syl:[['zhe','ma','pel'],['kla','ra']],cue:'Dices tu nombre. Aquí es Clara; luego pondrás el tuyo.'},
   {id:'g4',fr:'Enchantée.',syl:[['ã','shã','té']],cue:'Te presentan a alguien y le dices que te alegra conocerle.'},
   {id:'g5',fr:'Au revoir, à demain !',syl:[['o','re','vuar'],['a','de','mẽ']],cue:'Te despides de alguien a quien verás mañana.'}
  ],
  turns:[
   {fr:'Bonjour ! Ça va ?',sense:'Te saluda y pregunta cómo estás.',opts:[
     {fr:'Bonjour ! Ça va bien, merci.',q:2,reply:'Très bien, merci.'},
     {fr:'Ça va.',q:1,reply:'{Ça va bien}, très bien. Moi aussi.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? Moi, je dis {bonjour}. Et vous ?'}]},
   {fr:'Je m’appelle Julien. Et vous ?',sense:'Dice su nombre y te pregunta el tuyo.',opts:[
     {fr:'Je m’appelle Clara. Enchantée.',q:2,reply:'Enchanté, Clara.'},
     {fr:'Moi Clara.',q:1,reply:'Vous {vous appelez} Clara. Enchanté !'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Euh… {vous vous appelez} comment ?'}]},
   {fr:'Bon, à bientôt, Clara !',sense:'Se despide: hasta pronto.',opts:[
     {fr:'Au revoir, à demain !',q:2,reply:'À demain !'},
     {fr:'Au revoir.',q:1,reply:'Au revoir, Clara. {À bientôt} !'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ? C’est le matin ! {Au revoir}, Clara.'}]}
  ]},
 {id:'cafe',title:'Au café',art:'cup',
  setting:'Son las ocho de la mañana. Entras en un café pequeño que huele a pan caliente y el camarero te mira desde la barra.',
  who:'Le serveur',
  phrases:[
   {id:'c1',fr:'Bonjour.',syl:[['bõ','zhur']],cue:'Entras al café por la mañana y saludas.'},
   {id:'c2',fr:'Un café, s’il vous plaît.',syl:[['ẽ','ca','fé'],['sil','vu','plé']],cue:'Pides un café con educación.'},
   {id:'c3',fr:'Je voudrais un croissant.',syl:[['zhe','vu','dré'],['ẽ','krua','sã']],cue:'Quieres añadir un croissant a tu pedido.'},
   {id:'c4',fr:'L’addition, s’il vous plaît.',syl:[['la','di','siõ'],['sil','vu','plé']],cue:'Ya terminaste y pides la cuenta.'},
   {id:'c5',fr:'Merci beaucoup.',syl:[['mer','si'],['bo','ku']],cue:'Te traen el pedido y lo agradeces.'}
  ],
  turns:[
   {fr:'Bonjour ! Qu’est-ce que je vous sers ?',sense:'Te saluda y pregunta qué vas a tomar.',opts:[
     {fr:'Bonjour. Un café, s’il vous plaît.',q:2,reply:'Très bien. Un café, tout de suite.'},
     {fr:'Un café.',q:1,reply:'{Bonjour}, madame ! Un café, tout de suite.'},
     {fr:'Merci beaucoup.',q:0,reply:'Pardon ? {Un café}, peut-être ?'}]},
   {fr:'Et avec ça ?',sense:'Pregunta si quieres algo más para acompañar.',opts:[
     {fr:'Je voudrais un croissant, s’il vous plaît.',q:2,reply:'Un croissant, très bien.'},
     {fr:'Je veux un croissant.',q:1,reply:'Vous {voudriez} un croissant, très bien.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! Oui… {un croissant} avec le café ?'}]},
   {fr:'Vous désirez autre chose ?',sense:'Pregunta si quieres algo más.',opts:[
     {fr:'Non, merci. L’addition, s’il vous plaît.',q:2,reply:'Bien sûr. Ça fait six euros.'},
     {fr:'Addition.',q:1,reply:'{L’addition, s’il vous plaît}, oui. Ça fait six euros.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour… oui ? {L’addition}, peut-être ?'}]}
  ]},
 {id:'hotel',title:'À l’hôtel',art:'key',
  setting:'Llegas de noche a un hotel pequeño. La recepción está iluminada y alguien te espera con una sonrisa cansada.',
  who:'La réceptionniste',
  phrases:[
   {id:'h1',fr:'Bonsoir.',syl:[['bõ','suar']],cue:'Llegas a la recepción al caer la tarde.'},
   {id:'h2',fr:'J’ai une réservation.',syl:[['zhé','ün','ré','zer','va','siõ']],cue:'Dices que ya tienes la habitación reservada.'},
   {id:'h3',fr:'Pour deux nuits.',syl:[['pur','dö','nüi']],cue:'Te preguntan cuántas noches y respondes dos.'},
   {id:'h4',fr:'Où est l’ascenseur ?',syl:[['u','é','la','sã','sör']],cue:'Buscas el ascensor con la maleta en la mano.'},
   {id:'h5',fr:'Merci, bonne soirée !',syl:[['mer','si'],['bon','suá','ré']],cue:'Te despides al terminar, ya de noche.'}
  ],
  turns:[
   {fr:'Bonsoir madame. Je peux vous aider ?',sense:'Te saluda y ofrece su ayuda.',opts:[
     {fr:'Bonsoir. J’ai une réservation.',q:2,reply:'Parfait, madame.'},
     {fr:'J’ai réservation.',q:1,reply:'Vous avez {une réservation}, très bien.'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Ah, pas de café ici ! Vous avez {une réservation} ?'}]},
   {fr:'C’est pour combien de nuits ?',sense:'Pregunta por cuántas noches.',opts:[
     {fr:'Pour deux nuits.',q:2,reply:'Parfait. Deux nuits.'},
     {fr:'Deux nuit.',q:1,reply:'Deux {nuits}, parfait.'},
     {fr:'Merci beaucoup.',q:0,reply:'De rien ! Mais… {pour combien de nuits} ?'}]},
   {fr:'Voici votre clé. Chambre douze, au deuxième étage.',sense:'Te da la llave: habitación doce, segundo piso.',opts:[
     {fr:'Où est l’ascenseur, s’il vous plaît ?',q:2,reply:'Là, à droite. Bonne soirée !'},
     {fr:'Ascenseur ?',q:1,reply:'{L’ascenseur} ? Là, à droite. Bonne soirée !'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? L’ascenseur est là, à droite. {Bonne soirée} !'}]}
  ]},
 {id:'rue',title:'Dans la rue',art:'sign',
  setting:'Estás en una esquina buscando la estación. Un desconocido camina hacia ti y es tu mejor oportunidad de preguntar.',
  who:'Un passant',
  phrases:[
   {id:'r1',fr:'Excusez-moi.',syl:[['ek','skü','zé','muá']],cue:'Quieres llamar la atención de alguien en la calle.'},
   {id:'r2',fr:'Où est la gare ?',syl:[['u','é','la','gar']],cue:'Preguntas dónde está la estación.'},
   {id:'r3',fr:'Je ne comprends pas.',syl:[['zhe','ne','kõ','prã','pa']],cue:'No entendiste y quieres decirlo.'},
   {id:'r4',fr:'Plus lentement, s’il vous plaît.',syl:[['plü','lãt','mã'],['sil','vu','plé']],cue:'Hablan demasiado rápido y pides ir más despacio.'},
   {id:'r5',fr:'Pouvez-vous répéter ?',syl:[['pu','vé','vu'],['ré','pé','té']],cue:'No oíste bien y pides que lo repitan.'}
  ],
  turns:[
   {fr:'Oui ? Je peux vous aider ?',sense:'Te mira y pregunta si necesitas ayuda.',opts:[
     {fr:'Excusez-moi. Où est la gare, s’il vous plaît ?',q:2,reply:'La gare ? Oui, bien sûr.'},
     {fr:'Gare ?',q:1,reply:'{Où est la gare ?} Oui, bien sûr.'},
     {fr:'Merci beaucoup.',q:0,reply:'Euh… de rien. Vous cherchez quelque chose ?'}]},
   {fr:'C’est tout droit, puis à gauche, après la pharmacie, à dix minutes à pied.',sense:'Te indica el camino muy rápido: recto, luego a la izquierda, tras la farmacia, a diez minutos andando.',opts:[
     {fr:'Pardon, je ne comprends pas. Plus lentement, s’il vous plaît.',q:2,reply:'Bien sûr. Tout droit… puis à gauche. Voilà.'},
     {fr:'Je comprends pas.',q:1,reply:'Vous {ne comprenez pas}. Pardon ! Tout droit… puis à gauche.'},
     {fr:'Oui, oui.',q:0,reply:'Vous êtes sûre ? Je répète : tout droit, puis à gauche.'}]},
   {fr:'Voilà, c’est simple. Bonne journée, madame !',sense:'Se despide deseándote buen día.',opts:[
     {fr:'Merci beaucoup, bonne journée !',q:2,reply:'Je vous en prie. Au revoir !'},
     {fr:'Merci.',q:1,reply:'Je vous en prie, madame. {Bonne journée} !'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? Non ? Eh bien… {bonne journée} !'}]}
  ]},
 {id:'verbes',title:'Les verbes du quotidien',art:'sun',
  setting:'Estás en un mercado de flores. La vendedora te habla y tú dices cómo estás, qué tienes, adónde vas y qué no sabes.',
  who:'La fleuriste',
  phrases:[
   {id:'v1',fr:'Je suis fatiguée.',syl:[['zhe','süi'],['fa','ti','gé']],cue:'Dices que estás cansada.'},
   {id:'v2',fr:'J’ai faim.',syl:[['zhé','fẽ']],cue:'Dices que tienes hambre.'},
   {id:'v3',fr:'Je vais à la gare.',syl:[['zhe','vé','a'],['la','gar']],cue:'Dices adónde vas.'},
   {id:'v4',fr:'Je peux payer par carte ?',syl:[['zhe','pö'],['pé','yé'],['par','kart']],cue:'Preguntas si puedes pagar con tarjeta.'},
   {id:'v5',fr:'Je ne sais pas.',syl:[['zhe','ne','sé'],['pa']],cue:'No lo sabes y lo dices.'}
  ],
  turns:[
   {fr:'Bonjour ! Vous allez bien ?',sense:'Te saluda y pregunta si estás bien.',opts:[
     {fr:'Je suis fatiguée.',q:2,reply:'Ah, courage, madame !'},
     {fr:'Je fatiguée.',q:1,reply:'Vous {êtes} fatiguée ? Courage !'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Ici, ce sont des fleurs ! {Vous allez bien} ?'}]},
   {fr:'Vous avez faim ? Il y a un café là-bas.',sense:'Te pregunta si tienes hambre y te dice que hay un café allí.',opts:[
     {fr:'Oui, j’ai faim.',q:2,reply:'Alors, allez-y !'},
     {fr:'Je suis faim.',q:1,reply:'Vous {avez} faim ? Allez au café !'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous avez faim} ?'}]},
   {fr:'Et vous allez où ?',sense:'Te pregunta adónde vas.',opts:[
     {fr:'Je vais à la gare.',q:2,reply:'La gare ? C’est tout droit.'},
     {fr:'Je vas gare.',q:1,reply:'Vous {allez à la gare} ? C’est tout droit.'},
     {fr:'Merci beaucoup.',q:0,reply:'De rien ! Mais… {vous allez où} ?'}]}
  ]},

 {id:'chiffres',u:2,title:'Les chiffres',art:'key',
  setting:'Llegas al hotel al caer la tarde. En el mostrador, la recepcionista te da la llave y te habla de números: habitación, autobús, taxi.',
  who:'La réceptionniste',
  phrases:[
   {id:'n1',fr:'Ma chambre, c’est le douze ?',syl:[['ma','shãbr'],['se','le','duz']],cue:'Compruebas el número de tu habitación: el doce.'},
   {id:'n2',fr:'Ça fait treize euros ?',syl:[['sa','fe'],['trez','ö','ro']],cue:'Confirmas un precio: trece euros.'},
   {id:'n3',fr:'Nous sommes huit.',syl:[['nu','som'],['üit']],cue:'Dices cuántas personas sois: ocho.'},
   {id:'n4',fr:'C’est le bus numéro neuf ?',syl:[['se','le','büs'],['nü','me','ro'],['nöf']],cue:'Compruebas que el autobús es el nueve.'},
   {id:'n5',fr:'Vous dites douze ou treize ?',syl:[['vu','dit'],['duz','u'],['trez']],cue:'No has oído bien un número y preguntas cuál de los dos.'}
  ],
  turns:[
   {fr:'Voici votre clé, madame. C’est la chambre douze.',sense:'Te da la llave: habitación doce.',opts:[
     {fr:'Merci. Ma chambre, c’est le douze ?',q:2,reply:'Oui, madame, le douze, au premier étage.'},
     {fr:'Douze ?',q:1,reply:'Oui, {la chambre douze}, au premier étage.'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Ici, c’est l’hôtel ! {La chambre douze}, madame.'}]},
   {fr:'Et pour le petit-déjeuner, vous êtes combien ?',sense:'Te pregunta cuántas personas sois para el desayuno.',opts:[
     {fr:'Nous sommes huit.',q:2,reply:'Huit personnes. Très bien.'},
     {fr:'Nous huit.',q:1,reply:'Vous {êtes} huit ? Très bien.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous êtes combien} ?'}]},
   {fr:'Le taxi pour la gare, c’est treize euros, madame.',sense:'Te dice que el taxi a la estación cuesta trece euros.',opts:[
     {fr:'Pardon, vous dites douze ou treize ?',q:2,reply:'Treize, madame. Treize euros.'},
     {fr:'Comment ?',q:1,reply:'{Treize euros}, madame. Trei-ze.'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ? Euh… {treize euros}, madame.'}]}
  ]},
 {id:'heure',u:2,title:'L’heure',art:'sun',
  setting:'Estás frente al reloj grande de la estación. Un señor con un periódico pasa a tu lado y tú necesitas saber la hora.',
  who:'Un passant',
  phrases:[
   {id:'e1',fr:'Quelle heure est-il ?',syl:[['kel','ör','é','til']],cue:'Preguntas qué hora es.'},
   {id:'e2',fr:'Il est huit heures.',syl:[['il','é','üi','tör']],cue:'Dices que son las ocho.'},
   {id:'e3',fr:'À midi et demi.',syl:[['a','mi','di'],['é','de','mi']],cue:'Dices a qué hora: a las doce y media.'},
   {id:'e4',fr:'À quelle heure ?',syl:[['a','kel','ör']],cue:'Preguntas a qué hora es algo.'},
   {id:'e5',fr:'À neuf heures et quart.',syl:[['a','nö','vör'],['é','kar']],cue:'Dices a qué hora: a las nueve y cuarto.'}
  ],
  turns:[
   {fr:'Oui, madame ?',sense:'Se vuelve hacia ti: ¿sí?',opts:[
     {fr:'Excusez-moi, quelle heure est-il ?',q:2,reply:'Il est huit heures.'},
     {fr:'Heure ?',q:1,reply:'{Quelle heure est-il ?} Il est huit heures.'},
     {fr:'Je suis fatiguée.',q:0,reply:'Ah… oui. {Il est huit heures}, madame.'}]},
   {fr:'Il est huit heures, madame.',sense:'Te dice la hora: las ocho.',opts:[
     {fr:'Merci. Et le train ? À quelle heure ?',q:2,reply:'Le train part à neuf heures et quart.'},
     {fr:'Train ? Heure ?',q:1,reply:'{Le train, à quelle heure ?} Neuf heures et quart.'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ? C’est le matin ! {Le train}, neuf heures et quart.'}]},
   {fr:'Et le restaurant de la gare ouvre à midi et demi.',sense:'Te dice que el restaurante de la estación abre a las doce y media.',opts:[
     {fr:'À midi et demi, d’accord. Merci !',q:2,reply:'Voilà. Bonne journée, madame !'},
     {fr:'Midi.',q:1,reply:'{Midi et demi}, oui. Bonne journée, madame !'},
     {fr:'Au revoir.',q:0,reply:'Euh… {midi et demi}, madame !'}]}
  ]},
 {id:'billet',u:2,title:'Au guichet',art:'sign',
  setting:'Taquilla de la estación. Hay una cola corta y el empleado te mira detrás del cristal.',
  who:'L’employé',
  phrases:[
   {id:'b1',fr:'Un billet pour Lyon, s’il vous plaît.',syl:[['ẽ','bi','yé','pur'],['li','õ'],['sil','vu','plé']],cue:'Pides un billete para Lyon.'},
   {id:'b2',fr:'Un aller simple.',syl:[['ẽ','na','lé'],['sẽ','pl']],cue:'Pides un billete de ida.'},
   {id:'b3',fr:'Un aller-retour.',syl:[['ẽ','na','lé'],['re','tur']],cue:'Pides un billete de ida y vuelta.'},
   {id:'b4',fr:'C’est quel quai ?',syl:[['se','kel','ké']],cue:'Preguntas por qué andén sale el tren.'},
   {id:'b5',fr:'Le train part à quelle heure ?',syl:[['le','trẽ','par'],['a','kel','ör']],cue:'Preguntas a qué hora sale el tren.'}
  ],
  turns:[
   {fr:'Bonjour, madame. Vous désirez ?',sense:'Te saluda y pregunta qué deseas.',opts:[
     {fr:'Bonjour. Un billet pour Lyon, s’il vous plaît.',q:2,reply:'Un billet pour Lyon. Très bien.'},
     {fr:'Lyon.',q:1,reply:'{Un billet pour Lyon}, très bien.'},
     {fr:'Merci beaucoup.',q:0,reply:'Pardon ? {Un billet}, pour où ?'}]},
   {fr:'Aller simple ou aller-retour ?',sense:'Pregunta si de ida o de ida y vuelta.',opts:[
     {fr:'Un aller simple, s’il vous plaît.',q:2,reply:'Voilà, un aller simple.'},
     {fr:'Simple.',q:1,reply:'{Un aller simple}, voilà.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! Mais… {aller simple} ou {aller-retour} ?'}]},
   {fr:'Voilà, madame. Le train part bientôt.',sense:'Te da el billete: el tren sale pronto.',opts:[
     {fr:'Merci. C’est quel quai ?',q:2,reply:'Quai douze, madame. Bon voyage !'},
     {fr:'Quai ?',q:1,reply:'{C’est quel quai ?} Quai douze. Bon voyage !'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? {Le quai} ? C’est le quai douze.'}]}
  ]},
 {id:'transport',u:2,title:'Métro et taxi',art:'sign',
  setting:'Sales del hotel con prisa. Primero preguntas por el metro y, como hay cambio de línea, acabas parando un taxi.',
  who:'Le chauffeur',
  phrases:[
   {id:'t1',fr:'Où est la station de métro ?',syl:[['u','é','la','sta','syõ'],['de','mé','tro']],cue:'Preguntas dónde está la estación de metro.'},
   {id:'t2',fr:'Je voudrais aller à la gare.',syl:[['zhe','vu','dré'],['a','lé','a','la','gar']],cue:'Dices adónde quieres ir: a la estación.'},
   {id:'t3',fr:'C’est direct ?',syl:[['se','di','rekt']],cue:'Preguntas si el trayecto es directo.'},
   {id:'t4',fr:'Combien de temps ?',syl:[['kõ','biẽ'],['de','tã']],cue:'Preguntas cuánto se tarda.'},
   {id:'t5',fr:'Arrêtez-vous ici, s’il vous plaît.',syl:[['a','ré','té','vu'],['i','si'],['sil','vu','plé']],cue:'Le pides al taxista que pare aquí.'}
  ],
  turns:[
   {fr:'Bonjour, madame. Où allez-vous ?',sense:'Te saluda y pregunta adónde vas.',opts:[
     {fr:'Bonjour. Je voudrais aller à la gare.',q:2,reply:'À la gare, très bien.'},
     {fr:'La gare.',q:1,reply:'{À la gare}, très bien.'},
     {fr:'Merci beaucoup.',q:0,reply:'De rien… mais {où allez-vous} ?'}]},
   {fr:'Voilà, on y va.',sense:'Arranca: ¡vamos!',opts:[
     {fr:'Combien de temps, s’il vous plaît ?',q:2,reply:'Vingt minutes, madame.'},
     {fr:'Temps ?',q:1,reply:'{Combien de temps ?} Vingt minutes.'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? Nous arrivons dans {vingt minutes}.'}]},
   {fr:'Voilà la gare, madame. Ici ?',sense:'Llegáis a la estación y te pregunta si te deja aquí.',opts:[
     {fr:'Oui, arrêtez-vous ici, s’il vous plaît.',q:2,reply:'Voilà. Ça fait vingt euros.'},
     {fr:'Ici.',q:1,reply:'{Arrêtez-vous ici}, oui. Ça fait vingt euros.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ? Nous sommes {à la gare}, madame !'}]}
  ]},
 {id:'prix',u:2,title:'Les prix',art:'cup',
  setting:'Una tienda pequeña junto a la estación. Te gusta un pañuelo de seda y la vendedora te sonríe desde el mostrador.',
  who:'La vendeuse',
  phrases:[
   {id:'p1',fr:'Ça coûte combien ?',syl:[['sa','kut'],['kõ','biẽ']],cue:'Preguntas cuánto cuesta algo.'},
   {id:'p2',fr:'C’est trop cher.',syl:[['se','tro'],['shér']],cue:'Dices que es demasiado caro.'},
   {id:'p3',fr:'Vous acceptez la carte ?',syl:[['vu','zak','sep','té'],['la','kart']],cue:'Preguntas si aceptan tarjeta.'},
   {id:'p4',fr:'Voilà vingt euros.',syl:[['vua','la'],['vẽ','tö','ro']],cue:'Entregas un billete de veinte euros.'},
   {id:'p5',fr:'Je prends ça.',syl:[['zhe','prã'],['sa']],cue:'Decides comprarlo.'}
  ],
  turns:[
   {fr:'Bonjour ! Vous cherchez quelque chose ?',sense:'Te saluda y pregunta si buscas algo.',opts:[
     {fr:'Bonjour. Ça coûte combien ?',q:2,reply:'Ce foulard ? Dix-huit euros.'},
     {fr:'Combien ?',q:1,reply:'{Ça coûte combien ?} Dix-huit euros, le foulard.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? Le foulard coûte {dix-huit euros}.'}]},
   {fr:'C’est de la belle soie. Dix-huit euros.',sense:'Te dice que es seda buena y cuesta dieciocho euros.',opts:[
     {fr:'Hmm, c’est trop cher.',q:2,reply:'Pour vous, seize euros.'},
     {fr:'Cher.',q:1,reply:'{C’est trop cher}, oui ? Seize euros, alors.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! Dix-huit euros, madame.'}]},
   {fr:'Seize euros, ça va ?',sense:'Te ofrece dieciséis euros: ¿te va bien?',opts:[
     {fr:'D’accord, je prends ça. Voilà vingt euros.',q:2,reply:'Merci. Et voilà quatre euros.'},
     {fr:'Je prends. Vingt euros.',q:1,reply:'Vous {prenez ça}. Merci. Et voilà quatre euros.'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? {Seize euros}, ça va ?'}]}
  ]},

 {id:'resto',u:3,title:'Au restaurant',art:'cup',
  setting:'Es la hora de la cena. Entras en un restaurante pequeño y el camarero te acompaña a una mesa junto a la ventana.',
  who:'Le serveur',
  phrases:[
   {id:'m1',fr:'Une table pour deux, s’il vous plaît.',syl:[['ün','tabl'],['pur','dö'],['sil','vu','plé']],cue:'Pides una mesa para dos personas.'},
   {id:'m2',fr:'Je voudrais la carte, s’il vous plaît.',syl:[['zhe','vu','dré'],['la','kart'],['sil','vu','plé']],cue:'Pides la carta.'},
   {id:'m3',fr:'Qu’est-ce que vous recommandez ?',syl:[['kes','ke','vu'],['re','ko','mã','dé']],cue:'Preguntas qué te recomienda el camarero.'},
   {id:'m4',fr:'Je prends le poulet.',syl:[['zhe','prã'],['le','pu','lé']],cue:'Eliges un plato: el pollo.'},
   {id:'m5',fr:'C’était très bon, merci.',syl:[['sé','té'],['tré','bõ'],['mer','si']],cue:'Dices que la comida estaba muy buena.'}
  ],
  turns:[
   {fr:'Bonsoir, madame. Vous êtes combien ?',sense:'Te saluda y pregunta cuántas personas sois.',opts:[
     {fr:'Bonsoir. Une table pour deux, s’il vous plaît.',q:2,reply:'Très bien. Par ici, madame.'},
     {fr:'Deux.',q:1,reply:'{Une table pour deux}, très bien. Par ici.'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Ici, c’est le restaurant ! {Une table pour deux} ?'}]},
   {fr:'Voilà votre table. Je vous apporte la carte ?',sense:'Te lleva a la mesa y pregunta si te trae la carta.',opts:[
     {fr:'Oui, je voudrais la carte, s’il vous plaît.',q:2,reply:'Voilà, madame.'},
     {fr:'Carte.',q:1,reply:'{Je voudrais la carte}, oui. Voilà.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {La carte}, madame ?'}]},
   {fr:'Alors, vous avez choisi ?',sense:'Pregunta si ya has elegido.',opts:[
     {fr:'Qu’est-ce que vous recommandez ?',q:2,reply:'Le poulet est excellent.'},
     {fr:'Recommandez ?',q:1,reply:'{Qu’est-ce que vous recommandez ?} Le poulet est excellent.'},
     {fr:'Merci beaucoup.',q:0,reply:'Pardon ? {Vous avez choisi} ?'}]}
  ]},
 {id:'plats',u:3,title:'Plats et boissons',art:'cup',
  setting:'Ya has mirado la carta. El camarero vuelve con su libreta y tú vas diciendo qué quieres comer y beber.',
  who:'Le serveur',
  phrases:[
   {id:'d1',fr:'Comme entrée, une soupe.',syl:[['kom','ã','tré'],['ün','sup']],cue:'Pides una sopa como entrante.'},
   {id:'d2',fr:'Comme plat, le poisson.',syl:[['kom','pla'],['le','pua','sõ']],cue:'Pides el pescado como plato principal.'},
   {id:'d3',fr:'Et comme dessert, une glace.',syl:[['é','kom','dé','sér'],['ün','glas']],cue:'Pides un helado de postre.'},
   {id:'d4',fr:'Une carafe d’eau, s’il vous plaît.',syl:[['ün','ka','raf','do'],['sil','vu','plé']],cue:'Pides una jarra de agua.'},
   {id:'d5',fr:'Un verre de vin rouge.',syl:[['ẽ','vér','de'],['vẽ','ruzh']],cue:'Pides una copa de vino tinto.'}
  ],
  turns:[
   {fr:'Vous prenez une entrée ?',sense:'Te pregunta si quieres un entrante.',opts:[
     {fr:'Oui, comme entrée, une soupe.',q:2,reply:'Une soupe, très bien.'},
     {fr:'Soupe.',q:1,reply:'{Une soupe}, très bien.'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ! Une entrée… {une soupe} ?'}]},
   {fr:'Et comme plat ?',sense:'Pregunta qué quieres de plato principal.',opts:[
     {fr:'Comme plat, le poisson, s’il vous plaît.',q:2,reply:'Le poisson, parfait.'},
     {fr:'Poisson.',q:1,reply:'{Le poisson}, parfait.'},
     {fr:'Merci.',q:0,reply:'Je vous en prie. Et {comme plat} ?'}]},
   {fr:'Et pour boire ?',sense:'Pregunta qué quieres beber.',opts:[
     {fr:'Une carafe d’eau, s’il vous plaît.',q:2,reply:'Une carafe d’eau, voilà.'},
     {fr:'Eau.',q:1,reply:'{Une carafe d’eau}, voilà.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Pour boire}, madame ?'}]}
  ]},
 {id:'marche',u:3,title:'Au marché',art:'sun',
  setting:'Mercado de barrio, sábado por la mañana. Un puesto de fruta huele a manzana y el vendedor te sonríe detrás de las cajas.',
  who:'Le marchand',
  phrases:[
   {id:'k1',fr:'Bonjour, je cherche des pommes.',syl:[['bõ','zhur'],['zhe','shersh'],['dé','pom']],cue:'Dices que buscas manzanas.'},
   {id:'k2',fr:'C’est combien le kilo ?',syl:[['se','kõ','biẽ'],['le','ki','lo']],cue:'Preguntas cuánto cuesta el kilo.'},
   {id:'k3',fr:'Elles sont bonnes ?',syl:[['el','sõ','bon']],cue:'Preguntas si las manzanas están buenas.'},
   {id:'k4',fr:'Je voudrais un kilo, s’il vous plaît.',syl:[['zhe','vu','dré'],['ẽ','ki','lo'],['sil','vu','plé']],cue:'Pides un kilo.'},
   {id:'k5',fr:'Ce sera tout, merci.',syl:[['se','su','ra'],['tu'],['mer','si']],cue:'Dices que eso es todo.'}
  ],
  turns:[
   {fr:'Bonjour, madame ! Qu’est-ce que vous cherchez ?',sense:'Te saluda y pregunta qué buscas.',opts:[
     {fr:'Bonjour. Je cherche des pommes.',q:2,reply:'Les voilà, madame.'},
     {fr:'Pommes.',q:1,reply:'Vous {cherchez} des pommes ? Les voilà.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous cherchez} quelque chose ?'}]},
   {fr:'Ce sont des pommes de la région.',sense:'Te dice que son manzanas de la región.',opts:[
     {fr:'Elles sont bonnes ? C’est combien le kilo ?',q:2,reply:'Très bonnes. Trois euros le kilo.'},
     {fr:'Bonnes ? Combien ?',q:1,reply:'{Elles sont bonnes ?} Oui. Trois euros le kilo.'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? {Trois euros le kilo}, madame.'}]},
   {fr:'Et vous en voulez combien ?',sense:'Te pregunta cuántas quieres.',opts:[
     {fr:'Je voudrais un kilo, s’il vous plaît.',q:2,reply:'Voilà un kilo. Ce sera tout ?'},
     {fr:'Un kilo.',q:1,reply:'{Je voudrais un kilo}, voilà. Ce sera tout ?'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! {Un kilo} ?'}]}
  ]},
 {id:'quant',u:3,title:'Les quantités',art:'sign',
  setting:'Una pequeña tienda de alimentación. El tendero está cortando jamón y te pregunta qué quieres.',
  who:'L’épicier',
  phrases:[
   {id:'q1',fr:'Un peu de fromage, s’il vous plaît.',syl:[['ẽ','pö','de'],['fro','mazh'],['sil','vu','plé']],cue:'Pides un poco de queso.'},
   {id:'q2',fr:'Deux cents grammes de jambon.',syl:[['dö','sã'],['gram'],['de','zhã','bõ']],cue:'Pides doscientos gramos de jamón.'},
   {id:'q3',fr:'Une bouteille d’eau.',syl:[['ün','bu','tey'],['do']],cue:'Pides una botella de agua.'},
   {id:'q4',fr:'Encore un peu, merci.',syl:[['ã','kor'],['ẽ','pö'],['mer','si']],cue:'Quieres un poco más.'},
   {id:'q5',fr:'Un morceau de pain.',syl:[['ẽ','mor','so'],['de','pẽ']],cue:'Pides un trozo de pan.'}
  ],
  turns:[
   {fr:'Bonjour ! Je vous sers ?',sense:'Te saluda y pregunta qué quieres.',opts:[
     {fr:'Bonjour. Deux cents grammes de jambon.',q:2,reply:'Deux cents grammes, voilà.'},
     {fr:'Jambon.',q:1,reply:'{Deux cents grammes de jambon}, voilà.'},
     {fr:'Merci beaucoup.',q:0,reply:'Je vous en prie. Mais… {vous voulez} quoi ?'}]},
   {fr:'Et avec ça ?',sense:'Pregunta si quieres algo más.',opts:[
     {fr:'Un peu de fromage, s’il vous plaît.',q:2,reply:'Un peu de fromage, très bien.'},
     {fr:'Fromage.',q:1,reply:'{Un peu de fromage}, très bien.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Avec ça} ?'}]},
   {fr:'Voilà. C’est assez ?',sense:'Te da el queso y pregunta si es suficiente.',opts:[
     {fr:'Encore un peu, merci.',q:2,reply:'Encore un peu, voilà.'},
     {fr:'Encore.',q:1,reply:'{Encore un peu}, voilà.'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! C’est {assez} ?'}]}
  ]},
 {id:'sans',u:3,title:'Ce que je ne mange pas',art:'key',
  setting:'De nuevo en el restaurante. Hoy quieres explicar con calma lo que no comes y preguntar qué lleva cada plato.',
  who:'Le serveur',
  phrases:[
   {id:'a1',fr:'Je ne mange pas de viande.',syl:[['zhe','ne','mãzh'],['pa','de','vyãd']],cue:'Dices que no comes carne.'},
   {id:'a2',fr:'Je suis allergique aux noix.',syl:[['zhe','süi','za','ler','zhik'],['o','nua']],cue:'Dices que eres alérgica a las nueces.'},
   {id:'a3',fr:'Il y a du gluten ?',syl:[['i','li','a','dü'],['glü','ten']],cue:'Preguntas si el plato lleva gluten.'},
   {id:'a4',fr:'Sans oignon, s’il vous plaît.',syl:[['sã','zo','nyõ'],['sil','vu','plé']],cue:'Pides el plato sin cebolla.'},
   {id:'a5',fr:'C’est sans viande ?',syl:[['se','sã'],['vyãd']],cue:'Preguntas si el plato no lleva carne.'}
  ],
  turns:[
   {fr:'Voici le plat du jour : un poulet rôti.',sense:'Te cuenta el plato del día: pollo asado.',opts:[
     {fr:'Je ne mange pas de viande. C’est sans viande ?',q:2,reply:'Non, madame. Mais il y a une salade.'},
     {fr:'Pas de viande.',q:1,reply:'Vous {ne mangez pas} de viande. Il y a une salade.'},
     {fr:'Merci beaucoup.',q:0,reply:'Je vous en prie. Mais… {sans viande}, oui ?'}]},
   {fr:'La salade est avec du fromage et des noix.',sense:'La ensalada lleva queso y nueces.',opts:[
     {fr:'Je suis allergique aux noix, désolée.',q:2,reply:'Pas de problème. Sans noix.'},
     {fr:'Allergique noix.',q:1,reply:'Vous {êtes allergique aux noix} ? Pas de problème.'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ! {Avec} ou {sans noix} ?'}]},
   {fr:'Je vous mets aussi des oignons ?',sense:'Pregunta si te pone también cebolla.',opts:[
     {fr:'Sans oignon, s’il vous plaît.',q:2,reply:'Sans oignon, très bien.'},
     {fr:'Pas oignon.',q:1,reply:'{Sans oignon}, très bien.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Avec} ou {sans oignon} ?'}]}
  ]},

 {id:'moi',u:4,title:'Se présenter',art:'wave',
  setting:'Una cena entre amigos. Un invitado que no conoces se sienta a tu lado y empieza a charlar con una sonrisa.',
  who:'Marc',
  phrases:[
   {id:'i1',fr:'Je viens d’Uruguay.',syl:[['zhe','viẽ'],['dü','rü','gwé']],cue:'Dices de qué país vienes.'},
   {id:'i2',fr:'J’habite à Madrid.',syl:[['zha','bit','a'],['ma','drid']],cue:'Dices en qué ciudad vives.'},
   {id:'i3',fr:'Je parle espagnol.',syl:[['zhe','parl'],['es','pa','nyol']],cue:'Dices que hablas español.'},
   {id:'i4',fr:'Et vous, vous venez d’où ?',syl:[['é','vu'],['vu','ve','né'],['du']],cue:'Preguntas de dónde es la otra persona.'},
   {id:'i5',fr:'Enchantée de faire votre connaissance.',syl:[['ã','shã','té'],['de','fér'],['vo','tre','ko','ne','sãs']],cue:'Dices con elegancia que te alegra conocerle.'}
  ],
  turns:[
   {fr:'Bonsoir ! Je m’appelle Marc. Et vous ?',sense:'Se presenta y te pregunta tu nombre.',opts:[
     {fr:'Je m’appelle Clara. Enchantée de faire votre connaissance.',q:2,reply:'Enchanté, Clara !'},
     {fr:'Clara.',q:1,reply:'{Je m’appelle Clara}, enchanté !'},
     {fr:'Un café, s’il vous plaît.',q:0,reply:'Ah ! Un café plus tard. {Vous vous appelez} comment ?'}]},
   {fr:'Vous venez d’où, Clara ?',sense:'Te pregunta de dónde eres.',opts:[
     {fr:'Je viens d’Uruguay.',q:2,reply:'L’Uruguay ! C’est loin.'},
     {fr:'Uruguay.',q:1,reply:'Vous {venez d’Uruguay} ! C’est loin.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous venez d’où} ?'}]},
   {fr:'Et vous habitez ici, à Paris ?',sense:'Te pregunta si vives aquí, en París.',opts:[
     {fr:'Non, j’habite à Madrid. Et vous, vous venez d’où ?',q:2,reply:'Moi, je viens de Lyon.'},
     {fr:'Madrid.',q:1,reply:'Vous {habitez à Madrid} ! Moi, je viens de Lyon.'},
     {fr:'Merci beaucoup.',q:0,reply:'De rien. Vous {habitez} où ?'}]}
  ]},
 {id:'travail',u:4,title:'Mon travail',art:'key',
  setting:'Sigue la cena. Marc te sirve agua y te pregunta con curiosidad a qué te dedicas.',
  who:'Marc',
  phrases:[
   {id:'j1',fr:'Je suis avocate.',syl:[['zhe','süi','za','vo','kat']],cue:'Dices tu profesión: abogada.'},
   {id:'j2',fr:'Je travaille dans un cabinet.',syl:[['zhe','tra','vay'],['dã','zẽ'],['ka','bi','né']],cue:'Dices dónde trabajas: en un despacho.'},
   {id:'j3',fr:'Je travaille beaucoup.',syl:[['zhe','tra','vay'],['bo','ku']],cue:'Dices que trabajas mucho.'},
   {id:'j4',fr:'Et vous, vous faites quoi ?',syl:[['é','vu'],['vu','fet'],['kua']],cue:'Preguntas a qué se dedica la otra persona.'},
   {id:'j5',fr:'J’aime mon travail.',syl:[['zhém'],['mõ','tra','vay']],cue:'Dices que te gusta tu trabajo.'}
  ],
  turns:[
   {fr:'Et vous, Clara, vous faites quoi dans la vie ?',sense:'Te pregunta a qué te dedicas.',opts:[
     {fr:'Je suis avocate.',q:2,reply:'Avocate ! C’est intéressant.'},
     {fr:'Avocat.',q:1,reply:'{Vous êtes avocate} ! C’est intéressant.'},
     {fr:'Merci beaucoup.',q:0,reply:'Je vous en prie. Vous {faites} quoi ?'}]},
   {fr:'Vous travaillez où ?',sense:'Te pregunta dónde trabajas.',opts:[
     {fr:'Je travaille dans un cabinet.',q:2,reply:'Un cabinet, très bien.'},
     {fr:'Cabinet.',q:1,reply:'Vous {travaillez dans un cabinet}, très bien.'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ! Vous {travaillez} où ?'}]},
   {fr:'Et vous aimez votre travail ?',sense:'Te pregunta si te gusta tu trabajo.',opts:[
     {fr:'Oui, j’aime mon travail. Et vous, vous faites quoi ?',q:2,reply:'Moi, je suis professeur.'},
     {fr:'Oui, aime.',q:1,reply:'Vous {aimez} votre travail, très bien. Moi, je suis professeur.'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous aimez} votre travail ?'}]}
  ]},
 {id:'famille',u:4,title:'Ma famille',art:'sun',
  setting:'Con el postre llega la conversación sobre la familia. Marc saca el teléfono para enseñarte una foto.',
  who:'Marc',
  phrases:[
   {id:'f1',fr:'J’ai une sœur.',syl:[['zhé','ün','sör']],cue:'Dices que tienes una hermana.'},
   {id:'f2',fr:'Mon frère s’appelle Paul.',syl:[['mõ','frér'],['sa','pel'],['pol']],cue:'Dices cómo se llama tu hermano.'},
   {id:'f3',fr:'Ma mère habite à Montevideo.',syl:[['ma','mér','a','bit'],['a','mõ','te','vi','de','o']],cue:'Dices dónde vive tu madre.'},
   {id:'f4',fr:'Vous avez des frères et sœurs ?',syl:[['vu','za','vé'],['dé','frér'],['é','sör']],cue:'Preguntas si tiene hermanos.'},
   {id:'f5',fr:'Voici ma famille.',syl:[['vua','si'],['ma','fa','miy']],cue:'Presentas a tu familia en una foto.'}
  ],
  turns:[
   {fr:'Vous avez des frères et sœurs ?',sense:'Te pregunta si tienes hermanos.',opts:[
     {fr:'J’ai une sœur.',q:2,reply:'Une sœur, c’est bien !'},
     {fr:'Sœur.',q:1,reply:'Vous {avez une sœur}, c’est bien !'},
     {fr:'Bonsoir.',q:0,reply:'Bonsoir ! Vous {avez} des frères et sœurs ?'}]},
   {fr:'Et vos parents, ils habitent où ?',sense:'Te pregunta dónde viven tus padres.',opts:[
     {fr:'Ma mère habite à Montevideo.',q:2,reply:'Montevideo, très joli !'},
     {fr:'Mère Montevideo.',q:1,reply:'{Votre mère habite à Montevideo}, très joli !'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Ils habitent} où ?'}]},
   {fr:'Vous avez une photo ?',sense:'Te pregunta si tienes una foto.',opts:[
     {fr:'Oui, voici ma famille.',q:2,reply:'Quelle belle famille !'},
     {fr:'Famille.',q:1,reply:'{Voici ma famille} ? Quelle belle famille !'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? {Une photo} ?'}]}
  ]},
 {id:'ville',u:4,title:'Ma ville',art:'sign',
  setting:'La charla se alarga. Marc te pregunta por tu ciudad y tú le describes cómo es vivir allí.',
  who:'Marc',
  phrases:[
   {id:'y1',fr:'J’habite dans une grande ville.',syl:[['zha','bit','dã','zün'],['grãd','vil']],cue:'Dices que vives en una ciudad grande.'},
   {id:'y2',fr:'Il y a beaucoup de monde.',syl:[['i','li','a'],['bo','ku','de','mõd']],cue:'Dices que hay mucha gente.'},
   {id:'y3',fr:'C’est très calme.',syl:[['se','tré','kalm']],cue:'Dices que es muy tranquilo.'},
   {id:'y4',fr:'C’est près de la mer.',syl:[['se','pré','de','la','mér']],cue:'Dices que está cerca del mar.'},
   {id:'y5',fr:'Vous connaissez Madrid ?',syl:[['vu','ko','ne','sé'],['ma','drid']],cue:'Preguntas si conoce Madrid.'}
  ],
  turns:[
   {fr:'Vous habitez dans une grande ville ?',sense:'Te pregunta si vives en una ciudad grande.',opts:[
     {fr:'Oui, j’habite dans une grande ville.',q:2,reply:'Madrid, c’est ça ?'},
     {fr:'Oui, grande.',q:1,reply:'Vous {habitez dans une grande ville}. Madrid, c’est ça ?'},
     {fr:'Au revoir.',q:0,reply:'Déjà ? {Vous habitez} où ?'}]},
   {fr:'Il y a beaucoup de monde ?',sense:'Te pregunta si hay mucha gente.',opts:[
     {fr:'Oui, il y a beaucoup de monde.',q:2,reply:'Comme à Paris !'},
     {fr:'Beaucoup monde.',q:1,reply:'{Il y a beaucoup de monde}, oui. Comme à Paris !'},
     {fr:'Merci.',q:0,reply:'Je vous en prie. {Il y a beaucoup de monde} ?'}]},
   {fr:'Moi, j’habite près de la mer. C’est très calme.',sense:'Te cuenta que vive cerca del mar y que es muy tranquilo.',opts:[
     {fr:'Ah, c’est très calme !',q:2,reply:'Oui, c’est très calme, près de la mer.'},
     {fr:'Calme.',q:1,reply:'{C’est très calme}, oui, près de la mer.'},
     {fr:'Excusez-moi.',q:0,reply:'Oui ? {Près de la mer}, c’est calme.'}]}
  ]},
 {id:'rdv',u:4,title:'Rendez-vous',art:'cup',
  setting:'La cena termina y la conversación ha ido tan bien que Marc propone volver a veros. Os ponéis de acuerdo en el día, el lugar y la hora.',
  who:'Marc',
  phrases:[
   {id:'x1',fr:'On se voit demain ?',syl:[['õ','se','vua'],['de','mẽ']],cue:'Propones veros mañana.'},
   {id:'x2',fr:'Vous êtes libre samedi ?',syl:[['vu','zét','libr'],['sam','di']],cue:'Preguntas si está libre el sábado.'},
   {id:'x3',fr:'À quelle heure on se retrouve ?',syl:[['a','kel','ör'],['õ','se','re','truv']],cue:'Preguntas a qué hora quedáis.'},
   {id:'x4',fr:'Rendez-vous devant la gare.',syl:[['rã','dé','vu'],['de','vã'],['la','gar']],cue:'Propones quedar delante de la estación.'},
   {id:'x5',fr:'Avec plaisir !',syl:[['a','vek','plé','zir']],cue:'Aceptas con gusto una invitación.'}
  ],
  turns:[
   {fr:'Je suis content de vous connaître. On se revoit ?',sense:'Dice que le alegra conocerte y propone volver a veros.',opts:[
     {fr:'Avec plaisir ! Vous êtes libre samedi ?',q:2,reply:'Oui, samedi, c’est parfait.'},
     {fr:'Oui. Samedi.',q:1,reply:'{Vous êtes libre samedi} ? Oui, c’est parfait.'},
     {fr:'Au revoir.',q:0,reply:'Ah… vous partez déjà ? {On se voit samedi} ?'}]},
   {fr:'Samedi, parfait. On se retrouve où ?',sense:'Pregunta dónde quedáis.',opts:[
     {fr:'Rendez-vous devant la gare.',q:2,reply:'Très bien, devant la gare.'},
     {fr:'Gare.',q:1,reply:'{Rendez-vous devant la gare}, très bien.'},
     {fr:'Merci beaucoup.',q:0,reply:'De rien… {on se retrouve} où ?'}]},
   {fr:'Parfait. Et à quelle heure ?',sense:'Pregunta a qué hora.',opts:[
     {fr:'À midi et demi.',q:2,reply:'Parfait. À samedi !'},
     {fr:'Midi.',q:1,reply:'{À midi et demi}, parfait. À samedi !'},
     {fr:'Bonjour.',q:0,reply:'Bonjour ! {À quelle heure} ?'}]}
  ]}
];
var SOUNDS=[
 {id:'s1',g:'u',rs:'ü',t:'La u francesa',tip:'Coloca la lengua para decir «i» y, sin moverla, redondea los labios como para silbar. Es la u de tu, rue y salut.',words:['tu','rue','salut','sûr']},
 {id:'s2',g:'ou',rs:'u',t:'La u de siempre',tip:'Se escribe «ou» y suena como la u española de «tú». Esta no cuesta.',words:['vous','tout','jour','pour']},
 {id:'s3',g:'eu',rs:'ö',t:'Entre e y o',tip:'Di «e» con los labios en posición de «o». Aparece en deux, peu y heure.',words:['peu','deux','heure','sœur']},
 {id:'s4',g:'on<br>an<br>in',sm:1,rs:'õ  ã  ẽ',t:'Las vocales nasales',tip:'El aire sale por la nariz y la n final no se pronuncia. Comprueba que «bon» no termina con la lengua pegada al paladar.',words:['bon','blanc','vin','pain']},
 {id:'s5',g:'r',rs:'r de garganta',t:'La r francesa',tip:'Se hace al fondo de la garganta, como la j de «caja» pero con una ligera vibración. Empieza diciendo «ga» y relaja.',words:['rue','merci','rouge','très']},
 {id:'s6',g:'j<br>ch',sm:1,rs:'zh  sh',t:'J y ch',tip:'La j suena como la «y» de «yo» o «calle» en el habla rioplatense. La ch suena como el «sh» con el que se pide silencio.',words:['je','jour','chat','chocolat']},
 {id:'s7',g:'t s d',sm:1,rs:'(mudas)',t:'Consonantes finales mudas',tip:'La consonante final casi nunca suena: petit, vous, Paris. Delante de una vocal se despierta y se une: «vous avez» suena vu-za-vé.',words:['petit','vous avez','les amis','Paris']}
];
var DAYS=[
 {n:1,t:'Saludar y presentarte',sc:'salut',m:20,goal:'Saludar, preguntar cómo está alguien, decir tu nombre y despedirte.'},
 {n:2,t:'En el café',sc:'cafe',m:20,goal:'Pedir una bebida y algo de comer con cortesía, y pedir la cuenta.'},
 {n:3,t:'Pedir ayuda en la calle',sc:'rue',m:20,goal:'Preguntar dónde está un lugar y decir que no entiendes sin quedarte callada.'},
 {n:4,t:'En el hotel',sc:'hotel',m:20,goal:'Anunciar una reserva, decir cuántas noches y preguntar por el ascensor.'},
 {n:5,t:'Los verbos de todos los días',sc:'verbes',m:20,goal:'Decir cómo estás, qué tienes, adónde vas y que no lo sabes, con verbos muy comunes: être, avoir, aller, pouvoir y savoir.'},
 {n:6,t:'Una jornada completa',sc:null,m:20,goal:'Unir las situaciones de la unidad en una sola historia.'},
 {n:7,t:'Repaso y mini-prueba',kind:'test',m:15,goal:'Comprobar qué has fijado: ocho frases que escuchas y reconoces.'},
 {n:8,t:'Descanso y balance',kind:'rest',m:10,goal:'Sin lecciones nuevas. Revisa lo que ya puedes hacer.'},
 {n:9,u:2,t:'Los números del 0 al 20',sc:'chiffres',m:20,goal:'Decir y entender números hasta veinte: una habitación, un autobús, un precio, cuántas personas sois.'},
 {n:10,u:2,t:'La hora',sc:'heure',m:20,goal:'Preguntar qué hora es y decir una hora: en punto, y cuarto, y media.'},
 {n:11,u:2,t:'Comprar un billete',sc:'billet',m:20,goal:'Pedir un billete de ida o de ida y vuelta y preguntar por el andén y la hora de salida.'},
 {n:12,u:2,t:'Metro y taxi',sc:'transport',m:20,goal:'Preguntar por el metro, decir adónde vas, cuánto se tarda y pedir que paren.'},
 {n:13,u:2,t:'Precios y pagar',sc:'prix',m:20,goal:'Preguntar cuánto cuesta, decir que es caro, preguntar por la tarjeta y pagar.'},
 {n:14,u:2,t:'Una jornada completa',sc:null,m:20,goal:'Unir la hora, el transporte, el billete y el pago en una sola historia.'},
 {n:15,u:2,t:'Repaso y mini-prueba',kind:'test',m:15,goal:'Comprobar qué has fijado en esta unidad: ocho frases que escuchas y reconoces.'},
 {n:16,u:2,t:'Descanso y balance',kind:'rest',m:10,goal:'Sin lecciones nuevas. Revisa lo que ya puedes hacer.'},
 {n:17,u:3,t:'Pedir en un restaurante',sc:'resto',m:20,goal:'Pedir una mesa y la carta, preguntar qué recomiendan y elegir un plato.'},
 {n:18,u:3,t:'Platos y bebidas',sc:'plats',m:20,goal:'Pedir entrante, plato principal, postre y bebida.'},
 {n:19,u:3,t:'El mercado',sc:'marche',m:20,goal:'Decir qué buscas, preguntar si está bueno y cuánto cuesta el kilo.'},
 {n:20,u:3,t:'Cantidades',sc:'quant',m:20,goal:'Pedir una cantidad: un poco, doscientos gramos, una botella, un trozo.'},
 {n:21,u:3,t:'Decir lo que no comes',sc:'sans',m:20,goal:'Explicar que no comes carne, que eres alérgica a algo o que quieres un plato sin algo.'},
 {n:22,u:3,t:'Una jornada completa',sc:null,m:20,goal:'Unir mesa, platos, cantidades y restricciones en una sola cena.'},
 {n:23,u:3,t:'Repaso y mini-prueba',kind:'test',m:15,goal:'Comprobar qué has fijado en esta unidad: ocho frases que escuchas y reconoces.'},
 {n:24,u:3,t:'Descanso y balance',kind:'rest',m:10,goal:'Sin lecciones nuevas. Revisa lo que ya puedes hacer.'},
 {n:25,u:4,t:'Presentarte mejor',sc:'moi',m:20,goal:'Decir tu nombre, de dónde eres, dónde vives y qué idiomas hablas, y preguntar lo mismo.'},
 {n:26,u:4,t:'Tu trabajo',sc:'travail',m:20,goal:'Decir tu profesión y dónde trabajas, y preguntar a qué se dedica la otra persona.'},
 {n:27,u:4,t:'Tu familia',sc:'famille',m:20,goal:'Hablar de tus hermanos y de tus padres, y enseñar una foto.'},
 {n:28,u:4,t:'Tu ciudad',sc:'ville',m:20,goal:'Describir dónde vives: si es grande, tranquila o cerca del mar.'},
 {n:29,u:4,t:'Quedar con alguien',sc:'rdv',m:20,goal:'Proponer un día, un lugar y una hora, y aceptar con gusto.'},
 {n:30,u:4,t:'Una jornada completa',sc:null,m:20,goal:'Unir presentación, trabajo, familia y una cita en una sola conversación.'},
 {n:31,u:4,t:'Prueba final del nivel',kind:'test',final:true,m:15,goal:'Comprobar qué has fijado en todo el curso: ocho frases elegidas entre las cuatro unidades.'},
 {n:32,u:4,t:'Descanso y balance',kind:'rest',m:10,goal:'Sin lecciones nuevas. Revisa lo que ya puedes hacer.'}
];
DAYS.forEach(function(d){d.u=d.u||1;d.k=d.n-(d.u-1)*8});
var STORY={
 1:[{w:'Julien',fr:'Bonjour, madame !',es:'¡Buenos días, señora!'},
    {w:'Clara',fr:'Bonjour ! Ça va ?',es:'¡Buenos días! ¿Qué tal?'},
    {w:'Julien',fr:'Ça va bien, merci. Je m’appelle Julien.',es:'Bien, gracias. Me llamo Julien.'},
    {w:'Clara',fr:'Enchantée. Je m’appelle Clara.',es:'Encantada. Me llamo Clara.'},
    {w:'Julien',fr:'Enchanté, Clara. À demain !',es:'Encantado, Clara. ¡Hasta mañana!'},
    {w:'Clara',fr:'Au revoir, à demain !',es:'¡Adiós, hasta mañana!'}],
 2:[{w:'Le serveur',fr:'Bonjour ! Qu’est-ce que je vous sers ?',es:'¡Buenos días! ¿Qué le sirvo?'},
    {w:'Clara',fr:'Bonjour. Un café, s’il vous plaît.',es:'Buenos días. Un café, por favor.'},
    {w:'Le serveur',fr:'Très bien. Et avec ça ?',es:'Muy bien. ¿Y con eso?'},
    {w:'Clara',fr:'Je voudrais un croissant.',es:'Querría un croissant.'},
    {w:'Le serveur',fr:'Voilà. Ça fait six euros.',es:'Aquí tiene. Son seis euros.'},
    {w:'Clara',fr:'Merci beaucoup !',es:'¡Muchas gracias!'},
    {w:'Le serveur',fr:'Je vous en prie. Bonne journée !',es:'De nada. ¡Que tenga buen día!'}],
 3:[{w:'Clara',fr:'Excusez-moi ! Où est la gare, s’il vous plaît ?',es:'¡Perdone! ¿Dónde está la estación, por favor?'},
    {w:'Un passant',fr:'C’est tout droit, puis à gauche.',es:'Todo recto y luego a la izquierda.'},
    {w:'Clara',fr:'Pardon, je ne comprends pas. Plus lentement, s’il vous plaît.',es:'Perdón, no entiendo. Más despacio, por favor.'},
    {w:'Un passant',fr:'Tout droit… puis à gauche. Voilà.',es:'Todo recto… y luego a la izquierda. Ya está.'},
    {w:'Clara',fr:'Merci beaucoup, bonne journée !',es:'¡Muchas gracias, que tenga buen día!'},
    {w:'Un passant',fr:'Je vous en prie. Au revoir !',es:'De nada. ¡Adiós!'}],
 4:[{w:'Clara',fr:'Bonsoir. J’ai une réservation.',es:'Buenas noches. Tengo una reserva.'},
    {w:'La réceptionniste',fr:'Parfait, madame. C’est pour combien de nuits ?',es:'Perfecto, señora. ¿Para cuántas noches?'},
    {w:'Clara',fr:'Pour deux nuits.',es:'Para dos noches.'},
    {w:'La réceptionniste',fr:'Voici votre clé. Chambre douze, au deuxième étage.',es:'Aquí tiene su llave. Habitación doce, segundo piso.'},
    {w:'Clara',fr:'Où est l’ascenseur, s’il vous plaît ?',es:'¿Dónde está el ascensor, por favor?'},
    {w:'La réceptionniste',fr:'Là, à droite. Bonne soirée !',es:'Allí, a la derecha. ¡Buenas noches!'},
    {w:'Clara',fr:'Merci, bonne soirée !',es:'¡Gracias, buenas noches!'}],
 5:[{w:'La fleuriste',fr:'Bonjour ! Vous allez bien ?',es:'¡Buenos días! ¿Se encuentra bien?'},
    {w:'Clara',fr:'Je suis fatiguée.',es:'Estoy cansada.'},
    {w:'La fleuriste',fr:'Vous avez faim ? Il y a un café là-bas.',es:'¿Tiene hambre? Hay un café allí.'},
    {w:'Clara',fr:'Oui, j’ai faim.',es:'Sí, tengo hambre.'},
    {w:'La fleuriste',fr:'Et vous allez où ?',es:'¿Y adónde va?'},
    {w:'Clara',fr:'Je vais à la gare.',es:'Voy a la estación.'},
    {w:'La fleuriste',fr:'Vous voulez des fleurs ?',es:'¿Quiere flores?'},
    {w:'Clara',fr:'Je ne sais pas. Je peux payer par carte ?',es:'No lo sé. ¿Puedo pagar con tarjeta?'}],
 6:[{w:'Clara',fr:'Bonjour ! Un café, s’il vous plaît.',es:'¡Buenos días! Un café, por favor.'},
    {w:'Le serveur',fr:'Voilà. Ça fait trois euros.',es:'Aquí tiene. Son tres euros.'},
    {w:'Clara',fr:'Excusez-moi, où est la gare ?',es:'Perdone, ¿dónde está la estación?'},
    {w:'Un passant',fr:'C’est tout droit, puis à gauche.',es:'Todo recto y luego a la izquierda.'},
    {w:'Clara',fr:'Plus lentement, s’il vous plaît.',es:'Más despacio, por favor.'},
    {w:'Un passant',fr:'Tout droit… puis à gauche. Voilà.',es:'Todo recto… y luego a la izquierda. Ya está.'},
    {w:'Clara',fr:'Bonsoir. J’ai une réservation.',es:'Buenas noches. Tengo una reserva.'},
    {w:'La réceptionniste',fr:'Bonsoir, madame. Bienvenue !',es:'Buenas noches, señora. ¡Bienvenida!'}],
 9:[{w:'La réceptionniste',fr:'Bonsoir, madame. Voici votre clé.',es:'Buenas noches, señora. Aquí tiene su llave.'},
    {w:'Clara',fr:'Merci. Ma chambre, c’est le douze ?',es:'Gracias. Mi habitación, ¿es la doce?'},
    {w:'La réceptionniste',fr:'Oui, le douze, au premier étage.',es:'Sí, la doce, en el primer piso.'},
    {w:'Clara',fr:'Nous sommes huit. Pour la gare, c’est le bus numéro neuf ?',es:'Somos ocho. Para la estación, ¿es el autobús número nueve?'},
    {w:'La réceptionniste',fr:'Oui, le neuf. Ou le taxi : treize euros.',es:'Sí, el nueve. O el taxi: trece euros.'},
    {w:'Clara',fr:'Vous dites douze ou treize ?',es:'¿Dice doce o trece?'},
    {w:'La réceptionniste',fr:'Treize, madame.',es:'Trece, señora.'},
    {w:'Clara',fr:'Ça fait treize euros ? Très bien, merci.',es:'¿Son trece euros? Muy bien, gracias.'}],
 10:[{w:'Clara',fr:'Excusez-moi, quelle heure est-il ?',es:'Perdone, ¿qué hora es?'},
    {w:'Un passant',fr:'Il est huit heures.',es:'Son las ocho.'},
    {w:'Clara',fr:'Merci. Et le train pour Lyon ? À quelle heure ?',es:'Gracias. ¿Y el tren a Lyon? ¿A qué hora?'},
    {w:'Un passant',fr:'À neuf heures et quart.',es:'A las nueve y cuarto.'},
    {w:'Clara',fr:'Et le restaurant de la gare ?',es:'¿Y el restaurante de la estación?'},
    {w:'Un passant',fr:'Il ouvre à midi et demi.',es:'Abre a las doce y media.'},
    {w:'Clara',fr:'À midi et demi, d’accord. Merci !',es:'A las doce y media, de acuerdo. ¡Gracias!'}],
 11:[{w:'Clara',fr:'Bonjour. Un billet pour Lyon, s’il vous plaît.',es:'Buenos días. Un billete para Lyon, por favor.'},
    {w:'L’employé',fr:'Aller simple ou aller-retour ?',es:'¿Ida o ida y vuelta?'},
    {w:'Clara',fr:'Un aller-retour, s’il vous plaît.',es:'Ida y vuelta, por favor.'},
    {w:'L’employé',fr:'Voilà. Ça fait dix-huit euros.',es:'Aquí tiene. Son dieciocho euros.'},
    {w:'Clara',fr:'Le train part à quelle heure ?',es:'¿A qué hora sale el tren?'},
    {w:'L’employé',fr:'À neuf heures et quart.',es:'A las nueve y cuarto.'},
    {w:'Clara',fr:'C’est quel quai ?',es:'¿Qué andén es?'},
    {w:'L’employé',fr:'Quai douze. Bon voyage !',es:'Andén doce. ¡Buen viaje!'}],
 12:[{w:'Clara',fr:'Excusez-moi, où est la station de métro ?',es:'Perdone, ¿dónde está la estación de metro?'},
    {w:'Un passant',fr:'Là, à droite, après la pharmacie.',es:'Allí, a la derecha, después de la farmacia.'},
    {w:'Clara',fr:'Je voudrais aller à la gare. C’est direct ?',es:'Quisiera ir a la estación. ¿Es directo?'},
    {w:'Un passant',fr:'Non, il y a un changement. Prenez le taxi.',es:'No, hay un transbordo. Tome un taxi.'},
    {w:'Clara',fr:'Combien de temps, en taxi ?',es:'¿Cuánto se tarda en taxi?'},
    {w:'Un passant',fr:'Vingt minutes.',es:'Veinte minutos.'},
    {w:'Le chauffeur',fr:'Voilà la gare, madame. Ici ?',es:'Ya está la estación, señora. ¿Aquí?'},
    {w:'Clara',fr:'Oui, arrêtez-vous ici, s’il vous plaît.',es:'Sí, pare aquí, por favor.'}],
 13:[{w:'Clara',fr:'Bonjour ! Ça coûte combien ?',es:'¡Buenos días! ¿Cuánto cuesta?'},
    {w:'La vendeuse',fr:'Ce foulard ? Dix-huit euros.',es:'¿Este pañuelo? Dieciocho euros.'},
    {w:'Clara',fr:'Hmm, c’est trop cher.',es:'Mmm, es demasiado caro.'},
    {w:'La vendeuse',fr:'Pour vous, seize euros.',es:'Para usted, dieciséis euros.'},
    {w:'Clara',fr:'D’accord, je prends ça. Vous acceptez la carte ?',es:'De acuerdo, me lo llevo. ¿Aceptan tarjeta?'},
    {w:'La vendeuse',fr:'Non, désolée, pas de carte.',es:'No, lo siento, no hay tarjeta.'},
    {w:'Clara',fr:'Pas de problème. Voilà vingt euros.',es:'Sin problema. Aquí tiene veinte euros.'},
    {w:'La vendeuse',fr:'Merci ! Et voilà quatre euros.',es:'¡Gracias! Y aquí tiene cuatro euros.'}],
 14:[{w:'Clara',fr:'Excusez-moi, quelle heure est-il ?',es:'Perdone, ¿qué hora es?'},
    {w:'Un passant',fr:'Il est huit heures.',es:'Son las ocho.'},
    {w:'Clara',fr:'Merci. Je voudrais aller à la gare. C’est direct ?',es:'Gracias. Quisiera ir a la estación. ¿Es directo?'},
    {w:'Un passant',fr:'Oui, prenez le bus numéro neuf.',es:'Sí, tome el autobús número nueve.'},
    {w:'Clara',fr:'Un aller-retour pour Lyon, s’il vous plaît.',es:'Un billete de ida y vuelta para Lyon, por favor.'},
    {w:'L’employé',fr:'Ça fait dix-huit euros.',es:'Son dieciocho euros.'},
    {w:'Clara',fr:'Voilà vingt euros. Le train part à quelle heure ?',es:'Aquí tiene veinte euros. ¿A qué hora sale el tren?'},
    {w:'L’employé',fr:'À neuf heures et quart, quai douze.',es:'A las nueve y cuarto, andén doce.'}],
 17:[{w:'Le serveur',fr:'Bonsoir, madame. Vous êtes combien ?',es:'Buenas noches, señora. ¿Cuántos son?'},
    {w:'Clara',fr:'Une table pour deux, s’il vous plaît.',es:'Una mesa para dos, por favor.'},
    {w:'Le serveur',fr:'Par ici. Je vous apporte la carte ?',es:'Por aquí. ¿Le traigo la carta?'},
    {w:'Clara',fr:'Oui, je voudrais la carte, s’il vous plaît.',es:'Sí, quisiera la carta, por favor.'},
    {w:'Le serveur',fr:'Voilà. Vous avez choisi ?',es:'Aquí tiene. ¿Ha elegido?'},
    {w:'Clara',fr:'Qu’est-ce que vous recommandez ?',es:'¿Qué me recomienda?'},
    {w:'Le serveur',fr:'Le poulet est excellent.',es:'El pollo es excelente.'},
    {w:'Clara',fr:'Je prends le poulet.',es:'Tomo el pollo.'},
    {w:'Le serveur',fr:'Tout va bien, madame ?',es:'¿Todo bien, señora?'},
    {w:'Clara',fr:'C’était très bon, merci.',es:'Estaba muy bueno, gracias.'}],
 18:[{w:'Le serveur',fr:'Vous prenez une entrée ?',es:'¿Toma un entrante?'},
    {w:'Clara',fr:'Oui, comme entrée, une soupe.',es:'Sí, de entrante, una sopa.'},
    {w:'Le serveur',fr:'Et comme plat ?',es:'¿Y de plato principal?'},
    {w:'Clara',fr:'Comme plat, le poisson.',es:'De plato principal, el pescado.'},
    {w:'Le serveur',fr:'Et pour boire ?',es:'¿Y para beber?'},
    {w:'Clara',fr:'Une carafe d’eau, s’il vous plaît. Et un verre de vin rouge.',es:'Una jarra de agua, por favor. Y una copa de vino tinto.'},
    {w:'Le serveur',fr:'Très bien. Et comme dessert ?',es:'Muy bien. ¿Y de postre?'},
    {w:'Clara',fr:'Et comme dessert, une glace.',es:'Y de postre, un helado.'}],
 19:[{w:'Le marchand',fr:'Bonjour, madame ! Qu’est-ce que vous cherchez ?',es:'¡Buenos días, señora! ¿Qué busca?'},
    {w:'Clara',fr:'Bonjour, je cherche des pommes.',es:'Buenos días, busco manzanas.'},
    {w:'Le marchand',fr:'Les voilà. Ce sont des pommes de la région.',es:'Aquí están. Son manzanas de la región.'},
    {w:'Clara',fr:'Elles sont bonnes ? C’est combien le kilo ?',es:'¿Están buenas? ¿Cuánto cuesta el kilo?'},
    {w:'Le marchand',fr:'Très bonnes. Trois euros le kilo.',es:'Muy buenas. Tres euros el kilo.'},
    {w:'Clara',fr:'Je voudrais un kilo, s’il vous plaît.',es:'Quisiera un kilo, por favor.'},
    {w:'Le marchand',fr:'Voilà. Ce sera tout ?',es:'Aquí tiene. ¿Eso es todo?'},
    {w:'Clara',fr:'Oui, ce sera tout, merci.',es:'Sí, eso es todo, gracias.'}],
 20:[{w:'L’épicier',fr:'Bonjour ! Je vous sers ?',es:'¡Buenos días! ¿Qué le pongo?'},
    {w:'Clara',fr:'Bonjour. Deux cents grammes de jambon, s’il vous plaît.',es:'Buenos días. Doscientos gramos de jamón, por favor.'},
    {w:'L’épicier',fr:'Voilà. Et avec ça ?',es:'Aquí tiene. ¿Y con eso?'},
    {w:'Clara',fr:'Un peu de fromage, s’il vous plaît.',es:'Un poco de queso, por favor.'},
    {w:'L’épicier',fr:'Comme ça ?',es:'¿Así?'},
    {w:'Clara',fr:'Encore un peu, merci.',es:'Un poco más, gracias.'},
    {w:'L’épicier',fr:'Voilà. Autre chose ?',es:'Aquí tiene. ¿Algo más?'},
    {w:'Clara',fr:'Une bouteille d’eau et un morceau de pain.',es:'Una botella de agua y un trozo de pan.'}],
 21:[{w:'Le serveur',fr:'Voici le plat du jour : un poulet rôti.',es:'Este es el plato del día: pollo asado.'},
    {w:'Clara',fr:'Je ne mange pas de viande. C’est sans viande ?',es:'No como carne. ¿Es sin carne?'},
    {w:'Le serveur',fr:'Non, madame. Mais il y a une salade.',es:'No, señora. Pero hay una ensalada.'},
    {w:'Clara',fr:'Il y a du gluten ?',es:'¿Lleva gluten?'},
    {w:'Le serveur',fr:'Non, pas de gluten. Il y a du fromage et des noix.',es:'No, sin gluten. Lleva queso y nueces.'},
    {w:'Clara',fr:'Je suis allergique aux noix, désolée.',es:'Soy alérgica a las nueces, lo siento.'},
    {w:'Le serveur',fr:'Pas de problème. Sans noix.',es:'Sin problema. Sin nueces.'},
    {w:'Clara',fr:'Sans oignon, s’il vous plaît. Merci !',es:'Sin cebolla, por favor. ¡Gracias!'}],
 22:[{w:'Clara',fr:'Bonsoir. Une table pour deux, s’il vous plaît.',es:'Buenas noches. Una mesa para dos, por favor.'},
    {w:'Le serveur',fr:'Voilà la carte. Vous avez choisi ?',es:'Aquí tiene la carta. ¿Ha elegido?'},
    {w:'Clara',fr:'Je ne mange pas de viande. Qu’est-ce que vous recommandez ?',es:'No como carne. ¿Qué me recomienda?'},
    {w:'Le serveur',fr:'Le poisson est excellent.',es:'El pescado es excelente.'},
    {w:'Clara',fr:'Je prends le poisson. Une carafe d’eau, s’il vous plaît.',es:'Tomo el pescado. Una jarra de agua, por favor.'},
    {w:'Le serveur',fr:'Et comme dessert ?',es:'¿Y de postre?'},
    {w:'Clara',fr:'Un peu de fromage, s’il vous plaît.',es:'Un poco de queso, por favor.'},
    {w:'Le serveur',fr:'Voilà. Tout va bien ?',es:'Aquí tiene. ¿Todo bien?'},
    {w:'Clara',fr:'C’était très bon, merci.',es:'Estaba muy bueno, gracias.'}],
 25:[{w:'Marc',fr:'Bonsoir ! Je m’appelle Marc. Et vous ?',es:'¡Buenas noches! Me llamo Marc. ¿Y usted?'},
    {w:'Clara',fr:'Je m’appelle Clara. Enchantée de faire votre connaissance.',es:'Me llamo Clara. Encantada de conocerle.'},
    {w:'Marc',fr:'Enchanté, Clara. Vous venez d’où ?',es:'Encantado, Clara. ¿De dónde es usted?'},
    {w:'Clara',fr:'Je viens d’Uruguay, mais j’habite à Madrid.',es:'Soy de Uruguay, pero vivo en Madrid.'},
    {w:'Marc',fr:'Ah, vous parlez espagnol !',es:'¡Ah, habla español!'},
    {w:'Clara',fr:'Oui, je parle espagnol et un peu français.',es:'Sí, hablo español y un poco de francés.'},
    {w:'Marc',fr:'Et vous parlez très bien !',es:'¡Y habla muy bien!'},
    {w:'Clara',fr:'Merci ! Et vous, vous venez d’où ?',es:'¡Gracias! Y usted, ¿de dónde es?'},
    {w:'Marc',fr:'Moi, je viens de Lyon.',es:'Yo soy de Lyon.'}],
 26:[{w:'Marc',fr:'Et vous, Clara, vous faites quoi dans la vie ?',es:'Y usted, Clara, ¿a qué se dedica?'},
    {w:'Clara',fr:'Je suis avocate.',es:'Soy abogada.'},
    {w:'Marc',fr:'Avocate ! Vous travaillez où ?',es:'¡Abogada! ¿Dónde trabaja?'},
    {w:'Clara',fr:'Je travaille dans un cabinet. Je travaille beaucoup !',es:'Trabajo en un despacho. ¡Trabajo mucho!'},
    {w:'Marc',fr:'Et vous aimez votre travail ?',es:'¿Y le gusta su trabajo?'},
    {w:'Clara',fr:'Oui, j’aime mon travail. Et vous, vous faites quoi ?',es:'Sí, me gusta mi trabajo. Y usted, ¿a qué se dedica?'},
    {w:'Marc',fr:'Moi, je suis professeur.',es:'Yo soy profesor.'}],
 27:[{w:'Marc',fr:'Vous avez des frères et sœurs, Clara ?',es:'¿Tiene hermanos, Clara?'},
    {w:'Clara',fr:'J’ai une sœur et un frère. Mon frère s’appelle Paul.',es:'Tengo una hermana y un hermano. Mi hermano se llama Paul.'},
    {w:'Marc',fr:'Et vos parents, ils habitent où ?',es:'¿Y sus padres, dónde viven?'},
    {w:'Clara',fr:'Ma mère habite à Montevideo.',es:'Mi madre vive en Montevideo.'},
    {w:'Marc',fr:'Vous avez une photo ?',es:'¿Tiene una foto?'},
    {w:'Clara',fr:'Oui, voici ma famille.',es:'Sí, esta es mi familia.'},
    {w:'Marc',fr:'Quelle belle famille !',es:'¡Qué bonita familia!'},
    {w:'Clara',fr:'Merci ! Et vous, vous avez des frères et sœurs ?',es:'¡Gracias! Y usted, ¿tiene hermanos?'}],
 28:[{w:'Marc',fr:'Vous habitez dans une grande ville ?',es:'¿Vive en una ciudad grande?'},
    {w:'Clara',fr:'Oui, j’habite dans une grande ville. Il y a beaucoup de monde.',es:'Sí, vivo en una ciudad grande. Hay mucha gente.'},
    {w:'Marc',fr:'Moi, j’habite près de la mer. C’est très calme.',es:'Yo vivo cerca del mar. Es muy tranquilo.'},
    {w:'Clara',fr:'C’est près de la mer ? Quelle chance !',es:'¿Cerca del mar? ¡Qué suerte!'},
    {w:'Marc',fr:'Oui ! Vous connaissez Marseille ?',es:'¡Sí! ¿Conoce Marsella?'},
    {w:'Clara',fr:'Non. Et vous, vous connaissez Madrid ?',es:'No. Y usted, ¿conoce Madrid?'},
    {w:'Marc',fr:'Non, pas encore.',es:'No, todavía no.'},
    {w:'Clara',fr:'Alors, venez !',es:'¡Pues venga!'}],
 29:[{w:'Marc',fr:'Je suis content de vous connaître. On se voit demain ?',es:'Me alegra conocerla. ¿Nos vemos mañana?'},
    {w:'Clara',fr:'Demain, je travaille. Vous êtes libre samedi ?',es:'Mañana trabajo. ¿Está libre el sábado?'},
    {w:'Marc',fr:'Oui, samedi, c’est parfait.',es:'Sí, el sábado es perfecto.'},
    {w:'Clara',fr:'Rendez-vous devant la gare. À quelle heure on se retrouve ?',es:'Quedamos delante de la estación. ¿A qué hora nos encontramos?'},
    {w:'Marc',fr:'À midi et demi ?',es:'¿A las doce y media?'},
    {w:'Clara',fr:'Avec plaisir !',es:'¡Con mucho gusto!'},
    {w:'Marc',fr:'À samedi !',es:'¡Hasta el sábado!'},
    {w:'Clara',fr:'À samedi, Marc !',es:'¡Hasta el sábado, Marc!'}],
 30:[{w:'Clara',fr:'Bonsoir ! Je m’appelle Clara. Enchantée de faire votre connaissance.',es:'¡Buenas noches! Me llamo Clara. Encantada de conocerle.'},
    {w:'Marc',fr:'Enchanté. Vous venez d’où ?',es:'Encantado. ¿De dónde es usted?'},
    {w:'Clara',fr:'Je viens d’Uruguay, mais j’habite à Madrid.',es:'Soy de Uruguay, pero vivo en Madrid.'},
    {w:'Marc',fr:'Et vous faites quoi dans la vie ?',es:'¿Y a qué se dedica?'},
    {w:'Clara',fr:'Je suis avocate. Je travaille dans un cabinet.',es:'Soy abogada. Trabajo en un despacho.'},
    {w:'Marc',fr:'Vous avez des frères et sœurs ?',es:'¿Tiene hermanos?'},
    {w:'Clara',fr:'J’ai une sœur. Et vous ?',es:'Tengo una hermana. ¿Y usted?'},
    {w:'Marc',fr:'Moi aussi. Vous êtes libre samedi ?',es:'Yo también. ¿Está libre el sábado?'},
    {w:'Clara',fr:'Avec plaisir ! À quelle heure on se retrouve ?',es:'¡Con mucho gusto! ¿A qué hora nos encontramos?'}]
};
var PLAN=[
];
var STAGES=[
 {k:'Principio',t:'Unidades 1 y 2 · Sobrevivir y moverte',d:'Saludar, un café, pedir ayuda y un hotel; después números, hora, billetes, metro, taxi y precios. Cada unidad termina con una mini-prueba.',s:'Disponible'},
 {k:'Desarrollo',t:'Unidad 3 · Mesa y mercado',d:'Restaurante, platos y bebidas, mercado, cantidades y decir lo que no comes. Sigue el mismo ritmo de ocho sesiones.',s:'Disponible'},
 {k:'Final',t:'Unidad 4 · Conversar',d:'Presentarte, hablar de tu trabajo, tu familia y tu ciudad, y quedar con alguien. Cierra con una prueba final de todo el curso.',s:'Disponible'}
];
var RHY=['c1','c2','c3','h5'];
var WEEKS=[
 {w:'U1',t:'Sobrevivir',d:'Saludo, café, calle, hotel y verbos comunes.',o:'Pedir, saludar y recuperar la conversación cuando no entiendes.'},
 {w:'U2',t:'Moverse',d:'Taquilla, taxi y horarios.',o:'Comprar un billete y entender una hora dicha en voz alta.'},
 {w:'U3',t:'Mesa y mercado',d:'Restaurante, mercado y pago.',o:'Pedir una comida completa y preguntar un precio.'},
 {w:'U4',t:'Primeras conversaciones',d:'Presentarte y hablar de tu trabajo.',o:'Mantener tres minutos de conversación con alguien.'}
];
var GOALS2=[
 'Decir y entender números del 0 al 20 en una habitación, un precio o un autobús.',
 'Preguntar qué hora es y decir una hora: en punto, y cuarto, y media.',
 'Comprar un billete y preguntar por el andén y la hora de salida.',
 'Preguntar cuánto cuesta algo, decir que es caro y pagar.'
];
var GOALS3=[
 'Pedir una mesa, la carta y un plato en un restaurante.',
 'Pedir entrante, plato, postre y bebida.',
 'Pedir una cantidad en el mercado y preguntar el precio por kilo.',
 'Decir que no comes algo, que eres alérgica o que lo quieres sin algo.'
];
var GOALS4=[
 'Presentarte: nombre, de dónde eres, dónde vives y qué idiomas hablas.',
 'Decir tu profesión y dónde trabajas, y preguntar a qué se dedica la otra persona.',
 'Hablar de tu familia y de tu ciudad en frases cortas.',
 'Proponer y aceptar una cita: día, hora y lugar.'
];
var GOALS=[
 'Saludar y despedirte según la hora del día.',
 'Pedir algo con cortesía usando «je voudrais».',
 'Preguntar dónde está un lugar y entender lo esencial de la respuesta.',
 'Pedir que repitan o que hablen más despacio cuando no entiendes.'
];
var WORDS=[{"w": "je", "r": 2, "es": "yo", "ex": "Je suis fatiguée.", "ees": "Estoy cansada."}, {"w": "est", "r": 3, "es": "es, está (verbo être)", "ex": "Il est à la gare.", "ees": "Está en la estación."}, {"w": "pas", "r": 4, "es": "no (en negativas)", "ex": "Je ne sais pas.", "ees": "No lo sé."}, {"w": "vous", "r": 8, "es": "usted, ustedes, vosotros", "ex": "Vous allez bien ?", "ees": "¿Se encuentra bien?"}, {"w": "tu", "r": 9, "es": "tú", "ex": "Tu as faim ?", "ees": "¿Tienes hambre?"}, {"w": "un", "r": 10, "es": "un, uno", "ex": "Un café, s’il vous plaît.", "ees": "Un café, por favor."}, {"w": "à", "r": 12, "es": "a, en", "ex": "Je vais à la gare.", "ees": "Voy a la estación."}, {"w": "il", "r": 14, "es": "él", "ex": "Il est fatigué.", "ees": "Está cansado."}, {"w": "on", "r": 21, "es": "se; también «nosotros» al hablar", "ex": "On va au café ?", "ees": "¿Vamos al café?"}, {"w": "ça", "r": 22, "es": "eso", "ex": "Ça va bien.", "ees": "Va bien."}, {"w": "mais", "r": 32, "es": "pero", "ex": "Je suis fatiguée, mais ça va.", "ees": "Estoy cansada, pero estoy bien."}, {"w": "nous", "r": 34, "es": "nosotros", "ex": "Nous allons à la gare.", "ees": "Vamos a la estación."}, {"w": "elle", "r": 35, "es": "ella", "ex": "Elle parle français.", "ees": "Ella habla francés."}, {"w": "bien", "r": 37, "es": "bien", "ex": "Ça va bien, merci.", "ees": "Bien, gracias."}, {"w": "suis", "r": 41, "es": "soy, estoy (être)", "ex": "Je suis ici.", "ees": "Estoy aquí."}, {"w": "non", "r": 42, "es": "no", "ex": "Non, merci.", "ees": "No, gracias."}, {"w": "avec", "r": 44, "es": "con", "ex": "Avec plaisir !", "ees": "¡Con mucho gusto!"}, {"w": "tout", "r": 45, "es": "todo", "ex": "C’est tout droit.", "ees": "Es todo recto."}, {"w": "plus", "r": 46, "es": "más", "ex": "Plus lentement, s’il vous plaît.", "ees": "Más despacio, por favor."}, {"w": "fait", "r": 51, "es": "hace, hecho (faire)", "ex": "Ça fait six euros.", "ees": "Son seis euros."}, {"w": "moi", "r": 52, "es": "yo (tras preposición)", "ex": "Pour moi, un café.", "ees": "Para mí, un café."}, {"w": "oui", "r": 54, "es": "sí", "ex": "Oui, j’ai faim.", "ees": "Sí, tengo hambre."}, {"w": "va", "r": 55, "es": "va (aller)", "ex": "Ça va ?", "ees": "¿Todo bien?"}, {"w": "quoi", "r": 61, "es": "qué (informal)", "ex": "C’est quoi ?", "ees": "¿Qué es?"}, {"w": "sais", "r": 64, "es": "sé (savoir)", "ex": "Je ne sais pas.", "ees": "No lo sé."}, {"w": "veux", "r": 66, "es": "quiero (vouloir), más directo que «je voudrais»", "ex": "Je veux un café.", "ees": "Quiero un café."}, {"w": "ici", "r": 67, "es": "aquí", "ex": "Je suis ici.", "ees": "Estoy aquí."}, {"w": "est-ce", "r": 70, "es": "fórmula de pregunta («est-ce que»)", "ex": "Est-ce que vous parlez espagnol ?", "ees": "¿Habla usted español?"}, {"w": "pourquoi", "r": 75, "es": "por qué", "ex": "Pourquoi ?", "ees": "¿Por qué?"}, {"w": "où", "r": 76, "es": "dónde", "ex": "Où est la gare ?", "ees": "¿Dónde está la estación?"}, {"w": "là", "r": 77, "es": "allí, ahí", "ex": "Là, à droite.", "ees": "Allí, a la derecha."}, {"w": "rien", "r": 78, "es": "nada", "ex": "De rien.", "ees": "De nada."}, {"w": "quand", "r": 81, "es": "cuándo", "ex": "C’est quand ?", "ees": "¿Cuándo es?"}, {"w": "peux", "r": 82, "es": "puedo (pouvoir)", "ex": "Je peux payer par carte ?", "ees": "¿Puedo pagar con tarjeta?"}, {"w": "avez", "r": 85, "es": "tiene, tienen (avoir), con «vous»", "ex": "Vous avez faim ?", "ees": "¿Tiene hambre?"}, {"w": "vais", "r": 86, "es": "voy (aller)", "ex": "Je vais à la gare.", "ees": "Voy a la estación."}, {"w": "alors", "r": 87, "es": "entonces, pues", "ex": "Alors, allez-y !", "ees": "Entonces, ¡adelante!"}, {"w": "comment", "r": 89, "es": "cómo", "ex": "Comment allez-vous ?", "ees": "¿Cómo está usted?"}, {"w": "bon", "r": 93, "es": "bueno", "ex": "Bon, à bientôt !", "ees": "Bueno, ¡hasta pronto!"}, {"w": "merci", "r": 95, "es": "gracias", "ex": "Merci beaucoup.", "ees": "Muchas gracias."}, {"w": "très", "r": 97, "es": "muy", "ex": "Très bien.", "ees": "Muy bien."}, {"w": "aussi", "r": 100, "es": "también", "ex": "Moi aussi.", "ees": "Yo también."}, {"w": "êtes", "r": 112, "es": "es, está usted (être)", "ex": "Vous êtes fatiguée ?", "ees": "¿Está usted cansada?"}, {"w": "allez", "r": 113, "es": "va usted, vayan (aller)", "ex": "Vous allez où ?", "ees": "¿Adónde va usted?"}, {"w": "autre", "r": 115, "es": "otro", "ex": "Un autre café, s’il vous plaît.", "ees": "Otro café, por favor."}, {"w": "temps", "r": 117, "es": "tiempo", "ex": "Je n’ai pas le temps.", "ees": "No tengo tiempo."}, {"w": "besoin", "r": 124, "es": "necesidad («avoir besoin de»)", "ex": "J’ai besoin d’aide.", "ees": "Necesito ayuda."}, {"w": "accord", "r": 126, "es": "acuerdo (se usa en «d’accord»)", "ex": "D’accord !", "ees": "¡De acuerdo!"}, {"w": "dois", "r": 128, "es": "debo (devoir)", "ex": "Je dois partir.", "ees": "Tengo que irme."}, {"w": "peut-être", "r": 130, "es": "quizá", "ex": "Peut-être.", "ees": "Quizá."}, {"w": "parler", "r": 143, "es": "hablar", "ex": "Je voudrais parler français.", "ees": "Quisiera hablar francés."}, {"w": "aime", "r": 155, "es": "me gusta, amo (aimer)", "ex": "J’aime le café.", "ees": "Me gusta el café."}, {"w": "beaucoup", "r": 170, "es": "mucho", "ex": "Merci beaucoup.", "ees": "Muchas gracias."}, {"w": "désolé", "r": 184, "es": "lo siento", "ex": "Désolée, je ne comprends pas.", "ees": "Lo siento, no entiendo."}, {"w": "voilà", "r": 186, "es": "aquí tiene, ya está", "ex": "Voilà.", "ees": "Aquí tiene."}, {"w": "maison", "r": 189, "es": "casa", "ex": "Je suis à la maison.", "ees": "Estoy en casa."}, {"w": "monsieur", "r": 198, "es": "señor", "ex": "Merci, monsieur.", "ees": "Gracias, señor."}];
var LIB=[
 {fr:'les amis',w:['les','amis'],l:'z',t:'l',snd:'lé-za-mi',es:'los amigos'},
 {fr:'vous avez',w:['vous','avez'],l:'z',t:'l',snd:'vu-za-vé',es:'usted tiene'},
 {fr:'un ami',w:['un','ami'],l:'n',t:'l',snd:'ẽ-na-mi',es:'un amigo'},
 {fr:'nous allons',w:['nous','allons'],l:'z',t:'l',snd:'nu-za-lõ',es:'vamos'},
 {fr:'deux heures',w:['deux','heures'],l:'z',t:'l',snd:'dö-zör',es:'dos horas / las dos'},
 {fr:'neuf heures',w:['neuf','heures'],l:'v',t:'l',snd:'nö-vör',es:'las nueve'},
 {fr:'six euros',w:['six','euros'],l:'z',t:'l',snd:'si-zö-ro',es:'seis euros'},
 {fr:'grand ami',w:['grand','ami'],l:'t',t:'l',snd:'grã-ta-mi',es:'gran amigo'},
 {fr:'il a',w:['il','a'],l:'l',t:'n',snd:'i-la',es:'él tiene'},
 {fr:'quelle heure',w:['quelle','heure'],l:'l',t:'n',snd:'ke-lör',es:'qué hora'},
 {fr:'une amie',w:['une','amie'],l:'n',t:'n',snd:'ü-na-mi',es:'una amiga'},
 {fr:'elle est',w:['elle','est'],l:'l',t:'n',snd:'e-lé',es:'ella está'},
 {fr:'et ils',w:['et','ils'],l:'✕',t:'s',snd:'é-il',es:'y ellos'},
 {fr:'les haricots',w:['les','haricots'],l:'✕',t:'s',snd:'lé-a-ri-ko',es:'las judías'}
];
var LIBT={l:{n:'Liaison',c:'var(--c1)',d:'La consonante final es muda y se despierta porque la palabra siguiente empieza por vocal.'},n:{n:'Enlace normal',c:'var(--c3)',d:'La consonante final ya sonaba; solo se pega a la vocal de la palabra siguiente.'},s:{n:'Sin enlace',c:'var(--c2)',d:'Aquí no se une: hay una pequeña separación.'}};
var NUMS={'0':'zero','1':'un','2':'deux','3':'trois','4':'quatre','5':'cinq','6':'six','7':'sept','8':'huit','9':'neuf','10':'dix','11':'onze','12':'douze'};
var VERBS=[
 {id:'parler',k:'er',r:'parl',f:['e','es','e','ons','ez','ent'],pp:'parlé',aux:'avoir',es:'hablar',ep:['hablo','hablas','habla','hablamos','habláis','hablan'],epp:'hablado'},
 {id:'regarder',k:'er',r:'regard',f:['e','es','e','ons','ez','ent'],pp:'regardé',aux:'avoir',es:'mirar',ep:['miro','miras','mira','miramos','miráis','miran'],epp:'mirado'},
 {id:'chercher',k:'er',r:'cherch',f:['e','es','e','ons','ez','ent'],pp:'cherché',aux:'avoir',es:'buscar',ep:['busco','buscas','busca','buscamos','buscáis','buscan'],epp:'buscado'},
 {id:'travailler',k:'er',r:'travaill',f:['e','es','e','ons','ez','ent'],pp:'travaillé',aux:'avoir',es:'trabajar',ep:['trabajo','trabajas','trabaja','trabajamos','trabajáis','trabajan'],epp:'trabajado'},
 {id:'habiter',k:'er',r:'habit',f:['e','es','e','ons','ez','ent'],pp:'habité',aux:'avoir',es:'vivir (en un lugar)',ei:'vivir',ep:['vivo','vives','vive','vivimos','vivís','viven'],epp:'vivido'},
 {id:'être',k:'irr',f:['suis','es','est','sommes','êtes','sont'],pp:'été',aux:'avoir',es:'ser / estar',ei:'ser / estar',ep:['soy / estoy','eres / estás','es / está','somos / estamos','sois / estáis','son / están'],epp:'sido / estado'},
 {id:'avoir',k:'irr',f:['ai','as','a','avons','avez','ont'],pp:'eu',aux:'avoir',es:'tener',ep:['tengo','tienes','tiene','tenemos','tenéis','tienen'],epp:'tenido'},
 {id:'aller',k:'irr',f:['vais','vas','va','allons','allez','vont'],pp:'allé',aux:'être',es:'ir',ep:['voy','vas','va','vamos','vais','van'],epp:'ido'},
 {id:'faire',k:'irr',f:['fais','fais','fait','faisons','faites','font'],pp:'fait',aux:'avoir',es:'hacer',ep:['hago','haces','hace','hacemos','hacéis','hacen'],epp:'hecho'},
 {id:'pouvoir',k:'irr',f:['peux','peux','peut','pouvons','pouvez','peuvent'],pp:'pu',aux:'avoir',es:'poder',ep:['puedo','puedes','puede','podemos','podéis','pueden'],epp:'podido'},
 {id:'vouloir',k:'irr',f:['veux','veux','veut','voulons','voulez','veulent'],pp:'voulu',aux:'avoir',es:'querer',ep:['quiero','quieres','quiere','queremos','queréis','quieren'],epp:'querido'},
 {id:'savoir',k:'irr',f:['sais','sais','sait','savons','savez','savent'],pp:'su',aux:'avoir',es:'saber',ep:['sé','sabes','sabe','sabemos','sabéis','saben'],epp:'sabido'},
 {id:'prendre',k:'irr',f:['prends','prends','prend','prenons','prenez','prennent'],pp:'pris',aux:'avoir',es:'tomar, coger',ei:'tomar',ep:['tomo','tomas','toma','tomamos','tomáis','toman'],epp:'tomado'},
 {id:'venir',k:'irr',f:['viens','viens','vient','venons','venez','viennent'],pp:'venu',aux:'être',es:'venir',ep:['vengo','vienes','viene','venimos','venís','vienen'],epp:'venido'}
];
var ASK=[
 {w:'où',es:'dónde',ex:'Où est la gare ?',ees:'¿Dónde está la estación?'},
 {w:'quand',es:'cuándo',ex:'C’est quand ?',ees:'¿Cuándo es?'},
 {w:'comment',es:'cómo',ex:'Comment allez-vous ?',ees:'¿Cómo está usted?'},
 {w:'pourquoi',es:'por qué',ex:'Pourquoi ?',ees:'¿Por qué?'},
 {w:'combien',es:'cuánto',ex:'Ça fait combien ?',ees:'¿Cuánto es?'},
 {w:'qui',es:'quién',ex:'C’est qui ?',ees:'¿Quién es?'}
];
var NUMF=[['0','zéro','zé-ro'],['1','un','ẽ'],['2','deux','dö'],['3','trois','trua'],['4','quatre','katr'],['5','cinq','sẽk'],['6','six','sis'],['7','sept','set'],['8','huit','üit'],['9','neuf','nöf'],['10','dix','dis'],['11','onze','õz'],['12','douze','duz'],['13','treize','trez'],['14','quatorze','ka-torz'],['15','quinze','kẽz'],['16','seize','sez'],['17','dix-sept','di-set'],['18','dix-huit','di-züit'],['19','dix-neuf','diz-nöf'],['20','vingt','vẽ']];
var PIC=[
['Transporte','la voiture','el coche','1F697'],
['Transporte','le bus','el autobús','1F68C'],
['Transporte','le train','el tren','1F686'],
['Transporte','le taxi','el taxi','1F695'],
['Transporte','le métro','el metro','1F687'],
['Transporte','le vélo','la bicicleta','1F6B2'],
['Transporte','l’avion','el avión','2708'],
['Lugares','la gare','la estación','1F689'],
['Lugares','l’hôtel','el hotel','1F3E8'],
['Lugares','le restaurant','el restaurante','1F37D'],
['Lugares','le marché','el mercado','1F9FA'],
['Lugares','le supermarché','el supermercado','1F6D2'],
['Lugares','la pharmacie','la farmacia','1F48A'],
['Lugares','la maison','la casa','1F3E0'],
['Lugares','la ville','la ciudad','1F3D9'],
['Comida','le pain','el pan','1F956'],
['Comida','le croissant','el cruasán','1F950'],
['Comida','la pomme','la manzana','1F34E'],
['Comida','le fromage','el queso','1F9C0'],
['Comida','le poisson','el pescado','1F41F'],
['Comida','le poulet','el pollo','1F357'],
['Comida','la soupe','la sopa','1F372'],
['Comida','la glace','el helado','1F366'],
['Comida','la salade','la ensalada','1F957'],
['Bebidas','l’eau','el agua','1F4A7'],
['Bebidas','le vin','el vino','1F377'],
['Bebidas','le café','el café','2615'],
['Objetos','la clé','la llave','1F511'],
['Objetos','le billet','el billete','1F3AB'],
['Objetos','la carte','la tarjeta','1F4B3'],
['Objetos','l’argent','el dinero','1F4B6'],
['Objetos','l’horloge','el reloj','1F550'],
['Objetos','la valise','la maleta','1F9F3'],
['Objetos','le téléphone','el teléfono','1F4F1'],
['Objetos','le sac','el bolso','1F45C'],
['Objetos','la photo','la foto','1F4F7'],
['Trabajo','le bureau','la oficina','1F3E2'],
['Trabajo','l’ordinateur','el ordenador','1F4BB'],
['Trabajo','le livre','el libro','1F4D6'],
['Trabajo','le rendez-vous','la cita','1F4C5'],
['Trabajo','la famille','la familia','1F468-200D-1F469-200D-1F467'],
['Naturaleza','la mer','el mar','1F30A'],
['Naturaleza','le soleil','el sol','2600'],
['Naturaleza','la fleur','la flor','1F338'],
['Naturaleza','le chat','el gato','1F431'],
['Naturaleza','le chien','el perro','1F436']
];
var SCENE_IMG={salut:'1F44B',cafe:'2615',rue:'1F5FA',hotel:'1F3E8',verbes:'1F338',chiffres:'1F522',heure:'1F550',billet:'1F3AB',transport:'1F695',prix:'1F3F7',resto:'1F37D',plats:'1F372',marche:'1F9FA',quant:'1F956',sans:'1F6AB',moi:'1F91D',travail:'1F4BC',famille:'1F468-200D-1F469-200D-1F467',ville:'1F3D9',rdv:'1F4C5'};
var TENSES=[['pres','Presente'],['pc','Pasado (passé composé)'],['fut','Futuro cercano']];
var AUXF={avoir:['ai','as','a','avons','avez','ont'],'être':['suis','es','est','sommes','êtes','sont']};
var ALLER=['vais','vas','va','allons','allez','vont'];
var PCATS=['Todo','Transporte','Lugares','Comida','Bebidas','Objetos','Trabajo','Naturaleza'];
var COPY={
"soundsIntro":"El francés se escribe de una manera y suena de otra, así que empezamos por los sonidos. Escucha, sigue las notas con la vista y repite en voz alta.",
"rhythm":"En español acentúas cada palabra. En francés las sílabas tienden a pesar parecido y el acento cae al final del grupo. Aquí cada sílaba es una nota, el acento es la nota larga y la barra cierra el compás.",
"pronKey":"La mayúscula marca la sílaba con el acento. <code>zh</code> suena como la «y» rioplatense de «yo». <code>ü</code> es la u francesa y <code>ö</code> es eu. <code>õ ã ẽ</code> son nasales y la n no suena.",
"numLead":"Del 0 al 20, con su sonido. Pulsa cada número para oírlo. Los más traicioneros: <b>seize</b> (16) y <b>six</b> (6) suenan parecido; y del 17 al 19 se dice «diez-siete», «diez-ocho», «diez-nueve».",
"imgLead":"El artículo (le, la, l’) forma parte de la palabra: apréndelo con ella. Pulsa un dibujo para oírlo.",
"numNote":"Cuando hay una vocal detrás, la consonante final se despierta: «six heures» suena SI-ZÖR, «huit euros» suena ÜI-TÖ-RO.",
"unitEnd":{"1":"Has recorrido el primer tramo. Sigue con la unidad 2: moverte.","2":"Ya puedes moverte por una ciudad. Sigue con la unidad 3: mesa y mercado.","3":"Ya puedes pedir una comida y comprar alimentos. Sigue con la unidad 4: primeras conversaciones.","4":"Has recorrido las cuatro unidades del curso. Esto no certifica ningún nivel: para saber dónde estás, habla con personas reales. Mantén el repaso diario para no perder lo aprendido."},
"limits":"<li>Las cuatro unidades están construidas, pero el contenido (frases, historias, sentidos en español y notas de pronunciación) lo redacté yo y no ha pasado por revisión de un profesor nativo. La lista de «Palabras» sí viene de un recuento real de frecuencia.</li><li>El vocabulario de cada situación lo elegí yo, no sigue una lista oficial.</li><li>La mini-prueba mide reconocimiento de lo que oyes. No mide si hablas bien.</li><li>La conversación libre y el profe usan una IA externa gratuita. Pueden equivocarse o sonar poco naturales: contrasta con tu oído y con las frases del curso. Lo que escribes o dices se envía a Google.</li>",
"wordsInfo":function(n){return '<p class="lead">Una lista real de las palabras que más aparecen en francés hablado, para aprender primero lo que más vas a oír. No es mi intuición: sale de un recuento de 313 millones de palabras de subtítulos de películas y series.</p>'+
      '<div class="sec"><span class="eyebrow">Qué dicen los datos</span><ul class="plain">'+
      '<li><b>Las 100 formas más frecuentes</b> suman el 57,7 % de todas las palabras de la lista. Las 200, el 66,2 %. Las 500, el 75,0 %. Las 1000, el 80,8 %.</li>'+
      '<li><b>Fuente:</b> FrequencyWords (OpenSubtitles 2018, francés, 50 000 formas), licencia CC BY-SA 4.0.</li>'+
      '<li><b>Límites:</b> son subtítulos, es decir, diálogo de ficción, no conversación real. Cuenta formas escritas, no agrupa conjugaciones (suis, est y êtes son formas de être) e incluye nombres propios y errores. La selección de '+n+' palabras, sus sentidos en español y las frases de ejemplo son míos.</li></ul></div>';}
};
window.COURSE={copy:COPY,cfg:{"id": "fr", "lang": "fr", "name": "francés", "stateKey": "cadence.fr.v1", "aiKey": "cadence.fr.ai", "tts": "fr-FR", "sr": "fr-FR", "target": "FRENCH", "chromeLang": null, "voicePrefs": ['Thomas','Amélie','Audrey','Aurélie','Marie','Hortense','Julie','Denise','Google français'], "extraWords": "oui, non, merci, s’il vous plaît, bonjour, au revoir, excusez-moi, pardon, je ne comprends pas", "units": ["Sobrevivir","Moverse","Mesa y mercado","Primeras conversaciones"], "profChips": ["¿Cuándo uso «tu» y cuándo «vous»?","¿Por qué hay «un» y «une»?","¿Qué es una liaison?","¿Cómo se pronuncia la «r» francesa?"], "voiceExclude": "^Daniel", "voiceAdj": "francesa", "features": {"links": true, "verbs": true}, "maps": [["verbs","Verbos"],["ask","Para preguntar"],["num","Números"],["img","Imágenes"]], "unitsMeta": [[1,"Sobrevivir","1F44B","c1"],[2,"Moverse","1F695","c2"],[3,"Mesa y mercado","1F37D","c3"],[4,"Primeras conversaciones","1F91D","c4"]], "hello": "Bonjour !", "eyebrow": "Curso de francés · desde cero · nivel A1", "sub": "Curso de francés · Nivel A1"},
SCENES:SCENES,
SOUNDS:SOUNDS,
DAYS:DAYS,
STORY:STORY,
PLAN:PLAN,
STAGES:STAGES,
RHY:RHY,
WEEKS:WEEKS,
GOALS2:GOALS2,
GOALS3:GOALS3,
GOALS4:GOALS4,
GOALS:GOALS,

WORDS:WORDS,
LIB:LIB,
LIBT:LIBT,
NUMS:NUMS,
VERBS:VERBS,
ASK:ASK,
NUMF:NUMF,
PIC:PIC,
SCENE_IMG:SCENE_IMG,
TENSES:TENSES,
AUXF:AUXF,
ALLER:ALLER,
PCATS:PCATS};
})();
