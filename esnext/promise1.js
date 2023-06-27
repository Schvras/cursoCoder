const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'tempo.txt')

function lerArquivo(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path,'utf-8',(_, data) =>{
            resolve(data.toString())
        })
    })
}

lerArquivo(caminho)
    .then(console.log)
    .catch(console.log)