/* Aquí irán dos o tres funciones reutilizables: 
una que cree el header completo, otra que cree el footer y (muy importante) una función limpiarApp()
que haga document.getElementById('app').innerHTML = ''. Así todas las páginas tendrán header y footer idénticos sin repetir código.
*/

function pintarHeader() {
    const header = document.createElement('header');
    header.classList.add('main-header');

    const logo = document.createElement('img');
    logo.src = '/sesion3/rubrica3RyM/assets/img/rickymorty.webp';
    logo.alt = 'Rick y Morty';
    logo.classList.add('logo');

    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.textContent = 'Rick aprobó esta web… yo espero que el profe también';

    const nav = document.createElement('nav');
    nav.classList.add('main-nav');

    const linkInicio = document.createElement('a');
    linkInicio.href = '/sesion3/rubrica3RyM';
    linkInicio.textContent = 'Listado';

    const linkFicha = document.createElement('a');
    linkFicha.href = '/sesion3/rubrica3RyM/articulo';
    linkFicha.textContent = 'Ficha';

    nav.append(linkInicio, linkFicha);
    header.append(logo, title, nav); 

    return header;
}

function pintarFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('main-footer');
    footer.innerHTML = '<p>© 2025 Rick y Morty – Jherlan Choque</p>';
    return footer;
}

function limpiarApp() {
    const app = document.getElementById('app');
    if (app) app.innerHTML = '';
}

// Export agrupado (tu estilo preferido)
export { pintarHeader, pintarFooter, limpiarApp };