// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'mouse',
    valor: 150,
    cor: 'preto'
})

produto.cor     = 'white'
produto.estoque = 15
delete produto.valor

console.log(produto)

// Object.seal

const pessoa = {
    nome: 'Jean',
    idade: 19,
    corCabelo: 'loiro'
}

Object.seal(pessoa)

pessoa.nome = 'Bruna'
delete pessoa.corCabelo

console.log(pessoa)

// Object.freeze

const mensagem = {
    erro: '500',
    mensagem: 'Internal server error'
}
Object.freeze(mensagem)

mensagem.erro = 200
delete mensagem.mensagem

console.log(mensagem)
