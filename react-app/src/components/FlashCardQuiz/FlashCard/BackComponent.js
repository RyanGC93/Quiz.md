import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from 'styles.module'


const BackComponent = () => {
	
    return (
    <div onClick={() =>alert()} className={styles.card }>
      <div onClick={() => alert('')}className="card-content">
				<Speech
					style={speechStyle}
					stop={true}
					pause={true}
					resume={true}
					text="I have altered my voice"
					voice="Google UK English Female"
				/>
				sadasdsadasd
			</div>
			<div className="card-options"></div>
		</div>
	);
};

export default BackComponent