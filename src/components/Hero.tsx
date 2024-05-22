import MapOfUSA from "@/images/icons/MapOfUSA";

type Props = { text: string };

const Hero = ({ text }: Props) => {
  return (
    <div className="bg-soft-peach px-10 w-full md:px-32 py-6 flex lg:flex-row flex-col gap-5 items-center justify-between">
      <div className="flex flex-col gap-5 items-start max-w-[800px]">
        <p className="text-orange-primary text-3xl xl:text-[48px] font-bold">
          2024 Presidential Candidates
        </p>
        <p className="text-davy-grey text-base">{text}</p>
      </div>
      <MapOfUSA />
    </div>
  );
};

export default Hero;
