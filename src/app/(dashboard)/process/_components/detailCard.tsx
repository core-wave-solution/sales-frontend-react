import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ProcessButton } from "./processButton";
import { ProcessProps } from "@/types/dashboard/process";

export function ProcessDetailCard({
  id,
  quantity,
  state,
  status,
  title,
}: Readonly<ProcessProps>) {
  return (
    <Card className="flex h-full flex-col p-3">
      <CardHeader className="h-full w-full space-y-0 rounded-sm bg-hotdog-pattern bg-cover bg-center" />
      <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-1">
        <div className="flex flex-col">
          <CardDescription className="text-xs"># {id}</CardDescription>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <div className="flex gap-1">
          <p className="text-sm text-gray-800">Quantidade</p>
          <Badge variant="outline">{quantity}</Badge>
        </div>
      </CardHeader>
      <CardFooter>
        <ProcessButton state={state} />
      </CardFooter>
    </Card>
  );
}
