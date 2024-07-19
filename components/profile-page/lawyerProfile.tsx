
"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

function LawyerSection() {
  const [lawyer, setLawyer] = useState({
    name: "",
    location: "",
    practiceAreas: [""],
    languages: [""],
    experience: "",
    education: "",
    barAdmissions: "",
    professionalMemberships: [""],
    contact: {
      email: "",
      phone: "",
    },
    bio: "",
  });

  useEffect(() => {
    const fetchedData = {
      name: "Anthony Penn D.",
      location: "Lagos, Nigeria",
      practiceAreas: ["Family Law", "Criminal Law", "Corporate Law"],
      languages: ["English", "French", "Spanish"],
      experience: "5 years",
      education: "University of Lagos",
      barAdmissions: "Nigerian Bar Association",
      professionalMemberships: ["Nigerian Bar Association", "International Bar Association"],
      contact: {
        email: "pennTony@yahoo.com",
        phone: "+123456789",
      },
      bio: "With over 10 years of experience, I have established myself as a dedicated and compassionate lawyer, committed to delivering exceptional legal services to individuals and families. My expertise spans a range of practice areas, with a particular focus on criminal law.",
    };

    setLawyer(fetchedData);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full p-3">
      <div className="flex flex-col items-center w-full md:w-1/3">
        <div className="bg-[url('/images/lawyer-profile.png')] w-full h-96 bg-cover"></div>
        <div className="flex mt-2 gap-3">
          <FaStar className="text-primary-blue48 w-[1.5rem] h-[1.5rem]" />
          <FaStar className="text-primary-blue48 w-[1.5rem] h-[1.5rem]" />
          <FaStar className="text-primary-blue48 w-[1.5rem] h-[1.5rem]" />
          <FaStar className="text-primary-blue48 w-[1.5rem] h-[1.5rem]" />
          <FaRegStar className="text-primary-dark32 w-[1.5rem] h-[1.5rem]" />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
        <h2 className="text-xl font-bold italic">{lawyer.name}</h2>
        <h4 className="text-sm italic">{lawyer.location}</h4>
        <span className="text-sm">
          <strong>Practice Areas:</strong> {lawyer.practiceAreas.join(", ")}
        </span>
        <span className="text-sm">
          <strong>Languages:</strong> {lawyer.languages.join(", ")}
        </span>
        <span className="text-sm">
          <strong>Experience: </strong> {lawyer.experience}
        </span>
        <span className="text-sm">
          <strong>Education: </strong> {lawyer.education}
        </span>
        <span className="text-sm">
          <strong>Bar Admissions:</strong> {lawyer.barAdmissions}
        </span>
        <span className="text-sm">
          <strong>Professional Memberships:</strong> {lawyer.professionalMemberships.join(", ")}
        </span>

        <span className="text-sm">
          <strong>Email:</strong> {lawyer.contact.email}
        </span>
        <span className="text-sm">
          <strong>Phone:</strong> {lawyer.contact.phone}
        </span>

        <p className="mt-4 text-md font-semibold">{lawyer.bio}</p>
      </div>
    </div>
  );
}

export default LawyerSection;

