import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from 'jose'
import { ENV } from "./config/env";


export async function middleware(req: NextRequest, res: NextResponse) {

  const tokenMaster = cookies().get("auth-jwt-secret");

  if(req.nextUrl.pathname.startsWith('/dash/auth')){
    return NextResponse.next();
  }else{
    if (tokenMaster?.value) {
      try {
        
        return NextResponse.next();
  
      } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url))
  
      }
    } else {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  

}
export const config = {
  matcher: [
    "/dash/:path*",
  ]
}

// async function validacaoHeader(req: NextRequest, res: NextResponse) {
//   if (!req.headers.get('authorization') || !req.headers.get('authorization')?.startsWith('Bearer ')) {
//     return NextResponse.json({
//       statusCode: 401,
//       message: 'authorization header null'
//     }, { status: 401 })
//   } else {
//     try {
//       const authorization = req.headers.get('authorization');
//       const tokenHeader = authorization?.replace("Bearer ", "").trim();
//       const verified = await jwtVerify(
//         tokenHeader!,
//         new TextEncoder().encode(ENV.JWTKEY)
//       )
//       if (verified) {
//         // return NextResponse.json({
//         //     statusCode: 201,
//         //     message:verified
//         // })
//         return NextResponse.next();
//       }
//       return NextResponse.json({
//         statusCode: 401,
//         message: "Sem Autorização"
//       })
//     } catch (error: any) {
//       return NextResponse.json({
//         statusCode: 401,
//         message: error.message
//       }, { status: 401 })
//     }
//   }

// }