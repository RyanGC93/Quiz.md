import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import CreateRepoModal from "../CreateRepoModal";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";

const MainPage = () => {
	const [showModal, setShowModal] = useState(false);
	let history = useHistory();
	const user = useSelector((state) => state.session.user);
	const redirectQuiz = () => {
		let repoId = 2;
		history.push(`/practice/${repoId}`);
	};

	const redirectProfile = () => {
		history.push(`/profile/${user.id}`);
	};

	useEffect(() => {
		if (!user) return;
	}, [user]);

	return (
		<>
			<img
				className={styles.backgroundImg}
				alt=""
				src={require("../../images/backgrounds/mainPageBackground.jpeg")}
			/>
			<div className={styles.mainPage}>
				<div className={styles.contentWrapper}>
					<div className={styles.contentContainer}>
						<div className={styles.contentHeader}>Quiz.md</div>
						<div className={styles.content}>
							A learning site that allows software engineers to study various
							topics using a markdown template
						</div>
						<div className={styles.quickLinks}>Quick Links</div>
						<div className={styles.contentOptions}>
							<div className={styles.contentOption} onClick={redirectProfile}>
								View Profile
							</div>
							<div className={styles.contentOption} onClick={redirectQuiz}>
								Sample Quiz
							</div>
							<div
								className={styles.contentOption}
								onClick={() => setShowModal(true)}
							>
								Create Quiz
							</div>
							{/* Create Quiz modal */}
							{showModal && (
								<Modal onClose={() => setShowModal(false)}>
									<CreateRepoModal setShowModal={setShowModal} />
								</Modal>
							)}
						</div>
					</div>
				</div>
				{/* TODO: ADD In Future Development  */}
				{/* Grid for future development */}
				{/* <div className={styles.categories}> */}
				{/* Grid Item One */}
				{/* <div className={styles.rightContainer} >
                        <div className={style.altContainer}>
                            <h1 onClick={redirectCreate}>Redirect Create </h1>
                            <h1 onClick={redirect}>Redirect </h1>
                            <h1 onClick={redirectProfile}>Redirect  Profile</h1>

                        </div>
                    </div> */}
				{/* Else */}

				{/* Grid Item Two  */}
				{/* <div className={styles.recentContainer}>
						<div className={styles.topics}>
							<div className={style.topicsContainer}>
								<div className={styles.topicHeader}>Popular Subjects</div>
								<div className={styles.linkContainer}>
									<a>Python Methods</a>
									<a>Interview Material</a>
								</div>
							</div>
						</div>
                    </div> */}
				{/* </div> */}
			</div>
		</>
	);
};

export default MainPage;
