"use client"
import { useState } from "react";
import { Menu, } from "@/components/ui/Menu";
import { RiMenu2Fill } from "react-icons/ri";
import useMenuState, { useMenuStateProps } from "@/store/useMenuState";
import useSubMenutate, { useSubMenutateProps } from "@/store/useSubMenuState";
import { MdSpaceDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";
import { SubMenu } from "@/lib/menuColaborador";
import { menuDiretoria } from "@/lib/menuDoretoria";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsPersonVideo3 } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";




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
        menuDiretoria(item.toLowerCase())?.data ?? subMenuState.setVisible()
        setMenuItems(menuDiretoria(item.toLowerCase())?.data ?? [])
    }

    return (
        <>
            <Menu.Root open={menuState.visible}>
                <Menu.Action onOpenAtion={() => actionMenu()} menuActionIcon={RiMenu2Fill} />
                <Menu.ButtonTooltip label="Home" onAction={() => router.push("/diretor")} buttonIcon={IoHomeOutline} />
                <Menu.ButtonTooltip label="Dashboard" onAction={() => setOpenSubItems("Dashboard")} buttonIcon={MdSpaceDashboard} />
                <Menu.ButtonTooltip label="Colaboradores" onAction={() => router.push("/diretor/colaborador")} buttonIcon={BsPersonVideo3} />
                <Menu.ButtonTooltip label="Clientes" onAction={() => router.push("/diretor/clientes")} buttonIcon={RxPerson} />
                <Menu.ButtonTooltip label="Configurações" onAction={() => setOpenSubItems("Configurações")} buttonIcon={IoSettingsOutline} />
            </Menu.Root>
            <Menu.SubitemsRoot openSubItems={subMenuState.visible}>
                <Menu.SubitemsTitulo label={items.toUpperCase()} color="white" />
                {
                    menuItems.map((e, i) => (
                        <Menu.Subitems key={i} label={e.label} page={e.page} icon={e.icon} />

                    ))
                }

            </Menu.SubitemsRoot>
        </>
    );
}

export default SideBar;