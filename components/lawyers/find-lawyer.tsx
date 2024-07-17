import PoliciesFooter from "../layout/policies-footer";
import DisplayLawyers from "./display-lawyers";
import FilterSidebar from "./filter-sidebar";

export default function FindALawyer(): React.JSX.Element {
  return (
    <>
    <div className="pt-20 pb-7 px-5">
      <div className="flex z-0 gap-8 max-w-7xl w-full mx-auto">
        <FilterSidebar />
        <DisplayLawyers />
      </div>
    </div>
    <PoliciesFooter />
    </>
  );
}
