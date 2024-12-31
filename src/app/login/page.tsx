import LoginForm from "@/app/login/login-react-hook-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <LoginForm />
    </main>
  );
}
