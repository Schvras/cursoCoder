import Layout from "@/components/Layout"

export default function Jsx(){
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo(){
        return <h2>{"muito legal".toLocaleUpperCase()}</h2>
    }

    return(
        <Layout title="Entendo o JSX">
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Jean', idade: 22})}
            </p>
        </Layout>
    )
}