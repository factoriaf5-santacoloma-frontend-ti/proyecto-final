import AFRAME from "aframe";
import 'aframe-extras';

const scene = document.querySelector('a-scene');
const plane = document.querySelector('a-plane');
const occupiedPositions = [];

const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach(element => {
    element.addEventListener('click', function () {
        window.open(element.getAttribute('href'), '_blank');
    });
});

// Posición del objeto fijo (#welcome)
const fixedObjectPosition = { x: 0, y: -0.045, z: -3 };

// Función para verificar si una posición está ocupada
export function isPositionOccupied(newPos, minDistance = 2) {
    // Verificar si está demasiado cerca del objeto fijo
    const dx = newPos.x - fixedObjectPosition.x;
    const dz = newPos.z - fixedObjectPosition.z;
    const distanceToFixedObject = Math.sqrt(dx * dx + dz * dz);
    
    // Verificar si la posición está cerca del objeto fijo o de otras posiciones ocupadas
    return distanceToFixedObject < minDistance || occupiedPositions.some(pos => {
        const dx2 = newPos.x - pos.x;
        const dz2 = newPos.z - pos.z;
        return Math.sqrt(dx2 * dx2 + dz2 * dz2) < minDistance; // Distancia euclidiana
    });
}

// Función para generar una posición válida
export function getRandomValidPositionOnPlane(plane, minDistance = 2) {
    const planeWidth = plane.getAttribute('width');
    const planeHeight = plane.getAttribute('height');
    const planePos = plane.getAttribute('position');

    let position;
    let attempts = 0;

    do {
        const x = planePos.x + (Math.random() * planeWidth - planeWidth / 2);
        const z = planePos.z + (Math.random() * planeHeight - planeHeight / 2);
        position = { x, y: planePos.y, z };
        attempts++;
    } while (isPositionOccupied(position, minDistance) && attempts < 100);

    if (attempts < 100) occupiedPositions.push(position);
    return position;
}

// Función para agregar flores
export function addRandomFlores(numFlores) {
    for (let i = 0; i < numFlores; i++) {
        const flor = document.createElement('a-entity');

        flor.setAttribute('gltf-model', '#flowers');
        flor.setAttribute('scale', '0.010 0.010 0.010');

        const { x, y, z } = getRandomValidPositionOnPlane(plane, 2);
        flor.setAttribute('position', `${x} ${y + 0.1} ${z}`);

        scene.appendChild(flor);
    }
}

// Función para agregar árboles
// export function addRandomTree(numTree) {
//     for (let i = 0; i < numTree; i++) {
//         const tree = document.createElement('a-entity');

//         tree.setAttribute('gltf-model', '#tree');
//         tree.setAttribute('scale', '15 15 15');

//         const { x, y, z } = getRandomValidPositionOnPlane(plane, 5);
//         tree.setAttribute('position', `${x} ${y + 0.1} ${z}`);

//         scene.appendChild(tree);
//     }
// }


export function addRandomMushrooms(numMushrooms) {
    for (let i = 0; i < numMushrooms; i++) {
        const mushroom = document.createElement('a-entity');

        // Establecer el modelo GLTF de las setas
        mushroom.setAttribute('gltf-model', '#mushrooms');
        mushroom.setAttribute('scale', '0.020 0.020 0.020'); // Ajusta la escala de las setas según necesites

        // Generar una posición aleatoria válida dentro del plano
        const { x, y, z } = getRandomValidPositionOnPlane(plane, 3); // Ajusta la distancia mínima entre las setas
        mushroom.setAttribute('position', `${x} ${y + 0.1} ${z}`); // Elevar ligeramente las setas

        scene.appendChild(mushroom);
    }
}

// Llamada a las funciones
addRandomFlores(35);
addRandomMushrooms(20);

