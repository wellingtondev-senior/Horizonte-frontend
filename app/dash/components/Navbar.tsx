import { Menu } from "./ui/menu";
import { GoWorkflow } from "react-icons/go";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { SlHome } from "react-icons/sl";
import { HiMiniQrCode } from "react-icons/hi2";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { MdOutlinePix } from "react-icons/md";
import { MdPayments } from "react-icons/md";
const Navbar = () => {

    
    return (
        <Menu.Root open={true}>
            <Menu.Action icon={RiMenuUnfoldLine}/>
           <Menu.Item icon={ SlHome } href="/dash" />
           <Menu.Item icon={ GoWorkflow} href="/dash/flow"/>
           <Menu.Item icon={ HiMiniQrCode} href="/dash/providers" />
           <Menu.Item icon={ MdOutlineSettingsInputComponent} href=""/>
           <Menu.Item icon={ MdOutlinePix } href=""/>
           <Menu.Item icon={ BiLogoTelegram} href=""/>
           <Menu.Item icon={ SlHome } href="/dash" />
           <Menu.Item icon={ GoWorkflow} href="/dash/fluxo"/>
           <Menu.Item icon={ HiMiniQrCode} href="/dash" />
           <Menu.Item icon={ MdOutlineSettingsInputComponent} href=""/>
           <Menu.Item icon={ MdOutlinePix } href=""/>
           <Menu.Item icon={ BiLogoTelegram} href=""/>
          
        </Menu.Root>
    );
}

export default Navbar;