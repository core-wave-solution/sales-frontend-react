export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-screen bg-primary p-24">{children}</section>
  );
}
