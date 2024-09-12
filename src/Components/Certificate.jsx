import { pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const Certificate = () => {
  const Card = () => {
    var [isOpen, setIsOpen] = useState(false);
    var [isOpen1, setIsOpen1] = useState(false);
    var [isOpen2, setIsOpen2] = useState(false);
    var [isOpen3, setIsOpen3] = useState(false);
    return (
      <div className="w-full">
        <h1 className="text-center text-purple-700 text-5xl grid-cols-1 p-2 m-2">
          Certficates
        </h1>

        <div className="p-2 gap-8 justify-center flex flex-wrap h-auto   w-full">
          <div
            className="w-[320px] relative rounded-md"
            onMouseLeave={() => setIsOpen(false)}
            onMouseEnter={() => setIsOpen(true)}
          >
            <img
              className="w-full h-full object-contain"
              src="/images/java.png"
              alt="Full Java Script course Certificate"
            />
            {isOpen && (
              <div className="rounded-md absolute top-0 left-0 w-full h-full bg-slate-800 p-2 text-center opacity-95 flex justify-center flex-col items-center gap-5">
                <h1 className="lg:text-3xl  md:text-2xl sm:text-xl text-lg">
                  Udemy Full Java Script Course
                </h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href="http://ude.my/UC-a295e33b-df2f-46f0-b931-20aff63c2f9f"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-[320px] "
            onMouseLeave={() => setIsOpen1(false)}
            onMouseEnter={() => setIsOpen1(true)}
          >
            <img
              className="w-full h-full object-fill"
              src="/images/php.png"
              alt="PHP course certificate"
            />
            {isOpen1 && (
              <div className="rounded-md absolute top-0 left-0 w-full h-full bg-slate-800 p-2 text-center  opacity-95 flex justify-center flex-col items-center gap-5">
                <h1 className="lg:text-3xl  md:text-2xl sm:text-xl text-lg ">
                  Udemy PhP 8.2 Crash Course
                </h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href="http://ude.my/UC-75dc0dbd-b4f0-45ba-80fa-d69c82b96dc3"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-[320px]"
            onMouseLeave={() => setIsOpen2(false)}
            onMouseEnter={() => setIsOpen2(true)}
          >
            <img
              className="w-full h-full object-fill"
              src="/images/web.png"
              alt="Web Dev course certificate"
            />
            {isOpen2 && (
              <div className=" rounded-md absolute top-0 left-0 w-full h-full bg-slate-800 p-2 text-center opacity-95 flex justify-center flex-col items-center gap-5">
                <h1 className="lg:text-3xl  md:text-2xl sm:text-xl text-lg">
                  UdemyFull Stach Web Development{" "}
                </h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href="http://ude.my/UC-268980fd-1766-4ecc-a281-0eb814b84e34"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-[320px] "
            onMouseLeave={() => setIsOpen3(false)}
            onMouseEnter={() => setIsOpen3(true)}
          >
            <img
              className="w-full h-full object-fill"
              src="/images/academy.png"
              alt="code academy course certificate"
            />
            {isOpen3 && (
              <div className=" rounded-md absolute top-0 left-0 w-full h-full bg-slate-800 opacity-95 p-6 text-center flex justify-center flex-col items-center gap-10">
                <h1 className="lg:text-3xl  md:text-2xl sm:text-xl text-lg">
                  Responsive Web Dev -Code Academy
                </h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href="https://www.freecodecamp.org/certification/Newton_Andzani_Maluvana/responsive-web-design"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Card />
    </div>
  );
};
export default Certificate;
