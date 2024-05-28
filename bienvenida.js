//Escribir un script en que muestre un mensaje de bienvenida, Fecha y hora. El script se encuentra en un archivo externo codigo.js

function reloj(){
    // se obtiene la fecha y hora actual
    let date = new Date;
    // se extrae las horas, minutos y segundos de la fecha
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //se arregla el formato para que parezca reloj
    if (hh<10) {
        hh = "0" + hh
    }
    if (mm<10) {
        mm = "0" + mm
    }
    if (ss<10) {
        ss = "0" + ss
    }

    //mensaje de bienvenida con la fecha y hora
    let time = `bienvenido, hoy es ${date.toLocaleDateString()} y son las ${hh + ":" + mm + ":" + ss}.`;

    // seleccionamos el div con el ID watch y actualiza su contenido con el mensaje de tiempo
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;

}
// se llama a la función 'reloj' cada 1000 milisegundos para actualizar el reloj
setInterval(reloj, 1000); //100 milisegundos es un segundo

