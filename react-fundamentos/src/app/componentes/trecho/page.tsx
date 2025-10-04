export default function Trecho() {
    
    //let trecho = <h1>Trecho #1</h1>
    //const trecho2 = <h1>Trecho #2</h1>
    const trechos = [
        <div key={1}>Trecho #1</div>,
        <div key={2}>Trecho #2</div>,
        <div key={3}>Trecho #3</div>,
    ]

    const teste = {
        jsx: <div>JSX</div>
    }
    
    return (
        <div>
            {trechos[1]}
            {teste.jsx}
        </div>
    )
}