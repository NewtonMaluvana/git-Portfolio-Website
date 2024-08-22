import { GrLocationPin } from "react-icons/gr";
import "./Contact.scss";
import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Portfolio2 = () => {
  return (
    <div className="contact p-10 w-full md:flex-row flex  gap-7 flex-col text-center items-center md:text-start">
      <div className="contact-info  rounded-xl bg-zinc-900 p-5 shadow-black md:w-2/3 w-full">
        <h1 className="text-purple-500 text-7xl font-semibold">Get in Touch</h1>
        <div className="m-8">
          <span className="text-xl text-orange-400">Email:</span>
          <p className="flex gap-2 items-center justify-center md:justify-start">
            <TfiEmail className="text-purple-500" />
            Sirnewtonnn@gmail.com
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
          action=""
          method="post"
          className=" w-full md:text-start text-center rounded-xl bg-zinc-900 p-5 shadow-black flex flex-col items-center justify-center"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="block w-10/12 m-2 rounded-md p-2 border-2 capitalize focus:outline-orange-400 focus:border-none bg-transparent"
          />

          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="block w-10/12 m-2 rounded-md p-2 border-2  focus:outline-orange-400 focus:border-none bg-transparent mb-12"
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="block w-10/12 m-2 rounded-t-md  p-2 border-2 uppercase focus:outline-orange-400 focus:border-none bg-transparent"
          />

          <textarea
            type="email"
            name=""
            id=""
            placeholder="Type your message"
            className="block w-10/12 m-2 rounded-sm p-2 border-2 h-56 rounded-b-md   focus:outline-orange-400 focus:border-none bg-transparent"
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
