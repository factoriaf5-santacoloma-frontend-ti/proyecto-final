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


AFRAME.registerComponent('joystick-movement', {
  schema: {
    speed: {type: 'number', default: 0.1}
  },
  init: function () {
    this.direction = new THREE.Vector3();
  },
  tick: function () {
    const gamepad = navigator.getGamepads()[0]; // Controlador principal
    if (gamepad && gamepad.axes.length >= 2) {
      const [xAxis, yAxis] = gamepad.axes; // Ejes del joystick derecho
      this.direction.set(xAxis, 0, -yAxis); // Ajustar dirección (Z negativo es adelante)
      this.direction.multiplyScalar(this.data.speed);
      this.el.object3D.position.add(this.direction); // Actualizar posición del camera-rig
    }
  }
});