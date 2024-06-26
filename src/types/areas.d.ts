export interface Area {
    id: number;
    nome: string;
    create_at: string;
    update_at: string;
  }
  
  export interface AreaResponse {
    statusCode: number;
    message: Area[];
  }