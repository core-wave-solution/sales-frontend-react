export type ComboboxProps = {
  title: string;
  label: string;
  placeholder?: string;
  empty?: string;
  items: ComboboxItemsProps[];
  className?: string;
};

export type ComboboxItemsProps = {
  value: string;
  label: any;
};
