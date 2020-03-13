import axios from 'axios'


//declaração basica de um serviço de API
//conexao com a rota de backend da aplicação


const api = axios.create({
    baseURL: "http://localhost:3333"
})


export default api;