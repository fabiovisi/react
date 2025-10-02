import Pagina from '@/components/Pagina'

export default function Page() {

    function executarAcao() {
        console.log("Ação executada!")
    }

    return (
        <Pagina titulo="Minha Página" subtitulo="Pasta /Pages">
            <button onClick={executarAcao}
                 className={`
                         bg-blue-500
                         hover:bg-blue-700
                         text-white
                           font-bold 
                           py-2 px-4 rounded`}>
                Teste
            </button>
        </Pagina>
    )
}
