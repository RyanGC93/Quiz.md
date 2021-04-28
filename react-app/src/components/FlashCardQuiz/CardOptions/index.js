import React from 'react';
import styles from './styles.module.css'
import { BsFillCaretLeftFill,BsFillCaretRightFill,BsFillHeartFill, BsFillPlayFill
} from "react-icons/bs";
import { MdFlip } from "react-icons/md";

const CardOptions = () => {

    return (
        <>
            <div className={styles.optionsContainer} >
                <div className={styles.cell}>
                    <div className={styles.cellTitle}>Like</div>
                    <BsFillHeartFill/>
                </div>
                <div className={styles.cell}>
                    <div className={styles.cellTitle}>Prev</div>
                    < BsFillCaretLeftFill />
                </div>

                <div className={styles.cell}>
                    <div className={styles.cellTitle}>Next</div>
                    <BsFillCaretRightFill />
                </div>
                <div className={styles.cell}>
                    <div className={styles.cellTitle}>Flip</div>
                    <MdFlip/>
                </div>

                <div className={styles.cell}>
                    <div className={styles.cellTitle}>Play</div>
                    <BsFillPlayFill/>
                </div>



            </div>
            {/* 
            show keyboard options
            
            */}



        </>
    )

}

export default CardOptions