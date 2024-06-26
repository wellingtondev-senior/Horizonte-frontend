import { IconType } from 'react-icons/lib';
import { VscGraph } from 'react-icons/vsc';
import { GrStorage } from "react-icons/gr";
import { TbSquareAsteriskFilled } from "react-icons/tb";
export type menuDiretoriaType = {
    item: string,
    data: SubMenu[]
}

export type SubMenu = {
    label: string,
    page: string
    icon:IconType
}
                {/* 
                <Menu.Subitems iconSize={"sm"} color={"white"} label={"Ajuda"} page={"/Diretoria/ajuda"} icon={MdOutlineHelpOutline}/>  */}

export const menuDiretoria = (item:string)=>{
 const data:menuDiretoriaType[] = [
    {
    item: "dashboard",
    data: [
        {
            label: "Projeto",
            page: "/diretor/projetos",
            icon:VscGraph
        },   
        {
            label: "Áreas do Projeto",
            page: "/diretor/area-projetos",
            icon:TbSquareAsteriskFilled
        }, 
        
 
    ]
},
{
    item: "configurações",
    data: [
        {
            label: "Provedores de Upload",
            page: "/diretor/provedor",
            icon:GrStorage
        },   
 
    ]
}


]
const filter  = data.filter(element=>element.item == item)
return  filter[0]
}

