const argv = require('./config/yargs').argv;

const { guardarTabla } = require('./multiplicar/multiplicar');

//////////////////// Esta forma de aceptar comandos de la terminal da mucho trabajo por las validaciones
// let argv = process.argv;
// let base = argv[2];
// let numero = base.split('=')[1];
// console.log(numero);
/////////////////////////////////////////////////////// Para eso esta la libreria YARGS que es mucho mas facil

console.log('Limite: ', argv.limite);
let base = 3;

guardarTabla(base)
    .then(archivo => {
        console.log(`Archivo creado: ${archivo}`);
    })
    .catch(err => {
        console.log(err);
    })