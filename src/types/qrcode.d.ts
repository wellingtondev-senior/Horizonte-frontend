export interface QrcodeResponse {
    statusCode: number;
    message: Qrcode[];
  }
  
  export interface Qrcode {
    id: number;
    instanceName: string;
    qrcode: string;
    created_at: string; // Adicionado campo "created_at"
    updated_at: string; // Adicionado campo "updated_at"
  }