export type SearchResultsProps = {
  id?: number;
  name: string;
  full_name: string;
  forks: number;
  stargazers_count: number;
};

export type IssuesProps = {
  id: number;
  state: "open" | "closed";
  title: string;
  html_url: string;
  comments: number;
  type?: string | number;
};
