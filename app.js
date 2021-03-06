const argv = require('./config/yargs').argv;


const { guardarTabla, listarTabla } = require('./multiplicar/multiplicar');

//////////////////// Esta forma de aceptar comandos de la terminal da mucho trabajo por las validaciones
// let argv = process.argv;
// let base = argv[2];
// let numero = base.split('=')[1];
// console.log(numero);
/////////////////////////////////////////////////////// Para eso esta la libreria YARGS que es mucho mas facil

let comando = argv._[0];

switch (comando) {

    case 'listarTabla':
        listarTabla(argv.base, argv.limite);
        break;

    case 'guardarTabla':
        guardarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}