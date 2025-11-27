/* Componentes reutilizables: Header, Footer */

function pintarHeader() {
    const header = document.createElement("header");
    header.classList.add("header-hp");
    
    // Logo principal
    const logo = document.createElement("div");
    logo.classList.add("logo-principal");
    logo.innerHTML = `<h1>🪄 HARRY POTTER</h1>`;
    header.appendChild(logo);
    
    // Navegación por casas
    const nav = document.createElement("nav");
    nav.classList.add("nav-casas");
    
    const casas = [
        { nombre: 'Gryffindor', emoji: '🦁', color: '#740001' },
        { nombre: 'Slytherin', emoji: '🐍', color: '#1a472a' },
        { nombre: 'Ravenclaw', emoji: '🦅', color: '#0e1a40' },
        { nombre: 'Hufflepuff', emoji: '🦡', color: '#ecb939' },
        { nombre: 'Sin Casa', emoji: '👻', color: '#2a2a2a', url: '/pages/norhouse.html' }
    ];
    
    casas.forEach(casa => {
        const link = document.createElement("a");
        link.href = casa.url || '/pages/index.html';
        link.classList.add("casa-link");
        link.style.setProperty('--casa-color', casa.color);
        link.innerHTML = `<span>${casa.emoji}</span> ${casa.nombre}`;
        nav.appendChild(link);
    });
    
    header.appendChild(nav);
    return header;
}

function pintarFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer-hp");
    footer.innerHTML = `
        <p>© 2025 Harry Potter Fan Page | Datos de <a href="https://hp-api.onrender.com/" target="_blank">HP API</a></p>
        <p>🪄 Hecho con magia y JavaScript</p>
    `;
    return footer;
}

function limpiarApp() {
    const app = document.getElementById('app');
    if (app) app.innerHTML = '';
}

export { pintarHeader, pintarFooter, limpiarApp };