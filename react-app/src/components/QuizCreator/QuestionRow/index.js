import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { deleteQuestion } from "../../../store/questions";
import { editQuestion } from "../../../store/questions";
import { useDispatch } from "react-redux";
import { MdDelete} from "react-icons/md";


const QuestionRow = ({ question }) => {
	const dispatch = useDispatch();
	const [rowQuestion, setRowQuestion] = useState("");
	const [rowAnswer, setRowAnswer] = useState("");
	const [timedUpdate,setTimedUpdate] = useState(null)

	useEffect(() => {
		setRowQuestion(question.question);
		setRowAnswer(question.answer);
	}, []);

	const timedDataUpdate = () => {
		if(timedUpdate) clearTimeout(timedUpdate)
		
		const updateTime = 4000;
		let timedSave =setTimeout(function(){
			updateHandler()
		}, updateTime);
		setTimedUpdate(()=>timedSave)

	}

	const answerHandler = (e) => {
		setRowAnswer(e.target.value);
		timedDataUpdate()
	};
	const questionHandler = (e) => {
		setRowQuestion(e.target.value);
		timedDataUpdate()
	};
	const updateHandler = (e) => {
		let id = question.question_id;
		dispatch(editQuestion(id, rowQuestion, rowAnswer));
	};
	const deleteHandler = (e) => {
		if(timedUpdate) clearTimeout(timedUpdate)
		let id = question.question_id;
		dispatch(deleteQuestion(id));
	};

	return (
		<>
			<div className={styles.inputRow}>
				{/* Answer Cell */}
				<form className={styles.form}>
					<textarea
						className={styles.cell}
						value={rowAnswer}
						onChange={answerHandler}
					></textarea>
				</form>
				{/* question cell */}
				<form className={styles.form}>
					<textarea
						className={styles.cell}
						value={rowQuestion}
						onChange={questionHandler}
					></textarea>
										{/* <MdDelete onClick={deleteHandler}  className={styles.icon}/> */}

				</form>
			</div>
		</>
	);
};
export default QuestionRow;
