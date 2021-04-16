import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { deleteQuestion } from '../../../store/questions'
import { editQuestion } from '../../../store/questions'
import {useDispatch} from 'react-redux'

const QuestionRow = ({ question }) => {
	const dispatch = useDispatch()
	const [rowQuestion, setRowQuestion] = useState("");
	const [rowAnswer, setRowAnswer] = useState("");

	useEffect(() => {
		setRowQuestion(question.question);
		setRowAnswer(question.answer);
	}, []);

	const answerHandler = (e) => {
		setRowAnswer(e.target.value);
	};
	const questionHandler = (e) => {
		setRowQuestion(e.target.value);
	};
	const updateHandler = (e) => {
		let id = question.question_id
		dispatch(editQuestion(id, rowQuestion, rowAnswer))
	};
	const deleteHandler = (e) => {
		let id = question.question_id
		dispatch(deleteQuestion(id))

	};

	return (
		<>
			<div className={styles.inputRow}>
				{/* Answer Cell */}
				<form className={styles.form}>
					<textarea className={styles.cell} value={rowAnswer} onChange={answerHandler}>
					
					
					</textarea>
					

				</form>
				{/* question cell */}
				<form className={styles.form}>
					<textarea className={styles.cell} value={rowQuestion} onChange={questionHandler}>					
					</textarea>
				</form>
		
				{/* <div className={styles.options}>
					<div onClick={updateHandler} className={styles.optionsBtn}>Update</div>
					<div onClick={deleteHandler} className={styles.optionsBtn}>Delete</div>

				</div> */}
			</div>
		</>
	);
};
export default QuestionRow;
