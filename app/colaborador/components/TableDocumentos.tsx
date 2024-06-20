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
import { Checkbox } from "@/components/ui/checkbox";
import { useDocumentosFindAll } from "@/query/useQueryDocumentoUpload";
import { DocumentoResponse } from "@/types/dosumentos";

interface TableDocumentosProps {
    filter: string,
    data: DocumentoResponse | undefined
}
export function TableDocumentos({ filter, data }: TableDocumentosProps) {


    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=""><Checkbox id="terms" /></TableHead>
                    <TableHead className="">Nome</TableHead>
                    <TableHead>Provedor</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Tamanho</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.message.length == 0 ?
                        <TableRow >
                            <TableCell rowSpan={5} className="font-medium h-[40px]">Sem valor</TableCell>


                        </TableRow> :
                        data?.message.map((documento, i) => (
                            <TableRow key={documento.id} className="h-[40px] py-2">
                                <TableCell className=""><Checkbox id="terms" /></TableCell>
                                <TableCell className="font-medium">{documento.nome}</TableCell>
                                <TableCell className="font-medium ">{documento.provedor.nome}</TableCell>
                                <TableCell className="">{documento.tipo}</TableCell>
                                <TableCell className="">{documento.tamanho}</TableCell>
                            </TableRow>
                        ))
                }

            </TableBody>

        </Table>
    )
}
