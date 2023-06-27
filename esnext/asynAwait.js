// Com promisse
const http = require('http')

const getTurma = (letra)=> {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{

        http.get(url,res =>{
        
            let resultado = ''

            res.on('data', data => {resultado += data })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

// ES8

let getAlunos = async () => {
    let ta = await getTurma('A')
    let tb = await getTurma('B')
    let tc = await getTurma('C')

    return [].concat(ta, tb, tc)
}

getAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes =>  console.log(nomes))