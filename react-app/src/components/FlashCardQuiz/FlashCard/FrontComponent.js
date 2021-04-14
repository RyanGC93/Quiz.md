import React from 'react'
import styles from './styles.module.css'

import ReactMarkdown from "react-markdown";

const FrontComponent = ({ content,setFlipToggle,flipToggle }) => {
	console.log(content)
	return (
		<div onClick={() => setFlipToggle(!flipToggle)} className={styles.card}>
			<div className={styles.contentContainer}>
				<ReactMarkdown className="md">
					{content}
        </ReactMarkdown>
			</div>
		</div>
	);
};

export default FrontComponent