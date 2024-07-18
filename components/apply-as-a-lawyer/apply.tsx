import React from "react";
import ApplyImage from "./applyAsLawyerBg";
import ApplyAsALawyer from "./applyAsLawyer";

function Apply() {
  return (
    <div className="flex flex-col lg:flex-row mb-8">
      <ApplyImage />
      <ApplyAsALawyer />
    </div>
  );
}

export default Apply;
