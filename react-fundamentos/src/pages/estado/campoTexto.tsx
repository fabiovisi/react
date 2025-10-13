import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {

    const [valor, setValor] = useState('')

    function alterar() {
        setValor(`${Math.random()}`)
    }

    /*
    function alterarValor(e: any){
        console.log(e.target.value)
    }
    */

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">

            <div className="flex flex-col items-start gap-4">

                <input type="text" className="campo" value={valor} onChange={e => setValor(e.target.value)} />
                {/* <input type="text" className="campo" value={valor} onChange={alterarValor} /> */}
                <button onClick={alterar} className="botao">Alterar</button>

            </div>
            
        </Pagina>
    )
}