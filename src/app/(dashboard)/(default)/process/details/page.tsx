import { ProcessProps } from "@/types/dashboard/process";
import { ProcessFocusCard } from "./_components/focusCard";
import { ProcessState } from "@/enum/dashboard/process";
import { DetailCarousel } from "./_components/detail-carousel";
import { ProcessCardState } from "./_components/processCardState";
import { DashboardHeader } from "@/app/(dashboard)/_components/header";

export default function Page() {
	const processes: ProcessProps[] = [
		{
			id: "1231223",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.PROGRESS,
			status: "late",
		},
		{
			id: "1233435",
			title: "Hotdog Especial",
			quantity: 2,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
		{
			id: "12354566",
			title: "Hotdog Especial",
			quantity: 1,
			state: ProcessState.START,
			status: "inTime",
		},
	];
	return (
		<section className="flex flex-col items-center justify-center gap-3">
			<DashboardHeader />
			<section className="grid h-full w-full gap-3">
				{processes
					.filter(
						(process) => process.state === ProcessState.PROGRESS,
					)
					.slice(0, 1)
					.map((process) => (
						<ProcessCardState
							key={process.id}
							trigger={<ProcessFocusCard {...process} />}
							content={undefined}
						/>
					))}
			</section>
			<section className="flex h-full w-full justify-center gap-3">
				<DetailCarousel processes={processes} />
			</section>
		</section>
	);
}
