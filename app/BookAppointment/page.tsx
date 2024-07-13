"use client";

import React, { useState } from "react";

function BookAppointment() {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    lawyer: "",
    payment: "",
    notes: "",
  });

  const handleClientChange = (event: any) => {
    setClientData({
      ...clientData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAppointmentChange = (event: any) => {
    setAppointmentData({
      ...appointmentData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-white-cover bg-center">
        <div className="w-full h-full bg-no-repeat bg-cover" style={{ background: `url('/assets/ProfileBackground.jpg')` }}></div>
      </div>
      <div className="w-[50%] p-8 bg-white">
        <h1 className="text-3xl font-extrabold text-center text-blue-950 font-sans">Book a Consultation and Take the First Step Toward Justice.</h1>

        <form className="w-[90%]">
          <p className="text-center text-gray-700 italic pt-4">Client Information</p>
          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">First Name:</label>
            <input
              type="text"
              name="name"
              value={clientData.name}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Input Your First Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">Email Address:</label>
            <input
              type="email"
              name="email"
              value={clientData.email}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Input Your Email Address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">Phone No:</label>
            <input
              type="text"
              name="phoneNo"
              value={clientData.phoneNo}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Input Your Phone Number"
              required
            />
          </div>

          <p className="text-center text-gray-700 italic pt-2">Appointment Details</p>
          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">Date</label>
            <input
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleAppointmentChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Select a preferred date"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">Time:</label>
            <input
              type="time"
              name="time"
              value={appointmentData.time}
              onChange={handleAppointmentChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Select a preferred time"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-extrabold text-gray-900">Lawyer:</label>
            <input
              type="text"
              name="lawyer"
              value={appointmentData.lawyer}
              onChange={handleAppointmentChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              placeholder="Select a preferred lawyer"
              required
            />
          </div>

          <p className="text-center text-gray-700 italic pt-2">Payment Details</p>
          <div className="mb-4 pt-4">
            <label htmlFor="payment" className="text-slate-700 ">
              Choose a payment method
            </label>
            <select
              id="payment"
              name="payment"
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-75 italic"
              value={appointmentData.payment}
              onChange={handleAppointmentChange}
              required>
              <option value="" disabled selected className="text-black">
                Select a payment method
              </option>
              <option value="paypal" className="text-black">
                PayPal
              </option>
              <option value="stripe" className="text-black">
                Stripe
              </option>
              <option value="bank_transfer" className="text-black">
                Bank Transfer
              </option>
            </select>
          </div>

          <p className="text-center text-gray-700 italic pt-4">
            <label htmlFor="notes">Additional Notes</label>
          </p>
          <textarea
            name="notes"
            id="notes"
            rows={5}
            cols={50}
            className="px-8 py-2 w-full border rounded border-solid border-gray-300 placeholder-slate-400 placeholder-opacity-100 italic"
            placeholder="Add any specific details about your case">
            {appointmentData.notes}
          </textarea>

          <button type="submit" className="w-1/2 px-4 py-2 mt-4 text-white bg-red-500 rounded hover:red-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
