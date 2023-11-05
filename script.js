"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;

  const arrayCategorias = [ //creamos un array de arrays con las palabras de cada categoria
    // Animales
    ["gato", 
    "perro", 
    "liebre", 
    "pájaro", 
    "rinoceronte", 
    "camello", 
    "lobo", 
    "topo", 
    "oveja", 
    "cerdo", 
    "iguana", 
    "bufalo", 
    "gusano",
     "mapache", 
     "alce", 
     "escorpion", 
     "elefante", 
     "dromedario", 
     "venado", 
     "oso", 
     "foca", 
     "calamar", 
     "delfin", 
     "ballena", 
     "medusa", 
     "gamba", 
     "sepia", 
     "pulpo", 
     "trucha", 
     "caracol", 
     "tiburon", 
     "carpa", 
     "salmon", 
     "tortuga", 
     "pinguino", 
     "orca", 
     "tigre", 
     "leopardo", 
     "pantera", 
     "rata", 
     "avestruz", 
     "gorila", 
     "mono", 
     "ganso", 
     "serpiente", 
     "cocodrilo", 
     "gallo", 
     "anaconda", 
     "caballo", 
     "vaca", 
     "mandril", 
     "koala", 
     "canguro", 
     "jirafa", 
     "leon", 
     "ardilla", 
     "hormiga", 
     "toro", 
     "castor", 
     "hamster", 
     "caiman", 
     "asno" ], 
    // Frutas
    ["arandano",
    "frambuesa",
    "fresa",
    "grosella", 
     "limon",
     "naranja", 
     "pomelo",
     "mandarina", 
     "melon",
     "sandia",
     "aguacate",
     "chirimoya",
     "kiwi",
     "mango",
     "coco",
     "papaya",
     "platano",
     "piña",
     "cereza",
     "albaricoque",
     "manzana",
     "nispero",
     "ciruela",
     "higo",
     "melocoton",
     "nectarina",
     "pera",
     "uva"
      ], 
      // Países 
    ["españa", 
    "francia", 
    "afganistán",
    "armenia",
    "azerbaiján", "Bahrein", "Bangladesh", "brunei","bután", "Filipinas","Georgia", "India", "indonesia", "Irán", "Iraq", "Israel", "Japón", "jordania", "Kampuchea", "Kazakstán", "kirguizistán","Kuwait", "Laos", "Líbano", "malasia","Maldivas", "Mongolia", "Myanmar", "nepal", "Omán", "Pakistán", "Palestina", "qatar", "Singapur", "Sri Lanka", "Siria", "tadjikistán", "Tailandia", "Turkmenistán", "Türkiye", "Vietnam", "Yemen", "albania", "alemania", "andorra", "austria", "belgica", "bielorusia", "bulgaria", "chipre", "croacia", "dinamarca", "eslovaquia", "finlandia", "estonia", "grecia", "holanda", "hungria", "italia", "irlanda", "italia", "islandia", "letonia", "lituania", "luxemburgo", "moldavia", "malta", "monaco", "noruega", "polonia", "portugal", "rumania", "rusia", "suiza", "suecia", "ucraina", "canada", "cuba", "bahamas", "mexico", "panama", "argentina", "brasil", "uruguay", "paraguay", "chile", "peru", "ecuador", "colombia", "bolivia", "australia", "fiji", "samoa", "angola", "marruecos", "tanzania", "uganda", "nigeria", "libia",
    ],
    //deportes
    [
      "futbol",
  "baloncesto",
  "tenis",
  "beisbol",
  "golf",
  "atletismo",
  "natacion",
  "ciclismo",
  "voleibol",
  "rugby",
  "boxeo",
  "esgrima",
  "surf",
  "ajedrez",
  "escalada",
  "esqui",
  "snowboard",
  "badminton",
  "softbol",
  "criquet",
  "balonmano",
  "gimnasia",
  "triatlon",
  "bolos",
  "squash",
  "aikido",
  "kickboxing",
  "vela",
  "polo",
  "curling",
  "rally",
  "petanca",
  "lucha",
  "karate",
  "jiu-jitsu",
  "taekwondo",
  "sumo",
  "sambo",
  "judo",
  "wrestling",
  "kungfu",
  "muaythai",
  "skateboarding",
  "bmx",
  "archery",
  "shooting",
  "fencing",
  "cycling",
  "weightlifting",
  "gymnastics",
  "swimming",
  "diving",
  "triathlon",
  "marathon",
  "volleyball",
  "handball",
  "sailing",
  "kayaking",
  "canoeing",
  "rowing",
  "fishing",
  "hunting",
  "climbing",
  "hiking",
    ],
    //comidas
    [
      "pizza",
  "hamburguesa",
  "ensalada",
  "sushi",
  "tacos",
  "pasta",
  "pollo",
  "sopa",
  "sandwich",
  "ceviche",
  "fajitas",
  "lasaña",
  "paella",
  "empanadas",
  "ramen",
  "dimsum",
  "hotpot",
  "gyozas",
  "tapas",
  "cuscús",
  "moussaka",
  "falafel",
  "padthai",
  "chowmein",
  "tiramisú",
  "gelato",
  "pastel",
  "helado",
  "crepes",
  "tarta",
  "buñuelos",
  "arroz",
  "muffins",
  "donuts",
  "cupcakes",
  "nachos",
  "helado",
  "waffles",
  "pancakes",
  "hummus",
  "pho",
  "cachopo",
  "croquetas",
    ],
    //transportes
    [
      "coche",
  "bicicleta",
  "autobus",
  "tren",
  "metro",
  "avion",
  "barco",
  "moto",
  "triciclo",
  "helicoptero",
  "patinete",
  "camion",
  "tranvia",
  "yate",
  "caminata",
  "monopatin",
  "patines",
  "velero",
  "carroza",
  "carro",
  "submarino",
  "globos",
  "teleferico",
  "jet",
  "autogiro",
  "carretilla",
  "ferry",
  "caravana",
  "hoverboard",
  "patin",
  "carruaje",
  "segway",
  "ambulancia",
  "taxi",
  "remolque",
  "funicular",
  "scooter",
    ],
    //marcas de coches
    [
      "toyota",
      "honda",
      "chevrolet",
      "ford",
      "volkswagen",
      "nissan",
      "audi",
      "mercedes",
      "bmw",
      "fiat",
      "hyundai",
      "kia",
      "mazda",
      "subaru",
      "volvo",
      "porsche",
      "jaguar",
      "landrover",
      "tesla",
      "lexus",
      "acura",
      "buick",
      "cadillac",
      "gmc",
      "jeep",
      "chrysler",
      "dodge",
      "ram",
      "maserati",
      "ferrari",
      "lamborghini",
      "maserati",
      "bentley",
      "mini",
      "lotus",
      "smart",
      "suzuki",
      "infiniti",
      "ssangyong",
      "seat",
      "skoda",
      "renault",
      "peugeot",
      "citroen",
      "fiat",
      "opel",
      "lada",
      "lancia",
      "maserati",
    ],
    //instrumentos
    [
      "guitarra",
  "piano",
  "batería",
  "violín",
  "saxofón",
  "flauta",
  "trompeta",
  "clarinete",
  "bajo",
  "arpa",
  "tambor",
  "órgano",
  "acordeón",
  "tuba",
  "trombón",
  "harmónica",
  "oboe",
  "fagot",
  "gaita",
  "sitar",
  "xilófono",
  "marimba",
  "djembe",
  "ukelele",
  "contrabajo",
  "fiddle",
  "theremin",
  "melódica",
  "didgeridoo",
  "cítara",
    ],
    //personajes famosos
    [
      "AlbertEinstein",
  "LeonardodaVinci",
  "CharlieChaplin",
    "Madonna",
  "Adele",
  "MarkZuckerberg",
  "OscarWilde",
  "Beethoven",
  "Cleopatra",
    ],
    //peliculas
    [
      "Gladiator",
  "Titanic",
  "Jaws",
  "Gravity",
  "Interstellar",
  "Inception",
  "Amelie",
  "Braveheart",
  "Casablanca",
  "Unforgiven",
  "Twister",
  "Scream",
  "Ratatouille",
  "Grease",
  "Aliens",
  "Frozen",
  "Jumanji",
  "Memento",
  "Ghostbusters",
  "Platoon",
  "Gandhi",
  "Spartacus",
  "Hitchcock",
  "Cinderella",
  "Halloween",
  "Psycho",
  "Amadeus",
  "Speed",
  "Seven",
  "Dune",
  "Jaws",
  "Brave",
  "Cleopatra",
  "Zodiac",
  "Mulan",
  "Glory",
  "Patton",
  "Cocoon",
  "Chinatown",
  "Fargo",
  "Gandhi",
  "Unforgiven",
  "Hitchcock",
  "Platoon",
  "Aliens",
  "Ratatouille",
  "Ghostbusters",
  "Memento",
  "Twister",
    ]

  ];

  function id(str) {
    return document.getElementById(str);
  }

  let intentosRestantesElement = id("intentosRestantes");
  const botonJugar = id("empiezaElJuego");
  const botonCategorias = document.querySelectorAll("#categorias button");//añadimos los botónes del div.ID CATGEORIAS
  const botonLetra = document.querySelectorAll("#letras button");
  const imagen = id("ahorcado");
  const botonReiniciar = document.createElement('button');

  function deshabilitarTeclado(disable) {
    for (let i = 0; i < botonLetra.length; i++) {
      botonLetra[i].disabled = disable;
      botonLetra[i].style.color = "#000000"
    }
  }

  function empezarJuego() {
    const mensajeContainer = id('mensajeContainer');
  
  // Ocultamos el contenedor de mensajes al empezar un nuevo juego
    mensajeContainer.style.display = 'none';

    botonJugar.disabled = true;

    // Habilitamos teclado y reiniciamos contador e imagen
    deshabilitarTeclado(false);
    intentosRestantes = 6;
    intentosRestantesElement.textContent = intentosRestantes;
    imagen.src = `assets/imagenes/Img0.png`;

    // Obtenemoos la categoría seleccionada
    let categorias = id("desplegableCategorias");
    let categoria = categorias.value;
    console.log(`Seleccionada la categoría ${categorias.options[categorias.selectedIndex].text} (${categoria})`);

    const parrafo = id("palabraACompletar");
    parrafo.innerHTML = "";

    const palabraArrayCategoria = arrayCategorias[categoria];//declaramos variable para la palabra seleccionada aleatoriamente
    palabraSecreta = palabraArrayCategoria[Math.floor(Math.random() * palabraArrayCategoria.length)].toLowerCase();
    console.log(`La palabra que el sistema ha escogido de manera aleatoria es: ${palabraSecreta}`);

    const letrasPalabraAJugar = palabraSecreta.length;
    console.log(`La palabra escogida es ${palabraSecreta} y su longitud es ${letrasPalabraAJugar}`);

    for (let i = 0; i < letrasPalabraAJugar; i++) {
      const span = document.createElement("span");
      span.textContent = "_"
      parrafo.appendChild(span);
    }
  }

  function finalizarJuego(ganador) {
    const mensajeContainer = id('mensajeContainer');
    mensajeContainer.innerHTML = '';
  
    const mensajeFinalElemento = document.createElement('p');
    if (ganador) {
      mensajeFinalElemento.textContent = '¡Felicidades, has ganado! 🥳';
    } else {
      mensajeFinalElemento.textContent = '¡Has perdido! Inténtalo de nuevo.😞';
    }
  
    mensajeContainer.appendChild(mensajeFinalElemento);
    mensajeContainer.style.display = 'block';
  
    deshabilitarTeclado(true);
    intentosRestantes = 6;
    intentosRestantesElement.textContent = intentosRestantes;
    imagen.src = `assets/imagenes/Img0.png`;
    const parrafo = id("palabraACompletar");
    parrafo.innerHTML = "";


    botonJugar.disabled = false;
    // Añadir un botón para reiniciar el juego
    botonReiniciar.textContent = 'Reiniciar Juego';
    botonReiniciar.addEventListener('click', function () {
      deshabilitarTeclado(true);
   
    // Ocultar el mensajeContainer
    mensajeContainer.style.display = 'none';
  });

  mensajeContainer.appendChild(botonReiniciar);
  }

  function manejarClicLetra(event) {
    const spans = document.querySelectorAll("#palabraACompletar span");
    const botonLetraApretada = event.target;
    botonLetraApretada.disabled = true;
    console.log(`La letra apretada es: ${botonLetraApretada}`);

    const letra = botonLetraApretada.innerHTML.toLowerCase();
    const palabra = palabraSecreta.toLowerCase();

    let acierto = false;
    for (let i = 0; i < palabra.length; i++) {
      if (letra == palabra[i]) {
        spans[i].innerHTML = letra;
        acierto = true;
      }
    }

    if (acierto) {
      botonLetraApretada.style.color = "#00FF00";
      let completa = true;
      for (let i = 0; i < palabra.length; i++) {
        if (spans[i].innerHTML != palabra[i]) {
          completa = false;
          break;
        }
      }
      if (completa) {
        finalizarJuego(true); // Has ganado
      }
    } else {
      botonLetraApretada.style.color = "#ff001e";
      intentosRestantes--;
      intentosRestantesElement.textContent = intentosRestantes;
      imagen.src = `assets/imagenes/Img${6 - intentosRestantes}.png`;
      if (intentosRestantes == 0) {
        finalizarJuego(false); // Has perdido
      }
    }
    
  }
  
  botonJugar.addEventListener("click", empezarJuego);

  for (let i = 0; i < botonLetra.length; i++) {
    botonLetra[i].addEventListener("click", manejarClicLetra);
  }
  
  deshabilitarTeclado(true);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

let spanTexts = document.getElementsByTagName("span");
window.onload = function() {
  let indices = Array.from(Array(spanTexts.length).keys());
  shuffleArray(indices);
  let delay = 1.0;
  for (let i of indices)
  {
      spanTexts[i].style.transitionDelay = delay.toString() + "s";
      spanTexts[i].classList.add("active");
      delay += 0.3;
  }
}