let APIURL ="http://192.168.65.220:3000/"

export const AUTHAPI={
signup:APIURL + "api/auth/signup",
signin:APIURL + "api/auth/login"
}

export function fetchDataFromLocalStore() {
    // Fetch and parse data from localStorage
    let userData = localStorage.getItem("userDetails");
    if (userData) {
        userData = JSON.parse(userData);
    } else {
        return null;  // If data is not found, return null or handle accordingly
    }
    return userData;
}
export const HeaderValue={
    "Content-Type":"application/json"
}