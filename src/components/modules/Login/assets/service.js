import { requestHttp } from "./../../../../reusable";

export const loginProcess = async (email, password) => {
	const requestBody = {
		email,
		password,
	};

	const { data } = await requestHttp(
		"http://localhost:4000/user/admin/login",
		requestBody
	);

	return data;
};
