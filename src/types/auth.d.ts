export type AuthRequestType = {
  email:string,
  password:string
}

export interface AuthResponse {
  statusCode: number;
  message: {
    id: number;
    nome: string;
    email: string;
    role: string;
    access_token: string;
  };
}