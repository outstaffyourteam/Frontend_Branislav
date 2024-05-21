"use client";

import { ArticlesResponse } from "@/types/Article";
import { SentimentCount } from "@/types/SentimentAnalysis";
import { useEffect, useState } from "react";

const API_URL = "https://api.webz.io/newsApiLite";
const API_KEY = process.env.NEXT_PUBLIC_WEBZ_API_KEY;

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
          `${API_URL}?token=${API_KEY}&q=${encodeURIComponent(
            baseQuery
          )} AND sentiment:${sentiment}`
        );
        const data: ArticlesResponse = await response.json();

        if (data && data.totalResults)
          summary = { ...summary, [sentiment]: data.totalResults };
      }

      setSummary(summary);
    };

    fetchSentimentCount();
  }, [title]);

  return summary;
};
