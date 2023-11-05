"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;

  const arrayCategorias = [ //Creamos un array de arrays con las palabras de cada categoria

  // Animales
    [
    "Gato", 
    "Perro", 
    "Liebre", 
    "Pajaro", 
    "Rinoceronte", 
    "Camello", 
    "Lobo", 
    "Topo", 
    "Oveja", 
    "Cerdo", 
    "Iguana", 
    "Bufalo", 
    "Gusano",
    "Mapache", 
    "Alce", 
    "Escorpion", 
    "Elefante", 
    "Dromedario", 
    "Venado", 
    "Oso", 
    "Foca", 
    "Calamar", 
    "Delfin", 
    "Ballena", 
    "Medusa", 
    "Gamba", 
    "Sepia", 
    "Pulpo", 
    "Trucha", 
    "Caracol", 
    "Tiburon", 
    "Carpa", 
    "Salmon", 
    "Tortuga", 
    "Orca", 
    "Tigre", 
    "Leopardo", 
    "Pantera", 
    "Rata", 
    "Avestruz", 
    "Gorila", 
    "Mono", 
    "Ganso", 
    "Serpiente", 
    "Cocodrilo", 
    "Gallo", 
    "Anaconda", 
    "Caballo", 
    "Vaca", 
    "Mandril", 
    "Koala", 
    "Canguro", 
    "Jirafa", 
    "Leon", 
    "Ardilla", 
    "Hormiga", 
    "Toro", 
    "Castor", 
    "Hamster", 
    "Caiman", 
    "Asno" ], 

    //Frutas
    [
    "Arandano",
    "Frambuesa",
    "Fresa",
    "Grosella", 
    "Limon",
    "Naranja", 
    "Pomelo",
    "Mandarina", 
    "Melon",
    "Sandia",
    "Aguacate",
    "Chirimoya",
    "Kiwi",
    "Mango",
    "Coco",
    "Papaya",
    "Platano",
    "Piña",
    "Cereza",
    "Albaricoque",
    "Manzana",
    "Nispero",
    "Ciruela",
    "Higo",
    "Melocoton",
    "Nectarina",
    "Pera",
    "Uva"
      ], 

    //Países 
    [ 
    "España", 
    "Francia", 
    "Afganistan",
    "Armenia",
    "Azerbaijan",
    "Bahrein", 
    "Bangladesh", 
    "Brunei",
    "Butan", 
    "Filipinas",
    "Georgia", 
    "India", 
    "indonesia", 
    "Iran", 
    "Iraq", 
    "Israel", 
    "Japon", 
    "Jordania",
    "Kuwait", 
    "Laos", 
    "Libano", 
    "Malasia",
    "Maldivas", 
    "Mongolia", 
    "Myanmar", 
    "Nepal", 
    "Oman", 
    "Pakistan", 
    "Palestina", 
    "Qatar", 
    "Singapur", 
    "Sri Lanka", 
    "Siria",  
    "Tailandia", , 
    "Vietnam", 
    "Yemen", 
    "Albania", 
    "Alemania", 
    "Andorra", 
    "Austria", 
    "Belgica", 
    "Bielorusia", 
    "Bulgaria", 
    "Chipre", 
    "Croacia", 
    "Dinamarca", 
    "Eslovaquia", 
    "Finlandia", 
    "Estonia", 
    "Grecia", 
    "Holanda", 
    "Hungria", 
    "Italia", 
    "Irlanda", 
    "Italia", 
    "Islandia", 
    "Letonia", 
    "Lituania", 
    "Luxemburgo", 
    "Moldavia", 
    "Malta", 
    "Monaco", 
    "Noruega", 
    "Polonia", 
    "Portugal", 
    "Rumania", 
    "Rusia", 
    "Suiza", 
    "Suecia", 
    "Ucraina", 
    "Canada", 
    "Cuba", 
    "Bahamas", 
    "Mexico", 
    "Panama", 
    "Argentina", 
    "Brasil", 
    "Uruguay", 
    "Paraguay", 
    "Chile", 
    "Peru", 
    "Ecuador", 
    "Colombia", 
    "Bolivia", 
    "Australia", 
    "Fiji", 
    "Samoa", 
    "Angola", 
    "Marruecos", 
    "Tanzania", 
    "Uganda", 
    "Nigeria", 
    "Libia",
    ],
    //Deportes
    [
     "Futbol",
     "Baloncesto",
     "Tenis",
     "Beisbol",
     "Golf",
     "Atletismo",
     "Natacion",
     "Ciclismo",
     "Voleibol",
     "Rugby",
     "Boxeo",
     "Esgrima",
     "Surf",
     "Ajedrez",
     "Escalada",
     "Esqui",
     "Snowboard",
     "Badminton",
     "Criquet",
     "Balonmano",
     "Gimnasia",
     "Triatlon",
     "Bolos",
     "Squash",
     "Aikido",
     "Kickboxing",
     "Vela",
     "Polo",
     "Curling",
     "Rally",
     "Petanca",
     "Lucha",
     "Karate",
     "Taekwondo",
     "Sumo",
     "Sambo",
     "Judo",
     "Kungfu",
     "Muaythai",
     "Skateboarding",
     "Ciclismo",
     "Gimnasia",
     "Volleyball",
     "Pesca",
    ],
    
    //Comidas
    [
    "Pizza",
    "Hamburguesa",
    "Ensalada",
    "Sushi",
    "Tacos",
    "Pasta",
    "Pollo",
    "Sopa",
    "Sandwich",
    "Ceviche",
    "Fajitas",
    "Lasaña",
    "Paella",
    "Empanadas",
    "Ramen",
    "Dimsum",
    "Hotpot",
    "Gyozas",
    "Tapas",
    "Cuscús",
    "Moussaka",
    "Falafel",
    "Padthai",
    "Tiramisú",
    "Helado",
    "Pastel",
    "Crepes",
    "Tarta",
    "Buñuelos",
    "Arroz",
    "Muffins",
    "Donuts",
    "Cupcakes",
    "Nachos",
    "Waffles",
    "Pancakes",
    "Hummus",
    "Cachopo",
    "Croquetas",
    ],

    //Transportes
    [
    "Coche",
    "Bicicleta",
    "Autobus",
    "Tren",
    "Metro",
    "Avion",
    "Barco",
    "Moto",
    "Triciclo",
    "Helicoptero",
    "Patinete",
    "Camion",
    "Tranvia",
    "Yate",
    "Caminata",
    "Monopatin",
    "Patines",
    "Velero",
    "Carroza",
    "Carro",
    "Submarino",
    "Globo",
    "Teleferico",
    "Jet",
    "Autogiro",
    "Carretilla",
    "Ferry",
    "Caravana",
    "Patin",
    "Carruaje",
    "Segway",
    "Ambulancia",
    "Taxi",
    "Remolque",
    "Funicular",
    "Scooter",
    ],

    //Marcas de coches
    [
    "Toyota",
    "Honda",
    "Chevrolet",
    "Ford",
    "Volkswagen",
    "Nissan",
    "Audi",
    "Mercedes",
    "Bmw",
    "Fiat",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Volvo",
    "Porsche",
    "Jaguar",
    "Landrover",
    "Tesla",
    "Lexus",
    "Acura",
    "Buick",
    "Cadillac",
    "Gmc",
    "Jeep",
    "Chrysler",
    "Dodge",
    "Ram",
    "Maserati",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Bentley",
    "Mini",
    "Lotus",
    "Smart",
    "Suzuki",
    "Infiniti",
    "Ssangyong",
    "Seat",
    "Skoda",
    "Renault",
    "Peugeot",
    "Citroen",
    "Fiat",
    "Opel",
    "Lada",
    "Lancia",
    "Maserati",        
    ],

    //Instrumentos
   [
    "Guitarra",
    "Piano",
    "Bateria",
    "Violin",
    "Saxofon",
    "Flauta",
    "Trompeta",
    "Clarinete",
    "Bajo",
    "Arpa",
    "Tambor",
    "Organo",
    "Acordeon",
    "Tuba",
    "Trombon",
    "Harmonica",
    "Oboe",
    "Fagot",
    "Gaita",
    "Xilofono",
    "Marimba",
    "Djembe",
    "Ukelele",
    "Contrabajo",     
    ],
  
    //Personajes famosos
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

    //Peliculas
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


// Obtiene elementos HTML
const mostrarModalBtn = document.getElementById("mostrarModal");
const modal = document.getElementById("modal");
const cerrarModalBtn = document.getElementById("cerrarModal");

// Muestra el mensaje emergente al hacer clic en el botón
mostrarModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Cierra el mensaje emergente al hacer clic en el botón de cierre
cerrarModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cierra el mensaje emergente al hacer clic fuera del contenido del mensaje
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

}
