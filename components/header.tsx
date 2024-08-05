"use client";

import { useTheme } from "next-themes";
import Container from "./ui/container";
import HeaderItem from "./ui/header-item";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="shadow-sm fixed w-full top-0 z-10 bg-white dark:bg-gray-600">
      <Container>
        <div className="flex w-full justify-between items-center h-16 px-4">
          <div className="font-semibold">&lt; João Victor &gt;</div>
          <div className="flex items-center space-x-8">
            <nav
              className={
                openNav
                  ? "md:flex-row md:static md:p-0 absolute top-20 dark:bg-gray-800 md:dark:bg-transparent bg-white items-center justify-center gap-4 rounded-lg p-2 flex flex-col"
                  : "md:flex-row md:static md:p-0 absolute top-20 dark:bg-gray-800 md:dark:bg-transparent bg-white items-center justify-center gap-4 rounded-lg p-2 flex-col hidden md:flex"
              }
            >
              {/* "md:flex-row md:static md:p-0 absolute top-20 dark:bg-gray-800 md:dark:bg-transparent bg-white items-center justify-center gap-4 rounded-lg p-2 flex flex-col " */}
              <HeaderItem title="Home" link_to="home" />
              <HeaderItem title="Sobre mim" link_to="about" />
              <HeaderItem title="Projetos" link_to="projects" />
              <HeaderItem title="Contato" link_to="contact" />
            </nav>
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
            >
              <Image
                src={`${theme === "dark" ? "./svg/moon.svg" : "./svg/sun.svg"}`}
                alt="theme-toggle"
                width={40}
                height={40}
              />
            </button>
            <div className="md:hidden block">
              <Hamburger toggled={openNav} toggle={setOpenNav} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
