async function llamadaAPI(url) {
    //LLAMO A LA LLAMADA A LA API PARA QUE ME DEVUELVA EL CUERPO
    let cuerpo_respuesta = await fetch(url);
    //LLAMO A LOS DATOS DEL JSON
    let datos = await cuerpo_respuesta.json();
    return datos;
}

async function datosPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=100";

    //LLAMO A MI FUNCION PARA QUE ME EXTRAIGA LOS DATOS
    let data = await llamadaAPI(url);
    console.log("data", data);
    let oResult = data.results;
    //PASO 2 RECORREMOS EL ARRAY DE RESULTADOS CON UN FOR OF
    //Y ME CREO EL DIV PRINCIPAL DONDE METER LAS IMAGENES
    let divPrincipal = document.createElement('div');
    divPrincipal.id = 'divPrincipal';
    divPrincipal.classList.add('ancho500');
    for (let res of oResult) {
         let divPokemon = document.createElement('div');
         divPokemon.classList.add('pokemon');
        let nombrePokemon = res.name;
        let urlPokemon = res.url;
        //PASO 3 LLAMO A LA URL DEL POKEMON EN CONCRETO PARA SACAR SUS DATOS
        let dataPok = await llamadaAPI(urlPokemon);
        console.log("dataPok", dataPok);
        let urlimagen = dataPok.sprites.front_default;
        if (urlimagen != null && urlimagen != undefined) {
            //PASO 4 TENIENDO EL LA URL DE LA IMAGEN CREAMOS EL DIV Y LA IMAGEN QUE LO CONTIENE
            let divImg = document.createElement('div');
            divImg.classList.add('ancho50');
            let img = document.createElement('img');
            img.src = urlimagen;
            img.alt = nombrePokemon;
            img.title = nombrePokemon;
            //Añado la funcion onclick a la imagen
            img.onclick = function () {
                alert(nombrePokemon);
            };
            //Inserto como hijo la imagen al div
            divImg.appendChild(img);

            let divTitle = document.createElement('div');

            divTitle.innerText=nombrePokemon;
            divTitle.classList.add('nombre');

            //Inserto como hijo al div principal
            divPokemon.appendChild(divImg);
            divPokemon.appendChild(divTitle);
        }
        divPrincipal.appendChild(divPokemon);
    }

    //UNA VEZ TERMINADO EL BUCLE AÑADO MI VARIABLE CON LOS DATOS
    document.body.appendChild(divPrincipal);

}
datosPokemon();