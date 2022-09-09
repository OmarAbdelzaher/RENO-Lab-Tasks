import UsersActionTypes from "./users.types";
import UsersService from "./users.services";

export const fetchUsersStart = () => ({
  type: UsersActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = (Users) => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: Users,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload: errorMessage,
});

export const fetchUserStart = () => ({
  type: UsersActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (User) => ({
  type: UsersActionTypes.FETCH_USER_SUCCESS,
  payload: User,
});

export const fetchUserFailure = (errorMessage) => ({
  type: UsersActionTypes.FETCH_USER_FAILURE,
  payload: errorMessage,
});

export const editUserStart = () => ({
  type: UsersActionTypes.EDIT_USER_START,
});

export const editUserSuccess = (User) => ({
  type: UsersActionTypes.EDIT_USER_SUCCESS,
  payload: User,
});

export const editUserFailure = (errorMessage) => ({
  type: UsersActionTypes.EDIT_USER_FAILURE,
  payload: errorMessage,
});

export const addUserStart = () => ({
  type: UsersActionTypes.ADD_USER_START,
});

export const addUserSuccess = (User) => ({
  type: UsersActionTypes.ADD_USER_SUCCESS,
  payload: User,
});

export const addUserFailure = (errorMessage) => ({
  type: UsersActionTypes.ADD_USER_FAILURE,
  payload: errorMessage,
});

export const deleteUserStart = () => ({
  type: UsersActionTypes.DELETE_USER_START,
});

export const deleteUserSuccess = (id) => ({
  type: UsersActionTypes.DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (errorMessage) => ({
  type: UsersActionTypes.DELETE_USER_FAILURE,
  payload: errorMessage,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await UsersService.fetchUsers();
    dispatch(fetchUsersSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};


export const fetchUser = (id) => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await UsersService.fetchUser(id);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

export const deleteUser = (id) => (dispatch) => {
    console.log(dispatch)
    console.log(id)
  dispatch(deleteUserStart());
  UsersService
    .deleteUser(id)
    .then((res) => {
      dispatch(deleteUserSuccess(res.data));
      dispatch(fetchUsers());
    })
    .catch((error) => dispatch(deleteUserFailure(error.message)));
};

export const editUser = (user) => (dispatch) => {
    console.log(user);
    dispatch(editUserStart());
    UsersService
    .editUser(user.id)
    .then((res) => {
        console.log(res.data);
        dispatch(editUserSuccess(res.data));
        dispatch(fetchUsers());
    })
    .catch((error) => dispatch(editUserFailure(error.message)));
};

export const addUser = (user) => (dispatch) => {
    console.log(user);
    dispatch(addUserStart());
    UsersService
    .addUser(user)
    .then((res) => {
        console.log(res.data);
        dispatch(addUserSuccess(res.data));
        dispatch(fetchUsers());
        dispatch(setCurrentUser(res.data));
    })
    .catch((error) => dispatch(addUserFailure(error.message)));
};

export const setCurrentUser = (user) => ({
    type: UsersActionTypes.SET_CURRENT_USER,
    payload: user
});