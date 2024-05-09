import Cookies from 'js-cookie';



export const VereficSession = {
    isTokenVerefic: (token: string | undefined) => {
        if (token) {
          const arrPayload = token.split('.')[1]
          const bufferPayload = Buffer.from(arrPayload, "base64")
          const toStringToken = bufferPayload.toString("utf8");
          const payload = JSON.parse(toStringToken)
          return payload;
        }
    
    
      },
      validaTimeToken: (exipeIn: number) => {
        const exprira = Math.floor(Date.now() / 1000) + exipeIn;
        return exprira;
      },
      isTokenExpire: (payload: any) => {
        const timeStamp = Math.floor(Date.now() / 1000);
        return timeStamp > payload;
      }
    
    
}