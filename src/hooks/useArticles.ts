import { Article, ArticleOrder, ArticlesResponse } from "@/types/Article";
import { useEffect, useState } from "react";

const API_URL = "https://api.webz.io/newsApiLite";
const API_KEY = process.env.NEXT_PUBLIC_WEBZ_API_KEY;

export const useArticles = (name: string, order: ArticleOrder): Article[] => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const query = `title:${name} AND (election OR polls) AND sentiment:(positive OR negative) AND language:english`;

      const sortOrder = order === "latest" ? "desc" : "asc";

      const response = await fetch(
        `${API_URL}?token=${API_KEY}&q=${encodeURIComponent(
          query
        )}&sort=relevancy&order=${sortOrder}`
      );
      const data: ArticlesResponse = await response.json();

      if (data && data.posts && Array.isArray(data.posts))
        setArticles(data.posts);
    };

    fetchArticles();
  }, [name, order]);

  return articles;
};
