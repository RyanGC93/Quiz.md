import React from 'react'
import ReactMarkdown from "react-markdown";

const FrontComponent = () => {
	return (
		<div className={styles.card}>
			<div className={styles.contentContainer}>
        <ReactMarkdown className="md">
        </ReactMarkdown>
			</div>
		</div>
	);
};

export default FrontComponent