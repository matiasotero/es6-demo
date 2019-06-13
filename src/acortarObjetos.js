// esta función devuelve un objeto

const crearObjeto = (nombre, edad) =>{
    // anteriormente se devolvía de la siguiente forma
    // return {
    //     nombre: nombre,
    //     edad: edad
    // }

    // en es6 se puede reducir de la siguiente forma
    // return {
    //     nombre,
    //     edad
    // }
    // los atributos del objeto deben coincidir con los argumentos de
    // la función

    // en caso de los métodos se hacen de la siguiente manera
    // return {
    //     nombre,
    //     edad,
    //     mostrarInfo : () => `${nombre} tiene ${edad} de edad.`
    //     }
    
    // este codigo se puede factorizar más de la siguiente manera
    return {
        nombre,
        edad,
        mostrarInfo(){ return `${nombre} tiene ${edad} de edad.` }
    }

}

    // en acaso de invocarlo en una misma línea el método mostrarInfo,
    // se lo hace de la siguiente manera    
    console.log(crearObjeto('Matías', 28).mostrarInfo());


