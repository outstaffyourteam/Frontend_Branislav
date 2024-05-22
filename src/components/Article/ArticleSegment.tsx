"use client";

import { useArticles } from "@/hooks/useArticles";
import { ArticleOrder } from "@/types/Article";
import { useState } from "react";
import ArticleList from "./ArticleList";

const ArticleSegment = () => {
  const [order, setOrder] = useState<ArticleOrder>("latest");
  let { articles, fetchNextPage } = useArticles("Trump", order);

  const [currentPage, setCurrentPage] = useState(1);

  const loadNextPage = () => {
    fetchNextPage();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        <ArticleList
          articles={articles}
          isPositive
          order={order}
          setOrder={setOrder}
        />
        <ArticleList
          articles={articles}
          isPositive={false}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <button onClick={loadPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={loadNextPage}>Next</button>
      </div>
    </div>
  );
};

export default ArticleSegment;
