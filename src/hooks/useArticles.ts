"use client";

import { Article, ArticlesResponse } from "@/types/Article";
import { useEffect, useState } from "react";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const queries = [
    "title:Trump AND (election OR polls) AND sentiment:(positive OR negative) AND language:english",
    "title:Biden AND (election OR polls) AND sentiment:(positive OR negative) AND language:english",
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      const allArticles: Article[] = [];
      for (const query of queries) {
        const response = await fetch(
          `https://api.webz.io/newsApiLite?token=4be344f8-edd7-4388-a3af-901fd16f95b2&q=${encodeURIComponent(
            query
          )}`
        );
        const data: ArticlesResponse = await response.json();
        if (data && data.posts && Array.isArray(data.posts)) {
          allArticles.push(...data.posts);
        }
      }
      setArticles(allArticles);
    };

    fetchArticles();
  }, []);

  return articles;
};
