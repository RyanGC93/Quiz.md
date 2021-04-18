import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../../../store/repo'
import RepoCard from '../RepoCard'
// Component => component Name

import styles from "./styles.module.css";

const Grid = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const repoList = useSelector((state) => {
    return Object.values(state.repo);
  })

  
  useEffect(() => {

    if (!user) return 
    if(!repoList[0]) dispatch(getRepos(user.id))
    if (!repoList) return
    
      // have to make a call based on the input 
  })
  console.log(repoList)
  if (!repoList[0]) return null

  return (
    <>
      <div className={styles.gridContainer} >
          {repoList.map((repo) => (
            <RepoCard repo={repo} />
          ))}
      </div>
    </>
  );
};

export default Grid;
