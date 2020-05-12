import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e391c.firebaseio.com/'
})


export default instance;