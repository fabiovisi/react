import Pagina from '@/components/Pagina'

export default function Page() {

    function executarAcao() {
        console.log("Ação executada!")
    }

    return (
        <Pagina titulo="Minha Página" subtitulo="Pasta /Pages">
            <button onClick={executarAcao}
                 className="botao">
                Teste
            </button>
        </Pagina>
    )
}
