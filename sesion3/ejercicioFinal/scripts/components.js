// HEADER
function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="header-container">
            <h1>DRAGON BALL Z</h1>
            <nav>
                <a href="/sesion3/ejercicioFinal">Grid 4×5</a>
                <a href="/sesion3/ejercicioFinal/listado">Tabla</a>
            </nav>
        </div>
    `;
    return header;
}
// FOOTER
function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>© Dragon Ball API + puro JavaScript</p>`;
    return footer;
}
// CARD DEL GRID 4X5
function createCard(personaje) {
    const card = document.createElement("div");
    card.className = "card";

    // Si haces clic → va a la ficha
    card.onclick = () => {
        window.location.href = `/sesion3/ejercicioFinal/articulo?id=${personaje.id}`;
    };

    card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h3>${personaje.name}</h3>
        <p><strong>Raza:</strong> ${personaje.race}</p>
        <p><strong>Ki:</strong> ${personaje.ki}</p>
    `;

    return card;
}

export { createHeader, createFooter, createCard};