"use client";

import { useSentimentCount } from "@/hooks/useSentimentCount";
import Smiley from "@/images/icons/Smiley";
import BasicPie from "../PieChart";

const SentimentAnalysis = () => {
  const sentiments = useSentimentCount("Trump");

  return (
    <div className="w-full sm:gap-10 sm:flex-col lg:flex-row flex items-center justify-between bg-soft-peach rounded-lg py-10 px-9">
      <div className="flex flex-col items-start gap-6 max-w-[640px]">
        <div className="flex items-center gap-2">
          <Smiley />
          <p className="text-orange-peel flex font-semibold text-5xl w-full text-nowrap">
            Sentiment Analysis
          </p>
        </div>
        <p className="text-lg gap-5 flex flex-col text-dark-slate-gray w-full">
          <span>
            Webz.io sources and collects data from across the web and transforms
            it into machine-ready feeds that plug right into any platform. It
            deploys a wide array of crawlers that run in near real-time, drawing
            from millions of sources — covering everything from the biggest news
            sites, to obscure blogs and forums, all the way to the furthest
            reaches of the dark web.
          </span>
          <span>
            All stored in repositories, so machines consume live and historical
            data on demand. Webz.io gives machines data exactly the way they
            need it, so companies easily turn web data into customer value.
          </span>
        </p>
      </div>
      <BasicPie positive={sentiments.positive} negative={sentiments.negative} />
    </div>
  );
};

export default SentimentAnalysis;
