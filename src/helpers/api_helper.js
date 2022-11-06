import axios from 'axios';


export const getAsync = async (url,data) => {
    try { 
        let response = {};
        if(Object.keys(data).length !== 0) { //TIP: How to check if an object is empty!
            response = await axios.get(url, {params:data});
        } else {
            response = await axios.get(url);
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

