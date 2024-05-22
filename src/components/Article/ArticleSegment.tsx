"use client";

import { useArticles } from "@/hooks/useArticles";
import { ArticleOrder } from "@/types/Article";
import { useState } from "react";
import Pagination from "../Pagination";
import ArticleList from "./ArticleList";

const ArticleSegment = () => {
  const [order, setOrder] = useState<ArticleOrder>("latest");
  let { articles, fetchNextPage, fetchPrevPage } = useArticles("Trump", order);

  const [currentPage, setCurrentPage] = useState(1);

  const loadNextPage = () => {
    fetchNextPage();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadPreviousPage = () => {
    if (currentPage > 1) {
      fetchPrevPage();
      setCurrentPage((prevPage) => prevPage - 1);
    }
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

      <Pagination
        pageNumber={currentPage}
        onPrev={loadPreviousPage}
        onNext={loadNextPage}
      />
    </div>
  );
};

export default ArticleSegment;
