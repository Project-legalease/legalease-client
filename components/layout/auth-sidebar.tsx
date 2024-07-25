import React from "react";
import SubHeader from "./sub-header";
import Copyright from "./copyright";

function AuthSidebar() {
  return (
    <div className="hidden md:block w-full h-auto">
      <nav className="bg-white">
        <div className="flex items-center justify-between w-full max-w-[460px] h-[100px] mx-auto">
          <SubHeader />
        </div>
      </nav>
      <div className="w-full h-[calc(100%-100px)] bg-[url('/images/SignupBackground.jpg')] bg-center bg-no-repeat bg-cover"></div>
      {/* <Copyright /> */}
    </div>
  );
}

export default AuthSidebar;
