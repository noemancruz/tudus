const fs = require('fs');

let listadoPorHacer = [];

const guardarBD = () => {


    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {

        if (err)
            throw new Error(err);


    })



}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (err) {
        listadoPorHacer = [];
    }

}
const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;
}
const getListado = () => {
    //console.log('aca');
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => {

        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        completado = completado.toLowerCase();
        completado = JSON.parse(completado);
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {

    cargarDB();
    let nuevaLista = listadoPorHacer.filter((tarea) => {
        //console.log(tarea.descripcion);
        return descripcion !== tarea.descripcion;
    });

    if (nuevaLista.length === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevaLista;
        guardarBD();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}