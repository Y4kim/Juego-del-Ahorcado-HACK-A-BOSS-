"use strict"; // Habilita el modo estricto de JavaScript para un código más seguro.

document.addEventListener("DOMContentLoaded", function () {

  try {//añado "try" para el código general, "catch" en linea 675"!!

  // Espera a que se cargue todo el contenido HTML antes de ejecutar el script.

  let palabraSecreta; // Declara una variable para almacenar la palabra secreta del juego.
  let intentosRestantes = 6; // Inicializa una variable para el número de intentos restantes en el juego.

  const arrayCategorias = [ // Crea un array de categorías, cada una de las cuales contiene un array de palabras.
  

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
      "Einstein",
      "DaVinci",
      "Chaplin",
      "Madonna",
      "Adele",
      "Zuckerberg",
      "Wilde",
      "Beethoven",
      "Cleopatra",
      "Shakespeare",
      "Picasso",
      "Eminem",
      "Mozart",
      "Houdini",
      "Hemingway",
      "Eminem",
      "Dali",
      "Ronaldo",
      "Pelé",
      "Maradona",
      "Einstein",
      "Newton",
      "Galileo",
      "Voltaire",
      "Tesla",
      "Columbus",
      "Lincoln",
      "Napoleon",
      "Gandhi",
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


// Definición de una función llamada 'id' que toma un identificador de elemento (ID) como argumento y devuelve el elemento correspondiente.
function id(str) {
  return document.getElementById(str);
}

// Selecciona elementos del DOM por sus ID o etiquetas y los almacena en variables.
let intentosRestantesElement = id("intentosRestantes");
const botonJugar = id("empiezaElJuego");
const botonLetra = document.querySelectorAll("#letras button");
const imagen = id("ahorcado");
const botonReiniciar = document.createElement('button');

// Función que deshabilita o habilita los botones del teclado según el valor del argumento 'disable'.
function deshabilitarTeclado(disable) {
  for (let i = 0; i < botonLetra.length; i++) {
    botonLetra[i].disabled = disable;
    botonLetra[i].style.color = "#000000"; // Cambia el color del texto de los botones a negro.
  }
}

// Función que inicia un nuevo juego y realiza varias operaciones.
function empezarJuego() {
  const mensajeContainer = id('mensajeContainer');
  
  // Oculta el contenedor de mensajes al comenzar un nuevo juego.
  mensajeContainer.style.display = 'none';

  botonJugar.disabled = true;

  // Habilita el teclado y reinicia el contador e imagen.
  deshabilitarTeclado(false);
  intentosRestantes = 6;
  intentosRestantesElement.textContent = intentosRestantes;
  imagen.src = `assets/imagenes/Img0.png`;

  // Obtiene la categoría seleccionada desde un elemento desplegable en el DOM.
  let categorias = id("desplegableCategorias");
  let categoria = categorias.value;
  console.log(`Seleccionada la categoría ${categorias.options[categorias.selectedIndex].text} (${categoria})`);

  const parrafo = id("palabraACompletar");
  parrafo.innerHTML = "";

  // Obtiene una palabra aleatoria de la categoría seleccionada.
  const palabraArrayCategoria = arrayCategorias[categoria];
  palabraSecreta = palabraArrayCategoria[Math.floor(Math.random() * palabraArrayCategoria.length)].toLowerCase();
  console.log(`La palabra que el sistema ha escogido de manera aleatoria es: ${palabraSecreta}`);

  const letrasPalabraAJugar = palabraSecreta.length;
  console.log(`La palabra escogida es ${palabraSecreta} y su longitud es ${letrasPalabraAJugar}`);

  // Crea espacios en blanco para las letras de la palabra a adivinar.
  for (let i = 0; i < letrasPalabraAJugar; i++) {
    const span = document.createElement("span");
    span.textContent = "_";
    parrafo.appendChild(span);
  }
}

function finalizarJuego(ganador) {
  // Obtiene una referencia al elemento con el ID 'mensajeContainer'.
  const mensajeContainer = id('mensajeContainer');
  mensajeContainer.innerHTML = '';
  
  // Crea un elemento de párrafo para mostrar un mensaje final.
  const mensajeFinalElemento = document.createElement('p');
  if (ganador) {
    // Si el jugador ganó, establece un mensaje de felicitación.
    mensajeFinalElemento.innerHTML = '¡Felicidades, has ganado! 🥳';
  } else {
    // Si el jugador perdió, muestra un mensaje de derrota.
    mensajeFinalElemento.innerHTML = '¡Has perdido! Inténtalo de nuevo. 😞';
  }
  // Agrega información sobre la palabra secreta al mensaje final.
  mensajeFinalElemento.innerHTML += `<br /><br />La palabra es ${palabraSecreta}`;
  
  // Agrega el mensaje final al contenedor de mensajes.
  mensajeContainer.appendChild(mensajeFinalElemento);
  // Muestra el contenedor de mensajes para mostrar el resultado.
  mensajeContainer.style.display = 'block';
  
  // Deshabilita el teclado para evitar más intentos.
  deshabilitarTeclado(true);
  // Reinicia el contador de intentos restantes a 6.
  intentosRestantes = 6;
  intentosRestantesElement.textContent = intentosRestantes;
  // Restaura la imagen del ahorcado a su estado inicial.
  imagen.src = `assets/imagenes/Img0.png`;
  // Borra la representación de la palabra incompleta en el párrafo.
  const parrafo = id("palabraACompletar");
  parrafo.innerHTML = "";

 // Habilita el botón de juego.
 botonJugar.disabled = false;

 // Añade un botón para reiniciar el juego.
 botonReiniciar.textContent = 'Reiniciar Juego';

 // Añade un manejador de eventos para el clic en el botón de reinicio.
 botonReiniciar.addEventListener('click', function () {
  // Deshabilita el teclado.
  deshabilitarTeclado(true);

  // Oculta el contenedor de mensajes ('mensajeContainer').
  mensajeContainer.style.display = 'none';
 });

 // Añade el botón de reinicio al contenedor de mensajes ('mensajeContainer').
 mensajeContainer.appendChild(botonReiniciar);
}


// Función que maneja el clic en una letra del teclado.
function manejarClicLetra(event) {
  // Obtiene una lista de elementos 'span' que representan las letras ocultas de la palabra a adivinar.
  const spans = document.querySelectorAll("#palabraACompletar span");

  // Obtiene el botón de letra en el que se hizo clic.
  const botonLetraApretada = event.target;

  // Deshabilita el botón de letra para evitar múltiples clics.
  botonLetraApretada.disabled = true;

  // Obtiene la letra apretada y la convierte a minúsculas.
  const letra = botonLetraApretada.innerHTML.toLowerCase();

  // Obtiene la palabra secreta en minúsculas.
  const palabra = palabraSecreta.toLowerCase();

  // Inicializa una variable para rastrear si el jugador acertó.
  let acierto = false;

  // Comprueba si la letra apretada está en la palabra secreta y la revela si es un acierto.
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      spans[i].innerHTML = letra;
      acierto = true;
    }
  }

  // Si el jugador acierta, cambia el color del botón de letra a verde ('#00FF00').
  if (acierto) {
    botonLetraApretada.style.color = "#00FF00";

    // Comprueba si todas las letras de la palabra han sido reveladas.
    let completa = true;
    for (let i = 0; i < palabra.length; i++) {
      if (spans[i].innerHTML != palabra[i]) {
        completa = false;
        break;
      }
    }

    // Si todas las letras han sido reveladas, el jugador ha ganado y se llama a 'finalizarJuego(true)'.
    if (completa) {
      finalizarJuego(true); // Has ganado
    }
  } else {
    // Si no es un acierto, cambia el color del botón de letra a rojo ('#ff001e').
    botonLetraApretada.style.color = "#ff001e";

    // Reduce el número de intentos restantes.
    intentosRestantes--;

    // Actualiza el contador de intentos restantes en la interfaz.
    intentosRestantesElement.textContent = intentosRestantes;

    // Actualiza la imagen del ahorcado.
    imagen.src = `assets/imagenes/Img${6 - intentosRestantes}.png`;

    // Si el jugador se queda sin intentos, se llama a 'finalizarJuego(false)' porque ha perdido.
    if (intentosRestantes == 0) {
      finalizarJuego(false); // Has perdido
    }
  }
}

// Añade un evento de clic al botón 'botonJugar' que llama a la función 'empezarJuego' cuando se hace clic.
botonJugar.addEventListener("click", empezarJuego);

// Añade eventos de clic a todos los botones de letras del teclado, llamando a la función 'manejarClicLetra' cuando se hace clic en cada uno.
for (let i = 0; i < botonLetra.length; i++) {
  botonLetra[i].addEventListener("click", manejarClicLetra);//prueba poner manejarClicLetra1
}

// Inicialmente, deshabilita todos los botones de letras para evitar clics antes de iniciar el juego.
deshabilitarTeclado(true);

} catch {//catch "mensaje de error" con clase "error-message" en el que hago referencia en CSS (linea 323)
        //un ejemplo para qe salga el error es modificando la función "manejarClicLetra" en la linea 669
  document.write('<div class="error-message" style="color:red;font-family:solid;">¡Ocurrió un error inesperado! Rogamos lo intente de nuevo en unos instantes.</div>');
}
});

// La función 'shuffleArray' toma una matriz y la reorganiza aleatoriamente.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Obtiene una colección de elementos "span".
let spanTexts = document.getElementsByTagName("span");

// Cuando la ventana se carga completamente (evento 'window.onload'), realiza lo siguiente:
window.onload = function() {
  // Crea una matriz de índices de los elementos "span".
  let indices = Array.from(Array(spanTexts.length).keys());

  // Reorganiza aleatoriamente los índices de la matriz.
  shuffleArray(indices);

  // Inicializa un retraso para la animación de las letras en la palabra.
  let delay = 1.0;

  // Para cada índice reorganizado:
  for (let i of indices) {
    spanTexts[i].style.transitionDelay = delay.toString() + "s";
    spanTexts[i].classList.add("active"); // Agrega la clase "active" para mostrar la letra.
    delay += 0.3; // Añade un retraso para la siguiente letra.
  }

  // Obtiene elementos HTML para mostrar y cerrar un mensaje emergente (modal).
  const mostrarModalBtn = document.getElementById("mostrarModal");
  const modal = document.getElementById("modal");
  const cerrarModalBtn = document.getElementById("cerrarModal");

  // Muestra el mensaje emergente al hacer clic en el botón 'mostrarModalBtn'.
  mostrarModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  // Cierra el mensaje emergente al hacer clic en el botón de cierre "cerrarModalBtn".
  cerrarModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Cierra el mensaje emergente al hacer clic en cualquier lugar fuera del contenido del mensaje.
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

