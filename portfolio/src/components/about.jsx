import React, { useState, useEffect } from 'react';

function About () {
    const titles = ['UI/UX Designer','Data Analyst', 'Data Scientist']
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        //change the titles every 3 seconds
        const intervalId = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);}, 3000);

        return () =>
        clearInterval(intervalId);}, [titles.length]
    );
    
    return ( 
        <React.Fragment>
            <p1>
                Hi! I am a
            </p1> 
            <span className='rotating'>{titles[currentTitleIndex]}</span>
            
        </React.Fragment>
     );
}
 
export default About;
