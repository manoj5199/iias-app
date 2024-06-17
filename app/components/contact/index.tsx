import ContactForm from "./form";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Logo } from "..";
import ScrollAnimation from "react-animate-on-scroll";

const index = () => {
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <section
        className="w-dvw flex items-center justify-center bg-gray-100"
        id="contact"
      >
        <div className="w-10/12 flex flex-col">
          <h1 className="self-center mt-10 text-orange-500 font-medium lg:text-2xl capitalize">
            contact us
          </h1>
          <div className="flex w-full flex-col lg:flex-row items-center">
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="capitalize font-semibold text-xl">get in touch</h1>

              <Logo />

              <a
                href="mailto:integrationsacademy@gmail.com"
                className="flex gap-3 items-center p-5 rounded-md bg-orange-500"
              >
                <div className="rounded-full p-2 bg-white text-xl text-orange-500">
                  <MdOutlineMailOutline />
                </div>
                <div className="flex gap-1 text-white">
                  <h1>Email:</h1>
                  <p className="font-semibold">integrationsacademy@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:9940079880"
                className="flex gap-3 items-center p-5 rounded-md bg-orange-500"
              >
                <div className="rounded-full p-2 bg-white text-xl text-orange-500">
                  <FaPhone />
                </div>
                <div className="flex gap-1 text-white">
                  <h1>Phone:</h1>
                  <p className="font-semibold">+91 9940079880</p>
                </div>
              </a>
              <a
                href="https://maps.google.com/maps?q=38, S.S.Complex, 2nd Floor, Station Road, Villivakkam, Chennai 600 049."
                className="flex gap-3 items-center p-5 rounded-md bg-orange-500"
              >
                <div className="rounded-full p-2 bg-white text-xl text-orange-500">
                  <IoLocationSharp />
                </div>
                <div className="flex gap-1 text-white">
                  <h1>Address:</h1>
                  <p className="flex flex-col">
                    <span className="block">38, S.S.Complex, 2nd Floor,</span>
                    <span className="block">Station Road, Villivakkam,</span>
                    <span className="block">Chennai 600 049.</span>
                  </p>
                </div>
              </a>
            </div>
            <div className="flex-1 flex items-center p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default index;
