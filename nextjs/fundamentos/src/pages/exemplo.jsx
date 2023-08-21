import Cabecalho from "@/components/Cabecalho"
import Layout from "@/components/Layout"
import Link from 'next/link'

export default function Exemplo(){
    return(
        <Layout>
            <Cabecalho title="Estudando Next.js"/>
            <Cabecalho title="Estudando React.js"/>
            <Link href="/estiloso">Estiloso</Link>
        </Layout>
    )
}