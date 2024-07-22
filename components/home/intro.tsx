import Link from "next/link";
import { IoSearch } from "react-icons/io5";

function Intro() {
  return (
    <div className="relative z-0 bg-[url('/images/bg-1.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute z-1 top-0 bottom-0 right-0 left-0 bg-black/55 "></div>
      <div className="relative z-[2]">
        <div className="flex flex-col justify-center items-center pt-[176px] pb-16">
          <h1 className="text-3xl sm:text-[40px] text-white text-center font-lilita">
            CONNECT WITH LEGAL PRACTITIONERS
          </h1>
          <p className="text-xl sm:text-[32px] text-white text-center font-inria">
            Make legal assistance easy
          </p>
          <Link
            href="/about"
            className="py-3 px-4 rounded-lg text-sm sm:text-base bg-primary-orange61 font-bold text-white mt-[22px] font-inria"
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col md:flex-row text-white">
          <div className="w-full relative z-[2] pt-10 pb-[65px] px-5 bg-[url('/images/bg-2.png')] bg-center bg-no-repeat bg-cover font-inria">
            <div className="absolute z-[3] top-0 bottom-0 right-0 left-0 bg-black/55 "></div>
            <div className="relative z-[4] w-full max-w-[478px] mx-auto">
              <h6 className="text-xl font-bold">Need Legal Help?</h6>
              <p className="font-base mt-2">
                Search for attorneys in our directory, and easily contact them
                for a case consultation.
              </p>
              <div className="w-full flex items-center gap-4 mt-3">
                <div className="w-full flex items-center gap-3 bg-white rounded-sm px-2.5 py-2">
                  <IoSearch size={16} className="text-black/50" />
                  <input
                    type="text"
                    placeholder="Search for Legal practitioners"
                    className="w-full h-5 placeholder:text-black/50 text-primary-dark32 focus-visible:outline-none focus:outline-none"
                  />
                </div>
                <button className="w-fit px-4 py-2 bg-white text-sm text-primary-orange61 font-inter font-medium rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="w-full relative z-[2] pt-10 pb-[65px] px-5 bg-[url('/images/bg-3.jpeg')] bg-center bg-no-repeat bg-cover font-inria">
            <div className="absolute z-[3] top-0 bottom-0 right-0 left-0 bg-black/55 "></div>
            <div className="relative z-[4] w-full max-w-[478px] mx-auto">
              <h6 className="text-xl font-bold">Working Hours</h6>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm sm:text-base">Monday & Wednesdays</p>
                <p className="text-sm sm:text-base">9:00 AM - 4:00 PM</p>
              </div>
              <div className="flex items-center justify-between my-3 sm:my-5 md:my-7">
                <p className="text-sm sm:text-base">Thursdays & Fridays</p>
                <p className="text-sm sm:text-base">11:00 AM - 5:00 PM</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base">Saturdays & Sundays</p>
                <p className="text-sm sm:text-base">1:00 PM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
