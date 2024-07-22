
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { user: "user" | "lawyer" } }): React.JSX.Element {
    if (params.user !== "user" && params.user !== "lawyer") {
        redirect("/not-found")
    }
    return (
      <div className="flex flex-col gap-[200px] px-16 py-16">
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
        <h1>This is the {params.user} dashboard</h1>
      </div>
    );
}