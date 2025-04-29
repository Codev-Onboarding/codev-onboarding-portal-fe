import axios from 'axios';

const api = axios.create({
	baseURL: 'https://codev-onboarding-portal.onrender.com/api/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = token;
	}
	return config;
});

api.interceptors.response.use(
	(response) => {
		if (response.data.token) {
			localStorage.setItem('token', response.data.token);
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
