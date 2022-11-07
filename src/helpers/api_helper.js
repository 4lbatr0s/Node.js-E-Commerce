import { publicRequest, userRequest } from "./axios_helper";

export const getAsync = async (pathname, data) => {
    try {
        let response = {};
        if (typeof data === "object" && Object.keys(data).length !== 0) { //TIP: How to check if an object is empty!, to get from query
            response = await publicRequest.get(pathname, { params: data });
        } else if (typeof data !== "object" && data) { //TIP: To get from params
            response = await publicRequest.get(pathname + `/${data}`)
        }
        else {
            response = await publicRequest.get(pathname);
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



