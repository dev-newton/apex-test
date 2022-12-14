import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { Segmented } from "antd";

import Navbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import useRepoDetails from "hooks/useRepoDetails";
import Box from "components/Box/Box";
import { IssuesProps } from "types";
import "./RepoDetails.scss";

const RepoDetails = () => {
  const {
    loading,
    issues_results,
    repo_name,
    isIssue,
    searchText,
    searchType,
    handleSearch,
    handleChange,
    handleTypeChange,
    hasResult,
    noResults,
    searchState,
    handleStateChange,
  } = useRepoDetails();

  return (
    <>
      <div className="repodetails">
        <Navbar homeIcon={HiOutlineHome} />
        <div className="search">
          <form onSubmit={handleSearch}>
            <label className="search-label">{repo_name}</label>
            <p className="search-label search-label-sm">
              Search for issues or pull requests
            </p>
            <Input
              type="text"
              placeholder="Search in title..."
              value={searchText}
              onChange={handleChange}
              loading={loading}
              icon={
                <AiOutlineSearch
                  className="icon"
                  fontSize={18}
                  onClick={handleSearch}
                />
              }
            />
          </form>
          <div className="segment-row">
            <div className="segment">
              <Segmented
                options={[
                  { label: "Issues", value: "issue" },
                  { label: "Pull Requests", value: "pr" },
                ]}
                value={searchType || "issue"}
                onChange={handleTypeChange}
              />
            </div>
            <div className="segment">
              <Segmented
                options={[
                  { label: "All", value: "" },
                  { label: "Open", value: "open" },
                  { label: "Closed", value: "closed" },
                ]}
                value={searchState || ""}
                onChange={handleStateChange}
              />
            </div>
          </div>
        </div>

        {loading && (
          <div
            className={`header header${hasResult && !isIssue ? "-hide" : ""}`}
          >
            <h2>Searching...</h2>
          </div>
        )}

        {noResults && (
          <div className={`header`}>
            <h2>No Results found</h2>
          </div>
        )}

        {!loading && issues_results && (
          <div className="issues">
            {issues_results.items?.map((item: IssuesProps) => (
              <div key={item.id}>
                <Box
                  type={searchType}
                  state={item.state}
                  title={item.title}
                  comments={item.comments}
                  html_url={item.html_url}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RepoDetails;
