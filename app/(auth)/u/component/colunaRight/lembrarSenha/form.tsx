"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons/Icons"
import { CredenciasRequestType } from "@/types/credencias"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuthenticacao } from "@/query/useAuthenticacao"
import Spinner from "@/components/Spinner"
import Link from "next/link"
import { GoEyeClosed, GoEye } from "react-icons/go";
import { Toaster } from "sonner"
import usePageStore, { usePageStoreProps } from "@/store/usePageStore"
import { PageState } from "@/enums/page.enum"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function LembrarSenhaForm({ onClick , className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);
  const pageStore = usePageStore((state:usePageStoreProps)=>state)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredenciasRequestType>()
  const authenticacao = useAuthenticacao();

  const onSubmit: SubmitHandler<CredenciasRequestType> = (data) => {
    const { email, password } = data
    authenticacao.mutate({ email, password })
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form className="px-20 max-lg:px-4 py-10 flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email@email.com"
                className="w-full rounded-lg border-transparent focus:border-none focus:border-transparent focus:outline-none focus:ring-0 ring-0 rounded-r-lg px-2 h-[40px]"
                autoFocus
              />
            </div>
            {errors.email && <span className="ml-2 text-[11px] text-red-600" >email error</span>}
          </div>

          <div>
            
          </div>
        </div>
        <Button type="submit" className="w-full bg-[#F98E1B] rounded-full h-[40px]">
          {
            authenticacao.isPending ? <Spinner /> : <span className="font-bold tracking-[0.2px] text-[16px]">Enviar Link</span>
          }
        </Button>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2 items-center">
            <span className="text-[14px] text-gray-700 font-bold">Você não tem conta?</span>
            <Button type="button" onClick={()=>pageStore.setPage(PageState.REGISTRO, 1)} variant="ghost" className="text-[14px] text-[#F98E1B] font-bold hover:bg-transparent">Efetuar cadastro</Button>
          </div>
        </div>
      </form>
      <Toaster/>
    </div>
  )
}