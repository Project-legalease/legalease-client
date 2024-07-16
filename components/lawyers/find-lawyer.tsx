import DisplayLawyers from "./display-lawyers";
import FilterSidebar from "./filter-sidebar";

export default function FindALawyer(): React.JSX.Element {
  return (
    <div className="pt-20 pb-28 px-5 relative z-0">
      <div className="flex relative z-0 gap-6">
        <FilterSidebar />
        <DisplayLawyers />
      </div>
    </div>
  );
}
