import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";

import { searchIssues } from "store/actions/githubAction";
import { IssuesProps } from "types";

const useRepoDetails = () => {
  const [loading, setLoading] = useState(false);
  const [isIssue, setIsIssue] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch: Dispatch<any> = useDispatch();
  const { repo, name } = useParams();

  const repo_name = `${repo}/${name}`;

  const issues_results = useSelector(
    (state: { github: { issues: { items: IssuesProps[] } } }) =>
      state.github.issues
  );

  const searchText = searchParams.get("q") || "";
  const searchType = searchParams.get("type") || "";
  const searchState = searchParams.get("state") || "";

  useEffect(() => {
    (searchText?.length || searchType?.length || searchState?.length) &&
      searchIssuesPr(searchText, repo_name, searchType, searchState);
  }, [searchType, searchState]);

  const noResults = !loading && !issues_results.items?.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...(e.target.value && { q: e.target.value }),
      ...(searchType && { type: searchType }),
      ...(searchState && { state: searchState }),
    });
  };

  const handleTypeChange = (value: any) => {
    setSearchParams({
      ...(searchText && { q: searchText }),
      ...(value && { type: value }),
      ...(searchState && { state: searchState }),
    });
  };

  const handleStateChange = (value: any) => {
    setSearchParams({
      ...(searchText && { q: searchText }),
      ...(searchType && { type: searchType }),
      ...(value && { state: value }),
    });
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setIsIssue(false);
    await searchIssuesPr(searchText, repo_name, searchType, searchState);
  };

  const searchIssuesPr = async (
    search: string | null,
    repo: string,
    searchType: string,
    searchState: string
  ) => {
    setLoading(true);
    setHasResult(false);

    setSearchParams({
      ...(searchText && { q: searchText }),
      ...(searchType && { type: searchType }),
      ...(searchState && { state: searchState }),
    });

    try {
      await dispatch(searchIssues(search, repo, searchType, searchState));
      setHasResult(true);
    } catch (error: unknown) {
      console.log(error);
      setHasResult(false);
    }
    setLoading(false);
  };

  return {
    loading,
    issues_results,
    repo_name,
    isIssue,
    searchText,
    searchType,
    hasResult,
    handleSearch,
    handleChange,
    handleTypeChange,
    noResults,
    searchState,
    handleStateChange,
  };
};

export default useRepoDetails;
