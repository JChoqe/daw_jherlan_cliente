/* Router - Decide qué página mostrar */
import { personajes, datosListos } from './store.js';

async function iniciarRouter() {
    // ✅ ESPERAR a que los datos estén listos
    await datosListos;
    
    if (personajes.length === 0) {
        document.body.innerHTML = `
            <div style="text-align:center; padding:100px;">
                <h1>❌ Error al cargar personajes</h1>
                <button onclick="location.reload()">🔄 Reintentar</button>
            </div>
        `;
        return;
    }
    
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Rutas
    if (path.includes('/pages/index.html') || path === '/' || path === '/index.html') {
        import('./pages/grid.js').then(m => m.pintarGridCasas());
    } 
    else if (path.includes('/pages/norhouse.html')) {
        import('./pages/norhouse.js').then(m => m.pintarNorhouse());
    } 
    else if (path.includes('/pages/ficha.html')) {
        if (!id) {
            window.location.href = '/pages/index.html';
            return;
        }
        import('./pages/ficha.js').then(m => m.pintarFicha(id));
    } 
    else {
        window.location.href = '/pages/index.html';
    }
}

iniciarRouter();