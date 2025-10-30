// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta estática
app.use(express.static(path.join(__dirname, '')));

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de desarrollo de miNuevoProyecto 🚀');
});
// HTML de ejerciciosBucles
app.get('/ejercicios/ejerciciosBucles', (req, res) => {
  res.sendFile(path.join(__dirname, 'ejercicios', 'ejerciciosBucles', 'index.html'));
});

// Puedes añadir más endpoints según necesites
// Por ejemplo, si luego agregas otros ejercicios
// app.get('/ejercicios/otroEjercicio', (req, res) => { ... });

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});