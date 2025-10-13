import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className={`
            font-black
            flex items-center
            px-5 gap-2.5
            bg-purple-700
            h-16            
        `}>
            <span><IconBrandReact size={30} stroke={1} /></span>
            <span className="text-2xl">React</span>
        </Link>
    )
}
