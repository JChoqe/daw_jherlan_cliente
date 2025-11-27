/* carga de datos en localStorage
Aquí pondrás la lógica para que los personajes se carguen solo una vez: 
si ya existen en localStorage los lee de ahí, si no, llama a la función del api.js.
Este archivo será el que exporte la variable global personajes que usarán todos los demás módulos.
*/
import { descargarPersonajes } from './api.js';

let personajes = [];  // Variable global que usarán todos

async function cargarDatos() {
    const guardados = localStorage.getItem("dbz_personajes");

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

async function descargarYGuardar() {
    const datos = await descargarPersonajes();
    if (datos && datos.length > 0) {
        localStorage.setItem("dbz_personajes", JSON.stringify(datos));
        console.log(`${datos.length} personajes descargados y guardados`);
    }
    return datos;
}

cargarDatos();

export { personajes };