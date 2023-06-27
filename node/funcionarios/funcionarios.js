const url   = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chines = f => f.pais === 'China'

const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then((response)=>{
    const funcionarios = [...response.data]

    console.log(funcionarios.filter(chines).filter(mulheres).reduce(menorSalario))
})