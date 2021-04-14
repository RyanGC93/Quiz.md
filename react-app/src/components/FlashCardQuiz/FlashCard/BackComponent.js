import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from './styles.module.css'


const BackComponent = ({content,flipToggle,setFlipToggle}) => {
	
    return (
    <div onClick={() =>setFlipToggle(!flipToggle)} className={styles.card }>
      <div onClick={() => alert('')}className="card-content">
				{/* <Speech
					style={speechStyle}
					stop={true}
					pause={true}
					resume={true}
					text="I have altered my voice"
					voice="Google UK English Female"
				/> */}
				{content}
			</div>
			<div className="card-options"></div>
		</div>
	);
};

export default BackComponent