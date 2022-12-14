import {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useSearchParams, useNavigate } from "react-router-dom";

import { searchIssues, searchRepositories } from "store/actions/githubAction";
import { SearchResultsProps } from "types";

const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [isIssue, setIsIssue] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  const ref: MutableRefObject<any> = useRef(null);

  const search_results = useSelector(
    (state: { github: { search_results: { items: SearchResultsProps[] } } }) =>
      state.github.search_results
  );

  useEffect(() => {
    searchParams.get("q")?.length && searchRepos();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value });
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setIsIssue(false);
    await searchRepos();
  };

  const handleRepoClicked = async (repo: string) => {
    ref.current?.continuousStart();
    await searchIssuesPr("", repo);
    ref.current?.complete();
    navigate(`/app/${repo}`);
  };

  const searchRepos = async () => {
    setLoading(true);
    setHasResult(false);
    try {
      await dispatch(searchRepositories(searchParams.get("q")));
      setHasResult(true);
    } catch (error: unknown) {
      console.log(error);
      setHasResult(false);
    }
    setLoading(false);
  };

  const searchIssuesPr = async (search: string, repo: string) => {
    try {
      await dispatch(searchIssues(search, repo, "issue", ""));
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return {
    loading,
    handleSearch,
    handleChange,
    search_results,
    searchParams,
    hasResult,
    ref,
    handleRepoClicked,
    isIssue,
  };
};

export default useHome;
