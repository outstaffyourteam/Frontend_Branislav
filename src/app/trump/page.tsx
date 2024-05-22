import ArticleSegment from "@/components/Article/ArticleSegment";
import CandidateBio from "@/components/CandidateBio/CandidateBio";
import CandidateInfo from "@/components/CandidateInfo";
import Hero from "@/components/Hero";
import SentimentAnalysis from "@/components/SentimentAnalysis/SentimentAnalysis";
import Image from "next/image";
import TrumpImage from "./../../images/trump.png";

export default function Trump() {
  return (
    <div className="flex flex-col w-full gap-14">
      <Hero
        text=" Donald Trump is the presumptive Republican presidential nominee who
          will face President Joe Biden in November. These were his GOP primary
          challengers."
      />
      <div className="flex flex-col items-start px-32 gap-16 pb-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-2.5">
            <Image src={TrumpImage} alt="Trump" width={600} />
            <CandidateInfo url="https://www.donaldjtrump.com/" />
          </div>
          <CandidateBio
            name="Donald Trump"
            party="The Republicans"
            about="Former President Trump was the first candidate to declare his intent to run for the GOP nomination in 2024. He also became the first former president to face any kind of criminal charges after being indicted by a Manhattan grand jury in a case related to a payoff to a porn star. He now faces federal criminal charges, too, related to his alleged mishandling of classified documents that were discovered at his Mar-a-Lago resort. (Trump has denied wrongdoing in both cases.)"
          />
        </div>
        <SentimentAnalysis candidate="Trump" />
        <ArticleSegment candidate="Trump" />
      </div>
    </div>
  );
}
