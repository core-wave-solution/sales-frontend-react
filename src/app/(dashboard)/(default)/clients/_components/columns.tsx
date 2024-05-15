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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  searchCode: string;
  image: string;
  status: "pending" | "processing" | "success" | "failed";
  name: string;
  price: number;
  cost: number;
  category: string;
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
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => (
      <Popover>
        <PopoverTrigger>
          <Image
            src={`/img/${row.getValue("image")}`}
            alt="Product image"
            height={50}
            width={50}
          />
        </PopoverTrigger>
        <PopoverContent className="flex justify-center">
          <Image
            src={`/img/${row.getValue("image")}`}
            alt="Product image"
            height={200}
            width={200}
          />
        </PopoverContent>
      </Popover>
    ),
  },
  {
    accessorKey: "searchCode",
    header: ({ column }) => SortButton(column, "Código de Busca"),
    cell: ({ row }) => {
      const searchCode = parseFloat(row.getValue("searchCode"));

      return <div className="font-medium">{searchCode}</div>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortButton(column, "Nome"),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
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
    accessorKey: "status",
    header: ({ column }) => SortButton(column, "Status"),
    cell: ({ row }) => {
      const status: "pending" | "processing" | "success" | "failed" =
        row.getValue("status");

      const statusVariant = {
        pending: "outline",
        processing: "default",
        success: "success",
        failed: "destructive",
      };
      return (
        <Badge className="capitalize" variant={statusVariant[status]}>
          {status}
        </Badge>
      );
    },
    enableSorting: true,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <FaEllipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
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
