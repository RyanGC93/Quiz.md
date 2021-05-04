import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";
import gfm from "remark-gfm";
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

const BackComponent = ({ content }) => {
	return (
		<div className={styles.card}>
			<div className={styles.contentContainer}>
				<ReactMarkdown
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

export default BackComponent;
