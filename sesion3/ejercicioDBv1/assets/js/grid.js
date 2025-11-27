/* pintar solo grid
Este archivo importa los personajes del store, importa las funciones de components y pinta el grid 4×5 dentro del #app. 
Al terminar este paso, al entrar a index.html ya verás las 20 tarjetas perfectamente colocadas.
*/
import { limpiarApp, pintarHeader, pintarFooter } from './components.js';
import { personajes } from './store.js';

function pintarGrid() {
    limpiarApp();
    const app = document.getElementById("app");
    app.appendChild(pintarHeader());
    const container = document.createElement("div");
    container.classList.add("grid");
    personajes.forEach(per => {
        const card = document.createElement("div");
        card.classList.add("card");
        const tit = document.createElement("h4");
        tit.textContent = per.name;
        const img = document.createElement("img")
        img.src = per.image;
        img.alt = per.name;
        card.addEventListener("click", () => {
            location.href = `/sesion3/ejercicioDBv1/articulo?id=${per.id}`;
        });
        card.appendChild(img);
        card.appendChild(tit);
        container.appendChild(card);
    });
    app.appendChild(container);
    app.appendChild(pintarFooter());
}

export { pintarGrid }