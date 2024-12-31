"use server";

import { loginSchema, LoginFormData } from "@/app/login/schema";

type State = {
  error?: string;
  success: boolean;
};

export async function reactHookFormLogin(data: LoginFormData) {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return {
      error: "Invalid form data",
      success: false,
    };
  }

  return {
    success: true,
  };
}

export async function login(prevState: State, data: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    return {
      error: "Invalid form data",
      success: false,
    };
  }

  return {
    success: true,
  };
}
