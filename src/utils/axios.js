import axios from "axios";

const instance = axios.create({
	baseURL: " http://localhost:3010",

	headers: {
		"Content-Type": "application/json"
	}
});

// Middleware на отправку токена во всех запросах
instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem("Simple_Blog_Token");

	return config;
});

export default instance;