import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {

  const clientes = [
    new Cliente('Jean', 22, 'jshfjkashkjfkg'),
    new Cliente('Bruna', 19, 'jshfjkashkjfkF')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r to-blue-600 from-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        { visivel === 'tabela' ?
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
          : <Formulario cliente={new Cliente('',0)}/>
        }
      </Layout>
    </div>
  )
}
