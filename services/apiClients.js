import axios from 'axios'

export const jsonPlaceholderAPI = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
})
