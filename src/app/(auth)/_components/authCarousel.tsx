"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export function AuthCarousel() {
  const items = [
    {
      bg: "bg-hamburguer-pattern",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque egestas nunc a nunc congue. Consectetur augue potenti pellentesque est nulla lorem.",
    },
    {
      bg: "bg-hotdog-pattern",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque egestas nunc a nunc congue. Consectetur augue potenti pellentesque est nulla lorem.",
    },
    {
      bg: "bg-lasanha-pattern",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque egestas nunc a nunc congue. Consectetur augue potenti pellentesque est nulla lorem.",
    },
  ];
  return (
    <Carousel
      className="h-full w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <AuthCarouselItem key={index} {...item} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const AuthCarouselItem = ({
  bg,
  title,
  description,
}: {
  bg: string;
  title: string;
  description?: string;
}) => {
  return (
    <CarouselItem className={cn(bg, "h-[768px] w-full bg-cover bg-center")}>
      <div className="flex h-full flex-col items-start justify-end gap-3 bg-black bg-opacity-50 p-24">
        <h1 className="text-3xl font-black text-gray-100">{title}</h1>
        {description && (
          <p className="w-full text-lg font-normal text-gray-100">
            {description}
          </p>
        )}
      </div>
    </CarouselItem>
  );
};
