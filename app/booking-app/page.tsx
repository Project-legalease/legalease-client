

import React from "react";
import Booking from "../../components/booking-app/booking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookAppointment | LegalEase",
  description: "Making legal access easy",
};


function BookAppointment() {
  return (
    <div className="min-h-screen w-full p-2 bg-white drop-shadow-xl">
      <Booking />
    </div>
  );
}

export default BookAppointment;
