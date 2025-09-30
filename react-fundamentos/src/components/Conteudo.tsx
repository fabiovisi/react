interface ConteudoProps {
    children: any;
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`
            flex flex-1 p-5 items-start 
            bg-zinc-900 text-3xl
            text-zinc-400
            `}>
            {props.children}
        </div>
    )
}
