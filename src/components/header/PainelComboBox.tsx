"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/navigation";
import { Role } from "@/enums/role.enum";
import useAccount from "@/hook/useAccount";

interface ICombo {
  CLIENTE: { value: string; label: string }[],
  COLABORADOR: { value: string; label: string }[],
  DIRETOR: { value: string; label: string }[],
  MASTER: { value: string; label: string }[],
}

const COMBO: ICombo = {
  CLIENTE: [{ value: "cliente", label: "Gestor Cliente" }],
  COLABORADOR: [
    { value: "cliente", label: "Gestor Cliente" },
    { value: "colaborador", label: "Gestor Colaborador" },
  ],
  DIRETOR: [
    { value: "cliente", label: "Gestor Cliente" },
    { value: "colaborador", label: "Gestor Colaborador" },
    { value: "diretor", label: "Gestor Diretoria" },
    { value: "master", label: "Gestor Master" },
  ],
  MASTER: [{ value: "master", label: "Gestor Master" }],
};

export function PainelComboBox() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const account  = useAccount();
  const [value, setValue] = useState<string>("");
  const [isOption, setIsOption] = useState<{ value: string; label: string }[]>([]);


  
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
    
    if (account.isUser?.role) {
      const role = paths[0]?.toUpperCase() as Role;
      if (role && COMBO[role]) {
        setValue(paths[0]);
        setIsOption(COMBO[account.isUser?.role]);
      } 
    }
  }, [account.isUser?.role]);

  return (
    <div className="max-sm:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value !== ""
              ? isOption?.find((option) => option.value === value)?.label || "Selecione o Gestor..."
              : "Selecione o Gestor..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Buscar gestor..." />
            <CommandList>
              <CommandEmpty>Nenhum gestor encontrado.</CommandEmpty>
              <CommandGroup>
                {
                  account.isUser?.role ?
                  COMBO[account.isUser?.role].map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        router.push(`/${currentValue}`);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  )):
                  <CommandItem
                  value={'CLIENTE'}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    router.push(`/${currentValue}`);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === "CLIENTE" ? "opacity-100" : "opacity-0"
                    )}
                  />
                  Gestor Cliente
                </CommandItem>
                }
               
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
