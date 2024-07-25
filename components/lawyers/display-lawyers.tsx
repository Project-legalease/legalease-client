import FeaturedLawyers from "../home/featured-lawyers";
import FilterSearch from "./filter-search";
import SearchField from "./search-field";

export default function DisplayLawyers(): React.JSX.Element {
  return (
    <div className="w-full">
      <section className="w-fit pl-10">
        <h2 className="uppercase text-4xl text-primary-blue48 font-lilita">
          FIND THE RIGHT LAWYER FOR YOU
        </h2>
        <h2 className="text-3xl text-primary-orange61 font-lilita">
          Need legal help but don’t know where to start from?
        </h2>
        <p className="text-primary-blue68 italic font-normal text-xl mb-4">
          Look no further!
        </p>
        <SearchField />
        <div className="block md:hidden">
          <FilterSearch />
        </div>
      </section>
      <section>
        <FeaturedLawyers />
      </section>
    </div>
  );
}
