import { GET_PRODUCTS } from "./url_helper";
import { getAsync } from "./api_helper";

export const getProducts = async (data) => await getAsync(GET_PRODUCTS,data);

