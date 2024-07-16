import { IoSearch } from "react-icons/io5";
import FeaturedLawyers from "../home/featured-lawyers";
import FilterBy from "./filter";

export default function DisplayLawyers(): React.JSX.Element {
  return (
    <div className="mt-20 max-w-7xl w-full mx-auto">
      <section className="mx-auto w-fit">
        <h2 className="uppercase text-4xl text-primary-blue48 font-lilita">
          FIND THE RIGHT LAWYER FOR YOU
        </h2>
        <h2 className="text-3xl text-primary-orange61 font-lilita">
          Need legal help but don’t know where to start from?
        </h2>
        <p className="text-primary-blue68 italic font-normal text-xl mb-4">
          Look no further!
        </p>
        <FilterBy />
      </section>
      <section>
        <FeaturedLawyers />
      </section>
    </div>
  );
}
