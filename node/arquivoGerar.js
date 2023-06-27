const fs = require('fs')

const config = {
    db:{
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'funcionarios'
    }
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(config), err => {
    console.log(err || 'Arquivo salvo!')
})