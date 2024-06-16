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
 const queryCache = new QueryCache({
        onError: (error) => {
          console.log(error)
        },
        onSuccess: (data) => {
          console.log(data)
        },
        onSettled: (data, error) => {
          console.log(data, error)
        },
      })

 useEffect(()=>{
    const query = queryCache.find({queryKey: ['queryProvedorFindAll']})
    console.log(query)
    if(queryProvedorFindAll.isStale){
        queryProvedorFindAll.refetch()
    }
 },[queryProvedorFindAll.isStale, queryProvedorFindAll.refetch])



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
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                            <Switch id="airplane-mode" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </Table>
    )
}
