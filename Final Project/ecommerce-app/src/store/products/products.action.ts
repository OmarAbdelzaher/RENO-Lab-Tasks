import productsActionTypes from "./product.types";
import productsServices from "./product.services";

export const getProductsStart = () => ({
    type: productsActionTypes.GET_PRODUCTS_START,
});

export const getProductsSuccess = (products: object) => ({
    type: productsActionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
});

export const getProductsFailure = (errorMessage: object) => ({
    type: productsActionTypes.GET_PRODUCTS_FAILURE,
    payload: errorMessage,
});

export const getProducts = () => async (dispatch:any) => {
    dispatch(getProductsStart());
    try {
      const response = await productsServices.getProducts();
      dispatch(getProductsSuccess(response.data));
    } catch (error: any) {
      dispatch(getProductsFailure(error.message));
    }
};


