 import AFRAME from 'aframe';

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

function initScene() {
  const escena = document.querySelector('a-scene'); 

  const audio = document.querySelector('#background-music');
  window.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        console.log('Audio reproducido correctamente');
      }).catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', initScene);
