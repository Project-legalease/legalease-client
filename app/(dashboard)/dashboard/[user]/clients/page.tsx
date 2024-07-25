import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { user: "user" | "lawyer" };
}): React.JSX.Element {
  if (params.user !== "lawyer") {
    if (params.user !== "user") redirect("/not-found");
    else redirect("/dashboard/user");
  }
  return (
    <div className="flex flex-col gap-[200px] py-16">
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
      <h1>This is the {params.user} clients</h1>
    </div>
  );
}
