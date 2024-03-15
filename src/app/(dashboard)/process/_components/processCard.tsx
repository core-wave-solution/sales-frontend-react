import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProcessDetailCard } from "./detailCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProcessProps, ProcessTypeProps } from "@/types/dashboard/process";
import { ProcessState } from "@/enum/dashboard/process";

export function ProcessCard(processType: Readonly<ProcessTypeProps>) {
  const processes: ProcessProps[] = [
    {
      id: "1231223",
      title: "Hotdog Especial",
      quantity: 1,
      state: ProcessState.PROGRESS,
      status: "late",
    },
    {
      id: "1233435",
      title: "Hotdog Especial",
      quantity: 2,
      state: ProcessState.PROGRESS,
      status: "inTime",
    },
    {
      id: "12354566",
      title: "Hotdog Especial",
      quantity: 1,
      state: ProcessState.PROGRESS,
      status: "inTime",
    },
  ];

  const total = processes.length;
  const showing = processes.slice(0, 2);
  return (
    <Card className="flex h-full flex-col overflow-hidden p-3">
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-col">
          <CardTitle>{processType.title}</CardTitle>
          <CardDescription>
            Mostrando {showing.length} de {total}
          </CardDescription>
        </div>
        <Badge>{total} em fila</Badge>
      </CardHeader>

      <ScrollArea className="my-auto h-full max-h-96">
        <CardContent className=" flex flex-col gap-6">
          {showing.map((process, index) => (
            <ProcessDetailCard {...process} key={index} />
          ))}
        </CardContent>
      </ScrollArea>

      <CardFooter className="mt-auto flex flex-row items-center justify-between gap-3">
        <Badge variant="destructive">
          {processes.filter((process) => process.status === "late").length} em
          atraso
        </Badge>
        <Button variant="link">Ver Mais</Button>
      </CardFooter>
    </Card>
  );
}
