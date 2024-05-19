import { ProcessProps } from "@/types/dashboard/process";
import { DashboardCombobox } from "../../_components/combobox";
import { ProcessDetailCard } from "../_components/detailCard";
import { ProcessFocusCard } from "../_components/focusCard";
import { ProcessState } from "@/enum/dashboard/process";

export default function Page() {
  const processes: ProcessProps[] = [
    {
      id: "1231223",
      title: "Hotdog Especial",
      quantity: 1,
      state: ProcessState.PROGRESS,
      status: "Started",
      employee_id: "1-1-1-1-1",
      group_item_id: "1-1-1-1-1",
      process_rule_id: "1-1-1-1-1",
      products: [],
    },
    {
      id: "1233435",
      title: "Hotdog Especial",
      quantity: 2,
      state: ProcessState.START,
      status: "Started",
      employee_id: "1-1-1-1-1",
      group_item_id: "1-1-1-1-1",
      process_rule_id: "1-1-1-1-1",
      products: [],
    },
    {
      id: "12354566",
      title: "Hotdog Especial",
      quantity: 1,
      state: ProcessState.START,
      status: "Started",
      employee_id: "1-1-1-1-1",
      group_item_id: "1-1-1-1-1",
      process_rule_id: "1-1-1-1-1",
      products: [],
    },
    {
      id: "12354566",
      title: "Hotdog Especial",
      quantity: 1,
      state: ProcessState.START,
      status: "Started",
      employee_id: "1-1-1-1-1",
      group_item_id: "1-1-1-1-1",
      process_rule_id: "1-1-1-1-1",
      products: [],
    },
  ];
  return (
    <>
      <DashboardCombobox />
      <section className="grid h-full w-full grid-rows-2 gap-3">
        {processes
          .filter((process) => process.state === ProcessState.PROGRESS)
          .slice(0, 1)
          .map((process) => (
            <ProcessFocusCard key={process.id} {...process} />
          ))}
        <div className="flex h-full w-full gap-3">
          {processes
            .filter((process) => process.state === ProcessState.START)
            .map((process) => (
              <ProcessDetailCard key={process.id} {...process} />
            ))}
        </div>
      </section>
    </>
  );
}
