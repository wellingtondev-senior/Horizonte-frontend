
export type subMenuDataType = {
    item: string,
    data: SubMenu[]
}

export type SubMenu = {
    label: string,
    page: string
}

export const subMenuData = (item:string)=>{
 const data:subMenuDataType[] = [{
    item: "agenda",
    data: [
        {
            label: "Minha Agenda",
            page: "/agenda"
        },
        {
            label: "Reserva de Equipamento",
            page: "/agenda"
        },

    ]
   

},{
    item: "clientes",
    data: [
        {
            label: "Minha Agenda",
            page: "/agenda"
        },
        {
            label: "Reserva de Equipamento",
            page: "/agenda"
        },

    ]
}]
const filter  = data.filter(element=>element.item == item)
return  filter[0]
}

