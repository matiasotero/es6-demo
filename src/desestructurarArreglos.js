// Destrutucturación en es6: transformar cada uno de los
// elementos del arreglo (array) a variables para poder acceder 
// a estos mismos de una manera más fácil mediante el código

const persona = ['Matias', 28, 'Argentina', 'Software Developer'];

const [nombre, edad, pais, profesion = 'No especificada'] = persona;

// hay dos maneras de desestructurar el array:
// la primera es haciendolo desde el argumento de la función
// const mostrarInfo = ([nombre, edad, pais = 'No especificada'] = persona) => console.log(nombre, edad, pais);

// la segunda manera es desestructurando el array desde el código
// de la función
const mostrarInfo = ([nombre, pais]) => console.log(nombre, pais);

mostrarInfo(persona);