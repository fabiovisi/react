import Pagina from "@/components/Pagina";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function Contador() {

    const [num, setNum] = useState(0)
    const [delta, setDelta] = useState(1)

    function incrementar() {
        setNum(num + delta)
    }

    function decrementar() {
        setNum(num - delta)
    }

    function decrementarDelta() {
        setDelta(delta - 1)
    }

    function incrementarDelta() {
        setDelta(delta + 1)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Capítulo Contador">

            <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
                <div className="text-7xl font-black">{num}</div>
                <div className="flex gap-5">
                    <button className="bg-red-500 p-2 rounded" onClick={() => setNum(num - delta)}><IconMinus/></button>                    
                    <button className="bg-green-500 p-2 rounded" onClick={() => setNum(num + delta)}><IconPlus/></button>
                </div>
                <div className="flex gap-5">                                        
                    <button onClick={decrementar}>-</button>
                    <button onClick={incrementar}>+</button>
                </div>
                <div className="flex gap-4">
                    <button className="bg-purple-700 p-2 rounded" onClick={decrementarDelta}><IconMinus/></button>
                    <span>{delta}</span>
                    <button className="bg-purple-500 p-2 rounded" onClick={incrementarDelta}><IconPlus/></button>
                </div>                
            </div>

        </Pagina>

    )
}