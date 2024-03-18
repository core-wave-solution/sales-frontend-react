import { DashboardCombobox } from "../_components/combobox";
import { DataTable } from "./_components/data-table";
import { Product, columns } from "./_components/columns";

export default async function Page() {
  const data = await getData();
  async function getData(): Promise<Product[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        searchCode: "1212726",
        image: "hamburguer-pattern.jpg",
        status: "pending",
        name: "Hotdog Simples",
        price: 12.9,
        cost: 5.29,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial",
        price: 19.9,
        cost: 7.59,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
      {
        id: "1231aas",
        searchCode: "1212725",
        image: "hotdog-pattern.jpg",
        status: "pending",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: "Test",
      },
    ];
  }
  return (
    <section className="flex h-full w-full flex-col gap-3">
      <DashboardCombobox />
      <DataTable columns={columns} data={data} />
    </section>
  );
}
