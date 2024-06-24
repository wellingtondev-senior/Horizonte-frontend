"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ToastComponent from "@/components/Toast";
import apiUpload from "@/services/upload";
import FormData from 'form-data';
import { AxiosProgressEvent } from "axios";
import useUploadProgressStore from "@/store/useUploadProgress";
import { DocumentoResponse } from "@/types/documentos";

// Type for the progress event
type ProgressEventType = {
    loaded: number;
    total: number;
};

//UPLOAD DE NOVOS DOCUMENTOS (PDF, TEXT, JPG)
async function create(files: File[], setProgress: (progress: number) => void) {
    const formData = new FormData();
    files.forEach((file) => {
        formData.append('files', file);
    });

    const { data } = await apiUpload.post("/documentos/create", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            setProgress(percentCompleted); // Update the progress in the store
        },
    });

    return data; // Return the response data
}

export const useQueryDocumentoCreate = () => {
    const queryClient = useQueryClient();
    const { setProgress } = useUploadProgressStore((state) => state);

    return useMutation({
        mutationFn: (files: File[]) => create(files, setProgress),
        onSuccess: async (data: any) => {
            // Display success toast
            toast(
                <ToastComponent
                    error={false}
                    title="Novo Documento"
                    description="Cadastro com sucesso"
                />
            );
            // Invalidate and refetch relevant queries
            await queryClient.invalidateQueries({ queryKey: ['queryDocumentoFindAll'] });
        },
        onError: async (err: any) => {
            // Display error toast
            console.log(err.message);
            toast(
                <ToastComponent
                    error={true}
                    title="Erro Documento"
                    description="Erro ao criar novo Documento"
                />
            );
        },
    });
};

//LISTA TODOS OS DOCUMENTOS QUE FORAM FEITOS UPLOAD (PDF, TEXT, JPG)
async function documentosFindAll() {
    const { data } = await apiUpload.get<DocumentoResponse>("/documentos");
    return data;
}

export const useDocumentosFindAll = () => {
    return useQuery({
        queryKey: ['queryDocumentoFindAll'],
        queryFn: documentosFindAll,
    });
};

//DELETA O DOCUMENTO PASSANDO LISTA DE NOMES DE DOCUMENTOS E LISTA DE IDs
async function documentosDelete({nomeDocumento, ids}:{nomeDocumento: string[], ids: number[]}) {
    const { data } = await apiUpload.delete("/documentos/delete", {
        data: { nomeDocumento, ids }
    });
    return data;
}

export const useDocumentosDelete = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: documentosDelete,
        onSuccess: async (data: any) => {
            toast(
                <ToastComponent
                    error={false}
                    title="Documento Deletado"
                    description="Documento deletado com sucesso"
                />
            );
            await queryClient.invalidateQueries({ queryKey: ['queryDocumentoFindAll'] });
        },
        onError: async (err: any) => {
            console.log(err.message);
            toast(
                <ToastComponent
                    error={true}
                    title="Erro Deleção"
                    description="Erro ao deletar Documento"
                />
            );
        },
    });
};
