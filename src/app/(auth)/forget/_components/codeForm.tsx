"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  rememberCode: z.string(),
});

export function CodeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rememberCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="flex h-full w-full flex-col items-start justify-center gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="rememberCode"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Código de Verificação</FormLabel>
              <FormControl className="w-full">
                <InputOTP
                  maxLength={6}
                  className="w-full"
                  render={({ slots }) => (
                    <InputOTPGroup className="h-32 w-full gap-3">
                      {slots.map((slot, index) => (
                        <InputOTPSlot
                          key={index}
                          {...slot}
                          className="h-full w-full rounded-sm bg-white"
                        />
                      ))}{" "}
                    </InputOTPGroup>
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-6 w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
