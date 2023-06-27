const produtos = [
    {nome: 'Notebook', preco: 5000, fragil: true},
    {nome: 'Celular', preco: 2000, fragil: true},
    {nome: 'Chocolate', preco: 12, fragil: true},
    {nome: 'Caderno', preco: 10, fragil: false},
]

const somenteFragil = e => e.fragil
const somenteCaro = e=> e.preco >= 2000

console.log(produtos.filter(somenteCaro).filter(somenteFragil))