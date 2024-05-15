import { DashboardHeaderProps } from "@/types/components/dashboard-header";
import { DashboardCombobox } from "./combobox";
import { DashboardViewMode } from "./viewmode";

export function DashboardHeader({
  categories,
  hasViewMode,
}: DashboardHeaderProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-full justify-start">
        {categories && <DashboardCombobox categories={categories} />}
      </div>

      <div className="flex justify-end">
        {hasViewMode && <DashboardViewMode />}
      </div>
    </div>
  );
}
