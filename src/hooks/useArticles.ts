"use client";

import { Article, ArticlesResponse } from "@/types/Article";
import { useEffect, useState } from "react";

export const useArticles = (name: string): Article[] => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const query = `title:${name} AND (election OR polls) AND sentiment:(positive OR negative) AND language:english`;
      const response = await fetch(
        `https://api.webz.io/newsApiLite?token=4be344f8-edd7-4388-a3af-901fd16f95b2&q=${encodeURIComponent(
          query
        )}`
      );
      const data: ArticlesResponse = await response.json();
      if (data && data.posts && Array.isArray(data.posts)) {
        setArticles(data.posts);
      }
    };

    fetchArticles();
  }, [name]);

  return articles;
};
