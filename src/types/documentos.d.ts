import { Provedor } from "./provedor";




  interface Documento {
    id: number;
    nome: string;
    url: string;
    tamanho: number;
    tipo: string;
    create_at: string; // Consider using Date if you prefer date objects
    update_at: string; // Same as above
    provedorId: number;
    provedor: Provedor; // Nested Provedor interface
  }
  
  export interface DocumentoResponse {
    statusCode: number;
    message: Documento[];
  }
  