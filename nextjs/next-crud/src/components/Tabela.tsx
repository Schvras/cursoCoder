import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo} from "./Icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela (props: TabelaProps){

    function renderizarAcoesCliente(cliente: Cliente){
        return (
            <>
                {
                    props.clienteSelecionado ? 
                        <button className="flex justify-center items-center text-green-500 p-2 rounded-full hover:bg-purple-50">{IconeEdicao}</button>
                        : false
                }
                {
                    props.clienteExcluido ? 
                        <button className="flex justify-center items-center text-red-700 p-2 rounded-full hover:bg-purple-50">{IconeLixo}</button>
                        : false
                }
            </>
        )
    }

    function rendenrizarCabecalho() {
        return(
            <tr>
                <th className="text-left p-2">Id</th>
                <th className="text-left p-2">Nome</th>
                <th className="text-left p-2">Idade</th>
                <th className="text-left p-2">Ações</th>
            </tr>
        )
    }

    function renderizarConteudo() {
        return props.clientes?.map( (cliente, i) => {
            return (
                <tr className={`${ (i % 2) === 0 ? 'bg-purple-200': 'bg-purple-100'}`} key={cliente.id}>
                    <td className="text-left p-2">{cliente.id}</td>
                    <td className="text-left p-2">{cliente.nome}</td>
                    <td className="text-left p-2">{cliente.idade}</td>
                    <td className="flex p-2">{renderizarAcoesCliente(Cliente)}</td>
                </tr>
            )
        })
    }

    return(
        <table className="w-full rounded-md overflow-hidden">
            <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
                {rendenrizarCabecalho()}
            </thead>
            <tbody>
                {renderizarConteudo()}
            </tbody>
        </table>
    )
}