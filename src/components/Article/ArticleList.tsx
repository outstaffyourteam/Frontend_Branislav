"use client";

import { ArticleOrder, Article as ArticleType } from "@/types/Article";
import { cn } from "../lib/utils";
import Article from "./Article";
import OrderDropdown from "./OrderDropdown";

type Props = {
  articles: ArticleType[];
  isPositive?: boolean;
  order: ArticleOrder;
  setOrder: (order: ArticleOrder) => void;
};

const ArticleList = ({ articles, isPositive, order, setOrder }: Props) => {
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
        "flex flex-col w-full gap-6 px-6 py-8 border border-paris-green rounded-[10px]",
        isPositive
          ? "border-paris-green bg-aque-squeeze"
          : "border-sweet-pink bg-dawn-pink"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <p
            className={cn(
              "font-extrabold",
              isPositive ? "text-paris-green" : "text-sweet-pink"
            )}
          >
            78
          </p>
          <p className="text-pale-sky">
            {isPositive ? "Positive" : "Negative"} Articles
          </p>
        </div>
        <OrderDropdown order={order} setOrder={setOrder} />
      </div>
      {articles.map((article, index) => (
        <Article
          article={article}
          key={article.thread.uuid}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default ArticleList;
