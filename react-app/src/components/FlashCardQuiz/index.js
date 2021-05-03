import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CardOptions from "./CardOptions";
import "./carousel.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getQuestions } from "../../store/questions";
import FlashCard from "./FlashCard";
import { HiEye, HiEyeOff } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FlashCardList = ({ question, i }) => {
	const [mdToggle, setMdToggle] = useState(false);
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

	return (
		<>
			{mdToggle ? (
				<>
					<ReactMarkdown
						renderers={renderers}
						allowDangerousHtml={true}
						source={question.question}
						plugins={[gfm]}
						className={styles.question}
					>
						{question.question}
					</ReactMarkdown>
					<ReactMarkdown
						renderers={renderers}
						allowDangerousHtml={true}
						source={question.answer}
						plugins={[gfm]}
						className={styles.answer}
					>
						{question.answer}
					</ReactMarkdown>
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
				</>
			) : (
				<>
					<div
						className={
							i % 2
								? `${styles.question} ${styles.white}`
								: `${styles.question}`
						}
					>
							{question.question}
							
					</div>
					<div
						className={
							i % 2 ? `${styles.answer} ${styles.white}` : `${styles.answer}`
						}
					>
							{question.answer}
					</div>
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
				</>
			)}
		</>
	);
};

const FlashCardQuiz = () => {
	const [flipToggle, setFlipToggle] = useState(false);
	const [itemIndex, setItemIndex] = useState(0);
	const [repoInfo, setRepoInfo] = useState({});
	let { repoId } = useParams();
	const dispatch = useDispatch();
	const questions = useSelector((state) => {
		return Object.values(state.questions).filter(
			(questions) => repoId == questions.repo_id
		);
	});

	const nextSlideHandler = (currentSlide) => {
		if (currentSlide !== itemIndex) setItemIndex(itemIndex);
		setFlipToggle(false);
	};
	const trial = (e, items) => {
		setFlipToggle(!flipToggle);
	};
	useEffect(() => {
		if (!repoId && !itemIndex) return;
		(async () => {
			const response = await fetch(`/api/repo/info/${repoId}`);
			if (response.ok) {
				let res = await response.json();
				setRepoInfo(res);
			}
		})();
		dispatch(getQuestions(repoId));
	}, [dispatch, repoId, itemIndex, setItemIndex]);
	// !Section 1 FlashCards
	return (
		<>
			<div className={styles.quizPageContainer}>
				<div className={styles.quizCardContainer}>
					<Carousel
						selectedItem={itemIndex}
						autoPlay={false}
						onClickItem={(e, item) => trial(e, item)}
						onChange={nextSlideHandler}
						infiniteLoop={true}
						showIndicators={false}
						showThumbs={false}
					>
						{questions[0] &&
							questions.map((question) => (
								<FlashCard
									flipToggle={flipToggle}
									question={question}
									key={question.question_id}
								/>
							))}
					</Carousel>
				</div>
				<div className={styles.quizOptions}>
					<CardOptions flipToggle={flipToggle} setFlipToggle={setFlipToggle} />
				</div>
			</div>
			{/* Section 2 Questions Repo  */}
			<div>
				<div className={styles.infoSpan}>
					<div className={styles.listOwner}>
						<div className={styles.ownerName}>
							User: {repoInfo.repo_username}
						</div>
					</div>
					<div className={styles.listTitle}>
						<div>Repo:{repoInfo.repo_name}</div>
					</div>
				</div>
			</div>
			{/* Section 3 DetailsInfo */}
			<div className={styles.detailsInfo}>
				<div className={styles.repoTitle}>Questions list</div>
				<div className={styles.gridContainer}>
					<div className={styles.gridTitle}>Question</div>
					<div className={styles.gridTitle}>Answer</div>
					<div></div>
					{questions[0] &&
						questions.map((question, i) => (
							<FlashCardList
								key={question.question_id}
								i={i}
								id="flashCard"
								question={question}
							/>
						))}
				</div>
			</div>
		</>
	);
};
export default FlashCardQuiz;
