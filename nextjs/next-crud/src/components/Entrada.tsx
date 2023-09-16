interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    ajuda?:string
    className?: string
    onchange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className?? ''}`}>
            <label className="mb-1">{props.texto}</label>
            <input 
                type={props.tipo?? 'text'} 
                className={`border border-purple-200 rounded-md px-4 py-2 bg-gray-50 focus:outline-none ${props.somenteLeitura ? '' : 'focus:bg-white'}`}
                readOnly={props.somenteLeitura}
                placeholder={props.ajuda}
                value={props.valor}
                onChange={(e) => props.onchange?.(e.target.value)}
            />
        </div>
    )
}