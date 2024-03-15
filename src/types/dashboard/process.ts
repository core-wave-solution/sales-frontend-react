import { ProcessState } from "@/enum/dashboard/process";

export type ProcessTypeProps = {
  title: string;
};

export type ProcessProps = {
  id: string;
  title: string;
  quantity: number;
  state: ProcessState;
  status: "inTime" | "late";
};
