// Realizar peticion y devuelve {success, data/error}
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
// Descarga todas las páginas de personajes hasta que la API no devuelva más
async function descargarPersonajes() {
    // acumular personajes por pagina
    let personajes = [];
    let url = 'https://rickandmortyapi.com/api/character';
    while (url) {
        const resultado = await llamadaApi(url);
        // Si la petición fue correcta y existen resultados...
        if (resultado.success && resultado.data.results) { 
        // Añade los personajes de esta página al acumulador global
            personajes = personajes.concat(resultado.data.results);
            console.log(`Descargados ${personajes.length} personajes hasta ahora...`);
            // 'info.next' contiene la URL de la siguiente pagina.
            // Si es null, la Api indica no mas paginas y se sale del bucle!!!!!
            url = resultado.data.info.next; // siguiente página
        } else {
            console.error("Error al obtener personajes:", resultado.error);
            break;
        }
    }
    console.log(`¡TERMINADO! ${personajes.length} personajes cargados en total.`);
    return personajes;
}

export { descargarPersonajes };