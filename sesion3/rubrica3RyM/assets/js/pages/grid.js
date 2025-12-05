// assets/js/pages/grid.js
import { pintarHeader, pintarFooter, limpiarApp } from './components.js';
import { personajes } from '../store.js';

function pintarGrid() {
    limpiarApp();
    // Si no existe el contenedor, salimos. Por seguridad
    const app = document.getElementById('app');
    if (!app) return;

    // Header y footer comunes
    app.appendChild(pintarHeader());

    // Contenedor del grid
    const grid = document.createElement('div');
    grid.classList.add('characters-grid');

    // Recorremos todos los personajes y creamos una tarjeta para cada uno
    personajes.forEach(personaje => {
        const card = document.createElement('article');
        card.classList.add('character-card');

        // Diferenciamos el fondo según la especie
        card.classList.add(personaje.species === 'Human' ? 'human' : 'alien');

        // Creamos la imagen y ponemos fallback si no carga
        const img = document.createElement('img');
        img.src = personaje.image;
        img.alt = personaje.name;
        img.onerror = function () {
            this.src = '/sesion3/rubrica3RyM/assets/img/default.png';
        };

        // Nombre del personaje
        const nombre = document.createElement('h2');
        nombre.textContent = personaje.name;

        // Hacemos la tarjeta clicable: guarda personaje en localStorage y redirige
        card.addEventListener('click', () => {
            localStorage.setItem('personajeSeleccionado', JSON.stringify(personaje));
            location.href = 'articulo.html';
        });

        // Añadimos elementos a la tarjeta
        card.appendChild(img);
        card.appendChild(nombre);

        // Añadimos tarjeta al grid
        grid.appendChild(card);
    });

    app.appendChild(grid);
    app.appendChild(pintarFooter());
}

export { pintarGrid };