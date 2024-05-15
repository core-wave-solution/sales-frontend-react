"use client";

import { FaArrowsRotate } from "react-icons/fa6";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function RefreshButton() {
	const [effect, setEffect] = useState(false);
	return (
		<Button
			id="btn-refresh"
			size="icon"
			variant="unstyle"
			onClick={() => {
				setEffect(true);
				setTimeout(() => {
					setEffect(false);
				}, 3000);
			}}
		>
			<FaArrowsRotate
				className={cn(
					"h-6 w-6 rotate-180 text-gray-800 duration-300",
					effect && "animate-spin direction-reverse",
				)}
			/>
		</Button>
	);
}
