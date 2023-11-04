"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;

  const arrayCategorias = [ //creamos un array de arrays con las palabras de cada categoria
    ["gato", "perro"], // Animales
    ["manzana", "platano"], // Frutas
    ["españa", "francia"] // Países 
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
      delay += 0.5;
  }
}