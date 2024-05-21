import MapOfUSA from "@/images/icons/MapOfUSA";

const Hero = () => {
  return (
    <div className="bg-soft-peach px-10 w-full md:px-32 py-6 flex lg:flex-row flex-col gap-5 items-center justify-between">
      <div className="flex flex-col gap-5 items-start max-w-[800px]">
        <p className="text-orange-peel text-3xl xl:text-[48px] font-bold">
          2024 Presidential Candidates
        </p>
        <p className="text-davy-grey text-base">
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
