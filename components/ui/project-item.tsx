import { Expand, Github, Globe } from "lucide-react";
import Image from "next/image";
import TechItem from "./tech-item";
import { motion } from "framer-motion";

interface ProjectItemProps {
  name: string;
  description: string;
  stacks: string[];
  url?: string;
  github_url?: string;
  image_url: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ProjectItem = ({
  name,
  url,
  stacks,
  description,
  github_url,
  image_url,
}: ProjectItemProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={item}
      className="bg-transparent group rounded-xl border dark:border-gray-800 overflow-hidden shadow-lg p-2"
    >
      {/* imagens e Ações */}
      <div className="aspect-video rounded-xl bg-transparent relative overflow-hidden group-hover:scale-[1.02] duration-300 transition">
        <Image
          src={image_url}
          priority
          quality={100}
          fill
          alt="Imagem"
          className="aspect-video object-contain rounded-xl "
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute flex flex-col w-full h-full">
          <div className=" w-full h-full rounded-xl p-4 flex flex-col justify-end">
            <div className="space-x-4 flex items-center self-center">
              <a
                target="_blank"
                href={github_url}
                className="rounded-full flex items-center justify-center bg-yellow-500 border shadow-md p-2 hover:scale-110 transition"
              >
                <Github size={20} className="text-white" />
              </a>
              {url && (
                <a
                  target="_blank"
                  href={url}
                  className="rounded-full flex items-center justify-center bg-blue-500 border shadow-md p-2 hover:scale-110 transition"
                >
                  <Globe size={20} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="mt-4 font-bold text-2xl"> {name}</h4>
        <p className="dark:text-zinc-500 text-zinc-400 font-normal line-clamp-3">
          {description}
        </p>
        <div className="flex first:-ml-0">
          {stacks.map((stack) => (
            <TechItem name={stack} key={stack} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
