const aprovados = ['Jean', 'Bruna', 'Tatiana']

aprovados.forEach(function(nome, indice, array){ // Funcção callback recebe elemento, indice e array origem
    console.log(`${indice} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))