/* Store - LocalStorage para caché */
import { descargarPersonajes } from './api.js';

let personajes = [];

async function cargarDatos() {
    const guardados = localStorage.getItem("hp_personajes");

    if (guardados) {
        try {
            personajes = JSON.parse(guardados);
            console.log("💾 Personajes cargados desde localStorage");
        } catch (error) {
            console.error("❌ Error al leer localStorage:", error);
            personajes = await descargarYGuardar();
        }
    } else {
        console.log("🌐 Descargando de la API...");
        personajes = await descargarYGuardar();
    }
}

async function descargarYGuardar() {
    const datos = await descargarPersonajes();
    if (datos && datos.length > 0) {
        localStorage.setItem("hp_personajes", JSON.stringify(datos));
        console.log(`💾 ${datos.length} personajes guardados en localStorage`);
    }
    return datos;
}

// Exportar promesa para esperar la carga
const datosListos = cargarDatos();

export { personajes, datosListos };