import AFRAME from 'aframe';
import 'aframe-extras';
import 'aframe-effects';

document.querySelector('a-scene').addEventListener('loaded', function () {
    const sombrero = document.querySelector('#clickable-sombrero');
    const infoContainer = document.querySelector('#info-container');
    
    let isInfoVisible = false;

    // Agregar un evento de clic al sombrero
    sombrero.addEventListener('click', function() {
      // Alternar la visibilidad
      isInfoVisible = !isInfoVisible;
      infoContainer.setAttribute('visible', isInfoVisible.toString()); // Convertir a cadena 'true' o 'false'
    });
  });


  AFRAME.registerComponent('toggle-text', {
    schema: {
      groupId: { type: 'selector' },
    },
    init: function () {
      const el = this.el;
      const groupEl = this.data.groupId;
      el.addEventListener('click', () => {
        if (groupEl) {
          const isVisible = groupEl.getAttribute('visible') === true || groupEl.getAttribute('visible') === "true";
          groupEl.setAttribute('visible', !isVisible);
          console.log(`Grupo ahora es ${!isVisible ? 'visible' : 'oculto'}`);
        } else {
          console.error('No se encontró el grupo asociado.');
        }
      });
    },
  });

 