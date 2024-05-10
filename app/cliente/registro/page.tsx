"use client"
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"




const RegistroCliente = () => {
    return (
        <section className="w-full h-screen  overflow-y-auto">
            <div className="w-full h-[50vh] bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center">
                <div className="absolute top-[10vh] w-[600px] max-lg:w-[500px] max-md:w-[96%] h-auto bg-white rounded-lg shadow-lg">
                    <Logo className="w-[300px]" imageName={""} />
                    <form className="px-10 py-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <Input
                                    type="text"
                                    placeholder="Nome Completo"
                                    className="border-none"
                                />
                            </div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <Input
                                    type="text"
                                    placeholder="CNPJ"
                                    className="border-none"
                                />
                            </div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <Input
                                    type="text"
                                    placeholder="Nome da Empresa"
                                    className="border-none"
                                />
                            </div>
                            <div className="w-full flex items-center justify-between gap-4">
                                <div className="w-full flex items-center justify-between border border-gray-200 rounded-lg">
                                    <Input
                                        type="email"
                                        placeholder="email@email.com"
                                        className="border-none w-full"
                                    />
                                </div>
                                <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                    <Input
                                        type="text"
                                        placeholder="Cargo/Função"
                                        className="border-none"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    <Button type="button" variant="ghost" className="border-none hover:bg-transparent">Aceito os termos e condições</Button>
                                </label>
                            </div>
                        </div>

                        <Button className="w-full bg-[#F98E1B]">
                            Efetuar Refgistro
                        </Button>
                        <div className="flex items-center justify-between">
                            <Link href={"/login"} className="text-[11px] text-[#F98E1B]">Efetuar login</Link>
                        </div>
                    </form>
                </div>

            </div>
        </section>

    );
}

export default RegistroCliente;