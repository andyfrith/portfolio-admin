"use client";

import { useActionState } from "react";
import { login } from "@/app/login/actions";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, {
    error: undefined,
    success: false,
  });

  return (
    <form action={formAction} className="flex flex-col px-4 py-2 gap-2">
      <div>
        <label className="mb-3 mt-5 block text-xs font-medium" htmlFor="email">
          Email
        </label>
        <input type="text" placeholder="Email" />
      </div>
      {state?.error && <div className="text-red-500">{state.error}</div>}
      <button disabled={isPending} type="submit">
        {isPending ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
