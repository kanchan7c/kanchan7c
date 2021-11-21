import React from "react";
import Cards from "./Cards";
import "./Projects.css";
import data from "../data.json";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="text-center mt-5">Portfolio</h1>
      {data &&
        data.map((item) => (
          <Cards
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            created={item.created}
            github={item.github}
            online={item?.online}
          />
        ))}
    </div>
  );
};

export default Projects;
