import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/session";
import styles from "./styles.module.css";

const SignUpForm = ({ setAuthenticated }) => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const history = useHistory();

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const user = { username, email, password };
			const res = await dispatch(registerUser(user));
			setAuthenticated(true)
			return res ? history.push("/") : alert("backend server issue");
		}
	};

	const updateUserName = (e) => {
		setUsername(e.target.value);
	};
	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<form onSubmit={onSignUp}>
			<div className={styles.group}>
				<label className={styles.label}>User Name</label>
				<input
					className={styles.input}
					type="text"
					name="username"
					onChange={updateUserName}
					value={username}
					required={true}
				></input>
			</div>
			<div className={styles.group}>
				<label className={styles.label}>Email</label>
				<input
					className={styles.input}
					type="text"
					name="email"
					onChange={updateEmail}
					value={email}
					required={true}
				></input>
			</div>
			<label className={styles.label}>Password</label>
			<div className={styles.opts}>
				<div className={styles.group}>					<input
						className={styles.input}
						placeHolder='Password'
						type="password"
						label="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required={true}
					></input>
				</div>
				
				<div className={styles.group}>
					<div className={StyleSheet.group}>
						<input
							placeHolder='Repeat Password'
							className={styles.input}
							type="password"
							name="repeat_password"
							onChange={(e) => setRepeatPassword(e.target.value)}
							value={repeatPassword}
							required={true}
						></input>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<input type="submit" className={`${styles.input} ${styles.signUpBtn}`} value="Sign Up" />
			</div>
		</form>
	);
};

export default SignUpForm;
