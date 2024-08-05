"use client";

import { projects } from "@/projects";
import ProjectItem from "./ui/project-item";
import Container from "./ui/container";
import { useState } from "react";
import { Project } from "@/types";
import ModalProject from "./ui/modal-project";

const ProjectsSection = () => {
  const techs = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Prisma",
    "MySQL",
    "HTML-CSS-JS",
    "Supabase",
    "Firebase",
  ];

  const [techsSelected, setTechsSelected] = useState("");

  const projectsFiltered = projects.filter(
    (project) =>
      techsSelected === "" ||
      project.stacks.some((stack) => techsSelected.includes(stack))
  );

  const [openModal, setOpenModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  const openModalProject = (project: Project) => {
    setOpenModal(true);
    setProjectSelected(project);
  };

  const closeModal = () => {
    setOpenModal(false);
    setProjectSelected(null);
  };

  return (
    <>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-12">
              {projectsFiltered?.map((project) => (
                <ProjectItem
                  name={project.name}
                  description={project.description}
                  stacks={project.stacks}
                  url={project.url}
                  github_url={project.github_url}
                  image_url={project.image_url}
                  key={project.name}
                  onOpenModal={() => openModalProject(project)}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      {openModal && projectSelected && (
        <ModalProject data={projectSelected} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectsSection;
