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
            href="https://web.facebook.com/profile.php?id=61557618467562"
            target="_blank"
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
            href="https://github.com/NewtonMaluvana"
            target="_blank"
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
            href="https://www.linkedin.com/in/newton-maluvana-40baba325/"
            target="_blank"
          >
            <FaLinkedin id="linkedin-icon" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
