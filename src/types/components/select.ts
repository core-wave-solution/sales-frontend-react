import { ReactNode } from "react";

export type SelectProps = {
	onChangeValue: (e: any) => void;
	defaultValue: string;
	selectOptions: SelectOptionsProps[];
};

export type SelectOptionsProps = {
	value: string;
	label: ReactNode;
};
