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
import { Documento, DocumentoResponse } from "@/types/documentos";
import { UseQueryResult } from "@tanstack/react-query";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import TipoDumentoIcon from "@/components/TipoDumentoIcon";
import { DocumentosType } from "@/enums/documento.enum";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineDelete } from "react-icons/md";
import { useDocumentosDelete } from "@/query/useQueryDocumentoUpload";




interface TableDocumentosProps {
    filter: string,
    response: UseQueryResult<DocumentoResponse, Error>
}

const PdfIconVariants = tv({
    slots: {
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
    const { col1, col2, col3, col4, col5 } = PdfIconVariants();
    const [isCheckSelected, setIsCheckSelected] = useState<number[]>([])
    const [isCheckSelectedNome, setIsCheckSelectedNome] = useState<string[]>([])
    const documentosDelete = useDocumentosDelete();


    const deleteSelected = () => {

        documentosDelete.mutate({ nomeDocumento:isCheckSelectedNome, ids:isCheckSelected})
    }



    const handlerCheck = (checked: string | boolean, id: number, nome:string) => {
        if (checked) {
            setIsCheckSelected((checkSelected) => [...checkSelected, id])
            setIsCheckSelectedNome((nomeSelected)=>[...nomeSelected, nome])
        } else {
            setIsCheckSelected((checkSelected) =>
                checkSelected.filter((checkId) => checkId !== id)
            );
            setIsCheckSelectedNome((nomeCheckSelected) =>
                nomeCheckSelected.filter((checkNome) => checkNome !== nome)
            );
        }
    }

    const handlerCheckAll = (checked: string | boolean) => {
        if (checked) {
            const allIds = response.data?.message.map((documento) => documento.id) || [];
            const allNome = response.data?.message.map((documento) => documento.nome) || [];
            setIsCheckSelected(allIds);
            setIsCheckSelectedNome(allNome)
        } else {
            setIsCheckSelected([]);
            setIsCheckSelectedNome([])
        }
    }

    const isIdSelected = (id: number): boolean => {
        return isCheckSelected.includes(id);
    };
    const isSelected = (): boolean => {
        return isCheckSelected.length > 0
    };

    useEffect(() => {
        console.log(isCheckSelected)
    }, [isCheckSelected])


    return (
        <Table>
            <TableHeader className="">
                <TableRow className="">
                    <TableHead className={col1()}><Checkbox checked={isSelected()} onCheckedChange={(cheked) => handlerCheckAll(cheked)} /></TableHead>
                    <TableHead className={cn(col2(), "w-full flex items-center justify-start gap-4")}>
                        <div className="w-[40%]">Nome do Documento</div>
                        {
                            isCheckSelected.length > 0 ?
                                <div className="w-[60%] flex items-center justify-start gap-4 p-[5px] rounded-lg">
                                    <span className="font-bold text-[14px] text-gray-900">{isCheckSelected.length}  Selecionado </span>
                                    <Button onClick={deleteSelected} variant="outline" className="p-0 hover:bg-red-600 w-[30px] h-[30px] text-red-600 hover:text-white">
                                        <MdOutlineDelete className="w-4 h-4" />
                                    </Button>
                                </div> : <></>
                        }

                    </TableHead>
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
                            response.data.message.map((documento: Documento, i) => (
                                <TableRow key={documento.id} className="h-[40px] py-2">
                                    <TableCell className={col1()}><Checkbox checked={isIdSelected(documento.id)} onCheckedChange={(cheked) => handlerCheck(cheked, documento.id, documento.nome)} /></TableCell>
                                    <TableCell className={cn(col2(), "font-semibold")}>{documento.nome || 'N/A'}</TableCell>
                                    <TableCell className={cn(col3(), "font-medium")}>{documento.provedor.nome || 'N/A'}</TableCell>
                                    <TableCell className={cn(col4())}><TipoDumentoIcon tipo={mapDocumentType(documento.tipo)} /></TableCell>
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
