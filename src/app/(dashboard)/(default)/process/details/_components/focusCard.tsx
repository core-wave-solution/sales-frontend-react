"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProcessButton } from "../../_components/processButton";
import { Textarea } from "@/components/ui/textarea";
import { ProcessProps } from "@/types/dashboard/process";
import { useDialog } from "@/hooks/useDialog";

export function ProcessFocusCard({
	id,
	quantity,
	state,
	status,
	title,
}: Readonly<ProcessProps>) {
	const { onOpen } = useDialog();
	const ingredients = [
		{
			type: "increment",
			quantity: 1,
			name: "salsicha",
		},
		{
			type: "increment",
			quantity: 1,
			name: "salsicha",
		},
		{
			type: "increment",
			quantity: 1,
			name: "salsicha",
		},
		{
			type: "increment",
			quantity: 1,
			name: "salsicha",
		},
		{
			type: "decrement",
			name: "cebola",
		},
	];
	return (
		<Card
			className="grid h-full cursor-pointer grid-cols-3 items-center p-6"
			onClick={onOpen}
		>
			<CardHeader className="col-span-1 aspect-[16/9] max-h-64 rounded-sm bg-hotdog-pattern bg-cover bg-center" />
			<CardContent className="col-span-2 flex h-full flex-col items-center justify-between gap-3 p-0">
				<div className="flex w-full justify-between gap-3">
					<div className="flex flex-col">
						<CardDescription className="text-base">
							# {id}
						</CardDescription>
						<CardTitle className="text-4xl">{title}</CardTitle>
					</div>
					<div className="flex items-center gap-3">
						<p className="text-sm text-gray-800">Quantidade</p>
						<Badge variant="outline">{quantity}</Badge>
					</div>
				</div>
				<div className="grid h-full w-full grid-cols-12 gap-3">
					<div className="col-span-5 flex flex-col gap-3">
						<h4 className="text-xl font-bold text-gray-600">
							Ingredientes
						</h4>
						<div className="grid grid-cols-4 grid-rows-3 gap-3">
							{ingredients
								.filter(
									(ingredient) =>
										ingredient.type === "decrement",
								)
								.map((ingredient, index) => (
									<Badge
										variant="destructive"
										className="text-nowrap"
										key={index}
									>
										{ingredient.name}
									</Badge>
								))}
							{ingredients
								.filter(
									(ingredient) =>
										ingredient.type === "increment",
								)
								.map((ingredient, index) => (
									<Badge
										variant="success"
										className="text-nowrap"
										key={index}
									>
										{`+${ingredient.quantity} ${ingredient.name}`}
									</Badge>
								))}
						</div>
					</div>

					<Separator orientation="vertical" className="mx-auto" />
					<div className="col-span-5 flex flex-col gap-3">
						<h4 className="text-xl font-bold text-gray-600">
							Observações
						</h4>
						<Textarea
							readOnly
							className="h-full w-full resize-none"
						>
							Sem prensar
						</Textarea>
					</div>
				</div>
				<ProcessButton state={state} />
			</CardContent>
		</Card>
	);
}
