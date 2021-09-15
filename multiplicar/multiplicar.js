const fs = require('fs');

let guardarTabla = (base) => {

    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`archivos/tabla-multiplicar-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-multiplicar-${base}.txt`);
        });
    })
}


module.exports = {
    guardarTabla
}