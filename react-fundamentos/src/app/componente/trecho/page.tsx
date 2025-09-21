export default function Page() {

    //let trecho = <h1 className="text-green-500 text-6xl">Trecho</h1>
    const trechos = [
        <div key={1}>Trecho #1</div>,
        <div key={2}>Trecho #2</div>,
        <div key={3}>Trecho #3</div>,
    ]

  return (
    //trecho
    trechos[1]
  )
}