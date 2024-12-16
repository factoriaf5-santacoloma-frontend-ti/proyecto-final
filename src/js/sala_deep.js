import AFRAME from 'aframe';
// import 'aframe-environment-component';
// import 'aframe-animation-component';
function openDoor() {
    const door = document.getElementById('door');
    door.setAttribute('animation', {
        property: 'position',
        to: '0 3 -5.1', 
        dur: 1000
    });
    door.setAttribute('color', '#A52A2A'); 
}
