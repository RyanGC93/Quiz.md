import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import './carousel.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getQuestions } from "../../store/questions";
import FlashCard from "./FlashCard"


const FlashCardQuiz = () => {
	let { repoId } = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));

	useEffect(() => {
		if (!repoId) return;
		if (!questions[0]) dispatch(getQuestions(repoId));
		if (questions[0]) console.log(questions);
		console.log(questions);
	}, [dispatch, repoId]);

	if (!questions[0]) return null;
	console.log(questions)
	// !Section 1 FlashCards
	return (
		<>
			<div className={styles.quizPageContainer}>
				<div className={styles.quizCardContainer}>
					<Carousel>
						{questions[0] && questions.map((question) => (
							<FlashCard question={question} />
						))}
					</Carousel>
				</div>
			</div>
			// !Section 2<div className={styles.quizList}></div>
			<div className={styles.gridContainer}></div>
		</>
	);
};

export default FlashCardQuiz;
