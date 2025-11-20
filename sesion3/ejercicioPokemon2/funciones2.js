async function llamadaAPI(url) {
  //LLAMO A LA LLAMADA A LA API PARA QUE ME DEVUELVA EL CUERPO
  let cuerpo_respuesta = await fetch(url);
  //LLAMO A LOS DATOS DEL JSON
  let datos = await cuerpo_respuesta.json();
  return datos;
}

function sacarImagen(url) {
  console.log("urlImagen", url);
  return llamadaAPI(url).then(img => {
    console.log("img", img);
    let urlimagen = img.sprites.front_default;
    if (urlimagen == null || urlimagen == undefined) {
      urlimagen = '';
    }
    console.log("urlimagen", urlimagen);
    return urlimagen;
  });
}
class MiTabla extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = [];
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  get data() {
    return this._data;
  }

  connectedCallback() {
    // Datos iniciales
    this.data = [];
  }

  async render() {
    // Esperar todas las imágenes antes de crear el HTML
    if (!this.shadowRoot) return;
    const data = this._data || [];
    const imagenes = await Promise.all(data.map(row => sacarImagen(row.url)));
    if (!this.shadowRoot) return;
    // Crear HTML con URLs ya resueltas
    const contenido = data.map((row, i) => `
      <div class="pokemon">
        <div class="ancho50">
          <img src="${imagenes[i]}" alt="${row.name}" title="${row.name}">
        </div>
        <div class="nombre">${row.name}</div>
      </div>
    `).join('');

    this.shadowRoot.innerHTML = `
      <div id="divPrincipal" class="ancho500">
        ${contenido}
      </div>
    `;
  }
}

customElements.define('mi-tabla', MiTabla);

async function datosPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=100";
  let data = await llamadaAPI(url);
  console.log("data", data);
  const tabla = document.querySelector('mi-tabla');
  tabla.data = data.results;
}




// async function datosPokemon() {
//     const url = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=100";

//     //LLAMO A MI FUNCION PARA QUE ME EXTRAIGA LOS DATOS
//     let data = await llamadaAPI(url);
//     console.log("data", data);
//     let oResult = data.results;
//     //PASO 2 RECORREMOS EL ARRAY DE RESULTADOS CON UN FOR OF
//     //Y ME CREO EL DIV PRINCIPAL DONDE METER LAS IMAGENES
//     let divPrincipal = document.createElement('div');
//     divPrincipal.id = 'divPrincipal';
//     divPrincipal.classList.add('ancho500');
//     for (let res of oResult) {
//          let divPokemon = document.createElement('div');
//          divPokemon.classList.add('pokemon');
//         let nombrePokemon = res.name;
//         let urlPokemon = res.url;
//         //PASO 3 LLAMO A LA URL DEL POKEMON EN CONCRETO PARA SACAR SUS DATOS
//         let dataPok = await llamadaAPI(urlPokemon);
//         console.log("dataPok", dataPok);
//         let urlimagen = dataPok.sprites.front_default;
//         if (urlimagen != null && urlimagen != undefined) {
//             //PASO 4 TENIENDO EL LA URL DE LA IMAGEN CREAMOS EL DIV Y LA IMAGEN QUE LO CONTIENE
//             let divImg = document.createElement('div');
//             divImg.classList.add('ancho50');
//             let img = document.createElement('img');
//             img.src = urlimagen;
//             img.alt = nombrePokemon;
//             img.title = nombrePokemon;
//             //Añado la funcion onclick a la imagen
//             img.onclick = function () {
//                 alert(nombrePokemon);
//             };
//             //Inserto como hijo la imagen al div
//             divImg.appendChild(img);

//             let divTitle = document.createElement('div');

//             divTitle.innerText=nombrePokemon;
//             divTitle.classList.add('nombre');

//             //Inserto como hijo al div principal
//             divPokemon.appendChild(divImg);
//             divPokemon.appendChild(divTitle);
//         }
//         divPrincipal.appendChild(divPokemon);
//     }

//     //UNA VEZ TERMINADO EL BUCLE AÑADO MI VARIABLE CON LOS DATOS
//     document.body.appendChild(divPrincipal);

// }
datosPokemon();