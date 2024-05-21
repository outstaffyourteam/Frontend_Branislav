export type Article = {
  thread: {
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
};

export type ArticlesResponse = {
  posts: Article[];
  totalResults: number;
  moreResultsAvailable: number;
};
