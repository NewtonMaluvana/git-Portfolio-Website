import { useState } from "react";
import "./SideBar.scss";
import { easeInOut, motion } from "framer-motion";

import { MdMenu } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";
import { duration } from "@mui/material";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.1,
        easeInOut: "linear",
        type: "easeInOut",
        duration: "1",
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        easeInOut: "linear",
        type: "easeInOut",
        duration: "1",
      },
    },
  };
  const Itemvariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 50,
      opacity: 0,
    },
  };
  const variantes = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const items = [
    "Home",
    "Services",
    "Skills",
    "Certificate",
    "Projects",
    "Contact",
  ];
  return (
    <motion.div animate={toggle ? "open" : "closed"} className="sidebar">
      <motion.div variants={variants} className="case">
        <div variants={variantes} className="link">
          {items.map((item) => (
            <motion.a
              onClick={() => setToggle(false)}
              key={item}
              variants={Itemvariants}
              whileHover={{ scale: 1.1, onDurationChange: 2 }}
              href={`#${item}`}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <button onClick={() => setToggle(!toggle)} className="toggle-btn">
        {toggle == true ? <RxCross2 /> : <MdMenu />}
      </button>
    </motion.div>
  );
};
export default SideBar;
