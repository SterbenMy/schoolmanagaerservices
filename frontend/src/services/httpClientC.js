import axios from "axios";

const httpClientC = axios.create({
    baseURL: `http://localhost:8083/api/`,
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

const responseInterceptor = (response) => {
    return response.data;
};

httpClientC.interceptors.response.use(responseInterceptor);

export default httpClientC;