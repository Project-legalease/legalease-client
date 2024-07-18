import Image from "next/image";

export default function Mission(): React.JSX.Element {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start gap-7 justify-between py-[50px] px-6 w-full max-w-6xl font-inria mx-auto duration-300">
        <div className="w-full flex gap-5">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/about-mission.png"
              alt="Our mission image"
              width={200}
              height={178}
            />
            <Image
              src="/images/about-mission-1.png"
              alt="Our mission image"
              width={200}
              height={178}
            />
          </div>
          <div className="flex flex-col gap-6 mt-[15px]">
            <Image
              src="/images/about-mission-2.png"
              alt="Our mission image"
              width={200}
              height={178}
            />
            <Image
              src="/images/about-mission-3.png"
              alt="Our mission image"
              width={200}
              height={178}
            />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[40px] text-primary-blue48 font-lilita drop-shadow-lg">
            Our Mission
          </h1>
          <p className="text-2xl text-primary-dark32">
            We Are Here For Your Legal Advices And Cases
          </p>
          <div className="flex flex-col gap-[14px] mt-4 w-full max-w-[388px]">
            <p className="text-base text-primary-dark1E">
              Our mission is to deliver exceptional legal services with
              integrity, compassion, and excellence, making a positive impact in
              our community.
            </p>
            <p className="text-base text-primary-dark1E">
              We are dedicated to providing personalized, innovative, and
              effective legal solutions that exceed our clients&#39;
              expectations.
            </p>
            <p className="text-base text-primary-dark1E">
              We strive to build long-lasting relationships with our clients,
              providing trusted guidance and advocacy in all legal matters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
