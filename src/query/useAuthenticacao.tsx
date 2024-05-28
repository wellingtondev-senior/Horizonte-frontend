import { Button } from "@/components/ui/button";
import { encodeBase64 } from "@/lib/codificarMD5";
import { CookiesDB } from "@/lib/cookies";
import api from "@/services/api";
import { CredenciasRequestType, CredenciasResponseType } from "@/types/credencias";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { toast } from "sonner";

async function authenticacao({ email, password }: CredenciasRequestType) {
  const { data } = await api.post("/auth", { email, password });
  return data;
}

export const useAuthenticacao = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  
  return useMutation({
    mutationFn: authenticacao,
    onSuccess: async (data: CredenciasResponseType) => {
      const { role, active, access_token, user } = data.message;
      CookiesDB.set("jwt-secret", access_token);
      
      let redirectPath = "";
      let toastMessage = "Autenticado com sucesso";

      switch (role) {
        case "CLIENTE":
          if (active) {
            redirectPath = "/cliente";
          } else {
            const codigo = encodeBase64(user[0].userId);
            redirectPath = `/cliente/activate/${codigo}`;
          }
          break;
        case "COLABORADOR":
          toastMessage = "Autenticado com sucesso Colaborador";
          redirectPath = "/colaborador";
          break;
        case "DIRETOR":
        case "MASTER":
          toastMessage = "Autenticado com sucesso Diretor";
          redirectPath = "/diretoria";
          break;
        default:
          throw new Error("Role not recognized");
      }

      toast(
        <div className="w-full h-full bg-transparent p-4 rounded-lg shadow-lg flex flex-col text-gray-600">
          <div className="flex items-center justify-start gap-2">
            <CiLock className="fill-green-600" />
            <span className="text-gray-700 font-semibold text-[14px]">
              {toastMessage}
            </span>
          </div>
          <span className="text-gray-500 font-normal text-[12px]">
            aguarde o redirecionamento
          </span>
          <div className="flex items-center justify-end mt-4 gap-2">
            <Button className="bg-[#4CD137] w-auto h-[30px] text-[11px] font-normal px-2">
              Pagina Inicial
            </Button>
          </div>
        </div>
      );
      router.replace(redirectPath);
    },
    onError: async (err) => {
      console.error("Error", err);
      toast(
        <div className="w-full h-full bg-transparent p-4 rounded-lg flex flex-col text-gray-700">
          <div className="flex items-center justify-start gap-2">
            <CiLock className="fill-red-600" />
            <span className="text-gray-700 font-semibold text-[14px]">
              Erro de Autenticação
            </span>
          </div>
          <span className="text-gray-700 font-normal text-[12px]">
            As credenciais estão incorretas.
          </span>
        </div>
      );
    }
  });
};
