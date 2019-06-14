// Los parámetros Spread en cambio se utiliza para desestructur
// array y objetos

const mostrarDatos = (a, b , c) => console.log(a, b, c);

const arrayDatos = ['Matías', 28, 'correo@correo.com', 'México'];

mostrarDatos(...arrayDatos);