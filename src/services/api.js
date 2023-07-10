import axios from 'axios';

const api = axios.create({
    baseURL: ' https://api.api-futebol.com.br/v1/',
    headers: { 
        "Authorization": 'Bearer live_bbcf9c342db0e586969b51b2a6c144'
    }
});

export default api;