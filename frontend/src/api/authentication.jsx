import axios from "axios";
import { API_BASE_URL } from "./constant"
import { method } from "lodash";
import { data } from "autoprefixer";

export const loginAPI = async(body) => {
    const url = `${API_BASE_URL}/api/auth/login`;

    try {
        // const response = await axios(url, {
        //     method: 'POST', 
        //     data: body
        // });
        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return response?.data;
    } catch (err) {
        throw new Error(err);
    }
}

export const registerAPI = async (body) => {
    const url = API_BASE_URL + '/api/auth/register';

    try {
        const response = await axios(url, {
            method: 'POST',
            data: body
        });

        return response?.data;
    }
    catch(err) {
        throw new Error(err);
    }
}

export const verifyAPI = async (body) => {
    const url = API_BASE_URL + '/api/auth/verify';

    try {
        const response = await axios(url, {
            method: 'POST',
            data: body
        });

        return response?.data;
    }
    catch(err) {
        throw new Error(err);
    }
}