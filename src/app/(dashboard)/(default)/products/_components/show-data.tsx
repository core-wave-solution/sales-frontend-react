"use client";

import { Product } from "@/types/dashboard/product";
import { useFilterCategory } from "../../../_components/combobox";
import { DataTable } from "./data-table";
import { Columns } from "./columns";
import { useViewMode } from "../../../_components/viewmode";
import { DataCard } from "./data-card";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useDialog } from "@/hooks/useDialog";
import { CreateProductDialog } from "./product-dialog";

export function ShowData({
	products,
	columns,
}: {
	products: Product[];
	columns: typeof Columns;
}) {
	const { onOpen } = useDialog();
	const viewMode = useViewMode((state) => state.viewMode);
	const filterCategory = useFilterCategory((state) => state.filterCategory);
	let filteredProducts = products;

	if (filterCategory.length > 0) {
		filteredProducts = products.filter(
			(a) => a.category === filterCategory,
		);
	}

	const actionButton = (
		<Button className="ml-auto inline-flex" onClick={onOpen}>
			<FaPlus /> Adicionar Produto
		</Button>
	);

	const viewModeReturn = {
		card: (
			<DataCard
				columns={columns}
				data={filteredProducts}
				actionButton={actionButton}
			/>
		),
		list: (
			<DataTable
				columns={columns}
				data={filteredProducts}
				actionButton={actionButton}
			/>
		),
	};

	return (
		<>
			{viewModeReturn[viewMode]}
			<CreateProductDialog />
		</>
	);
}
