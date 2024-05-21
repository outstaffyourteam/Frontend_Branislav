"use client";

import { ArticleOrder } from "@/types/Article";
import { useState } from "react";
import ArticleList from "./ArticleList";

const ArticleSegment = () => {
  const [order, setOrder] = useState<ArticleOrder>("latest");

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
      <ArticleList isPositive order={order} setOrder={setOrder} />
      <ArticleList isPositive={false} order={order} setOrder={setOrder} />
    </div>
  );
};

export default ArticleSegment;
