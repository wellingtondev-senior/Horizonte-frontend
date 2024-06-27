"use client"
import api from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import ToastComponent from "@/components/Toast";
import { AreaResponse } from "@/types/areas";



async function create({ nome}: {nome:string}) {
  const { data } = await api.post("/areas/create", {nome});
  return data
}

async function update() {
  const { data } = await api.patch("");
  return data
}
async function remove({id}:{id:number}) {
  const { data } = await api.delete(`/areas/${id}`);
  return data
}

async function findAll() {
    const { data } = await api.get<AreaResponse>("/areas/all");
    return data
  }


  export const useQueryAreasFindAll = () => {
    return useQuery({
      queryKey: ['queryAreasFindAll'],
      queryFn: findAll,
      refetchOnWindowFocus:false,
      staleTime:10 * 60 * 1000,
      refetchInterval:10 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      
      
    });
  };

export const useQueryAreasCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: create,
    onSuccess: async () => {
      toast(<ToastComponent error={false} title="Nova Area do projeto" description="Cadastro com sucesso"/>)
      await queryClient.invalidateQueries({
        queryKey: ['queryAreasFindAll']
    });
    },
    onError: async (err) => {
      return toast(<ToastComponent error={true} title="Erro no Cadastro" description="Erro ao criar novo Provedor"/>)
    }
  });
}
export const useQueryAreasRemove = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: remove,
    onSuccess: async () => {
      toast(<ToastComponent error={false} title="Area removida" description="Removido com sucesso"/>)
      await queryClient.invalidateQueries({
        queryKey: ['queryAreasFindAll']
    });
    },
    onError: async (err) => {
      return toast(<ToastComponent error={true} title="Erro no Delete" description="Erro ao deletar novo Provedor"/>)
    }
  });
}
export const useQueryProvedorUpdate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: update,
    onSuccess: async (data: any) => {
      toast(<ToastComponent error={false} title="Provedor Atualizado" description="Atualização efetuada"/>)
    },
    onError: async (err) => {
      return toast(<ToastComponent error={true} title="Provedor Error" description="Error ao atualizar"/>)
    }
  });
}
