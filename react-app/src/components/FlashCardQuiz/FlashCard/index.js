import React,{useState} from "react";
import ReactCardFlip from "react-card-flip";
import BackComponent from "./BackComponent";
import FrontComponent from "./FrontComponent";
import styles from './styles.module.css'
import Speech from "react-speech";
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
const FlashCard = ({question}) => {
    const [flipToggle, setFlipToggle] = useState(false);

    console.log('flashcard', question)
	return (
		<ReactCardFlip
			containerStyle={{ height: "100%" }}
			className={styles.cardHolder}
			isFlipped={flipToggle}
			onClick={() => alert('')}
			flipDirection="vertical"
		>
            <FrontComponent flipToggle={flipToggle} setFlipToggle={setFlipToggle} content={question.answer}/>
			<BackComponent flipToggle={flipToggle}setFlipToggle={setFlipToggle}  content={question.question} />
		</ReactCardFlip>
	);
};
export default FlashCard;
