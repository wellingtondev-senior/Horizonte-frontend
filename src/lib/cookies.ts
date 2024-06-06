import { ENV } from '@/config/env';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const CookiesDB = {
   set:(nameCookie:string, data:{} | [])=>{
      const parseData = JSON.stringify(data)
      Cookies.set(nameCookie, parseData, { expires: 1/12 });
     

      
   },
   get:(nameCookie:string)=>{
      const token: string | undefined = Cookies.get(nameCookie);
      if(token){
         const parseToken = JSON.parse(token)
         return parseToken
      }else{
         return undefined
      }
    
   },
   delete:(nameCookie:string)=>{
      Cookies.remove(nameCookie);
   },
   parseCookie:(nameCookie:string)=> {
      const token = CookiesDB.get(nameCookie);
      if(token && ENV.JWTKEY){
         const decodedToken = jwt.verify(token, ENV.JWTKEY);
         return decodedToken
      }else{
         return {}
      }
   }
}

export {
   CookiesDB 
}


