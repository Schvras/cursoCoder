import Link from "next/link"
import styles from "@/styles/Navegador.module.css"

export default function Navegador(props){
    return(
        <Link href={props.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ? props.cor : 'darkslateblue'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}