"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useEffect, useState } from "react";






export function BreadcrumbWithCustomSeparator() {
  const [isPathArray, setIsPathArray] = useState<string[]>([])

  function getAllPaths(url: string): string[] {
    // Cria uma instância da classe URL a partir da string fornecida
    const parsedUrl = new URL(url);

    // Obtém o pathname, que contém a parte do caminho da URL
    const pathname = parsedUrl.pathname;

    // Divide o pathname em partes, separando pelos "/"
    const paths = pathname.split('/').filter(part => part.length > 0);

    return paths;
  }


  useEffect(() => {
    const url = window.location.href;
    const paths = getAllPaths(url);
    setIsPathArray(paths)
  }, [])




  return (
    <Breadcrumb>
      <BreadcrumbList>
      <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
        {
          isPathArray.map((e,i) => (
            
            <div key={i} className="flex items-center gap-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${isPathArray[0]}/${isPathArray[0]==e ? "":e}`}>
                  {e}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
