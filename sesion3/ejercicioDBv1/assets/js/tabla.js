// pinta la tabla
import { limpiarApp, pintarHeader, pintarFooter } from './components.js';
import { personajes } from './store.js';

function pintarTabla() {
    limpiarApp();
    const app = document.getElementById("app");
    app.appendChild(pintarHeader());
    const container = document.createElement("div");
    container.classList.add("tabla-container");
    const table = document.createElement("table");
    table.classList.add("tabla-personajes");
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Ki</th>
            <th>Raza</th>
            <th>Género</th>
        </tr>
    `;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    personajes.forEach(per => {
        const tr = document.createElement("tr");
        tr.classList.add("fila-personaje");
        tr.addEventListener("click", () => {
            location.href = `/sesion3/ejercicioDBv1/articulo?id=${per.id}`;
        });
        tr.innerHTML = `
            <td><img src="${per.image}" alt="${per.name}" class="foto-tabla"></td>
            <td class="nombre">${per.name}</td>
            <td>${per.maxKi || per.ki || "Desconocido"}</td>
            <td>${per.race || "Desconocido"}</td>
            <td>${per.gender || "Desconocido"}</td>
        `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
    app.appendChild(container);
    app.appendChild(pintarFooter());
}
export { pintarTabla };