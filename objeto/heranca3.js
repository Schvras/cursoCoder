const pai = {
    nome: 'Jean',
    corCabelo: 'loiro'
}

const filho = Object.create(pai,{
    nome: {value: 'Martin',writable: true, enumerable: false}
})

const filha = Object.create(pai,{
    nome: {value: 'Mary',writable: true, enumerable: true}
})

console.log(Object.keys(filho))
console.log(Object.keys(filha))


for(let key in filha){
    console.log(filha.hasOwnProperty(key) ? key : `Por herança ${key}`)
}