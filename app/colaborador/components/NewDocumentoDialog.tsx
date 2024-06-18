"use client"
import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { VscCloudUpload } from 'react-icons/vsc';
import { GoUpload } from 'react-icons/go';
import { cn } from '@/lib/utils';

export function NewDocumentoDialog() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [isInd, setIsInd] = useState<string>('text-gray-800')

    const enviarFiles = async () => {
        if (selectedFiles) {
          const formData = new FormData();
          for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
          }
        }
         
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setSelectedFiles(files);
            // Calcular o tamanho total dos arquivos
            let total = 0;
            Array.from(files).forEach(file => {
                total += file.size;
            });
            setTotalSize(total);
        }
    };

    // Calcular a porcentagem do limite de 1MB (1000 KB)

    useEffect(() => {
        if (totalSize > 0) {
            console.log(totalSize)
            let percentualLimite = (totalSize / 1000) * 100;
            const doisPrimeirosDigitos = Math.floor(percentualLimite / 1000);
            console.log(doisPrimeirosDigitos)
            if (doisPrimeirosDigitos > 50 && doisPrimeirosDigitos < 80) {
                setIsInd('text-orange-500');
            } else if (doisPrimeirosDigitos > 80) {
                setIsInd('text-red-500');
            } else {
                setIsInd('text-gray-800');
            }
        }

    }, [totalSize])

    const clean = (open:boolean)=>{
       if(!open){
        setSelectedFiles(null)
        setTotalSize(0)
       }
    }

    return (
        <Dialog onOpenChange={clean}>
            <DialogTrigger asChild>
                <Button variant="outline" className="p-0 gap-2 px-10">
                    <VscCloudUpload className="w-6 h-6 fill-gray-700" />
                    <span>Novo Documento</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[500px] lg:w-[700px]">
                <DialogHeader>
                    <DialogTitle>New Documento</DialogTitle>
                    <DialogDescription>Os documentos serão enviados para seu provedor Firebase.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col px-4 sm:px-2">
                    {/* Renderização condicional baseada em selectedFiles */}
                    {selectedFiles && (
                        <>
                            {/* Mapeamento dos arquivos selecionados */}
                            {Array.from(selectedFiles).map((file, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b-[1px] border-gray-100">
                                    <span className="font-bold text-[12px]">{file.name}</span>
                                    <span className="text-[12px]">{`${(file.size / 1000).toFixed(2)} KB`}</span>
                                </div>
                            ))}
                            {/* Exibir o total de tamanho dos arquivos */}
                            <div className={cn(isInd, `flex items-center justify-between py-2 border-b-[1px] border-gray-100`)}>
                                <span className="font-bold text-[12px]">Total</span>
                                <span className="text-[12px]">{`${(totalSize / 1000).toFixed(2)} KB`}</span>
                            </div>
                        </>
                    )}
                </div>
                <DialogFooter>
                    <label className="flex items-center justify-center gap-2 px-4 h-[38px] rounded-md border hover:bg-gray-100 duration-500">
                        <GoUpload />
                        <span className="text-base leading-normal">Selecione arquivos</span>
                        <input type="file" className="hidden" multiple onChange={handleFileChange} />
                    </label>
                    <Button type="submit">Efetuar Upload</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
