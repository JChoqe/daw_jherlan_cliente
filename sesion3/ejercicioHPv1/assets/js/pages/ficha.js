/* Ficha detallada estilo Dragon Ball */
import { limpiarApp, pintarHeader, pintarFooter } from '../components.js';
import { personajes } from '../store.js';

function pintarFicha(id) {
    limpiarApp();
    const app = document.getElementById("app");
    
    app.appendChild(pintarHeader());
    
    const main = document.createElement("main");
    main.classList.add("main-ficha");
    
    // Buscar personaje por ID
    const personaje = personajes.find(p => p.id === id || p.id === Number(id));
    
    if (!personaje) {
        main.innerHTML = `
            <div class="error-container">
                <h1>❌ Personaje no encontrado</h1>
                <button onclick="window.location.href='/pages/index.html'" class="btn-volver">🏠 Volver a Casas</button>
            </div>
        `;
    } else {
        const fichaHTML = crearFichaHTML(personaje);
        main.innerHTML = fichaHTML;
    }
    
    app.appendChild(main);
    app.appendChild(pintarFooter());
}

function crearFichaHTML(p) {
    const casaColor = getCasaColor(p.house);
    
    return `
        <div class="ficha-container" style="--casa-color: ${casaColor}">
            <!-- Imagen grande estilo DBZ -->
            <div class="ficha-imagen">
                <div class="imagen-frame">
                    <img src="${p.image || 'https://via.placeholder.com/400x600?text=Sin+Imagen'}" 
                         alt="${p.name}" 
                         class="personaje-img">
                </div>
                ${p.house ? `<div class="casa-badge">${getCasaEmoji(p.house)} ${p.house}</div>` : '<div class="casa-badge">👻 Sin Casa</div>'}
            </div>
            
            <!-- Info detallada -->
            <div class="ficha-detalles">
                <h1 class="ficha-nombre">${p.name}</h1>
                
                ${p.alternate_names && p.alternate_names.length > 0 ? 
                    `<p class="ficha-apodos">🪶 "${p.alternate_names.join(', ')}"</p>` : 
                    ''
                }
                
                <div class="ficha-stats">
                    <div class="stat">
                        <span class="stat-label">📅 Año de Nacimiento</span>
                        <span class="stat-value">${p.yearOfBirth || 'Desconocido'}</span>
                    </div>
                    
                    <div class="stat">
                        <span class="stat-label">🧬 Especie</span>
                        <span class="stat-value">${p.species || 'Desconocido'}</span>
                    </div>
                    
                    <div class="stat">
                        <span class="stat-label">⚧️ Género</span>
                        <span class="stat-value">${p.gender || 'Desconocido'}</span>
                    </div>
                    
                    ${p.actor ? `
                        <div class="stat">
                            <span class="stat-label">🎭 Actor/Actriz</span>
                            <span class="stat-value">${p.actor}</span>
                        </div>
                    ` : ''}
                    
                    ${p.dateOfBirth ? `
                        <div class="stat">
                            <span class="stat-label">🎂 Fecha de Nacimiento</span>
                            <span class="stat-value">${p.dateOfBirth}</span>
                        </div>
                    ` : ''}
                    
                    ${p.ancestry ? `
                        <div class="stat">
                            <span class="stat-label">🧙 Ascendencia</span>
                            <span class="stat-value">${p.ancestry}</span>
                        </div>
                    ` : ''}
                    
                    ${p.patronus ? `
                        <div class="stat">
                            <span class="stat-label">🦌 Patronus</span>
                            <span class="stat-value">${p.patronus}</span>
                        </div>
                    ` : ''}
                    
                    ${p.wand && (p.wand.wood || p.wand.core) ? `
                        <div class="stat">
                            <span class="stat-label">🪄 Varita</span>
                            <span class="stat-value">
                                ${p.wand.wood ? `${p.wand.wood}` : ''} 
                                ${p.wand.core ? `- ${p.wand.core}` : ''}
                                ${p.wand.length ? `(${p.wand.length}")` : ''}
                            </span>
                        </div>
                    ` : ''}
                    
                    <div class="stat">
                        <span class="stat-label">👤 Estado</span>
                        <span class="stat-value">${p.alive ? '✅ Vivo' : '💀 Fallecido'}</span>
                    </div>
                    
                    ${p.hogwartsStudent ? `
                        <div class="stat">
                            <span class="stat-label">🎓 Rol</span>
                            <span class="stat-value">Estudiante de Hogwarts</span>
                        </div>
                    ` : ''}
                    
                    ${p.hogwartsStaff ? `
                        <div class="stat">
                            <span class="stat-label">👨‍🏫 Rol</span>
                            <span class="stat-value">Personal de Hogwarts</span>
                        </div>
                    ` : ''}
                </div>
                
                <!-- Botones de navegación -->
                <div class="ficha-botones">
                    <button onclick="history.back()" class="btn-ficha btn-volver">← Volver</button>
                    <button onclick="window.location.href='/pages/index.html'" class="btn-ficha btn-casas">🏰 Casas</button>
                    <button onclick="window.location.href='/pages/norhouse.html'" class="btn-ficha btn-norhouse">👻 Sin Casa</button>
                </div>
            </div>
        </div>
    `;
}

function getCasaColor(casa) {
    const colores = {
        'Gryffindor': '#740001',
        'Slytherin': '#1a472a',
        'Ravenclaw': '#0e1a40',
        'Hufflepuff': '#ecb939'
    };
    return colores[casa] || '#2a2a2a';
}

function getCasaEmoji(casa) {
    const emojis = {
        'Gryffindor': '🦁',
        'Slytherin': '🐍',
        'Ravenclaw': '🦅',
        'Hufflepuff': '🦡'
    };
    return emojis[casa] || '👻';
}

export { pintarFicha };