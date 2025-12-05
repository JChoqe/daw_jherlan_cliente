// assets/js/api.js
// VERSIÓN FINAL – Tu estilo exacto – Solo la palabra "personajes"

async function llamadaApi(url) {
    try {
        const rep = await fetch(url);
        if (!rep.ok) {
            throw new Error(`HTTP ${rep.status}: ${rep.statusText}`);
        }
        const data = await rep.json();
        return { success: true, data };
    } catch (error) {
        console.error('Error en llamadaApi():', error);
        return {
            success: false,
            error: error.message || 'Error desconocido en la petición'
        };
    }
}
// Sigue pidiendo la siguiente página mientras la API diga que existe
async function descargarPersonajes() {
    // acumular personajes por pagina
    let personajes = [];
    let url = 'https://rickandmortyapi.com/api/character';

    while (url) {
        const resultado = await llamadaApi(url);

        if (resultado.success && resultado.data.results) {
            personajes = personajes.concat(resultado.data.results);
            console.log(`Descargados ${personajes.length} personajes hasta ahora...`);
            url = resultado.data.info.next;
        } else {
            console.error("Error al obtener personajes:", resultado.error);
            break;
        }
    }

    console.log(`¡TERMINADO! ${personajes.length} personajes cargados en total.`);
    return personajes;
}

export { descargarPersonajes };