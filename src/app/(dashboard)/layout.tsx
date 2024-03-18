import { Navbar } from "@/components/dashboard/navbar";
import { DashboardSidebar } from "./_components/sidebar";
import { NavbarColumn } from "@/components/dashboard/navbar/column";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
import { NavbarNotification } from "@/components/dashboard/navbar/notification";
import { DashboardBreadcrumb } from "@/components/dashboard/breadcrumb";
import { Refresh } from "./_components/refresh";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-screen w-screen gap-6 bg-gray-200">
      <DashboardSidebar />
      <div className="flex w-full flex-col gap-3 pb-6">
        <Navbar>
          <NavbarColumn></NavbarColumn>
          <NavbarColumn>
            <Button variant="secondary">
              <FaRegUserCircle className="mr-2 h-4 w-4" /> Turno
            </Button>
            <NavbarNotification />
          </NavbarColumn>
        </Navbar>
        <main className="mr-6 flex h-full flex-col gap-6 rounded-sm bg-white p-6 max-h-[850px]">
          <div className="flex w-full justify-between">
            <DashboardBreadcrumb/>
            <Refresh />
          </div>
          {children}
        </main>
      </div>
    </section>
  );
}
