import Layout from "@/components/Layout"
import { useState } from "react"

export default function Estado(){
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }

    return(
        <Layout title="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}