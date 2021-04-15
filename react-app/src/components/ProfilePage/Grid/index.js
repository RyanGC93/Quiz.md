import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Component => component Name

import styles from "./styles.module.css";

const Grid = ({ quizList }) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!quizList) return

    
    
      // have to make a call based on the input 
  })
  

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
            {/* iterate over the array*/}


        </div>
      </div>
    </>
  );
};

export default Grid;
