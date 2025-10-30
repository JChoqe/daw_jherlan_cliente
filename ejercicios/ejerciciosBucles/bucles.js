// ejercicios/ejerciciosBucles/bucles.js
import { Meses, diasSemana, diaDeLaSemana } from '../../data/datos.js';

console.log(Meses);
console.log(diasSemana);
console.log(diaDeLaSemana('2025-10-30'));


const form = document.getElementById('formAnio');
const resultado = document.getElementById('resultado');
const anio = document.getElementById('anio');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const anio = document.getElementById('anio').value;
  mostrarAnio(anio);
});

function mostrarAnio(anio) {
  resultado.textContent = `Año: ${anio}`; //Inprimir el año en html
  console.log("Año recibido en bucles.js:", anio);
}