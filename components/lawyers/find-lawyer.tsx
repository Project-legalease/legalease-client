import DisplayLawyers from "./display-lawyers";
import FilterSidebar from "./filter-sidebar";

export default function FindALawyer(): React.JSX.Element {
  return (
    <div className="flex pt-20 pb-28 relative z-0">
      <FilterSidebar />
      <DisplayLawyers />
    </div>
  );
}
