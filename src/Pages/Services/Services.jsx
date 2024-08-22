import { FaHtml5, FaReact } from "react-icons/fa";
import "./Services.scss";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { SiFlutter } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

function Services() {
  const service = [
    {
      id: 1,
      name: "UI/Figma Design",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi culpa, iusto amet provident odio delectus praesentium dignissimos voluptate ",
      logo: <FiFigma />,
    },
    {
      id: 2,
      name: "Web development",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi culpa, iusto amet provident odio delectus praesentium dignissimos voluptate ",
      logo: <CgWebsite />,
    },
    {
      id: 3,
      name: "App Development",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi culpa, iusto amet provident odio delectus praesentium dignissimos voluptate ",
      logo: <SiFlutter />,
    },
  ];
  return (
    <div className="w-full ">
      <h1 className="text-center text-6xl mb-6 text-purple-900">What We Do</h1>
      <div className="flex gap-2 flex-wrap md:flex-row flex-col  justify-around items-center">
        {service.map((item) => (
          <div className="card rounded-md">
            <h1 className="flex gap-2 items-center justify-center">
              {item.logo}
              {item.name}
            </h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
