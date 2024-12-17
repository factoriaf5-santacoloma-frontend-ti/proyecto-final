import AFRAME from 'aframe';
import 'aframe-extras';

AFRAME.registerComponent('toggle-text', {
  schema: {
    groupId: { type: 'selector' }, 
    soundId: { type: 'selector' }, 
  },
  init: function () {
    const el = this.el;
    const groupEl = this.data.groupId;
    const soundEl = this.data.soundId;

    if (!groupEl) {
      console.warn('no se encontro el texto');
    }
    if (!soundEl) {
      console.warn('no se encontro el texto');
    }

    el.addEventListener('click', () => {
      if (groupEl) {
        const isVisible = groupEl.getAttribute('visible') === true || groupEl.getAttribute('visible') === "true";
        groupEl.setAttribute('visible', !isVisible);
        console.log(`Grupo ahora es ${!isVisible ? 'visible' : 'oculto'}`);
      }

      if (soundEl && soundEl.components.sound) {
        soundEl.components.sound.playSound();
        console.log('Sonido reproducido.');
      }
    });
  },
});


AFRAME.registerComponent('joystick-movement', {
  init: function () {
      this.el.addEventListener('thumbstickmoved', (event) => {
          let movement = event.detail; // movement contains x and y axis
          let rig = document.querySelector('#camera-rig');                        // Apply movement along x and z axes (forward/backward and side-to-side)
          rig.object3D.position.x += movement.x * 0.1;
          rig.object3D.position.z += movement.y * 0.1;
      });
  }
});

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('.interactable');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function () {
            console.log('Interactive element clicked!');
            // Add your interaction logic here
        });
    });