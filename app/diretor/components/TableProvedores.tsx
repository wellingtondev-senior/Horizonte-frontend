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
import { useQueryProvedorCreate, useQueryProvedorFindAll } from "@/query/useQueryProvedor";
import { useEffect } from "react";
import { QueryCache } from "@tanstack/react-query";
import useProvider from "@/hook/useProvider";


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
]

export function TableProvedor() {
    
   
    const provedor = useProvider()






    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Nome do Provedor</TableHead>
                    <TableHead>Provedor</TableHead>
                    <TableHead>Limite de Uso</TableHead>
                    <TableHead>Tamanho em Uso</TableHead>
                    <TableHead className="text-right">Ativar</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    provedor.isData.length === 0?
                    <TableRow >
                    <TableCell rowSpan={5} className="font-medium h-[40px]">Sem valor</TableCell>
                  
                 
                </TableRow> :
                provedor.isData?.map((provedorElemento, i)=>(
                    <TableRow key={provedorElemento.provedor} className="h-[40px] py-2">
                        <TableCell className="font-medium ">{provedorElemento.nome}</TableCell>
                        <TableCell className="">{provedorElemento.provedor}</TableCell>
                        <TableCell className="">{provedorElemento.limiteArmazenamento}</TableCell>
                        <TableCell className="">0.0</TableCell>
                        <TableCell className="text-right ">
                            <Switch id={`provedor-${provedorElemento}`} checked={provedorElemento.status} onCheckedChange={(checked:boolean)=>provedor.setNewObject(i, checked)} />
                        </TableCell>
                    </TableRow>
                ))
                }
                
            </TableBody>
            
        </Table>
    )
}
