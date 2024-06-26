"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import useProvider from "@/hook/useProvider";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";



export function TableProvedor() {
    const provedor = useProvider()
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Nome do Provedor</TableHead>
                    <TableHead className="text-center">Provedor</TableHead>
                    <TableHead className="text-center">Limite de Uso</TableHead>
                    <TableHead className="text-center">Tamanho em Uso</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="text-right w-[100px]">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    provedor.isLoading ?
                        <TableRow className="h-[40px] py-2">
                            <TableCell colSpan={5} className="w-full h-[40px] text-center">
                                <Spinner />
                            </TableCell>
                        </TableRow> :
                        provedor.isData?.map((provedorElemento, i) => (
                            <TableRow key={provedorElemento.provedor} className="h-[40px] py-2">
                                <TableCell className="font-medium ">{provedorElemento.nome}</TableCell>
                                <TableCell className="text-center">{provedorElemento.provedor}</TableCell>
                                <TableCell className="text-center">{provedorElemento.limiteArmazenamento}</TableCell>
                                <TableCell className="text-center">0.0</TableCell>
                                <TableCell className="w-[100px]">
                                    <Switch id={`provedor-${provedorElemento}`} checked={provedorElemento.status} onCheckedChange={(checked: boolean) => provedor.setNewObject(i, checked)} />
                                </TableCell>
                                <TableCell className="w-[100px] flex items-center justify-end gap-2">
                                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-red-600">
                                            <AiOutlineDelete className="w-6 h-6" />
                                        </Button>
                                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-orange-400">
                                            <FaRegEye className="w-6 h-6" />
                                        </Button>
                                    </TableCell>
                            </TableRow>
                        ))
                }

            </TableBody>

        </Table>
    )
}
