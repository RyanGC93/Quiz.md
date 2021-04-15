import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import QuestionRow from "./QuestionRow";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { getRepo } from "../../store/repo";
import { useParams } from "react-router-dom";
import { createQuestion } from "../../store/questions";
import {editRepo}  from "../../store/repo";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

import {IoAddCircle} from "react-icons/io5";

const QuizCreator = () => {
	const [rowQuestion,setRowQuestion] =useState('')
	const [rowAnswer, setRowAnswer] = useState('')
	const [title,setTitle] = useState('')
	

	const [isNewForm, setIsNewForm] = useState();
	let para = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));
	const repoInfo = useSelector((state) => state.repo.repo);
	const [repoTitle,setRepoTitle] = useState('')
	console.log(repoTitle)

	console.log(repoInfo)
	useEffect(() => {
		if (!para.id) return;
		if(repoInfo) return setRepoTitle(repoInfo.name)
		if (para !== 0) {
			dispatch(getQuestions(para.id));
			dispatch(getRepo(para.id));

		}
		setIsNewForm(false);
		if (!repoInfo) return
		setRepoTitle(repoInfo.name)
	}, [para, repoInfo, dispatch]);

	const updateTitle = (e) => {
		setRepoTitle(e.target.value)
	}

	const addQuestionHandler = () => {
		if(!rowQuestion && !rowAnswer) return alert('Must add add question/answer')
		dispatch(createQuestion(para.id, rowQuestion, rowAnswer))
		setRowQuestion('')
		setRowAnswer('')
	}
	const removeRepo = (e) => {
		dispatch(deleteRepo)
	}

	const changeTitle = () => {
		dispatch(editRepo(para.id,repoTitle))
	}
	const answerHandler = (e) => {
		setRowAnswer(e.target.value)
	}
	const questionHandler = (e) => {
		setRowQuestion(e.target.value)
	}
	return (
		<>
			
			{!repoInfo && (
			null
			)}
			<div className={styles.quizPage}>
				<div className={styles.titleContainer}>
						<div className={styles.title}>Title</div>
						<input
							type="text"
							name="title"
							  onChange={updateTitle}
							  value={repoTitle}
					/>
					<div onClick={changeTitle} >change title</div>
				</div>
				<div onClick={removeRepo} >change title</div>
					</div>
				<div className={styles.quizGrid}>
					{/* iterate over the array */}
					{questions[0] &&
						questions.map((question) => <QuestionRow question={question} />)}
					
					{/* To add More */}
					<div className={styles.inputRow}>
						<input
							onChange={questionHandler}
							className={styles.cell}
							value={rowQuestion}
						/>
						<input
							onChange={answerHandler}
							className={styles.cell}
							value={rowAnswer}
						/>
					</div>
					<div className={styles.addBtnContainer} >
						< IoAddCircle className={styles.addIcon} onClick={addQuestionHandler} />
					
					</div>
				</div>
			</div>
		</>
	);
};

export default QuizCreator;
