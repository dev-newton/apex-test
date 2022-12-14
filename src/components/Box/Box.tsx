import {
  AiOutlinePullRequest,
  AiOutlineComment,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";
import { IssuesProps } from "types";
import "./Box.scss";

const Box = ({ type, state, title, html_url, comments }: IssuesProps) => {
  return (
    <a href={html_url} target="_blank">
      <div className="box">
        <div className="top">
          <div className="left-side">
            {type !== "pr" ? (
              state === "open" ? (
                <VscIssues fontSize={24} color="#2b8a3e" />
              ) : (
                <AiOutlineCheckCircle fontSize={24} color="#5e3dc4" />
              )
            ) : (
              <AiOutlinePullRequest fontSize={24} color="#2b8a3e" />
            )}
          </div>
          <p className="right-side">{title}</p>
        </div>
        <div className="bottom">
          <div className="badge">
            <AiOutlineComment fontSize={10} color="#868e96" />
            {comments}
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </a>
  );
};

export default Box;
