"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ClientsCard } from "./card";
import { ClientsProps } from "@/types/dashboard/clients";
import { useViewMode } from "@/app/(dashboard)/_components/viewmode";

export function ViewOption({ clients }: Readonly<{ clients: ClientsProps[] }>) {
  const viewMode = useViewMode((state) => state.viewMode);

  const returnViewMode = {
    card: <ViewModelCard clients={clients} />,
    list: <>a</>,
  };

  return <div className="flex flex-col gap-1">{returnViewMode[viewMode]}</div>;
}

function ViewModelCard({ clients }: Readonly<{ clients: ClientsProps[] }>) {
  return (
    <ScrollArea className="max-h-[600px] overflow-y-auto">
      <div className="grid h-min max-h-[750px] gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {clients.map((client, index) => (
          <ClientsCard key={index} {...client} />
        ))}
      </div>
    </ScrollArea>
  );
}
