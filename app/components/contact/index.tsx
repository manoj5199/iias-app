import ContactForm from "./form";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Logo } from "..";

const index = () => {
  return (
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

            <div className="flex gap-3 items-center p-5 rounded-md bg-white">
              <div className="rounded-full p-2 bg-orange-400 text-xl text-white">
                <MdOutlineMailOutline />
              </div>
              <div className="flex gap-1">
                <h1>Email:</h1>
                <p>integrationsacademy@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center p-5 rounded-md bg-white">
              <div className="rounded-full p-2 bg-orange-400 text-xl text-white">
                <FaPhone />
              </div>
              <div className="flex gap-1">
                <h1>Phone:</h1>
                <p>+91 9940079880</p>
              </div>
            </div>
            <div className="flex gap-3 items-center p-5 rounded-md bg-white">
              <div className="rounded-full p-2 bg-orange-400 text-xl text-white self-start">
                <IoLocationSharp />
              </div>
              <div className="flex gap-1">
                <h1>Address:</h1>
                <p className="flex flex-col">
                  <span className="block">38, S.S.Complex, 2nd Floor,</span>
                  <span className="block">Station Road, Villivakkam,</span>
                  <span className="block">Chennai 600 049.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
