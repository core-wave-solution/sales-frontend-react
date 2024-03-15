import React from "react";
import { IconType } from "react-icons/lib";

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export type SidebarNavLinkProps = {
  href: string;
};

export type SidebarExpansibleProps = {
  open: boolean;
};

export type SidebarExpandButtonProps = {
  toggleSidebarWidth: () => void;
};

export type SidebarItemsProps = {
  title: string;
  href: string;
  icon: IconType;
  type: "Main" | "Footer";
};
