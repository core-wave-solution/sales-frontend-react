import { DashboardCombobox } from "../_components/combobox";
import { DataTable } from "./_components/data-table";
import { Product, columns } from "./_components/columns";

export default async function Page() {
  const data = await getData();
  async function getData(): Promise<Product[]> {
    // let response = await fetch("http://localhost:8080/product/all", {
    //   method: "GET",
    //   headers: {
    //     "id-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50X3NjaGVtYSI6ImxvamFfaWJpdGlfXzJxaXRpdHNyIiwiZXhwIjoxNzE2MTY1NTcyLCJzdWIiOiJpZC10b2tlbiIsInVzZXJfZW1haWwiOiJ3aWxsaWFtanVuaW9yNjlAZ21haWwuY29tIiwidXNlcl9pZCI6IjNkNDdlYjdkLTNjMjgtNDI5Mi05OWIzLTE5YWJkNDM3N2ZmMCJ9.fz4SRrGo3OIMCeeYDZD-OgE14JdzP83iZC4wH6VBidM",
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   }
    // }).then((res) => res.json());
    
    // console.log(response.data);
    // return response.data;

    return [
      {
        id: "728ed52f",
        code: "1212726",
        image_path: "hamburguer-pattern.jpg",
        name: "Hotdog Simples",
        price: 12.9,
        cost: 5.29,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial",
        price: 19.9,
        cost: 7.59,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
      {
        id: "1231aas",
        code: "1212725",
        image_path: "hotdog-pattern.jpg",
        name: "Hotdog Especial Duplo",
        price: 21.5,
        cost: 9.16,
        category: {id: "1", name: "Test", image_path: "hotdog-pattern.jpg"},
        size: {id: "1", name: "Test", is_active: true},
        description: "description",
        is_available: true,
      },
    ];
  }
  return (
    <section className="flex h-full w-full flex-col gap-3">
      <DashboardCombobox />
      <DataTable columns={columns} data={data} />
    </section>
  );
}
