"use client";

import React from "react";
import { AuthCarousel } from "./_components/authCarousel";
import { usePathname } from "next/navigation";

const Template = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();

  const isPasswordPage = pathname.includes("forget");

  return (
    <main className="grid h-full w-full grid-cols-2 overflow-hidden rounded-md">
      {isPasswordPage ? (
        <>
          <ContentSection>{children}</ContentSection>
          <AuthCarousel />
        </>
      ) : (
        <>
          <AuthCarousel />
          <ContentSection>{children}</ContentSection>
        </>
      )}
    </main>
  );
};

const ContentSection = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-gray-100 p-24">
      {children}
    </div>
  );
};

export default Template;
