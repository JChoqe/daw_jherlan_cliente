import { crearHeader, crearFooter } from './components.js';
import { cargarPersonajesLS } from './api.js';
import { pintarGrid } from './grid.js';

const app = document.getElementById('app');

async function iniciarApp() {
    app.innerHTML = '';                    // limpiamos
    app.appendChild(crearHeader());
    app.appendChild(crearFooter());
}

// Arrancamos todo
iniciarApp();