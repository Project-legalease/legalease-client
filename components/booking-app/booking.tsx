"use client";

import React from "react";
import BookingAppForm from "./booking-app-form";
import BookImage from "./booking-app-img";

function Booking() {
  return (
    <div className="flex">
      <BookImage />
      <BookingAppForm />
    </div>
  );
}

export default Booking;
