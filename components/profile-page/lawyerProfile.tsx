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
      bio: "With over 10 years of experience, I have established myself as a dedicated and compassionate lawyer...",
    };
    
    setLawyer(fetchedData);
  }, []);

  return (
    <div className="flex h-1/3 w-full">
      <div className="flex flex-row w-1/3">
        <div className="bg-[url('/images/lawyer-profile.png')] w-32 h-32 rounded-full object-cover"></div>
        <div className="flex mt-4 gap-1 items-center">
          <FaStar className="text-primary-blue48" />
          <FaStar className="text-primary-blue48" />
          <FaStar className="text-primary-blue48" />
          <FaStar className="text-primary-blue48" />
          <FaRegStar className="text-primary-whiteF5" />
        </div>
      </div>
      <div className="flex flex-row w-2/3">
        <h2>{lawyer.name}</h2>
        <h4>{lawyer.location}</h4>
        <div className="flex flex-row gap-2">
          {lawyer.practiceAreas.map((area, index) => (
            <span key={index}>{area}</span>
          ))}
          {lawyer.languages.map((language, index) => (
            <span key={index}>{language}</span>
          ))}
          <span>{lawyer.experience}</span>
          <span>{lawyer.education}</span>
          <span>{lawyer.barAdmissions}</span>
          {lawyer.professionalMemberships.map((membership, index) => (
            <span key={index}>{membership}</span>
          ))}
          <div className="flex flex-row gap-2">
            <span>{lawyer.contact.email}</span>
            <span>{lawyer.contact.phone}</span>
          </div>
        </div>
        <p>{lawyer.bio}</p>
      </div>
    </div>
  );
}

export default LawyerSection;
