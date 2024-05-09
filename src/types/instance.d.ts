export type InstanceOriginResponseType = {
    statusCode: number;
    message: InstanceType[] 
  };

  export type InstanceConnectResponseType = {
    statusCode: number;
    message: ConnectType
  };
  
  export type InstanceType = {
    id: number;
    instanceName: string;
    idusuarioAdmin: number;
    token_jwt: string;
    active: boolean;
    state: string;
    create_at: string;
    update_at: string;
  }

  export type ConnectType = {
    
      code: string;
      base64: string;
    
  }

  export type InstanceRequest = {
    provider?:string
    instanceName?:string,
    idusuario?:number
  }