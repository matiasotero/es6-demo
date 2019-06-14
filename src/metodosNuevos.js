const texto = 'Hola mundo';

console.log(texto, ' empieza con la letra a: ', texto.startsWith('a'));

console.log(texto, ' termina con o', texto.toLocaleLowerCase().endsWith('o'));
// aclaración: los métodos startsWith y endsWith NO son key sensitive (indentifica si
// los carateres están en mayúsculas o minúsculas)

const arrayPersonas = ['Alejandro', 'Matías', 'José', 'Guillermo'];
console.log('Alejandro se encuentra en el array: ', arrayPersonas.includes('Alejandro'));

// el método find devuelve el primer elemento encontrado en el array
// que cumpla la condición dada
const persona = arrayPersonas.find(persona => persona.length < 5);

console.log(persona);

// el método findIndex devuelve el primer índice que cumple con la
// condición dada. En caso de no encontrar ningún elemento, devuelve
// -1.
const index = arrayPersonas.findIndex((persona) => {
    return persona === 'Matías';
});

console.log('Matías se encuentra en el índice: ', index);