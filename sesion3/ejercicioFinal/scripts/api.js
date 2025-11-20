// LLAMADA API
async function APIcall(id) {
    const url = `https://dragonball-api.com/api/characters/${id}`;
    const res = await fetch(url);
    let data = await res.json();
    return data;
}

// LOS 4 X 5 = 20 PERSONAJES QUE UTILIZAREMOS
const idPersonajes = [];
// Cuantos personajes queremos!!!!!
const nPersonajes = 20;
for (let i = 1; i <= nPersonajes; i++) {
    idPersonajes.push(i);
}
// dbz_personajes
let personajes = [];

// FUNCION PARA CARGAR LOS 20 PERSONAJES
async function cargarPersonajesLS() {
    // Borramos lo que habia 
    localStorage.clear();
    console.log(`Descargando los ${nPersonajes} personajes`);
    personajes = [];
    for (const id of idPersonajes) {
        const personaje = await APIcall(id);  // ← aquí estaba el fallo principal
        personajes.push(personaje);
    }
    localStorage.setItem("dbz_personajes", JSON.stringify(personajes));
    console.log(`${nPersonajes} personajes descargados y guardados correctamente`);
    return personajes;
}

export { APIcall, cargarPersonajesLS, personajes };