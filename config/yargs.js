const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada una tarea'
}

const argv =
    require('yargs')
    .command('crear', 'Crea una tarea por hacer.', { descripcion })
    .command('listar', 'Lista las tareas por hacer y las completadas', { completado })
    .command('actualizar', 'Actualiza el estado actual de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}