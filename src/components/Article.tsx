"use client";
import { useArticles } from "@/hooks/useArticles";

type Props = {};

type Article = {
  author: string;
  thread: {
    title: string;
    description: string;
  };
};

const Article = (props: Props) => {
  const articles = useArticles();

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.thread.title}</h2>
          <p>Author: {article.author}</p>
          <p>{article.sentiment}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;
