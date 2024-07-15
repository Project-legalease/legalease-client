import AuthSidebar from "@/components/layout/auth-sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <AuthSidebar />
      {children}
    </div>
  );
}
