import React from 'react'


import styles from './styles.module.css'
import { BsFilePost} from "react-icons/bs";
import { MdFavorite} from "react-icons/md";
import { FaCheck} from "react-icons/fa";
import { FaThumbsUp} from "react-icons/fa";
import { FaStar} from "react-icons/fa";

const ProfilePage = () => {

  return (
    <>
<div className={styles.profilePage}>

<div className={styles.container}>
	<div className={styles.innerwrap}>
		 <section className={`${styles.section1} ${styles.clearfix}`}>
			<div>
				<div className={`${styles.row} ${styles.grid} ${styles.clearfix}`}>
					<div className={`${styles.col2} ${styles.first}`}>
				 	<img src="http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg" alt="" />
						<h1>david beckham</h1>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
						<span>Follow</span>
					</div>
					<div className={`${styles.col2} ${styles.last}`}>
						<div className={`${styles.grid} ${styles.clearfix}`}>
							<div className={`${styles.col3} ${styles.first}`}>
								<h1>694</h1>
								<span>Following</span>
							</div>
							<div className={styles.col3}><h1>452</h1>
							<span>Likes</span></div>
							<div className={`${styles.col3} ${styles.last}`}><h1>1207</h1>
							<span>Bookmarks</span></div>
						</div>
					</div>
					</div>
				<div className={`${styles.row} ${styles.clearfix}`}>
					<ul className={`${styles.row2tab} ${styles.clearfix}`}>
						<li><BsFilePost /> My posts </li>
						<li><MdFavorite/> My likes </li>
						<li><FaCheck /> Following </li>
						<li><FaThumbsUp/> Suggestions </li>
					</ul>
				</div>
			</div>
			<span className={styles.smalltri}>
				
			<FaStar />
			</span>
		</section> 
		<section className={`${styles.section2} ${styles.clearfix}`}>

		</section> 
	</div>
</div>	
</div>	

    </>
  )

}

export default ProfilePage