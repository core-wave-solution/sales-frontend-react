"use client";

import {
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
	Breadcrumb,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function DashboardBreadcrumb() {
	const paths = usePathname();
	const pathNames = paths.split("/").filter((path) => path);
	let link = "/";

	const terms = [
		{
			ptBr: "processos",
			enUs: "process",
		},
		{
			ptBr: "produtos",
			enUs: "products",
		},
		{
			ptBr: "clientes",
			enUs: "clients",
		},
		{
			ptBr: "turno",
			enUs: "shift",
		},
	];

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{pathNames.map((pathName, index) => {
					link = link + pathName + "/";

					const findTerms = terms.find((a) => a.enUs === pathName);

					if (findTerms) {
						pathName = findTerms.ptBr;
					}

					if (index + 1 === pathNames.length) {
						return (
							<BreadcrumbPage key={index}>
								{pathName}
							</BreadcrumbPage>
						);
					} else {
						return (
							<>
								<BreadcrumbItem key={index}>
									<BreadcrumbLink asChild>
										<Link href={link}>{pathName}</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
							</>
						);
					}
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
