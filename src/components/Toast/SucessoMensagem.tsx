import { MdOutlineMarkEmailRead } from "react-icons/md";

interface ISucesso {
    title:string
    description:string
}

const SucessoMensagem = ({title, description}:ISucesso) => {
    return (
        <div className="w-full h-full bg-tranparente rounded-lg flex flex-col text-white">
            <div className="flex items-center justify-start gap-2">
                <MdOutlineMarkEmailRead className="fill-green-600" />
                <span className="text-gray-700 font-semibold text-[14px]">
                    {title}
                </span>
            </div>

            <span className="text-gray-500 font-normal text-[12px]">
                {description}
            </span>

        </div>
    );
}

export default SucessoMensagem;