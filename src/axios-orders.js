import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-builder-67a2a.firebaseio.com/'
});

export default instance;