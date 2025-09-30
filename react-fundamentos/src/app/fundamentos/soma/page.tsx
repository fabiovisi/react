export default function Soma() {
    const operacao = "Soma "
    const a = 5
    const b = 10
    const resultado = a + b
    return (
        <div>
            <h1>{operacao}</h1>
            <p>{a} + {b} = {resultado}</p>
            <p>{a + b}</p>
            <div>{Math.random()}</div>
        </div>
    )
}