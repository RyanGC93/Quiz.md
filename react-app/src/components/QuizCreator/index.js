import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import QuestionRow from "./QuestionRow"
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { useParams } from "react-router-dom";

const QuizCreator = () => {
	const [isNewForm, setIsNewForm] = useState()
	let para = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));


	useEffect(() => {
		if(!para.id) return
		if (para !== 0) {
			dispatch(getQuestions(para.id))
		}
		setIsNewForm(false)
	}, [para,dispatch]);

	return (
		<>
			<div className={styles.quizPage}>
				<div className={styles.header}></div>
				{questions[0] &&
					questions.map((question) => <h1>sdsadad</h1>
					)}
				<div className={styles.title}>
					<div>text</div>
					<input
						type="text"
						name="title"
						//   onChange={updatePassword}
						//   value={password}
					></input>
				</div>
				<div className={styles.quizGrid}>
					{/* iterate over the array */}
					<div className={styles.inputRow}>
						<div className={styles.question}>Question </div>
						<div className={styles.answer}>Answer</div>
					</div>



					
					<div className={styles.addBtn}></div>
					<div className={styles.addRow}></div>
				</div>
			</div>
		</>
	);
};

export default QuizCreator;
