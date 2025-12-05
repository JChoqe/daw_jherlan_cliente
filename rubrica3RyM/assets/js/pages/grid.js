// assets/js/pages/grid.js
import { pintarHeader, pintarFooter, limpiarApp } from './components.js';
import { personajes } from '../store.js';

function pintarGrid() {
    limpiarApp();

    const app = document.getElementById('app');
    if (!app) return;

    // Header y footer comunes
    app.appendChild(pintarHeader());

    // Contenedor del grid
    const grid = document.createElement('div');
    grid.classList.add('characters-grid');

    personajes.forEach(personaje => {
        const card = document.createElement('article');
        card.classList.add('character-card');

        // Fondo según especie: Human → rojo, cualquier otra → verde
        card.classList.add(personaje.species === 'Human' ? 'human' : 'alien');

        // Imagen con fallback a default.jpg
        const img = document.createElement('img');
        img.src = personaje.image;
        img.alt = personaje.name;
        img.onerror = function () {
            this.src = '/sesion3/rubrica3RyM/assets/img/default.png';
        };

        // Nombre del personaje
        const nombre = document.createElement('h2');
        nombre.textContent = personaje.name;

        // Todo el card es clicable y guarda el personaje en localStorage
        card.addEventListener('click', () => {
            localStorage.setItem('personajeSeleccionado', JSON.stringify(personaje));
            location.href = '/sesion3/rubrica3RyM/articulo';
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