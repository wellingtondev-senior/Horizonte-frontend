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



async function create({ nome, provedor, userId, limiteArmazenamento }: ProvedorRequetType) {
  const { data } = await api.post<ProvedorResponseType>("/provedores/create", {
    nome, provedor, userId, limiteArmazenamento
  });
  return data
}

async function update(provedores:Provedor[]) {
  const { data } = await api.patch<ProvedorResponseType>("/provedores", provedores);
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
      refetchOnWindowFocus:false,
      staleTime:10 * 60 * 1000,
      refetchInterval:10 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      
    });
  };

export const useQueryProvedorCreate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: create,
    onSuccess: async (data: ProvedorResponseType) => {
      toast(<ToastComponent error={false} title="Novo Provedor" description="Cadastro com sucesso"/>)
    },
    onError: async (err) => {
      return toast(<ToastComponent error={true} title="Erro Provedor" description="Erro ao criar novo Provedor"/>)
    }
  });
}

export const useQueryProvedorUpdate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: update,
    onSuccess: async (data: ProvedorResponseType) => {
      toast(<ToastComponent error={false} title="Provedor Atualizado" description="Atualização efetuada"/>)
    },
    onError: async (err) => {
      return toast(<ToastComponent error={true} title="Provedor Error" description="Error ao atualizar"/>)
    }
  });
}
