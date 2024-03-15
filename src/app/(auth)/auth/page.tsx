import { LoginForm } from "./_components/loginForm";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800">Conecte-se</h1>
      <LoginForm />
      <div className="flex gap-3">
        <p>Esqueceu a senha?</p>
        <Link
          href="/forget"
          className="text-primary underline transition-colors hover:text-primary-foreground"
        >
          Alterar senha
        </Link>
      </div>
    </>
  );
}
