// assets/js/pages/ficha.js
import { pintarHeader, pintarFooter, limpiarApp } from './components.js';
import { personajes } from '../store.js';
import { crearTablaEpisodios } from './tabla.js';

function pintarFicha() {
    limpiarApp();
    const app = document.getElementById('app');
    if (!app) return;

    app.appendChild(pintarHeader());

    // Recuperar personaje desde localStorage
    const guardado = localStorage.getItem('personajeSeleccionado');
    if (!guardado) {
        app.innerHTML += '<h2 style="text-align:center;padding:4rem;">No se seleccionó ningún personaje</h2>';
        app.appendChild(pintarFooter());
        return;
    }

    const personaje = JSON.parse(guardado);

    // Contenedor principal
    const container = document.createElement('section');
    container.classList.add('ficha-container');

    const card = document.createElement('article');
    card.classList.add('character-card', 'ficha-card');
    card.classList.add(personaje.species === 'Human' ? 'human' : 'alien');

    // Imagen
    const img = document.createElement('img');
    img.src = personaje.image;
    img.alt = personaje.name;
    img.onerror = () => img.src = '/sesion3/rubrica3RyM/assets/img/default.jpg';

    // Nombre
    const h1 = document.createElement('h1');
    h1.textContent = personaje.name;

    // Tabla de episodios (usando el módulo nuevo)
    const tabla = crearTablaEpisodios(personaje.episode);

    // Botón volver
    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver al listado';
    btnVolver.classList.add('btn-volver');
    btnVolver.addEventListener('click', () => history.back());

    // Ensamblaje
    card.append(img, h1, tabla, btnVolver);
    container.appendChild(card);
    app.append(container, pintarFooter());
}

export { pintarFicha };