import { Project } from "@/types";
import { Github, Globe, X } from "lucide-react";
import Image from "next/image";
import TechItem from "./tech-item";

interface ModalProjectProps {
  data: Project;
  onClose: () => void;
}

const ModalProject = ({ data, onClose }: ModalProjectProps) => {
  return (
    <div className="fixed max-h-screen h-screen inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-hidden flex items-center justify-center ">
      <div className="absolute top-2 right-2 flex items-center justify-center cursor-pointer">
        <X onClick={onClose} className="absolute top-2 right-2 text-white" />
      </div>
      <div className="bg-white h-[500px] rounded-xl p-4 flex gap-4 w-[800px]">
        <div className="w-1/2 rounded-xl bg-gray-100 dark:bg-gray-800 relative overflow-hidden ">
          <Image
            src={data.image_url}
            alt={data.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <p className="text-lg text-slate-700">{data.description}</p>
            <div className="mt-4 flex flex-col gap-2">
              <p>Tecnologias utilizadas:</p>
              <div className="flex flex-wrap gap-2">

              {data.stacks.map((stack) => (
                <TechItem key={stack} name={stack} />
              ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              target="_blank"
              href={data.github_url}
              className="rounded-full flex items-center justify-center bg-yellow-500 border shadow-md p-2 hover:scale-110 transition"
            >
              <Github size={20} className="text-white" />
            </a>
            {data.url && (
              <a
                target="_blank"
                href={data.url}
                className="rounded-full flex items-center justify-center bg-blue-500 border shadow-md p-2 hover:scale-110 transition"
              >
                <Globe size={20} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
