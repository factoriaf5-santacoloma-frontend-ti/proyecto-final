import AFRAME from 'aframe';


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


    AFRAME.registerComponent('clickhandler', {
      schema: {
        groupId: {type: 'string', default: ''}
      },
      init: function () {
        var data = this.data;
        var el = this.el;
    
        // Se ejecuta cuando se hace clic sobre el cubo
        el.addEventListener('click', function () {
          var textGroup = document.querySelector(data.groupId);
          if (textGroup) {
            var isVisible = textGroup.getAttribute('visible');
            textGroup.setAttribute('visible', !isVisible); // Cambiar visibilidad
          }
        });
      }
    });