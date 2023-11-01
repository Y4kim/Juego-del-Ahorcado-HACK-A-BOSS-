"use strict";

let palabraSecreta;
/*  let palabraAdivinada = []; */
let intentosRestantes = 6; 
let cantidadErrores = 0;
let cantidadAciertos = 0;

/* Array de palabras random */
  const arrayPalabras = [
  "gato", 
  "cocodrilo", 
  "elefante", 
  "jirafa", 
  "leon",
  "manzana",
  "verdura" ,
  "hola",
  "adios" ,
  "mañana",
  "temprano",
  "luego",
  "camion",
  "eterno",
  "perro",
  "simbolo",
  "tractor",
  "emergencia",
  "hospital",
  "artista",
  "aduana",
  "siempre",
  "nunca",
  "cargador",
  "telefono",
  "perro",
  "gato",
  "casa",
  "coche",
  "amarillo",
  "azul",
  "pelota",
  "jardin",
  "computadora",
  "montaña",
  "playa",
  "ciudad",
  "libro",
  "escuela",
  "trabajo",
  "feliz",
  "triste",
  "risa",
  "llanto",
  "verde",
  "rojo",
  "nube",
  "sol",
  "luz",
  "oscuridad",
  "pintura",
  "musica",
  "bailar",
  "cantar",
  "avion",
  "viaje",
  "comida",
  "bebida",
  "familia",
  "amigo",
  "amor",
  "odio",
  "esperanza",
  "sueño",
];

/* Función para reemplazar el document.getElementById */
function id(str){
    return document.getElementById(str)
}

let intentosRestantesElement = id("intentosRestantes");
  const botonJugar = id('empiezaElJuego')
  console.log('Haz clic en el botón Empezar a jugar para inciar el juego! Suerte!!! ')
  botonJugar.addEventListener('click', empezarJuego)


  function empezarJuego(eventoClic) {
    botonJugar.disabled = true;
    console.log(`El boton empezar a jugar está desabilitado? ${botonJugar.disabled} `)

    cantidadErrores = 0;
    cantidadAciertos = 0;

    const parrafo = id('palabraACompletar')
    parrafo.innerHTML = '';

    const numeroPalabras = arrayPalabras.length

    palabraSecreta = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].toLowerCase();

    console.log(`La palabra que el sistema ha escogido de manera aleatoria es: ${palabraSecreta}`)

    const letrasPalabraAJugar = palabraSecreta.length;

    console.log(`La palabra escogida es ${palabraSecreta} y su longitud es ${letrasPalabraAJugar}`)
    //palabraAdivinada = Array(palabraSecreta.length).fill("_");
    
    for (let i = 0; i < letrasPalabraAJugar; i++){
        //Creo un span por cada letra que tenga la palabra escogida
        const span = document.createElement('span')
        //Y aquí le agrego al párrafo que tenemos en el HTML el span
        parrafo.appendChild(span);
    }
    
    //palabraElement.textContent = palabraAdivinada.join(" ");
  }

  //Creo una const para el boton de las letras
  const botonLetra = document.querySelectorAll('#letras button')
    //EN este caso el querySelectorAll me va a devolver un array de las 27 letras.

    for (let i = 0; i < botonLetra.length; i++){
        botonLetra[i].addEventListener('click', manejarClicLetra);
    }


    function manejarClicLetra(evento){
        const spans = document.querySelectorAll('#palabraACompletar span')
        const botonLetraApretada = evento.target //cuál de todas las letras llamó a la función
        botonLetraApretada.disabled = true;
        console.log(`La letra apretada es: ${botonLetraApretada}`)
    
        const letra = botonLetraApretada.innerHTML.toLowerCase();
    
        const palabra = palabraSecreta.toLowerCase();
        
        let acerto = false;
        for( let i = 0; i < palabra.length; i++){
            if (letra == palabra [i]){
                spans[i].innerHTML = letra;
                cantidadAciertos++;
                acerto = true; 
            }
        }
        if( acerto == false){
            cantidadErrores++;
            const fuenteImagen = `assets/imagenes/Img${cantidadErrores}.png`;
            const imagen = id('ahorcado');
            imagen.src = fuenteImagen;
        } else if (cantidadErrores == 6){
            const fuenteImagen = `assets/imagenes/Img6.png`;
            imagen.src = fuenteImagen;

        }
    }
  
    const imagenesAhorcado = [
        "/assets/imagenes/Img1.jpg",
        "/assets/imagenes/Img2.jpg",
        "/assets/imagenes/Img3.jpg",
        "/assets/imagenes/Img4.jpg",
        "/assets/imagenes/Img5.jpg",
        "/assets/imagenes/Img6.jpg"
    ];
      let intentosFallidos = 0;