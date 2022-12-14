import { AnyAction } from "redux";
import {
  GET_AUTHENTICATED_USER,
  SEARCH_ISSUES,
  SEARCH_REPOSITORIES,
} from "../actions/types";

const initialState = {
  auth_user: {},
  search_results: {},
  issues: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_AUTHENTICATED_USER:
      return {
        ...state,
        auth_user: action.payload,
      };

    case SEARCH_REPOSITORIES:
      return {
        ...state,
        search_results: action.payload,
      };

    case SEARCH_ISSUES:
      return {
        ...state,
        issues: action.payload,
      };

    default:
      return state;
  }
}
