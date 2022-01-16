import axios from "axios";

const httpClientS = axios.create({
    baseURL: `http://localhost:8082/api/`,
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

const responseInterceptor = (response) => {
    return response.data;
};

httpClientS.interceptors.response.use(responseInterceptor);

export default httpClientS;