import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }: any) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  const [left, setLeft]: any = useState();
  const [top, setTop]: any = useState();
  const [size, setSize]: any = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const transition = {
    ease: [0.03, 0.07, 0.73, 0.9],
    duration: 0.6,
  };

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.4 },
      x: -800,
    },
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.5 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.5 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((langue) => (
            <li key={langue}>{langue}</li>
          ))}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
      >
        <div className="img-container hover" style={{ height: "auto" }}>
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          {projectNumber === 0  ? (
            <img
              src={currentProject.img}
              alt={`projet ${currentProject.title}`}
              className="img"
              style={{ height: "auto" }}
            />
          ) : (
            <img
              src={currentProject.img}
              alt={`projet ${currentProject.title}`}
              className="img"
              style={{ height: "auto" }}
            />
          )}
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <div className="button">Voir le site</div>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
