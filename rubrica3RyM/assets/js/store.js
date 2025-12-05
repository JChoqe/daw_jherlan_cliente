/* Carga de datos en localStorage
   Este módulo es el único responsable de tener los personajes.
   Si ya están en localStorage → los carga al instante.
   Si no → los descarga una sola vez y los guarda.
   Todos los demás archivos (grid.js, ficha.js...) importarán "personajes" desde aquí.
*/
import { descargarPersonajes } from './api.js';

let personajes = [];  // Variable global que usarán todos
// Carga los datos (solo se ejecuta una vez al importar el módulo)
async function cargarDatos() {
    const guardados = localStorage.getItem("ryh_personajes");

    if (guardados) {
        try {
            personajes = JSON.parse(guardados);
            console.log("Personajes cargados desde localStorage (instantáneo)");
        } catch (error) {
            console.error("Error al leer localStorage, descargando de nuevo...", error);
            personajes = await descargarYGuardar();
        }
    } else {
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