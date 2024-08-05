import { Expand, Github, Globe } from "lucide-react";
import Image from "next/image";
import TechItem from "./tech-item";

interface ProjectItemProps {
  name: string;
  description: string;
  stacks: string[];
  url?: string;
  github_url?: string;
  image_url: string;
  onOpenModal: () => void;
}

const ProjectItem = ({
  name,
  description,
  stacks,
  url,
  github_url,
  image_url,
  onOpenModal,
}: ProjectItemProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden shadow-lg">
      {/* imagens e Ações */}
      <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 relative overflow-hidden ">
        <Image
          src={image_url}
          fill
          alt="Imagem"
          className="aspect-video object-contain rounded-xl"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full h-full">
          <div className="flex gap-x-6 justify-center h-full w-full rounded-xl">
            <div className="bg-black/20 w-full h-full rounded-xl p-4 flex flex-col justify-center">
              <div className="flex flex-1 items-start justify-center  ">
                <span className="bg-gray-800 p-2 rounded-md text-xl font-semibold text-white">
                  {name}
                </span>
              </div>

              <div className="space-x-4 flex items-center self-center">
                <button
                  onClick={onOpenModal}
                  className="rounded-full flex items-center justify-center bg-gray-500 border shadow-md p-2 hover:scale-110 transition"
                >
                  <Expand size={20} className="text-white" />
                </button>
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
      </div>
    </div>
  );
};

export default ProjectItem;
