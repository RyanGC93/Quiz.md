import React from "react";
import ReactCardFlip from "react-card-flip";
import BackComponent from "./BackComponent";
import FrontComponent from "./FrontComponent";

const FlashCard = () => {
	return (
		<ReactCardFlip
			containerStyle={{ height: "100%" }}
			className={styles.cardHolder}
			isFlipped={flipToggle}
			onClick={() => alert(!flipToggle)}
			flipDirection="vertical"
		>
			<FrontComponent />
			<BackComponent />
		</ReactCardFlip>
	);
};
export default FlashCard;
