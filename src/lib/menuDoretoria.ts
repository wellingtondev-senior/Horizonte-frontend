import { IconType } from 'react-icons/lib';
import { VscGraph } from 'react-icons/vsc';
import { GrStorage } from "react-icons/gr";
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
            page: "/diretoria/projetos",
            icon:VscGraph
        },   
        
 
    ]
},
{
    item: "configurações",
    data: [
        {
            label: "Provedores Storage",
            page: "/diretoria/storage",
            icon:GrStorage
        },   
 
    ]
}


]
const filter  = data.filter(element=>element.item == item)
return  filter[0]
}

