
import axios from 'axios';

const baseURL = 'https://sbox-food-order.com/api'

const accessToken = ''

export const axiosInstance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        "Authorization" :  `Bearer + ${accessToken}`
    }
})