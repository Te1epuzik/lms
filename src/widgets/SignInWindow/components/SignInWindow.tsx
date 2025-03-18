"use client";

import { Button } from "@/shared";
import { useAuthStore } from "@/store";
import { redirect } from "next/navigation";

export const SignInWindow = () => {
  const signIn = useAuthStore((state) => state.signIn);

  const handleSignIn = (role: "student" | "teacher") => {
    signIn("token", role);
    redirect("/");
  };
  return (
    <div
      style={{
        height: "400px",
      }}
    >
      <h2>Sign IN page</h2>
      <Button onClick={() => handleSignIn("student")} type="button">
        Enter as a student
      </Button>
      <Button onClick={() => handleSignIn("teacher")} type="button">
        Enter as a teacher
      </Button>
    </div>
  );
};
