import AFRAME from 'aframe';
import 'aframe-extras';

AFRAME.registerComponent("play",{
    init: function(){
        const myEl = document.querySelector("#sound-car");
        this.el.addEventListener("click", function (){
            myEl.components.sound.playSound();
        });
    }
    });
    
    
    AFRAME.registerComponent("stop",{
        init: function(){
            const myEl = document.querySelector("#sound-car");
            this.el.addEventListener("click", function (){
                myEl.components.sound.stopSound();
            });
        }
        });

        const cameraRig = document.querySelector("#cameraRig");

        // Escuchar eventos de teclado
        document.addEventListener("keydown", (event) => {
          const step = 0.5; // Velocidad de movimiento vertical
          const position = cameraRig.object3D.position;
    
          // Movimiento vertical con Q y E
          if (event.key === "e") {
            position.y += step; // Subir
          } else if (event.key === "q") {
            position.y -= step; // Bajar
          }
        });