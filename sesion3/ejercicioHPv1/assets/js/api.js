/* API Harry Potter */

async function llamadaApi(url) {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        return { success: true, data };
    } catch (error) {
        console.error('❌ Error en llamadaApi():', error);
        return {
            success: false,
            error: error.message || 'Error desconocido'
        };
    }
}

async function descargarPersonajes() {
    const url = 'https://hp-api.onrender.com/api/characters';
    const resultado = await llamadaApi(url);
    
    if (resultado.success && resultado.data) {
        // Agregar IDs únicos si no existen
        const personajesConId = resultado.data.map((p, index) => ({
            ...p,
            id: p.id || `hp_${index}`
        }));
        
        console.log(`✅ ${personajesConId.length} personajes descargados`);
        return personajesConId;
    } else {
        console.error('❌ Error al obtener personajes:', resultado.error);
        return [];
    }
}

export { descargarPersonajes };