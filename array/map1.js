const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(nums)
console.log(resultado)

const somar10 = e => e + 10
const triplo = e => e * 3
const formataDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(somar10).map(triplo).map(formataDinheiro)

console.log(resultado)