import AFRAME from 'aframe';

const box = document.querySelector('a-box');
let angle = 0;

function rotateBox() {
  angle += 0.5; // Ajusta la velocidad de rotación
  box.setAttribute('rotation', { x: 0, y: angle, z: 0 });
  requestAnimationFrame(rotateBox);
}

rotateBox();