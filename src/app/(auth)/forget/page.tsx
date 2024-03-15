import Link from "next/link";
import { ForgetForm } from "./_components/forgetForm";
import { CodeForm } from "./_components/codeForm";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800">Esqueceu sua senha</h1>
      {/* <ForgetForm /> */}
      <CodeForm />
      <div className="flex gap-3">
        <p>Lembrou?</p>
        <Link
          href="/auth"
          className="text-primary underline transition-colors hover:text-primary-foreground"
        >
          Conectar-se
        </Link>
      </div>
    </>
  );
}
