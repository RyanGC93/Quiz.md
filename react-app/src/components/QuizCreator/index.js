import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import QuestionRow from "./QuestionRow";
import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { getRepos } from "../../store/repo";
import { useParams } from "react-router-dom";
import { createQuestion } from "../../store/questions";
import { editRepo } from "../../store/repo";
import {deleteRepo}  from "../../store/repo";
import {IoAddCircle} from "react-icons/io5";
import { MdDelete} from "react-icons/md";

const QuizCreator = () => {
	const user = useSelector(state => state.session.user)
	const [rowQuestion,setRowQuestion] =useState('')
	const [rowAnswer, setRowAnswer] = useState('')
	const [timedUpdate,setTimedUpdate] = useState(null)
	const [title, setTitle] = useState('')
	const history = useHistory()
	

	let para = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));
	const repoInfo = useSelector((state) => state.repo.repo);
	const [repoTitle,setRepoTitle] = useState('')

	useEffect(() => {
		if (!para.id) return;
		if (!user) return;
		// if(repoInfo && user.id !== repoInfo.owner_id) history.push(`/profile/${user.id}`)
		if (repoInfo) return setRepoTitle(repoInfo.name)
		if (para !== 0) {
			dispatch(getQuestions(para.id));
			dispatch(getRepos(user.id));
			
		}
		if (!repoInfo) return
		console.log(user,'user')
		console.log(user,para,'para')
		setRepoTitle(repoInfo.name)
		// if(para.owner_id !== user.id) history.push('/')
	}, [user,para, repoInfo, dispatch]);

	const updateTitle = (e) => {
		setRepoTitle(e.target.value)
		timedDataUpdate()
	}
	const timedDataUpdate = () => {
		if(timedUpdate) clearTimeout(timedUpdate)
		
		const updateTime = 4000;
		let timedSave =setTimeout(function(){
			dispatch(editRepo(para.id,repoTitle))
		}, updateTime);
		setTimedUpdate(()=>timedSave)
	}

	const addQuestionHandler = () => {
		if(!rowQuestion && !rowAnswer) return alert('Must add add question/answer')
		dispatch(createQuestion(para.id, rowQuestion, rowAnswer))
		setRowQuestion('')
		setRowAnswer('')
	}

	const answerHandler = (e) => {
		setRowAnswer(e.target.value)
	}

	const questionHandler = (e) => {
		setRowQuestion(e.target.value)
	}
	const removeRepo = () => {
		let res = dispatch(deleteRepo(para.id))
		if(!res.errors) history.push(`/profile/${user.id}`)
	}

	if (!user && !repoInfo) return null
	// if(repoInfo && user.id !== repoInfo.owner_id) history.push(`/profile/${user.id}`)

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
					<MdDelete onClick={removeRepo}  className={styles.icon}/>
					</div>
				<div className={styles.quizGrid}>
					{/* iterate over the array */}
					{questions[0] &&
						questions.map((question) => <QuestionRow question={question} />)}
					
					{/* To add More */}
					<div className={styles.inputTitle} >Create More</div> 
					<div className={styles.inputRow}>
						<textarea
							onChange={(e)=>{setRowQuestion(e.target.value)}}
							className={styles.cell}
							value={rowQuestion}
						/>
						<textarea
							onChange={(e) => setRowAnswer(e.target.value)}
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
