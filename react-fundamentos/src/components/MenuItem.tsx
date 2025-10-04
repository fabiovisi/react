import Link from "next/link";

interface MenuItemProps {
    texto: string
    url: string
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className={`
          px-4 py-2
          w-full 
          rounded-md
          flex items-center gap-3
          text-base 
          hover:bg-zinc-900
        `}>
            <span>{props.icone}</span>
            <span>{props.texto}</span>
        </Link>
    )
}
