import { useRef } from "react";
import { useRouter } from "next/router";
import {
  SignUpApi,
  SignUpForm,
  SignUpFormValues,
} from "../src/SignUpForm/SignUpForm";
import { Button } from "react-daisyui";
import Link from "next/link";

export default function SignUpPage() {
  const signupFormRef = useRef<SignUpApi>(null);
  const router = useRouter();
  const handleSubmit = async (data: SignUpFormValues) => {
    console.log("Handle submit ready data", data);
    const httpResponse = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const jsonResponse = await httpResponse.json();

    if (!jsonResponse.success) {
      console.log(
        "we should set an error in the form here",
        jsonResponse.errors
      );
      //how can we change the state in SignupForm form here
      signupFormRef.current?.setError(jsonResponse.errors);
      return;
    }

    console.log(jsonResponse);
    router.replace("/");
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <SignUpForm
      ref={signupFormRef}
      onSubmitReady={handleSubmit}
      suffix={
        <Link href="/login">
          <Button color="secondary">Login In</Button>
        </Link>
      }
    />
  );
}
