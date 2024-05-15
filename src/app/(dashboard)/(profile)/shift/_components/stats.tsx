import { CardTitle } from "@/components/ui/card";
import { ShiftCard } from "./shift-card";
import { ShiftSingleStat } from "./single-stat";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function ShiftStats() {
	return (
		<div className="col-span-2 row-span-2 grid grid-cols-4 grid-rows-2 gap-3">
			<ShiftSingleStat />
			<ShiftSingleStat />
			<ShiftCard
				className="col-span-2 row-span-2"
				header={<CardTitle>Revisões</CardTitle>}
				contentClassName="flex flex-col gap-2"
			>
				<>
					<div className="flex justify-between">
						<p className="text-sm">Positivos</p>
						<p className="text-sm">80%</p>
					</div>
					<Progress value={80} variant="info" />
					<div className="flex justify-between">
						<p className="text-sm">Neutros</p>
						<p className="text-sm">12%</p>
					</div>
					<Progress value={12} />
					<div className="flex justify-between">
						<p className="text-sm">Negativos</p>
						<p className="text-sm">08%</p>
					</div>
					<Progress value={8} variant="danger" />
					<div className="flex space-y-2">
						<p className="text-xs">
							Mais de 450 pessoas fizeram revisões em seu
							estabelecimento.
						</p>
						<Button variant="cancel">Ver todas as revisões</Button>
					</div>
				</>
			</ShiftCard>
			<ShiftSingleStat />
			<ShiftSingleStat />
		</div>
	);
}
