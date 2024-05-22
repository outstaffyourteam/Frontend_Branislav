"use client";

import { Article as ArticleType } from "@/types/Article";
import parse from "html-react-parser";
import { Suspense } from "react";
import { formatDate, truncateText } from "../lib/utils";
import ArticlePill from "./ArticlePill";
import ViewOriginalArticleButton from "./ViewOriginalArticleButton";

type Props = { article: ArticleType; isFirst?: boolean };

const Article = ({ article, isFirst }: Props) => {
  return (
    <div className="flex flex-col w-full items-start gap-5 bg-white rounded-[10px] p-3.5">
      {/* todo: fix this */}
      {isFirst && article.thread.main_image && (
        <Suspense fallback={<div>Loading...</div>}>
          <img src={article?.thread.main_image} alt="Article Image" />
        </Suspense>
      )}
      <div className="w-full justify-between flex items-center">
        <ArticlePill isPositive={article?.sentiment === "positive"} />
        <div className="flex text-sm text-aluminium items-center gap-2.5">
          <p>Posted by {article?.author}</p>
          <p className="-mt-2">.</p>
          <p>{formatDate(article?.thread.published)}</p>
        </div>
      </div>
      <div className="flex flex-col items-start w-full gap-4">
        <p className="text-2xl font-bold text-dark-slate-gray">
          {article?.title}
        </p>
        <p>
          {article?.highlightText &&
            parse(truncateText(article?.highlightText))}
        </p>
      </div>
      <ViewOriginalArticleButton
        isPositive={article?.sentiment === "positive"}
        href={article.thread.url}
      />
    </div>
  );
};

export default Article;
