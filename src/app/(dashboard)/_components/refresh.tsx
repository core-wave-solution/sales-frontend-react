import { RefreshButton } from "@/components/refreshButton";
import { Label } from "@/components/ui/label";

export function Refresh() {
  return (
    <div className="flex items-center gap-3">
      <RefreshButton />
      <Label className="text-gray-800">atualizado em 22:09</Label>
    </div>
  );
}
