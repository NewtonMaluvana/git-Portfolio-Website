import "./Navbar.scss";
import {
  FaFacebook,
  FaGithub,
  FaInternetExplorer,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SideBar from "../Sidebar/SideBar";
import { BiDownload } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />

      <div className="wrapper">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.h1>

        <div className="socials">
          <motion.a
            drag
            // initial={{scale: -3 }}
            animate={{ translateY: 5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 0.5 }}
            href=""
          >
            <FaFacebook id="facebook-icon" />
          </motion.a>
          <motion.a
            animate={{ translateY: 5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 0.5 }}
            href=""
          >
            <FaGithub id="github-icon" />
          </motion.a>
          <motion.a
            animate={{ translateY: 5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 0.5 }}
            href=""
          >
            <FaLinkedin id="linkedin-icon" />
          </motion.a>
          <motion.a
            animate={{ translateY: 5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 0.5 }}
            drag
            href=""
          >
            <FaWhatsapp id="whatsapp-icon" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
