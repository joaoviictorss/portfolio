"use client";

import { projects } from "@/projects";
import ProjectItem from "./ui/project-item";
import Container from "./ui/container";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const techs = ["React", "Next.js", "TypeScript", "Javascript", "Node.js"];

  const [techsSelected, setTechsSelected] = useState("");

  const projectsFiltered = projects.filter(
    (project) =>
      techsSelected === "" ||
      project.stacks.some((stack) => techsSelected.includes(stack))
  );

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="projects">
      <Container>
        <div className="px-12 mt-24 ">
          <h2 className="text-4xl text-center font-bold">Meus projetos</h2>
          <div className="flex gap-4 mt-10 flex-wrap">
            <button
              onClick={() => setTechsSelected("")}
              className={`text-md font-semibold hover:text-blue-500 ${
                techsSelected === "" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Todos
            </button>
            {techs.map((tech) => (
              <button
                key={tech}
                onClick={() => setTechsSelected(tech)}
                className={`text-md font-semibold hover:text-blue-500 ${
                  techsSelected === tech ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-12"
          >
            {projectsFiltered?.map((project) => (
              <ProjectItem
                name={project.name}
                description={project.description}
                stacks={project.stacks}
                url={project.url}
                github_url={project.github_url}
                image_url={project.image_url}
                key={project.name}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
