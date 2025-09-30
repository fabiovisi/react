import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Pagina from "@/components/Pagina";
import Rodape from "@/components/Rodape";

export default function PaginaFundamentos() {
    return (
        <Pagina titulo="Minha Página" subtitulo="Fundamentos">
            <ul className="list-disc pl-8">
                <li>Ana</li>
                <li>Gustavo</li>
                <li>Rebeca</li>
                <li>Zico</li>
            </ul>
        </Pagina>
    )
}
