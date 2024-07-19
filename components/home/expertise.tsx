import Link from "next/link";

function LawyerExpertise(): React.JSX.Element {
  return (
    <div className="relative z-0 bg-[url('/images/lawyer-2.jpeg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute z-1 top-0 bottom-0 right-0 left-0 bg-black/55 "></div>
      <div className="relative z-[2]  py-24 flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-white text-center font-lilita">
          WANT TO USE YOUR EXPERTISE?
        </h1>
        <h1 className="text-[40px] text-primary-orange61 text-center font-lilita">
          Join As a Lawyer
        </h1>
        <p className="text-xl text-white text-center font-bold italic mb-10">
          Are you ready to proffer solutions to clients in need of legal
          solutions?
        </p>
        <Link
          href="/signup?role=lawyer"
          className="py-3 px-4 rounded-lg bg-primary-orange61 font-bold text-white mt-[22px] font-inria"
        >
          Register As A Lawyer
        </Link>
      </div>
    </div>
  );
}

export default LawyerExpertise;
