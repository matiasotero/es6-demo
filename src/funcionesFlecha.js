const nombres = ["Diogenes", "Sebastian", "Guido"];

//primera forma
// const numeros_caraceteres = nombres.map((nombre) => {
//     // console.log(`${nombre} tiene ${nombre.length} caracteres.`);
//     return `${nombre} tiene ${nombre.length} caracteres`;
// });

//forma corta (en caso de ser una solo línea y un solo parámetro)
// en este caso se puede omitir agregar la palabra reservada return
// para mayor optimización del código
const numeros_caraceteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`);

console.log(numeros_caraceteres);

// funciones tipo flecha (estructura)
// (parametro) => {
//     // código a ejecutar
//     return
// }