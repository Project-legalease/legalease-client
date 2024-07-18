import Link from "next/link";

export default function AboutIntro(): React.JSX.Element {
  return (
    <div className="relative z-0 flex flex-col items-center gap-4 py-[70px] px-6 font-inria bg-[url('/images/about-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute z-[1] top-0 right-0 left-0 bottom-0 bg-black/45"></div>
      <div className="relative z-[2] text-center max-w-lg w-full">
        <h1 className="text-[40px] text-white font-lilita">ABOUT US</h1>
        <p className="text-2xl text-white text-center">
          Committed to providing exceptional legal services and client
          satisfaction.
        </p>
        <div className="my-4">
          <Link
            href="/login"
            className="w-fit px-4 py-4 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
