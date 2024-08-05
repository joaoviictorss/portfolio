import Image from "next/image";

interface CardTechsProps {
  techs: string;
  area: string;
  color: string;
  url_image: string;
}

const CardTechs = ({ techs, area, color, url_image }: CardTechsProps) => {
  return (
    <div
      className={`${color} rounded-2xl flex-col flex items-center max-h-[450px] p-8 gap-4 max-w-80 md:max-w-full hover:-translate-y-6 duration-150`}
    >
      <Image src={url_image} alt={area} width={250} height={250} />

      <span className="text-center text-white font-semibold text-xl">
        {area}
      </span>

      <div className="text-white text-center font-semibold">
        <p>{techs}</p>
      </div>
    </div>
  );
};

export default CardTechs;
