import { Button } from "@/components/ui/button";
import { CookiesDB } from "@/lib/cookies";
import api from "@/services/api";
import { CredenciasRequestType, CredenciasResponseType } from "@/types/credencias";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { toast } from "sonner"

async function codigo({ email, password }: CredenciasRequestType) {
  const { data } = await api.post("auth", {
    email,
    password,
  });
  return data
}

export const useCodigo = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: codigo,
    onSuccess: async (data: CredenciasResponseType) => {
      


    },
    onError: async (err) => {
      console.log("Error")
      return toast(
        <div className="w-full h-full bg-transparent p-4 rounded-lg  flex flex-col text-gray-700">
          <div className="flex items-center justify-start gap-2">
            <CiLock />
            <span className="text-gray-700 font-semibold text-[14px]">
              Error de Authenticação
            </span>
          </div>

          <span className="text-gray-700 font-normal text-[12px]">
            As credenciais estão incorretas.  {/* {`${err}`} */}
          </span>
          <div className=" flex items-center justify-end mt-4 gap-2">
            <Button className="bg-sky-600 w-auto h-[30px] text-[11px] font-normal px-2">Recuperar a Senha</Button>

            <Button className="bg-[#4CD137] w-auto h-[30px] text-[11px] font-normal px-2">Pagina Inicial</Button>
          </div>
        </div>
      )
    }
  });
}
