export type ComboboxProps = {
	title: string;
	label: string;
	placeholder?: string;
	empty?: string;
	items: ComboboxItemsProps[];
	className?: string;
	value: string;
	setValue: (value: string) => void;
};

export type ComboboxItemsProps = {
	id?: string | number;
	value: string;
	label: any;
};
