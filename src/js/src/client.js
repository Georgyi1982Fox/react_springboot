import fetch from 'unfetch';

export const getAllStudents = () => fetch('api/students', {
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});