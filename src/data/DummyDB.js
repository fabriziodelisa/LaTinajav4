const EscritosDB = () => {
  // {
  //   autor: "",
  //   titulo: "",
  //   texto: ``,
  //    id: "",
  // }

  const escritos = [
    {
      autor: "Fabrizio De Lisa",
      titulo: "Despedida",
      texto: `{Lara giró por última vez a mirar. Todo parecía tan siniestramente tranquilo esa tarde que ni el perro de los Roble se animó a romper el hilo de silencio que recorría la casa.
    No sabía bien por qué pero sentía que la luz coloreada del vitral, a través de su molino geométrico e incompleto, no le permitía dejar el lugar. Con una especie de nostalgia prestada (solo recordaba haber estado en el campo una vez de niña) se despidió de aquella imagen como quién se despide de un viejo amigo al que nunca volverá a ver.
   En su paso triste y pesado, abstraída en sus recuerdos, tropezó con una baldosa floja del pasillo del este, tropiezo que le valió la mesita ratona del teléfono la cual no resistió el desesperado abrazo. La baldosa, que había saltado por los aires con la patada, dejó ver un papel amarillento y ajado que guardaba secretamente bajo su espalda. “Ja, los albañiles del SXX más que con alambre lo arreglaban todo con papel” pensó, y le causaba gracia. Mas cuando fue a acomodar todo en su lugar descubrió que ese papel era algo más que un nivelador provisorio. Lo desplegó, con el cuidado de quién desencofra una momia, y leyó:
   13 de marzo de 1934
   Dejo constancia, en este papel que firmo, de que jamás volveré a pisar este suelo. No a ningún otro sino a mí mismo; A mí, yo futuro, que pronto será pasado, será olvidado. 
   El humear de esa chimenea no es más que la quema de mi historia; El buque un candado, mi punto final; Y esta baldosa suelta lo último que me detiene, la última piedra en mi camino.
   No tengo dudas: quién no comprende mis pasiones no merece mi compañía.
   Y no digo más porque es hora de partir. ¿Pudo haber sido diferente? Quizás, nunca lo sabré. Hoy creo comprender mi destino. Ya no me resisto a él.
   Francisco S.
   
   Lara terminó de leer, guardó el papel en su bolsillo y acomodo todo. Miró su reloj, se hacía tarde. Apuró el paso poniendo atención esta vez en no chocarse con nada. Revisó su agenda: “Muelle 8”. Tomó los pasajes. Cerró la puerta y dio dos vueltas al cerrojo por última vez.`,
      id: "escrito1",
    },
    {
      autor: "Fabrizio De Lisa",
      titulo: "La última gota",
      texto: `Una gota tardía cae triste al ver a sus amigas desparramadas - 
              Una gota tardía cae triste al ver el mundo que tanto anheló -   
              Una gota tardía cae triste, no lo esperaba tan sombrío - 
              Una gota tardía cae, y como sus amigas, revienta en desconsuelo.`,
      id: "escrito1",
    },
  ];

  return escritos;
};

const FragmentosDB = () => {
  const fragmentos = [
    {
      autor: "Etienne de la Botie",
      titulo: "Discurso sobre la servidumbre voluntaria",
      texto: `Que se pongan a un lado y a otro a mil hombres armados,
      que se los prepare para atacar, que entren en combate, unos
      luchando por su libertad, los otros para quitársela: ¿de quiénes
      creéis que será la victoria? ¿Cuáles se lanzarán con más gallardía
      al campo de batalla: los que esperan como recompensa el
      mantenimiento de su libertad, o los que no pueden esperar otro
      premio a los golpes que asestan o reciben que la servidumbre
      del adversario? Unos llevan siempre como bandera la felicidad
      de su vida pasada y la esperanza de un bienestar similar en el
      porvenir; no piensan tanto en las penalidades y en los sufrimientos
      momentáneos de la batalla como en todo aquello que,
      si fueran vencidos, deberían soportar para siempre, ellos, sus
      hijos y toda la posteridad. Los otros, en cambio, no tienen mayor
      incentivo que la codicia, que, con frecuencia, se mitiga ante el
      peligro y cuyo ficticio ardor se desvanece con la primera herida`,
      id: "fragmento1",
    },
    {
      autor: "José de San Martín",
      titulo: "General don Jose de San Martín al Ejercito de los Andes",
      texto: `Compañeros del Ejército de los Andes: Ya no queda duda de que una fuerte expedición 
      española viene a atacarnos; sin duda alguna los gallegos creen que estamos cansados 
      de pelear y que nuestros sables y bayonetas ya no cortan ni ensartan; vamos a 
      desengañarlos. La guerra se la tenemos que hacer del modo que podamos. Si no 
      tenemos dinero, carne y un pedazo de tabaco no nos han de faltar; cuando se acaben 
      los vestuarios, nos vestiremos con las bayetitas que nos trabajan nuestras mujeres 
      y si no, andaremos en pelota como nuestros paisanos los indios ¡Seamos libres y lo 
      demás no importa nada! La muerte es mejor que ser esclavos de los maturrangos.
      Compañeros, juremos no dejar las armas de la mano hasta ver el país enteramente libre,
      o morir con ellas como hombres de coraje.`,
      id: "fragmento2",
    },
    {
      autor: "Zhuangzi",
      titulo: "Extremidades",
      texto: `Las extremidades de los patos son cortas pero si pretendes alargarlas, será con dolor.
      Las patas de las grullas son largas pero si las acortas, será también con dolor. 
      Así lo que naturalmente es largo no necesita acortarse y lo que naturalmente es corto 
      no necesita alargarse. De esta manera no será preciso quitar penas. Querer regular todo 
      es vulnerar la naturaleza.`,
      id: "fragmento3",
    },
    {
      autor: "Arthur Schopenhauer",
      titulo: "El arte de sobrevivir",
      texto: `Lo que ocupa a todos los seres vivos y los mantiene en movimiento
      es el afán de existir. Con la existencia, sin embargo, cuando se tiene por segura,
      los hombres ya no saben qué hacer; por ello, la segunda cosa que los mantiene en movimiento
      estriba en el afán de librarse del peso de la existencia, hacer que no se note, "matar el tiempo"
      , es decir, escapar al tedio.`,
      id: "fragmento4",
    },
    {
      autor: "Zhuangzi",
      titulo: "No regular lo natural",
      texto: `Las extremidades de los patos son cortas pero si pretendes alargarlas, será con dolor. 
    Las patas de las grullas son largas pero si las acortas, será también con dolor. 
    Así lo que naturalmente es largo no necesita acortarse y lo que naturalmente es corto no necesita alargarse. 
    De esta manera no será preciso quitar penas. Querer regular todo es vulnerar la naturaleza.
    `,
      id: "fragmento5",
    },
    {
      autor: "Lucrecio",
      titulo: "Temor a la muerte",
      texto: `El temor de la muerte inspira con frecuencia a los hombres tal odio a la vida y al espectáculo de este mundo,
     que llegan a darse la muerte en un acceso de desesperación, olvidando que el origen de sus males es precisamente aquel 
     temor a morir`,
      id: "fragmento6",
    },
    {
      autor: "Charles Bukowski",
      titulo: "Lo absurdo",
      texto: `Casi siempre lo mejor de la vida consiste en no hacer nada en absoluto, en pasar el tiempo reflexionando,
     rumiando todo ello. Quiero decir pongamos que alguien comprende que todo es un absurdo, entonces no puede ser tan absurdo porque 
     uno es consciente de que es un absurdo 
    y la consciencia de ello es lo que le otorga sentido. ¿Me entienden? Es un pesimismo optimista.`,
      id: "fragmento7",
    },
    {
      autor: "General Don José de San Martín",
      titulo: "Carta al Ejercito de los Andes",
      texto: `Compañeros del Ejército de los Andes: Ya no queda duda de que una fuerte expedición española viene a atacarnos; sin duda alguna los gallegos creen que estamos cansados de pelear y que nuestros sables y bayonetas ya no cortan ni ensartan; vamos a desengañarlos. La guerra se la tenemos que hacer del modo que podamos. Si no tenemos dinero, carne y un pedazo de tabaco no nos han de faltar; cuando se acaben los vestuarios, nos vestiremos con las bayetitas que nos trabajan nuestras mujeres y si no, andaremos en pelota como nuestros paisanos los indios. Seamos libres y lo demás no importa nada. La muerte es mejor que ser esclavos de los maturrangos. Compañeros, juremos no dejar las armas de la mano hasta ver el país enteramente libre, o morir con ellas como hombres de coraje.
    `,
      id: "fragmento8",
    },
  ];

  return fragmentos;
};

const FrasesDB = () => {
  const frases = [
    {
      autor: "Heráclito",
      titulo: "Fragmento 18",
      texto: `Si no esperas lo inesperado no lo reconocerás cuando llegue.`,
      id: "frase1",
    },
    {
      autor: "Heráclito",
      titulo: "fragmento 30",
      texto: `Este mundo, que es el mismo para todos, no lo ha creado ninguno de los dioses o de los hombres, 
              sino que siempre fue, es y será fuego eternamente vivo[...]`,
      id: "frase2",
    },
    {
      autor: "Diógenes",
      titulo: "Sabiduría",
      texto:
        "La sabiduría sirve de freno a la juventud, de consuelo a los viejos, de riqueza a los pobres y de adorno a los ricos",
      id: "frase3",
    },
    {
      autor: "Diógenes",
      titulo: "Compañia",
      texto:
        "Es preferible la compañía de los cuervos a la de los aduladores, pues aquellos devoran a los muertos y estos a los vivos",
      id: "frase4",
    },
    {
      autor: "Mateo",
      titulo:
        "Porque si al árbol verde le hacen esto, ¿qué no le harán al seco?",
      texto: "Mateo 23:31",
      id: "frase5",
    },
    {
      autor: "Diógenes",
      titulo: "Callar",
      texto:
        "Callando es como se aprende a oír, escuchando es como se aprende a hablar; después, hablando, se aprende a callar",
      id: "frase6",
    },
    {
      autor: "Antonia de Padua",
      titulo: "Palabras vanas",
      texto: "Cesen las palabras y que hablen las obras",
      id: "frase7",
    },
    {
      autor: "General Don José de San Martín",
      titulo: "Recompensas",
      texto: "No esperemos recompensas de nuestras fatigas y desvelos",
      id: "frase8",
    },
    {
      autor: "Agustín de Hipona",
      titulo: "Todo del tiempo",
      texto:
        "El cambio es nuestra tragedia pero también nuestra esperanza; Los peores tiempos, así como los mejores, son siempre pasajeros",
      id: "frase9",
    },
  ];

  return frases;
};

export { EscritosDB, FragmentosDB, FrasesDB };
