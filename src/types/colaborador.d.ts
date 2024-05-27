export interface ColaboradorRequest {
    nome: string;
    telefone: string;
    email: string;
    cargo: string;
    diretorId: number;
  }
  export interface ColaboradorType {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    cargo: string;
    create_at: string;
    update_at: string;
    diretorId: number;
    userId: number;
  }
 
  export interface ColaboradorResponse {
    statusCode: number;
    message: ColaboradorType[];
  }
  