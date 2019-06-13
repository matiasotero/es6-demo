// la destructuración con objetos a diferencia de los arreglos,
// no es necesario respetar los índices para acceder a los datos de las
// variables; simplemente se acceden colocando el nombre de los atributos.

const usuario = {
    nombre:'Matias',
    correo:'correo@correo.com',
    edad:28,
    pais:'Argentina',
    profesion:'Sofware Developer'
}

const {nombre, profesion} = usuario;

const mostrarInfo = ({nombre, profesion, pais}) => console.log(`${nombre} es ${profesion}. Nació en ${pais}`);

mostrarInfo(usuario);