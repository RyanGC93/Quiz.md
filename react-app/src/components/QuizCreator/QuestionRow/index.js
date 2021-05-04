import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { deleteQuestion } from "../../../store/questions";
import { editQuestion } from "../../../store/questions";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderers = {
	code: ({ language, value }) => {
		return (
			<SyntaxHighlighter
				style={atomDark}
				language={language}
				children={value}
			/>
		);
	},
};

const QuestionRow = ({ question, autoSaveDisplay }) => {
	const dispatch = useDispatch();
	const [rowQuestion, setRowQuestion] = useState("");
	const [rowAnswer, setRowAnswer] = useState("");
	const [timedUpdate, setTimedUpdate] = useState(null);
	const [mdToggle, setMdToggle] = useState(false);

	useEffect(() => {
		if (rowQuestion && rowAnswer) return;
		setRowQuestion(question.question);
		setRowAnswer(question.answer);
	},[rowQuestion, rowAnswer, question.question, question.answer]);

	const timedDataUpdate = () => {
		if (timedUpdate) clearTimeout(timedUpdate);

		const updateTime = 4000;
		let timedSave = setTimeout(function () {
			updateHandler();
			autoSaveDisplay();
		}, updateTime);
		setTimedUpdate(() => timedSave);
	};

	const answerHandler = (e) => {
		setRowAnswer(e.target.value);
		timedDataUpdate();
	};
	const questionHandler = (e) => {
		setRowQuestion(e.target.value);
		timedDataUpdate();
	};
	const updateHandler = (e) => {
		let id = question.question_id;
		dispatch(editQuestion(id, rowQuestion, rowAnswer));
	};
	const deleteHandler = (e) => {
		if (timedUpdate) clearTimeout(timedUpdate);
		let id = question.question_id;
		dispatch(deleteQuestion(id));
	};

	return (
		<>
			<div className={styles.inputRow}>
				{/* question cell */}
				<form className={styles.form}>
					{mdToggle ? (
						<ReactMarkdown
							renderers={renderers}
							allowDangerousHtml={true}
							source={rowQuestion}
							plugins={[gfm]}
							className={styles.cell}
						>
							{rowQuestion}
						</ReactMarkdown>
					) : (
						<textarea
							className={styles.cell}
							value={rowQuestion}
							onChange={questionHandler}
						></textarea>
					)}
				</form>
				{/* Answer Cell */}
				<form className={styles.form}>
					{mdToggle ? (
						<ReactMarkdown
							renderers={renderers}
							allowDangerousHtml={true}
							source={rowAnswer}
							plugins={[gfm]}
							className={styles.cell}
						>
							{rowAnswer}
						</ReactMarkdown>
					) : (
						<textarea
							className={styles.cell}
							value={rowAnswer}
							onChange={answerHandler}
						></textarea>
					)}

					<div className={styles.iconContainer}>
						<MdDelete onClick={deleteHandler} className={styles.icon} />
						{mdToggle ? (
							<HiEyeOff
								className={styles.icon}
								onClick={() => setMdToggle(!mdToggle)}
							/>
						) : (
							<HiEye
								className={styles.icon}
								onClick={() => setMdToggle(!mdToggle)}
							/>
						)}
					</div>
				</form>
			</div>
		</>
	);
};
export default QuestionRow;
