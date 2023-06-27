console.log(typeof Array, typeof new Array)

let aprovados = new Array('Jean', 'Bruna')

console.log(aprovados)

aprovados = ['Jean Henrique', 'Bruna Cuchi']

console.log(aprovados)

aprovados.push('Tiago')

console.log(aprovados)

delete aprovados[2]

console.log(aprovados)

aprovados.sort()

console.log(aprovados)

aprovados.splice(1,1,'1')

console.log(aprovados)