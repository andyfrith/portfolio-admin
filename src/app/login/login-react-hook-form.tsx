"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/app/login/schema";
import { reactHookFormLogin } from "./actions";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "test@email.com",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await reactHookFormLogin(data);
    } catch (error) {
      setError("root", {
        message: String(error) as string,
      });
    }
  };

  return (
    <form
      className="flex flex-col px-4 py-2 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="mb-3 mt-5 block text-xs font-medium" htmlFor="email">
        Email
      </label>
      <input {...register("email")} type="text" placeholder="Email" />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <label className="mb-3 mt-5 block text-xs font-medium" htmlFor="email">
        Password
      </label>
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
}
