import { AiOutlineSearch } from "react-icons/ai";
import LoadingBar from "react-top-loading-bar";

import Input from "components/Input/Input";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import { SearchResultsProps } from "types";
import useHome from "hooks/useHome";
import "./Home.scss";

const Home = () => {
  const {
    loading,
    handleSearch,
    handleChange,
    search_results,
    searchParams,
    hasResult,
    ref,
    handleRepoClicked,
    isIssue,
  } = useHome();

  return (
    <>
      <LoadingBar
        shadowStyle={{ boxShadow: "none" }}
        color="#1971c2"
        ref={ref}
      />
      <div className="home">
        <Navbar />
        <div className="search">
          <form onSubmit={handleSearch}>
            <label className="search-label">Search Repositories</label>
            <Input
              type="text"
              placeholder="Try 'react' or 'vue'"
              value={searchParams.get("q")}
              required
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
        </div>

        <div className={`header header${hasResult && !isIssue ? "-hide" : ""}`}>
          <h2>{loading ? "Searching..." : "Search for a repository"}</h2>
        </div>
        {!loading && hasResult && (
          <div className="results">
            {search_results.items?.map((item: SearchResultsProps) => (
              <div
                key={item.id}
                onClick={() => handleRepoClicked(item.full_name)}
              >
                <Card
                  name={item.name}
                  full_name={item.full_name}
                  stargazers_count={item.stargazers_count}
                  forks={item.forks}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
