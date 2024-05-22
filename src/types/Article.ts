export type Article = {
  thread: {
    uuid: string;
    title: string;
    url: string;
    site_full: string;
    site: string;
    published: string;
    main_image: string;
  };
  author: string;
  title: string;
  language: string;
  sentiment: string | null;
  crawled: string;
  highlightText: string;
};

export type ArticlesResponse = {
  posts: Article[];
  totalResults: number;
  next: string;
  moreResultsAvailable: number;
};

export type ArticleOrder = "latest" | "oldest";
