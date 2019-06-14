// esta es la estructura básica de una promesa.

const promesa = new Promise((resolve, reject) => {
    // éste metodo rechaza la promesa y automáticamente
    // se ejecuta la función catch de la misma
    // reject();

    // éste metodo resuelve la promesa y automáticamente
    // se ejecuta la función then de la misma
    // resolve();

    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve('Fue un éxito');
        } else {
            reject('Esto fue un fracaso')
        }
    }, 3000);
});

promesa.then((message) => {
    alert(message);
});

promesa.catch((message) => {
    alert(message);
});