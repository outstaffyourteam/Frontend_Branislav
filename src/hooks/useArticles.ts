import { Article, ArticleOrder, ArticlesResponse } from "@/types/Article";
import { useEffect, useState } from "react";

const API_BASE = "https://api.webz.io";
const API_ENDPOINT = "/newsApiLite";
const API_KEY = process.env.NEXT_PUBLIC_WEBZ_API_KEY;

export const useArticles = (name: string, order: ArticleOrder) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async (endpoint: string) => {
    setIsLoading(true);
    const url = `${API_BASE}${endpoint}`;
    const response = await fetch(url);
    const data: ArticlesResponse = await response.json();

    if (data && data.posts && Array.isArray(data.posts)) {
      setArticles(data.posts);
      setNextUrl(data.next);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const query = `title:${name} AND (election OR polls) AND sentiment:(positive OR negative) AND language:english`;
    const sortOrder = order === "latest" ? "desc" : "asc";
    const endpoint = `${API_ENDPOINT}?token=${API_KEY}&q=${encodeURIComponent(
      query
    )}&sort=relevancy&order=${sortOrder}`;

    fetchArticles(endpoint);
  }, [name, order]);

  const fetchNextPage = () => {
    if (nextUrl && !isLoading) {
      fetchArticles(nextUrl);
    }
  };

  return { articles, fetchNextPage };
};
