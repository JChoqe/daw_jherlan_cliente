import { crearHeader, crearFooter } from './components.js';
import { cargarPersonajesLS } from './api.js';
import { pintarGrid } from './grid.js';

const app = document.getElementById('app');

async function iniciarApp() {
    app.innerHTML = '';                    // limpiamos
    app.appendChild(crearHeader());
    const urlActual = window.location.href;   // la URL completa que estás viendo

    // 1. ¿Estamos en la ficha de un personaje? (ej: ?id=5)
    if (urlActual.includes("/articulo") && urlActual.includes("?id=")) {
        // Sacamos el número del id (ej: de "?id=5" → sacamos el 5)
        const id = urlActual.split("?id=")[1];
        pintarFicha(id);                       // pintamos la ficha
    }

    // 2. ¿Estamos en la página del listado / tabla?
    else if (urlActual.includes("/listado")) {
        pintarTabla();                         // pintamos la tabla
    }

    // 3. Si no es ninguna de las dos → estamos en la página principal
    else {
        pintarGrid();                          // pintamos el grid 4×5
    }


    app.appendChild(crearFooter());
}

// Arrancamos todo
iniciarApp();