import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import { rememberMe, isRemembered } from "../../../services/rememberMe.js";

export const LoginForm = ({ setAuthenticated }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkbox, setCheckBox] = useState(true);
	const history = useHistory();

	const onLogin = async (e) => {
		if (!password) return alert("Please enter a password");
		if (!email) return alert("please enter an email");
		e.preventDefault();

		if (checkbox) rememberMe(checkbox, email);

		const res = await dispatch(login(email, password));
		if (res.errors) setErrors(res.errors);
		setAuthenticated(true);
		if (!res.errors) history.push("/");
	};

	const demoLogin = async (e) => {
		e.preventDefault();
		const res = await dispatch(login("demo@aa.io", "password"));
		if (res.errors) setErrors(res.errors);
		setAuthenticated(true);
		if (!res.errors) history.push("/");
	};

	useEffect(() => {
		setEmail(isRemembered());
	}, [setEmail]);

	const checkboxHandler = () =>
		checkbox ? setCheckBox(false) : setCheckBox(true);

	return (
		<>
			<form className={styles.form} onSubmit={onLogin}>
				<div className={styles.errorContainer}>
					{errors[0] && (
						<>
						<div className={styles.errorRow}> Wrong Email/Password Combo</div>	
						</>
					)}
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="email">
						Email
					</label>
					<input
						className={styles.input}
						name="email"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required={true}
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="password">
						Password
					</label>
					<input
						className={styles.input}
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required={true}
					/>
					<div className={styles.group}>
						<input
							onChange={() => checkboxHandler}
							id="check"
							type="checkbox"
							className={styles.check}
							defaultChecked
						/>
						<label className={styles.remember} >
							<span className={(styles.icon, styles.checkBox)}></span> Remember
							me
						</label>
					</div>
				</div>
					<div className={styles.options}>
						<div className={styles.group}>
							<input
								type="submit"
								className={styles.signInBtn}
								value="Sign In"
							/>
						</div>
						<div className={styles.group}>
							<input
								type="submit"
								className={styles.signInBtn}
								value="Demo User Sign In "
								onClick={demoLogin}
							/>
						</div>
					</div>
			</form>
		</>
	);
};

export default LoginForm;
