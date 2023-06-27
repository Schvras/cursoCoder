// Sem promisse

const http = require('http')

const getTurma = (letra, callback)=> {

    http.get(`http://files.cod3r.com.br/curso-js/turma${letra}.json`,res =>{
        
        let resultado = ''

        res.on('data', data => {resultado += data })

        res.on('end', () => callback(JSON.parse(resultado)))
    })
}

let nomes = []
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))

    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
    
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
        
            console.log(nomes)
        })
    })
})