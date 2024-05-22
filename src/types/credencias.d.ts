import { Role } from "@/enums/role.enum";

export type CredenciasRequestType = {
  email:string,
  password:string
}

export interface CredenciasResponseType {
  statusCode: number;
  message: CredenciasRetorno;
}

export interface CredenciasRetorno {
  email: string;
  create_at: string;
  update_at: string;
  role: Role;
  active:boolean;
  access_token: string;
  user: User[];
}