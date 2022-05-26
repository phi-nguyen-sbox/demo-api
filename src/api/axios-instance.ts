
import axios from 'axios';

const baseURL = 'http://localhost:3000'

const accessToken = ''

export const axiosInstance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        "Authorization" :  `Bearer + ${accessToken}`
    }
})