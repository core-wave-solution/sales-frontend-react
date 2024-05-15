"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCheck, FaChevronUp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { ComboboxProps } from "@/types/components/combobox";
import { useState } from "react";

export function Combobox({
  title,
  label,
  placeholder,
  empty,
  items,
  className,
  value,
  setValue,
}: Readonly<ComboboxProps>) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(value);

  function handleChangeValue(newValue: string) {
    setVal(newValue);
    setValue(newValue);
  }

  return (
    <div className={cn("flex flex-col gap-3 overflow-hidden", className)}>
      <Label htmlFor="combobox" className="text-base font-bold text-gray-800">
        {title}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {val ? items.find((item) => item.value === val)?.label : label}
            <FaChevronUp
              className={cn(
                "ml-2 h-4 w-4 shrink-0 opacity-50 duration-300",
                open && "rotate-180",
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput id="combobox" placeholder={placeholder} />
            <CommandEmpty>{empty}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    handleChangeValue(currentValue === val ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <FaCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      val === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
