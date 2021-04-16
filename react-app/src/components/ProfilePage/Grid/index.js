import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepoList } from '../../../store/repoList'
import RepoCard from '../RepoCard'
// Component => component Name

import styles from "./styles.module.css";

const Grid = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const repoList = useSelector((state) => Object.values(state.repoList));

  
  useEffect(() => {

    if (!user) return 
    if(repoList[0]) return
    dispatch(getRepoList(user.id))
      // have to make a call based on the input 
  })

  const determineUser = () => {
  }

  return (
    <>
      <div className={styles.gridContainer} onClick={determineUser}>
          {repoList.map((repo) => (
            <RepoCard repo={repo} />
          ))}
          {}
      </div>
    </>
  );
};

export default Grid;
