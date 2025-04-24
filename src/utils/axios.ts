import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000/api/",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = token;
	}
	return config;
});

api.interceptors.response.use(
	(response) => {
		if (response.data.token) {
			localStorage.setItem("token", response.data.token);
		}
		return response;
	},
	(error) => {
		console.error("[API ERROR]", error.response?.data || error.message);
		return Promise.reject(error);
	}
);

export default api;
