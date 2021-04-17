import React, { useState } from "react";
import styles from "./styles.module.css";
import { useHistory } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";
import { useDispatch} from 'react-redux'
import { createRepo } from '../../store/repo'

const CreateRepoModal = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [title, setTitle] = useState('')
	const [errors, setErrors] = useState('')

	
	const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    const addNewRepo = async () => {
		let res = await dispatch(createRepo(title))
		if(res.errors) return setErrors(res.errors)
		console.log('newrepo res', res)
		history.push(`/create/${res.repo_id}`)
    }
    
    return (
		<div className={styles.createRepoContainer}>
			<div className={styles.repoWrapper}>
				<div className={styles.repoTitle}>TITLE</div>
				<div>{errors}</div>
				<input
					className={styles.input}
					type="text"
					name="title"
					placeholder='Title Name'
					onChange={updateTitle}
					value={title}
					required={true}
                ></input>
				{title.length > 0 && <IoAddCircle className={styles.icon} onClick={addNewRepo} />
				}
			</div>
		</div>
	);
};

export default CreateRepoModal;
