"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { SidebarCollapse } from "@/components/dashboard/sidebar/collapse";
import { SidebarExpandButton } from "@/components/dashboard/sidebar/expandButton";
import { SidebarExpansible } from "@/components/dashboard/sidebar/expansible";
import { SidebarFooter } from "@/components/dashboard/sidebar/footer";
import { SidebarHeader } from "@/components/dashboard/sidebar/header";
import { SidebarMain } from "@/components/dashboard/sidebar/main";
import { SidebarNav } from "@/components/dashboard/sidebar/nav";
import { SidebarNavLink } from "@/components/dashboard/sidebar/nav/link";
import { cn } from "@/lib/utils";
import { SidebarItemsProps } from "@/types/components/sidebar";
import Image from "next/image";
import { useState } from "react";
import {
  FaBuilding,
  FaHamburger,
  FaRegQuestionCircle,
  FaSignOutAlt,
  FaUserFriends,
  FaUtensils,
} from "react-icons/fa";

export function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebarWidth = () => {
    setOpen(!open);
  };

  const items: SidebarItemsProps[] = [
    {
      title: "Processos",
      href: "/process",
      icon: FaUtensils,
      type: "Main",
    },
    {
      title: "Produtos",
      href: "/products",
      icon: FaHamburger,
      type: "Main",
    },
    {
      title: "Clientes",
      href: "/clients",
      icon: FaUserFriends,
      type: "Main",
    },
    {
      title: "Minha Empresa",
      href: "/company",
      icon: FaBuilding,
      type: "Main",
    },
    {
      title: "Ajuda",
      href: "/help",
      icon: FaRegQuestionCircle,
      type: "Footer",
    },
    {
      title: "Sair",
      href: "/sign-out",
      icon: FaSignOutAlt,
      type: "Footer",
    },
  ];

  return (
    <Sidebar>
      <SidebarCollapse className="text-gray-100 transition-colors hover:text-gray-300">
        <DashboardSidebarColapseHeader
          toggleSidebarWidth={toggleSidebarWidth}
        />
        <DashboardSidebarBody items={items} state="Colapse" />
      </SidebarCollapse>
      <SidebarExpansible
        open={open}
        className="text-gray-800 hover:text-gray-600"
      >
        <DashboardSidebarExansibleHeader />
        <DashboardSidebarBody items={items} state="Expand" />
      </SidebarExpansible>
    </Sidebar>
  );
}

export function DashboardSidebarColapseHeader({
  toggleSidebarWidth,
}: Readonly<{
  toggleSidebarWidth: () => void;
}>) {
  return (
    <SidebarHeader>
      <SidebarExpandButton toggleSidebarWidth={toggleSidebarWidth}>
        <Image
          src="logo-secondary.svg"
          alt="Logo Secundária"
          width={30}
          height={30}
        />
      </SidebarExpandButton>
    </SidebarHeader>
  );
}

function DashboardSidebarExansibleHeader() {
  return (
    <SidebarHeader className="mx-auto">
      <SidebarNavLink href="/process">
        <Image
          src="logo-primary.svg"
          alt="Logo Primária"
          width={100}
          height={100}
        />
      </SidebarNavLink>
    </SidebarHeader>
  );
}

function DashboardSidebarBody({
  items,
  state,
}: Readonly<{ items: SidebarItemsProps[]; state: "Colapse" | "Expand" }>) {
  const RenderContent = (item: SidebarItemsProps) => {
    if (state === "Colapse") {
      return <item.icon className="h-6 w-6" />;
    } else {
      return <h4>{item.title}</h4>;
    }
  };
  const padding =
    state === "Expand"
      ? "px-3 hover:bg-secondary hover:text-gray-100 duration-300"
      : undefined;
  return (
    <>
      <SidebarMain>
        <SidebarNav>
          {items
            .filter((a) => a.type === "Main")
            .map((item, index) => (
              <SidebarNavLink
                href={item.href}
                key={index}
                className={cn(padding, "flex h-12 items-center")}
              >
                <RenderContent {...item} />
              </SidebarNavLink>
            ))}
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <SidebarNav>
          {items
            .filter((a) => a.type === "Footer")
            .map((item, index) => (
              <SidebarNavLink
                href={item.href}
                key={index}
                className={cn(padding, "flex h-12 items-center")}
              >
                <RenderContent {...item} />
              </SidebarNavLink>
            ))}
        </SidebarNav>
      </SidebarFooter>
    </>
  );
}
