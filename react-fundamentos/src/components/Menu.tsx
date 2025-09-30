import { Icon360View, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex flex-col justify-start items-center
            text-3xl w-52
            p-2 gap-1
        `}>
            <MenuItem icone={<IconHome />} texto="Página 1" url="/fundamentos/pagina" />
            <MenuItem icone={<Icon360View />} texto="Página 2" url="/pagina" />
        </div>
    )
}
