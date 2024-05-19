"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Column, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { FaEllipsis, FaSortDown, FaSortUp } from "react-icons/fa6";

const SortButton = (
  column: Column<Product, unknown>,
  title: string,
  className?: string,
) => {
  return (
    <div className={cn(className, "font-medium")}>
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className=""
      >
        {title}
        {column.getIsSorted() === "asc" ? (
          <FaSortDown className="ml-2 h-4 w-4" />
        ) : (
          <FaSortUp className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export type Product = {
  id: string;
  code: string;
  image_path: string;
  name: string;
  description: string;
  price: number;
  cost: number;
  category: Category;
  size: Size;
  is_available: boolean;
};

export type Category = {
  id: string;
  image_path: string;
  name: string;
};

export type Size = {
  id: string;
  name: string;
  is_active: boolean;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "check",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
  },
  {
    accessorKey: "image_path",
    header: "Imagem",
    cell: ({ row }) => (
      <Image
        src={`/img/${row.getValue("image_path")}`}
        alt="Product image"
        height={50}
        width={50}
      />
    ),
  },
  {
    accessorKey: "code",
    header: ({ column }) => SortButton(column, "Código de Busca"),
    cell: ({ row }) => <div className="font-medium">{row.getValue("code")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortButton(column, "Nome"),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "category",
    header: ({ column }) => SortButton(column, "Categoria"),
    cell: ({ row }) => {
      const category: Category = row.getValue("category");
      return <div className="capitalize">{category.name}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "size",
    header: ({ column }) => SortButton(column, "Tamanho"),
    cell: ({ row }) => {
      const size: Size = row.getValue("size");
      return <div className="capitalize">{size.name}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "is_available",
    header: ({ column }) => SortButton(column, "Disponível"),
    cell: ({ row }) => {
      const is_available = row.getValue("is_available")? "Sim" : "Não";
      return <div className="capitalize">{is_available}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "price",
    header: ({ column }) => SortButton(column, "Preço", "text-right"),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "cost",
    header: ({ column }) => SortButton(column, "Custo", "text-right"),
    cell: ({ row }) => {
      const cost = parseFloat(row.getValue("cost"));

      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(cost);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <FaEllipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
