import React, { useEffect } from 'react'
 

const MainPage = () => {


    useEffect(() => {
        const tis = fetch('/question')
        console.log(tis)

    })
    
    return (
        <>
        <div>d</div>
        </>
    )
}

export default MainPage