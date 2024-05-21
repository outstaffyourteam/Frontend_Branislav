import MapOfUSA from "@/images/icons/MapOfUSA";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-soft-peach w-full md:px-32 py-6 flex items-center justify-between">
      <div className="flex flex-col items-start max-w-[800px]">
        <p className="text-orange-peel text-[48px] font-bold">
          2024 Presidential Candidates
        </p>
        <p className="text-davy-grey">
          Donald Trump is the presumptive Republican presidential nominee who
          will face President Joe Biden in November. These were his GOP primary
          challengers.
        </p>
      </div>
      <MapOfUSA />
    </div>
  );
};

export default Hero;
