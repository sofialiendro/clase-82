// // Objetos y arrays de objetos

// const estudiantes = [
//   {
//     edad: 17,
//     familiar: "Salamandra",
//     casa: "Hufflepuff",
//     nombreCompleto: {
//       nombre: "Ellis",
//       apellido: "Reeves",
//     },
//     hechizoPreferido: "Expecto Patronum",
//     materias: [
//       {
//         nombre: "Astronomía",
//         promedio: 1,
//       },
//       {
//         nombre: "Encantamientos",
//         promedio: 6,
//       },
//       {
//         nombre: "Defensa Contra las Artes Oscuras",
//         promedio: 2,
//       },
//       {
//         nombre: "Vuelo",
//         promedio: 0,
//       },
//       {
//         nombre: "Herbología",
//         promedio: 2,
//       },
//       {
//         nombre: "Historia de la Magia",
//         promedio: 2,
//       },
//       {
//         nombre: "Pociones",
//         promedio: 8,
//       },
//       {
//         nombre: "Transformaciones",
//         promedio: 1,
//       },
//     ],
//     amigues: [
//       {
//         nombre: "Richard Bean",
//         edad: 21,
//         casa: "Gryffindor",
//         hechizoPreferido: "Expelliarmus",
//         familiar: "Lechuza",
//       },
//       {
//         nombre: "Sosa Martinez",
//         edad: 19,
//         casa: "Gryffindor",
//         hechizoPreferido: "Petrificus Totalus",
//         familiar: "Salamandra",
//       },
//       {
//         nombre: "Kirk Joyner",
//         edad: 15,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Petrificus Totalus",
//         familiar: "Rata",
//       },
//       {
//         nombre: "Rodriquez Carey",
//         edad: 13,
//         casa: "Slytherin",
//         hechizoPreferido: "Accio",
//         familiar: "Salamandra",
//       },
//       {
//         nombre: "Leslie Humphrey",
//         edad: 19,
//         casa: "Ravenclaw",
//         hechizoPreferido: "Lumos",
//         familiar: "Lechuza",
//       },
//       {
//         nombre: "Ollie Merrill",
//         edad: 12,
//         casa: "Ravenclaw",
//         hechizoPreferido: "Wingardium Leviosa",
//         familiar: "Gato",
//       },
//       {
//         nombre: "Vicky Boyd",
//         edad: 16,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Lumos",
//         familiar: "Rata",
//       },
//       {
//         nombre: "Edwards Mann",
//         edad: 13,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Expecto Patronum",
//         familiar: "Sapo",
//       },
//     ],
//   },
//   {
//     edad: 15,
//     familiar: "Salamandra",
//     casa: "Gryffindor",
//     nombreCompleto: {
//       nombre: "Neal",
//       apellido: "Spence",
//     },
//     hechizoPreferido: "Lumos",
//     materias: [
//       {
//         nombre: "Astronomía",
//         promedio: 0,
//       },
//       {
//         nombre: "Encantamientos",
//         promedio: 8,
//       },
//       {
//         nombre: "Defensa Contra las Artes Oscuras",
//         promedio: 6,
//       },
//       {
//         nombre: "Vuelo",
//         promedio: 7,
//       },
//       {
//         nombre: "Herbología",
//         promedio: 1,
//       },
//       {
//         nombre: "Historia de la Magia",
//         promedio: 3,
//       },
//       {
//         nombre: "Pociones",
//         promedio: 10,
//       },
//       {
//         nombre: "Transformaciones",
//         promedio: 5,
//       },
//     ],
//     amigues: [
//       {
//         nombre: "Morgan Wilson",
//         edad: 13,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Expelliarmus",
//         familiar: "Rata",
//       },
//       {
//         nombre: "Traci Arnold",
//         edad: 19,
//         casa: "Ravenclaw",
//         hechizoPreferido: "Expelliarmus",
//         familiar: "Sapo",
//       },
//       {
//         nombre: "Pennington Rodriguez",
//         edad: 17,
//         casa: "Slytherin",
//         hechizoPreferido: "Expecto Patronum",
//         familiar: "Sapo",
//       },
//       {
//         nombre: "Carrillo Hyde",
//         edad: 15,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Expelliarmus",
//         familiar: "Rata",
//       },
//       {
//         nombre: "Norton Foreman",
//         edad: 14,
//         casa: "Slytherin",
//         hechizoPreferido: "Petrificus Totalus",
//         familiar: "Sapo",
//       },
//       {
//         nombre: "Addie Roach",
//         edad: 21,
//         casa: "Hufflepuff",
//         hechizoPreferido: "Petrificus Totalus",
//         familiar: "Lechuza",
//       },
//     ],
//   },
// ]

// // console.log('todo el array', estudiantes)
// // console.log('primer elemento del array', estudiantes[0])
// // console.log('edad del primer elemento del array', estudiantes[0].edad)
// console.log('array amigues del primer elemento del array', estudiantes[0].amigues)
// // console.log('primer elemento del array amigues del primer elemento del array', estudiantes[0].amigues[0])
// // console.log('propiedad nombre del primer elemento del array amigues del primer elemento del array', estudiantes[0].amigues[0].nombre)
// // console.log('objeto nombreCompleto del primer elemento del array', estudiantes[0].nombreCompleto)
// // console.log('propiedad nombre del objeto nombreCompleto del primer elemento del array', estudiantes[0].nombreCompleto.nombre)

// map       // un array de la misma longitud del array original // modificar todo el array original
// filter     // un array de menor longitud al original // cuando quiero quedarme con algunos elementos del array original
// some      // boolean // cuando quiero saber si algun elemento del array cumplr una condicion
// every      // boolean // cuando quiero saber si todos los elementos del array original cumplen una condicion
// reduce    // lo que sea // usos varios - cuando quiero quedarme con un solo dato a partir del array
// forEach  // no retorna nada // modificar el array original o recorrer una NodeList de HTML
// find     // un elemento del array // quedarme con el primer elemeto que cumpla cierta condicion

// const resultadoDelMap = estudiantes.map((estudiante, indice, array) => {
//   // lo que retorne esta funcion, se agregara al nuevo array
//   return ({
//     descripcion: `${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido} - alumno de la Casa ${estudiante.casa}`,
//     nombre: estudiante.nombreCompleto.nombre,
//     apellido: estudiante.nombreCompleto.apellido
//   })
// })

// console.log(resultadoDelMap)

// recorrer mis estudiantes y por cada estudiante retornar un array con el nombre de cada uno de sus amigos

// const amigues = estudiantes.map(estudiante => {
//   return estudiante.amigues.filter(amigue => {
//     return amigue.edad <= 15
//   })
// })

// console.log(amigues)

// Si necesito manipular los datos de un array adentro de un array, voy a necesitar utilizar un metodo adentro de otro metodo
// (filtrar amigues dentro de estudiantes: un filter adentro de un map)

// APIs

// GET

const crearTarjeta = data => {
    const respuesta = document.querySelector('.respuesta');
  
    respuesta.innerHTML = `
    <img src="${data.image}">
    <p>${data.answer}</p>
    `;
  };
  
  const llamarApi = force => {
    let forceParam = '';
  
    if (force) {
      forceParam = `?force=${force}`;
    } 
  
  
    fetch(`https://yesno.wtf/api${forceParam}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        crearTarjeta(data);
      });
  };
  
  const botonDeNuevo = document.querySelector('#pregunta');
  const botonNo = document.querySelector('#no');
  const botonSi = document.querySelector('#si');
  const botonTalVez = document.querySelector('#talvez');
  
  botonDeNuevo.onclick = () => {
    llamarApi();
  };
  
  botonNo.onclick = () => {
    llamarApi('no');
  };
  
  botonSi.onclick = () => {
    llamarApi('yes');
  };
  
  botonTalVez.onclick = () => {
    llamarApi('maybe');
  };
  
  llamarApi();