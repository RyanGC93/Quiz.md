import React,{useState} from "react";
import ReactCardFlip from "react-card-flip";
import BackComponent from "./BackComponent";
import FrontComponent from "./FrontComponent";
import styles from './styles.module.css'

const FlashCard = ({question, flipToggle, setFlipToggle}) => {
	return (
		<ReactCardFlip
			containerStyle={{ height: "100%" }}
			className={styles.cardHolder}
			isFlipped={flipToggle}
			onClick={() => alert('')}
			flipDirection="vertical"
		>
            <FrontComponent flipToggle={flipToggle} setFlipToggle={setFlipToggle} content={question.answer}/>
			<BackComponent flipToggle={flipToggle} setFlipToggle={setFlipToggle}  content={question.question} />
		</ReactCardFlip>
	);
};
export default FlashCard;
