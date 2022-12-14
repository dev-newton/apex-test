import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { SearchResultsProps } from "types";
import "./Card.scss";

const Card = ({
  name,
  full_name,
  stargazers_count,
  forks,
}: SearchResultsProps) => {
  return (
    <div className="card">
      <div className="tooltip">
        <h4>{name}</h4>
        <span className="tooltiptext tooltiptext-bottom">{name}</span>
      </div>
      <p>{full_name?.split("/")[0]}</p>
      <div className="starsforks">
        <div className="pill tooltip">
          <AiOutlineStar className="pill-icon" />
          <p>{stargazers_count.toLocaleString()}</p>
          <span className="tooltiptext tooltiptext-top">
            {stargazers_count.toLocaleString()}
          </span>
        </div>

        <div className="pill tooltip">
          <AiOutlineFork className="pill-icon" />
          <p>{forks.toLocaleString()}</p>
          <span className="tooltiptext tooltiptext-top">
            {forks.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
