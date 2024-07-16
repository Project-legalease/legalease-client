"use client";

import LawyerProfile from "@/components/profile-page/lawyerProfile";
import React from "react";

function ProfilePage() {
  return (
    <div className="relative min-h-screen w-full p-8 bg-cover drop-shadow-xl">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/profile-background.png')] opacity-10 bg-cover z-0"></div>
      <div className="relative z-10">
        <LawyerProfile />
      </div>
    </div>
  );
}

export default ProfilePage;
