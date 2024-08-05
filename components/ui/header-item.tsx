import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

interface HeaderItemProps {
  title: string;
  link_to: string;
}

const HeaderItem = ({ title, link_to }: HeaderItemProps) => {
  return (
    <Link
      href={"#"}
      className="py-2 px-6 w-full rounded-lg font-medium hover:bg-blue-500 hover:text-white text-nowrap text-center"
      to={link_to}
      offset={-100}
      spy={true}
      smooth={true}
      duration={500}
      activeClass="active"
    >
      {title}
    </Link>
  );
};

export default HeaderItem;
