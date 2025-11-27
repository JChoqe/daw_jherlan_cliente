// assets/js/router.js
// El cerebro maestro que controla TODO tu proyecto

import { personajes } from './store.js';
import { pintarGrid } from './grid.js';
import { pintarTabla } from './tabla.js';
import { pintarFicha } from './ficha.js';

async function iniciarRouter() {
    // Los personajes ya se cargan automáticamente en store.js
    if (personajes.length === 0) {
        console.log("Esperando carga de personajes...");
        // store.js ya lo hace solo, no hace falta nada más
    }
    const path = window.location.pathname; // donde estamos
    const params = new URLSearchParams(window.location.search); // despues de ?
    const id = params.get('id'); // puede ser null

    // Rutas
    if (path.includes('/listado')) {
        pintarTabla();
    } else if (path.includes('/articulo')) {
        pintarFicha(id); // ultimo visto o Goku
    } else {
        pintarGrid();
    }
}

// ¡ARRANCA !!!
iniciarRouter();