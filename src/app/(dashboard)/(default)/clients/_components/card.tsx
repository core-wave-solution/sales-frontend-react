"use client";

import { TypographyH4 } from "@/components/typography/h4";
import { TypographyLarge } from "@/components/typography/large";
import { TypographyP } from "@/components/typography/p";
import { TypographySmall } from "@/components/typography/small";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ClientsProps } from "@/types/dashboard/clients";
import Image from "next/image";
import { FaAt, FaCopy, FaPhone } from "react-icons/fa";
import Rating from "react-star-rating-component";

export function ClientsCard({
  id,
  name,
  email,
  review,
  totalSpent,
  avatar,
  background,
  instagram,
  phone,
}: Readonly<ClientsProps>) {
  const brl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Card className="max-h-[360px] min-w-[200px] max-w-[312px] overflow-hidden p-0">
      <CardHeader
        className={cn(
          "flex w-full bg-gray-800 bg-cover bg-center p-0",
          `bg-[url(${background ?? "/img/blue-shoe.jpg"})]`,
        )}
      >
        <Image
          className="relative -bottom-[50px] m-auto rounded-full"
          src={avatar ?? "/img/profile-1.jpg"}
          alt="Profile Avatar"
          width={100}
          height={100}
        />
      </CardHeader>
      <CardContent className="flex w-full flex-col items-center gap-0.5 p-0.5 px-4 pt-[50px] text-gray-800">
        <TypographyH4>{name}</TypographyH4>
        {instagram && <TypographyP>@{instagram}</TypographyP>}
        {phone && ItemRow("phone", phone)}
        {email && ItemRow("email", email)}
        <Button size="sm">Ver Mais</Button>
      </CardContent>
      <Separator />
      <CardFooter className="flex w-full justify-between py-1">
        <div className="flex flex-col items-start gap-1">
          <Rating
            value={review}
            starCount={5}
            starColor={"#ffb400"}
            emptyStarColor={"#ccc"}
          />
          <TypographySmall>Avaliação de {review} de 5</TypographySmall>
        </div>
        <div className="flex flex-col gap-1">
          <TypographyLarge>{brl.format(totalSpent)}</TypographyLarge>
          <TypographySmall>Total Gasto</TypographySmall>
        </div>
      </CardFooter>
    </Card>
  );
}

function ItemRow(type: "phone" | "email", value: string) {
  const icon = {
    phone: FaPhone,
    email: FaAt,
  };
  const SetIcon = icon[type];

  const copyHandler = () => {
    navigator.clipboard.writeText(value);
    toast({
      title: `${type} copied to clibpoard`,
      duration: 2000,
    });
  };
  return (
    <div className="flex w-full items-center gap-2">
      <SetIcon className="h-4 w-4" />
      <TypographyP className="w-full">{value}</TypographyP>
      <FaCopy
        className="h-4 w-4 transition-colors hover:cursor-pointer hover:text-gray-600"
        onClick={copyHandler}
      />
    </div>
  );
}
