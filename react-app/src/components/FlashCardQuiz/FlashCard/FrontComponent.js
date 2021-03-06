import React from "react";
import styles from "./styles.module.css";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const FrontComponent = ({ content }) => {
	return (
		<div  className={styles.card}>
			<div className={`${styles.contentContainer} ${styles.frontFlashCard}`}>
				<ReactMarkdown
					className={styles.md}
					renderers={renderers}
					allowDangerousHtml={true}
					source={content}
					plugins={[gfm]}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default FrontComponent;
