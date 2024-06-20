"use client"
import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useDropzone } from 'react-dropzone';
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
import { useQueryDocumentoCreate } from '@/query/useQueryDocumentoUpload';
import { ProgressBar } from '@/components/ProgessBar';
import useUploadProgressStore, { UseUploadProgressStoreProps } from '@/store/useUploadProgress';

export function NewDocumentoDialog() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [isInd, setIsInd] = useState<string>('text-gray-800')
    const queryDocumentoCreate = useQueryDocumentoCreate()
    const uploadProgressStore= useUploadProgressStore((state: UseUploadProgressStoreProps)=>state);



    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles)
        setSelectedFiles(acceptedFiles);
        let total = 0;
        acceptedFiles.forEach(file => {
            total += file.size;
        });
        setTotalSize(total);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png'],
            "application/pdf": [],
            'application/msword':[],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document':[],
            'application/vnd.ms-excel':[],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':[],
        },
        multiple: true 
    });
    const enviarFiles = async () => {
        console.log("button Upload")
        console.log(selectedFiles.length)
        if (selectedFiles.length > 0) {
           
            queryDocumentoCreate.mutate(selectedFiles);
        }
    };

 

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

    const clean = (open: boolean) => {
        if (!open) {
            setSelectedFiles([])
            setTotalSize(0)
            uploadProgressStore.setProgress(0)
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
                    <DialogTitle>Novo Documento</DialogTitle>
                    <DialogDescription>
                        Documentos aceitos <strong>PDF, XLS, JPG, PNG, DOC </strong> e o total de upload aceito no máximo de <strong>1MB</strong>.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col px-4 sm:px-2">
                    {/* Renderização condicional baseada em selectedFiles */}
                    {selectedFiles && (
                        <>
                            {/* Mapeamento dos arquivos selecionados */}
                            {selectedFiles.map((file, index) => (
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
                <div className='w-full flex items-center justify-between  gap-2'>
                <ProgressBar progress={uploadProgressStore.progress}/>
                <span className='text-[12px] font-bold'>{uploadProgressStore.progress}%</span>
                </div>
                <DialogFooter>
                    <label className="flex items-center justify-center gap-2 px-4 h-[38px] rounded-md border hover:bg-gray-100 duration-500">
                        <GoUpload />
                        <span className="text-base leading-normal">Selecione arquivos</span>
                        <input {...getInputProps()} />
                    </label>
                    <Button onClick={() => enviarFiles()} type="button">Efetuar Upload</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
