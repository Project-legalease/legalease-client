import Header from "@/components/layout/header";
import NotFound from "@/components/layout/not-found";


export default function NotFoundPage(): React.ReactNode {
  return (
    <>
      <Header />
      <NotFound text="home" link="/" />
    </>
  );
}
