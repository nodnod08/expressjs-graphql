import React, { useState } from "react";

import useStyles from "./assets/style";
import { setCookie } from "./../../../reusable";
import { loginProcess } from "./assets/service";

const Login = () => {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		const result = await loginProcess(email, password);
		if (result.success) {
			setCookie("jwt", result.token, 1);
		}
	};
	return (
		<div className={classes.body}>
			<input
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="email"
			/>
			<br />
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="password"
			/>
			<br />
			<button onClick={login}>Login</button>
		</div>
	);
};

export default Login;
