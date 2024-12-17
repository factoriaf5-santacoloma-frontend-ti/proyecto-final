import AFRAME from 'aframe';
import 'aframe-extras';
// import 'aframe-effects';

AFRAME.registerComponent('link-on-click', {
  schema: { type: 'string' },
  init: function () {
      this.el.addEventListener('click', () => {
          window.location.href = this.data;
      });
  }
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


    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('.interactable');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function () {
            console.log('Interactive element clicked!');
            // Add your interaction logic here
        });
    });