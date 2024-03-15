import { Combobox } from "@/components/dashboard/combobox";
import { ComboboxItemsProps } from "@/types/components/combobox";

export function DashboardCombobox() {
  const itemsCombobox: ComboboxItemsProps[] = [
    {
      value: "1",
      label: "Categoria 1",
    },
    {
      value: "2",
      label: "Categoria 2",
    },
    {
      value: "3",
      label: "Categoria 3",
    },
    {
      value: "4",
      label: "Categoria 4",
    },
    {
      value: "5",
      label: "Categoria 5",
    },
  ];

  return (
    <div className="flex">
      <Combobox
        title="Categoria"
        label="Selecione uma Categoria"
        placeholder="Buscar Categoria..."
        empty="Nenhuma Categoria encontrada"
        items={itemsCombobox}
        className="w-[230px]"
      />
    </div>
  );
}
