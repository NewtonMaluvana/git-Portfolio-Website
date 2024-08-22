import "./Portfolio.scss";
import img from "../../assets/store.png";

const Portfolio1 = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      img: "../../assets/store.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate deserunt inventore veritatis animi, recusandae corrupti ",
    },
    {
      id: 2,
      title: "Ecommerce Website2",
      img: "../..src/assets/store.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate deserunt inventore veritatis animi, recusandae corrupti ",
    },
    {
      id: 2,
      title: "Ecommerce Website2",
      img: "../..src/assets/store.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate deserunt inventore veritatis animi, recusandae corrupti ",
    },
    {
      id: 2,
      title: "Ecommerce Website2",
      img: "../..src/assets/store.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate deserunt inventore veritatis animi, recusandae corrupti ",
    },
  ];

  const getProject = ({ project }) => {
    return;
  };
  return (
    <div className="">
      <h1 className="text-5xl text-center text-purple-500 m-10">Projects</h1>
      <div className="porfolio lg:grid-cols-2 p-10 grid-cols-1 w-full">
        {projects.map((project) => (
          <div key={project.id} className="projects">
            <div className="img-info">
              <img src={img} alt="" />
            </div>
            <div className="project-info">
              <h1>{project.title}</h1>
              <p>{project.desc}</p>

              <a href="" className="flex justify-center items-center">
                <button>View Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio1;
