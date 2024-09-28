import React from 'react';

/* import logos */
import excel from '../assets/img/excel.svg';
import matplotlib from '../assets/img/matplotlib.svg';
import python from '../assets/img/python.svg';
import scikit from '../assets/img/scikit.svg';
import sql from '../assets/img/sql.svg';
import seaborn from '../assets/img/seaborn.svg';
import pandas from '../assets/img/pandas.svg';
import figma from '../assets/img/figma.svg';

function Skills () {
    return (
        <React.Fragment>
            <section className='skills-section'>
                <h1>My <i>Skills</i></h1>
                    <div className='skills-lists'>
                        <ul className='skills-list1'>
                            <li><img src={python} alt='python logo'/>Python</li>
                            <li><img src={sql} alt='sql logo'/>SQL</li>
                            <li><img src={excel} alt='excel logo'/>Excel</li>
                            <li><img src={pandas} alt='pandas logo'/>Pandas</li>
                        </ul>
                        <br />
                        <ul className='skills-list2'>
                            <li><img src={matplotlib} alt="matplotlib logo" />Matplotlib</li>
                            <li><img src={seaborn} alt="seaborn logo" />Seaborn</li>
                            <li><img src={scikit} alt="scikit learn" />Scikit Learn</li>
                            <li><img src={figma} alt="Figma" />Figma</li>
                        </ul>
                    </div>       
            </section>
        </React.Fragment>
    )
}

export default Skills;