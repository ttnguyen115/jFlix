import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-type': 'application/json'
    }
});

export default instance;