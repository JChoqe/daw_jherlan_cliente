/* LLamada api
Este archivo solo tendrá la función que descarga los 20 personajes de la API de Dragon Ball y los guarda en localStorage. 
*/
let personajes = [];

async function llamadaApi(url) {
    try {
        const rep = await fetch(url);
        if (!rep.ok) { // Si el servidor responde con error (404, 500, etc.). Lanzamos un error con el código y mensaje
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
async function descargarPersonajes() {
    const numPersonajes = 20;
    const url = `https://dragonball-api.com/api/characters?limit=${numPersonajes}`;
    const resultado = await llamadaApi(url);
    if (resultado.success && resultado.data.items) {
        console.log("Personajes descargados correctamente desde la API");
        return resultado.data.items;
    } else {
        console.error("Error al obtener los personajes:", resultado.error);
        return [];
    }
}
export { descargarPersonajes };