import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactUs(): React.JSX.Element {
  return (
    <div className="py-10 px-5 min-h-[calc(100vh-100px)] bg-[url('/images/contact-body-bg.png')] bg-cover bg-top bg-no-repeat">
      <div className="flex flex-col sm:flex-row  w-full max-w-5xl mx-auto bg-white rounded-[20px] shadow-md overflow-hidden">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
