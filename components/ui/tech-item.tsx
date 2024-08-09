import Image from "next/image";

interface TechItemProps {
  name: string;
}

const TechItem = ({ name }: TechItemProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-full border flex items-center justify-center size-9 dark:border-gray-800 -ml-2 first:ml-0 p-2 relative group/tech">
      <Image
        src={`/techs-svg/${name}.svg`}
        width={28}
        height={28}
        alt="React"
      />
    </div>
  );
};

export default TechItem;
