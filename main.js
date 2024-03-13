document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el encabezado y el contenedor siguiente
    var miheader = document.getElementById('miheader');
    var contenidoSiguiente = document.getElementById('contenido-siguiente');
    
    // Calcula la altura del contenedor siguiente
    var alturaContenidoSiguiente = contenidoSiguiente.offsetHeight;

    // Ajusta la altura del encabezado para evitar superposiciones
    miheader.style.marginBottom = alturaContenidoSiguiente + 'px';
});