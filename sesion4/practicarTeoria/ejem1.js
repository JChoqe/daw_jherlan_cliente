/* Ejercicio sencillito
Usando promesas vamos a llamar a la libreria de harry potter y la de dragon ball
- Vamos a pintar nuestro código de pintado con una promesa es decir dentro del then para dragon ball
- Lo mismo para harry potter
- Lo mismo con un promises.all, es decir una dentro de otra
- Y luego echemos una carrera a ver cual tarda menos
*/
function llamadaApi(url) {
    const rep = fetch(url);
    if (!rep.ok) { // Si el servidor responde con error (404, 500, etc.). Lanzamos un error con el código y mensaje
        throw new Error(`HTTP ${rep.status}: ${rep.statusText}`);
    }
    const data = rep.json();
    return data;
}
// Función que devuelve una promesa
const dbz = llamadaApi("https://dragonball-api.com/api/characters");
const hp = llamadaApi("https://hp-api.onrender.com/api/characters");

Promise.all([dbz, hp]).then(function (resultados) {
    for (let res of resultados) {
        console.log(res);
    }
});

Promise.race([dbz, hp]).then(function (resultado) {
    console.log(resultado);
});