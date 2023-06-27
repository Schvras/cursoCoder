function Pessoa(){}

console.log(Pessoa.prototype)

const pessoa1 = new Pessoa
const pessoa2 = new Pessoa

console.log(pessoa1.__proto__ === pessoa2.__proto__)
console.log(Pessoa.prototype === pessoa1.__proto__)

Pessoa.prototype.nome = 'Jean'
Pessoa.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome}`)
}

pessoa1.falar()