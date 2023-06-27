function Aula(nome, video){
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Testes 12',123)
const aula2 = new Aula('Testes 23',456)

console.log(aula1,aula2)