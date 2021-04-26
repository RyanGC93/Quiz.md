import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import QuestionRow from "./QuestionRow";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { getRepos } from "../../store/repo";
import { useParams } from "react-router-dom";
import { createQuestion } from "../../store/questions";
import { editRepo } from "../../store/repo";
import { deleteRepo } from "../../store/repo";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const QuizCreator = () => {
	let para = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [rowQuestion, setRowQuestion] = useState("");
	const [rowAnswer, setRowAnswer] = useState("");
	const [timedUpdate, setTimedUpdate] = useState(null);
	const [repoTitle, setRepoTitle] = useState("");

	const user = useSelector((state) => state.session.user);
	const questions = useSelector((state) => Object.values(state.questions));
	const repoInfo = useSelector((state) => {
		return Object.values(state.repo).filter((repo) => para.id == repo.repo_id);
	});

	const autoSaveDisplay = async () => {
		let saveDiv = document.getElementById("autoSave");
		saveDiv.classList.add(`${styles.autoSaveActive}`);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		saveDiv.classList.remove(`${styles.autoSaveActive}`);
	};

	useEffect(() => {
		if (!para.id || !user) return;
		if (!repoInfo[0] && !questions[0]) {
			dispatch(getQuestions(para.id));
			dispatch(getRepos(user.id));
		}
		if (!repoInfo[0]) return;

		if (!repoTitle.length) setRepoTitle(repoInfo[0].name);
	}, [user, para, repoInfo, dispatch]);

	const updateTitle = (e) => {
		setRepoTitle(e.target.value);
		timedDataUpdate();
	};
	const timedDataUpdate = () => {
		if (timedUpdate) clearTimeout(timedUpdate);

		const updateTime = 3000;
		let timedSave = setTimeout(function () {
			// dispatch(editRepo(para.id, repoTitle));
			autoSaveDisplay();
		}, updateTime);
		setTimedUpdate(() => timedSave);
	};

	const addQuestionHandler = () => {
		if (!rowQuestion && !rowAnswer)
			return alert("Must add add question/answer");
		dispatch(createQuestion(para.id, rowQuestion, rowAnswer));
		setRowQuestion("");
		setRowAnswer("");
	};

	const removeRepo = () => {
		let res = dispatch(deleteRepo(para.id));
		if (!res.errors) history.push(`/profile/${user.id}`);
	};

	if (!user && !repoInfo && !repoTitle.length) return null;
	return (
		<>
			<div className={styles.quizPage}>
				<div className={styles.titleContainer}>
					<div className={styles.title}>Title</div>
					<input
						type="text"
						name="title"
						onChange={(e) => updateTitle(e)}
						value={repoTitle}
						maxLength="14"
						className={styles.titleInput}
					/>
					<MdDelete onClick={removeRepo} className={styles.icon} />
				</div>
				<div className={styles.quizGrid}>
					<div id="autoSave" className={styles.autoSave}>
						Auto Saved
					</div>
					<div className={styles.gridTitle}>
						<div>Question</div>
						<div>Answer</div>
					</div>

					{questions[0] &&
						questions.map((question) => (
							<QuestionRow
								autoSaveDisplay={autoSaveDisplay}
								key={question.question_id}
								question={question}
							/>
						))}

					{/* To Add Additional Questions */}
					<div className={styles.addMore}>
						<div className={styles.inputTitle}>Create More</div>
						<div className={styles.inputRow}>
							<textarea
								onChange={(e) => {
									setRowQuestion(e.target.value);
								}}
								className={styles.cell}
								value={rowQuestion}
							/>
							<textarea
								onChange={(e) => setRowAnswer(e.target.value)}
								className={styles.cell}
								value={rowAnswer}
							/>
						</div>
						<div className={styles.addBtnContainer}>
							<IoAddCircle
								className={styles.addIcon}
								onClick={addQuestionHandler}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuizCreator;
