const alunos = [
    {nome: 'Jean', nota: 7, bolsista: false},
    {nome: 'Bruna', nota: 10, bolsista: false},
    {nome: 'David', nota: 9, bolsista: false},
]

const todosBolsista = (resultado, bolsista)=> resultado && bolsista

const algumBolsista = (resultado, bolsista)=> resultado || bolsista

let bolsistas = alunos.map(a => a.bolsista).reduce(todosBolsista)

let bolsista = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(bolsistas)
console.log(bolsista)