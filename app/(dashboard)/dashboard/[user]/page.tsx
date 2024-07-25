
import DashboardContent from "@/components/dashboard/dashboard-content";
import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { user: "user" | "lawyer" };
}): React.JSX.Element {
  if (params.user !== "user" && params.user !== "lawyer") {
    redirect("/not-found");
  }
  return <DashboardContent />;
}