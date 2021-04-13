import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const MainPage = () => {


    return (
        <>
            <div>
                {/* TODO add the banner */}
                <div className={styles.banner} ></div>

                {/* Grid  for 2 */}
                <div className={styles.categories} >
                    {/* Flex for recent */}
                    <div className={styles.recentContainer} >
                    
                    
                    </div>
                    {/* Popular Topic */}
                    <div className={styles.topics} >
                    
                    
                    </div>
                    
                </div>
            
            
            </div>
  

        </>
    )
}

export default MainPage