export let Meses = [
    {
        nombre: 'Enero',
        dias: 31
    },
    {
        nombre: 'Febrero',
        dias: 29
    },
    {
        nombre: 'Marzo',
        dias: 31
    },
    {
        nombre: 'Abril',
        dias: 30
    },
    {
        nombre: 'Mayo',
        dias: 31
    },
    {
        nombre: 'Junio',
        dias: 30
    },
    {
        nombre: 'Agosto',
        dias: 31
    },
    {
        nombre: 'Septiembre',
        dias: 30
    },
    {
        nombre: 'Octubre',
        dias: 31
    },
    {
        nombre: 'Noviembre',
        dias: 30
    },
    {
        nombre: 'Diciembre',
        dias: 31
    }
];

// Array con los días de la semana en castellano
export const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
];

export function diaDeLaSemana(fecha) {
    // Obtener la fecha actual 'yyyy-MM-dd'
    const fechaActual = new Date(fecha);

    // Obtener el índice del día de la semana (0 es domingo, 6 es sábado)
    const diaSemanaIndex = fechaActual.getDay();

    // Obtener el nombre del día de la semana
    const diaSemanaTexto = diasSemana[diaSemanaIndex];
    return diaSemanaTexto;
}


//++ ejercicio arrays
const bestMovies = [
    { title: "Cadena perpetua", director: "Frank Darabont", actor: "Tim Robbins" },
    { title: "El Padrino", director: "Francis Ford Coppola", actor: "Marlon Brando" },
    { title: "El caballero oscuro", director: "Christopher Nolan", actor: "Christian Bale" },
    { title: "El Padrino: Parte II", director: "Francis Ford Coppola", actor: "Al Pacino" },
    { title: "12 hombres sin piedad", director: "Sidney Lumet", actor: "Henry Fonda" },
    { title: "La lista de Schindler", director: "Steven Spielberg", actor: "Liam Neeson" },
    { title: "El señor de los anillos: El retorno del rey", director: "Peter Jackson", actor: "Elijah Wood" },
    { title: "Pulp Fiction", director: "Quentin Tarantino", actor: "John Travolta" },
    { title: "El bueno, el feo y el malo", director: "Sergio Leone", actor: "Clint Eastwood" },
    { title: "Forrest Gump", director: "Robert Zemeckis", actor: "Tom Hanks" },
    { title: "El club de la lucha", director: "David Fincher", actor: "Brad Pitt" },
    { title: "Origen", director: "Christopher Nolan", actor: "Leonardo DiCaprio" },
    { title: "El señor de los anillos: La comunidad del anillo", director: "Peter Jackson", actor: "Elijah Wood" },
    { title: "Star Wars: Episodio V - El Imperio contraataca", director: "Irvin Kershner", actor: "Mark Hamill" },
    { title: "Matrix", director: "Lana Wachowski, Lilly Wachowski", actor: "Keanu Reeves" },
    { title: "Uno de los nuestros", director: "Martin Scorsese", actor: "Ray Liotta" },
    { title: "Psicosis", director: "Alfred Hitchcock", actor: "Anthony Perkins" },
    { title: "Los siete samuráis", director: "Akira Kurosawa", actor: "Toshirô Mifune" },
    { title: "El silencio de los inocentes", director: "Jonathan Demme", actor: "Jodie Foster" },
    { title: "Salvar al soldado Ryan", director: "Steven Spielberg", actor: "Tom Hanks" }
  ];
  

  const movieTitles = [
    "Cadena perpetua",
    "El Padrino",
    "El caballero oscuro",
    "El Padrino: Parte II",
    "12 hombres sin piedad",
    "La lista de Schindler",
    "El señor de los anillos: El retorno del rey",
    "Pulp Fiction",
    "El bueno, el feo y el malo",
    "Forrest Gump",
    "El club de la lucha",
    "Origen",
    "El señor de los anillos: La comunidad del anillo",
    "Star Wars: Episodio V - El Imperio contraataca",
    "Matrix",
    "Uno de los nuestros",
    "Psicosis",
    "Los siete samuráis",
    "El silencio de los inocentes",
    "Salvar al soldado Ryan"
  ];
  
  

  //-- ejercicio arrays
  
  //++ starwars
// {
//     "count": 36,
//     "next": "https://swapi.dev/api/starships/?page=3",
//     "previous": "https://swapi.dev/api/starships/?page=1",
//     "results": [
//         {
//             "name": "Slave 1",
//             "model": "Firespray-31-class patrol and attack",
//             "manufacturer": "Kuat Systems Engineering",
//             "cost_in_credits": "unknown",
//             "length": "21.5",
//             "max_atmosphering_speed": "1000",
//             "crew": "1",
//             "passengers": "6",
//             "cargo_capacity": "70000",
//             "consumables": "1 month",
//             "hyperdrive_rating": "3.0",
//             "MGLT": "70",
//             "starship_class": "Patrol craft",
//             "pilots": [
//                 "https://swapi.dev/api/people/22/"
//             ],
//             "films": [
//                 "https://swapi.dev/api/films/2/",
//                 "https://swapi.dev/api/films/5/"
//             ],
//             "created": "2014-12-15T13:00:56.332000Z",
//             "edited": "2014-12-20T21:23:49.897000Z",
//             "url": "https://swapi.dev/api/starships/21/"
//         },
//         {
//             "name": "Imperial shuttle",
//             "model": "Lambda-class T-4a shuttle",
//             "manufacturer": "Sienar Fleet Systems",
//             "cost_in_credits": "240000",
//             "length": "20",
//             "max_atmosphering_speed": "850",
//             "crew": "6",
//             "passengers": "20",
//             "cargo_capacity": "80000",
//             "consumables": "2 months",
//             "hyperdrive_rating": "1.0",
//             "MGLT": "50",
//             "starship_class": "Armed government transport",
//             "pilots": [
//                 "https://swapi.dev/api/people/1/",
//                 "https://swapi.dev/api/people/13/",
//                 "https://swapi.dev/api/people/14/"
//             ],
//             "films": [
//                 "https://swapi.dev/api/films/2/",
//                 "https://swapi.dev/api/films/3/"
//             ],
//             "created": "2014-12-15T13:04:47.235000Z",
//             "edited": "2014-12-20T21:23:49.900000Z",
//             "url": "https://swapi.dev/api/starships/22/"
//         },
//         {
//             "name": "EF76 Nebulon-B escort frigate",
//             "model": "EF76 Nebulon-B escort frigate",
//             "manufacturer": "Kuat Drive Yards",
//             "cost_in_credits": "8500000",
//             "length": "300",
//             "max_atmosphering_speed": "800",
//             "crew": "854",
//             "passengers": "75",
//             "cargo_capacity": "6000000",
//             "consumables": "2 years",
//             "hyperdrive_rating": "2.0",
//             "MGLT": "40",
//             "starship_class": "Escort ship",
//             "pilots": [],
//             "films": [
//                 "https://swapi.dev/api/films/2/",
//                 "https://swapi.dev/api/films/3/"
//             ],
//             "created": "2014-12-15T13:06:30.813000Z",
//             "edited": "2014-12-20T21:23:49.902000Z",
//             "url": "https://swapi.dev/api/starships/23/"
//         }
//         // ...continúa con los demás objetos de la misma forma
//     ]
// }



//-- starwars