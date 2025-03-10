import { jwtDecode } from 'jwt-decode';

export const isTokenValid = () => {
    const token = localStorage.getItem('authToken');
    console.log('token: ', token);
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;  // Current time in seconds

        // Check if the token is expired
        return decoded.exp > currentTime;
    } catch (err) {
        console.error("Invalid token", err);
        return false;
    }
}

export const saveToken = (token) => {
    localStorage.setItem('authToken: ', token);
}

export const logout = () => {
    localStorage.clear();
}

export const getToken = () => {
    return localStorage.getItem('authToken');
}