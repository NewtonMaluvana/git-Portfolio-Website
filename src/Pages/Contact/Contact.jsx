import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Portfolio2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f2d7cld", "template_e3jc9ol", form.current, {
        publicKey: "Y4GHfARGP4O4A5NGi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact p-10 w-full md:flex-row flex  gap-7 flex-col text-center items-center md:text-start">
      <div className="contact-info  rounded-xl bg-zinc-900 p-5 shadow-black md:w-2/3 w-full">
        <h1 className="text-purple-500 text-7xl font-semibold">Get in Touch</h1>
        <div className="m-8">
          <span className="text-xl text-orange-400">Email:</span>
          <p className="flex gap-2 items-center justify-center md:justify-start">
            <TfiEmail className="text-purple-500" />
            sirnewtonnnn@gmail.com
          </p>
        </div>
        <div className="m-8">
          <span className="text-xl text-orange-400">Address:</span>
          <p className="flex gap-2 items-center justify-center md:justify-start">
            <FaLocationPin />
            Johannesburg ,South Africa
          </p>
        </div>
        <div className="m-8">
          <span className="text-xl text-orange-400">Contacts</span>
          <p className="flex gap-2 items-center justify-center md:justify-start">
            <FaWhatsapp className="text-green-700 " s />
            +27 63 5878 465
          </p>
          <p className="flex gap-2 items-center justify-center md:justify-start">
            <FaPhone />
            +27 63 5878 465
          </p>
        </div>
      </div>
      <div className="w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          method="post"
          className=" w-full md:text-start text-center rounded-xl bg-zinc-900 p-5 shadow-black flex flex-col items-center justify-center"
        >
          <input
            type="text"
            name="name"
            id=""
            required
            placeholder="Name"
            className="block w-10/12 m-2 rounded-md p-2 border capitalize focus:outline-blue-500  bg-transparent"
          />
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Your Email"
            className="block w-10/12 m-2 rounded-md p-2 border focus:outline-blue-500  bg-transparent mb-12"
          />

          <input
            type="text"
            name="subject"
            id=""
            required
            placeholder="Subject"
            className="block w-10/12 m-2 rounded-t-md  p-2 border uppercase focus:outline-blue-500  bg-transparent"
          />

          <textarea
            type="text"
            name="message"
            id=""
            required
            placeholder="Type your message"
            className="block w-10/12 m-2 rounded-sm p-2 border h-56 rounded-b-md   focus:outline-blue-500 bg-transparent"
          />

          <button
            type="submit"
            className=" bg-green-700 p-2 m-2  hover:scale-105 duration-1000 ease-in-out hover:bg-slate-500 rounded-md w-32"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Portfolio2;
