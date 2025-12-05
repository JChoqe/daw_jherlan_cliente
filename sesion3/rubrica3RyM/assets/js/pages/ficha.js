import { pintarHeader, pintarFooter, limpiarApp } from './components.js';
import { personajes } from '../store.js';
import { crearTablaEpisodios } from './tabla.js';

function pintarFicha() {
    limpiarApp();
    const app = document.getElementById('app');
    if (!app) return;

    app.appendChild(pintarHeader());

    // Intentamos recuperar el personaje seleccionado desde localStorage
    let guardado = localStorage.getItem('personajeSeleccionado');
    let personaje;

    if (guardado) {
        try {
            personaje = JSON.parse(guardado);
        } catch (error) {
            console.warn("Error leyendo personaje del localStorage, usando fallback", error);
            personaje = null;
        }
    }

    // Fallback: si no hay personaje seleccionado, usamos el primero de la lista
    if (!personaje) {
        // verifica que no sea nula o undefined && que el array no este vacio
        if (personajes && personajes.length > 0) {
            personaje = personajes[0]; // fallback: primer personaje (Rick)
            console.log('No se seleccionó personaje, usando el primero:', personaje.name);
        } else {
            // Si la lista de personajes no está disponible, mostramos mensaje
            app.innerHTML += '<h2 style="text-align:center;padding:4rem;">No hay personajes disponibles</h2>';
            app.appendChild(pintarFooter());
            return;
        }
    }

    // Contenedor principal de la ficha
    const container = document.createElement('section');
    container.classList.add('ficha-container');
    // Tarjeta de personaje
    const card = document.createElement('article');
    card.classList.add('character-card', 'ficha-card');
    card.classList.add(personaje.species === 'Human' ? 'human' : 'alien');

    // Imagen del personaje con fallback si falla la carga
    const img = document.createElement('img');
    img.src = personaje.image;
    img.alt = personaje.name;
    img.onerror = () => img.src = '/sesion3/rubrica3RyM/assets/img/default.jpg';

    // Nombre del personaje
    const h1 = document.createElement('h1');
    h1.textContent = personaje.name;

    // Tabla de episodios
    const tabla = crearTablaEpisodios(personaje.episode);

    // Botón volver
    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver al listado';
    btnVolver.classList.add('btn-volver');
    btnVolver.addEventListener('click', () => {
        location.href = 'index.html';
    });

    // Ensamblaje de la tarjeta
    card.append(img, h1, tabla, btnVolver);
    container.appendChild(card);
    app.append(container, pintarFooter());
}

export { pintarFicha };
