import { GET_PRODUCT, GET_PRODUCTS } from "./url_helper";
import { getAsync } from "./api_helper";


//products
export const getProducts =  (data) =>  getAsync(GET_PRODUCTS,data);
export const getProduct  = (data) => getAsync(GET_PRODUCT,data);
