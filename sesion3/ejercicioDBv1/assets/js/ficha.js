// assets/js/ficha.js
import { limpiarApp, pintarHeader, pintarFooter } from './components.js';
import { personajes } from './store.js';

// Función para obtener el último personaje visto
function obtenerUltimoVisto() {
    const ultimoId = localStorage.getItem("ultimo_personaje_visto");
    if (ultimoId) {
        const personaje = personajes.find(p => p.id === Number(ultimoId));
        if (personaje) return personaje.id;
    }
    // Si no hay último visto. Devolvemos Goku, id=1
    return 1;
}

// NUEVO: Función para guardar el último visto
function guardarUltimoVisto(id) {
    localStorage.setItem("ultimo_personaje_visto", id);
}

function pintarFicha(idDesdeUrl = null) {
    limpiarApp();
    const app = document.getElementById("app");
    app.appendChild(pintarHeader());
    // Decidimos qué ID usar
    let idFinal = idDesdeUrl ? Number(idDesdeUrl) : obtenerUltimoVisto();
    const personaje = personajes.find(p => p.id === idFinal);
    const container = document.createElement("div");
    container.classList.add("ficha-container");
    if (!personaje) {
        container.innerHTML = `<h1 style="text-align:center; padding:100px;">Personaje no encontrado</h1>`;
        
    } else {
        // GUARDAMOS EL ÚLTIMO VISTO
        guardarUltimoVisto(personaje.id);
        container.innerHTML = `
            <div class="ficha-personaje">
                <div class="ficha-imagen">
                    <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <div class="ficha-info">
                    <h1>${personaje.name}</h1>
                    <p><strong>Ki máximo:</strong> ${personaje.maxKi || "Desconocido"}</p>
                    <p><strong>Raza:</strong> ${personaje.race}</p>
                    <p><strong>Género:</strong> ${personaje.gender}</p>
                    <p><strong>Afiliación:</strong> ${personaje.affiliation}</p>
                    <button class="btn-volver" onclick="history.back()">Volver</button>
                    <a href="/sesion3/ejercicioDBv1" class="btn-inicio">Inicio</a>
                </div>
            </div>
        `;
    }

    app.appendChild(container);
    app.appendChild(pintarFooter());
}

export { pintarFicha };