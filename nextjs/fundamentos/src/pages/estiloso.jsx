import styles from '@/styles/Estiloso.module.css'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Estiloso(){
    return (
        <Layout title="Estilo.js">
            <div>
                <h1 className={styles.roxo}>Currículo</h1>
            </div>
        </Layout>
    )
}