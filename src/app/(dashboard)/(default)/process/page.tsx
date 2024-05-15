import Link from "next/link";
import { ProcessCard } from "./_components/processCard";
import { ProcessTypeProps } from "@/types/dashboard/process";
import { DashboardHeader } from "../../_components/header";

export default function Page() {
	const processesTypes: ProcessTypeProps[] = [
		{
			title: "Cortar Pão",
		},
		{
			title: "Rechear",
		},
		{
			title: "Prensar",
		},
		{
			title: "Embalar",
		},
	];
	return (
		<section>
			<DashboardHeader />
			<section className="grid h-full w-full grid-cols-4 gap-3">
				{processesTypes.map((processType, index) => (
					<Link href="/process/details" key={index}>
						<ProcessCard {...processType} />
					</Link>
				))}
			</section>
		</section>
	);
}
