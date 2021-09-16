const fs = require('fs');
const colors = require('colors');

let guardarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`archivos/tabla-multiplicar-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-multiplicar-${base}.txt`.green);
        });
    })
}


let listarTabla = (base, limite) => {

    console.log(`Tabla de multiplicar del ${base} con ${limite} multiplicadores`.underline.yellow);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} x ${i} = ${base * i}`.green);
    }
}


module.exports = {
    guardarTabla,
    listarTabla
}