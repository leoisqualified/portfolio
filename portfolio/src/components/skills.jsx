import React from 'react';

/* import logos */
import excel from '../assets/img/excel.svg';
import matplotlib from '../assets/img/matplotlib.svg';
import python from '../assets/img/python.svg';
import scikit from '../assets/img/scikit.svg';
import sql from '../assets/img/sql.svg';
import seaborn from '../assets/img/seaborn.svg';

function Skills () {
    return (
        <React.Fragment>
            <section className='skills-section'>
                <h1>My Skills</h1>
                    <div className='skills-lists'>
                        <ul className='skills-list1'>
                            <img src={python} alt='python logo'/><li>Python</li>
                            <img src={sql} alt='sql logo'/><li>SQL</li>
                            <img src={excel} alt='excel logo'/><li>Excel</li>
                            <img src='#' alt='pandas logo'/><li>Pandas</li>
                        </ul>
                        <br />
                        <ul className='skills-list2'>
                            <img src={matplotlib} alt="matplotlib logo" /><li>Matplotlib</li>
                            <img src={seaborn} alt="seaborn logo" /><li>Seaborn</li>
                            <img src={scikit} alt="scikit learn" /><li>Scikit Learn</li>
                            <img src='#' alt="Figma" /><li>Figma</li>
                        </ul>
                    </div>       
            </section>
        </React.Fragment>
    )
}

export default Skills;