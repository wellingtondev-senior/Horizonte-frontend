"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ToastComponent from "@/components/Toast";
import apiUpload from "@/services/upload";
import FormData from 'form-data';
import { AxiosProgressEvent } from "axios";
import useUploadProgressStore from "@/store/useUploadProgress";
import upload from "@/services/upload";
import { DocumentoResponse } from "@/types/dosumentos";

// Type for the progress event
type ProgressEventType = {
    loaded: number;
    total: number;
};

// Function to handle the file upload
async function create(files: File[], setProgress: (progress: number) => void) {
    // Access the upload progress store
   

    // Create a new FormData object
    const formData = new FormData();
    // Append each file to the FormData object
    files.forEach((file) => {
        formData.append('files', file);
    });

    // Make the API request to upload the files
    const { data } = await apiUpload.post("/documentos/create", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        // Track the upload progress
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            setProgress(percentCompleted); // Update the progress in the store
        },
    });

    return data; // Return the response data
}

// Hook for the create document mutation
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
            console.log(err.message)
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
async function documentosFindAll() {
    const { data } = await apiUpload.get<DocumentoResponse>("/documentos");
    return data
  }
  
export const useDocumentosFindAll = () => {
    return useQuery({
      queryKey: ['queryDocumentoFindAll'],
      queryFn: documentosFindAll,

    });
  };