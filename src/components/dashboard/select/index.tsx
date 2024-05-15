import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@/types/components/select";

export function DashboardSelect({
  onChangeValue,
  defaultValue,
  selectOptions,
}: Readonly<SelectProps>) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChangeValue}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Selecionar visualização" />
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map((selectOption, index) => (
          <SelectItem key={index} value={selectOption.value}>
            {selectOption.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
