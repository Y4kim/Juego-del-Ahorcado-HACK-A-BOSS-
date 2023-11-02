"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let palabraSecreta;
  let intentosRestantes = 6;

  const arrayCategorias = {//creamos objeto de arrays con categorias
    animales: ["gato", "perro",],
    frutas: ["manzana", "platano"],
    paises: ["españa", "francia"]
  };

  function id(str) {
    return document.getElementById(str);
  }

  let intentosRestantesElement = id("intentosRestantes");
  const botonJugar = id("empiezaElJuego");
  const botonCategorias = document.querySelectorAll("#categorias button");//añadimos los botónes del div.ID CATGEORIAS
  const botonLetra = document.querySelectorAll("#letras button");
  const imagen = id("ahorcado");
  
  function deshabilitarTeclado(disable) {
    for (let i = 0; i < botonLetra.length; i++) {
      botonLetra[i].disabled = disable;
    }
  }

  function empezarJuego(categorias) {
    const mensajeContainer = id('mensajeContainer');
  
  // Ocultamos el contenedor de mensajes al empezar un nuevo juego
  mensajeContainer.style.display = 'none';

    botonJugar.disabled = true;

    deshabilitarTeclado(false);
    intentosRestantes = 6;
    intentosRestantesElement.textContent = intentosRestantes;
    imagen.src = `assets/imagenes/Img0.png`;

    const parrafo = id("palabraACompletar");
    parrafo.innerHTML = "";

    const palabraArrayCategoria = arrayCategorias[categorias];//declaramos variable para la palabra seleccionada aleatoriamente
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
  }

  




  function manejarClicCategoria(event){//funcionalidad categoria
    const categoriaSeleccionada = event.target.getAttribute("data-categoria");
    empezarJuego(categoriaSeleccionada);
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

  for (let i = 0; i < botonCategorias.length; i++) {
    botonCategorias[i].addEventListener("click", manejarClicCategoria);
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