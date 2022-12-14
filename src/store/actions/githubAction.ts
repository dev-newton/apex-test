import { Dispatch } from "redux";
import {
  GET_AUTHENTICATED_USER,
  SEARCH_ISSUES,
  SEARCH_REPOSITORIES,
} from "./types";
import apiService from "services/apiService";
import { AxiosError } from "axios";

type MyErrorResponse = {
  errors: { detail: string }[];
};

export const getAuthenticatedUser =
  (token: string) => async (dispatch: Dispatch) => {
    try {
      const response = await apiService.getAuthenticatedUser(token);
      dispatch({
        type: GET_AUTHENTICATED_USER,
        payload: response.data,
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error.response?.data.message;
      }
    }
  };

export const searchRepositories =
  (searchText: string | null) => async (dispatch: Dispatch) => {
    try {
      const response = await apiService.searchRepositories(searchText);
      dispatch({
        type: SEARCH_REPOSITORIES,
        payload: response.data,
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error.response?.data.message;
      }
    }
  };

export const searchIssues =
  (
    searchText: string | null,
    repo: string,
    type: string | number,
    state: string | number
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiService.searchIssues(
        searchText,
        repo,
        type,
        state
      );
      dispatch({
        type: SEARCH_ISSUES,
        payload: response.data,
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error.response?.data.message;
      }
    }
  };
