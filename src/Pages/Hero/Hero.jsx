import NavBar from "../../Components/Navbar/NavBar";
import img from "../../assets/newton.png";
import { motion, reverseEasing } from "framer-motion";
import "./Hero.scss";
import { BsArrowDown } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { MdMail, MdWork } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { useEffect, useState } from "react";

const Hero = () => {
  const Name = "Newton Maluvana";
  var index = 0;
  var time = 50;
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIntro("I am");
      setInterval(() => {
        setName(Name.substring(0, index++));
      }, (time += 100));
    }, 2000);
  }, [document.onload]);
  return (
    <div className="hero md:flex-row items-center flex-col-reverse h-full text-center md:text-start">
      <motion.div className="text-info">
        <motion.h1
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 2.5,
          }}
        >
          {" "}
          {intro} <span className="text-orange-400">{name}</span>
        </motion.h1>
        <motion.h3
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 1,
          }}
        >
          Inspiring Web/Sofatwre Developer +App Developer
        </motion.h3>

        <motion.div
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 2,
          }}
          className="btns"
        >
          <motion.a
            className="flex gap-4 justify-center items-center cursor-pointer"
            transition={{ duration: 1, type: "easiInOut" }}
            whileHover={{ scale: 1.1, borderColor: "orange" }}
            id="btn-project"
            href="#Projects"
          >
            <MdWork /> Projects
          </motion.a>
          <motion.a
            transition={{ duration: 1, type: "easiInOut" }}
            whileHover={{ scale: 1.1, backgroundColor: "grey" }}
            id="btn-contact"
            className="bg-orange-400 flex gap-4"
            href="#Contact"
          >
            <MdMail /> Contact me
          </motion.a>
        </motion.div>
        <div className="scroll">
          <p className="scroll-text"> scroll</p>
          <motion.p
            animate={{ translateY: 6, scale: 1.2 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <BsArrowDown />
          </motion.p>
        </div>
      </motion.div>
      <div className="image-info flex flex-col items-center">
        <motion.img
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 1,
          }}
          src={img}
          width={400}
          alt=""
        />
        <motion.div
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="mt-8"
        >
          <motion.button
            transition={{ duration: 1, type: "easiInOut" }}
            whileHover={{ scale: 1.1, borderColor: "orange" }}
            className="btn-cv"
          >
            Download CV <BiDownload />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
