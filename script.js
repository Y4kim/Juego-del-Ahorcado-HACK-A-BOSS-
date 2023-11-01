"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;
  let cantidadErrores = 0;
  let cantidadAciertos = 0;

  const arrayPalabras = [
    "gato",
    "cocodrilo",
    // ... (otras palabras)
    "esperanza",
    "sueño",
  ];

  function id(str) {
    return document.getElementById(str);
  }

  let intentosRestantesElement = id("intentosRestantes");
  const botonJugar = id("empiezaElJuego");
  console.log("Haz clic en el botón Empezar a jugar para iniciar el juego. ¡Suerte!");
  botonJugar.addEventListener("click", empezarJuego);

  function empezarJuego(eventoClic) {
    botonJugar.disabled = true;
    console.log(`¿El botón Empezar a jugar está deshabilitado? ${botonJugar.disabled}`);

    cantidadErrores = 0;
    cantidadAciertos = 0;

    const parrafo = id("palabraACompletar");
    parrafo.innerHTML = "";

    palabraSecreta = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].toLowerCase();
    console.log(`La palabra que el sistema ha escogido de manera aleatoria es: ${palabraSecreta}`);

    const letrasPalabraAJugar = palabraSecreta.length;
    console.log(`La palabra escogida es ${palabraSecreta} y su longitud es ${letrasPalabraAJugar}`);

    for (let i = 0; i < letrasPalabraAJugar; i++) {
      const span = document.createElement("span");
      parrafo.appendChild(span);
    }
  }

  const botonLetra = document.querySelectorAll("#letras button");

  for (let i = 0; i < botonLetra.length; i++) {
    botonLetra[i].addEventListener("click", manejarClicLetra);
  }

  function manejarClicLetra(evento) {
    const spans = document.querySelectorAll("#palabraACompletar span");
    const botonLetraApretada = evento.target;
    botonLetraApretada.disabled = true;
    console.log(`La letra apretada es: ${botonLetraApretada}`);

    const letra = botonLetraApretada.innerHTML.toLowerCase();
    const palabra = palabraSecreta.toLowerCase();

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
      if (letra == palabra[i]) {
        spans[i].innerHTML = letra;
        cantidadAciertos++;
        acerto = true;
      }
    }
    if (acerto == false) {
      cantidadErrores++;
      const fuenteImagen = `assets/imagenes/Img${cantidadErrores}.png`;
      const imagen = id("ahorcado");
      imagen.src = fuenteImagen;
    } else if (cantidadErrores == 6) {
      const fuenteImagen = `assets/imagenes/Img6.png`;
      imagen.src = fuenteImagen;
    }
  }

});
