import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"
import {useState} from 'react'

interface FormularioProps{
    cliente: Cliente
    cancelado?: () =>  void
    clienteSalvo?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome?? '')
    const [idade, setIdade] = useState(props.cliente?.idade?? 0)

    return (
        <div>
            {id ? (<Entrada texto="Id" valor={id} somenteLeitura className="mb-4"/>) : false}
            <Entrada texto="Nome" valor={nome} ajuda="Digite seu nome" className="mb-4" onchange={setNome} />
            <Entrada texto="Idade" tipo="number" valor={idade} ajuda="Digite sua idade" onchange={setIdade}/>
            <div className="mt-3 flex justify-end">
                <Botao onClick={() => props.clienteSalvo?.(new Cliente(nome, +idade, id))} cor="blue" className="mr-2">{id ? 'Alterar' : 'Salvar'}</Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}