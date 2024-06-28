"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useQueryAreasFindAll, useQueryAreasRemove } from "@/query/useQueryAreas";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import Spinner from "@/components/Spinner";






export function TableAreas() {
    const queryAreasFindAll = useQueryAreasFindAll();
    const queryAreasRemove = useQueryAreasRemove()

    const removeArea = (id: number) => {
        queryAreasRemove.mutate({ id })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Áreas de Projetos</TableHead>
                    <TableHead className="text-right w-[100px]">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    queryAreasFindAll.isLoading ?
                        <TableRow className="h-[40px] py-2">
                            <TableCell colSpan={2} className="font-medium col-span-2 text-center">
                                <Spinner />
                            </TableCell>
                        </TableRow> :
                        queryAreasFindAll.isSuccess ?
                            queryAreasFindAll.data.message.map((e, i) => (
                                <TableRow key={e.id} className="h-[40px] py-2">
                                    <TableCell className="font-medium ">{e.nome}</TableCell>
                                    <TableCell className="w-[100px] flex items-center justify-end gap-2">
                                        <Button onClick={ ()=>removeArea(e.id)} variant="ghost" className="p-0 hover:bg-transparent hover:text-red-600">
                                            <AiOutlineDelete className="w-6 h-6" />
                                        </Button>
                                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-orange-400">
                                            <FaRegEye className="w-6 h-6" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : <div>Error</div>
                }

            </TableBody>

        </Table>
    )
}
