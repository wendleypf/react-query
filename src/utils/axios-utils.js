/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:3001'
})

export const request = ({...options}) => {
    httpClient.defaults.headers.Authorization = 'Bearer bdfa05e0-a1f5-4192-9a22-42a15e0b2a9b'
    const onSuccess = response => response
    const onError = error => error
    return httpClient(options).then(onSuccess).catch(onError)
}