import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH4({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<h4
			className={cn(
				"text-xl font-semibold tracking-tight",
				className,
			)}
		>
			{children}
		</h4>
	);
}
