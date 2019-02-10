import axios from 'axios';

const API = axios.create({
    baseURL: '/api/',
    params: (url) => url
});

export default API;
