import ArticleList from "@/components/Article/ArticleList";
import CandidateBio from "@/components/CandidateBio/CandidateBio";
import CandidateInfo from "@/components/CandidateInfo";
import Hero from "@/components/Hero";
import SentimentAnalysis from "@/components/SentimentAnalysis/SentimentAnalysis";
import Image from "next/image";
import TrumpImage from "./../images/trump.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-14">
      <Hero />
      <div className="flex flex-col items-start px-32 gap-16">
        <div className="flex items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-2.5">
            <Image src={TrumpImage} alt="Trump" width={600} />
            <CandidateInfo />
          </div>
          <CandidateBio />
        </div>
        <SentimentAnalysis />
        <div className="flex items-start gap-6 w-full">
          <ArticleList isPositive />
          <ArticleList isPositive={false} />
        </div>
      </div>
    </div>
  );
}
