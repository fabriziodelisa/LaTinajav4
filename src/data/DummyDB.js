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
      titulo: "La última gota",
      texto: `Una gota tardía cae triste al ver a sus amigas desparramadas \n
              Una gota tardía cae triste al ver el mundo que tanto anheló \n
              Una gota tardía cae triste, no lo esperaba tan sombrío \n
              Una gota tardía cae, y como sus amigas, revienta en desconsuelo.`,
      id: "gotaTardia"
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
      id: "Etienne1"
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
      id: "sanMartin1"
    },
    {
      autor: "Zhuangzi",
      titulo: "Fragmento",
      texto: `Las extremidades de los patos son cortas pero si pretendes alargarlas, será con dolor.
      Las patas de las grullas son largas pero si las acortas, será también con dolor. 
      Así lo que naturalmente es largo no necesita acortarse y lo que naturalmente es corto 
      no necesita alargarse. De esta manera no será preciso quitar penas. Querer regular todo 
      es vulnerar la naturaleza.`,
      id: "zhuangzi1"
    },
    {
      autor: "Arthur Schopenhauer",
      titulo: "El arte de sobrevivir",
      texto: `Lo que ocupa a todos los seres vivos y los mantiene en movimiento
      es el afán de existir. Con la existencia, sin embargo, cuando se tiene por segura,
      los hombres ya no saben qué hacer; por ello, la segunda cosa que los mantiene en movimiento
      estriba en el afán de librarse del peso de la existencia, hacer que no se note, "matar el tiempo"
      , es decir, escapar al tedio.`,
      id: "schopenhauer1"
    }
  ];

  return fragmentos;
};

const FrasesDB = () => {
  const frases = [
    {
      autor: "Heráclito",
      titulo: "Fragmento 18",
      texto: `Si no esperas lo inesperado no lo reconocerás cuando llegue.`,
      id: "heraclito18"
    },
    {
      autor: "Heráclito",
      titulo: "fragmento 30",
      texto: `Este mundo, que es el mismo para todos, no lo ha creado ninguno de los dioses o de los hombres, 
              sino que siempre fue, es y será fuego eternamente vivo[...]`,
      id: "heraclito30"
    },
  ];

  return frases;
};

export { EscritosDB, FragmentosDB, FrasesDB };
