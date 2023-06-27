const alunos = [
    {nome: 'Jean', nota: 7, bolsista: true},
    {nome: 'Bruna', nota: 10, bolsista: true},
    {nome: 'David', nota: 9, bolsista: false},
]

let resultado = alunos.map( a => a.nota).reduce(function(acumulador, itemAtual){

    return acumulador + itemAtual
})

console.log(resultado)