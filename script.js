// Función para crear una rosa animada
function crearRosa() {
    const contenedor = document.getElementById('rosas-container');
    const rosa = document.createElement('img');
    rosa.src = 'images/rosa.png'; // Ruta de la imagen de la rosa
    rosa.classList.add('rosa');

    // Posición aleatoria en el eje X
    rosa.style.left = Math.random() * 100 + 'vw';
    rosa.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración aleatoria entre 5s y 10s

    // Agregar la rosa al contenedor
    contenedor.appendChild(rosa);

    // Eliminar la rosa después de que termine la animación
    rosa.addEventListener('animationend', () => {
        rosa.remove();
    });
}

// Crear rosas continuamente
setInterval(crearRosa, 500); // Crear una rosa cada 500ms

// Mensaje de bienvenida
window.onload = () => {
    alert("¡Te amo mucho! Este regalo es para ti 💕");
};
