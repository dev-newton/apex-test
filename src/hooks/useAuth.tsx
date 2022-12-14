import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

import { getAuthenticatedUser } from "store/actions/githubAction";

type GitHubProps = {
  github: {
    auth_user: {
      avatar_url: string;
      name: string;
    };
  };
};

const useAuth = () => {
  const [token, setToken] = useState("");

  const github_data = useSelector(
    (state: GitHubProps) => state.github.auth_user
  );

  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const getAuthUser = async () => {
    try {
      await dispatch(getAuthenticatedUser(token));
      navigate(`/app`);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await getAuthUser();
  };

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  return {
    token,
    handleChange,
    handleLogin,
    search,
    github_data,
    handleLogout,
  };
};

export default useAuth;
