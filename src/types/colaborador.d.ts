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
  
  export interface UserResponse {
    email: string;
    create_at: string;
    update_at: string;
    role: string;
    active: boolean;
    user: Colaborador[];
  }
  
  export interface ColaboradorResponse {
    statusCode: number;
    message: User;
  }
  