interface TechItemProps {
  name: string;
}

const TechItem = ({ name }: TechItemProps) => {
  return (
    <div className=" bg-neutral-700 rounded-md text-white p-2 text-xs w-min h-min flex-nowrap text-nowrap">
      {name}
    </div>
  );
};

export default TechItem;
