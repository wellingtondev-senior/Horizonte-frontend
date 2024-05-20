"use client"
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
import { CredenciasRequestType } from "@/types/credencias";
import { CookiesDB } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import { useAuthenticacao } from "@/query/useAuthenticacao";
import Spinner from "@/components/Spinner";
import { Toaster } from "@/components/ui/sonner"


const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CredenciasRequestType>()
    const authenticacao  = useAuthenticacao();

    const router = useRouter();
    const onSubmit: SubmitHandler<CredenciasRequestType> = (data) => {
        const {email, password} = data
        authenticacao.mutate({email, password})
    }





    return (

        <section className="w-full min-h-screen  overflow-y-auto">
            <div className="w-full h-[50vh] bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center">
                <div className="absolute top-[15vh] w-[400px] max-lg:w-[400px] max-md:w-[96%] h-auto bg-white rounded-lg shadow-lg">
                    <Logo className={"w-[300px]"} imageName={""} />
                    <form className="px-10 py-10 flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <div className="w-[20%] h-[40px] bg-gray-200 rounded-l-lg flex items-center justify-center"><FaUser /></div>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="email@email.com"
                                    className="w-[80%] border-transparent focus:border-none focus:border-transparent focus:outline-none focus:ring-0 ring-0 rounded-r-lg px-2 h-[40px]"
                                    autoFocus
                                />
                            </div>
                            {errors.email && <span className="ml-2 text-[11px] text-red-600" >email error</span>}
                            </div>
                            
                            <div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <div className="w-[20%] h-[40px] bg-gray-200 rounded-l-lg flex items-center justify-center"><FaKey /></div>
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    placeholder="Password"
                                    className="w-[80%] border-transparent focus:border-none focus:border-transparent focus:outline-none focus:ring-0 ring-0 rounded-r-lg px-2 h-[40px]"
                                />
                            </div>
                            {errors.password && <span className="ml-2 text-[11px] text-red-600">password error</span>}
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-[#F98E1B]">
                            {
                                authenticacao.isPending ? <Spinner/> : <span>Efetuar Login</span>
                            }
                        </Button>
                        <div className="flex items-center justify-between">
                            <Link href={"/recuperar-senha"} className="text-[11px] text-[#F98E1B]">Recuperar a senha</Link>
                            <Link href={"/cliente/registro"} className="text-[11px] text-[#F98E1B]">Efetuar cadastro</Link>
                        </div>
                    </form>
                </div>

            </div>
            <Toaster />
        </section>

    );
}

export default SignInPage;