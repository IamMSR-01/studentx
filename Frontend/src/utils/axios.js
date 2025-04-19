import axios from 'axios';

axios.defaults.withCredentials = true;

const API = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    withCredentials: true,
})

export default API