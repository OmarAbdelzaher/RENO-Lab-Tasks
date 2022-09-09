import apiClient from "../../utils/apiClient";
const RESOURCE = "user";

const fetchUsers = () => {
    return apiClient.get(`${RESOURCE}`);
};

const fetchUser = (userId) => {
    return apiClient.get(`${RESOURCE}/${userId}`);
};
  
const addUser = (user) => {
    return apiClient.post(`${RESOURCE}/create`, user);
};

const deleteUser = (userId) => {
  return apiClient.delete(`${RESOURCE}/${userId}`);
};

const editUser = (userId) => {
    return apiClient.put(`${RESOURCE}/${userId}`);
};


export default { fetchUsers, deleteUser, fetchUser, editUser, addUser };