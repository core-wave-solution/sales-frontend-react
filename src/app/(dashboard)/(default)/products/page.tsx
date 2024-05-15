import { DashboardHeader } from "../../_components/header";
import { Product } from "@/types/dashboard/product";
import { Category } from "@/types/dashboard/category";
import { ShowData } from "./_components/show-data";
import { columns } from "../clients/_components/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getProducts(): Promise<Product[]> {
	return [
		{
			id: "728ed52f",
			searchCode: "1212726",
			image: "hamburguer-pattern.jpg",
			status: "pending",
			name: "Hotdog Simples",
			price: 12.9,
			cost: 5.29,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial",
			price: 19.9,
			cost: 7.59,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test-2",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test-2",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test-2",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "failed",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test-2",
		},
		{
			id: "1231aas",
			searchCode: "1212725",
			image: "hotdog-pattern.jpg",
			status: "pending",
			name: "Hotdog Especial Duplo",
			price: 21.5,
			cost: 9.16,
			category: "test",
		},
	];
}

async function getCategories(): Promise<Category[]> {
	return [
		{
			id: "123223",
			label: "Test",
			value: "test",
		},
		{
			id: "13443",
			label: "Test 2",
			value: "test-2",
		},
	];
}

export default async function Page() {
	const categories = await getCategories();
	const products = await getProducts();

	return (
		<section className="flex h-full w-full flex-col gap-3">
			<Tabs defaultValue="products" className="w-full overflow-hidden">
				<TabsList className="w-full">
					<TabsTrigger value="products" className="w-full">
						Produtos
					</TabsTrigger>
					<TabsTrigger value="categories" className="w-full">
						Categorias
					</TabsTrigger>
					<TabsTrigger value="process" className="w-full">
						Processos
					</TabsTrigger>
				</TabsList>
				<TabsContent value="products">
					<DashboardHeader categories={categories} hasViewMode />
					<ShowData columns={columns} products={products} />
				</TabsContent>
				<TabsContent value="categories">Categorias</TabsContent>
				<TabsContent value="process">Processos</TabsContent>
			</Tabs>
		</section>
	);
}
