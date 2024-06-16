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


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
]

export function TableProvedor() {
    
   
    const queryProvedorFindAll = useQueryProvedorFindAll();






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
                    queryProvedorFindAll.isLoading ?
                    <TableRow >
                    <TableCell rowSpan={5} className="font-medium h-[40px]">Sem valor</TableCell>
                  
                 
                </TableRow> :
                queryProvedorFindAll.data?.message.map((provedor)=>(
                    <TableRow key={provedor.provedor} className="h-[40px] py-2">
                        <TableCell className="font-medium ">{provedor.nome}</TableCell>
                        <TableCell className="">{provedor.provedor}</TableCell>
                        <TableCell className="">{provedor.limiteArmazenamento}</TableCell>
                        <TableCell className="">0.0</TableCell>
                        <TableCell className="text-right ">
                            <Switch id="airplane-mode" />
                        </TableCell>
                    </TableRow>
                ))
                }
                
            </TableBody>
            
        </Table>
    )
}
