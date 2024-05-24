import { Button } from "@/components/ui/button";
import { CookiesDB } from "@/lib/cookies";
import api from "@/services/api";
import { CredenciasRequestType, CredenciasResponseType } from "@/types/credencias";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import { ColaboradorResponse } from "@/types/colaborador";
type CodigoSetType = {
  userId: number,
  codigo?: number
}

async function codigoSet({ userId, codigo }: CodigoSetType) {
  const { data } = await api.post("/colaborador/create", {
    userId,
    codigo,
  });
  return data
}

async function colaboradorFindAll() {
  const { data } = await api.get<ColaboradorResponse>("/colaborador/all");
  return data
}


export const useColaboradorCreate= () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: codigoSet,
    onSuccess: async (data: CredenciasResponseType) => {
      toast(
        <div className="w-full h-full bg-tranparente rounded-lg flex flex-col text-white">
          <div className="flex items-center justify-start gap-2">
            <MdOutlineMarkEmailRead className="fill-green-600" />
            <span className="text-gray-700 font-semibold text-[14px]">
              Codigo Vereficado
            </span>
          </div>

          <span className="text-gray-500 font-normal text-[12px]">
            Sucesso, aguarde o redirecionamento
          </span>

        </div>
      )

      router.replace("/cliente")
    },
    onError: async (err) => {
      console.log("Error")
      return toast(
        <div className="w-full h-full bg-transparent p-4 rounded-lg  flex flex-col text-gray-700">
          <div className="flex items-center justify-start gap-2">
            <RiSignalWifiErrorFill className="fill-red-600" />
            <span className="text-gray-700 font-semibold text-[14px]">
              Còdigo Error
            </span>
          </div>

          <span className="text-gray-700 font-normal text-[12px]">
            Código incorreto
          </span>

        </div>
      )
    }
  });
}


export const useColaboradorFindAll = () => {
    return useQuery({
      queryKey: ['colaboradorFindAll'],
      queryFn: colaboradorFindAll,
      staleTime: 1000*60*5,
      refetchInterval: 1000*60*5,
      
      
    });
  };