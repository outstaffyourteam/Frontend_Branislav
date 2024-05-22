"use client";

import { ArticlesResponse } from "@/types/Article";
import { SentimentCount } from "@/types/SentimentAnalysis";
import { useEffect, useState } from "react";

const API_URL = "https://api.webz.io/newsApiLite";
const API_KEY = process.env.NEXT_PUBLIC_WEBZ_API_KEY;

export const useSentimentCount = (title: string) => {
  const [summary, setSummary] = useState<SentimentCount>({
    positive: 0,
    negative: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const baseQuery = `title:${title} AND (election OR polls) AND language:english`;
  const sentiments = ["positive", "negative"];

  useEffect(() => {
    const fetchSentimentCount = async () => {
      setIsLoading(true);

      const promises = sentiments.map(async (sentiment) => {
        const response = await fetch(
          `${API_URL}?token=${API_KEY}&q=${encodeURIComponent(
            baseQuery
          )} AND sentiment:${sentiment}`
        );
        const data: ArticlesResponse = await response.json();
        return data.totalResults ?? 0;
      });

      const results = await Promise.all(promises);

      const summary: SentimentCount = results.reduce<SentimentCount>(
        (acc, count, index) => {
          return { ...acc, [sentiments[index]]: count };
        },
        { positive: 0, negative: 0 }
      );

      setIsLoading(false);
      setSummary(summary);
    };

    fetchSentimentCount();
  }, [title]);

  return { summary, isLoading };
};
