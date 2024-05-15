import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ShiftProfile() {
	return (
		<Card className="col-span-3 row-span-1">
			<CardContent className="flex items-center gap-3 py-2">
				<Image
					src={"/img/profile-1.jpg"}
					alt=""
					width={120}
					height={120}
					className="rounded-lg"
				/>
				<div className="flex w-full flex-col gap-1">
					<p>
						Olá, <b>Patrik</b>
					</p>
					<p>
						Turno aberto as: <b>18:30</b>
					</p>
					<p>
						Data: <b>05/02/2024</b>
					</p>
				</div>
				<div className="flex flex-col gap-3 text-nowrap">
					<p>
						Troco início: <b>R$ 75,00</b>
					</p>
					<Button>Resgatar Dinheiro</Button>
				</div>
			</CardContent>
		</Card>
	);
}
