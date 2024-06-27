"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { BsDatabaseAdd } from "react-icons/bs"
import { Input } from "@/components/ui/input"
import { tv } from "tailwind-variants"
import { useQueryAreasCreate } from "@/query/useQueryAreas"








export function NewArea({ }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isNomeArea, setIsNomeArea] = useState<string>("");
    const queryAreasCreate = useQueryAreasCreate();


    const controlDrawer = () => {
        setIsDrawerOpen(true)
    }
 
    const handleCreate = () => {
        setIsDrawerOpen(false)
        queryAreasCreate.mutate({nome:isNomeArea})
    }

    return (
        <Drawer open={isDrawerOpen} onOpenChange={(event) => setIsDrawerOpen(event)}>
            <DrawerTrigger asChild>
                <Button onClick={controlDrawer} variant="outline" className="p-0 px-4 h-[40px] gap-2">
                    <BsDatabaseAdd className="w-4 h-4" />
                    <span>Criar um Novo</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Nova área do projeto</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="p-0 pb-0 mb-4">
                            <span className="font-bold text-[14px]">Nome da nova área:</span>
                            <Input type="text" onChange={(e)=>setIsNomeArea(e.target.value)}/>
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button onClick={handleCreate}>Enviar</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
