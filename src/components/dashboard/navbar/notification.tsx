import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBell } from "react-icons/fa";

export function NavbarNotification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button
            variant="unstyle"
            size="icon"
            className="text-gray-100 transition-colors hover:text-gray-200"
          >
            <FaBell className="h-5 w-5" />
          </Button>
          <Badge
            variant="destructive"
            className="relative -left-5 -top-5 h-4 w-4 items-center justify-center rounded-full"
          >
            3
          </Badge>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuItem>Copiar ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
