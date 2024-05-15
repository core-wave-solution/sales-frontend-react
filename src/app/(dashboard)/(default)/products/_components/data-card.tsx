"use client";

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	actionButton?: ReactNode;
}

export function DataCard<TData, TValue>({
	columns,
	data,
	actionButton,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		{},
	);
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	const bodyColumns = ["image", "searchCode", "price", "cost", "status"];
	const translatedBodyColumns = [
		{
			id: "image",
			en: "Image",
			pt: "Imagem",
		},
		{
			id: "price",
			en: "Price",
			pt: "Preço",
		},
		{
			id: "searchCode",
			en: "Search Code",
			pt: "Código",
		},
		{
			id: "cost",
			en: "Cost",
			pt: "Custo",
		},
		{
			id: "status",
			en: "Status",
			pt: "Status",
		},
	];

	return (
		<div className="h-full w-full">
			<div className="flex items-center py-3">
				<Input
					placeholder="Filter names..."
					value={
						(table.getColumn("name")?.getFilterValue() as string) ??
						""
					}
					onChange={(event) =>
						table
							.getColumn("name")
							?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<div className="ml-auto inline-flex gap-3">{actionButton}</div>
			</div>
			<div className="grid grid-cols-5 grid-rows-2 gap-3 rounded-md">
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map((row) => {
						return (
							<Card key={row.id}>
								<CardHeader className="flex flex-row items-center justify-between gap-3">
									{row
										.getVisibleCells()
										.filter((a) =>
											[
												"check",
												"actions",
												"name",
											].includes(a.column.id),
										)
										.map((cell) => {
											if (cell.column.id === "name") {
												return (
													<CardTitle key={cell.id}>
														{flexRender(
															cell.column
																.columnDef.cell,
															cell.getContext(),
														)}
													</CardTitle>
												);
											}
											return (
												<div key={cell.id}>
													{flexRender(
														cell.column.columnDef
															.cell,
														cell.getContext(),
													)}
												</div>
											);
										})}
								</CardHeader>
								<CardContent className="grid w-full grid-cols-1 gap-1">
									{bodyColumns.map((bodyColumn, index) => {
										return (
											<div
												key={index}
												className="grid w-full grid-cols-2 grid-rows-1 gap-3"
											>
												<span className="capitalize">
													{translatedBodyColumns.map(
														(
															translatedBodyColumn,
														) => {
															if (
																translatedBodyColumn.id ===
																bodyColumn
															) {
																return translatedBodyColumn.pt;
															}
														},
													)}
												</span>
												{row
													.getVisibleCells()
													.filter(
														(a) =>
															bodyColumn ===
															a.column.id,
													)
													.map((cell) => (
														<div
															key={cell.id}
															className="text-right"
														>
															{flexRender(
																cell.column
																	.columnDef
																	.cell,
																cell.getContext(),
															)}
														</div>
													))}
											</div>
										);
									})}
								</CardContent>
							</Card>
						);
					})
				) : (
					<Card>
						<CardHeader className="flex flex-row items-center justify-between">
							<Skeleton className="h-4 w-4" />
							<Skeleton className="h-7 w-[150px]" />
							<Skeleton className="h-8 w-8" />
						</CardHeader>
						<CardContent className="flex w-full flex-col justify-center gap-3">
							<div className="flex w-full justify-between">
								<Skeleton className="h-9 w-12" />
								<Skeleton className="h-6 w-16" />
							</div>

							<div className="flex w-full items-center justify-between">
								<Skeleton className="h-6 w-16" />
								<Skeleton className="h-6 w-16" />
							</div>

							<div className="flex w-full items-center">
								<Skeleton className="h-6 w-16" />
							</div>
						</CardContent>
					</Card>
				)}
			</div>
			<div className="flex items-center justify-end space-x-2 py-1">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} de{" "}
					{table.getFilteredRowModel().rows.length} linha(s)
					selecionado(s).
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	);
}
