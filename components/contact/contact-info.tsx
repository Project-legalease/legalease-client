import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const contacts: { label: string; value: string }[] = [
  { label: "Address", value: "123 Main Street, City, Country" },
  { label: "Phone", value: "(+234) 813-600-8093" },
  { label: "Email", value: "contact@legalease.com" },
];

export default function ContactInfo(): React.JSX.Element {
  return (
    <div className="w-fullw-2/5 bg-[url('/images/contact-bg.png')] bg-cover bg-center bg-no-repeat px-6 font-inria">
      <h2 className="text-3xl text-white font-lilita mt-20">
        Contact Information
      </h2>
      <p className="text-white italic font-normal text-sm">
        We are here to assist you. Reach out to us for any inquiries or legal
        assistance.
      </p>
      <div className="mt-[60px] text-white">
        {contacts.map((contact, index) => (
          <div key={index} className="mb-10">
            <p className="text-base mb-4">{contact.label}</p>
            <p className="text-base font-lilita">{contact.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 mb-5 mt-[100px]">
        <FaFacebook
          size={30}
          className="text-white hover:text-primary-orange61 duration-300 cursor-pointer"
        />
        <IoLogoWhatsapp
          size={30}
          className="text-white hover:text-primary-orange61 duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}
