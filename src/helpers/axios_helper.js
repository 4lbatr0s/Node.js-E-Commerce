import axios from "axios";
import { TEST_URL } from "./url_helper";

const BASE_URL = TEST_URL;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTk4OThmMTU1NTc4OTRiNGJjMWYzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Nzc2NDIyMywiZXhwIjoxNjY4MDIzNDIzfQ.CHYoh_gf1AMyX3k2c_0c75p1Y5sddT-0ycMuUDxCXCA"


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