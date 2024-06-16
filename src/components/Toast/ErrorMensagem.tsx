import { RiSignalWifiErrorFill } from "react-icons/ri";

interface ISucesso {
    title:string
    description:string
}


const ErrorMensagem = ({title, description}:ISucesso) => {
    return (
        <div className="w-full h-full bg-transparent p-4 rounded-lg  flex flex-col text-gray-700">
        <div className="flex items-center justify-start gap-2">
          <RiSignalWifiErrorFill className="fill-red-600" />
          <span className="text-gray-700 font-semibold text-[14px]">
            {title}
          </span>
        </div>

        <span className="text-gray-700 font-normal text-[12px]">
          {description}
        </span>

      </div>
    );
}

export default ErrorMensagem;