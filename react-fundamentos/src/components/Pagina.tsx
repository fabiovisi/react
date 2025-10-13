import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Pagina(props: PaginaProps) {
     return (
            <div className="flex">
                <AreaLateral />

                <div className='flex flex-col flex-1'>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} className="h-16 bg-zinc-800 border-b border-zinc-700" />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                    <Rodape
                    textoEsquerda="Copyright © 2025"
                    textoDireta={`Desenvolvido em ${new Date().getFullYear()}`} />
                </div>
                
            </div>
        )
}
