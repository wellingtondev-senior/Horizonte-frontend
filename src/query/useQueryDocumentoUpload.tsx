"use client"
import { Button } from "@/components/ui/button";
import { CookiesDB } from "@/lib/cookies";
import api from "@/services/api";
import { CredenciasRequestType, CredenciasResponseType } from "@/types/credencias";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import ToastComponent from "@/components/Toast";
import { Provedor, ProvedorRequetType, ProvedorResponseType } from "@/types/provedor";
import { AxiosRequestConfig } from "axios";

type ProgressEventType = {
    loaded: number;
    total: number;
};


async function create({ files }: any) {
    const { data } = await api.post("/documentos/create", {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        // Configuração do progresso do upload
        onUploadProgress: (progressEvent: ProgressEventType) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log('Progresso:', percentCompleted);
            // Aqui você pode atualizar o estado de progresso, se necessário
        },
    });
    return data
}


async function queryProvedorFindAll() {
    const { data } = await api.get<ProvedorResponseType>("/provedores/all");
    return data
}


export const useQueryProvedorFindAll = () => {
    return useQuery({
        queryKey: ['queryProvedorFindAll'],
        queryFn: queryProvedorFindAll,
        refetchOnWindowFocus: false,
        staleTime: 10 * 60 * 1000,
        refetchInterval: 10 * 60 * 1000,
        gcTime: 10 * 60 * 1000,

    });
};

export const useQueryProvedorCreate = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: create,
        onSuccess: async (data: ProvedorResponseType) => {
            toast(<ToastComponent error={false} title="Novo Provedor" description="Cadastro com sucesso" />)
        },
        onError: async (err) => {
            return toast(<ToastComponent error={true} title="Erro Provedor" description="Erro ao criar novo Provedor" />)
        }
    });
}

