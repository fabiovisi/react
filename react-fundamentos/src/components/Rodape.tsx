interface RodapeProps {
    textoEsquerda: string;
    textoDireita: string;
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className={`
            flex justify-between items-center 
            bg-zinc-900 h-16 border-t 
            border-zinc-800 text-base px-10
            text-zinc-500
           `}>
            <span>{props.textoEsquerda}</span>
            <span>{props.textoDireita}</span>
        </div>
    )
}
