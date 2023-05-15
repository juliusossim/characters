import { config } from '@/config';
import Axios, { AxiosRequestConfig } from 'axios';

export const axios = Axios.create({
	baseURL: 'https://finalspaceapi.com/api/v0/character/',
	timeout: 5000,
});

const token = sessionStorage.getItem('token');

if (token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
