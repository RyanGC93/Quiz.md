import React, { useState } from "react";
import styles from "./styles.module.css";
import {
	BsFillCaretLeftFill,
	BsFillCaretRightFill,
	BsFillHeartFill,
	BsFillPlayFill,
} from "react-icons/bs";
import { MdFlip } from "react-icons/md";

const CardOptions = ({ setFlipToggle, flipToggle }) => {
	const [isAutoPlay, setIsAutoPlay] = useState(false);

	const next = () => {
		let next = document.querySelector(".control-next");
		next.click();
	};
	const prev = () => {
		let prev = document.querySelector(".control-prev");
		prev.click();
	};

	const play = async () => {
		setIsAutoPlay(!isAutoPlay);
		while (isAutoPlay) {
            // await new Promise((resolve) => setTimeout(resolve, 10000));
			await setFlipToggle(!flipToggle);
			await new Promise((resolve) => setTimeout(resolve, 10000));
			await next();
		}
	};

	return (
		<>
			<div className={styles.optionsContainer}>
				{/* <div className={styles.cell}>
					<div className={styles.cellTitle}>Like</div>
					<BsFillHeartFill />
				</div> */}
				<div onClick={prev} className={styles.cell}>
					<div className={styles.cellTitle}>Prev</div>
					<BsFillCaretLeftFill />
				</div>

				<div onClick={next} className={styles.cell}>
					<div className={styles.cellTitle}>Next</div>
					<BsFillCaretRightFill />
				</div>
				<div onClick={() => setFlipToggle(!flipToggle)} className={styles.cell}>
					<div className={styles.cellTitle}>Flip</div>
					<MdFlip />
				</div>

				<div onClick={play} className={styles.cell}>
					<div className={styles.cellTitle}>Play</div>
					<BsFillPlayFill />
				</div>
			</div>
		</>
	);
};

export default CardOptions;
