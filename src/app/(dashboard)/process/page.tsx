import Link from "next/link";
import { DashboardCombobox } from "../_components/combobox";
import { ProcessCard } from "./_components/processCard";
import { ProcessTypeProps } from "@/types/dashboard/process";

export default function Page() {
  const processesTypes: ProcessTypeProps[] = [
    {
      title: "Cortar Pão",
    },
    {
      title: "Rechear",
    },
    {
      title: "Prensar",
    },
    {
      title: "Embalar",
    },
  ];
  return (
    <>
      <DashboardCombobox />
      <section className="flex h-full w-full gap-3">
        {processesTypes.map((processType, index) => (
          <Link href="/process/details" key={index}>
            <ProcessCard {...processType} />
          </Link>
        ))}
      </section>
    </>
  );
}
