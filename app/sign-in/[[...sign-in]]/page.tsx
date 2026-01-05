import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #002B4F 0%, #001628 100%)",
      }}
    >
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
