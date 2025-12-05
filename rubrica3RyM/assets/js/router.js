// assets/js/router.js
// Router simple – decide qué página pintar según la URL

import { pintarGrid } from './pages/grid.js';
import { pintarFicha } from './pages/ficha.js';

function iniciarRouter() {
    const path = window.location.pathname;

    // Ruta de la ficha → articulo.html (con o sin barra final)
    if (path.includes('articulo') || path.includes('articulo.html')) {
        pintarFicha();                    // ← SIN parámetro: ficha.js ya lee de localStorage
    } 
    // Cualquier otra ruta (incluido index.html o la raíz)
    else {
        pintarGrid();
    }
}

// Arrancamos el router inmediatamente
iniciarRouter();

// Opcional: si el usuario usa los botones atrás/adelante del navegador
window.addEventListener('popstate', iniciarRouter);