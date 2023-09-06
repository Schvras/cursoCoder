import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Jean',24,'jshfjkashkjfkg'),
    new Cliente('Bruna',19,'jshfjkashkjfkF')
  ]

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r to-blue-600 from-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}/>
      </Layout>
    </div>
  )
}
