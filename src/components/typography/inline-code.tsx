import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyInlineCode({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				className,
			)}
		>
			{children}
		</code>
	);
}
