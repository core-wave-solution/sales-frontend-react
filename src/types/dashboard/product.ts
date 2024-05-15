export type Product = {
	id: string;
	searchCode: string;
	image: string;
	status: "pending" | "processing" | "success" | "failed";
	name: string;
	price: number;
	cost: number;
	category: string;
};
