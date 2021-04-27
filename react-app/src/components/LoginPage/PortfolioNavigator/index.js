import React from "react";
import styles from "./styles.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";

export default function () {

	return (
		<div>
			<div className={styles.professionalHeader}>Professional Resources</div>
			<div className={styles.professionalRow}>
				<FaLinkedin
					className={styles.professionalFa}
					onClick={() =>
						(window.location.href =
							"https://www.linkedin.com/in/ryan-conk-8084b4103/")
					}
				/>
				<FaGithubSquare
					className={styles.professionalFa}
					onClick={() => (window.location.href = "https://github.com/RyanGC93")}
				/>
				{/* TODO redirect to email */}
				<a href="mailto:ryangconk@gmail.com">
					<SiGmail className={styles.professionalFa}  />
				</a>
        <FaAngellist
					className={styles.professionalFa}
					onClick={() => (window.location.href = "https://github.com/RyanGC93")}
				/>
			</div>
		</div>
	);
}
