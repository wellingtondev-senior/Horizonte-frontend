"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox";
import { Documento, DocumentoResponse } from "@/types/dosumentos";
import { UseQueryResult } from "@tanstack/react-query";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import TipoDumentoIcon from "@/components/TipoDumentoIcon";
import { DocumentosType } from "@/enums/documento.enum";

interface TableDocumentosProps {
    filter: string,
    response: UseQueryResult<DocumentoResponse, Error>
}

const PdfIconVariants = tv({
    slots: {
      base: "w-[17px] h-[16px]",
      col1: "w-[50px]",
      col2: "w-[47%]",
      col3: "w-[20%]",
      col4: "w-[15%]",
      col5: "w-[15%]"
    },
  })

  function mapDocumentType(tipo: string): DocumentosType {
    return DocumentosType[tipo as keyof typeof DocumentosType];
}

export function TableDocumentos({ filter, response }: TableDocumentosProps) {

    const {col1, col2, col3, col4, col5} = PdfIconVariants();
    return (
        <Table>
            <TableHeader className="">
                <TableRow className="">
                    <TableHead className={col1()}><Checkbox id="terms" /></TableHead>
                    <TableHead className={col2()}>Nome do Documento</TableHead>
                    <TableHead className={col3()}>Provedor</TableHead>
                    <TableHead className={col4()}>Tipo</TableHead>
                    <TableHead className={col5()}>Tamanho</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    response.isPending ?
                        <TableRow>
                            <TableCell colSpan={5} className="font-medium h-[40px] w-full text-center text-[16px]">Carregando...</TableCell>
                        </TableRow> :
                    response.isSuccess && response.data?.message.length > 0 ? 
                        response.data.message.map((documento:Documento, i) => (
                            <TableRow key={documento.id} className="h-[40px] py-2">
                                <TableCell className={col1()}><Checkbox id="terms" /></TableCell>
                                <TableCell className={cn(col2(), "font-semibold")}>{documento.nome || 'N/A'}</TableCell>
                                <TableCell className={cn(col3(),"font-medium")}>{documento.provedor.nome || 'N/A'}</TableCell>
                                <TableCell className={cn(col4())}><TipoDumentoIcon tipo={mapDocumentType(documento.tipo)}/></TableCell>
                                <TableCell className={cn(col5())}>{documento.tamanho || 'N/A'}</TableCell>
                            </TableRow>
                        )) :
                        <TableRow>
                            <TableCell colSpan={5} className="font-medium h-[40px] w-full text-center text-[16px]">Sem Valor</TableCell>
                        </TableRow>
                }
            </TableBody>
        </Table>
    )
}
