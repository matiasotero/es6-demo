// Los parámetros REST dan la posibilidad de agrupar en un sólo
// objeto (un array en este caso) las N cantidad de parámetros recibidos
// en la función, concatenando solo los ... al principio del argumento.

const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('Matías', 28, 'correo@correo.com');