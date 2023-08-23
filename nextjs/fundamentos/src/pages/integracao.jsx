import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integracao(){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    function obterCliente(){
        fetch(`https://glorious-xylophone-jpqqgvwg6xj2576j-3000.app.github.dev/api/clientes/${codigo}`)
            .then( resp => resp.json())
            .then( data => {
                setCliente(data)
                console.log(data)
            })
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}