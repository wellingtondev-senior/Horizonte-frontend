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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input"
import { FaGoogleDrive } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa";
import { useQueryProvedorCreate } from "@/query/useQueryProvedor"
import { ProvedorEnum } from "@/enums/provedor.enum"
import { tv } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { ProvedorRequetType } from "@/types/provedor"
import { useQueryAreasCreate } from "@/query/useQueryAreas"



const provedorSelected = tv({
    base: "w-full p-0 px-4 py-2 gap-2",
    variants: {
        selected: {
            false: "bg-transparent",
            true: "bg-gray-200"
        }
    },
    defaultVariants: {
        selected: false
    }
});





export function NewArea({ }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const queryAreasCreate = useQueryAreasCreate();


    const controlDrawer = () => {
        setIsDrawerOpen(true)
    }
 
    const handleCreate = () => {
        setIsDrawerOpen(false)
        queryAreasCreate.mutate({nome:"Area teste"})
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
                            <Input type="text" />
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
