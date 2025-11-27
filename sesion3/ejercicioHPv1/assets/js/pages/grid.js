/* Grid de 4 casas de Hogwarts */
import { limpiarApp, pintarHeader, pintarFooter } from '../components.js';
import { personajes } from '../store.js';

function pintarGridCasas() {
    limpiarApp();
    const app = document.getElementById("app");
    
    app.appendChild(pintarHeader());
    
    const main = document.createElement("main");
    main.classList.add("main-grid");
    
    // 4 casas de Hogwarts
    const casas = [
        { nombre: 'Gryffindor', emoji: '🦁', color: '#740001' },
        { nombre: 'Slytherin', emoji: '🐍', color: '#1a472a' },
        { nombre: 'Ravenclaw', emoji: '🦅', color: '#0e1a40' },
        { nombre: 'Hufflepuff', emoji: '🦡', color: '#ecb939' }
    ];
    
    casas.forEach(casa => {
        // Filtrar y ordenar personajes
        const personajesCasa = personajes
            .filter(p => p.house === casa.nombre)
            .sort((a, b) => {
                const añoA = a.yearOfBirth || 9999;
                const añoB = b.yearOfBirth || 9999;
                return añoA - añoB;
            });
        
        // Sección de casa
        const seccion = document.createElement("section");
        seccion.classList.add("seccion-casa");
        seccion.style.setProperty('--casa-color', casa.color);
        
        const titulo = document.createElement("h2");
        titulo.innerHTML = `${casa.emoji} ${casa.nombre}`;
        titulo.classList.add("titulo-casa");
        seccion.appendChild(titulo);
        
        const contador = document.createElement("p");
        contador.classList.add("contador");
        contador.textContent = `${personajesCasa.length} personajes`;
        seccion.appendChild(contador);
        
        // Grid de personajes
        const grid = document.createElement("div");
        grid.classList.add("grid-personajes");
        
        personajesCasa.forEach(per => {
            const card = crearCard(per);
            grid.appendChild(card);
        });
        
        seccion.appendChild(grid);
        main.appendChild(seccion);
    });
    
    app.appendChild(main);
    app.appendChild(pintarFooter());
}

function crearCard(personaje) {
    const card = document.createElement("div");
    card.classList.add("card-personaje");
    
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

export { pintarGridCasas };