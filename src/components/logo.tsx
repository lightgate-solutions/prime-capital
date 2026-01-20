import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-lg bg-primary flex items-center justify-center`}
      >
        <Image
          src="/logo.jpeg"
          width={200}
          height={200}
          alt="logo of prime capital"
        />
      </div>
    </div>
  );
}
