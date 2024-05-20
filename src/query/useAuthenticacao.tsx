import { Button } from "@/components/ui/button";
import { CookiesDB } from "@/lib/cookies";
import api from "@/services/api";
import { CredenciasRequestType  } from "@/types/credencias";
import { useMutation,  useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { toast } from "sonner"

async function authenticacao({ email, password }: CredenciasRequestType ) {
  const { data } = await api.post("auth", {
    email,
    password,
  });
  return data
}

export const useAuthenticacao = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: authenticacao,
    onSuccess: async (data:any) => {
      CookiesDB.set("jwt-secret", data.message.access_token);
      queryClient.invalidateQueries({ queryKey: ['authenticacao'] })
      toast(
        <div className="w-full h-full bg-[#20003B] p-4 rounded-lg shadow-lg flex flex-col text-white">
          <div className="flex items-center justify-start gap-2">
            <CiLock />
            <span className="text-white font-semibold text-[14px]">
              Autenticado com sucesso
            </span>
          </div>

          <span className="text-white font-normal text-[12px]">
            aguarde o redirecionamento
          </span>
          <div className=" flex items-center justify-end mt-4 gap-2">

            <Button className="bg-[#4CD137] w-auto h-[30px] text-[11px] font-normal px-2">Pagina Inicial</Button>
          </div>
        </div>
      )
      router.replace("/cliente")

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

