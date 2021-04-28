import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CardOptions from "./CardOptions"
import "./carousel.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getQuestions } from "../../store/questions";
import FlashCard from "./FlashCard";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const FlashCardQuiz = () => {
	const [flipToggle, setFlipToggle] = useState(false);
	let { repoId } = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));
	useEffect(() => {
		if (!repoId) return;
		dispatch(getQuestions(repoId));
	}, [dispatch, repoId]);
	// if (!questions[0]) return null;
	// !Section 1 FlashCards
	return (
		<>
			<div className={styles.quizPageContainer}>
				<div className={styles.quizCardContainer}>
					<Carousel showIndicators={false}>
						{questions[0] &&
							questions.map((question) => <FlashCard flipToggle={flipToggle} setFlipToggle={setFlipToggle} question={question} />)}
					</Carousel>
				</div>
				<div className={styles.quizOptions}>
				<CardOptions />
					<BsFillCaretLeftFill />
					<BsFillCaretRightFill />
				</div>
			</div>
			{/* Section 2 Questions Repo  */}
			<div>
				{/* <div className={styles.infoSpan}>
					<div className={styles.listOwner}>
						<div className={styles.ownerName}>;'' Owner bane</div>
					</div>
					<div className={styles.listTitle}>
						<div>!!!REPO TITLE</div>
					</div>
					<div className={styles.listOptions}>Future componets</div>
				</div> */}
			</div>
			{/* Section 3 DetailsInfo */}
			<div className={styles.detailsInfo}>
				<div className={styles.gridContainer}>
					<div className={styles.gridTitle}>Question</div>
					<div className={styles.gridTitle}>Answer</div>

					{questions[0] &&
						questions.map((question) => (
							<>
								<div className={styles.question}>{question.question}</div>
								<div className={styles.answer}>{question.answer}</div>
							</>
						))}
				</div>
			</div>
		</>
	);
};
export default FlashCardQuiz;
