const carrinho = [
    '{"nome": "Borracha", "preco": 1.5}',
    '{"nome": "Caderno", "preco": 10.0}',
    '{"nome": "Kit lápis", "preco": 7.5}',
    '{"nome": "Caneta", "preco": 0.5}',
]

let precos = carrinho.map(function(e){
    return JSON.parse(e).preco
})

console.log(precos)