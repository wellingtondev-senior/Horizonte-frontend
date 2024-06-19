"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ToastComponent from "@/components/Toast";
import apiUpload from "@/services/upload";
import FormData from 'form-data';
import { AxiosProgressEvent } from "axios";



type ProgressEventType = {
    loaded: number;
    total: number;
};




async function create(files: File[]) {
    const formData = new FormData();

    // Adicionar cada arquivo ao FormData
    files.forEach((file) => {
        formData.append('files', file);
    });
    const { data } = await apiUpload.post("/documentos/create" , formData, {
        
        headers: {
            'Content-Type': 'multipart/form-data',
        },  
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            console.log('Progresso:', percentCompleted);
            // Aqui você pode atualizar o estado de progresso, se necessário
        },
    });
    return data
  }
  

export const useQueryDocumentoCreate = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: create,
        onSuccess: async (data: any) => {
            console.log("sucesso")
            toast(<ToastComponent error={false} title="Novo Documento" description="Cadastro com sucesso" />);
            // Optionally invalidate and refetch relevant queries
            await queryClient.invalidateQueries({
                queryKey: ['queryDocumentoFindAll']
            });
        },
        onError: async (err: any) => {
            console.log(err)
            toast(<ToastComponent error={true} title="Erro Documento" description="Erro ao criar novo Documento" />);
        }
    });
};
