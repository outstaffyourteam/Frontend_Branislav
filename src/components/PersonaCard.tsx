import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  party: string;
  about: string;
  onClick?: () => void;
};

const PersonaCard = ({ image, name, party, about, onClick }: Props) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      className="group cursor-pointer flex flex-col justify-center gap-5 w-full px-3 pt-3 pb-6 rounded-[20px] bg-soft-peach hover:bg-orange-primary transition-all duration-200"
    >
      <Image src={image} alt={name} height={450} />
      <div className="flex flex-col px-[90px] items-center gap-2">
        <p className="text-orange-primary group-hover:text-white text-2xl font-bold">
          {name}
        </p>
        <p className="text-dark-slate-gray text-sm">{party}</p>
        <div className="mt-2 bg-orange-primary group-hover:bg-white w-full h-[1px]" />
      </div>
      <p className="max-w-[400px] text-dark-slate-gray group-hover:text-white text-center transition-all">
        {about}
      </p>
    </div>
  );
};

export default PersonaCard;
