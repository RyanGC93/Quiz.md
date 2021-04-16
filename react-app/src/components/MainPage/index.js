import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "./styles.module.css";
// For the grid component
import {useSelector} from 'react-redux'


const MainPage = () => {
    let history = useHistory()
	const user = useSelector(state => state.session.user)
    // TODO 
const redirect = () => {
    let repoId = 2
    history.push(`/practice/${repoId}`)

}
const redirectCreate = () => {
    let id = 2
    history.push(`/create/${id}`)

}
const redirectProfile = () => {
    console.log(user)

    history.push(`/profile/${user.id}`)

}        

    useEffect(() => {
        if (!user) return
        console.log(user)
},[user])    
    
    
    
    return (
		<>
            <div className={styles.mainPage}>

			
                




                
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
