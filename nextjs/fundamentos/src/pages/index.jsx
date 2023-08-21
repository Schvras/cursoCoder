import Navegador from "@/components/Navegador"

export default function Inicio(){
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                flexWrap: 'wrap',
                height: '100vh'
            }}>
            <Navegador texto="Estiloso" destino="estiloso" cor="red"/>
            <Navegador texto="Exemplo" destino="exemplo"/>
            <Navegador texto="JSX" destino="jsx"/>
            <Navegador texto="Navegação #01" destino="/navegacao"/>
            <Navegador texto="Navegação #02" destino="/cliente/sc/123"/>
            <Navegador texto="Estado" destino="estado"/>
        </div>
    )
}