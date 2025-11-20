//Zonas de declaracion
async function llamadaAPI(url) {
    //LLAMO A LA LLAMADA A LA API PARA QUE ME DEVUELVA EL CUERPO
    let cuerpo_respuesta = await fetch(url);
    //LLAMO A LOS DATOS DEL JSON
    let datos = await cuerpo_respuesta.json();
    return datos;
}
const url = "https://swapi.dev/api/people";
async function pintarLocalStorage() {
    //LImpiio mi local storage
    localStorage.clear();
    //Hago el fetch, recuerdo que el profe tenía una funcion para hacerlo solo...
    //Una vez tengo los datos los meto en una variable
    let oSw = await llamadaAPI(url);


    for (let sw of oSw.results) {
        //Recorro los datos con un for y extraigo el valor de la propiedad name en una variable
        let clave_personaje=sw.name;

        //Seteo con la clave en el local storage el objeto parseado a string2
        //Parseo a cadena
        let sObjeto=JSON.stringify(sw);
        localStorage.setItem(clave_personaje,sObjeto);
    }
    
}

pintarLocalStorage();
