import { DashboardCombobox } from "../_components/combobox";
import { DataTable } from "./_components/data-table";
import { Payment, columns } from "./_components/columns";

export default async function Page() {
  const data = await getData();
  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ];
  }
  return (
    <section className="flex flex-col h-full w-full gap-3">
      <DashboardCombobox />
      <DataTable columns={columns} data={data} />
    </section>
  );
}
