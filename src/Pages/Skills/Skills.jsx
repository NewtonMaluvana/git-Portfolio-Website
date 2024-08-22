import { FaCss3, FaHtml5, FaReact, FaWordpress } from "react-icons/fa";

import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { SiFlutter, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa6";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      logo: <FaReact className="w-10" />,
      endvalue: 92,
      color: "blue",
      text: "text-blue-400",
    },
    {
      id: 2,
      name: "Flutter",
      logo: <SiFlutter className="w-10" />,
      endvalue: 88,
      color: "black",
      text: "text-blue-300",
    },
    {
      id: 3,
      name: "Java Script",
      logo: <DiJavascript className="w-10" />,
      endvalue: 96,
      color: "skyBlue",
      text: "text-yellow-400",
    },
    {
      id: 4,
      name: "Figma",
      logo: <FiFigma className="w-10" />,
      endvalue: 82,
      color: "orange",
      text: "text-black",
    },

    {
      id: 5,
      name: "Next Js",
      logo: <RiNextjsFill className="w-10" />,
      endvalue: 86,
      color: "purple",
      text: "text-black",
    },
    {
      id: 6,
      name: "PhP",
      logo: <FaPhp className="w-10" />,
      endvalue: 96,
      color: "purple",
      text: "text-blue-500",
    },
    {
      id: 7,
      name: "Tailwind",
      logo: <SiTailwindcss className="w-10" />,
      endvalue: 94,
      color: "blue",
      text: "text-black",
    },
    {
      id: 8,
      name: "WordPress",
      logo: <FaWordpress className="w-10" />,
      endvalue: 92,
      color: "orange",
      text: "text-black",
    },
  ];
  return (
    <div className="w-full ">
      <h1 className="text-center text-6xl mb-6 text-purple-900">Skills</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-center place-items-center lg:grid-cols-4 p-10 m-auto gap-y-10">
        {skills.map((item) => (
          <ProgressBar
            name={item.name}
            endvalue={item.endvalue}
            logo={item.logo}
            color={item.color}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
export default Skills;
