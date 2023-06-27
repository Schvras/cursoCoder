Array.prototype.filter2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        if (callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 5000, fragil: true},
    {nome: 'Celular', preco: 2000, fragil: true},
    {nome: 'Chocolate', preco: 12, fragil: true},
    {nome: 'Caderno', preco: 10, fragil: false},
]

const somenteFragil = e => e.fragil
const somenteCaro = e=> e.preco >= 2000

console.log(produtos.filter2(somenteCaro).filter2(somenteFragil))