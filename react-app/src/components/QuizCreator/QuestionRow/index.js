import React from 'react';
import style from './styles.module.css'

const QuestionRow = ({question}) => {

	return (					
		<>
					<div className={styles.inputRow}>
						<div className={styles.question}>Question </div>
						<div className={styles.answer}>Answer</div>
					</div>

		</>

		
	)


	
}
export default QuestionRow
