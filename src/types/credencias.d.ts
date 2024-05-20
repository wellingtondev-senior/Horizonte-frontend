export type CredenciasRequestType = {
  email:string,
  password:string
}

interface CredenciasResponseType {
  statusCode: number;
  message: Message;
}

interface Message {
  email: string;
  create_at: string;
  update_at: string;
  role: string;
  active:boolean;
  access_token: string;
  user: User[];
}