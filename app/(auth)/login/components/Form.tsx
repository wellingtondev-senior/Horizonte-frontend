"use client"
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuthenticacao } from "@/hook/useAuthenticacao";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";


const Form = () => {
    const router = useRouter();
    const authenticacao = useAuthenticacao();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data: any) => {
        const { email, password } = data
        if (email && password) {
            authenticacao.mutate({ email, password });
        } else {
            toast(
                <div className="w-full h-full bg-[#20003B] p-4 rounded-lg shadow-lg flex flex-col text-white">
                    <div className="flex items-center justify-start gap-2">
                        <CiLock />
                        <span className="text-white font-semibold text-[14px]">
                            Error de Authenticação
                        </span>
                    </div>

                    <span className="text-white font-normal text-[12px]">
                        Os dados não existem, tente novamente
                    </span>
                    <div className=" flex items-center justify-end mt-4 gap-2">
                        <Button className="bg-sky-600 w-auto h-[30px] text-[11px] font-normal px-2">Recuperar a Senha</Button>

                        <Button className="bg-[#4CD137] w-auto h-[30px] text-[11px] font-normal px-2">Pagina Inicial</Button>
                    </div>
                </div>
            )
        }
    }




    const [isView, setIsView] = useState<boolean>(false);
    return (
        <section className="w-full h-screen flex items-center justify-center max-lg:p-10">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-b from-[#20003B] to-[#15071f]  border-[1px] border-[#200e30] w-[400px] max-lg:w-full h-auto max-lg:p-2 p-10 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="pt-10">
                    <span className="text-[12px] text-gray-300">
                        Proteja suas contas online com  <span className="font-bold text-[#4CD137]">two-factor authentication</span> segurança extra e tranquilidade garantida.
                    </span>
                </div>
                <div className="pt-10 pb-2 flex flex-col gap-4">
                    <Input
                        {...register("email", { required: true })}
                        type="email"
                        className={`"text-gray-300 text-[18px] w-full h-[50px] bg-[#15071f]  focus-visible:outline-none focus-visible:border-tranparent  focus-visible:ring-0 ${errors.email ? "border-red-600" : "border-[#1f0f2b]"}`}
                        placeholder="Email"
                        autoFocus />
                    <div className={`h-[50px] flex items-center justify-between bg-[#15071f] border-[1px] border-[#1f0f2b] rounded-md ${errors.password ? "border-red-600" : "border-[#1f0f2b]"}`}>
                        <Input
                            {...register("password", { required: true })}
                            type={isView ? "text" : "password"}
                            className="text-gray-300 text-[18px] h-[48px] w-full border-transparent focus-visible:outline-none focus-visible:border-transparent  focus-visible:ring-0 "
                            placeholder="Password" />
                        <Button variant="ghost" onClick={() => setIsView(!isView)} className="hover:bg-transparent text-gray-300 text-[25px]">
                            {
                                isView ? <BiHide /> : <BiShowAlt />
                            }
                        </Button>
                    </div>
                    <div className="pt-2 pb-4  flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-gray-300 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Lembrar a senha
                            </label>
                        </div>
                        <Link href={""} className="text-gray-300 text-sm">Esqueci a senha</Link>
                    </div>
                </div>

                <div className="w-full">
                    <Button className="w-full bg-[#4CD137]" disabled={authenticacao.isPending}>
                    {
                                    authenticacao.isPending ?
                                        (<div className="border-t-transparent border-solid animate-spin  rounded-full border-white border-[3px] h-[20px] w-[20px]"></div>) : "Efetuar Authenticação"
                                }
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default Form;