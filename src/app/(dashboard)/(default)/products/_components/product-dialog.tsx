import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDialog } from "@/hooks/useDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z.string(),
	searchCode: z.string(),
	image: z.string(),
	price: z.number(),
	cost: z.number(),
	ingredients: z.number().array(),
	description: z.string().optional(),
	category: z.number(),
	size: z.number(),
	experimentalError: z.number().optional(),
});

export function CreateProductDialog() {
	const { isOpen, onClose } = useDialog();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			searchCode: "",
			image: "",
			price: 0,
			cost: 0,
			ingredients: [],
			description: "",
			category: 0,
			size: 0,
			experimentalError: 0,
		},
	});

	return (
		<Dialog open={isOpen} onOpenChange={onClose} modal defaultOpen={isOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Novo Produto</DialogTitle>
					<DialogDescription>
						<Form {...form}>
							<form className="space-y-8">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nome</FormLabel>
											<FormControl>
												<Input
													placeholder="Nome"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="searchCode"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Código de Busca
											</FormLabel>
											<FormControl>
												<Input
													placeholder="12345123"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="image"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Imagem</FormLabel>
											<FormControl>
												<Input
													type="file"
													placeholder="12345123"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<div className="grid grid-cols-3 gap-3">
									<FormField
										control={form.control}
										name="price"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Preço</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="R$ 00,00"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="cost"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Custo</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="R$ 00,00"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</form>
						</Form>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
