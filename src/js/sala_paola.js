document.querySelector('a-scene').addEventListener('loaded', function () {
    const sombrero = document.querySelector('#clickable-sombrero');
    const infoContainer = document.querySelector('#info-container');
    
    let isInfoVisible = false;

    // Agregar un evento de clic al sombrero
    sombrero.addEventListener('click', function() {
      // Alternar la visibilidad
      isInfoVisible = !isInfoVisible;
      infoContainer.setAttribute('visible', isInfoVisible.toString()); // Convertir a cadena 'true' o 'false'
    });
  });
  