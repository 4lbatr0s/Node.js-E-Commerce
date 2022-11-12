import { GET_PRODUCT, GET_PRODUCTS, FULFILL_PAYMENT } from "./url_helper";
import { getAsync, postAsync } from "./api_helper";


//products
export const getProducts =  (data) =>  getAsync(GET_PRODUCTS,data);
export const getProduct  = (data) => getAsync(GET_PRODUCT,data);
export const fullfillPayment = (data) => postAsync(FULFILL_PAYMENT,data);