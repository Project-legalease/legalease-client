import Header from "@/components/layout/header";
import PoliciesFooter from "@/components/layout/policies-footer";


export default function LandingPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header />
        {children}
        <PoliciesFooter />
      </>
  );
}