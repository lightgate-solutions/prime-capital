import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/logo";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <Logo size="lg" />
          <h1 className="text-2xl font-bold text-foreground">
            Create your account
          </h1>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
