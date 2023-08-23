import Layout from "@/components/Layout"

export function getStaticProps(){
    return{
            props:{
                numero: Math.random()
            }
        }
}

export default function Integracao(props){

    return (
        <Layout>
            <span>{props.numero}</span>
        </Layout>
    )
}