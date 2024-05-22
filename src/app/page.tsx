"use client";

import Divider from "@/components/Divider";
import PersonaCard from "@/components/PersonaCard";
import { useRouter } from "next/navigation";
import BidenImage from "./../images/biden.png";
import TrumpImage from "./../images/trump.png";

const Page = () => {
  const router = useRouter();

  const handleClick = (persona: string) => {
    router.push(persona);
  };

  return (
    <div className="flex bg-slate-300 items-center justify-center h-screen w-full">
      <div className="flex flex-col items-start gap-6 bg-white rounded-[20px] py-10 min-w-[1000px]">
        <p className=" text-dark-slate-gray px-10 font-bold text-2xl">
          Select Persona
        </p>
        <Divider />
        <p className="self-center text-silver">
          Pick a Candidate to View Latest News
        </p>
        <div className="flex items-center w-full gap-6 px-10">
          <PersonaCard
            image={TrumpImage}
            name="Donald Trump"
            party="The Republicans"
            about="Donald John Trump was born on June 14, 1946, in Queens, New York City, to Fred and Mary Anne Trump. He grew up in Queens and attended the Kew-Forest School before transferring to the New York Military Academy at the age of 13."
            onClick={() => handleClick("trump")}
          />
          <PersonaCard
            image={BidenImage}
            name="Joe Biden"
            party="The Democrats"
            about="Joe Biden was born on June 14, 1946, in Queens, New York City, to Fred and Mary Anne Trump. He grew up in Queens and attended the Kew-Forest School before transferring to the New York Military Academy at the age of 17."
            onClick={() => handleClick("biden")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
