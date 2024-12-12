import AFRAME from 'aframe';

// const box = document.querySelector('a-box');
// let angle = 0;

// function rotateBox() {
//   angle += 0.5; // Ajusta la velocidad de rotación
//   box.setAttribute('rotation', { x: 0, y: angle, z: 0 });
//   requestAnimationFrame(rotateBox);
// }

// rotateBox();


const boxes = document.querySelectorAll('a-box'); // Selecciona todas las a-box
let angles = Array(boxes.length).fill(0); // Crea un array para almacenar los ángulos de cada caja

function rotateBoxes() {
  boxes.forEach((box, index) => {
    angles[index] += 0.5; // Ajusta la velocidad de rotación para cada caja
    box.setAttribute('rotation', { x: 0, y: angles[index], z: 0 }); // Aplica la rotación
  });
  requestAnimationFrame(rotateBoxes); // Llama a la función nuevamente
}

// Inicia la rotación
rotateBoxes();



function mostrarTexto() {
    var texto = document.getElementById('text1');
    if (texto.getAttribute('visible') === 'false') {
      texto.setAttribute('visible', true);
    } else {
      texto.setAttribute('visible', false);
    }
  }

const cameraRig = document.querySelector("#cameraRig");

    // Escuchar eventos de teclado
    document.addEventListener("keydown", (event) => {
      const step = 0.1; // Velocidad de movimiento vertical
      const position = cameraRig.object3D.position;

      // Movimiento vertical con Q y E
      if (event.key === "e") {
        position.y += step; // Subir
      } else if (event.key === "q") {
        position.y -= step; // Bajar
      }
    });
