import axios from 'axios';

const backendList = axios.create({
    baseURL: "http://localhost:8080"
});

export default backendList;