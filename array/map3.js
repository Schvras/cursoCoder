Array.prototype.map2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 1.5}',
    '{"nome": "Caderno", "preco": 10.0}',
    '{"nome": "Kit lápis", "preco": 7.5}',
    '{"nome": "Caneta", "preco": 0.5}',
]

let precos = carrinho.map2(function(e){
    return JSON.parse(e).preco
})

console.log(precos)