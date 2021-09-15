const argv = require('yargs') // cuando no lleva ./ no es un path relativo, sino que es un paquete
    .command('listar', 'Imprime en consola la tabla de multiplicar', { // creo el comando listar y le agrego una descripcion
        base: {
            demand: true, // hay que ingresar la base de forma obligatoria
            alias: 'b' // en vez de escribir base acepta b
        },
        limite: {
            alias: 'l', // letra ele
            default: 10 // si el usuario no lo ingresa tiene un valor por defecto
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'c'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() // lo agrega yargs por nosotros
    .argv



module.exports = {
    argv
}