import { DocumentosType } from "@/enums/documento.enum";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";



interface TipoDumentoIconProps {
    tipo:DocumentosType
}



const TipoDumentoIcon = ({tipo}:TipoDumentoIconProps) => {

     switch (tipo) {
        case DocumentosType.PDF:
            return (<BsFileEarmarkPdf className="fill-red-500 w-6 h-6"/>)
            
     
        default:
            return (<FaFile/>)
     }




    return (
        <div>
            Enter
        </div>
    );
}

export default TipoDumentoIcon;