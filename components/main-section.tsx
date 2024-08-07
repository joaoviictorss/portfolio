"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import TypeWriter from "./ui/type-writer";
import Container from "./ui/container";

const MainSection = () => {
  return (
    <main className="home h-full flex items-center justify-center bg-[url('/background/default.png')] dark:bg-[url('/background/dark.png')] bg-cover bg-left">
      <Container>
        <div className="flex items-center justify-center gap-2 px-4 flex-col lg:flex-row">
          <div className="flex gap-2 flex-col md:items-center lg:items-start">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              Olá, eu sou João
            </h1>
            <TypeWriter />
            <p className="text-xl md:text-center md:w-1/2 lg:text-start lg:w-full">
              Sou um estudante de engenharia da computação e meu foco é atuar na
              area de desenvolvimento de software como desenvolvedor front-end.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/joaoviictorss"
                target="_blank"
                className="hover:scale-125 duration-100"
              >
                <Image
                  src={"./svg/icon-github.svg"}
                  alt="github"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/joao-viictor/"
                target="_blank"
                className="hover:scale-125 duration-100"
              >
                <Image
                  src={"./svg/icon-linkedin.svg"}
                  alt="github"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="mailto:joao.viictorss31@gmail.com"
                target="_blank"
                className="hover:scale-125 duration-100"
              >
                <Image
                  src={"./svg/icon-email.svg"}
                  alt="email"
                  width={28}
                  height={20}
                />
              </a>
            </div>
            <div className="w-36 h-12 bg-blue-500 text-white rounded-lg items-center justify-center flex">
            <a download href="/curriculo">Baixar currículo</a>
            </div>
          </div>
          <div className="hidden md:block lg:w-full md:w-1/2 ">
            <Image
              src={"/svg/main-frame.svg"}
              alt="main-frame"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </Container>
      <div className="cursor-pointer absolute bottom-10 right-1/2 translate-x-1/2">
        <Link to="about" offset={-100} spy={true} smooth={true} duration={500}>
          <div className=" border-[2px] border-blue-500  rounded-2xl w-5 h-7 flex items-center justify-center">
            <div className="w-full h-full animate-bounce flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500 " />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default MainSection;
