const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() // Remove ultimo

console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no final

console.log(pilotos)

pilotos.shift() // Remove primeiro

console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no inicio

console.log(pilotos)

pilotos.splice(2,0,'Botas','Massa') // inicio, quantidade, itens a preencher

console.log(pilotos)

pilotos.splice(3,1) // Remove um

console.log(pilotos)

let novos = pilotos.slice(1) // Retona um novo array

console.log(novos)

let trePrimeiros = pilotos.slice(0,3) // Retona um novo array

console.log(trePrimeiros)