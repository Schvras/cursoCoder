class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class ClicoFincanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0

        this.lancamentos.forEach((lancamento)=>{
            valorConsolidado += lancamento.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 2750)
const carro = new Lancamento('Financiamento carro',-614)

const conta = new ClicoFincanceiro(5,2023)

conta.addLancamento(salario, carro)

console.log(conta.sumario())