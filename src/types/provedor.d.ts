import { ProvedorEnum } from "@/enums/provedor.enum";

export interface ProvedorRequetType {
    provedor: ProvedorEnum;
    nome: string;
    userId: number;
    limiteArmazenamento: string;
  }

  export interface Provedor {
    id: number;
    status: boolean;
    create_at: string;
    update_at: string;
    provedor: ProvedorEnum;
    nome: string;
    limiteArmazenamento: string;
    userId: number;
  }
  

  
  export interface ProvedorResponseType {
    statusCode: number;
    message: Provedor[];
  }