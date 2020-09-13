import axios from 'axios'

const api = axios.create({
    baseURL: "https://plug-backend-api-example.herokuapp.com/"
});

export default api;