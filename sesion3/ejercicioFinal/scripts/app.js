const API_URL = "https://dragonball-api.com/api/characters?limit=20&page=1";
let personajes = [];

// Cargar personajes desde la API (sin usar localStorage)
async function cargarPersonajes() {
  if (personajes.length > 0) return; // Ya están cargados en memoria
  
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    personajes = data.items;
  } catch (error) {
    console.error("Error al cargar personajes:", error);
  }
}

// GRID
async function mostrarGrid() {
  await cargarPersonajes();
  const grid = document.getElementById("grid");
  if (!grid) return;
  
  grid.innerHTML = personajes.map(p => `
    <div class="card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
    </div>
  `).join('');
  
  // Agregar event listeners a las tarjetas
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      irAFicha(id);
    });
  });
}

// TABLA
async function mostrarTabla() {
  await cargarPersonajes();
  const tabla = document.getElementById("tabla");
  if (!tabla) return;
  
  tabla.innerHTML = `
    <table>
      <thead>
        <tr><th>Imagen</th><th>Nombre</th><th>Ki</th><th>Raza</th></tr>
      </thead>
      <tbody>
        ${personajes.map(p => `
          <tr class="fila-personaje" data-id="${p.id}">
            <td><img src="${p.image}" width="60" alt="${p.name}"></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.ki}</td>
            <td>${p.race}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  // Agregar event listeners a las filas
  document.querySelectorAll('.fila-personaje').forEach(fila => {
    fila.addEventListener('click', () => {
      const id = fila.getAttribute('data-id');
      irAFicha(id);
    });
  });
}

// FICHA
async function mostrarFicha() {
  await cargarPersonajes();
  const ficha = document.getElementById("ficha");
  if (!ficha) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = personajes.find(x => x.id == id);

  if (!p) {
    ficha.innerHTML = "<h2>Personaje no encontrado</h2>";
    return;
  }

  ficha.innerHTML = `
    <div class="ficha">
      <img src="${p.image}" alt="${p.name}">
      <h1>${p.name}</h1>
      <p><strong>Ki:</strong> ${p.ki}</p>
      <p><strong>Raza:</strong> ${p.race}</p>
      <p><strong>Género:</strong> ${p.gender}</p>
      <p><strong>Planeta:</strong> ${p.originPlanet || 'Desconocido'}</p>
    </div>
  `;
}

function irAFicha(id) {
  location.href = `/sesion3/ejercicioFinal/articulo?id=${id}`;
}

// Ejecutar según la página
if (location.pathname.includes("listado")) {
  mostrarTabla();
} else if (location.pathname.includes("articulo")) {
  mostrarFicha();
} else {
  mostrarGrid();
}