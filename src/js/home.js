import AFRAME from "aframe";
import 'aframe-extras';
// import 'aframe-effects';

AFRAME.registerComponent('pause-on-hover', {
    init: function () {
      const carousel = this.el;
      this.el.addEventListener('mouseenter', () => {
        const animation = carousel.getAttribute('animation');
        animation.pause = true; // Pausa la animación
        carousel.setAttribute('animation', animation);
      });
      this.el.addEventListener('mouseleave', () => {
        const animation = carousel.getAttribute('animation');
        animation.pause = false; // Reanuda la animación
        carousel.setAttribute('animation', animation);
      });
    }
  });

  // Redirigir a href al hacer clic en los planos
  AFRAME.registerComponent('redirect-on-click', {
    init: function () {
      this.el.addEventListener('click', () => {
        const href = this.el.getAttribute('data-href');
        if (href) {
          window.location.href = href;
        }
      });
    }
  });

  // Asignar los componentes a las entidades correspondientes
  document.querySelector('#carousel').setAttribute('pause-on-hover', '');
  const planes = document.querySelectorAll('.plane');
  planes.forEach(plane => {
    plane.setAttribute('redirect-on-click', '');
  });