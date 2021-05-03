import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { deleteRepo } from "../../../store/repo";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const RepoCard = ({ repo }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const studyHandler = () => {
		history.push(`/practice/${repo.repo_id}`);
	};
	const editHandler = () => {
		history.push(`/create/${repo.repo_id}`);
	};
	const deleteHandler = () => {
		dispatch(deleteRepo(repo.repo_id))
	}
	if(!repo) return null
	return (
		<>
			<div className={styles.repoWrapper}>
				<div className={styles.repoContainer}>
					<div className={styles.repoTitle}>{repo.name}</div>
					<div className={styles.btnContainer}>
						<div className={styles.cardBtn} onClick={studyHandler}>
							Study
						</div>
						<div className={styles.cardBtn} onClick={editHandler}>
							Edit
						</div>
					</div>
					<MdDelete onClick={deleteHandler} className={styles.deleteIcon} />
				</div>
			</div>
		</>
	);
};

export default RepoCard;
