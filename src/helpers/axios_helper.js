import axios from "axios";
import { TEST_URL } from "./url_helper";

const BASE_URL = TEST_URL;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTk4OThmMTU1NTc4OTRiNGJjMWYzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODI4NTEwNywiZXhwIjoxNjY4NTQ0MzA3fQ.uLxk5AVj1ArKPWrri7BTuxlf89vsckSZY2kC7djB-v0"


//INFO: How to create an axios 
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {
        token:`Bearer ${TOKEN}`
    }
})