import { SignInWindow } from "@/widgets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "sign in",
}

export default function SignIn() {
  return (
    <div className="container">
      <SignInWindow />
    </div>
  );
}
