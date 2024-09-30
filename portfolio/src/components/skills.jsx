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

function Skills() {
    return (
        <React.Fragment>
            <section className='skills-section'>
                <h1>My <i>Skills</i></h1>
                <div className='skills-lists'>
                    <div>
                        <img src={python} alt='python logo' />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={sql} alt='sql logo' />
                        <p>SQL</p>
                    </div>
                    <div>
                        <img src={excel} alt='excel logo' />
                        <p>Excel</p>
                    </div>
                    <div>
                        <img src={pandas} alt='pandas logo' />
                        <p>Pandas</p>
                    </div>
                    <div>
                        <img src={matplotlib} alt="matplotlib logo" />
                        <p>Matplotlib</p>
                    </div>
                    <div>
                        <img src={seaborn} alt="seaborn logo" />
                        <p>Seaborn</p>
                    </div>
                    <div>
                        <img src={scikit} alt="scikit learn logo" />
                        <p>Scikit Learn</p>
                    </div>
                    <div>
                        <img src={figma} alt="Figma logo" />
                        <p>Figma</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Skills;
