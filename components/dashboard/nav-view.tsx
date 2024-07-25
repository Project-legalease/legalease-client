
import DashboardNav from "./nav";

export default function NavView(): React.JSX.Element {
  return (
    <>
      <div className="hidden md:block sticky top-0 py-16 pl-6 w-full max-w-xs h-full overflow-hidden">
        <div className="h-full rounded-[20px] bg-primary-whiteF5 border font-inria overflow-x-hidden">
          <DashboardNav />
        </div>
      </div>
    </>
  );
}
