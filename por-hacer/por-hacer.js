const fs = require('fs');
const colors = require('colors');
const yargs = require('yargs');

let listadoPorHacer = [];


// Crear tarea
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    grabarDB();
}

// Listar todas las tareas
const getListado = () => {
    try {
        cargarDB();

        if (listadoPorHacer.length === 0) {
            console.log('La lista de tareas está vacía');
        } else {
            return listadoPorHacer;
        }

    } catch (error) {
        throw new Error(`Hubo un error inesperado : ${error}`);
    }
}

// Actualizar una tarea
const actualizar = (descripcion, completado = true) => {
    // se carga la base de datos
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    console.log('index : ' + index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        grabarDB();
        return true;
    } else {
        return false;
    }
}

// Eliminar una tarea
const borrar = (descripcion) => {

    cargarDB();

    let eliminado = listadoPorHacer.filter(aEliminar => aEliminar.descripcion !== descripcion);

    if (eliminado.length !== listadoPorHacer.length) {
        listadoPorHacer = eliminado;
        grabarDB();
        return true;
    } else {
        return false;
    }
}

const grabarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}