import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyLead({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<p className={cn("text-xl text-muted-foreground", className)}>
			{children}
		</p>
	);
}
