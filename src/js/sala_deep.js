import AFRAME from 'aframe';
import 'aframe-environment-component';
import 'aframe-extras';
import 'aframe-event-set-component';
// import 'aframe-animation-component';
function openDoor() {
    const door = document.getElementById('door');
    door.setAttribute('position', { x: 0, y: 1, z: -5.5 }); // Moves the door "open"
}

// Additional key press event for teleportation
document.addEventListener('keydown', (event) => {
    const player = document.getElementById('player');
    if (event.key === 't') { // Teleport key
        player.setAttribute('position', { x: 0, y: 1.6, z: -6 });
    } else if (event.key === 'r') { // Reset position key
        player.setAttribute('position', { x: 0, y: 1.6, z: 15 });
    }
});
