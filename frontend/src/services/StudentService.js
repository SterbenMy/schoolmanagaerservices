import httpClientS from "@/services/httpClientS";

const create = (name, surname, email, gender) =>
    httpClientS.post("/students/add", { name, surname, email, gender });

const getStudents = () => httpClientS.get("/students");
const getStudent = (id) => httpClientS.get(`/students/find/${id}`);
const deleteStudent = (students) => httpClientS.delete(`students/delete/${students}`);
const updateStudent = (id, name, surname, email, gender) => httpClientS.put('students/update', { id, name, surname, email, gender });

export { create, getStudents, getStudent, deleteStudent, updateStudent };