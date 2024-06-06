"use client"
import { useState } from "react";
import { Menu, } from "@/components/ui/Menu";
import { RiMenu2Fill } from "react-icons/ri";
import useMenuState, { useMenuStateProps } from "@/store/useMenuState";
import useSubMenutate, { useSubMenutateProps } from "@/store/useSubMenuState";
import { MdSpaceDashboard, MdOutlineViewAgenda, MdOutlineHelpOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { SlCreditCard } from "react-icons/sl";
import { SiApachekafka } from "react-icons/si";
import { SubMenu, menuColaborador } from "@/lib/menuColaborador";
import { VscGraph } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";


const SideBar = () => {
    const router = useRouter();
    const menuState = useMenuState((state: useMenuStateProps) => state);
    const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);
    const [items, setItems] = useState<string>("")

    const [menuItems, setMenuItems] = useState<SubMenu[]>([])

    const actionMenu = () => {
        menuState.setVisible()
        if (subMenuState.visible) {
            subMenuState.setVisible()
        }
    }

    const setOpenSubItems = (item: string) => {
        subMenuState.setVisible();
        if (items == "") {
            setItems(item.toLowerCase());
        } else if (items == item.toLowerCase()) {

            setItems(item.toLowerCase());
        } else {
            setItems(item.toLowerCase());
        }
        menuColaborador(item.toLowerCase())?.data ?? subMenuState.setVisible()
        setMenuItems(menuColaborador(item.toLowerCase())?.data ?? [])
    }

    return (
        <>
            <Menu.Root open={menuState.visible}>
                <Menu.Action onOpenAtion={() => actionMenu()} menuActionIcon={RiMenu2Fill} />
                <Menu.ButtonTooltip label="Dashboard" onAction={() => setOpenSubItems("Dashboard")} buttonIcon={MdSpaceDashboard} />
                <Menu.ButtonTooltip label="Agenda" onAction={() => setOpenSubItems("Agenda")} buttonIcon={MdOutlineViewAgenda} />
                <Menu.ButtonTooltip label="Clientes" onAction={() => setOpenSubItems("Clientes")} buttonIcon={FaUsers} />
                <Menu.ButtonTooltip label="Estoque" onAction={() => setOpenSubItems("Estoque")} buttonIcon={CiBoxes} />
                <Menu.ButtonTooltip label="Equipamentos" onAction={() => setOpenSubItems("Equipamentos")} buttonIcon={FaPeopleCarryBox} />
                <Menu.ButtonTooltip label="Contratos" onAction={() => setOpenSubItems("Contratos")} buttonIcon={BsFileEarmarkPdf} />
                <Menu.ButtonTooltip label="Fatuas" onAction={() => setOpenSubItems("Faturas")} buttonIcon={SlCreditCard} />
                <Menu.ButtonTooltip label="Integrações" onAction={() => setOpenSubItems("Integracao")} buttonIcon={SiApachekafka} />
            </Menu.Root>
            <Menu.SubitemsRoot openSubItems={subMenuState.visible}>
                <Menu.SubitemsTitulo label={items.toUpperCase()} color="white" />
                {
                    menuItems.map((e, i) => (
                        <Menu.Subitems key={i} iconSize={"sm"} color={"white"} label={e.label} page={e.page} icon={e.icon} />

                    ))
                }

            </Menu.SubitemsRoot>
        </>
    );
}

export default SideBar;