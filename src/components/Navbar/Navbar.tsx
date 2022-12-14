import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import "./Navbar.scss";

const Navbar = ({ homeIcon }: { homeIcon?: any }) => {
  const {
    github_data: { avatar_url, name },
    handleLogout,
  } = useAuth();

  const Icon = homeIcon;

  return (
    <nav>
      <div>
        {homeIcon ? (
          <Link to={`/app`}>
            <Icon fontSize={24} color="#c1c2c5" cursor="pointer" />
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="user-info">
        <button onClick={handleLogout}>Log out</button>
        <div className="user-img-wrapper">
          <img src={avatar_url} alt="avatar_url" />
          <p className="username">{name}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
