import UsersActionTypes from "./users.types";


import updateItemDetails from "./users.services"; 
import addNewItem from "./users.services"; 
import deleteItem from "./users.services"; 


const initialState = {
  isFetching: false,
  data: [],
  details: {},
  errorMessage: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default postReducer;