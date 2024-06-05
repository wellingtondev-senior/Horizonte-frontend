"use client"
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import usePageStore, { usePageStoreProps } from "@/store/usePageStore";
import { PageState } from "@/enums/page.enum";




const RegistroClienteForm = () => {

    const pageStore = usePageStore((state:usePageStoreProps)=>state)


    return (

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

            <Button className="w-full bg-[#F98E1B] rounded-full font-bold text-[16px] tracking-[0.2px]">
                Efetuar Refgistro
            </Button>
            <div className="flex  items-center justify-center">
                <span className="text-[14px] text-gray-700 font-bold">Você já tem conta?</span>
                <Button type="button" onClick={() => pageStore.setPage(PageState.AUTH, 0)} variant="ghost" className="text-[14px] text-[#F98E1B] font-bold hover:bg-transparent">Efetuar Login</Button>
            </div>
        </form>
    );
}

export default RegistroClienteForm;