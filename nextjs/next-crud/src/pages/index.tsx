import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const { cliente, clientes, tabelaVisivel, exibirTabela, novoCliente, selecionarCliente, excluirCliente, salvarCliente } = useClientes()

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r to-blue-600 from-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        { tabelaVisivel ?
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>
          : <Formulario cliente={cliente} clienteSalvo={salvarCliente} cancelado={exibirTabela}/>
        }
      </Layout>
    </div>
  )
}
