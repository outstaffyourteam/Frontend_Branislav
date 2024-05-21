"use client";

import { useArticles } from "@/hooks/useArticles";
import { cn } from "../lib/utils";
import Article from "./Article";

type Props = { isPositive?: boolean };

const ArticleList = ({ isPositive }: Props) => {
  let articles = useArticles("Trump");

  if (isPositive !== undefined) {
    articles = articles.filter((article) =>
      isPositive
        ? article.sentiment === "positive"
        : article.sentiment === "negative"
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col w-full px-6 py-8 border border-paris-green rounded-[10px] gap-4",
        isPositive
          ? "border-paris-green bg-aque-squeeze"
          : "border-sweet-pink bg-dawn-pink"
      )}
    >
      {articles.map((article, index) => (
        <Article
          article={article}
          key={article.thread.uuid}
          // todo: fix this
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default ArticleList;
