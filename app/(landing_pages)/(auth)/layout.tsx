import AuthSidebar from "@/components/layout/auth-sidebar";
import SubHeader from '@/components/layout/sub-header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="sticky top-0 z-10 block md:hidden bg-white pl-4">
        <div className="flex items-center justify-between w-full max-w-[460px] h-[100px] mx-auto">
          <SubHeader />
        </div>
      </nav>
      <div className="flex h-full">
        <AuthSidebar />
        {children}
      </div>
    </>
  );
}
