"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;

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

  function id(str) {
    return document.getElementById(str);
  }

  let intentosRestantesElement = id("intentosRestantes");
  const botonJugar = id("empiezaElJuego");
  const botonLetra = document.querySelectorAll("#letras button");
  const imagen = id("ahorcado");
  
  function deshabilitarTeclado(disable) {
    for (let i = 0; i < botonLetra.length; i++) {
      botonLetra[i].disabled = disable;
    }
  }

  function empezarJuego() {
    botonJugar.disabled = true;

    deshabilitarTeclado(false);
    intentosRestantes = 6;
    intentosRestantesElement.textContent = intentosRestantes;
    imagen.src = `assets/imagenes/Img0.png`;

    const parrafo = id("palabraACompletar");
    parrafo.innerHTML = "";

    palabraSecreta = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].toLowerCase();
    console.log(`La palabra que el sistema ha escogido de manera aleatoria es: ${palabraSecreta}`);

    const letrasPalabraAJugar = palabraSecreta.length;
    console.log(`La palabra escogida es ${palabraSecreta} y su longitud es ${letrasPalabraAJugar}`);

    for (let i = 0; i < letrasPalabraAJugar; i++) {
      const span = document.createElement("span");
      span.textContent = "_"
      parrafo.appendChild(span);
    }
  }

  function finalizarJuego() {
    const mensajeFinalElemento = document.createElement('p');
    mensajeFinalElemento.textContent = '¡Juego terminado!';
    console.log(mensajeFinalElemento)
    id('mensajeContainer').appendChild(mensajeFinalElemento);

    deshabilitarTeclado(true);
    botonJugar.disabled = false;
    
  }

  function manejarClicLetra(evento) {
    const spans = document.querySelectorAll("#palabraACompletar span");
    const botonLetraApretada = evento.target;
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
      let completa = true;
      for (let i = 0; i < palabra.length; i++) {
        if (spans[i].innerHTML != palabra[i]) {
          completa = false;
          break;
        }
      }
      if (completa)
      finalizarJuego();
    }
    else {
      intentosRestantes--;
      intentosRestantesElement.textContent = intentosRestantes;
      imagen.src = `assets/imagenes/Img${6 - intentosRestantes}.png`;
      if (intentosRestantes == 0)
        finalizarJuego();
    }
  }
  
  botonJugar.addEventListener("click", empezarJuego);

  for (let i = 0; i < botonLetra.length; i++) {
    botonLetra[i].addEventListener("click", manejarClicLetra);
  }
  
  deshabilitarTeclado(true);
});