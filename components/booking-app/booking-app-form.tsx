import React, { useState } from "react";
import Select from "react-select";

const lawyers = [
  { id: "1", value: "lawyer1", label: "John Doe" },
  { id: "2", value: "lawyer2", label: "Jane Smith" },
  { id: "3", value: "lawyer3", label: "Mary Jones" },
  { id: "4", value: "lawyer4", label: "Allen Poe" },
  { id: "5", value: "lawyer5", label: "Christian Smith" },
  { id: "6", value: "lawyer6", label: "Joachim Sourh" },
];

const BookingAppForm = () => {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    lawyer: null,
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

  const handleLawyerChange = (selectedOption: any) => {
    setAppointmentData({
      ...appointmentData,
      lawyer: selectedOption,
    });
  };

  return (
      <div className="w-[50%] p-4 bg-white">
        <h1 className="text-3xl font-extrabold text-center text-primary-blue48 font-lilita">Book a Consultation and Take the First Step Toward Justice.</h1>

        <form className="w-[90%] flex flex-col items-center">
          <p className="text-center text-gray-700 italic pt-4">Client Information</p>
          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">First Name:</label>
            <input
              type="text"
              name="name"
              value={clientData.name}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
              placeholder="Input Your First Name"
              required
            />
          </div>

          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">Email Address:</label>
            <input
              type="email"
              name="email"
              value={clientData.email}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
              placeholder="Input Your Email Address"
              required
            />
          </div>

          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">Phone No:</label>
            <input
              type="text"
              name="phoneNo"
              value={clientData.phoneNo}
              onChange={handleClientChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
              placeholder="Input Your Phone Number"
              required
            />
          </div>

          <p className="text-center text-gray-800 italic pt-2">Appointment Details</p>
          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">Date</label>
            <input
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleAppointmentChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
              placeholder="Select a preferred date"
              required
            />
          </div>

          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">Time:</label>
            <input
              type="time"
              name="time"
              value={appointmentData.time}
              onChange={handleAppointmentChange}
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
              placeholder="Select a preferred time"
              required
            />
          </div>

          <div className="mb-4 w-[90%]">
            <label className="block mb-2 font-extrabold text-gray-900">Choose a Lawyer</label>
            <Select
              name="lawyer"
              options={lawyers}
              value={appointmentData.lawyer}
              onChange={handleLawyerChange}
              className="w-full placeholder-slate-400 placeholder-opacity-90 italic border rounded border-solid border-black"
              placeholder="Select a lawyer"
            />
          </div>

          <p className="text-center text-gray-800 italic pt-2">Payment Details</p>
          <div className="mb-4 pt-4 w-[90%]">
            <label htmlFor="payment" className="text-gray-900 font-extrabold mb-2 block">
              Choose a payment method
            </label>
            <select
              id="payment"
              name="payment"
              className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
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

          <p className="text-center text-gray-800 italic pt-4">
            <label htmlFor="notes">Additional Notes</label>
          </p>
          <textarea
            name="notes"
            id="notes"
            rows={5}
            cols={40}
            className="px-8 py-2 w-full border rounded border-solid border-gray-300 placeholder-slate-400 placeholder-opacity-90 italic"
            placeholder="Add any specific details about your case"
            value={appointmentData.notes}
            onChange={handleAppointmentChange}
          />

          <button type="submit" className="w-1/2 px-4 py-2 mt-5 text-white bg-primary-orange61 rounded hover:bg-primary-orange61">
            Book Appointment
          </button>
        </form>
      </div>
  );
};

export default BookingAppForm;
