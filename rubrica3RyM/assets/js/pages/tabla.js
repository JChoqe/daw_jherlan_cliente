// assets/js/pages/tabla.js
// Módulo que crea la tabla de episodios

function crearTablaEpisodios(episodiosUrls) {
    const tabla = document.createElement('table');
    tabla.classList.add('episodios-table');

    const tbody = document.createElement('tbody');

    episodiosUrls.forEach((url, i) => {
        const tr = document.createElement('tr');

        // Extraer ID de la URL (ejemplo: https://rickandmortyapi.com/api/episode/28 → 28)
        const episodeId = url.split('/').pop();
        const tdNumero = document.createElement('td');

        tdNumero.textContent = `Capítulo ${episodeId}`;

        const tdEnlace = document.createElement('td');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = 'Ver JSON del capítulo';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        tdEnlace.appendChild(a);

        tr.append(tdNumero, tdEnlace);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    return tabla;
}

export { crearTablaEpisodios };