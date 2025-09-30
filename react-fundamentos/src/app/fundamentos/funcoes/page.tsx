export default function Funcoes() {
    function soma(a: any, b: any) {
        return a + b
    }

    function renderizarTitulo() {
        return <h1>Título</h1>
    }

    function renderizarConteudo() {
        return (
            <ul>
                <li>Conteúdo 1</li>
                <li>Conteúdo 2</li>
                <li>Conteúdo 3</li>
            </ul>
        )
    }

    return (
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}
