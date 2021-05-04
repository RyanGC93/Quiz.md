import React, { useState,useEffect } from "react";
import styles from "./styles.module.css";
import {
	BsFillCaretLeftFill,
	BsFillCaretRightFill,
	BsFillPlayFill,
	BsPauseFill,
} from "react-icons/bs";
import { MdFlip } from "react-icons/md";

const CardOptions = ({ setFlipToggle, flipToggle }) => {
	const [isAutoPlay, setIsAutoPlay] = useState(false);
	const [statusTimeout, setStatusTimeout] = useState(10000)
	const [intervalFunc,setIntervalFunc] = useState()
	let autoPlayInterval 
	const next = () => {
		let next = document.querySelector(".control-next");
		if(next)next.click();
	};
	const prev = () => {
		let prev = document.querySelector(".control-prev");
		if(prev)prev.click();
	};
	const autoPlay = () => {
		let timeout = parseInt((statusTimeout / 2));
			(async () => {
			if (!flipToggle) {
				await new Promise((resolve) => setTimeout(resolve, timeout));
				setFlipToggle(true);
			}
			await new Promise((resolve) => setTimeout(resolve, timeout));
			await next();
		})();
	}

	const play = () => {
		setIsAutoPlay(!isAutoPlay);
		if (!isAutoPlay) {
			autoPlayInterval = setInterval(autoPlay, statusTimeout)
			setIntervalFunc(autoPlayInterval)
		} else {
			clearInterval(intervalFunc)
		}
	};
	return (
		<>
			<div className={styles.optionsContainer}>
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
					{!isAutoPlay ? (
						<>
							<div onClick={() => play()} className={styles.cell}>
							<div className={styles.cellTitle}>Play</div>
							<BsFillPlayFill />
							</div>
						</>
					) : (
						<>
						<div onClick={() => play()} className={styles.cell}>
							<div className={styles.cellTitle}>Pause</div>
								<BsPauseFill />
								</div>
						</>
					)}
			</div>
		</>
	);
};

export default CardOptions;
