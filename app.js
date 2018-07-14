const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}