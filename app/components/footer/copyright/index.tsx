import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const index = () => {
  return (
    <div className="w-full bg-slate-900 items-center justify-center hidden md:flex">
      <div className="w-10/12 flex items-center justify-between text-white">
        <p className="flex capitalize justify-center items-center gap-1">
          <MdCopyright /> 2024{" "}
          <span className="text-orange-500">integrationsacademy.</span> All
          copyrights reserved
        </p>
        <div className="flex justify-center items-center gap-5 py-5">
          <span className="lg:text-lg">Connect with Us</span>
          <a
            href=""
            className="hover:text-orange-500 text-sm sm:text-sm lg:text-2xl"
          >
            <BsFacebook />
          </a>
          <a
            href=""
            className="hover:text-orange-500 text-sm sm:text-base md:text-xl lg:text-2xl"
          >
            <FaInstagram />
          </a>
          <a href="" className="hover:text-orange-500 lg:text-2xl">
            <FaXTwitter />
          </a>
          <a href="" className="hover:text-orange-500">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
