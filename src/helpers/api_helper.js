import axios from 'axios';


export const getAsync = async (url,data) => {
    try {
        const response = await axios.get(url, {params:data});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

