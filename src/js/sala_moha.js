import AFRAME from "aframe";
import 'aframe-extras';
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
  

  AFRAME.registerComponent('click-listener', {
    schema: {
      target: { type: 'selector' }, // El texto asociado al modelo
    },
    init: function () {
      const el = this.el; // Modelo interactivo
      const targetEl = this.data.target; // Texto asociado
  
      if (!targetEl) {
        console.error('No se encontró el texto asociado al click-listener.');
        return;
      }
  
      // Alternar visibilidad al hacer clic
      el.addEventListener('click', () => {
        const isVisible = targetEl.getAttribute('visible') === true || targetEl.getAttribute('visible') === "true";
        targetEl.setAttribute('visible', !isVisible);
      });
    }
  });
  

  AFRAME.registerComponent('click-listener', {
    schema: {
      target: { type: 'selector' }, // Selección del texto asociado
    },
    init: function () {
      const el = this.el; // Modelo interactivo
      const targetEl = this.data.target; // Texto asociado
  
      if (!targetEl) {
        console.error('No se encontró el texto asociado al click-listener.');
        return;
      }
  
      // Alternar visibilidad al hacer clic
      el.addEventListener('click', () => {
        const isVisible = targetEl.getAttribute('visible') === true || targetEl.getAttribute('visible') === "true";
        targetEl.setAttribute('visible', !isVisible);
      });
    }
  });
  