import ArticleSegment from "@/components/Article/ArticleSegment";
import CandidateBio from "@/components/CandidateBio/CandidateBio";
import CandidateInfo from "@/components/CandidateInfo";
import Hero from "@/components/Hero";
import SentimentAnalysis from "@/components/SentimentAnalysis/SentimentAnalysis";
import Image from "next/image";
import BidenImage from "./../../images/biden.png";

export default function Biden() {
  return (
    <div className="flex flex-col w-full gap-14">
      <Hero text="Joe Biden is the current president who will face President Joe Biden in November. These were his GOP primary challengers." />
      <div className="flex flex-col items-start px-32 gap-16 pb-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-2.5">
            <Image src={BidenImage} alt="Biden" width={600} />
            <CandidateInfo url="https://joebiden.com/" />
          </div>
          <CandidateBio
            name="Joe Biden"
            party="The Democrats"
            about="In a historic move, President Biden announced his bid for re-election in 2024. Uniquely, his presidency came under scrutiny, as he faces a Senate inquiry regarding his son's foreign business dealings. Furthermore, potential mishandling of vital climate change documents found in his Delaware residence is leading to legal challenges. Biden, however, denies these allegations, maintaining a strong stance about his integrity."
          />
        </div>
        <SentimentAnalysis candidate="Biden" />
        <ArticleSegment candidate="Biden" />
      </div>
    </div>
  );
}
