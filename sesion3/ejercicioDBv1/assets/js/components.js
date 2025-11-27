/* Aquí irán dos o tres funciones reutilizables: 
una que cree el header completo, otra que cree el footer y (muy importante) una función limpiarApp()
que haga document.getElementById('app').innerHTML = ''. Así todas las páginas tendrán header y footer idénticos sin repetir código.
*/

function pintarHeader() {
    const header = document.createElement("header");
    const img = document.createElement("img");
    img.src = "img/dbz.jpg";
    img.alt = "Dragon Ball Z";
    img.classList.add("logo");
    header.appendChild(img);
    const nav = document.createElement("nav");
    const linkIndex = document.createElement("a");
    linkIndex.href = "/sesion3/ejercicioDBv1";
    linkIndex.textContent = "Inicio";
    const linkListado = document.createElement("a");
    linkListado.href = "/sesion3/ejercicioDBv1/listado";
    linkListado.textContent = "Listado";
    const linkEjemplo = document.createElement("a");
    linkEjemplo.href = "/sesion3/ejercicioDBv1/articulo";
    linkEjemplo.textContent = "Ficha ";
    nav.appendChild(linkIndex);
    nav.appendChild(linkListado);
    nav.appendChild(linkEjemplo);
    header.appendChild(nav);
    return header;
}
function pintarFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>© 2025 Dragon Ball Z - Jherlan Choque</p>";
    return footer;
}

function limpiarApp() {
    const app = document.getElementById('app');
    if (app) app.innerHTML = '';
}
export { pintarHeader, pintarFooter, limpiarApp };