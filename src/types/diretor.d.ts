export interface DiretorType {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    create_at: string;
    update_at: string;
    userId: number;
  }
  
  export interface User {
    email: string;
    create_at: string;
    update_at: string;
    role: string;
    active: boolean;
    user: DiretorType[];
  }
  
 export  interface ApiResponse {
    statusCode: number;
    message: User;
  }
  