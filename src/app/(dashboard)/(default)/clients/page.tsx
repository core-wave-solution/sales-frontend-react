import { ClientsProps } from "@/types/dashboard/clients";
import { ViewOption } from "./_components/view-option";
import { DashboardHeader } from "../../_components/header";

export default async function Page() {
	const clients: ClientsProps[] = [
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
		{
			id: 0,
			name: "Patrik",
			email: "patrik.example@email.com",
			totalSpent: 234.93,
			review: 4,
			instagram: "patrik",
			phone: "(15) 99123-1234",
		},
	];
	return (
		<section className="flex h-full w-full flex-col gap-3">
			<DashboardHeader hasViewMode />
			<ViewOption clients={clients} />

			{/* {viewMode === "card" ? (
        
      ) : (
        <>AAAAAA</>
      )} */}
		</section>
	);
}
