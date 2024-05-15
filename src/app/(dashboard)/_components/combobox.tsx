"use client";

import { Combobox } from "@/components/dashboard/combobox";
import { ComboboxItemsProps } from "@/types/components/combobox";
import { Category } from "@/types/dashboard/category";
import { FilterCategoryState } from "@/types/states/filtercategory-state";
import { create } from "zustand";

export const useFilterCategory = create<FilterCategoryState>()((set) => ({
  filterCategory: "",
  setFilterCategory: (mode: string) => set(() => ({ filterCategory: mode })),
}));

export function DashboardCombobox({ categories }: { categories: Category[] }) {
  const filterCategory = useFilterCategory((state) => state.filterCategory);
  const updateFilterCategory = useFilterCategory(
    (state) => state.setFilterCategory,
  );
  const comboboxItems: ComboboxItemsProps[] = Array.isArray(categories)
    ? categories.map((category) => ({
        id: category.id,
        value: category.value,
        label: category.label,
      }))
    : [];

  return (
    <Combobox
      title="Categoria"
      label="Selecione uma Categoria"
      placeholder="Buscar Categoria..."
      empty="Nenhuma Categoria encontrada"
      items={comboboxItems}
      value={filterCategory}
      setValue={updateFilterCategory}
      className="w-[230px]"
    />
  );
}
