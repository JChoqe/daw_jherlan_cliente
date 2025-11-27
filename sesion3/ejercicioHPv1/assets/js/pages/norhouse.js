/* Personajes sin casa */
import { limpiarApp, pintarHeader, pintarFooter } from '../components.js';
import { personajes } from '../store.js';

function pintarNorhouse() {
    limpiarApp();
    const app = document.getElementById("app");
    
    app.appendChild(pintarHeader());
    
    const main = document.createElement("main");
    main.classList.add("main-norhouse");
    
    // Filtrar personajes sin casa
    const personajesSinCasa = personajes
        .filter(p => !p.house || p.house === '')
        .sort((a, b) => {
            const añoA = a.yearOfBirth || 9999;
            const añoB = b.yearOfBirth || 9999;
            return añoA - añoB;
        });
    
    // Título
    const header = document.createElement("div");
    header.classList.add("norhouse-header");
    header.innerHTML = `
        <h1>👻 PERSONAJES SIN CASA</h1>
        <p class="norhouse-contador">${personajesSinCasa.length} personajes sin casa asignada</p>
    `;
    main.appendChild(header);
    
    // Grid de personajes
    const grid = document.createElement("div");
    grid.classList.add("grid-norhouse");
    
    personajesSinCasa.forEach(per => {
        const card = crearCard(per);
        grid.appendChild(card);
    });
    
    main.appendChild(grid);
    app.appendChild(main);
    app.appendChild(pintarFooter());
}

function crearCard(personaje) {
    const card = document.createElement("div");
    card.classList.add("card-norhouse");
    
    // Imagen
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("card-img-container");
    
    const img = document.createElement("img");
    img.src = personaje.image || 'https://via.placeholder.com/300x400?text=Sin+Imagen';
    img.alt = personaje.name;
    img.classList.add("card-img");
    imgContainer.appendChild(img);
    
    card.appendChild(imgContainer);
    
    // Info
    const info = document.createElement("div");
    info.classList.add("card-info");
    
    const nombre = document.createElement("h3");
    nombre.textContent = personaje.name;
    nombre.classList.add("card-nombre");
    info.appendChild(nombre);
    
    // Apodos (si existen)
    if (personaje.alternate_names && personaje.alternate_names.length > 0) {
        const apodos = document.createElement("p");
        apodos.classList.add("card-apodos");
        apodos.textContent = `"${personaje.alternate_names.join(', ')}"`;
        info.appendChild(apodos);
    }
    
    // Año de nacimiento
    const año = document.createElement("p");
    año.classList.add("card-año");
    año.textContent = personaje.yearOfBirth ? `📅 ${personaje.yearOfBirth}` : '📅 Año desconocido';
    info.appendChild(año);
    
    card.appendChild(info);
    
    // Click para ir a ficha
    card.addEventListener("click", () => {
        window.location.href = `/pages/ficha.html?id=${personaje.id}`;
    });
    
    return card;
}

export { pintarNorhouse };