import { DocumentosType } from "@/enums/documento.enum";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { BsFileEarmarkImage } from "react-icons/bs";

interface TipoDumentoIconProps {
    tipo:DocumentosType
}



const TipoDumentoIcon = ({tipo}:TipoDumentoIconProps) => {
     switch (tipo) {
        case DocumentosType.PDF:
            return (<BsFileEarmarkPdf className="fill-red-500 w-6 h-6"/>)
            case DocumentosType.JPEG:
            return (<BsFileEarmarkImage className="fill-gray-500 w-6 h-6"/>)
            case DocumentosType.CSV:
            return (<FaFileCsv className="fill-green-500 w-6 h-6"/>)
        default:
            return (<FaFile className="fill-gray-500 w-6 h-6"/>)
     }
}

export default TipoDumentoIcon;