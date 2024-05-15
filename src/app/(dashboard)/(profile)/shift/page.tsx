import { CardTitle } from "@/components/ui/card";
import { ShiftProfile } from "./_components/profile";
import { ShiftCard } from "./_components/shift-card";
import { ShiftStats } from "./_components/stats";

export default function Page() {
	return (
		<section className="grid grid-cols-3 grid-rows-5 gap-3 overflow-hidden">
			<ShiftProfile />
			<ShiftStats />
			<ShiftCard
				className="col-span-1 row-span-6"
				header={<CardTitle>Vendas</CardTitle>}
			>
				a
			</ShiftCard>
			<ShiftCard
				className="col-span-2 row-span-4"
				header={<CardTitle>Top de Vendas</CardTitle>}
			>
				a
			</ShiftCard>
		</section>
	);
}
