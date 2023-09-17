import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos,[])

  function obterTodos(){
    repo.obterTodos().then( clientes =>{
      setClientes(clientes)
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteSalvo (cliente: Cliente){
    setVisivel('tabela')
    console.log(cliente)
  }

  function novoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r to-blue-600 from-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        { visivel === 'tabela' ?
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
          : <Formulario cliente={cliente} clienteSalvo={clienteSalvo} cancelado={() => setVisivel('tabela')}/>
        }
      </Layout>
    </div>
  )
}
