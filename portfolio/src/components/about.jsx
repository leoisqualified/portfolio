import React, { useState, useEffect } from 'react';

function About () {
    const titles = ['UI/UX Designer.','Data Analyst.', 'Data Scientist.']
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
            <h1 className='intro'>I'm a</h1><span className='rotating'>{titles[currentTitleIndex]}</span>
            <br />
            <article className='about-me'>
                My name is <b>Eleos Andy Adenutsi</b> I am passionate about
                <br />
                Data Analysis and Data Science. I am proficient in 
                <br />
                User Interface and User Experience, Data Manipulation 
                <br />
                and Building Machine Learning Models.  
            </article>
            <img src='#' className='profile-pic'/>
        </React.Fragment>
     );
}
 
export default About;
