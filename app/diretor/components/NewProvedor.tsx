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





export function NewProvedor({ }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const queryProvedorCreate = useQueryProvedorCreate();
    const [isProvedor, setIsProvedor] = useState<ProvedorEnum>(ProvedorEnum.GDRIVER)

    const controlDrawer = () => {
        setIsDrawerOpen(true)
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
                        <DrawerTitle>Novo Provedor Storage</DrawerTitle>
                        <DrawerDescription>Selecione o provedor de armazenamento.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="p-0 pb-0 mb-4">
                            <span className="font-bold text-[14px]">Nome do Provedor:</span>
                            <Input type="text" />
                        </div>
                        <span className="font-bold text-[14px]">Selecione o Provedor:</span>
                        <div className="flex items-center justify-center space-x-2">

                            <Button
                                onClick={() =>
                                    setIsProvedor(ProvedorEnum.GDRIVER)}
                                variant="outline"
                                className={cn(provedorSelected({ selected: isProvedor == ProvedorEnum.GDRIVER }))}>
                                <FaGoogleDrive />
                                <span>GDriver</span>
                            </Button>
                            <Button
                                onClick={() =>
                                    setIsProvedor(ProvedorEnum.DROPBOX)}
                                variant="outline"
                                className={cn(provedorSelected({ selected: isProvedor == ProvedorEnum.DROPBOX }))}>
                                <FaDropbox />
                                <span>Dropbox</span>
                            </Button>
                            <Button
                                onClick={() => setIsProvedor(ProvedorEnum.FIREBASE)}
                                variant="outline"
                                className={cn(provedorSelected({ selected: isProvedor == ProvedorEnum.FIREBASE }))}>
                                <IoLogoFirebase />
                                <span>Firebase</span>
                            </Button>

                        </div>

                    </div>
                    <DrawerFooter>
                        <Button onClick={() => setIsDrawerOpen(false)}>Enviar</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
