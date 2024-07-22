import { LuCheckSquare } from "react-icons/lu";

const offers: string[] = [
  "Access to Pre-Vetted Lawyers and Paralegals: Thousands of qualified legal professionals at your fingertips.",
  "Nurturing Diverse Junior Talent: Our LegalEase Trainee scheme fosters the growth of diverse legal talent.",
  "Expert Guidance from Ex-Lawyers: Our HQ team provides insights on the best candidates for your specific needs.",
  "Swift Access to Legal Professionals: Faster connections to lawyers, trainees, and paralegals than anywhere else.",
];

function WhatIsLegalEase(): React.JSX.Element {
  return (
    <div className="py-[50px] px-5">
      <div className="w-full max-w-[1184px] mx-auto">
        <h1 className="font-lilita text-primary-orange61 text-3xl sm:text-[2.5em] mb-10 text-center">
          WHAT IS LEGALEASE?
        </h1>
        <p className="text-primary-blue48 text-sm sm:text-base">
          Elevating the Legal Profession LegalEase began with a straightforward
          question: What if busy legal teams could instantly connect with the
          lawyers and paralegals they require? Fast-forward seven years, and
          LegalEase is doing precisely that, now ranking among the UK’s
          fastest-growing companies.
        </p>
        <p className="text-primary-blue48 mt-3 text-sm sm:text-base">
          Our social mobility initiative, LegalEase Trainee, is also making
          significant strides. We empower legal teams to contribute to
          organizational diversity and inclusion (D&I), opening doors for
          aspiring solicitors from under-represented backgrounds.
        </p>
        <div className="mt-10">
          <h3 className="text-2xl text-primary-blue48 font-bold mb-2">
            The LegalEase platform proudly offers:
          </h3>
          <div className="grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2">
            {offers.map((offer, index) => (
              <div key={index} className="flex gap-2 items-start">
                <div>
                  <LuCheckSquare
                    size={20}
                    className="text-primary-orange61 mt-1"
                  />
                </div>
                <p className="text-primary-blue48 text-sm sm:text-base">
                  {offer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsLegalEase;
