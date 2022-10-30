import Image from "next/image";

function MediumCard(props) {
  const { img, title } = props;
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          alt={title}
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
export default MediumCard;
