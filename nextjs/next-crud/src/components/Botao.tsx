interface BotaoProps{
    cor?: 'green' | 'red' | 'blue'
    className?: string
    children: any
    click?: (any) => void
}

export default function Botao(props: BotaoProps){

    const cor = props.cor ?? 'gray'

    return (
        <button
            onClick={props.click}
            className={`
                bg-gradient-to-r from-${cor}-400 to-${cor}-700
                text-white px-4 py-2 rounded-md
                ${props.className}`
        }>{props.children}</button>
    )
}