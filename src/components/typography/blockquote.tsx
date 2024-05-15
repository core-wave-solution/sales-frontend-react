import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyBlockquote({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
			{children}
		</blockquote>
	);
}
