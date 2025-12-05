/* Este módulo centraliza la gestión de personajes.
   - Primera prioridad: cargar desde localStorage (carga instantánea).
   - Si no existen datos o están corruptos, descarga desde la API.
   - Después de cargarlos, el resto de módulos (grid.js, ficha.js…) podrán importarlos directamente desde aquí.
*/
import { descargarPersonajes } from './api.js';

let personajes = [];  // Variable global que usarán todos
// Garantiza que 'personajes' siempre tiene datos válidos.
async function cargarDatos() {
    const guardados = localStorage.getItem("ryh_personajes");
    if (guardados) {
        try {
            // Intentamos reconstruir la lista guardada previamente
            personajes = JSON.parse(guardados);
            console.log("Personajes cargados desde localStorage (instantáneo)");
        } catch (error) {
             // Si localStorage está corrupto, forzamos descarga limpia
            console.error("Error al leer localStorage, descargando de nuevo...", error);
            personajes = await descargarYGuardar();
        }
    } else {
        // Primera ejecución sin datos almacenados
        console.log("No hay datos guardados, descargando de la API...");
        personajes = await descargarYGuardar();
    }
}
// Función auxiliar: descarga y guarda en localStorage
async function descargarYGuardar() {
    const datos = await descargarPersonajes();
    if (datos && datos.length > 0) {
        localStorage.setItem("ryh_personajes", JSON.stringify(datos));
        console.log(`${datos.length} personajes descargados y guardados`);
    }
    return datos;
}
// Ejecutamos la carga inmediatamente al importar este módulo
cargarDatos();

export { personajes };