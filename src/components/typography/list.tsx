import { cn } from "@/lib/utils";
import { ListItems } from "@/types/list";
import { ReactNode } from "react";

export function TypographyList({
	children,
	className,
	items,
}: Readonly<{
	items: ListItems[];
	children: ReactNode;
	className?: string;
}>) {
	return (
		<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
			{items.map((item, index) => (
				<li
					key={index}
					className={cn("", item.className)}
					value={item.value}
				>
					{item.children}
				</li>
			))}
		</ul>
	);
}
