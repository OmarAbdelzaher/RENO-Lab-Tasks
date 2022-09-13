import axios from "axios";

const getProducts = () => {
    return axios.get("https://fakestoreapi.com/products");
};

export default { getProducts };