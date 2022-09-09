import UsersActionTypes from "./users.types";

import {
  updateItemDetails,
  addNewItem,
  deleteItem,
} from "../../utils/modifier";


const initialState = {
  isFetching: false,
  data: [],
  details: {},
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Users 
    case UsersActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
    };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
    };
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
    };

    // Fetch User Details
    case UsersActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
    };
    case UsersActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: action.payload,
    };
    case UsersActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
    };

    // Edit User
    case UsersActionTypes.EDIT_USER_START:
      return {
        ...state,
        isFetching: true,
    }; 
    case UsersActionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        data: updateItemDetails(state.data, action.payload),
        isFetching: false,
    };
    case UsersActionTypes.EDIT_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
    };

    // Add User
    case UsersActionTypes.ADD_USER_START:
      return {
        ...state,
        isFetching: true,
    };
    case UsersActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        data: addNewItem(state.data, action.payload),
        isFetching: false,
    };
    case UsersActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
    };

    // Delete User
    case UsersActionTypes.DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
    };
    case UsersActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        data: deleteItem(state.data, action.payload),
        isFetching: false,
    };
    case UsersActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
    };

    case UsersActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        details: action.payload,
    };
    
    default:
      return state;
  }
};

export default userReducer;