const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'comando para crear una tarea', {
        descripcion
    })
    .command('actualizar', 'comando para actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'comando para borrar una tarea', {
        descripcion
    })
    .argv;

module.exports = {
    argv
}