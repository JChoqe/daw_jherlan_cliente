//Hago el fetch, recuerdo que el profe tenía una funcion para hacerlo solo...
async function llamadaAPI(url) {
    //LLAMO A LA LLAMADA A LA API PARA QUE ME DEVUELVA EL CUERPO
    let cuerpo_respuesta = await fetch(url);
    //LLAMO A LOS DATOS DEL JSON
    let datos = await cuerpo_respuesta.json();
    return datos;
}
//Una vez tengo los datos los meto en una variable
async function datosStarWars() {
    const url = "https://swapi.dev/api/people";
    let data = await llamadaAPI(url);
    console.log("data",data);
    let oResult = data.results;
    for (const personaje of oResult) {
        //Recorro los datos con un for y extraigo el valor de la propiedad name en una variable
        let clave_personaje = personaje.name;
        let sObjeto = JSON.stringify(personaje);
        //Seteo con la clave en el local storage el objeto parseado a string
        localStorage.setItem(clave_personaje, sObjeto);
    }
    console.log("LocalStorage", Object.keys(personajes).length);
}
datosStarWars();