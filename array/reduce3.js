Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]

    for(let i = 0; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const alunos = [
    {nome: 'Jean', nota: 7, bolsista: false},
    {nome: 'Bruna', nota: 10, bolsista: false},
    {nome: 'David', nota: 9, bolsista: false},
]

const todosBolsista = (resultado, bolsista)=> resultado && bolsista

const algumBolsista = (resultado, bolsista)=> resultado || bolsista

let bolsistas = alunos.map(a => a.bolsista).reduce2(todosBolsista)

let bolsista = alunos.map(a => a.bolsista).reduce2(algumBolsista)

console.log(bolsistas)
console.log(bolsista)