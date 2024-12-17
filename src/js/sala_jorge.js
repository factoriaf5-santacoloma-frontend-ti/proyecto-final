import AFRAME from "aframe";
import 'aframe-extras';

AFRAME.registerComponent('go-back', {
  init: function () {
    this.el.addEventListener('click', () => {
      window.history.back(); // Regresa a la página anterior
    });
  }
});


// Mostrar el popup de Slashermovies
window.showPopupSlasher = function () {
  const popup = document.getElementById('popup-slashermovies');
  if (popup) {
      popup.style.display = 'block';
  }
};

// Ocultar el popup de Slashermovies
window.hidePopupSlasher = function () {
  const popup = document.getElementById('popup-slashermovies');
  if (popup) {
      popup.style.display = 'none';
  }
};

// Mostrar el popup de Dindom
window.showPopupDindom = function () {
  const popup = document.getElementById('popup-dindom');
  if (popup) {
      popup.style.display = 'block';
  }
};

// Ocultar el popup de Dindom
window.hidePopupDindom = function () {
  const popup = document.getElementById('popup-dindom');
  if (popup) {
      popup.style.display = 'none';
  }
};


// Mostrar el popup de Bubbles
window.showPopupBubbles = function () {
  const popup = document.getElementById('popup-bubbles');
  if (popup) {
      popup.style.display = 'block';
  }
};

// Ocultar el popup de Bubbles
window.hidePopupBubbles = function () {
  const popup = document.getElementById('popup-bubbles');
  if (popup) {
      popup.style.display = 'none';
  }
};
// Mostrar mensaje de ghost-globo
AFRAME.registerComponent('ghost-globo-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const ghostMessage = document.getElementById('ghost-globo-text');
      if (ghostMessage) {
        ghostMessage.setAttribute('visible', 'true');
        setTimeout(() => {
          ghostMessage.setAttribute('visible', 'false');
        }, 10000); 
      }
    });
  }
});

AFRAME.registerComponent('sadghost-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const sadGhostText = document.querySelector('#sadghost-text');
      sadGhostText.setAttribute('visible', 'true');
      setTimeout(() => {
        sadGhostText.setAttribute('visible', 'false');
      }, 8000); 
    });
  }
});

AFRAME.registerComponent('cat-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const catText = document.querySelector('#cat-text'); // Selecciona el texto
      if (catText) {
        catText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          catText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 6000); // Tiempo en milisegundos
      }
    });
  }
});

AFRAME.registerComponent('spider-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const spiderText = document.querySelector('#spider-text'); // Selecciona el texto
      if (spiderText) {
        spiderText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          spiderText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 9000); // Tiempo en milisegundos
      }
    });
  }
});

AFRAME.registerComponent('ghost-don-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const ghostDonText = document.querySelector('#ghost-don-text'); // Selecciona el texto
      if (ghostDonText) {
        ghostDonText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          ghostDonText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 8000); // Tiempo en milisegundos
      }
    });
  }
});

AFRAME.registerComponent('ghost-boy-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const ghostBoyText = document.querySelector('#ghost-boy-text'); // Selecciona el texto
      if (ghostBoyText) {
        ghostBoyText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          ghostBoyText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 7000); // Tiempo en milisegundos
      }
    });
  }
});

AFRAME.registerComponent('ghost-tophat-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const tophatText = document.querySelector('#tophat-response'); // Selecciona el texto
      if (tophatText) {
        tophatText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          tophatText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 7000); // Tiempo en milisegundos
      }
    });
  }
});


AFRAME.registerComponent('cute-ghost-message', {
  init: function () {
    this.el.addEventListener('click', () => {
      const cuteGhostText = document.querySelector('#cute-ghost-text'); // Selecciona el texto
      if (cuteGhostText) {
        cuteGhostText.setAttribute('visible', 'true'); // Muestra el texto
        setTimeout(() => {
          cuteGhostText.setAttribute('visible', 'false'); // Oculta después de 5 segundos
        }, 9000); // Tiempo en milisegundos
      }
    });
  }
});


// Función genérica para mostrar popups
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'block';
  }
}

// Función genérica para ocultar popups
function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
  }
}

// Componente para abrir popups al hacer clic
AFRAME.registerComponent('open-popup', {
  schema: {
    popupId: { type: 'string' } // ID del popup que se debe mostrar
  },
  init: function () {
    this.el.addEventListener('click', () => {
      showPopup(this.data.popupId);
    });

    // Asegurar que los controladores en VR también registren clics
    this.el.addEventListener('triggerdown', () => {
      showPopup(this.data.popupId);
    });
  }
});

// Componente para cerrar popups al hacer clic en el botón
AFRAME.registerComponent('close-popup', {
  schema: {
    popupId: { type: 'string' } // ID del popup que se debe ocultar
  },
  init: function () {
    this.el.addEventListener('click', () => {
      hidePopup(this.data.popupId);
    });

    this.el.addEventListener('triggerdown', () => {
      hidePopup(this.data.popupId);
    });
  }
});
