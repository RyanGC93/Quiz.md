import React,{useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import BackComponent from "./BackComponent";
import FrontComponent from "./FrontComponent";
import styles from './styles.module.css'

const FlashCard = ({question, flipToggle, setFlipToggle}) => {

	useEffect(() => {
	})

	return (
		<ReactCardFlip
			containerStyle={{ height: "100%" }}
			className={styles.cardHolder}
			isFlipped={flipToggle}
			flipDirection="vertical"
		>
            <FrontComponent content={question.question}/>
			<BackComponent content={question.answer} />
		</ReactCardFlip>
	);
};
export default FlashCard;
