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

