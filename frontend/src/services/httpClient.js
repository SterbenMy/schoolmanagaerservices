import axios from "axios";

const httpClient = axios.create({
    baseURL: `http://localhost:8081/api/`,
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

// const httpClientCourses = axios.create({
//     baseURL: `http://localhost:8083/api/`,
//     headers: {
//         Accept: "application/json;charset=UTF-8",
//         "Content-Type": "application/json;charset=UTF-8",
//     },
//     timeout: 0,
// });

// const httpClientStudents = axios.create({
//     baseURL: `http://localhost:8082/api/`,
//     headers: {
//         Accept: "application/json;charset=UTF-8",
//         "Content-Type": "application/json;charset=UTF-8",
//     },
//     timeout: 0,
// });

const responseInterceptor = (response) => {
    return response.data;
};

httpClient.interceptors.response.use(responseInterceptor);
// httpClientCourses.interceptors.response.use(responseInterceptor);
// httpClientStudents.interceptors.response.use(responseInterceptor);

export default httpClient;
// export { httpClientTeachers, httpClientCourses, httpClientStudents };