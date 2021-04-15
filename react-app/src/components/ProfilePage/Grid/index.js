import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepoList } from '../../../store/repoList'
// Component => component Name

import styles from "./styles.module.css";

const Grid = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const questions = useSelector((state) => Object.values(state.questions));

  
  useEffect(() => {

    if (!user) return
    if(questions[0]) return
    dispatch(getRepoList(user.id))
    console.log(user)
      // have to make a call based on the input 
  })

  const determineUser = () => {
    console.log(user)
  }

  console.log(questions)
  return (
    <>
      <div className={styles.gridContainer} onClick={determineUser}>
        <div className={styles.grid}>
          {/* iterate over the array*/}
          {}
        </div>
      </div>
    </>
  );
};

export default Grid;
