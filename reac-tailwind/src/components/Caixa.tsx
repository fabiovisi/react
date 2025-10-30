import React from 'react';

interface CaixaProps{
    children: React.ReactNode
    className?: string
}

export default function Caixa(props: CaixaProps){
    return(
        <div className={`
            bg-red-500 rounded-md
            ${props.className ?? ''}            
        `}>
            {props.children}
        </div>
    )
}