"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { ProcessDetailCard } from "../../_components/detailCard";
import { ProcessProps } from "@/types/dashboard/process";
import { ProcessState } from "@/enum/dashboard/process";

export function DetailCarousel({ processes }: { processes: ProcessProps[] }) {
	return (
		<Carousel className="h-full w-full max-w-[1500px]">
			<CarouselContent>
				{processes
					.filter((process) => process.state === ProcessState.START)
					.map((process) => (
						<CarouselItem key={process.id} className="basis-1/5">
							<ProcessDetailCard {...process} />
						</CarouselItem>
					))}
			</CarouselContent>
		</Carousel>
	);
}
