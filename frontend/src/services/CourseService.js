import httpClientC from "@/services/httpClientC";

const create = (name, number) =>
    httpClientC.post("/courses/add", { name, number });

const getCourses = () => httpClientC.get("/courses");
const getCourse = (id) => httpClientC.get(`/courses/find/${id}`);
const deleteCourses = (courses) => httpClientC.delete(`courses/delete/${courses}`);
const updateCourse = (id, name, number, teacher, students) => httpClientC.put('courses/update', { id, name, number, teacher, students });

export { create, getCourses, deleteCourses, getCourse, updateCourse };