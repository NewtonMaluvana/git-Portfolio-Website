import "./Portfolio.scss";
import img from "../../assets/store.png";

const Portfolio1 = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      img: "../../assets/website.png",
      desc: "Fullstack  Ecommerce website ,using typerscript,Nextjs with  user Authorisation by using Auth0,and user cart utility payment gateway using Paypal and mongoDb as a database ",
      url: "https://git-fullstack-ecommerce-website.vercel.app/",
    },
    {
      id: 2,
      title: "Live Gallery App",
      img: "../../assets/gallery.png",
      desc: "Live Web Gallery for uploading photos,using firebase as database and Auth0 for user Authorisation",
      url: "https://image-gallery-app-dva4.vercel.app/",
    },

    {
      id: 3,
      title: "Landing Page",
      img: "../../assets/landing.png",
      desc: "Fully Mobile Responsive landing  Website page,featuring VR reality product,Using React,Tailwind css,Framer  motion and Daisy ui",
      url: "https://vr-landing-page-topaz.vercel.app/",
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
              <img src={project.img} alt="" />
            </div>
            <div className="project-info flex justify-between">
              <h1>{project.title}</h1>
              <p className="text-xl">{project.desc}</p>

              <a
                href={project.url}
                target="_blank"
                className="flex justify-center items-center"
              >
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
