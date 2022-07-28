import axios from "axios";

export const instance = axios.create({
	baseURL: 'https://localhost:3010',
	timeout: 1000,
	headers: {
		"Content- Type": "application/json"
	}
});