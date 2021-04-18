import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";

const RepoCard = ({ repo }) => {
	const history = useHistory();
	const studyHandler = () => {
		history.push(`/practice/${repo.repo_id}`);
	};
	const editHandler = () => {
		history.push(`/create/${repo.repo_id}`);
	};
	console.log(repo);
	return (
		<>
			<div className={styles.repoWrapper}>
				<div className={styles.repoContainer}>
					<div className={styles.repoTitle}>Title</div>
					<div className={styles.repoName}>{repo.name}</div>
					<div className={styles.btnContainer}>
						<div className={styles.cardBtn} onClick={studyHandler}>
							Study
						</div>
						<div className={styles.cardBtn} onClick={editHandler}>
							Edit
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RepoCard;
