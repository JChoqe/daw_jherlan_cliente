// Importa Express, framework de Node.js
import express from 'express';
// Importa path, modulo nativo de Node.js que sirve para trabajar con rutas de archivos y carpetas
import path from 'path';
// Importaciones sesion2
import * as sesion2 from './sesion2/sesion2.js';
import { pintar } from './sesion2/EjercicioMeses/funcionesNode.js';
// Importa fileURLToPath, funcion que convierte un URL de modulo en un ruta de archivo normal
import { fileURLToPath } from 'url';
// Crea una instancia de la aplicacion Express
// App es mi servidor: sobre el se define rutas, middlewares y configuracion
const app = express();
// Convierte URL en un ruta de archivo tradicional de Node.js
const __filename = fileURLToPath(import.meta.url);
// Util para construir rutas relativas
const __dirname = path.dirname(__filename);

// Dice a Express que sirve archivos estaticos desde la carpeta indicada
app.use(express.static(path.join(__dirname, '')));
// Indice a Express que pueda parsear datos de formulario HTML enviados por POST y convertirlo en req.body
app.use(express.urlencoded({ extended: true }));

// Cuando laguien visite la ruta raiz envie el texto.
// app.get('/', (req, res) => {
//   res.send('Bienvenido al entorno a mi Node.js');
// });
app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'index.html'));
});

// ++ SESION 2
app.get('/variables', (req, res) => {
  const resultado = sesion2.variables();
  res.send(`La variable pinta ${resultado}`);
});
app.get('/sesion2/ejercicioMeses', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion2/ejercicioMeses', 'ejercicioMeses.html'));
});
app.get('/sesion2/pintarMeses', (req, res) => {
  const anio = req.query.anio;
  const resultado = pintar(anio);
  res.send(resultado);
});
app.post('/sesion2/pintarMesesPost', (req, res) => {
  const anio = req.body.anio;
  const resultado = pintar(anio);
  res.send(resultado);
});
app.get('/sesion2/ejercicioMesesPost', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion2/ejercicioMeses', 'ejercicioMesesPost.html'));
});
app.get('/sesion2/ejercicioPeliculas', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion2/ejercicioPeliculas', 'ejercicioPeliculas.html'));
});
app.get('/sesion2/ejercicioStarWars', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion2/ejercicioStarWars', 'ejercicioStarWars.html'));
});
app.get('/sesion2/EjercicioComics', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion2/EjercicioComics', 'EjercicioComics.html'));
});
// -- SESION 2
//++ SESION3
app.get('/sesion3/Ejemplo1', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3', 'ejemplo1.html'));
});
app.get('/sesion3/Ejemplo2', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3', 'ejemplo2.html'));
});
app.get('/sesion3/ejemploComponent', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejemploComponent', 'index.html'));
});

app.get('/sesion3/ejercicioPokemon', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioPokemon', 'index.html'));
});
app.get('/sesion3/ejercicioPokemon2', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioPokemon2', 'index2.html'));
});
app.get('/sesion3/Ejemplo4', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3', 'ejemplo4.html'));
});
app.get('/sesion3/Ejemplo5', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3', 'ejemplo5.html'));
});
app.get('/sesion3/ejercicioStarwars', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioStarwars', 'index.html'));
});
// ejericicioFinal
app.get('/sesion3/ejercicioFinal', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioFinal', 'index.html'));
});
app.get('/sesion3/ejercicioFinal/articulo', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioFinal', 'articulo.html'));
});
app.get('/sesion3/ejercicioFinal/listado', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioFinal', 'listado.html'));
});
// ejercicioDBv1
app.get('/sesion3/ejercicioDBv1', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioDBv1', 'index.html'));
});
app.get('/sesion3/ejercicioDBv1/listado', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioDBv1', 'listado.html'));
});
app.get('/sesion3/ejercicioDBv1/articulo', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/ejercicioDBv1', 'articulo.html'));
});
// rubrica3RyM
app.get('/sesion3/rubrica3RyM', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/rubrica3RyM', 'index.html'));
});
app.get('/sesion3/rubrica3RyM/articulo', (req, res) => {
  res.sendFile(path.join(__dirname, 'sesion3/rubrica3RyM', 'articulo.html'));
});
//-- SESION3
// Puerto por el que escucha
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});