let clientes ={
  "clientes": [
    {
      "id": 1,
      "nombre": "Ana López",
      "email": "ana.lopez@example.com",
      "telefono": "555-1234"
    },
    {
      "id": 2,
      "nombre": "Carlos Pérez",
      "email": "carlos.perez@example.com",
      "telefono": "555-5678"
    },
    {
      "id": 3,
      "nombre": "María Torres",
      "email": "maria.torres@example.com",
      "telefono": "555-9012"
    }
  ]
};

// //Seteamos el valor
// localStorage.setItem('clave1','valor1');

// //Extraemmos el valor de clave1
// let valor=localStorage.getItem('clave1');

// alert (valor);

// //Eliminamos el valor de clave1
// localStorage.removeItem('clave1');

// //Seteamos el valor2
// localStorage.setItem('clave2','valor2');
// //Extraemmos el valor de clave2
// let valor2=localStorage.getItem('clave2');
// alert (valor2);

//Limpiamos el local
// localStorage.clear()
// let valor2Borrado=localStorage.getItem('clave2');

// alert (valor2Borrado);

//Ejemplo de como guardar json en storage
//Convierto el json en texto para almacenar en el localstorage
let sClientes=JSON.stringify(clientes);
localStorage.setItem('clientes',sClientes);
console.log("sClientes",sClientes);


let nClientes=localStorage.getItem('clientes');
let oClientes=JSON.parse(nClientes);
console.log("oClientes",oClientes);

for(let cli of oClientes.clientes){
    cli.nombre="Jorge Moreno";
}
console.log("oClientes2",oClientes);

localStorage.setItem('clientes',JSON.stringify(oClientes));

nClientes=localStorage.getItem('clientes');
for(let cli of oClientes.clientes){
    alert(cli.nombre);
}


