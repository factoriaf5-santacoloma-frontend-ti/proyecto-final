const scene = document.querySelector('a-scene');

function addRandomFlores(numFlores) {
    for (let i = 0; i < numFlores; i++) {
        const flor = document.createElement('a-entity');

        flor.setAttribute('gltf-model', '#flowers');

        // Generar posiciones aleatorias
        const x = Math.random() * 100 - 20;
        const y = 0; // Altura fija
        const z = Math.random() * 100 - 20;

        flor.setAttribute('position', `${x} ${y} ${z}`);
        
        scene.appendChild(flor);
    }
}

addRandomFlores(10);
