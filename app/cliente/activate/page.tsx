"use client"
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { BsSend } from "react-icons/bs";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useEffect, useState } from "react";

const ActivatePage = () => {
    const [isCodigo, setIscodigo] = useState<string>("")


    const enviarCodigo = (codigo: string) => {
        if (codigo.length >= 6) {
            console.log("codigo enviado")
        }
    }

    const reenviar = ()=>{
        
    }

    useEffect(() => {
        enviarCodigo(isCodigo)
    }, [isCodigo])


    return (
        <section className="w-full min-h-screen  overflow-y-auto">
            <div className="w-full h-[50vh] bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center">
                <div className="absolute top-[15vh] w-[400px] max-lg:w-[400px] max-md:w-[96%] h-auto bg-white rounded-lg shadow-lg">
                    <Logo className={"w-[300px]"} imageName={""} />
                    <div className="px-10 py-10 flex flex-col gap-10">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col items-center">
                                <span className="font-bold text-[18px] text-gray-700">Confirmação de Email</span>
                                <span className=" text-[14px] text-gray-500">Enviamos um email para <strong> (wrm.....)</strong> com código de verificação de titularidade </span>
                            </div>
                            <div className=" flex items-center justify-between gap-2">
                                <InputOTP maxLength={6} onChange={(e) => setIscodigo(e)}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <Button type="button">
                                    <BsSend />
                                </Button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-[#F98E1B]">
                            <span>Confirme Email</span>
                        </Button>

                    </div>
                </div>

            </div>
            <Toaster />
        </section>
    );
}

export default ActivatePage;