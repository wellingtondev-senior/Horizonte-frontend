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
import { decodeBase64 } from "@/lib/codificarMD5";
import { useCodigoSet, usesendEmailCodigo } from "@/query/useCodigo";

const ActivatePage = ({ params }: { params: { id: string } }) => {
    const [isCodigo, setIscodigo] = useState<string>("")
    const [isUserId, setIsUserId] = useState(0)
    const sendEmailCodigo = usesendEmailCodigo();
    const codigoSet = useCodigoSet()


    const enviarCodigo = (codigo: string) => {
        if (codigo.length >= 6) {
            console.log("codigo enviado")
        }
    }

    const reenviar = () => {
        sendEmailCodigo.mutate({ userId: isUserId })
    }

    useEffect(() => {
        var codigoDecodificado = decodeURIComponent(params.id);
        const codigo = decodeBase64(codigoDecodificado)
        setIsUserId(parseInt(codigo))
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
                            <Button onClick={reenviar} type="button" className="bg-orange-600 flex items-center gap-2">
                                <BsSend />
                                <span>Enviar Código</span>
                            </Button>
                            <div className=" flex items-center justify-between gap-2 bg-gray-800 p-2 rounded-lg">
                                <InputOTP maxLength={6} onChange={(e) => setIscodigo(e)}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} className="bg-white" />
                                        <InputOTPSlot index={1} className="bg-white" />
                                        <InputOTPSlot index={2} className="bg-white" />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} className="bg-white" />
                                        <InputOTPSlot index={4} className="bg-white" />
                                        <InputOTPSlot index={5} className="bg-white" />
                                    </InputOTPGroup>
                                </InputOTP>

                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[13px]">Confirmação:</span>
                            <span className="text-[13px] font-bold text-orange-600">Pendente</span>
                            <span className="text-[13px] font-bold text-green-600">Sucesso</span>
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />
        </section>
    );
}

export default ActivatePage;