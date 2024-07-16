import React from "react";
import { GiInjustice } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

function PracticeArea() {
  return (
    <div className="flex flex-col mt-0 py-0">
      <h3 className="text-[40px] text-center text-primary-blue48 font-lilita mt-10">PRACTICE AREAS</h3>
      <div className="grid grid-cols-3 gap-[0.1rem] h-[100px]">
        <div className="bg-gray-200 p-4 rounded flex flex-col justify-center">
          <div className="flex justify-center items-center gap-3">
            <GiInjustice className="w-[3rem] h-[2rem]" />
            <h4 className="text-1xl text-center text-primary-blue48 font-lilita mt-2">CRIMINAL LAW</h4>
          </div>
          <p className="text-primary-dark1E font-semibold text-md mx-8">
            My team can provide robust defence strategies to ensure your rights are protected and your freedom is secured.
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded flex flex-col justify-center">
          <div className="flex justify-center items-center gap-3">
            <MdOutlineFamilyRestroom className="w-[3rem] h-[2rem]" />
            <h4 className="text-1xl text-center text-primary-blue48 font-lilita mt-2">FAMILY BUSINESS</h4>
          </div>
          <p className="text-primary-dark1E font-semibold text-md mx-8">
            With a deep understanding of family-owned businesses, my company can provide legal solutions that safeguard your business legacy for
            future generations.
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded flex flex-col justify-center">
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="w-[3rem] h-[2rem]"/>
            <h4 className="text-1xl text-center text-primary-blue48 font-lilita mt-2">ESTATE PLANNING</h4>
          </div>
          <p className="text-primary-dark1E font-semibold text-md mx-8">
            Our comprehensive estate planning services ensure your assets are protected and your wishes are honored, giving you peace of mind for the
            future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
