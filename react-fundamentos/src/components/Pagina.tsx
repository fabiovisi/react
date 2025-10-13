import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import React from "react";

interface PaginaProps {
    titulo: string;
    subtitulo: string;
    children: React.ReactNode;
}

export default function Pagina({ titulo, subtitulo, children }: PaginaProps) {
    return (
        <div className="flex">
            <AreaLateral />
            <div className="flex flex-col flex-1">
                {/* Cabeçalho */}
                <Cabecalho
                    titulo={titulo}
                    subtitulo={subtitulo}
                    className="h-16 bg-zinc-800 border-b border-zinc-700"
                />
                {/* Conteúdo principal */}
                <Conteudo>
                    {children}
                </Conteudo>
                {/* Rodapé */}
                <Rodape
                    textoEsquerda="Copyright © 2025"
                    textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    );
}
