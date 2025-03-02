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
        
        // if (err.response) {
        //     // Log more details for debugging
        //     console.error("Error response data:", err.response.data);
        //     console.error("Error response status:", err.response.status);
        //     console.error("Error response headers:", err.response.headers);
        //     throw new Error(err.response.data.message || "Something went wrong!");
        // } else if (err.request) {
        //     console.error("No response received:", err.request);
        //     throw new Error("No response from server.");
        // } else {
        //     console.error("Error:", err.message);
        //     throw new Error("An error occurred while making the request.");
        // }
    }
}