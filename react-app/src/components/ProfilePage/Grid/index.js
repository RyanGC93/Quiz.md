import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../../../store/repo'
import RepoCard from '../RepoCard';
import { IoAddCircle } from "react-icons/io5";
import CreateRepoModal from "../../CreateRepoModal";
import { Modal } from "../../../context/Modal";


import styles from "./styles.module.css";

const Grid = () => {
	const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const repoList = useSelector((state) => {
    return Object.values(state.repo);
  })

  
  useEffect(() => {
    if (!user) return 
    // // let res= dispatch(getRepos(user.id))
    // if (!repoList) {
    //   // let res= dispatch(getRepos(user.id))
    // }
    
    (async () => {
      const data = await dispatch(getRepos(user.id))


   })();


    
  },[])
  return (
    <>
      {repoList[0] && (
      <div className={styles.gridContainer} >
          {repoList.map((repo) => (
            <RepoCard key={repo.repo_id} repo={repo} />
          ))}
      </div>

      )}
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
