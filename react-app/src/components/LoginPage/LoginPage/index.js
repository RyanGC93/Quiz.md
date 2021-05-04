import styles from "./styles.module.css";
import SocialLogins from "../SocialLogins";
import PortfolioNavigator from "../PortfolioNavigator";
import React from "react";
import LoginForm from "../Forms/SignInForm";
import SignUpForm from "../Forms/SignUpForm";

const LoginPage = ({ setAuthenticated }) => {
	return (
		<>
			<img
				className={styles.backgroundImg}
				alt=""
				src="https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			/>
			<div className={styles.loginWrap}>
				<div className={styles.loginContainer}>
					<div className={styles.loginTitle}>Quiz.md</div>
					<input
						id="tab-1"
						type="radio"
						name="tab"
						className={styles.signIn}
						defaultChecked
					/>
					<label htmlFor="tab-1" className={styles.tabLogin}>
						Sign In
					</label>
					<input id="tab-2" type="radio" name="tab" className={styles.signUp} />
					<label htmlFor="tab-2" className={styles.tabLogin}>
						Sign Up
					</label>
					<div className={styles.loginForm}>
						<div className={styles.signInHtm}>
							<LoginForm setAuthenticated={setAuthenticated} />
						</div>
						<div className={styles.signUpHtm}>
							<SignUpForm />
						</div>
					</div>
					{/* <SocialLogins type="Signup" facebook=" with Facebook" /> */}
					<PortfolioNavigator />
				</div>
			</div>
		</>
	);
};

export default LoginPage;
