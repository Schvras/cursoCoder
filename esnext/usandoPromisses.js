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
// Promise dentro de outra
//let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))

//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))

//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))

//             console.log(nomes)
//         })
//     })
// })

// Executa todas as promisses e executa o then
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))

 getTurma('D').catch(e => console.log(e))