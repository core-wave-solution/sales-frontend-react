import { ReactNode } from "react";
import { Category } from "../dashboard/category";

export type DashboardHeaderProps = {
	startChildren?: ReactNode;
	middleChildren?: ReactNode;
	categories?: Category[];
	hasViewMode?: boolean;
};
