import React,{useState} from 'react'
import { HiEye, HiEyeOff } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./styles.module.css";


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



export default FlashCardList