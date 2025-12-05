// Router: decide qué vista renderizar según la URL actual.
import { pintarGrid } from './pages/grid.js';
import { pintarFicha } from './pages/ficha.js';

function iniciarRouter() {
    // pathname es la parte de la URL sin query ni hash ("/articulo.html")
    const path = window.location.pathname;
    if (path.includes('articulo') || path.includes('articulo.html')) {
        pintarFicha();
    }
    // Cualquier otra ruta (incluido index.html o la raíz)
    else {
        pintarGrid();
    }
}

// Arrancamos el router inmediatamente
iniciarRouter();

// Permite que la vista cambie al usar los botones del navegador. Sin esto, el contenido no se actualizaría.
window.addEventListener('popstate', iniciarRouter);