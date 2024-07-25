import { LuCheckSquare } from "react-icons/lu";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

const criterias: string[] = [
  "Enter the type of lawyer you need (practice area) and your location to start browsing profiles.",
  "Get detailed profiles with all the information you need to make a hiring decision, including price, reviews, and an unbiased LegalEase Rating.",
  "Contact an attorney or book a consultation easily through our site, so you can get the help you need without the stress.",
];

function LookingForLawyer(): React.JSX.Element {
  return (
    <div className="py-10 px-5 mb-10">
      <div className="w-full max-w-[1184px] mx-auto">
        <h1 className="font-lilita text-primary-blue48 text-3xl sm:text-[2.5em] text-center">
          LOOKING FOR A LAWYER?
        </h1>
        <h6 className="text-primary-dark1E font-sm sm:text-base font-extralight italic mb-8 text-center">
          Take advantage of LegalEase&#39;s search technology, detailed
          profiles, ratings, and reviews to evaluate and connect with attorneys.
        </h6>
        <div className="flex flex-col  md:flex-row gap-6">
          <div className="w-full">
            {criterias.map((criteria, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <div>
                  <LuCheckSquare
                    size={20}
                    className="text-primary-orange61 mt-1"
                  />
                </div>
                <p className="text-primary-dark1E text-base md:text-lg mt-2">
                  {criteria}
                </p>
              </div>
            ))}
            <div className="mt-7 pl-10">
              <Link
                href="/lawyers/find"
                className="py-3 px-4 rounded-lg bg-primary-orange61 font-bold text-white  font-inria"
              >
                Find A Lawyer
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2 rounded-md py-4 px-5 bg-primary-whiteF5 mb-2">
              <div className="w-full flex items-center gap-3 bg-white rounded-md px-2.5 py-2">
                <GoLaw size={16} className="text-black/50" />
                <input
                  type="text"
                  placeholder="Type of law"
                  className="w-full h-5 placeholder:text-black/50 text-primary-dark32 focus-visible:outline-none focus:outline-none"
                />
              </div>
              <div className="w-full flex items-center gap-3 bg-white rounded-md px-2.5 py-2">
                <MdLocationPin size={16} className="text-black/50" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full h-5 placeholder:text-black/50 text-primary-dark32 focus-visible:outline-none focus:outline-none"
                />
              </div>
              <div className="w-full flex justify-end">
                <button className="w-fit py-2 px-6 rounded-lg bg-primary-orange61 font-bold text-white font-inria">
                  View
                </button>
              </div>
            </div>
            <div className="rounded-md py-4 px-16 text-sm sm:text-base bg-primary-whiteF5 text-primary-blue48">
              <p>
                <RiDoubleQuotesL size={24} />
                I was impressed by the range of services offered on this
                platform. Not only could I find a lawyer suited to my needs, but
                I also had access to valuable resources and articles that helped
                me understand my legal issues better. It&#39;s a one-stop shop
                for all legal needs!
                <RiDoubleQuotesR size={24} className="float-end" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForLawyer;
