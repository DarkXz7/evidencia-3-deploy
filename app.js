// Obtén todos los elementos de la lista con la clase "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Agregar un evento de clic a cada uno
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace se siga (por defecto)

    // Alternar la visibilidad del submenú
    const submenu = dropdown.querySelector('.submenu');
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });
});


