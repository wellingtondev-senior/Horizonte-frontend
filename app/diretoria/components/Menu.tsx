import { Menu } from "./ui/Menu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaListUl } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

interface NavBarProps {
    open: boolean
}

const Navbar = ({ open }: NavBarProps) => {


    return (
        <Menu.Root open={open}>
            <Menu.Header open={open} className="w-full h-auto flex items-center justify-center">
                <Menu.Action icon={HiOutlineMenuAlt3} />
            </Menu.Header>
            <Menu.Item icon={TiHome} href="/diretoria/inicio" title="Pagina Inicial"/>
            <Menu.Item icon={FaListUl} href="/diretoria/colaborador" title="Colaboradores"/>
            <Menu.Item icon={FaListUl} href="/diretoria/clientes" title="Clientes"/>
            
        </Menu.Root>
    );
}

export default Navbar;