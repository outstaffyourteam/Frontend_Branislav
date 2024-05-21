"use client";

import { ArticlesResponse } from "@/types/Article";
import { SentimentCount } from "@/types/SentimentAnalysos";
import { useEffect, useState } from "react";

export const useSentimentCount = (title: string): SentimentCount => {
  const [summary, setSummary] = useState<SentimentCount>({
    positive: 0,
    negative: 0,
  });

  const baseQuery = `title:${title} AND (election OR polls) AND language:english`;
  const sentiments = ["positive", "negative"];

  useEffect(() => {
    const fetchSentimentCount = async () => {
      let summary: SentimentCount = { positive: 0, negative: 0 };

      for (const sentiment of sentiments) {
        const response = await fetch(
          `https://api.webz.io/newsApiLite?token=4be344f8-edd7-4388-a3af-901fd16f95b2&q=${encodeURIComponent(
            baseQuery
          )} AND sentiment:${sentiment}`
        );
        const data: ArticlesResponse = await response.json();
        if (data && data.totalResults) {
          summary = { ...summary, [sentiment]: data.totalResults };
        }
      }

      setSummary(summary);
    };

    fetchSentimentCount();
  }, [title]);

  return summary;
};
