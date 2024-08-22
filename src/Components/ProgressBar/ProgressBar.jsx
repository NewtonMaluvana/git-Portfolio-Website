import { useState } from "react";
import "./ProgressBar.scss";
import { motion } from "framer-motion";

const ProgressBar = (props) => {
  const [Value, setValue] = useState(0);

  const changeValue = () => {
    var v = 0;
    let progress = setInterval(() => {
      v += 2;

      setValue(v);
      if (v === props.endvalue) {
        clearInterval(progress);
      }
    }, 35);
  };

  var style1 = {
    position: "relative",
    height: "15dvb",
    width: "15dvb",
    background: `conic-Gradient(${props.color} ${
      Value * 3.6
    }deg, rgb(186, 165, 165) 0deg )`,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  };
  return (
    <motion.div className="cont p-2 " onViewportEnter={changeValue}>
      <span className="text-lg text-orange-500"> {Value}%</span>
      <div className="circular tex-sm" style={style1}>
        <motion.span
          animate={{ scale: 1.2 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`progress-value text-7xl ${props.text}`}
        >
          {props.logo}
        </motion.span>
      </div>
      <span className="text-2xl font-medium text-white">{props.name}</span>
    </motion.div>
  );
};
export default ProgressBar;
