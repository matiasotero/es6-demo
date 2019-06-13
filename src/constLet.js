// Característica #1
// Podemos re-declarar variables con var
// Esto puede causar probleemas en donde re-declaramos sin darnos cuenta.

// let nombre = 'Papaaa';
// let nombre = 'Mugricio';

// const pais = 'Argentina';
// const pais = 'Brasil';

// console.log('Hola ' +  pais);

// Característica #2
// let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro
// de una function.

// function saludo(){
//     let nombre = 'Matias';

//     return 'Hola ' + nombre;
// }

// console.log(saludo());

// Característica #3
// let y const tienen un scope de tipo bloque

// let edad = 18;

// if(edad >= 18){
//     const esAdulto = true;
// }

// console.log(esAdulto);

// Característica #4
// const lo usamos cuando queremos que el valor de una variable nunca cambie.

// const nombre = 'Matías';
// nombre = 'José';

// console.log(nombre);

// en el caso de los arreglos (arrays), const no evita el cambio de los valores, pero sí 
// el tipo de dato

const colores = ["rojo","verde"];
// colores = "amarillo";

colores.push("naranja");

console.log(colores);