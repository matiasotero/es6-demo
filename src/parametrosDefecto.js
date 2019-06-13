function registrarUsuario(nombre, pais = 'No definido', correo, telefono = 'No especificado'){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Matías', undefined, 'correo@correo.com', 12323432))