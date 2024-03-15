import { Button } from "@/components/ui/button";
import { ProcessState } from "@/enum/dashboard/process";
import { FaCheck, FaPlay } from "react-icons/fa";

export function ProcessButton({ state }: Readonly<{ state: ProcessState }>) {
  const renderButton = {
    start: (
      <Button className="w-full" variant="success">
        <FaPlay className="mr-2 h-4 w-4" /> Iniciar
      </Button>
    ),
    progress: (
      <Button className="w-full" variant="destructive">
        <FaCheck className="mr-2 h-4 w-4" /> Finalizar
      </Button>
    ),
  };

  return renderButton[state];
}
