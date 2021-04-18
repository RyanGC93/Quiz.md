import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../../../store/repo'
import RepoCard from '../RepoCard';
import { IoAddCircle } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import CreateRepoModal from "../../CreateRepoModal";
import { Modal } from "../../../context/Modal";

// Component => component Name

import styles from "./styles.module.css";

const Grid = () => {
  const history = useHistory();
	const [showModal, setShowModal] = useState(false);
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
      <div className={styles.addBtnContainer} >
						< IoAddCircle className={styles.addIcon} onClick={() => setShowModal(true)} />
					</div>
          {showModal && (
										<Modal onClose={() => setShowModal(false)}>
											<CreateRepoModal setShowModal={setShowModal} />
										</Modal>
									)}
    </>
  );
};

export default Grid;
