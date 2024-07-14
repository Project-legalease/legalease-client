"use client"

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton(): React.JSX.Element {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className="flex items-center cursor-pointer text-primary-dark1E w-fit border-b border-transparent hover:border-b hover:border-primary-dark32 duration-300"
    >
      <ArrowLeft className="text-primary-dark1E size-3 inline mr-2" />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
