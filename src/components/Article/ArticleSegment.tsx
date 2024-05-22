"use client";

import { useArticles } from "@/hooks/useArticles";
import { ArticleOrder } from "@/types/Article";
import { useState } from "react";
import Pagination from "../Pagination";
import ArticleList from "./ArticleList";

type Props = { candidate: string };

const ArticleSegment = ({ candidate }: Props) => {
  const [order, setOrder] = useState<ArticleOrder>("latest");
  let { articles, isLoading, fetchNextPage, fetchPrevPage } = useArticles(
    candidate,
    order
  );

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
    <div className="flex w-full flex-col items-center gap-16">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
          <ArticleList
            articles={articles}
            isPositive
            order={order}
            setOrder={setOrder}
            candidate={candidate}
          />
          <ArticleList
            articles={articles}
            isPositive={false}
            order={order}
            setOrder={setOrder}
            candidate={candidate}
          />
        </div>
      )}

      <Pagination
        pageNumber={currentPage}
        onPrev={loadPreviousPage}
        onNext={loadNextPage}
      />
    </div>
  );
};

export default ArticleSegment;
