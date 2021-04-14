import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Speech from "react-speech";
import { useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Slider from 'infinite-react-carousel';
import ReactCardFlip from "react-card-flip";
import ReactMarkdown from "react-markdown";
import {getQuestions } from '../../store/questions'

const speechStyle = {
	play: {
		button: {
			width: "28",
			height: "28",
			cursor: "pointer",
			pointerEvents: "none",
			outline: "none",
			backgroundColor: "yellow",
			border: "solid 1px rgba(255,255,255,1)",
			borderRadius: 6,
		},
	},
};



const BackComponent = ({ setFlipToggle, flipToggle }) => {
	return (
    <div onClick={() =>alert()} className={styles.card }>
      <div onClick={() => alert('')}className="card-content">
				<Speech
					style={speechStyle}
					stop={true}
					pause={true}
					resume={true}
					text="I have altered my voice"
					voice="Google UK English Female"
				/>
				sadasdsadasd
			</div>
			<div className="card-options"></div>
		</div>
	);
};
const FlashCardQuiz = () => {
	let { repoId } = useParams()
	const dispatch = useDispatch()
	const [flipToggle, setFlipToggle] = useState(false);
	const questions = useSelector((state) => Object.values(state.questions))

	useEffect(() => {
		if (!repoId) return
		if (!questions[0]) dispatch(getQuestions(repoId))
		if (questions[0]) console.log(questions)
		console.log(questions)
		
	}, [dispatch, repoId])
	
	if (!questions[0]) return null
	console.log(questions)
	// console.log(questions,questions)

	// !Section 1 FlashCards
	return (
		<>
			<div className={styles.quizPageContainer}>
        <div onClick={() => alert(!flipToggle)} className={styles.quizCardContainer}>
          <ReactCardFlip
            containerStyle={{ height: '100%'}}
            className={styles.cardHolder}
						isFlipped={flipToggle}
						onClick={() => alert(!flipToggle)}
						flipDirection="vertical"
					>
						<FrontComponent />
            <BackComponent setFlipToggle={ setFlipToggle}/>
					</ReactCardFlip>
        </div>
        <button	onClick={() => setFlipToggle(!flipToggle)} >ChangeState</button>
			</div>
			// !Section 2<div className={styles.quizList}></div>

			<Slider >
				{questions.map((question) => (
					<div>
						<h1>{question.question}</h1>
						<div>{question.answer}</div>
					</div>		
				))}
			</Slider>
			<div className={styles.gridContainer}>

			</div>
		</>
	);
};

export default FlashCardQuiz;
