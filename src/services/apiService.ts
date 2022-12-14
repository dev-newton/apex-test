import axios from "axios";

const { VITE__API_URL } = import.meta.env;
/* eslint-disable import/no-anonymous-default-export */

export default {
  url: VITE__API_URL,

  headers(token: string = localStorage.ghtoken) {
    let header: { [k: string]: string } = {};
    header["Accept"] = `application/vnd.github+json`;
    header["Authorization"] = `Bearer ${token}`;

    return header;
  },

  getAuthenticatedUser(token: string) {
    localStorage.setItem("ghtoken", token);
    return axios({
      method: "get",
      url: `${this.url}/user`,
      headers: this.headers(token),
    });
  },

  searchRepositories(searchText: string | null) {
    return axios({
      method: "get",
      url: `${this.url}/search/repositories?q=${searchText}&per_page=100&page=1`,
      headers: this.headers(),
    });
  },

  searchIssues(
    searchText: string | null,
    repo: string,
    type: string | number,
    state: string | number
  ) {
    return axios({
      method: "get",
      url: `${this.url}/search/issues?q=${
        searchText ? searchText + "+in:title+" : ""
      }repo:${repo}+type:${type}${
        state ? `+state:${state}` : ""
      }&per_page=100&page=1`,
      headers: this.headers(),
    });
  },
};
