const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":

        let tareas = porHacer.getListado();
        console.log('========== Tarea por Hacer =========='.green);

        for (let index = 0; index < tareas.length; index++) {

            console.log('====================================='.green);
            console.log('Descripción: ', tareas[index].descripcion);
            console.log('Estado: ', tareas[index].completado);
            console.log('====================================='.green);

        }
        break;

    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(`Tarea completada : ${actualizado}`);
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Tarea eliminada : ${borrado}`);
        break;

    default:
        console.log("Comando no reconocido.");
        break;
}