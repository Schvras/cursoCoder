import Cabecalho from "@/components/Cabecalho"
import Link from 'next/link'

export default function Exemplo(){
    return(
        <>
            <Cabecalho title="Estudando Next.js"/>
            <Cabecalho title="Estudando React.js"/>
            <Link href="/estiloso">Estiloso</Link>
        </>
    )
}