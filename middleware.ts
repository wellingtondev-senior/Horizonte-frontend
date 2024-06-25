import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from 'jose';
import { ENV } from "./src/config/env";
import { VereficSession } from "@/lib/vereficSession";
import { CredenciasRetorno } from "@/types/credencias";
import { Role } from "@/enums/role.enum";

type AccessMap = { [key in Role]: string[] };

const gestorAcesso = (role: Role, path: string): boolean => {
  const pathArray = path.split("/");

  const accessMap: AccessMap = {
    DIRETOR: ['/diretor', '/colaborador', '/cliente'],
    MASTER: [`/diretor`],
    COLABORADOR: [`/colaborador`, `/cliente`],
    CLIENTE: [`/cliente`],
  };

  return accessMap[role]?.includes(`/${pathArray[1]}`) ?? false;
};

export async function middleware(req: NextRequest) {
  const tokenMaster = cookies().get("jwt-secret");

  const publicPaths = [
    '/(auth)',
    '/cliente/registro',
    '/cliente/activate'
  ];

  if (publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (tokenMaster?.value) {
    try {
      const user: CredenciasRetorno = await VereficSession.isTokenVerefic(tokenMaster.value);

      if (gestorAcesso(user.role, req.nextUrl.pathname)) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL('/u', req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/u', req.url));
    }
  } else {
    return NextResponse.redirect(new URL('/u', req.url));
  }
}

export const config = {
  matcher: [
    "/cliente/:path*",
    "/colaborador/:path*",
    "/diretor/:path*"
  ]
};
