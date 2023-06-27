const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho,'utf8');
console.log('Sincrono:')
console.log(conteudo)

// Assincrono
fs.readFile(caminho,'utf8',(erro,conteudo) => {

    if(!erro){
        console.log('Assincrono:')
        console.log(conteudo)
    }
});

// Mensagem é executada antes de acabar a leitura assincrona
console.log('Mensagem após chamar assincro')

// Quando json, podemos usar require('{caminho}.json')
const arquivo = require('./arquivo.json')
console.log('Arquivo json: ', arquivo)


// Ler todo diretorio
fs.readdir(__dirname,(erro,arquivos) => {
    if(!erro){
        console.log('Conteudo da pasta:')
        console.log(arquivos)
    }
})