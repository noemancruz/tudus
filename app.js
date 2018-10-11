const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');



const comand = argv._[0];

switch (comand) {

    case 'crear':
        console.log(crear(argv.descripcion));
        break;

    case 'listar':
        //console.log('entre');
        let listado = getListado();
        for (let tarea of listado) {
            console.log(colors.green('=====tarea por hacer====='));
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log(colors.green(`=========================`));

        }

        break;

    case 'actualizar':
        console.log(actualizar(argv.descripcion, argv.completado));
        break;

    case 'borrar':
        console.log(borrar(argv.descripcion));
        break;

    default:
        console.log('comando no valido');
        break;



}