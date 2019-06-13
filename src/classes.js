// las funciones de javascript se pasan a llamar métodos cuando 
// se declaran dentro de una clase

class Usuario{
    constructor(nombre, edad, correo = 'No declarado'){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }

    mostrarSaludo(saludo){
        return saludo;
    }

    mostrarInfo(){
        return `
        <strong>Nombre:</strong> ${this.nombre} <br />
        <strong>Edad:</strong> ${this.edad} <br />
        <strong>Correo</strong>: ${this.correo} <br />
        <hr />
        `;
    }
}

// la palabra reservada para heredar los atributos y métodos
// de otra clase
class Estudiante extends Usuario{
    constructor(nombre,edad, correo, carrera){
        // el método super ejecuta el constructor de la clase heredada
        // además en este caso se le debe pasar los parámetros
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `
        <strong>Nombre:</strong> ${this.nombre} <br />
        <strong>Edad:</strong> ${this.edad} <br />
        <strong>Correo</strong>: ${this.correo} <br />
        <strong>Carrera</strong>: ${this.carrera} <br />
        <hr />
        `;
    }
}

const matias = new Estudiante('Matías Leandro', 28, 'correo@correo.com', 'Técnico Superior en Programación');
const diogenes = new Usuario('Diogenes David', 30, 'Sofware Developer')

// document.write(`Nombre: ${matias.nombre} Profesión: ${matias.edad}`);

// document.write(`Nombre: ${diogenes.nombre} Profesión: ${diogenes.edad}`);

// document.write(matias.mostrarSaludo('Esto es un saludo'));

document.write(matias.mostrarInfo())