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

const COMBO = {
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
  const [open, setOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const userRole = authContext.isUser?.role || null;
  const [value, setValue] = useState("");
  const [isOption, setIsOption] = useState<{ value: string; label: string }[]>(
    []
  );
  useEffect(() => {
    if (userRole) {
      authContext.vereficSession()
      setValue(userRole.toLocaleLowerCase());
      console.log(userRole)
      setIsOption(COMBO[userRole]);
    }
  }, [userRole]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? isOption.find((option) => option.value === value)?.label
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
              {isOption.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
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
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
