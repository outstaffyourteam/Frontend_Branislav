import { Article, ArticleOrder, ArticlesResponse } from "@/types/Article";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_WEBZ_API_KEY;
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const API_ENDPOINT = "/newsApiLite";

export const useArticles = (name: string, order: ArticleOrder) => {
  const [articles, setArticles] = useState<Article[][]>([[]]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchArticles = async (endpoint: string) => {
    setIsLoading(true);
    const url = `${API_BASE}${endpoint}`;
    const response = await fetch(url);
    const data: ArticlesResponse = await response.json();

    if (data && data.posts && Array.isArray(data.posts)) {
      setArticles((oldArticles) => [...oldArticles, data.posts]);
      setNextUrl(data.next);
      setCurrentPage((prevPage) => prevPage + 1);
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
    if (!isLoading && nextUrl) {
      fetchArticles(nextUrl);
    }
  };

  const fetchPrevPage = () => {
    if (!isLoading && currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    articles: articles[currentPage],
    isLoading,
    fetchNextPage,
    fetchPrevPage,
  };
};
