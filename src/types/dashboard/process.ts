import { Product } from "@/app/(dashboard)/product/_components/columns";
import { ProcessState } from "@/enum/dashboard/process";
import { UUID } from "crypto";

export type ProcessTypeProps = {
  title: string;
};

export type ProcessProps = {
  id: string;
  title: string;
  quantity: number;
  state: ProcessState;

  // TODO: Fix this
  employee_id: UUID;
  group_item_id: UUID;
  process_rule_id: UUID;
  products: Product[]
  status: "Pending" | "Started" | "Finished" | "Paused" | "Continued";
};