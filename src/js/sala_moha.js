import AFRAME from "aframe";
import 'aframe-extras';
import 'aframe-event-set-component';

AFRAME.registerComponent('message-handler', {
  schema: {
      target: { type: 'selector' }, // El texto asociado
      duration: { type: 'number', default: 5000 } // Tiempo que el texto estará visible
  },
  init: function () {
      const el = this.el;
      const target = this.data.target;

      if (!target) {
          console.error('No se encontró el texto asociado.');
          return;
      }

      // Evento al hacer clic
      el.addEventListener('click', () => {
          target.setAttribute('visible', true);
          setTimeout(() => {
              target.setAttribute('visible', false);
          }, this.data.duration);
      });
  }
});

// Vincula automáticamente los modelos y sus textos
document.addEventListener('DOMContentLoaded', () => {
  const models = [
      { modelId: '#robot-model', textId: '#text-robot', duration: 10000 },
      { modelId: '#hacker-model', textId: '#text-cybersecurity', duration: 8000 },
      { modelId: '#computer-model', textId: '#text-cybersecurity', duration: 8000 },
      { modelId: '#candado-model', textId: '#text-cybersecurity', duration: 8000 },
      { modelId: '#man-in-vr-model', textId: '#text-metaverse', duration: 9000 },
      { modelId: '#vr-thinker-model', textId: '#text-metaverse', duration: 9000 }
  ];

  models.forEach(({ modelId, textId, duration }) => {
      const model = document.querySelector(modelId);
      if (model) {
          model.setAttribute('message-handler', `target: ${textId}; duration: ${duration}`);
      } else {
          console.warn(`No se encontró el modelo ${modelId}`);
      }
  });
});


AFRAME.registerComponent('toggle-text', {
  schema: {
      target: { type: 'selector' } // Selector del texto asociado
  },
  init: function () {
      const el = this.el; // Modelo interactivo
      const targetEl = this.data.target; // Texto asociado

      if (!targetEl) {
          console.error('No se encontró el texto asociado.');
          return;
      }

      // Alternar visibilidad al hacer clic
      el.addEventListener('click', () => {
          const isVisible = targetEl.getAttribute('visible') === true || targetEl.getAttribute('visible') === "true";
          targetEl.setAttribute('visible', !isVisible);
      });
  }
});

AFRAME.registerComponent('toggle-text', {
  schema: {
      target: { type: 'selector' } // Selector del texto asociado
  },
  init: function () {
      const el = this.el; // Modelo interactivo
      const targetEl = this.data.target; // Texto asociado

      if (!targetEl) {
          console.error('No se encontró el texto asociado.');
          return;
      }

      // Alternar visibilidad al hacer clic
      el.addEventListener('click', () => {
          const isVisible = targetEl.getAttribute('visible') === true || targetEl.getAttribute('visible') === "true";
          targetEl.setAttribute('visible', !isVisible);
      });
  }
});

        // Componente para alternar visibilidad
        AFRAME.registerComponent('toggle-text', {
            schema: {
                target: { type: 'selector' }
            },
            init: function () {
                const el = this.el; // Modelo interactivo
                const targetEl = this.data.target; // Texto asociado

                if (!targetEl) {
                    console.error('No se encontró el texto asociado.');
                    return;
                }

                // Alternar visibilidad al hacer clic
                el.addEventListener('click', () => {
                    const isVisible = targetEl.getAttribute('visible') === true || targetEl.getAttribute('visible') === "true";
                    targetEl.setAttribute('visible', !isVisible);
                });
            }
        });



AFRAME.registerComponent('dancing-robot-message', {
    init: function () {
      this.el.addEventListener('click', () => {
        const robotText = document.querySelector('#dancing-robot-text');
        if (robotText) {
          robotText.setAttribute('visible', 'true');
          setTimeout(() => {
            robotText.setAttribute('visible', 'false');
          }, 5000); // Oculta el mensaje después de 5 segundos
        }
      });
    }
  });
  